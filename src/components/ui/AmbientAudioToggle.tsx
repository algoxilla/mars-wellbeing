"use client";

import React from "react";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { useAmbientAudio } from "@/context/AmbientAudioContext";

interface AmbientAudioToggleProps {
  className?: string;
  showText?: boolean;
  compact?: boolean;
}

export function AmbientAudioToggle({
  className = "",
  showText = false,
  compact = false,
}: AmbientAudioToggleProps) {
  const { enabled, isPlaying, isLoading, hasError, playbackBlocked, toggleAudio } =
    useAmbientAudio();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  let statusText = "Sound: On";
  let ariaLabel = "Toggle ambient sanctuary music";
  let titleText = "Ambient sanctuary music";

  if (mounted) {
    if (hasError) {
      statusText = "Sound unavailable";
      ariaLabel = "Ambient music unavailable. Click to retry";
      titleText = "Audio error. Click to retry playback.";
    } else if (playbackBlocked) {
      statusText = "Tap to Play";
      ariaLabel = "Browser restricted autoplay. Tap to enable ambient music";
      titleText = "Browser restricted autoplay. Tap to play ambient music.";
    } else if (isPlaying) {
      statusText = "Music: On";
      ariaLabel = "Mute ambient sanctuary music";
      titleText = "Ambient music is playing. Click to mute.";
    } else if (!enabled) {
      statusText = "Music: Off";
      ariaLabel = "Play ambient sanctuary music";
      titleText = "Ambient music is muted. Click to play.";
    } else if (isLoading) {
      statusText = "Loading...";
      ariaLabel = "Ambient music is loading";
      titleText = "Ambient music is loading...";
    }
  }

  const activePlaying = mounted && isPlaying;
  const activeBlocked = mounted && playbackBlocked;
  const activeLoading = mounted && isLoading;

  return (
    <button
      type="button"
      onClick={toggleAudio}
      aria-label={ariaLabel}
      aria-pressed={activePlaying}
      title={titleText}
      className={`group relative inline-flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer select-none rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F] ${
        compact
          ? "h-7 px-2 text-xs border border-[#D2D2D7]/80 hover:border-[#1D1D1F]"
          : "h-8 px-3 text-xs border border-[#D2D2D7]"
      } ${
        activePlaying
          ? "bg-[#1D1D1F] text-[#FFFFFF] border-[#1D1D1F]"
          : activeBlocked
          ? "bg-[#F5F5F7] text-[#D96C68] border-[#D96C68] animate-pulse"
          : "bg-[#FFFFFF] text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
      } ${className}`}
    >
      {activeLoading && !activePlaying ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#1D1D1F] shrink-0" aria-hidden="true" />
      ) : activePlaying ? (
        <span className="inline-flex items-center gap-1.5 shrink-0" aria-hidden="true">
          {/* Apple-style minimalist 3-bar sound wave */}
          <span className="flex items-end gap-[2px] h-3 w-3 shrink-0">
            <span className="w-[1.5px] bg-[#FFFFFF] rounded-full animate-wave-1 h-full origin-bottom" />
            <span className="w-[1.5px] bg-[#FFFFFF] rounded-full animate-wave-2 h-2/3 origin-bottom" />
            <span className="w-[1.5px] bg-[#FFFFFF] rounded-full animate-wave-3 h-4/5 origin-bottom" />
          </span>
          <Volume2 className="w-3.5 h-3.5 text-[#FFFFFF]" />
        </span>
      ) : activeBlocked ? (
        <span className="inline-flex items-center gap-1 shrink-0" aria-hidden="true">
          <Volume2 className="w-3.5 h-3.5 text-[#D96C68]" />
          <span className="text-[10px] font-medium text-[#D96C68]">Play</span>
        </span>
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-[#6E6E73] group-hover:text-[#1D1D1F] shrink-0" aria-hidden="true" />
      )}

      {showText && !activeBlocked && (
        <span className="ml-1.5 text-[11px] font-medium whitespace-nowrap">
          {statusText}
        </span>
      )}
    </button>
  );
}
