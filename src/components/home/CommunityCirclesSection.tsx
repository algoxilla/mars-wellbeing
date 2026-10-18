"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CIRCLE_AGREEMENTS = [
  {
    num: "01",
    title: "Strict Confidentiality",
    desc: "Chatham House Rule. What is spoken inside the circle stays entirely within the circle.",
  },
  {
    num: "02",
    title: "No Performative Success",
    desc: "Titles, funding rounds, and LinkedIn achievements are left at the door. You speak as a human being.",
  },
  {
    num: "03",
    title: "No Unsolicited Advice",
    desc: "We speak from personal experience using 'I' statements, resisting the impulse to fix or coach others.",
  },
  {
    num: "04",
    title: "Silence Is Honored",
    desc: "You are never forced to speak. Stillness, listening, and quiet presence are welcomed with equal dignity.",
  },
];

const SAMPLE_COHORTS = [
  {
    id: "CIR-01",
    theme: "Tech Fatigue & Ambiguity: Stepping Off the Treadmill",
    location: "Indiranagar, Bengaluru (In-Person)",
    cadence: "Alternate Saturdays • 10:30 AM IST",
    capacity: "6–8 seats per circle",
    audience: "For builders, product architects, and founders navigating chronic burnout.",
  },
  {
    id: "CIR-02",
    theme: "Unpacking Perfectionism & Inherited Expectations",
    location: "Koramangala, Bengaluru (In-Person)",
    cadence: "Sunday Evenings • 4:00 PM IST",
    capacity: "6–8 seats per circle",
    audience: "For individuals untangling chronic cognitive noise and external expectations.",
  },
  {
    id: "CIR-03",
    theme: "Quiet Somatic Grounding & Nervous System Reset",
    location: "Virtual Sanctuary Space (Bengaluru Cohort Focus)",
    cadence: "Wednesday Mid-week • 7:30 PM IST",
    capacity: "8–10 seats",
    audience: "Gentle somatic pacing to decouple from screen fatigue and contextual overdrive.",
  },
];

export function CommunityCirclesSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });
  const [activeCircle, setActiveCircle] = useState<number>(0);
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

  // Seat positions in degrees for circular SVG arrangement (8 seats around center)
  const seats = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <section
      ref={sectionRef}
      id="community"
      className="py-24 sm:py-32 bg-[#F5F0E7] border-b border-[#E3E9DE] text-[#1B2926] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-full">
            <Users className="w-3.5 h-3.5 text-[#C9A15A]" />
            <span>COMMUNITY CIRCLES • BENGALURU</span>
          </div>

          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#153D35] leading-tight transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            A circle has no head. Real human dialogue.
          </h2>

          <p
            className={`mt-5 text-base sm:text-lg text-[#1B2926]/80 leading-relaxed font-light transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            In a high-velocity city driven by pitch decks, speed, and performative success, MARS creates quiet counter-spaces: small cohorts of 6–8 people gathering with trained facilitators to speak honestly without fear of judgment.
          </p>
        </div>

        {/* Central Visual Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Documentary Image & Interactive Seating Diagram */}
          <div
            className={`lg:col-span-6 space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Documentary Photograph Card */}
            <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-md bg-[#FFFFFF] border border-[#A8B9A2]/40 group">
              <Image
                src="/images/community-circle.jpg"
                alt="Documentary scene of 6 adults in an intimate, supportive discussion circle in Bengaluru"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#153D35]/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#FAF7F2] drop-shadow-sm">
                  Candid, unhurried circles in Bengaluru
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider bg-[#153D35]/90 backdrop-blur-md text-[#C9A15A] px-2.5 py-1 rounded-full font-bold">
                  6&ndash;8 Seats
                </span>
              </div>
            </div>

            {/* Interactive Circle Seating Diagram */}
            <div className="relative w-full max-w-[420px] mx-auto aspect-square flex items-center justify-center p-6 bg-[#FFFFFF] border border-[#A8B9A2]/40 shadow-sm rounded-3xl">
              {/* Outer Subtle Concentric Harmonic Rings */}
              <div
                aria-hidden="true"
                className="absolute inset-8 rounded-full border border-dashed border-[#A8B9A2]/60 animate-[spin_60s_linear_infinite]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-16 rounded-full border border-[#E3E9DE]"
              />

              {/* Central Hearth */}
              <div className="relative z-10 w-28 h-28 rounded-full bg-[#153D35] border-2 border-[#C9A15A]/40 flex flex-col items-center justify-center text-center p-2 shadow-md">
                <Sparkles className="w-5 h-5 text-[#C9A15A] mb-1 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5F0E7]">
                  Sanctuary Hearth
                </span>
                <span className="text-[10px] text-[#A8B9A2]">6–8 Seats</span>
              </div>

              {/* 8 Seating Nodes Around the Circle */}
              {seats.map((deg, idx) => {
                const rad = (deg * Math.PI) / 180;
                const x = 135 * Math.cos(rad);
                const y = 135 * Math.sin(rad);
                const isHovered = selectedSeat === idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onMouseEnter={() => setSelectedSeat(idx)}
                    onMouseLeave={() => setSelectedSeat(null)}
                    onClick={() => setSelectedSeat(idx)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    aria-label={`Circle participant seat ${idx + 1}`}
                    className={`absolute z-20 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#153D35] cursor-pointer shadow-xs ${
                      isHovered
                        ? "bg-[#153D35] text-[#F5F0E7] border-[#153D35] scale-110 shadow-md font-bold"
                        : "bg-[#E3E9DE] text-[#153D35] border-[#A8B9A2]/60 hover:bg-[#FFFFFF]"
                    }`}
                  >
                    <span className="text-[11px] font-mono font-bold">0{idx + 1}</span>
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-[#65716A] text-center">
              Tap any seat to inspect circle seating ethos &bull; Uninterrupted human attention
            </p>
          </div>

          {/* Right Column: Grounding Agreements & Cohorts */}
          <div className="lg:col-span-6 space-y-6">
            <h3
              className={`font-display text-2xl sm:text-3xl font-bold text-[#153D35] transition-all duration-700 delay-150 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              The Four Grounding Agreements
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CIRCLE_AGREEMENTS.map((agr, idx) => (
                <div
                  key={agr.num}
                  className={`p-4 bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-2xl transition-all duration-500 hover:shadow-sm hover:border-[#153D35]/40 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + idx * 60}ms` }}
                >
                  <span className="font-display text-base font-bold text-[#C9A15A] block mb-1">
                    {agr.num}
                  </span>
                  <strong className="text-xs font-bold uppercase tracking-wider text-[#153D35] block mb-1">
                    {agr.title}
                  </strong>
                  <p className="text-xs text-[#1B2926]/80 leading-relaxed">
                    {agr.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Sample Cohorts Preview */}
            <div
              className={`p-6 bg-[#FFFFFF] border border-[#A8B9A2]/40 rounded-3xl shadow-sm space-y-4 transition-all duration-700 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="flex items-center justify-between border-b border-[#E3E9DE] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#153D35]">
                  Illustrative Cohorts • Bengaluru
                </span>
                <span className="text-[10px] font-mono text-[#65716A] bg-[#E3E9DE] px-2.5 py-0.5 rounded-full font-semibold">
                  2026 Season
                </span>
              </div>

              <div className="flex gap-2">
                {SAMPLE_COHORTS.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveCircle(i)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-colors cursor-pointer ${
                      activeCircle === i
                        ? "bg-[#153D35] text-[#F5F0E7] border-[#153D35] font-semibold"
                        : "bg-[#E3E9DE] text-[#153D35] border-[#A8B9A2]/40 hover:bg-[#FFFFFF]"
                    }`}
                  >
                    Cohort {c.id}
                  </button>
                ))}
              </div>

              <div className="text-xs text-[#1B2926]/85 space-y-2 pt-1">
                <p className="font-bold text-[#153D35] text-sm">
                  {SAMPLE_COHORTS[activeCircle].theme}
                </p>
                <p className="flex items-center gap-2 text-[#65716A]">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-[#C9A15A]" />
                  <span>{SAMPLE_COHORTS[activeCircle].location} • {SAMPLE_COHORTS[activeCircle].cadence}</span>
                </p>
                <p>{SAMPLE_COHORTS[activeCircle].audience}</p>
              </div>
            </div>

            <div
              className={`pt-2 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#153D35] text-[#F5F0E7] hover:bg-[#1B2926] rounded-full active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Discover All Community Circles</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A15A]" />
              </Link>
              <Link
                href="/apply"
                className="text-xs font-semibold uppercase tracking-wider text-[#153D35] hover:text-[#C9A15A] transition-colors"
              >
                Apply as Circle Facilitator →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
