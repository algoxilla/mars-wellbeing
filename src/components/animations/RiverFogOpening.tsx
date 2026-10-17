"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, X, RotateCcw } from "lucide-react";

export function RiverFogOpening() {
  const [isAnimationActive, setIsAnimationActive] = useState<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      setIsAnimationActive(false);
      return;
    }

    // Check if user has already seen opening in this session
    const hasSeen = sessionStorage.getItem("mars_has_seen_opening");
    if (hasSeen === "true") {
      setIsAnimationActive(false);
    } else {
      // Complete animation after 2.6 seconds
      const timer = setTimeout(() => {
        setIsAnimationActive(false);
        sessionStorage.setItem("mars_has_seen_opening", "true");
      }, 2600);
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
    }, 2600);
    return () => clearTimeout(timer);
  };

  return (
    <section
      aria-label="Welcome to MARS Wellbeing"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#F5F0E7] border-b border-[#E2DDD5]"
    >
      {/* Background Architectural Grid Lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#1D3033_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* River Canvas SVG Layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-70"
        >
          <defs>
            {/* River Main Gradient: Terracotta into Muted Sage into Deep Teal Charcoal */}
            <linearGradient id="marsRiverGrad" x1="0%" y1="60%" x2="100%" y2="40%">
              <stop offset="0%" stopColor="#C26D53" stopOpacity="0.4" />
              <stop offset="28%" stopColor="#C26D53" stopOpacity="0.8" />
              <stop offset="48%" stopColor="#7A9A8B" stopOpacity="0.9" />
              <stop offset="76%" stopColor="#2D4D44" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#1D3033" stopOpacity="0.75" />
            </linearGradient>

            {/* River Soft Shimmer Gradient */}
            <linearGradient id="marsRiverShimmer" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7A9A8B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C26D53" stopOpacity="0.1" />
            </linearGradient>

            {/* Fog Blur Filter */}
            <filter id="mistBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="38" />
            </filter>
            <filter id="mistSoft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="22" />
            </filter>
          </defs>

          {/* Under-river subtle glow */}
          <path
            d="M-100,420 C220,380 340,490 620,360 C900,230 1080,430 1540,290"
            stroke="url(#marsRiverShimmer)"
            strokeWidth="48"
            strokeLinecap="round"
            className={isAnimationActive && !isReducedMotion ? "animate-river-draw opacity-40" : "opacity-30"}
          />

          {/* Primary River Ribbon — echoes the MARS central curve */}
          <path
            d="M-80,410 C210,360 360,470 640,340 C910,210 1060,410 1520,280"
            stroke="url(#marsRiverGrad)"
            strokeWidth="18"
            strokeLinecap="round"
            className={isAnimationActive && !isReducedMotion ? "animate-river-draw" : ""}
          />

          {/* Secondary Harmonic River Flow */}
          <path
            d="M-60,440 C230,390 380,500 660,370 C930,240 1080,430 1540,310"
            stroke="#7A9A8B"
            strokeWidth="4"
            strokeDasharray="12 16"
            strokeLinecap="round"
            className={isAnimationActive && !isReducedMotion ? "animate-river-draw opacity-60" : "opacity-40"}
          />

          {/* Ambient Mist & Fog Layers */}
          <g filter="url(#mistBlur)" className="pointer-events-none">
            {/* Fog Layer 1: Warm Ivory / Cream drifting mist */}
            <ellipse
              cx="580"
              cy="340"
              rx="420"
              ry="160"
              fill="#FAF7F2"
              fillOpacity={isAnimationActive ? "0.85" : "0.2"}
              className={isAnimationActive && !isReducedMotion ? "animate-fog-1 transition-opacity duration-1000" : "opacity-20"}
            />
            {/* Fog Layer 2: Muted Sage / Ivory cool mist */}
            <ellipse
              cx="860"
              cy="280"
              rx="380"
              ry="140"
              fill="#EAF0EC"
              fillOpacity={isAnimationActive ? "0.75" : "0.15"}
              className={isAnimationActive && !isReducedMotion ? "animate-fog-2 transition-opacity duration-1000" : "opacity-15"}
            />
          </g>
        </svg>
      </div>

      {/* Floating Fog Overlay Curtain (Smoothly Dissolves) */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[#F5F0E7] pointer-events-none transition-opacity duration-1000 ease-out ${
          isAnimationActive && !isReducedMotion ? "opacity-35" : "opacity-0"
        }`}
      />

      {/* Animation Controls (Skip / Replay) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-2">
        {isAnimationActive && !isReducedMotion ? (
          <button
            type="button"
            onClick={handleSkip}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1D3033] bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] border border-[#E2DDD5] shadow-xs rounded-sm transition-all backdrop-blur-xs"
            aria-label="Skip introductory opening sequence"
          >
            <span>Skip intro</span>
            <X className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReplay}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-[#3D5255] hover:text-[#1D3033] bg-[#FAF7F2]/70 hover:bg-[#FAF7F2] border border-[#E2DDD5] rounded-sm transition-all"
            title="Replay opening river atmosphere"
          >
            <RotateCcw className="w-3 h-3 text-[#7A9A8B]" />
            <span className="hidden sm:inline">Replay atmosphere</span>
          </button>
        )}
      </div>

      {/* Interactive Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* Editorial Sub-badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-[#1D3033] bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#7A9A8B]" aria-hidden="true" />
          <span>Bengaluru, India — Initial Cohort & Early Access</span>
        </div>

        {/* Central Brand Crest & Wordmark */}
        <div className="flex justify-center mb-6">
          <div className="relative h-16 w-64 sm:h-20 sm:w-96">
            <Image
              src="/brand/mars-logo.png"
              alt="MARS — Mental Assistance Reassurance System"
              fill
              priority
              sizes="(max-width: 640px) 256px, 384px"
              className="object-contain drop-shadow-xs"
            />
          </div>
        </div>

        {/* Editorial Main Heading (Barlow Condensed style) */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D3033] uppercase leading-[1.05] max-w-4xl mx-auto">
          Creating Spaces for People to{" "}
          <span className="text-[#5B7B6C] underline decoration-[#7A9A8B]/40 underline-offset-8">
            Pause
          </span>
          , Reconnect & Access Support.
        </h1>

        {/* Lead Narrative */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#3D5255] font-normal leading-relaxed max-w-2xl mx-auto">
          An intentional mental wellbeing ecosystem combining <strong>Nova Hikari</strong>—our ten-stage guided reflection journey—with intimate community circles and direct access to qualified, verified professionals.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/nova-hikari"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] active:scale-[0.99] border border-[#1D3033] transition-all shadow-xs"
          >
            <span>Experience Nova Hikari</span>
            <ArrowRight className="w-4 h-4 text-[#7A9A8B]" />
          </Link>

          <Link
            href="/professionals"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#FAF7F2] text-[#1D3033] hover:bg-[#ECE5DA] border border-[#E2DDD5] transition-all"
          >
            <Compass className="w-4 h-4 text-[#7A9A8B]" />
            <span>Find a Professional</span>
          </Link>

          <Link
            href="/early-access"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#5B7B6C] underline underline-offset-4 transition-colors"
          >
            Join Early Access →
          </Link>
        </div>

        {/* Reassurance Micro-badges */}
        <div className="mt-12 pt-8 border-t border-[#E2DDD5]/70 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
          <div className="p-2">
            <p className="text-[11px] font-semibold tracking-wider uppercase text-[#7A9A8B]">Self-Guided</p>
            <p className="text-xs text-[#3D5255] font-medium mt-0.5">Nova Hikari 10 Stages</p>
          </div>
          <div className="p-2">
            <p className="text-[11px] font-semibold tracking-wider uppercase text-[#7A9A8B]">Community</p>
            <p className="text-xs text-[#3D5255] font-medium mt-0.5">Bengaluru Circles</p>
          </div>
          <div className="p-2">
            <p className="text-[11px] font-semibold tracking-wider uppercase text-[#7A9A8B]">Clinical Care</p>
            <p className="text-xs text-[#3D5255] font-medium mt-0.5">Verified Directory</p>
          </div>
          <div className="p-2">
            <p className="text-[11px] font-semibold tracking-wider uppercase text-[#C26D53]">Crisis Boundary</p>
            <p className="text-xs text-[#3D5255] font-medium mt-0.5">Emergency Signposts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
