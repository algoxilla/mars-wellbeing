"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollProgressOptions {
  clamp?: boolean;
}

export function useScrollProgress<T extends HTMLElement = HTMLDivElement>(
  options: ScrollProgressOptions = {}
) {
  const { clamp = true } = options;
  const elementRef = useRef<T | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [entryProgress, setEntryProgress] = useState<number>(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setProgress(1);
      setEntryProgress(1);
      return;
    }

    const calculateProgress = () => {
      const el = elementRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Overall progress through entire viewport traversal:
      // Starts when top of element hits bottom of viewport (rect.top = windowHeight)
      // Ends when bottom of element leaves top of viewport (rect.bottom = 0)
      const totalDistance = windowHeight + rect.height;
      const currentScroll = windowHeight - rect.top;
      let rawProgress = totalDistance > 0 ? currentScroll / totalDistance : 0;

      // Entry progress: from entering bottom of viewport (rect.top = windowHeight)
      // until element center reaches middle of viewport (rect.top + rect.height/2 = windowHeight/2)
      const entryDistance = windowHeight * 0.75;
      let rawEntry = entryDistance > 0 ? (windowHeight - rect.top) / entryDistance : 0;

      if (clamp) {
        rawProgress = Math.max(0, Math.min(1, rawProgress));
        rawEntry = Math.max(0, Math.min(1, rawEntry));
      }

      setProgress(rawProgress);
      setEntryProgress(rawEntry);
      rafIdRef.current = null;
    };

    const handleScroll = () => {
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(calculateProgress);
      }
    };

    calculateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [clamp]);

  return { ref: elementRef, progress, entryProgress };
}
