"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

const TEN_STAGES = [
  { id: "origin", num: "01", name: "Origin", tier: "Movement I • Grounding", desc: "Acknowledging where you stand right now, without judgment or performative optimism." },
  { id: "grounding", num: "02", name: "Grounding", tier: "Movement I • Grounding", desc: "Somatic pacing, nervous system regulation, and deep restorative breath resets." },
  { id: "unpacking", num: "03", name: "Unpacking", tier: "Movement II • Quiet Inquiry", desc: "Untangling chronic cognitive noise, urgent deadlines, and internalized pressure." },
  { id: "resonance", num: "04", name: "Resonance", tier: "Movement II • Quiet Inquiry", desc: "Reconnecting with authentic emotional signals underneath chronic work fatigue." },
  { id: "illumination", num: "05", name: "Illumination", tier: "Movement II • Quiet Inquiry", desc: "Discovering fresh perspective and gently reframing your inner narrative." },
  { id: "boundaries", num: "06", name: "Boundaries", tier: "Movement II • Quiet Inquiry", desc: "Protecting your attention, cognitive energy, and relational capacity." },
  { id: "stillness", num: "07", name: "Stillness", tier: "Movement II • Quiet Inquiry", desc: "Cultivating sustained internal silence amidst a high-velocity environment." },
  { id: "connection", num: "08", name: "Connection", tier: "Movement III • Integration", desc: "Bridging solitary inner reflection with genuine, unhurried human community." },
  { id: "renewal", num: "09", name: "Renewal", tier: "Movement III • Integration", desc: "Establishing sustainable personal rhythms that prevent recurring burnout." },
  { id: "integration", num: "10", name: "Integration", tier: "Movement III • Integration", desc: "Returning to the world with grounded self-trust and lasting equilibrium." },
];

export function AppleNovaHikariSection() {
  const [activeStage, setActiveStage] = useState(0);
  const current = TEN_STAGES[activeStage];

  return (
    <section
      id="nova-hikari"
      aria-label="Nova Hikari Signature Experience"
      className="relative bg-[#000000] text-[#F5F5F7] pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Subtle Ensō / Amber Light Horizon Aura */}
      <div
        className="absolute top-0 inset-x-0 h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,161,90,0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Apple Style Dark Eyebrow with Light Motif */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-[#1C1C1E] border border-[#2D2D2F] text-[11px] font-medium text-[#C9A15A] tracking-wider uppercase">
          <Sparkles className="w-3 h-3 text-[#C9A15A]" />
          <span>Nova Hikari • Indo-Japanese Inspired</span>
        </div>

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
            href={`/guided-experience?stage=${current.id}`}
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#F5F5F7] hover:bg-[#FFFFFF]/10 border border-[#86868B]/60 active:scale-[0.98] rounded-full transition-all"
          >
            <span>Try Stage {current.num}</span>
          </Link>
        </div>
      </div>

      {/* Flagship Large Night Sanctuary Visual with Editorial Caption */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mt-8 sm:mt-12">
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#161617] border border-[#2D2D2F] shadow-2xl">
          <Image
            src="/images/nova-hikari-dark.jpg"
            alt="Japanese garden sanctuary under a starry sky with illuminated moon gate and warm lantern glow"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />

          {/* Editorial Night Sanctuary Caption Badge */}
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-10 px-3.5 py-1.5 rounded-full bg-[rgba(28,28,30,0.85)] backdrop-blur-md border border-[#2D2D2F] text-[11px] font-medium text-[#F5F5F7] flex items-center gap-2 shadow-xs pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15A]" />
            <span>Night Sanctuary • Ensō Moon Gate</span>
          </div>
        </div>
      </div>

      {/* Interactive Stage Strip (Apple Style Clean Selector) */}
      <div id="stage-explorer" className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#86868B]">
            Interactive Curriculum • Select a Stage
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
                    ? "bg-[#FFFFFF] text-[#000000] shadow-sm"
                    : "bg-[#1C1C1E] text-[#86868B] hover:text-[#F5F5F7] hover:bg-[#2C2C2E]"
                }`}
              >
                <span className="font-mono mr-1.5 text-[11px]">{stage.num}</span>
                <span>{stage.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Stage Detail Card with Direct Deep Link */}
        <div className="mt-4 bg-[#1C1C1E] border border-[#2D2D2F] rounded-2xl p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-mono text-[#D96C68] font-semibold">Stage {current.num}</span>
              <span className="text-[#86868B] uppercase tracking-wider text-[11px]">{current.tier}</span>
            </div>
            <h3 className="text-xl font-semibold text-[#F5F5F7]">{current.name}</h3>
            <p className="text-sm text-[#86868B] leading-relaxed max-w-xl">{current.desc}</p>
          </div>

          <Link
            href={`/guided-experience?stage=${current.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D96C68] hover:text-[#C65A57] bg-[#2C2C2E] hover:bg-[#3C3C3E] px-4 py-2 rounded-full transition-colors whitespace-nowrap self-start sm:self-center shrink-0"
          >
            <span>Practice Stage {current.num}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
