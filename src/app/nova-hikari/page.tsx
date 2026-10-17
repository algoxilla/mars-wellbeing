"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NOVA_HIKARI_STAGES, HikariStage } from "@/content/nova-hikari-stages";
import { BreathingPacer } from "@/components/ui/BreathingPacer";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
  Wind,
  Layers,
  HeartHandshake,
} from "lucide-react";

export default function NovaHikariPage() {
  const [selectedMovement, setSelectedMovement] = useState<string>("All");
  const [activeStage, setActiveStage] = useState<HikariStage>(NOVA_HIKARI_STAGES[0]);

  const movements = ["All", "Settling & Grounding", "Resonance & Insight", "Restoration & Agency"];

  const filteredStages =
    selectedMovement === "All"
      ? NOVA_HIKARI_STAGES
      : NOVA_HIKARI_STAGES.filter((s) => s.movement === selectedMovement);

  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Atmospheric Header Hero */}
      <section className="relative py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(110,142,126,0.18)_0%,transparent_75%)] pointer-events-none"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-semibold tracking-wider uppercase text-[#4A6E5D] bg-[#EAF1ED] border border-[#B4C8BE]">
            <Sparkles className="w-3.5 h-3.5 text-[#6E8E7E]" />
            <span>The Guided Path of Stillness</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#1D3033] leading-none max-w-4xl mx-auto">
            Nova Hikari: The Ten-Stage Contemplative Journey.
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#3D5255] max-w-2xl mx-auto leading-relaxed">
            Meaning <em>“New Light”</em> in Japanese, Nova Hikari is a slow-paced, self-guided experience designed to help you decouple from acute cognitive noise, unpack chronic exhaustion, and restore inner agency.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/guided-experience"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all"
            >
              <span>Begin Stage 01: Origin (Free)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8FA89B]" />
            </Link>
            <a
              href="#interactive-curriculum"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#F5F0E7] text-[#1D3033] hover:bg-[#EAE3D6] border border-[#E2DDD5] transition-all"
            >
              <span>Explore Curriculum</span>
            </a>
          </div>

          <p className="text-xs text-[#3D5255]/70 mt-4">
            Stages 01 and 02 are permanently free with zero registration required.
          </p>
        </div>
      </section>

      {/* 2. Interactive Somatic Pacer & Somatic Practice Section */}
      <section className="py-20 border-b border-[#E2DDD5] bg-[#F5F0E7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#6E8E7E] block">
                Somatic Foundation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033] leading-tight">
                Before You Reflect, You Must Settle.
              </h2>
              <p className="text-sm sm:text-base text-[#3D5255] leading-relaxed">
                Most wellbeing apps demand intellectual answers while your nervous system remains in a high-cortisol fight-or-flight state. Nova Hikari pairs every reflection with a somatic grounding exercise—restoring calm autonomic tone before inquiring into deeper questions.
              </p>
              <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2 text-xs text-[#3D5255]">
                <strong className="text-[#1D3033] block font-semibold uppercase tracking-wider">
                  Radical Data Sovereignty:
                </strong>
                <span>
                  Everything you write during Nova Hikari stays in your browser’s local storage. We do not track, analyze, or monetize your private reflections.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <BreathingPacer />
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Ten Stages Explorer */}
      <section id="interactive-curriculum" className="py-24 bg-[#FAF7F2] border-b border-[#E2DDD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E]">
              Curriculum Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1D3033] mt-2">
              The Three Movements of Nova Hikari
            </h2>
            <p className="mt-3 text-sm text-[#3D5255]">
              Select a movement below to examine the inquiries and somatic practices across the ten stages.
            </p>

            {/* Movement Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {movements.map((movement) => (
                <button
                  key={movement}
                  type="button"
                  onClick={() => setSelectedMovement(movement)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all border ${
                    selectedMovement === movement
                      ? "bg-[#1D3033] text-[#F5F0E7] border-[#1D3033]"
                      : "bg-[#F5F0E7] text-[#3D5255] border-[#E2DDD5] hover:border-[#6E8E7E]"
                  }`}
                >
                  {movement}
                </button>
              ))}
            </div>
          </div>

          {/* Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStages.map((stage) => {
              const isSelected = activeStage.id === stage.id;
              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStage(stage)}
                  className={`p-7 sm:p-8 bg-[#F5F0E7] border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "border-[#6E8E7E] shadow-sm bg-[#FAF7F2]"
                      : "border-[#E2DDD5] hover:border-[#6E8E7E]/60"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
                      <div className="flex items-center gap-2.5">
                        <span className="font-display text-2xl font-bold text-[#6E8E7E]">
                          {stage.number}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-[#3D5255] font-semibold">
                          {stage.movement}
                        </span>
                      </div>
                      {stage.freeStage && (
                        <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-[#EAF1ED] text-[#4A6E5D] border border-[#B4C8BE]">
                          Permanently Free
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-4">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-[#4A6E5D] font-medium mt-1">
                      {stage.theme}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#E2DDD5]/70 space-y-2.5 text-xs text-[#3D5255]">
                      <p>
                        <strong className="text-[#1D3033]">Contemplative Inquiry:</strong>{" "}
                        <em>“{stage.inquiry}”</em>
                      </p>
                      <p>
                        <strong className="text-[#1D3033]">Somatic Practice:</strong> {stage.somaticPractice}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E2DDD5] flex items-center justify-between text-xs text-[#3D5255]">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#6E8E7E]" />
                      <span>{stage.duration}</span>
                    </span>
                    {stage.freeStage ? (
                      <Link
                        href="/guided-experience"
                        className="text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D] inline-flex items-center gap-1"
                      >
                        <span>Experience Now</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
                      </Link>
                    ) : (
                      <span className="text-[11px] font-mono text-[#3D5255]/70">
                        Unlocked via Member Space
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <DevelopmentNotice
            phase="Phase 1 Visual Architecture"
            featureTitle="Nova Hikari Curriculum Preview"
            description="Stages 01 and 02 are ready for free self-guided practice in /guided-experience. Subsequent stages (03 through 10) and optional encrypted cloud sync will become accessible during Phase 2."
          />
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="py-20 bg-[#1D3033] text-[#F5F0E7] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#FAF7F2]">
            Ready to Take Your First Pause?
          </h2>
          <p className="text-sm sm:text-base text-[#E2DDD5]/85 max-w-xl mx-auto">
            Experience Stage 01: Origin right now. Settle into a quiet room, take three slow breaths, and listen to where you stand.
          </p>
          <div className="pt-2">
            <Link
              href="/guided-experience"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#F5F0E7] text-[#1D3033] hover:bg-[#FAF7F2] font-mono transition-all"
            >
              <span>Open Stage 01 (Origin)</span>
              <ArrowRight className="w-4 h-4 text-[#6E8E7E]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
