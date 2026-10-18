"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

export interface AmbientAudioState {
  enabled: boolean;            // Visitor's intended preference (saved in localStorage, default: true)
  isPlaying: boolean;          // True only when media is genuinely playing
  isLoading: boolean;          // Buffering or loading media
  hasError: boolean;           // True if media error occurred
  playbackBlocked: boolean;    // True if browser blocked autoplay and needs interaction
  isDocumentVisible: boolean;  // Reflects !document.hidden
  isDucked: boolean;           // True if breathing pacer or exercise has ducked volume
  volume: number;              // Current audible volume (0 to 0.32)
}

interface AmbientAudioContextType extends AmbientAudioState {
  toggleAudio: () => void;
  enableAudio: () => void;
  disableAudio: () => void;
  duckAudio: (ducked: boolean) => void;
  setAudioVolume: (volume: number) => void;
}

const DEFAULT_VOLUME = 0.32;
const DUCKED_VOLUME = 0.10;
const STORAGE_KEY = "mars_ambient_sound_enabled";

const AmbientAudioContext = createContext<AmbientAudioContextType>({
  enabled: true,
  isPlaying: false,
  isLoading: false,
  hasError: false,
  playbackBlocked: false,
  isDocumentVisible: true,
  isDucked: false,
  volume: 0,
  toggleAudio: () => {},
  enableAudio: () => {},
  disableAudio: () => {},
  duckAudio: () => {},
  setAudioVolume: () => {},
});

export function AmbientAudioProvider({ children }: { children: React.ReactNode }) {
  // State machine variables
  const [enabled, setEnabled] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [playbackBlocked, setPlaybackBlocked] = useState<boolean>(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState<boolean>(true);
  const [isDucked, setIsDucked] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0);

  // References for strict lifecycle management
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeAnimRef = useRef<number | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTokenRef = useRef<number>(0); // Incremented on every new fade command to invalidate old callbacks
  const enabledRef = useRef<boolean>(true);
  const isPlayingRef = useRef<boolean>(false);
  const isDuckedRef = useRef<boolean>(false);
  const pausedDueToHiddenRef = useRef<boolean>(false);
  const globalGestureAttachedRef = useRef<boolean>(false);

  // Keep refs in sync with state for callbacks
  useEffect(() => {
    enabledRef.current = enabled;
  }, [enabled]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    isDuckedRef.current = isDucked;
  }, [isDucked]);

  // Expose global debug object for automated tests & inspection
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as { __mars_audio_state: AmbientAudioState & { audioEl: HTMLAudioElement | null } }).__mars_audio_state = {
        enabled,
        isPlaying,
        isLoading,
        hasError,
        playbackBlocked,
        isDocumentVisible,
        isDucked,
        volume,
        audioEl: audioRef.current,
      };
    }
  }, [enabled, isPlaying, isLoading, hasError, playbackBlocked, isDocumentVisible, isDucked, volume]);

  // Robust volume fade controller using requestAnimationFrame with safety timeout
  const fadeTo = useCallback(
    (targetVol: number, durationMs: number = 600, onFinished?: () => void) => {
      const audio = audioRef.current;
      if (!audio) return;

      // Invalidate any previously running animation
      fadeTokenRef.current += 1;
      const currentToken = fadeTokenRef.current;

      if (fadeAnimRef.current) {
        cancelAnimationFrame(fadeAnimRef.current);
        fadeAnimRef.current = null;
      }
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = null;
      }

      const clampedTarget = Math.max(0, Math.min(1, targetVol));

      if (durationMs <= 0) {
        audio.volume = clampedTarget;
        setVolumeState(clampedTarget);
        if (onFinished) onFinished();
        return;
      }

      const startVol = audio.volume;
      const startTime = performance.now();

      // Safety timeout: guarantees target volume is reached even if rAF is throttled in background tabs
      fadeTimeoutRef.current = setTimeout(() => {
        if (fadeTokenRef.current === currentToken && audioRef.current) {
          audioRef.current.volume = clampedTarget;
          setVolumeState(clampedTarget);
          if (onFinished) onFinished();
        }
      }, durationMs + 80);

      const step = (currentTime: number) => {
        if (fadeTokenRef.current !== currentToken || !audioRef.current) return;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // Smooth sine-based ease in/out
        const ease = 0.5 - 0.5 * Math.cos(progress * Math.PI);
        const currentVol = startVol + (clampedTarget - startVol) * ease;
        const clamped = Math.max(0, Math.min(1, currentVol));

        audioRef.current.volume = clamped;
        setVolumeState(clamped);

        if (progress < 1) {
          fadeAnimRef.current = requestAnimationFrame(step);
        } else {
          if (fadeTimeoutRef.current) {
            clearTimeout(fadeTimeoutRef.current);
            fadeTimeoutRef.current = null;
          }
          audioRef.current.volume = clampedTarget;
          setVolumeState(clampedTarget);
          fadeAnimRef.current = null;
          if (onFinished && fadeTokenRef.current === currentToken) {
            onFinished();
          }
        }
      };

      fadeAnimRef.current = requestAnimationFrame(step);
    },
    []
  );

  // Play audio safely and fade in
  const startPlayback = useCallback(
    (fadeDuration: number = 800) => {
      const audio = audioRef.current;
      if (!audio || !enabledRef.current) return;

      setIsLoading(true);
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Check if visitor disabled sound during promise resolution
            if (!enabledRef.current) {
              audio.pause();
              audio.volume = 0;
              setVolumeState(0);
              setIsPlaying(false);
              setIsLoading(false);
              return;
            }

            setIsPlaying(true);
            setPlaybackBlocked(false);
            setIsLoading(false);

            const target = isDuckedRef.current ? DUCKED_VOLUME : DEFAULT_VOLUME;
            fadeTo(target, fadeDuration);
          })
          .catch((err) => {
            setIsLoading(false);
            setIsPlaying(false);

            // Browser blocked autoplay due to user gesture requirement
            if (err.name === "NotAllowedError" || err.message?.includes("interact")) {
              if (enabledRef.current) {
                setPlaybackBlocked(true);
              }
            } else {
              console.warn("Audio playback issue:", err);
            }
          });
      }
    },
    [fadeTo]
  );

  // Stop playback cleanly and pause
  const stopPlayback = useCallback(
    (fadeDuration: number = 200) => {
      const audio = audioRef.current;
      if (!audio) return;

      if (fadeDuration <= 0) {
        fadeTo(0, 0, () => {
          if (audioRef.current) {
            audioRef.current.pause();
          }
        });
        setIsPlaying(false);
        setIsLoading(false);
      } else {
        fadeTo(0, fadeDuration, () => {
          if (audioRef.current && !enabledRef.current) {
            audioRef.current.pause();
          }
        });
        setIsPlaying(false);
        setIsLoading(false);
      }
    },
    [fadeTo]
  );

  // Global user gesture listener: if autoplay was blocked, any click/tap smoothly starts audio
  const attachGlobalGestureListener = useCallback(() => {
    if (globalGestureAttachedRef.current || typeof window === "undefined") return;
    globalGestureAttachedRef.current = true;

    const handleUserGesture = () => {
      window.removeEventListener("pointerdown", handleUserGesture);
      window.removeEventListener("keydown", handleUserGesture);
      window.removeEventListener("touchstart", handleUserGesture);
      globalGestureAttachedRef.current = false;

      // If preference is still ON and audio is not playing, start playback
      if (enabledRef.current && !isPlayingRef.current) {
        setPlaybackBlocked(false);
        startPlayback(800);
      }
    };

    window.addEventListener("pointerdown", handleUserGesture, { once: true, passive: true });
    window.addEventListener("keydown", handleUserGesture, { once: true, passive: true });
    window.addEventListener("touchstart", handleUserGesture, { once: true, passive: true });
  }, [startPlayback]);

  // Core effect: single audio element instantiated once for the entire session
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Resolve user preference: Default ON for fresh visitors
    let initialEnabled = true;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "false") {
        initialEnabled = false;
      } else if (stored === "true") {
        initialEnabled = true;
      } else {
        // Fresh visit with no stored preference -> default to true (ON)
        initialEnabled = true;
      }
    } catch (_) {
      initialEnabled = true;
    }

    setEnabled(initialEnabled);
    enabledRef.current = initialEnabled;

    // 2. Create single HTMLAudioElement
    const audio = new Audio();
    audio.src = "/audio/mars.mp4";
    audio.loop = true;
    audio.preload = "metadata";
    audio.volume = 0;
    audioRef.current = audio;

    const handleCanPlay = () => setIsLoading(false);
    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => {
      setIsPlaying(true);
      setIsLoading(false);
      setPlaybackBlocked(false);
    };
    const handlePause = () => {
      setIsPlaying(false);
    };
    const handleError = (e: Event) => {
      console.warn("Audio element error:", e);
      setHasError(true);
      setIsLoading(false);
      setIsPlaying(false);
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("waiting", handleWaiting);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);

    // 3. Tab visibility lifecycle
    const handleVisibilityChange = () => {
      const isVisible = !document.hidden;
      setIsDocumentVisible(isVisible);

      if (!audioRef.current) return;

      if (!isVisible) {
        // Document hidden: gently pause without altering user preference
        if (isPlayingRef.current) {
          pausedDueToHiddenRef.current = true;
          fadeTo(0, 200, () => {
            if (document.hidden && audioRef.current) {
              audioRef.current.pause();
            }
          });
        }
      } else {
        // Document visible again: only resume if it was paused due to hidden AND user hasn't turned sound OFF
        if (enabledRef.current && pausedDueToHiddenRef.current) {
          pausedDueToHiddenRef.current = false;
          startPlayback(800);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 4. Initial autoplay attempt if preference is ON
    if (initialEnabled) {
      setIsLoading(true);
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setPlaybackBlocked(false);
            setIsLoading(false);
            fadeTo(DEFAULT_VOLUME, 1000);
          })
          .catch((err) => {
            setIsLoading(false);
            setIsPlaying(false);
            if (err.name === "NotAllowedError" || err.message?.includes("interact")) {
              setPlaybackBlocked(true);
              attachGlobalGestureListener();
            }
          });
      }
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("waiting", handleWaiting);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);

      if (fadeAnimRef.current) {
        cancelAnimationFrame(fadeAnimRef.current);
      }
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
      audio.pause();
      audio.src = "";
    };
  }, [attachGlobalGestureListener, fadeTo, startPlayback]);

  // Turn audio ON explicitly
  const enableAudio = useCallback(() => {
    setEnabled(true);
    enabledRef.current = true;
    setPlaybackBlocked(false);
    setHasError(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch (_) {}

    const audio = audioRef.current;
    if (!audio) return;

    if (fadeAnimRef.current) {
      cancelAnimationFrame(fadeAnimRef.current);
      fadeAnimRef.current = null;
    }
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = null;
    }
    fadeTokenRef.current += 1;

    const target = isDuckedRef.current ? DUCKED_VOLUME : DEFAULT_VOLUME;

    setIsLoading(true);
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (!enabledRef.current) {
            audio.pause();
            audio.volume = 0;
            setVolumeState(0);
            setIsPlaying(false);
            setIsLoading(false);
            return;
          }

          setIsPlaying(true);
          setIsLoading(false);
          setPlaybackBlocked(false);
          fadeTo(target, 500);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsPlaying(false);
          if (err.name === "NotAllowedError" || err.message?.includes("interact")) {
            setPlaybackBlocked(true);
          } else {
            console.warn("Audio playback issue:", err);
          }
        });
    }
  }, [fadeTo]);

  // Turn audio OFF explicitly
  const disableAudio = useCallback(() => {
    setEnabled(false);
    enabledRef.current = false;
    setPlaybackBlocked(false);
    pausedDueToHiddenRef.current = false;

    try {
      localStorage.setItem(STORAGE_KEY, "false");
    } catch (_) {}

    stopPlayback(150);
  }, [stopPlayback]);

  // Toggle audio
  const toggleAudio = useCallback(() => {
    if (enabledRef.current && isPlayingRef.current) {
      disableAudio();
    } else {
      enableAudio();
    }
  }, [disableAudio, enableAudio]);

  // Duck audio during exercises (e.g. Breathing Pacer)
  const duckAudio = useCallback(
    (ducked: boolean) => {
      setIsDucked(ducked);
      isDuckedRef.current = ducked;

      // Only adjust volume if enabled and currently playing
      if (enabledRef.current && isPlayingRef.current && audioRef.current) {
        const target = ducked ? DUCKED_VOLUME : DEFAULT_VOLUME;
        fadeTo(target, 450);
      }
    },
    [fadeTo]
  );

  // Set explicit volume level
  const setAudioVolume = useCallback(
    (vol: number) => {
      const clamped = Math.max(0, Math.min(1, vol));
      if (enabledRef.current && isPlayingRef.current && audioRef.current) {
        fadeTo(clamped, 300);
      }
    },
    [fadeTo]
  );

  return (
    <AmbientAudioContext.Provider
      value={{
        enabled,
        isPlaying,
        isLoading,
        hasError,
        playbackBlocked,
        isDocumentVisible,
        isDucked,
        volume,
        toggleAudio,
        enableAudio,
        disableAudio,
        duckAudio,
        setAudioVolume,
      }}
    >
      {children}
    </AmbientAudioContext.Provider>
  );
}

export function useAmbientAudio() {
  return useContext(AmbientAudioContext);
}
