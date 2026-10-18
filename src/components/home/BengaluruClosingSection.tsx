"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function BengaluruClosingSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.15,
  });

  return (
    <section
      ref={sectionRef}
      id="closing-sanctuary"
      className="py-24 sm:py-36 bg-[#102D35]/85 backdrop-blur-md text-[#F5EEE3] relative overflow-hidden border-t border-[#397F83]/40"
    >
      {/* Soft dawn horizon glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(168,218,208,0.12)_0%,transparent_70%)] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(244,211,201,0.06)_0%,transparent_70%)] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-7">
        <div className="overflow-hidden inline-block">
          <span
            className={`inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#A8DAD0] bg-[#102D35]/90 border border-[#397F83]/50 transition-all duration-700 backdrop-blur-sm ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F4D3C9]" />
            <span>Bengaluru Initial Cohort</span>
          </span>
        </div>

        <div className="overflow-hidden">
          <h2
            className={`font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#F5EEE3] leading-none transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            A Space to Breathe When the World Is Too Loud.
          </h2>
        </div>

        <p
          className={`text-base sm:text-lg text-[#F5EEE3]/80 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          We are opening early access in Bengaluru for Nova Hikari, small-cohort community circles, and curated clinical appointments.
        </p>

        <div
          className={`pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Link
            href="/early-access"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-wider bg-[#A8DAD0] text-[#102D35] hover:bg-[#C2E7DF] active:scale-[0.98] transition-all font-mono overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD0] font-bold shadow-lg shadow-[#102D35]/50"
          >
            <span>Join Early Access Waitlist</span>
            <span className="relative flex items-center w-4 h-4 overflow-hidden" aria-hidden="true">
              <ArrowRight className="w-3.5 h-3.5 text-[#102D35] transition-transform duration-300 ease-out group-hover:translate-x-5" />
              <ArrowRight className="w-3.5 h-3.5 text-[#102D35] absolute -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-x-0" />
            </span>
          </Link>

          <Link
            href="/apply"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#F5EEE3] hover:text-[#A8DAD0] border border-[#397F83]/60 hover:border-[#A8DAD0] bg-[#102D35]/60 backdrop-blur-sm active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD0]"
          >
            Apply as Facilitator / Partner
          </Link>
        </div>

        <p
          className={`text-xs text-[#F5EEE3]/60 pt-4 transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          No spam. We will only reach out when spaces open for your cohort.
        </p>
      </div>
    </section>
  );
}
