"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NOVA_HIKARI_STAGES, HikariStage } from "@/content/nova-hikari-stages";
import { BreathingPacer } from "@/components/ui/BreathingPacer";
import {
  ArrowRight,
  Clock,
  Wind,
  ShieldCheck,
  ChevronRight,
  Compass,
} from "lucide-react";

export default function NovaHikariPage() {
  const [selectedMovement, setSelectedMovement] = useState<string>("All");
  const [activeStage, setActiveStage] = useState<HikariStage>(NOVA_HIKARI_STAGES[0]);

  const movements = [
    "All",
    "Settling & Grounding",
    "Resonance & Insight",
    "Restoration & Agency",
  ];

  const filteredStages =
    selectedMovement === "All"
      ? NOVA_HIKARI_STAGES
      : NOVA_HIKARI_STAGES.filter((s) => s.movement === selectedMovement);

  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      {/* 1. Apple Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#D2D2D7]/60 overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2 sm:mb-3">
            Nova Hikari • The Guided Path of Stillness
          </span>

          <h1 className="font-sans font-semibold tracking-tight text-[#1D1D1F] text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
            The Ten-Stage Contemplative Journey.
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-2xl mx-auto text-balance">
            Meaning <em>“New Light”</em> in Japanese, Nova Hikari is an immersive, Indo-Japanese-inspired wellbeing experience bringing together somatic breathing, quiet reflection, and mindful renewal—designed to help you decouple from acute cognitive noise and restore inner agency.
          </p>

          <div className="mt-6 flex flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/guided-experience"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all shadow-xs"
            >
              <span>Begin Stage 01: Origin</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
            <a
              href="#curriculum-architecture"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] border border-[#D2D2D7] active:scale-[0.98] rounded-full transition-all"
            >
              <span>Explore All 10 Stages</span>
            </a>
          </div>
        </div>

        {/* Flagship Large Sanctuary Visual */}
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mt-10 sm:mt-14">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#161617] border border-[#2D2D2F] shadow-sm">
            <Image
              src="/images/nova-hikari-dark.jpg"
              alt="Nighttime Japanese garden sanctuary under starlit sky with circular moon gate and lantern glow"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 2. Somatic Foundation Section on Pale Grey #F5F5F7 */}
      <section className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-[#D2D2D7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block">
                Somatic Foundation
              </span>
              <h2 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-tight">
                Before you reflect, you must settle.
              </h2>
              <p className="text-base text-[#6E6E73] leading-relaxed">
                Most wellbeing apps demand intellectual answers while your nervous system remains in a high-cortisol state. Nova Hikari pairs every reflection with a somatic grounding exercise—restoring calm autonomic tone before inquiring into deeper questions.
              </p>

              <div className="p-5 bg-[#FFFFFF] border border-[#D2D2D7]/80 rounded-2xl space-y-2 text-xs text-[#6E6E73]">
                <div className="flex items-center gap-2 text-[#1D1D1F] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#D96C68]" />
                  <span>Radical Data Sovereignty</span>
                </div>
                <p>
                  Everything you write during Nova Hikari stays exclusively in your browser’s local storage. We do not track, analyze, or monetize your private reflections.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#FFFFFF] border border-[#D2D2D7]/80 rounded-2xl p-6 sm:p-8 shadow-xs">
                <BreathingPacer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Ten Stages Explorer */}
      <section id="curriculum-architecture" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#D2D2D7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2">
              Curriculum Architecture
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
              The Three Movements of Nova Hikari.
            </h2>
            <p className="mt-3 text-base text-[#6E6E73]">
              Select a movement below to examine the inquiries and somatic practices across the ten stages.
            </p>

            {/* Movement Filter Tabs (Apple Pill Selectors) */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {movements.map((movement) => (
                <button
                  key={movement}
                  type="button"
                  onClick={() => setSelectedMovement(movement)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all border ${
                    selectedMovement === movement
                      ? "bg-[#1D1D1F] text-[#FFFFFF] border-[#1D1D1F]"
                      : "bg-[#F5F5F7] text-[#6E6E73] border-[#D2D2D7] hover:border-[#1D1D1F]/50 hover:text-[#1D1D1F]"
                  }`}
                >
                  {movement}
                </button>
              ))}
            </div>
          </div>

          {/* Stages Grid (2-Column Apple Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredStages.map((stage) => {
              const isSelected = activeStage.id === stage.id;
              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStage(stage)}
                  className={`p-6 sm:p-8 bg-[#F5F5F7] border rounded-[20px] sm:rounded-[24px] transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "border-[#1D1D1F] shadow-sm bg-[#FFFFFF]"
                      : "border-[#D2D2D7]/60 hover:border-[#1D1D1F]/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#D2D2D7]/60">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xl font-bold text-[#D96C68]">
                          {stage.number}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-[#6E6E73] font-semibold">
                          {stage.movement}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-[#FFFFFF] text-[#1D1D1F] border border-[#D2D2D7] rounded-full">
                        Stage {stage.number}
                      </span>
                    </div>

                    <h3 className="font-sans text-2xl font-semibold tracking-tight text-[#1D1D1F] mt-4">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-[#6E6E73] mt-1 font-medium">
                      {stage.theme}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#D2D2D7]/60 space-y-2 text-xs text-[#6E6E73]">
                      <p>
                        <strong className="text-[#1D1D1F]">Contemplative Inquiry:</strong>{" "}
                        <em className="text-[#1D1D1F]">“{stage.inquiry}”</em>
                      </p>
                      <p>
                        <strong className="text-[#1D1D1F]">Somatic Practice:</strong>{" "}
                        {stage.somaticPractice}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D2D2D7]/60 flex items-center justify-between text-xs text-[#6E6E73]">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1D1D1F]" />
                      <span>{stage.duration}</span>
                    </span>

                    <Link
                      href={`/guided-experience?stage=${stage.id}`}
                      className="text-xs font-semibold text-[#1D1D1F] hover:text-[#D96C68] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Experience Stage</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#D96C68]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Closing CTA Section */}
      <section className="py-16 sm:py-24 bg-[#F5F5F7] text-[#1D1D1F] text-center border-t border-[#D2D2D7]/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block">
            Begin Practice
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
            Ready to take your first pause?
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] max-w-xl mx-auto">
            Experience Stage 01: Origin right now. Settle into a quiet room, take three slow breaths, and listen to where you stand.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/guided-experience"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all shadow-xs"
            >
              <span>Open Stage 01 (Origin)</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#1D1D1F] hover:bg-[#FFFFFF] border border-[#D2D2D7] active:scale-[0.98] rounded-full transition-all"
            >
              <span>Clinical Origins & Philosophy</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
