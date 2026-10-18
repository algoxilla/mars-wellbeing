"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function JournalPreviewSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="journal"
      className="py-24 sm:py-32 bg-[#F5F0E7] border-b border-[#E3E9DE] text-[#1B2926] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-full">
              <BookOpen className="w-3.5 h-3.5 text-[#C9A15A]" />
              <span>EDITORIAL & GROUNDING GUIDES</span>
            </div>

            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#153D35] leading-tight transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              The Journal of Quiet Practice
            </h2>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#153D35] hover:text-[#C9A15A] transition-colors shrink-0"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Grid: Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Lead Essay with Editorial Photography */}
          <div
            className={`lg:col-span-7 bg-[#E3E9DE] p-6 sm:p-10 border border-[#A8B9A2]/40 rounded-3xl flex flex-col justify-between group hover:shadow-xl hover:border-[#153D35]/40 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div>
              {/* Editorial Image Banner */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-[#FAF7F2] shadow-xs">
                <Image
                  src="/images/mindful-journaling.jpg"
                  alt="Minimalist linen journal with reflections and warm morning tea"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153D35]/50 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#153D35]/85 backdrop-blur-md text-[11px] font-semibold text-[#FAF7F2]">
                  Featured Editorial Essay
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#65716A] font-semibold mb-3">
                <span className="uppercase tracking-wider text-[#153D35]">Grounding Practices</span>
                <span>&bull;</span>
                <span>6 min read</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#153D35] leading-snug">
                The Architecture of Silence: Why High-Velocity Builders Need Spaces to Disconnect.
              </h3>

              <p className="mt-4 text-base text-[#1B2926]/85 leading-relaxed font-light">
                When cognitive speed is continuously rewarded, our nervous systems stay locked in an emergency vigilance loop. Discovering how to step out of reactive overdrive is not a luxury&mdash;it is cognitive preservation.
              </p>
            </div>

            <div className="pt-8 border-t border-[#A8B9A2]/30 mt-8 flex items-center justify-between">
              <span className="text-xs font-medium text-[#65716A]">Demonstration Article</span>
              <Link
                href="/journal/architecture-of-silence"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#153D35] group-hover:text-[#C9A15A] transition-colors"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Two Stacked Secondary Essays */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div
              className={`bg-[#FFFFFF] p-8 border border-[#A8B9A2]/40 rounded-3xl flex flex-col justify-between flex-1 group hover:shadow-lg hover:border-[#153D35]/40 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              <div>
                <div className="flex items-center gap-3 text-xs text-[#65716A] font-semibold mb-3">
                  <span className="uppercase tracking-wider text-[#153D35]">Somatic Wellbeing</span>
                  <span>•</span>
                  <span>4 min read</span>
                </div>

                <h4 className="font-display text-xl sm:text-2xl font-bold text-[#153D35] leading-snug">
                  Decompressing from Screen Fatigue: The Somatics of the Five-Minute Reset.
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-[#1B2926]/80 leading-relaxed font-light">
                  Practical somatic techniques to re-anchor autonomic tone when hours of continuous virtual context switching deplete your focus.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3E9DE] mt-6 flex justify-between items-center">
                <span className="text-[11px] text-[#65716A]">Demonstration Article</span>
                <Link
                  href="/journal/screen-fatigue-reset"
                  className="text-xs font-bold uppercase tracking-wider text-[#153D35] group-hover:text-[#C9A15A] transition-colors"
                >
                  Read →
                </Link>
              </div>
            </div>

            <div
              className={`bg-[#FFFFFF] p-8 border border-[#A8B9A2]/40 rounded-3xl flex flex-col justify-between flex-1 group hover:shadow-lg hover:border-[#153D35]/40 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <div>
                <div className="flex items-center gap-3 text-xs text-[#65716A] font-semibold mb-3">
                  <span className="uppercase tracking-wider text-[#153D35]">Human Connection</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>

                <h4 className="font-display text-xl sm:text-2xl font-bold text-[#153D35] leading-snug">
                  Vulnerability Without Performance: The Ethos of Community Circles.
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-[#1B2926]/80 leading-relaxed font-light">
                  What happens when we gather in Bengaluru without comparing titles, seed rounds, or personal accomplishments?
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3E9DE] mt-6 flex justify-between items-center">
                <span className="text-[11px] text-[#65716A]">Demonstration Article</span>
                <Link
                  href="/journal/vulnerability-without-performance"
                  className="text-xs font-bold uppercase tracking-wider text-[#153D35] group-hover:text-[#C9A15A] transition-colors"
                >
                  Read →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
