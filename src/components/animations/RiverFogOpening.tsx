"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Compass, X, RotateCcw } from "lucide-react";

type Scene = "atmosphere" | "slogan" | "transition" | "settled";

export function RiverFogOpening() {
  const [scene, setScene] = useState<Scene>("atmosphere");
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const startSequence = useCallback(() => {
    clearTimers();
    setScene("atmosphere");

    // Scene B: Slogan Reveal (Text Masking & Stagger) at 650ms
    const t1 = setTimeout(() => {
      setScene("slogan");
    }, 650);

    // Scene C: Nature Transition (Mist clears, river shimmers) at 2600ms
    const t2 = setTimeout(() => {
      setScene("transition");
    }, 2600);

    // Scene D: Landing-Page Hero Settled at 3900ms
    const t3 = setTimeout(() => {
      setScene("settled");
      try {
        sessionStorage.setItem("mars_has_seen_opening", "true");
      } catch (_) {}
    }, 3900);

    timersRef.current = [t1, t2, t3];
  }, [clearTimers]);

  const handleSkip = useCallback(() => {
    clearTimers();
    setScene("settled");
    try {
      sessionStorage.setItem("mars_has_seen_opening", "true");
    } catch (_) {}
  }, [clearTimers]);

  const handleReplay = useCallback(() => {
    startSequence();
  }, [startSequence]);

  useEffect(() => {
    setHasMounted(true);

    // Respect reduced-motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      setScene("settled");
      return;
    }

    // Check session policy for returning visitors
    let hasSeen = false;
    try {
      hasSeen = sessionStorage.getItem("mars_has_seen_opening") === "true";
    } catch (_) {}

    if (hasSeen) {
      setScene("settled");
    } else {
      startSequence();
    }

    // Keyboard support: Escape key skips immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimers();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [startSequence, handleSkip, clearTimers]);

  const isSloganRevealed = scene !== "atmosphere";
  const isSettled = scene === "settled";

  return (
    <section
      aria-label="Welcome to MARS Wellbeing"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#F5F0E7] border-b border-[#E2DDD5]"
    >
      {/* 1. Dawn Sky & Morning Light Radial Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(244,211,201,0.35)_0%,rgba(235,241,237,0.4)_50%,transparent_85%)]"
      />

      {/* 2. Topographic & Natural Landscape Layers (SVG) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            {/* Soft River Water Gradient: Deep Forest Teal -> Luminous Sage -> Deep Teal -> Dawn Terracotta */}
            <linearGradient id="naturalRiverGrad" x1="15%" y1="0%" x2="85%" y2="100%">
              <stop offset="0%" stopColor="#4A6E5D" stopOpacity="0.35" />
              <stop offset="25%" stopColor="#6E8E7E" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#23453D" stopOpacity="0.9" />
              <stop offset="88%" stopColor="#1D3033" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C26D53" stopOpacity="0.75" />
            </linearGradient>

            {/* Sunlight Reflection along river crest */}
            <linearGradient id="riverSunHighlight" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#EAF1ED" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0.4" />
            </linearGradient>

            {/* Fog Blur Filters */}
            <filter id="heavyFogBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="45" />
            </filter>
            <filter id="gentleMistBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="24" />
            </filter>
          </defs>

          {/* Distant Mountain Silhouettes in Soft Sage Mist */}
          <path
            d="M-50,260 C240,190 480,240 720,180 C980,120 1220,210 1500,160 L1500,400 L-50,400 Z"
            fill="#9EB5AA"
            fillOpacity={scene === "atmosphere" ? "0.22" : "0.14"}
            className="transition-all duration-1000 ease-out"
          />
          <path
            d="M-50,310 C180,230 460,280 760,220 C1060,160 1280,270 1500,230 L1500,450 L-50,450 Z"
            fill="#85A394"
            fillOpacity={scene === "atmosphere" ? "0.26" : "0.18"}
            className="transition-all duration-1000 ease-out"
          />

          {/* Natural River Flow: Originates in distant upper valley, wraps elegantly around the text base */}
          {/* Subtle riverbed shadow */}
          <path
            d="M 680,170 C 720,240 580,310 420,380 C 220,470 120,590 180,720 C 220,800 380,860 620,840 C 920,810 1180,880 1520,820"
            stroke="#DCD5C9"
            strokeWidth="36"
            strokeLinecap="round"
            className="opacity-50"
          />

          {/* Main living river ribbon */}
          <path
            d="M 680,170 C 720,240 580,310 420,380 C 220,470 120,590 180,720 C 220,800 380,860 620,840 C 920,810 1180,880 1520,820"
            stroke="url(#naturalRiverGrad)"
            strokeWidth="14"
            strokeLinecap="round"
            className={!isSettled && !isReducedMotion ? "animate-river-flow" : "opacity-85"}
          />

          {/* Sunlight shimmer line on water */}
          <path
            d="M 680,170 C 720,240 580,310 420,380 C 220,470 120,590 180,720 C 220,800 380,860 620,840 C 920,810 1180,880 1520,820"
            stroke="url(#riverSunHighlight)"
            strokeWidth="2.5"
            strokeDasharray="16 20"
            strokeLinecap="round"
            className={isSettled ? "opacity-85 transition-opacity duration-1000" : "opacity-45 transition-opacity duration-1000"}
          />

          {/* Morning Fog & Mist Banks (Gradually Parting in Scene C & D) */}
          <g filter="url(#heavyFogBlur)" className="pointer-events-none">
            {/* Mist Bank Left (Valleys) */}
            <ellipse
              cx={isSettled ? "280" : "380"}
              cy="460"
              rx="460"
              ry="180"
              fill="#FAF7F2"
              fillOpacity={isSettled ? "0.18" : scene === "atmosphere" ? "0.9" : "0.75"}
              className={!isSettled && !isReducedMotion ? "animate-fog-left transition-all duration-1200 ease-out" : "opacity-20 transition-all duration-1200 ease-out"}
            />
            {/* Mist Bank Right (Dawn Warmth) */}
            <ellipse
              cx={isSettled ? "1180" : "1080"}
              cy="380"
              rx="520"
              ry="210"
              fill="#F4D3C9"
              fillOpacity={isSettled ? "0.14" : scene === "atmosphere" ? "0.75" : "0.6"}
              className={!isSettled && !isReducedMotion ? "animate-fog-right transition-all duration-1200 ease-out" : "opacity-15 transition-all duration-1200 ease-out"}
            />
          </g>

          {/* Lower ground mist */}
          <ellipse
            cx="720"
            cy="760"
            rx="680"
            ry="140"
            fill="#EAF1ED"
            fillOpacity={isSettled ? "0.22" : "0.7"}
            filter="url(#gentleMistBlur)"
            className="transition-all duration-1200 ease-out"
          />
        </svg>
      </div>

      {/* 3. Opening Sequence Dissolve Screen (Atmospheric Dawn Veil) */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[#F5F0E7] pointer-events-none transition-opacity duration-1000 ease-out ${
          scene === "atmosphere" && !isReducedMotion ? "opacity-50" : "opacity-0"
        }`}
      />

      {/* 4. Non-intrusive Ambient Controls: Skip Intro (during playback) / Replay (when settled) */}
      <div className="absolute top-5 right-5 sm:top-7 sm:right-8 z-30 flex items-center gap-2">
        {hasMounted && !isReducedMotion && (
          !isSettled ? (
            <button
              type="button"
              onClick={handleSkip}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#1D3033] bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] border border-[#E2DDD5] shadow-xs rounded-xs transition-all backdrop-blur-xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#6E8E7E]"
              aria-label="Skip intro"
            >
              <span>Skip intro</span>
              <X className="w-3.5 h-3.5 text-[#6E8E7E]" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReplay}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#3D5255] hover:text-[#1D3033] bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs transition-all shadow-2xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#6E8E7E]"
              title="Replay atmosphere"
              aria-label="Replay atmosphere"
            >
              <RotateCcw className="w-3 h-3 text-[#6E8E7E]" />
              <span className="hidden sm:inline">Replay atmosphere</span>
            </button>
          )
        )}
      </div>

      {/* 5. Main Hero & Slogan Composition */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Editorial Eyebrow Tag: Docks smoothly when settled */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-[#1D3033] bg-[#FAF7F2]/90 border border-[#E2DDD5] shadow-2xs backdrop-blur-xs transition-all duration-700 ${
            isSettled || isReducedMotion
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#6E8E7E] animate-pulse" aria-hidden="true" />
          <span>Bengaluru, India — Initial Individual & Cohort Spaces</span>
        </div>

        {/* Primary Slogan with Precision Overflow-Hidden Clipping Masks */}
        <div className="space-y-3 max-w-5xl mx-auto w-full">
          {/* Desktop & Tablet Line Composition (sm and up) */}
          <div className="hidden sm:block">
            <h1 className="font-display font-bold tracking-tight uppercase text-[#1D3033]">
              <span className="block overflow-hidden py-1 sm:py-2">
                <span
                  className={`block text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[104px] leading-[0.92] transition-all duration-1000 ease-cinematic ${
                    isSloganRevealed || isReducedMotion
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[115%] opacity-0"
                  }`}
                >
                  BRINGING PEOPLE
                </span>
              </span>
              <span className="block overflow-hidden py-1 sm:py-2">
                <span
                  className={`block text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[104px] leading-[0.92] transition-all duration-1000 delay-150 ease-cinematic ${
                    isSloganRevealed || isReducedMotion
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[115%] opacity-0"
                  }`}
                >
                  BACK TO THEMSELVES
                </span>
              </span>
            </h1>
          </div>

          {/* Mobile Line Composition (under 640px) — Intentionally composed for small viewports */}
          <div className="block sm:hidden">
            <h1 className="font-display font-bold tracking-tight uppercase text-[#1D3033]">
              <span className="block overflow-hidden py-0.5">
                <span
                  className={`block text-[38px] xs:text-[42px] leading-[0.94] transition-all duration-1000 ease-cinematic ${
                    isSloganRevealed || isReducedMotion
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[115%] opacity-0"
                  }`}
                >
                  BRINGING
                </span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <span
                  className={`block text-[38px] xs:text-[42px] leading-[0.94] transition-all duration-1000 delay-100 ease-cinematic ${
                    isSloganRevealed || isReducedMotion
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[115%] opacity-0"
                  }`}
                >
                  PEOPLE BACK
                </span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <span
                  className={`block text-[38px] xs:text-[42px] leading-[0.94] transition-all duration-1000 delay-200 ease-cinematic ${
                    isSloganRevealed || isReducedMotion
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[115%] opacity-0"
                  }`}
                >
                  TO THEMSELVES
                </span>
              </span>
            </h1>
          </div>

          {/* Secondary Line: Inner Balance. Real Connection. */}
          <div className="overflow-hidden pt-2 sm:pt-4">
            <p
              className={`font-sans text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] sm:tracking-[0.32em] uppercase text-[#4A6E5D] transition-all duration-1000 delay-300 ease-out ${
                isSloganRevealed || isReducedMotion
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              Inner Balance. Real Connection.
            </p>
          </div>
        </div>

        {/* Supporting Narrative — Carefully spaced so river path flows cleanly beneath */}
        <p
          className={`mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-[#3D5255] font-normal leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isSettled || isReducedMotion
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3 pointer-events-none"
          }`}
        >
          An intentional mental wellbeing sanctuary rooted in Bengaluru. Uniting <strong>Nova Hikari</strong>—a slow ten-stage guided journey—with intimate community circles and qualified, verified professional care.
        </p>

        {/* Clear Action Hierarchy — Settled Landing Buttons */}
        <div
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto transition-all duration-700 delay-200 ${
            isSettled || isReducedMotion
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <Link
            href="/nova-hikari"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] active:scale-[0.99] border border-[#1D3033] transition-all shadow-xs"
          >
            <span>Begin Nova Hikari</span>
            <ArrowRight className="w-4 h-4 text-[#8FA89B]" />
          </Link>

          <Link
            href="/professionals"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#FAF7F2] text-[#1D3033] hover:bg-[#ECE5DA] border border-[#E2DDD5] transition-all"
          >
            <Compass className="w-4 h-4 text-[#6E8E7E]" />
            <span>Browse Directory</span>
          </Link>

          <Link
            href="/early-access"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D] underline underline-offset-4 transition-colors"
          >
            Join Early Access →
          </Link>
        </div>

        {/* Quiet Reassurance Indicators */}
        <div
          className={`mt-12 sm:mt-14 pt-8 border-t border-[#E2DDD5]/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-3xl w-full transition-all duration-700 delay-300 ${
            isSettled || isReducedMotion
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#6E8E7E]">Self-Guided</span>
            <p className="text-xs text-[#1D3033] font-medium">Nova Hikari (10 Stages)</p>
            <p className="text-[11px] text-[#3D5255]/80">Slow, private, unhurried</p>
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#6E8E7E]">Community</span>
            <p className="text-xs text-[#1D3033] font-medium">Bengaluru Circles</p>
            <p className="text-[11px] text-[#3D5255]/80">Small, facilitated gatherings</p>
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#6E8E7E]">Clinical Care</span>
            <p className="text-xs text-[#1D3033] font-medium">Qualified Directory</p>
            <p className="text-[11px] text-[#3D5255]/80">Transparent credentials</p>
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C26D53]">Safety Boundaries</span>
            <p className="text-xs text-[#1D3033] font-medium">Crisis Escalation</p>
            <p className="text-[11px] text-[#3D5255]/80">24/7 National helplines</p>
          </div>
        </div>
      </div>
    </section>
  );
}
