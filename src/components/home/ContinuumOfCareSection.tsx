"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SPACES = [
  {
    num: "01",
    tag: "Self-Directed Sanctuary",
    title: "Nova Hikari",
    subtitle: "Ten-Stage Contemplative Journey",
    summary:
      "A slow, private digital sanctuary designed to decouple from external noise. Progress from somatic grounding to deep emotional resonance at your own natural pace.",
    detail:
      "Zero streaks, zero gamification, 100% private. Foundational stages 01 (Origin) & 02 (Grounding) can be experienced self-guided.",
    linkText: "Explore the 10 stages",
    href: "/nova-hikari",
    icon: Sparkles,
    metrics: "10 Stages • Audio Guidance • Local Reflections",
  },
  {
    num: "02",
    tag: "Bengaluru Circles",
    title: "Human Circles",
    subtitle: "Facilitator-Held Gatherings",
    summary:
      "Small, confidential cohorts of 6–8 people gathering in quiet physical spaces across Bengaluru. Structured, psychologically safe dialogues for builders, caregivers, and seekers.",
    detail:
      "A space to speak without performative optimism or resume comparisons. Moderated by trained facilitators with strict confidentiality protocols.",
    linkText: "Discover upcoming circles",
    href: "/community",
    icon: Users,
    metrics: "6–8 per Circle • In-Person (Bengaluru) • Facilitated",
  },
  {
    num: "03",
    tag: "Clinical Governance",
    title: "Verified Care",
    subtitle: "Licensed Mental Health Directory",
    summary:
      "Direct access to vetted clinical psychologists and psychotherapists. Transparent credentials, verified RCI registration checks, clear tariffs, and unhurried appointments.",
    detail:
      "Demonstration profiles available now. Formal practitioner credentialing and clinical governance vetting active prior to production launch.",
    linkText: "Browse the directory",
    href: "/professionals",
    icon: ShieldCheck,
    metrics: "Verified Qualifications • Transparent Tariffs • RCI Standards",
  },
];

export function ContinuumOfCareSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.12,
  });
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeSpace = SPACES[activeTab];

  return (
    <section
      ref={sectionRef}
      id="continuum-of-care"
      className="py-28 sm:py-36 bg-transparent border-b border-[#397F83]/15 text-[#F5EEE3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pl-24 lg:pl-28 lg:pr-12 relative z-10">
        {/* Montfort Diamond Chapter Badge */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-7 h-7 rotate-45 border border-[#397F83] bg-[#102D35]/40 backdrop-blur-xs flex items-center justify-center shadow-xs">
            <span className="-rotate-45 font-mono text-xs font-bold text-[#A8DAD0]">1</span>
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8DAD0]">
            Chapter 01 • The Architecture of Care
          </span>
        </div>

        {/* Section Header: Majestic Editorial Typography */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="overflow-hidden">
            <h2
              className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F5EEE3] leading-[1.02] drop-shadow-sm transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              A Living Continuum, Not Isolated Silos.
            </h2>
          </div>

          <p
            className={`mt-5 text-base sm:text-lg text-[#F5EEE3]/85 font-light leading-relaxed max-w-2xl transition-all duration-700 delay-100 drop-shadow-xs ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Wellbeing is rarely a single transaction. MARS connects self-directed reflection, small cohort human spaces, and qualified clinical psychotherapy into one coherent, unhurried ecosystem.
          </p>
        </div>

        {/* Montfort-Inspired Horizontal Pillar Selector Strip */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2 sm:gap-6 border-b border-[#397F83]/30 pb-4">
            {SPACES.map((space, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={space.num}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`group relative flex items-center gap-2.5 py-2 px-3 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] transition-all cursor-pointer focus:outline-none ${
                    isActive
                      ? "text-[#A8DAD0] font-bold"
                      : "text-[#F5EEE3]/65 hover:text-[#F5EEE3]"
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`w-2 h-2 rotate-45 border transition-all ${
                      isActive
                        ? "border-[#A8DAD0] bg-[#A8DAD0] shadow-[0_0_6px_rgba(168,218,208,0.8)]"
                        : "border-[#397F83] bg-transparent group-hover:border-[#A8DAD0]"
                    }`}
                  />
                  <span>
                    {space.num} {space.title}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-[#A8DAD0] shadow-[0_0_8px_rgba(168,218,208,0.7)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Spatial Narrative Presentation: Pure Negative Space & Living River */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Focus Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A8DAD0]">
                {activeSpace.tag} • {activeSpace.subtitle}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F5EEE3]">
                {activeSpace.title}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#F5EEE3]/90 font-light leading-relaxed max-w-xl">
              {activeSpace.summary}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono text-[#A8DAD0] bg-[#102D35]/40 border border-[#397F83]/40 backdrop-blur-xs">
                <span>{activeSpace.metrics}</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={activeSpace.href}
                className="group inline-flex items-center gap-3 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#F5EEE3] text-[#102D35] hover:bg-[#FAF7F2] transition-all shadow-md overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD0]"
              >
                <span>{activeSpace.linkText}</span>
                <span className="relative flex items-center w-4 h-4 overflow-hidden" aria-hidden="true">
                  <ArrowRight className="w-4 h-4 text-[#102D35] transition-transform duration-300 ease-out group-hover:translate-x-5" />
                  <ArrowRight className="w-4 h-4 text-[#102D35] absolute -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Operating Distinction in Airy Glass */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#102D35]/30 border-l-2 border-[#A8DAD0] border-y border-r border-[#397F83]/30 backdrop-blur-xs space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A8DAD0] block">
              Ethical & Governance Distinction
            </span>
            <p className="text-xs sm:text-sm text-[#F5EEE3]/85 leading-relaxed font-light">
              {activeSpace.detail}
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#F4D3C9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4D3C9]" />
              <span>Full governance & transparency enforced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
