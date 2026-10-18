"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AppleHeroSection() {
  return (
    <section
      id="hero-arrival"
      aria-label="Make space for yourself"
      className="bg-[#FFFFFF] text-[#1D1D1F] pt-10 sm:pt-16 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
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
            href="#nova-hikari-showcase"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] border border-[#D2D2D7] active:scale-[0.98] rounded-full transition-all"
          >
            <span>Learn More</span>
          </Link>
        </div>
      </div>

      {/* Flagship Large Product-Scale Visual (Apple Centered Frame) */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mt-8 sm:mt-12">
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#F5F5F7] shadow-sm">
          <Image
            src="/images/hero-sanctuary.jpg"
            alt="Minimalist Japanese stone and water reflection sanctuary at morning light"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
