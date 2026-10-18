"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Wind } from "lucide-react";
import { BreathingPacer } from "@/components/ui/BreathingPacer";

const TEN_STAGES = [
  { num: "01", name: "Origin", tier: "Foundational", desc: "Acknowledging where you stand right now, without judgment or performative optimism." },
  { num: "02", name: "Grounding", tier: "Foundational", desc: "Somatic pacing, nervous system regulation, and deep restorative breath resets." },
  { num: "03", name: "Unpacking", tier: "Core Practice", desc: "Untangling chronic cognitive noise, urgent deadlines, and internalized pressure." },
  { num: "04", name: "Resonance", tier: "Core Practice", desc: "Reconnecting with authentic emotional signals underneath chronic work fatigue." },
  { num: "05", name: "Illumination", tier: "Core Practice", desc: "Discovering fresh perspective and gently reframing your inner narrative." },
  { num: "06", name: "Boundaries", tier: "Core Practice", desc: "Protecting your attention, cognitive energy, and relational capacity." },
  { num: "07", name: "Stillness", tier: "Core Practice", desc: "Cultivating sustained internal silence amidst a high-velocity environment." },
  { num: "08", name: "Connection", tier: "Integration", desc: "Bridging solitary inner reflection with genuine, unhurried human community." },
  { num: "09", name: "Renewal", tier: "Integration", desc: "Establishing sustainable personal rhythms that prevent recurring burnout." },
  { num: "10", name: "Integration", tier: "Integration", desc: "Returning to the world with grounded self-trust and lasting equilibrium." },
];

export function AppleNovaHikariSection() {
  const [activeStage, setActiveStage] = useState(0);
  const current = TEN_STAGES[activeStage];

  return (
    <section
      id="nova-hikari"
      aria-label="Nova Hikari Signature Experience"
      className="bg-[#000000] text-[#F5F5F7] pt-12 sm:pt-20 pb-14 sm:pb-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Apple Style Dark Eyebrow */}
        <span className="text-xs font-semibold tracking-widest uppercase text-[#86868B] block mb-2 sm:mb-3">
          Nova Hikari • Signature Experience
        </span>

        {/* Headline */}
        <h2 className="font-sans font-semibold tracking-tight text-[#F5F5F7] text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
          A new light. A moment for yourself.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-lg sm:text-2xl text-[#86868B] font-normal leading-relaxed max-w-2xl mx-auto text-balance">
          Ten progressive stages of contemplative practice, somatic breathwork, and quiet renewal.
        </p>

        {/* Dual Action CTAs */}
        <div className="mt-6 flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/nova-hikari"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all shadow-xs"
          >
            <span>Explore Nova Hikari</span>
          </Link>

          <Link
            href="#stage-explorer"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#F5F5F7] hover:bg-[#FFFFFF]/10 border border-[#86868B]/60 active:scale-[0.98] rounded-full transition-all"
          >
            <span>Preview 10 Stages</span>
          </Link>
        </div>
      </div>

      {/* Flagship Large Night Sanctuary Visual */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mt-8 sm:mt-12">
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#161617] border border-[#2D2D2F]">
          <Image
            src="/images/nova-hikari-dark.jpg"
            alt="Japanese garden sanctuary under a starry sky with illuminated moon gate and warm lantern glow"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Interactive Stage Strip (Apple Style Clean Selector) */}
      <div id="stage-explorer" className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#86868B]">
            Interactive Stage Navigation
          </span>
        </div>

        {/* Stage Pills */}
        <div className="overflow-x-auto no-scrollbar max-w-full pb-2">
          <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max mx-auto px-2">
            {TEN_STAGES.map((stage, idx) => (
              <button
                key={stage.num}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeStage === idx
                    ? "bg-[#FFFFFF] text-[#000000]"
                    : "bg-[#1C1C1E] text-[#86868B] hover:text-[#F5F5F7] hover:bg-[#2C2C2E]"
                }`}
              >
                <span className="font-mono mr-1.5">{stage.num}</span>
                <span>{stage.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="mt-4 bg-[#1C1C1E] border border-[#2D2D2F] rounded-2xl p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-mono text-[#D96C68] font-semibold">Stage {current.num}</span>
              <span className="text-[#86868B] uppercase tracking-wider">{current.tier}</span>
            </div>
            <h3 className="text-xl font-semibold text-[#F5F5F7]">{current.name}</h3>
            <p className="text-sm text-[#86868B] leading-relaxed max-w-xl">{current.desc}</p>
          </div>

          <Link
            href="/nova-hikari"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D96C68] hover:text-[#C65A57] transition-colors whitespace-nowrap self-start sm:self-center shrink-0"
          >
            <span>Begin Stage {current.num}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
