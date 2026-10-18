"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BreathingPacer } from "@/components/ui/BreathingPacer";

const ALL_TEN_STAGES = [
  { num: "01", name: "Origin", desc: "Acknowledging where you stand right now, without judgment or performative optimism.", tier: "Foundational" },
  { num: "02", name: "Grounding", desc: "Somatic pacing, nervous system regulation, and deep restorative breath resets.", tier: "Foundational" },
  { num: "03", name: "Unpacking", desc: "Untangling chronic cognitive noise, urgent deadlines, and internalized pressure.", tier: "Core Practice" },
  { num: "04", name: "Resonance", desc: "Reconnecting with authentic emotional signals underneath chronic work fatigue.", tier: "Core Practice" },
  { num: "05", name: "Illumination", desc: "Discovering fresh perspective and gently reframing your inner narrative.", tier: "Core Practice" },
  { num: "06", name: "Boundaries", desc: "Protecting your attention, cognitive energy, and relational capacity.", tier: "Core Practice" },
  { num: "07", name: "Stillness", desc: "Cultivating sustained internal silence amidst a high-velocity environment.", tier: "Core Practice" },
  { num: "08", name: "Connection", desc: "Bridging solitary inner reflection with genuine, unhurried human community.", tier: "Integration" },
  { num: "09", name: "Renewal", desc: "Establishing sustainable personal rhythms that prevent recurring burnout.", tier: "Integration" },
  { num: "10", name: "Integration", desc: "Returning to the world with grounded self-trust and lasting equilibrium.", tier: "Integration" },
];

export function NovaHikariExperience() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });
  const [selectedStage, setSelectedStage] = useState<number>(0);

  return (
    <section
      ref={sectionRef}
      id="nova-hikari"
      className="py-24 sm:py-32 bg-[#F5F0E7] border-b border-[#E3E9DE] text-[#1B2926] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-full">
            <span>THE SIGNATURE MARS EXPERIENCE</span>
          </div>

          <h2
            className={`font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#153D35] leading-tight transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Nova Hikari
          </h2>

          <p
            className={`mt-4 text-lg sm:text-xl text-[#1B2926]/85 font-light leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            A Japanese-inspired sensory journey through ten stages of contemplation, breathwork, and gentle renewal.
          </p>
        </div>

        {/* Two-Column Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left Column: Founder Exact Signature Card (Pixel-Aligned to Screenshot) */}
          <div
            className={`lg:col-span-6 bg-[#153D35] text-[#F5F0E7] rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-xl transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A15A] block mb-4">
                THE SIGNATURE MARS EXPERIENCE
              </span>

              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] mb-4">
                NOVA HIKARI
              </h3>

              <p className="text-xl sm:text-2xl text-[#FFFFFF]/90 font-light mb-6">
                A new light. A moment for yourself.
              </p>

              <p className="text-base sm:text-lg text-[#FFFFFF]/80 leading-relaxed font-light mb-8">
                An immersive, Indo-Japanese-inspired wellbeing experience bringing together breathing, music, movement, stillness, and rest.
              </p>

              {/* Core Attributes */}
              <div className="space-y-3 pt-2 text-sm text-[#FFFFFF]/85 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A15A] shrink-0" />
                  <span>100% Private local browser experience • Zero tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A15A] shrink-0" />
                  <span>Stages 01 & 02 Self-Guided • Practice at your own pace</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A15A] shrink-0" />
                  <span>Autonomic nervous system pacing • Grounded restoration</span>
                </div>
              </div>
            </div>

            {/* Founder Prescribed Button: Warm Ivory Pill with Forest Green Text */}
            <div>
              <Link
                href="/nova-hikari"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#153D35] bg-[#F5F0E7] hover:bg-[#FFFFFF] rounded-full active:scale-[0.98] transition-all shadow-md"
              >
                <span>Discover Nova Hikari</span>
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Somatic Breathing Pacer & Contemplative Anchor */}
          <div
            className={`lg:col-span-6 bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-700 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#153D35]">
                  Interactive Somatic Reset
                </span>
                <span className="text-xs font-medium text-[#65716A]">
                  4-4-4-4 Box Breathing
                </span>
              </div>

              {/* Breathing Pacer Tool */}
              <div className="my-4">
                <BreathingPacer />
              </div>
            </div>

            <div className="mt-6 p-5 bg-[#F5F0E7] border border-[#A8B9A2]/30 rounded-2xl text-xs sm:text-sm text-[#1B2926]/80 italic">
              “Like cherry blossoms opening after winter frost, renewal is not an act of willpower. It is an act of allowing stillness to do its work.”
            </div>
          </div>
        </div>

        {/* 10 Progressive Stages Interactive Stepper */}
        <div
          className={`bg-[#E3E9DE]/60 border border-[#A8B9A2]/40 rounded-3xl p-6 sm:p-10 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A15A] block mb-1">
                The Arc of Reconnection
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#153D35]">
                The Ten Progressive Stages
              </h3>
            </div>
            <span className="text-xs font-medium text-[#65716A]">
              Click any stage below to inspect its focus
            </span>
          </div>

          {/* Stepper Buttons Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
            {ALL_TEN_STAGES.map((stg, idx) => {
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stg.num}
                  type="button"
                  onClick={() => setSelectedStage(idx)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#153D35] text-[#F5F0E7] border-[#153D35] shadow-md scale-[1.02]"
                      : "bg-[#F5F0E7] hover:bg-[#FFFFFF] text-[#153D35] border-[#A8B9A2]/40"
                  }`}
                >
                  <span className={`block font-mono text-xs font-bold ${isSelected ? "text-[#C9A15A]" : "text-[#65716A]"}`}>
                    {stg.num}
                  </span>
                  <span className="block font-medium text-xs mt-1 truncate">
                    {stg.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Inspection Card */}
          <div className="p-6 bg-[#F5F0E7] border border-[#A8B9A2]/40 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C9A15A]">
                  Stage {ALL_TEN_STAGES[selectedStage].num}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E3E9DE] text-[#153D35] font-semibold">
                  {ALL_TEN_STAGES[selectedStage].tier}
                </span>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#153D35]">
                {ALL_TEN_STAGES[selectedStage].name}
              </h4>
              <p className="text-sm sm:text-base text-[#1B2926]/85 max-w-2xl leading-relaxed">
                {ALL_TEN_STAGES[selectedStage].desc}
              </p>
            </div>

            <Link
              href="/nova-hikari"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#153D35] text-[#F5F0E7] hover:bg-[#1B2926] rounded-full transition-all shrink-0"
            >
              <span>Explore Stage</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9A15A]" />
            </Link>
          </div>

          {/* Wellbeing Notice */}
          <div className="mt-6 flex items-start gap-2.5 text-xs text-[#65716A]">
            <ShieldAlert className="w-4 h-4 text-[#C9A15A] shrink-0 mt-0.5" />
            <p>
              Nova Hikari is a contemplative self-directed practice for nervous system regulation and grounding. It is not psychiatric therapy or medical treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
