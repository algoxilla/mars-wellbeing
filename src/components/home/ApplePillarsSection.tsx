"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Shield, Heart } from "lucide-react";

export function ApplePillarsSection() {
  return (
    <section
      id="explore"
      aria-label="Community & Connection"
      className="bg-[#F5F5F7] text-[#1D1D1F] pt-14 sm:pt-20 pb-16 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Apple Style Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-[#FFFFFF] border border-[#D2D2D7]/70 text-[11px] font-medium text-[#1D1D1F] tracking-wider uppercase">
          <Users className="w-3 h-3 text-[#D96C68]" />
          <span>Bengaluru Cohorts • Facilitated Circles</span>
        </div>

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
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#1D1D1F] hover:bg-[#FFFFFF] border border-[#D2D2D7] active:scale-[0.98] rounded-full transition-all"
          >
            <span>Talk to MARS Team</span>
          </Link>
        </div>
      </div>

      {/* Flagship Large Community Visual with Editorial Caption */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mt-8 sm:mt-12">
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#FFFFFF] shadow-sm border border-[#D2D2D7]/40">
          <Image
            src="/images/community-circle.jpg"
            alt="Adults gathered in an unhurried, thoughtful, supportive discussion circle in Bengaluru"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />

          {/* Editorial Caption Badge */}
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-10 px-3.5 py-1.5 rounded-full bg-[rgba(255,255,255,0.88)] backdrop-blur-md border border-white/60 text-[11px] font-medium text-[#1D1D1F] flex items-center gap-2 shadow-xs pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D96C68]" />
            <span>Bengaluru Cohort Circle • Non-evaluative Space</span>
          </div>
        </div>

        {/* 3 Core Circle Principles in Editorial Micro-Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <div className="bg-[#FFFFFF] rounded-2xl p-5 border border-[#D2D2D7]/50 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#D96C68] mb-1">
              Confidential by Design
            </p>
            <p className="text-sm text-[#6E6E73] leading-relaxed">
              Every cohort is bound by shared silence. What is spoken remains strictly within the circle.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl p-5 border border-[#D2D2D7]/50 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] mb-1">
              Non-Performative Presence
            </p>
            <p className="text-sm text-[#6E6E73] leading-relaxed">
              No pitch decks, networking postures, or unsolicited advice. Simply honest human resonance.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl p-5 border border-[#D2D2D7]/50 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] mb-1">
              Clinical Integrity
            </p>
            <p className="text-sm text-[#6E6E73] leading-relaxed">
              Supported by licensed psychologists and Highland Care Hospital clinical pathways when needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
