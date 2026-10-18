"use client";

import React from "react";
import Link from "next/link";
import { Trees, ArrowRight, ShieldCheck, EyeOff, Scale } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PRINCIPLES = [
  {
    icon: EyeOff,
    num: "1",
    title: "No Performative Positivity",
    desc: "You never have to pretend to be happy, inspired, or thriving. Fatigue, grief, ambiguity, and silence are welcomed with equal dignity.",
  },
  {
    icon: ShieldCheck,
    num: "2",
    title: "Uncompromising Privacy",
    desc: "No algorithms selling your vulnerabilities. Guided reflections in Nova Hikari are strictly private and local to your device by default.",
  },
  {
    icon: Scale,
    num: "3",
    title: "Unambiguous Clinical Boundaries",
    desc: "We never claim self-guided experiences substitute for clinical psychiatry. Clear emergency escalation pathways protect individuals in acute need.",
  },
];

export function BengaluruContextSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.12,
  });

  return (
    <section
      ref={sectionRef}
      id="bengaluru-context"
      className="py-28 sm:py-40 bg-transparent border-b border-[#397F83]/20 relative overflow-hidden"
    >
      {/* Ambient Garden Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-0 w-80 h-80 bg-[radial-gradient(circle,rgba(168,218,208,0.08)_0%,transparent_70%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Montfort Diamond Chapter Badge */}
        <div className="flex items-center gap-3.5 mb-8">
          <div className="w-8 h-8 rotate-45 border border-[#397F83] bg-[#102D35]/60 backdrop-blur-xs flex items-center justify-center shadow-xs">
            <span className="-rotate-45 font-mono text-xs font-bold text-[#A8DAD0]">5</span>
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8DAD0]">
            Chapter 05 • Urban Sanctuary & Principles
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="overflow-hidden">
              <span
                className={`inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-[#A8DAD0] bg-[#102D35]/90 border border-[#397F83]/50 transition-all duration-700 backdrop-blur-sm ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <Trees className="w-3.5 h-3.5 text-[#A8DAD0]" />
                <span>Civic Roots & City Context</span>
              </span>
            </div>

            <div className="overflow-hidden">
              <h2
                className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F5EEE3] leading-none transition-all duration-700 delay-100 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Why Bengaluru? Restoring the Garden of Stillness.
              </h2>
            </div>

            <p
              className={`text-base sm:text-lg text-[#F5EEE3]/80 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Bengaluru is world-renowned for relentless ambition, high-velocity engineering, and global entrepreneurship. But speed has extracted a heavy human toll: chronic cognitive fatigue, social isolation, and constant hypervigilance.
            </p>

            <p
              className={`text-sm sm:text-base text-[#F5EEE3]/80 leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              MARS is born here to re-anchor Bengaluru to its origin as India’s Garden City—creating quiet spaces where stepping back is honored as essential maintenance for a sustainable human life.
            </p>

            <div
              className={`pt-2 flex flex-wrap items-center gap-6 transition-all duration-700 delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#A8DAD0] text-[#102D35] hover:bg-[#C2E7DF] active:scale-[0.98] transition-all overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD0] font-bold shadow-md shadow-[#102D35]/50"
              >
                <span>Our Philosophy & Origins</span>
                <span className="relative flex items-center w-4 h-4 overflow-hidden" aria-hidden="true">
                  <ArrowRight className="w-3.5 h-3.5 text-[#102D35] transition-transform duration-300 ease-out group-hover:translate-x-5" />
                  <ArrowRight className="w-3.5 h-3.5 text-[#102D35] absolute -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                </span>
              </Link>
              <Link
                href="/community"
                className="text-xs font-semibold uppercase tracking-wider text-[#F5EEE3]/90 hover:text-[#A8DAD0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD0] px-2 py-1"
              >
                Bengaluru Circles →
              </Link>
            </div>
          </div>

          {/* Right Core Non-Negotiables Panel */}
          <div
            className={`lg:col-span-6 bg-[#102D35]/90 p-8 sm:p-10 border border-[#397F83]/40 space-y-6 backdrop-blur-md shadow-xl rounded-xs transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="font-display text-2xl font-bold uppercase text-[#F5EEE3] border-b border-[#397F83]/40 pb-4">
              Our Operating Principles
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#F5EEE3]/80">
              {PRINCIPLES.map((pr, idx) => (
                <div
                  key={pr.num}
                  className={`p-4 bg-[#102D35]/70 border border-[#397F83]/40 transition-all duration-500 hover:border-[#A8DAD0]/60`}
                  style={{ transitionDelay: `${400 + idx * 100}ms` }}
                >
                  <strong className="text-[#F5EEE3] flex items-center gap-2 mb-1 font-semibold uppercase text-xs tracking-wider">
                    <span className="text-[#A8DAD0]">{pr.num}.</span>
                    <span>{pr.title}</span>
                  </strong>
                  <p className="leading-relaxed">{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
