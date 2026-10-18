"use client";

import React from "react";
import Image from "next/image";
import { Award, Calendar, MapPin, Sparkles, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface MilestoneItem {
  year: string;
  location: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isKeyMilestone?: boolean;
}

const MILESTONES: MilestoneItem[] = [
  {
    year: "2024",
    location: "Bengaluru, Karnataka",
    title: "Foundational Architecture",
    description:
      "Formulation of the Mental Assistance Reassurance System (MARS) — merging calm Japanese spatial design principles with evidence-based Indian psychological care.",
    icon: Sparkles,
  },
  {
    year: "2025",
    location: "Bharat Mandapam, New Delhi",
    title: "National Presentation Milestone",
    description:
      "Unveiling the MARS Wellbeing vision, Nova Hikari self-guided journey, and community circle model at Bharat Mandapam, India's premier convention complex.",
    icon: Building2,
    isKeyMilestone: true,
  },
  {
    year: "Ongoing",
    location: "Clinical Care Continuum",
    title: "Healthcare Partnership with Highland Care",
    description:
      "Establishing direct collaboration with Highland Care Private Limited to bridge gentle self-care practices with accredited clinical consultation.",
    icon: ShieldCheck,
  },
];

export function MilestonesSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="milestones"
      aria-label="Moments That Shaped MARS"
      className="py-24 sm:py-32 bg-[#153D35] text-[#FAF7F2] relative overflow-hidden border-b border-[#1E4D43]"
    >
      {/* Background Architectural Accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#C9A15A_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 w-96 h-96 bg-[#C9A15A]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#1E4D43] border border-[#C9A15A]/30 rounded-full">
            <Award className="w-3.5 h-3.5 text-[#C9A15A]" />
            <span>MOMENTS THAT SHAPED MARS</span>
          </div>

          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2] leading-tight transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            A deliberate journey toward restorative wellbeing.
          </h2>

          <p
            className={`mt-5 text-base sm:text-lg text-[#FAF7F2]/80 leading-relaxed font-light transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Every step in building MARS reflects a conscious decision to value depth over speed. From our early design roots in Bengaluru to national recognition at Bharat Mandapam, our focus has remained constant: creating genuine spaces for people to pause, reconnect, and heal.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Milestone Narrative Timeline (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {MILESTONES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`relative p-6 sm:p-7 rounded-2xl border transition-all duration-500 ${
                    item.isKeyMilestone
                      ? "bg-[#1E4D43] border-[#C9A15A]/50 shadow-lg shadow-[#0E2923]/40"
                      : "bg-[#1A443B]/60 border-[#1E4D43] hover:border-[#A8B9A2]/40"
                  } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  style={{ transitionDelay: `${200 + idx * 120}ms` }}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A15A]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.year}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs text-[#A8B9A2]">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A15A]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 mt-2">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                        item.isKeyMilestone
                          ? "bg-[#C9A15A] text-[#153D35]"
                          : "bg-[#153D35] text-[#A8B9A2] border border-[#1E4D43]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-bold text-[#FAF7F2]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#FAF7F2]/80 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {item.isKeyMilestone && (
                    <div className="mt-4 pt-4 border-t border-[#C9A15A]/20 flex items-center justify-between text-xs text-[#C9A15A]">
                      <span className="font-medium tracking-wide">Featured National Presentation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Visual Showcase (7 Cols) */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative group bg-[#1A443B] border border-[#C9A15A]/40 rounded-3xl p-3 sm:p-4 shadow-2xl shadow-[#0A1F1B]/60 overflow-hidden">
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#0F2D27]">
                <Image
                  src="/milestones/bharat-mandapam-launch.jpg"
                  alt="Presentation of MARS Wellbeing at Bharat Mandapam, New Delhi"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority={false}
                />

                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F1B]/80 via-transparent to-transparent pointer-events-none" />

                {/* Venue Tag Overlay */}
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153D35]/90 backdrop-blur-md border border-[#C9A15A]/40 text-xs font-semibold text-[#FAF7F2] shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#C9A15A] animate-pulse" />
                  <span>Bharat Mandapam • New Delhi</span>
                </div>
              </div>

              {/* Museum-Style Editorial Caption */}
              <div className="p-5 sm:p-6 bg-[#1A443B] rounded-b-2xl">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#1E4D43] pb-3 mb-3">
                  <h4 className="font-display text-lg font-bold text-[#FAF7F2]">
                    National Presentation of MARS Wellbeing
                  </h4>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C9A15A]">
                    Official Milestone
                  </span>
                </div>

                <p className="text-sm text-[#FAF7F2]/80 leading-relaxed font-light">
                  Presentation of the Mental Assistance Reassurance System (MARS) at Bharat Mandapam, New Delhi — introducing a gentler, nature-inspired paradigm for community connection and proactive mental health support in India.
                </p>

                <div className="mt-4 pt-3 border-t border-[#1E4D43] flex flex-wrap items-center justify-between text-xs text-[#A8B9A2] gap-2">
                  <span>Photo Archive: <code className="text-[#C9A15A] text-[11px]">/milestones/bharat-mandapam-launch.jpg</code></span>
                  <span>MARS Wellbeing &bull; Verified National Presentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
