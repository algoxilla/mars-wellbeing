"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ApplePillarsSection() {
  return (
    <section
      id="explore"
      aria-label="Community & Connection"
      className="bg-[#F5F5F7] text-[#1D1D1F] pt-12 sm:pt-20 pb-14 sm:pb-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Apple Style Eyebrow */}
        <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2 sm:mb-3">
          Bengaluru Cohorts
        </span>

        {/* Headline */}
        <h2 className="font-sans font-semibold tracking-tight text-[#1D1D1F] text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
          Meaningful connection.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-lg sm:text-2xl text-[#6E6E73] font-normal leading-relaxed max-w-2xl mx-auto text-balance">
          Facilitated, confidential cohorts of 6–8 people in Bengaluru. Real conversations without performance, networking, or fear of judgment.
        </p>

        {/* Dual CTAs */}
        <div className="mt-6 flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/community"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all shadow-xs"
          >
            <span>Discover Circles</span>
          </Link>

          <Link
            href="#bento-grid"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#1D1D1F] hover:bg-[#FFFFFF] border border-[#D2D2D7] active:scale-[0.98] rounded-full transition-all"
          >
            <span>Explore All Pathways</span>
          </Link>
        </div>
      </div>

      {/* Flagship Large Community Visual */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mt-8 sm:mt-12">
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#FFFFFF] shadow-sm">
          <Image
            src="/images/community-circle.jpg"
            alt="Adults gathered in an unhurried, thoughtful, supportive discussion circle in Bengaluru"
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
