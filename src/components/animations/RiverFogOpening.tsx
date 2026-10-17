"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Compass, X, RotateCcw } from "lucide-react";

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

    // Check session policy for returning visitors
    let hasSeen = false;
    try {
      hasSeen = sessionStorage.getItem("mars_has_seen_opening") === "true";
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
      aria-label="Welcome to MARS Wellbeing"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#F5F0E7] border-b border-[#E2DDD5]"
    >
      {/* =========================================================================
          PART 1: THE LIVING HOMEPAGE HERO (Rendered Directly Behind the Doors)
          ========================================================================= */}

      {/* 1. Dawn Sky & Morning Light Radial Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(244,211,201,0.35)_0%,rgba(235,241,237,0.4)_50%,transparent_85%)]"
      />

      {/* 2. Topographic & Natural Landscape Layers with Living River (SVG) */}
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
            <linearGradient id="heroRiverGrad" x1="15%" y1="0%" x2="85%" y2="100%">
              <stop offset="0%" stopColor="#4A6E5D" stopOpacity="0.35" />
              <stop offset="25%" stopColor="#6E8E7E" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#23453D" stopOpacity="0.9" />
              <stop offset="88%" stopColor="#1D3033" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C26D53" stopOpacity="0.75" />
            </linearGradient>

            <linearGradient id="heroSunHighlight" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#EAF1ED" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0.4" />
            </linearGradient>

            <filter id="heroFogBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="35" />
            </filter>
          </defs>

          {/* Distant Mountain Silhouettes in Soft Sage Mist */}
          <path
            d="M-50,260 C240,190 480,240 720,180 C980,120 1220,210 1500,160 L1500,400 L-50,400 Z"
            fill="#9EB5AA"
            fillOpacity="0.14"
          />
          <path
            d="M-50,310 C180,230 460,280 760,220 C1060,160 1280,270 1500,230 L1500,450 L-50,450 Z"
            fill="#85A394"
            fillOpacity="0.18"
          />

          {/* Natural River Flow: Riverbed base & Living water ribbon */}
          <path
            d="M 680,170 C 720,240 580,310 420,380 C 220,470 120,590 180,720 C 220,800 380,860 620,840 C 920,810 1180,880 1520,820"
            stroke="#DCD5C9"
            strokeWidth="36"
            strokeLinecap="round"
            className="opacity-50"
          />
          <path
            d="M 680,170 C 720,240 580,310 420,380 C 220,470 120,590 180,720 C 220,800 380,860 620,840 C 920,810 1180,880 1520,820"
            stroke="url(#heroRiverGrad)"
            strokeWidth="14"
            strokeLinecap="round"
            className="opacity-85"
          />
          <path
            d="M 680,170 C 720,240 580,310 420,380 C 220,470 120,590 180,720 C 220,800 380,860 620,840 C 920,810 1180,880 1520,820"
            stroke="url(#heroSunHighlight)"
            strokeWidth="2.5"
            strokeDasharray="16 20"
            strokeLinecap="round"
            className="opacity-85"
          />

          {/* Soft ambient valley mist */}
          <g filter="url(#heroFogBlur)" className="pointer-events-none opacity-20">
            <ellipse cx="280" cy="460" rx="460" ry="180" fill="#FAF7F2" />
            <ellipse cx="1180" cy="380" rx="520" ry="210" fill="#F4D3C9" />
          </g>
        </svg>
      </div>

      {/* 3. Replay Atmosphere Button (Available when settled) */}
      <div className="absolute top-5 right-5 sm:top-7 sm:right-8 z-30 flex items-center gap-2">
        {hasMounted && !isIntroActive && !isReducedMotion && (
          <button
            type="button"
            onClick={handleReplay}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#3D5255] hover:text-[#1D3033] bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs transition-all shadow-2xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#6E8E7E]"
            title="Replay opening experience"
            aria-label="Replay atmosphere"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#6E8E7E]" />
            <span className="hidden sm:inline">Replay atmosphere</span>
          </button>
        )}
      </div>

      {/* 4. Main Hero Typography & Action Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Editorial Eyebrow Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-[#1D3033] bg-[#FAF7F2]/90 border border-[#E2DDD5] shadow-2xs backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-[#6E8E7E] animate-pulse" aria-hidden="true" />
          <span>Bengaluru, India — Initial Individual & Cohort Spaces</span>
        </div>

        {/* Primary Slogan & Secondary Line */}
        <div className="space-y-3 max-w-5xl mx-auto w-full">
          {/* Desktop & Tablet Display Heading */}
          <div className="hidden sm:block">
            <h1 className="font-display font-bold tracking-tight uppercase text-[#1D3033]">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[104px] leading-[0.92]">
                BRINGING PEOPLE
              </span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[104px] leading-[0.92]">
                BACK TO THEMSELVES
              </span>
            </h1>
          </div>

          {/* Mobile Display Heading (Intentionally Composed) */}
          <div className="block sm:hidden">
            <h1 className="font-display font-bold tracking-tight uppercase text-[#1D3033]">
              <span className="block text-[38px] xs:text-[42px] leading-[0.94]">BRINGING</span>
              <span className="block text-[38px] xs:text-[42px] leading-[0.94]">PEOPLE BACK</span>
              <span className="block text-[38px] xs:text-[42px] leading-[0.94]">TO THEMSELVES</span>
            </h1>
          </div>

          {/* Secondary Line */}
          <div className="pt-2 sm:pt-4">
            <p className="font-sans text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] sm:tracking-[0.32em] uppercase text-[#4A6E5D]">
              Inner Balance. Real Connection.
            </p>
          </div>
        </div>

        {/* Supporting Narrative */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-[#3D5255] font-normal leading-relaxed max-w-2xl mx-auto">
          An intentional mental wellbeing sanctuary rooted in Bengaluru. Uniting <strong>Nova Hikari</strong>—a slow ten-stage guided journey—with intimate community circles and qualified, verified professional care.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
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

        {/* Reassurance Grid */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-[#E2DDD5]/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-3xl w-full">
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
