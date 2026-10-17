"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, X, RotateCcw, ShieldCheck } from "lucide-react";

export function RiverFogOpening() {
  const [isAnimationActive, setIsAnimationActive] = useState<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);

    // Respect reduced-motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      setIsAnimationActive(false);
      return;
    }

    // Check if user has already experienced opening in this session
    const hasSeen = sessionStorage.getItem("mars_has_seen_opening");
    if (hasSeen === "true") {
      setIsAnimationActive(false);
    } else {
      // 2.5s natural fog dispersal sequence
      const timer = setTimeout(() => {
        setIsAnimationActive(false);
        sessionStorage.setItem("mars_has_seen_opening", "true");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSkip = () => {
    setIsAnimationActive(false);
    sessionStorage.setItem("mars_has_seen_opening", "true");
  };

  const handleReplay = () => {
    setIsAnimationActive(true);
    const timer = setTimeout(() => {
      setIsAnimationActive(false);
      sessionStorage.setItem("mars_has_seen_opening", "true");
    }, 2500);
    return () => clearTimeout(timer);
  };

  return (
    <section
      aria-label="Welcome to MARS Wellbeing"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#F5F0E7] border-b border-[#E2DDD5]"
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
            {/* Soft River Water Gradient: Deep Forest Teal -> Luminous Sage -> Morning Apricot */}
            <linearGradient id="naturalRiverGrad" x1="15%" y1="0%" x2="85%" y2="100%">
              <stop offset="0%" stopColor="#4A6E5D" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#6E8E7E" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#23453D" stopOpacity="0.9" />
              <stop offset="88%" stopColor="#1D3033" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C26D53" stopOpacity="0.7" />
            </linearGradient>

            {/* Sunlight Reflection along river crest */}
            <linearGradient id="riverSunHighlight" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#EAF1ED" stopOpacity="0.9" />
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
            fillOpacity="0.14"
          />
          <path
            d="M-50,310 C180,230 460,280 760,220 C1060,160 1280,270 1500,230 L1500,450 L-50,450 Z"
            fill="#85A394"
            fillOpacity="0.18"
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
            className={isAnimationActive && !isReducedMotion ? "animate-river-flow" : "opacity-85"}
          />

          {/* Sunlight shimmer line on water */}
          <path
            d="M 680,170 C 720,240 580,310 420,380 C 220,470 120,590 180,720 C 220,800 380,860 620,840 C 920,810 1180,880 1520,820"
            stroke="url(#riverSunHighlight)"
            strokeWidth="2.5"
            strokeDasharray="16 20"
            strokeLinecap="round"
            className="opacity-70"
          />

          {/* Morning Fog & Mist Banks (Gradually Parting) */}
          <g filter="url(#heavyFogBlur)" className="pointer-events-none">
            {/* Mist Bank Left (Valleys) */}
            <ellipse
              cx="380"
              cy="460"
              rx="460"
              ry="180"
              fill="#FAF7F2"
              fillOpacity={isAnimationActive ? "0.9" : "0.2"}
              className={isAnimationActive && !isReducedMotion ? "animate-fog-left transition-opacity duration-1000" : "opacity-20"}
            />
            {/* Mist Bank Right (Dawn Warmth) */}
            <ellipse
              cx="1080"
              cy="380"
              rx="520"
              ry="210"
              fill="#F4D3C9"
              fillOpacity={isAnimationActive ? "0.7" : "0.15"}
              className={isAnimationActive && !isReducedMotion ? "animate-fog-right transition-opacity duration-1000" : "opacity-15"}
            />
          </g>

          {/* Lower ground mist */}
          <ellipse
            cx="720"
            cy="760"
            rx="680"
            ry="140"
            fill="#EAF1ED"
            fillOpacity={isAnimationActive ? "0.75" : "0.25"}
            filter="url(#gentleMistBlur)"
            className={isAnimationActive && !isReducedMotion ? "transition-opacity duration-1000" : "opacity-25"}
          />
        </svg>
      </div>

      {/* 3. Opening Sequence Dissolve Screen */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[#F5F0E7] pointer-events-none transition-opacity duration-1000 ease-out ${
          isAnimationActive && !isReducedMotion ? "opacity-40" : "opacity-0"
        }`}
      />

      {/* 4. Non-intrusive Ambient Controls (Skip / Replay) */}
      <div className="absolute top-5 right-5 sm:top-7 sm:right-8 z-30 flex items-center gap-2">
        {isAnimationActive && !isReducedMotion ? (
          <button
            type="button"
            onClick={handleSkip}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1D3033] bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] border border-[#E2DDD5] shadow-xs rounded-xs transition-all backdrop-blur-xs"
            aria-label="Skip morning atmosphere opening"
          >
            <span>Skip opening</span>
            <X className="w-3.5 h-3.5 text-[#6E8E7E]" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReplay}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#3D5255] hover:text-[#1D3033] bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs transition-all shadow-2xs"
            title="Replay morning atmosphere"
          >
            <RotateCcw className="w-3 h-3 text-[#6E8E7E]" />
            <span className="hidden sm:inline">Replay atmosphere</span>
          </button>
        )}
      </div>

      {/* 5. Main Hero Content — Crisp, Editorial, Immersive */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
        {/* Editorial Eyebrow Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-7 text-xs font-semibold tracking-wider uppercase text-[#1D3033] bg-[#FAF7F2]/90 border border-[#E2DDD5] shadow-2xs backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-[#6E8E7E] animate-pulse" aria-hidden="true" />
          <span>Bengaluru, India — Initial Individual & Cohort Spaces</span>
        </div>

        {/* Commanding Headline — Barlow Condensed editorial authority */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-[#1D3033] uppercase leading-[1.02] max-w-4xl mx-auto">
          Creating Spaces for People to{" "}
          <span className="text-[#4A6E5D] relative inline-block">
            Pause
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-1 w-full h-[3px] bg-[#6E8E7E]/40 -z-10 rounded-full"
            />
          </span>
          , Reconnect & Access Support.
        </h1>

        {/* Supporting Narrative — Carefully spaced so river path flows cleanly beneath */}
        <p className="mt-7 text-base sm:text-lg lg:text-xl text-[#3D5255] font-normal leading-relaxed max-w-2xl mx-auto">
          An intentional mental wellbeing sanctuary rooted in Bengaluru. Uniting <strong>Nova Hikari</strong>—a slow ten-stage guided journey—with intimate community circles and qualified, verified professional care.
        </p>

        {/* Clear Action Hierarchy */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
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
        <div className="mt-14 pt-8 border-t border-[#E2DDD5]/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-3xl w-full">
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
