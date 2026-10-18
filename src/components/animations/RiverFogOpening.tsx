"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Compass, X, RotateCcw, Phone, Sparkles } from "lucide-react";

type IntroScene =
  | "fog" // Scene A: Full-screen atmospheric fog (0.0s - 1.4s)
  | "mountains" // Scene B: Fog spreads outward, revealing mountains (1.4s - 3.2s)
  | "doors-closed" // Scene C: Mountains dissolve, revealing closed sanctuary doors (3.2s - 4.5s)
  | "doors-opening" // Scene D: Double doors slide open to left and right (4.5s - 6.0s)
  | "settled"; // Scene E: Fully interactive homepage (6.0s+)

export function RiverFogOpening() {
  const [introScene, setIntroScene] = useState<IntroScene>("fog");
  const [isIntroActive, setIsIntroActive] = useState<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const startSequence = useCallback(() => {
    clearTimers();
    setIsIntroActive(true);
    setIntroScene("fog");

    // Scene B: Fog spreads outward, revealing mountains (at 1400ms)
    const t1 = setTimeout(() => {
      setIntroScene("mountains");
    }, 1400);

    // Scene C: Mountains dissolve to reveal closed double doors (at 3200ms)
    const t2 = setTimeout(() => {
      setIntroScene("doors-closed");
    }, 3200);

    // Scene D: Double doors slide open to left and right (at 4500ms)
    const t3 = setTimeout(() => {
      setIntroScene("doors-opening");
    }, 4500);

    // Scene E: Intro complete, overlay dismissed (at 6000ms)
    const t4 = setTimeout(() => {
      setIntroScene("settled");
      setIsIntroActive(false);
      try {
        sessionStorage.setItem("mars_has_seen_opening", "true");
      } catch (_) {}
    }, 6000);

    timersRef.current = [t1, t2, t3, t4];
  }, [clearTimers]);

  const handleSkip = useCallback(() => {
    clearTimers();
    setIntroScene("doors-opening");
    const t = setTimeout(() => {
      setIntroScene("settled");
      setIsIntroActive(false);
      try {
        sessionStorage.setItem("mars_has_seen_opening", "true");
      } catch (_) {}
    }, 350);
    timersRef.current = [t];
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
      setIsIntroActive(false);
      setIntroScene("settled");
      return;
    }

    // Check session policy for returning visitors or explicit skip query parameter
    let hasSeen = false;
    try {
      if (typeof window !== "undefined" && window.location.search.includes("skip=true")) {
        hasSeen = true;
      } else {
        hasSeen = sessionStorage.getItem("mars_has_seen_opening") === "true";
      }
    } catch (_) {}

    if (hasSeen) {
      setIsIntroActive(false);
      setIntroScene("settled");
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

  const isDoorsOpen = introScene === "doors-opening" || introScene === "settled";
  const hideMountains = introScene === "doors-closed" || isDoorsOpen;

  return (
    <section
      id="hero-arrival"
      aria-label="Welcome to MARS Wellbeing"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-transparent border-b border-[#E3E9DE] text-[#1B2926]"
    >
      {/* =========================================================================
          PART 1: THE LIVING HOMEPAGE HERO (Rendered Directly Behind the Doors)
          ========================================================================= */}

      {/* 1. Atmospheric Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(227,233,222,0.5)_0%,transparent_80%)]"
      />

      {/* 3. Replay Atmosphere Button (Available when settled) */}
      <div className="absolute top-5 right-5 sm:top-7 sm:right-8 z-30 flex items-center gap-2">
        {hasMounted && !isIntroActive && !isReducedMotion && (
          <button
            type="button"
            onClick={handleReplay}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#153D35] hover:text-[#1B2926] bg-[#E3E9DE]/80 hover:bg-[#E3E9DE] border border-[#A8B9A2]/60 rounded-full transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#153D35]"
            title="Replay opening experience"
            aria-label="Replay atmosphere"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#153D35]" />
            <span className="hidden sm:inline">Replay atmosphere</span>
          </button>
        )}
      </div>

      {/* 4. Main Hero Typography & Action Content — Founder Copy & High-Contrast Sanctuary Card */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        <div className="w-full bg-[#FAF7F2]/90 backdrop-blur-md border border-[#A8B9A2]/50 shadow-2xl rounded-3xl p-6 sm:p-12 md:p-14 flex flex-col items-center transition-all duration-700">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#E3E9DE]/80 border border-[#A8B9A2]/50 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A15A]" />
            <span>A SPACE TO PAUSE &bull; A PLACE TO CONNECT</span>
          </div>

          {/* Primary Headline */}
          <div className="space-y-4 max-w-3xl mx-auto w-full">
            <h1 className="font-display font-bold tracking-tight text-[#153D35] text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08]">
              Life moves fast. Make space for yourself.
            </h1>
          </div>

          {/* Clear Platform Explanation */}
          <p className="mt-5 sm:mt-7 text-base sm:text-lg text-[#1B2926]/90 font-light leading-relaxed max-w-2xl mx-auto">
            MARS is an Indo-Japanese-inspired wellbeing sanctuary bringing together immersive guided reflection (Nova Hikari), facilitated community circles, and pathways to certified clinical healthcare.
          </p>

          {/* Action CTAs: Explore Your Journey & Talk to Our Team */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="#nova-hikari"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold uppercase tracking-wider bg-[#153D35] text-[#F5F0E7] hover:bg-[#1B2926] active:scale-[0.98] rounded-full transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#153D35]"
            >
              <span>Explore Your Journey</span>
              <ArrowRight className="w-4 h-4 text-[#C9A15A] transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:+919006219668"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold tracking-wide bg-[#FFFFFF] hover:bg-[#F5F0E7] text-[#153D35] border border-[#A8B9A2]/60 rounded-full transition-all shadow-xs group"
            >
              <Phone className="w-4 h-4 text-[#C9A15A] group-hover:scale-110 transition-transform" />
              <span>Talk to Our Team</span>
              <span className="text-xs text-[#65716A] hidden sm:inline font-mono">(&#43;91 90062 19668)</span>
            </a>
          </div>

          {/* Trust and Feature Proof Badges */}
          <div className="mt-8 pt-6 border-t border-[#A8B9A2]/30 w-full flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#65716A]">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#153D35]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15A]" />
              10-Stage Guided Journey
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-[#153D35]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15A]" />
              Facilitated Bengaluru Circles
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-[#153D35]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15A]" />
              Partnered with Highland Care
            </span>
            <Link
              href="#early-access"
              className="text-[#C9A15A] hover:underline font-semibold ml-1"
            >
              Join Early Access &rarr;
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center">
          <a
            href="#what-is-mars"
            className="group flex flex-col items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#153D35]"
            aria-label="Scroll down to discover What Is MARS"
          >
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#65716A] group-hover:text-[#153D35] transition-colors">
              Scroll to explore
            </span>
            <div className="w-[1.5px] h-8 bg-gradient-to-b from-[#A8B9A2] to-transparent animate-pulse" />
          </a>
        </div>
      </div>

      {/* =========================================================================
          PART 2: THE CINEMATIC INTRO OVERLAY (Layer Stack: Doors below, Mountains above)
          ========================================================================= */}
      {isIntroActive && !isReducedMotion && (
        <div
          role="dialog"
          aria-label="Welcome to MARS Sanctuary"
          className="fixed inset-0 z-40 overflow-hidden pointer-events-auto"
        >
          {/* Skip Intro Control (Accessible, immediately available throughout intro) */}
          <div className="absolute top-5 right-5 sm:top-7 sm:right-8 z-50">
            <button
              type="button"
              onClick={handleSkip}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#1D3033] bg-[#FAF7F2] hover:bg-[#F5F0E7] border border-[#E2DDD5] shadow-xs rounded-xs transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#6E8E7E]"
              aria-label="Skip intro"
            >
              <span>Skip intro</span>
              <X className="w-3.5 h-3.5 text-[#6E8E7E]" />
            </button>
          </div>

          {/* -------------------------------------------------------------------
              MIDDLE LAYER: SYMMETRICAL SANCTUARY DOUBLE DOORS (z-20)
              - Left & Right doors are 100% solid opaque (#FAF7F2), meeting at center
              - When closed, they conceal the homepage completely
              - When Scene D triggers, they slide apart to left (-100%) and right (+100%)
              ------------------------------------------------------------------- */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Luminous Center Seam Light Spill */}
            <div
              className={`absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[#FAF7F2] z-30 transition-opacity duration-700 shadow-[0_0_15px_rgba(250,247,242,1),0_0_35px_rgba(244,211,201,0.9)] ${
                introScene === "doors-closed" ? "opacity-95" : "opacity-0"
              }`}
            />

            {/* LEFT DOOR PANEL (100% Solid Opaque Ivory) */}
            <div
              style={{ backgroundColor: "#FAF7F2" }}
              className={`absolute left-0 top-0 bottom-0 w-1/2 border-r border-[#DCD5C9] shadow-2xl z-20 flex items-center justify-end transition-transform duration-[1500ms] ease-cinematic will-change-transform ${
                isDoorsOpen ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              {/* Architectural Panel Inset with Recessed Shadow */}
              <div className="absolute inset-4 sm:inset-12 border border-[#E2DDD5] bg-[#F5F0E7]/60 pointer-events-none shadow-inner">
                <div className="absolute inset-3 sm:inset-6 border border-[#E2DDD5]/70" />
              </div>

              {/* Left Door Vertical Architectural Pull Handle */}
              <div className="relative mr-5 sm:mr-8 z-20 flex flex-col items-center">
                <div className="w-1.5 sm:w-2 h-36 sm:h-52 bg-[#1D3033] rounded-full shadow-md flex items-center justify-center">
                  <div className="w-0.5 sm:w-1 h-20 sm:h-28 bg-[#6E8E7E] rounded-full opacity-70" />
                </div>
              </div>

              {/* Left Half of Center Sanctuary Seal */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 sm:w-20 h-14 sm:h-20 rounded-full border-2 border-[#1D3033]/60 bg-[#FAF7F2] flex items-center justify-center overflow-hidden pointer-events-none shadow-xs">
                <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full border border-[#6E8E7E]/80 bg-[#EAF1ED]/60" />
              </div>
            </div>

            {/* RIGHT DOOR PANEL (100% Solid Opaque Ivory) */}
            <div
              style={{ backgroundColor: "#FAF7F2" }}
              className={`absolute right-0 top-0 bottom-0 w-1/2 border-l border-[#DCD5C9] shadow-2xl z-20 flex items-center justify-start transition-transform duration-[1500ms] ease-cinematic will-change-transform ${
                isDoorsOpen ? "translate-x-full" : "translate-x-0"
              }`}
            >
              {/* Architectural Panel Inset with Recessed Shadow */}
              <div className="absolute inset-4 sm:inset-12 border border-[#E2DDD5] bg-[#F5F0E7]/60 pointer-events-none shadow-inner">
                <div className="absolute inset-3 sm:inset-6 border border-[#E2DDD5]/70" />
              </div>

              {/* Right Door Vertical Architectural Pull Handle */}
              <div className="relative ml-5 sm:ml-8 z-20 flex flex-col items-center">
                <div className="w-1.5 sm:w-2 h-36 sm:h-52 bg-[#1D3033] rounded-full shadow-md flex items-center justify-center">
                  <div className="w-0.5 sm:w-1 h-20 sm:h-28 bg-[#6E8E7E] rounded-full opacity-70" />
                </div>
              </div>

              {/* Right Half of Center Sanctuary Seal */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 sm:w-20 h-14 sm:h-20 rounded-full border-2 border-[#1D3033]/60 bg-[#FAF7F2] flex items-center justify-center overflow-hidden pointer-events-none shadow-xs">
                <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full border border-[#6E8E7E]/80 bg-[#EAF1ED]/60" />
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              TOP LAYER: FULL-SCREEN FOG & SACRED MOUNTAIN SUNRISE (z-30)
              - Sits directly over the double doors
              - In Scene A: Fog is thick and dense
              - In Scene B: Fog spreads outward, revealing the mountain silhouette
              - In Scene C: Smoothly dissolves (opacity-0), revealing the closed doors!
              ------------------------------------------------------------------- */}
          <div
            className={`absolute inset-0 z-30 transition-opacity duration-1000 ease-out ${
              hideMountains ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <svg
              viewBox="0 0 1440 900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              className="w-full h-full absolute inset-0"
            >
              <defs>
                <radialGradient id="mountainDawnGlow" cx="50%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="#F4D3C9" stopOpacity="0.8" />
                  <stop offset="35%" stopColor="#FAF7F2" stopOpacity="0.7" />
                  <stop offset="70%" stopColor="#EAF1ED" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#F5F0E7" stopOpacity="1" />
                </radialGradient>

                <linearGradient id="peakGradDistant" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#7A9A8B" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#9EB5AA" stopOpacity="0.4" />
                </linearGradient>

                <linearGradient id="peakGradMid" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#4A6E5D" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#6E8E7E" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#8FA89B" stopOpacity="0.3" />
                </linearGradient>

                <linearGradient id="ridgeForeground" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#1D3033" stopOpacity="0.85" />
                  <stop offset="40%" stopColor="#3D5255" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#DCD5C9" stopOpacity="0.4" />
                </linearGradient>

                <filter id="introFogHeavy" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="55" />
                </filter>
              </defs>

              {/* 1. Fully Opaque Ivory Canvas Base (Guarantees zero bleed-through) */}
              <rect width="1440" height="900" fill="#F5F0E7" />

              {/* 2. Soft Dawn Sky Backdrop */}
              <rect width="1440" height="900" fill="url(#mountainDawnGlow)" />

              {/* 3. Mountain Silhouette: Inspired by the ascending peak in the MARS logo */}
              {/* Layer 1: Distant Noble Peaks */}
              <path
                d="M 60,560 L 420,330 L 720,180 L 1020,330 L 1380,560 L 1440,620 L 0,620 Z"
                fill="url(#peakGradDistant)"
                className={`transition-all duration-1400 ease-out ${
                  introScene === "fog" ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
              />

              {/* Layer 2: Midground Sculpted Ridges */}
              <path
                d="M-50,660 C 220,470 480,490 720,320 C 960,490 1220,470 1490,660 L 1490,900 L -50,900 Z"
                fill="url(#peakGradMid)"
                className={`transition-all duration-1400 delay-150 ease-out ${
                  introScene === "fog" ? "opacity-0 translate-y-12" : "opacity-90 translate-y-0"
                }`}
              />

              {/* Layer 3: Foreground Valley Terraces */}
              <path
                d="M-50,770 C 260,630 540,690 720,590 C 900,690 1180,630 1490,770 L 1490,900 L -50,900 Z"
                fill="url(#ridgeForeground)"
                className={`transition-all duration-1400 delay-300 ease-out ${
                  introScene === "fog" ? "opacity-0 translate-y-16" : "opacity-80 translate-y-0"
                }`}
              />

              {/* 4. Atmospheric Fog Banks:
                  In Scene A: Centered and dense (0.98 opacity), covering mountains and landscape.
                  In Scene B: Spreads outward to left and right edges, clearing the mountain center. */}
              <g filter="url(#introFogHeavy)" className="pointer-events-none">
                {/* Left Fog Bank */}
                <ellipse
                  cx={introScene === "fog" ? "520" : "140"}
                  cy="450"
                  rx="620"
                  ry="350"
                  fill="#FAF7F2"
                  fillOpacity={introScene === "fog" ? "0.98" : "0.22"}
                  className="transition-all duration-1600 ease-cinematic"
                />
                {/* Right Fog Bank */}
                <ellipse
                  cx={introScene === "fog" ? "920" : "1300"}
                  cy="450"
                  rx="640"
                  ry="360"
                  fill="#F5F0E7"
                  fillOpacity={introScene === "fog" ? "0.98" : "0.18"}
                  className="transition-all duration-1600 ease-cinematic"
                />
                {/* Center Fog Veil (Clears completely in Scene B) */}
                <ellipse
                  cx="720"
                  cy="420"
                  rx="500"
                  ry="300"
                  fill="#FAF7F2"
                  fillOpacity={introScene === "fog" ? "0.96" : "0"}
                  className="transition-all duration-1400 ease-out"
                />
              </g>
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
