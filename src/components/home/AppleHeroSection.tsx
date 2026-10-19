"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function AppleHeroSection() {
  return (
    <section
      id="hero-arrival"
      aria-label="Make space for yourself"
      className="relative bg-[#FFFFFF] text-[#1D1D1F] pt-10 sm:pt-16 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Subtle MARS Signature Dawn Aura */}
      <div
        className="absolute top-0 inset-x-0 h-[480px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(217,108,104,0.07),rgba(201,161,90,0.035),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* MARS Restrained Identity Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full bg-[#F5F5F7] border border-[#D2D2D7]/70 text-[11px] font-medium text-[#1D1D1F] tracking-wide animate-in fade-in duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D96C68]" />
          <span>Mental Assistance Reassurance System</span>
        </div>

        {/* Apple Style Headline */}
        <h1 className="font-sans font-semibold tracking-tight text-[#1D1D1F] text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
          Make space for yourself.
        </h1>

        {/* Apple Style Subtitle */}
        <p className="mt-3 sm:mt-4 text-lg sm:text-2xl text-[#6E6E73] font-normal leading-relaxed max-w-2xl mx-auto text-balance">
          A thoughtful space to pause, reconnect, and discover your next step towards wellbeing.
        </p>

        {/* Apple Dual CTAs */}
        <div className="mt-6 flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#early-access"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all shadow-xs"
          >
            <span>Begin Your Journey</span>
          </Link>

          <Link
            href="#nova-hikari"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] border border-[#D2D2D7] active:scale-[0.98] rounded-full transition-all"
          >
            <span>Explore Nova Hikari</span>
          </Link>
        </div>
      </div>

      {/* Flagship Large Product-Scale Visual (Apple Centered Frame with Editorial Vignette) */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mt-8 sm:mt-12">
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#F5F5F7] shadow-sm border border-[#D2D2D7]/40">
          <Image
            src="/images/hero-sanctuary.jpg"
            alt="Minimalist Japanese stone and water reflection sanctuary at morning light"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />

          {/* Editorial Sanctuary Caption Badge */}
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-10 px-3.5 py-1.5 rounded-full bg-[rgba(255,255,255,0.88)] backdrop-blur-md border border-white/60 text-[11px] font-medium text-[#1D1D1F] flex items-center gap-2 shadow-xs pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#233B32]" />
            <span>Inner Sanctuary • Morning Stillness</span>
          </div>
        </div>
      </div>
    </section>
  );
}
