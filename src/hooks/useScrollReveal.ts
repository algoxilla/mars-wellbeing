"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", triggerOnce = true } = options;
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If reduced motion is preferred, reveal immediately
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setIsVisible(true);
        return;
      }
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref: elementRef, isVisible };
}
