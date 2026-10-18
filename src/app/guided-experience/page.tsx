"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { NOVA_HIKARI_STAGES, HikariStage } from "@/content/nova-hikari-stages";
import { BreathingPacer } from "@/components/ui/BreathingPacer";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Save,
  Clock,
  Sparkles,
} from "lucide-react";

function GuidedExperienceContent() {
  const searchParams = useSearchParams();
  const stageParam = searchParams.get("stage") || "origin";

  const [activeStage, setActiveStage] = useState<HikariStage>(
    NOVA_HIKARI_STAGES.find((s) => s.id === stageParam) || NOVA_HIKARI_STAGES[0]
  );
  const [reflectionText, setReflectionText] = useState("");
  const [isSavedLocally, setIsSavedLocally] = useState(false);
  const [isCleared, setIsCleared] = useState(false);

  // Sync state if query parameter changes
  useEffect(() => {
    const matched = NOVA_HIKARI_STAGES.find((s) => s.id === stageParam);
    if (matched) {
      setActiveStage(matched);
    }
  }, [stageParam]);

  // Load saved note for active stage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`mars_hikari_note_${activeStage.id}`);
      setReflectionText(saved || "");
    }
  }, [activeStage.id]);

  const handleSave = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(`mars_hikari_note_${activeStage.id}`, reflectionText);
      setIsSavedLocally(true);
      setTimeout(() => setIsSavedLocally(false), 2500);
    }
  };

  const handleClear = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(`mars_hikari_note_${activeStage.id}`);
      setReflectionText("");
      setIsCleared(true);
      setTimeout(() => setIsCleared(false), 2500);
    }
  };

  const currentIndex = NOVA_HIKARI_STAGES.findIndex((s) => s.id === activeStage.id);
  const prevStage = currentIndex > 0 ? NOVA_HIKARI_STAGES[currentIndex - 1] : null;
  const nextStage =
    currentIndex < NOVA_HIKARI_STAGES.length - 1 ? NOVA_HIKARI_STAGES[currentIndex + 1] : null;

  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      {/* 1. Header with Stage Stepper */}
      <section className="py-12 sm:py-16 border-b border-[#D2D2D7]/60 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/nova-hikari"
              className="inline-flex items-center gap-1 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Back to Nova Hikari Overview</span>
            </Link>

            <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E6E73]">
              Stage {activeStage.number} of 10 • {activeStage.movement}
            </span>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D96C68]">
              Nova Hikari Guided Experience
            </span>
            <h1 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
              Stage {activeStage.number}: {activeStage.title}
            </h1>
            <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
              {activeStage.theme}
            </p>
          </div>

          {/* Interactive Horizontal 10-Stage Strip */}
          <div className="mt-8 pt-6 border-t border-[#D2D2D7]/60 overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-start sm:justify-center gap-1.5 min-w-max mx-auto px-2">
              {NOVA_HIKARI_STAGES.map((s) => {
                const isActive = s.id === activeStage.id;
                return (
                  <button
                    key={s.number}
                    type="button"
                    onClick={() => setActiveStage(s)}
                    className={`px-3 py-1 text-xs rounded-full transition-all flex items-center gap-1 ${
                      isActive
                        ? "bg-[#1D1D1F] text-[#FFFFFF] font-medium"
                        : "bg-[#FFFFFF] text-[#6E6E73] border border-[#D2D2D7] hover:border-[#1D1D1F]/50 hover:text-[#1D1D1F]"
                    }`}
                  >
                    <span className="font-mono text-[10px]">{s.number}</span>
                    <span>{s.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Practice Section */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
          {/* Step 1: Somatic Settling Card */}
          <div className="bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-[20px] sm:rounded-[28px] p-6 sm:p-10 shadow-xs space-y-6">
            <div className="border-b border-[#D2D2D7]/60 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                Step 01 of 02 • Somatic Pacing
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-[#1D1D1F] mt-1">
                Settle the Nervous System.
              </h2>
              <p className="text-sm text-[#6E6E73] mt-1.5">
                Practice: <strong className="text-[#1D1D1F]">{activeStage.somaticPractice}</strong>
              </p>
            </div>

            <div className="bg-[#FFFFFF] border border-[#D2D2D7]/60 rounded-2xl p-6">
              <BreathingPacer />
            </div>
          </div>

          {/* Step 2: Quiet Inquiry Card */}
          <div className="bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-[20px] sm:rounded-[28px] p-6 sm:p-10 shadow-xs space-y-6">
            <div className="border-b border-[#D2D2D7]/60 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                Step 02 of 02 • Contemplative Inquiry
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-[#1D1D1F] mt-1 leading-snug">
                “{activeStage.inquiry}”
              </h2>
              <p className="text-sm text-[#6E6E73] mt-2">
                Write freely without self-censoring. Your words are private and saved only in this browser.
              </p>
            </div>

            <div className="space-y-4">
              <textarea
                rows={7}
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                placeholder="Write your reflections here..."
                className="w-full p-4 rounded-xl bg-[#FFFFFF] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#6E6E73]/50 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all leading-relaxed"
              />

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-[#FFFFFF] bg-[#1D1D1F] hover:bg-[#2D2D2F] rounded-full transition-colors"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{isSavedLocally ? "Saved in Browser" : "Save Reflection"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleClear}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#FFFFFF] border border-[#D2D2D7] rounded-full transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isCleared ? "Cleared" : "Clear"}</span>
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#6E6E73]">
                  <ShieldCheck className="w-4 h-4 text-[#D96C68]" />
                  <span>Stored locally on this device only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stepper Navigation to Next / Previous Stages */}
          <div className="flex items-center justify-between pt-6 border-t border-[#D2D2D7]/60">
            {prevStage ? (
              <button
                type="button"
                onClick={() => setActiveStage(prevStage)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Stage {prevStage.number}: {prevStage.title}</span>
              </button>
            ) : (
              <div />
            )}

            {nextStage ? (
              <button
                type="button"
                onClick={() => setActiveStage(nextStage)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] px-5 py-2.5 rounded-full transition-colors shadow-xs"
              >
                <span>Continue to Stage {nextStage.number}: {nextStage.title}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/nova-hikari"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFFFFF] bg-[#1D1D1F] hover:bg-[#2D2D2F] px-5 py-2.5 rounded-full transition-colors"
              >
                <span>Complete Journey Overview</span>
                <CheckCircle2 className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function GuidedExperiencePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FFFFFF]" />}>
      <GuidedExperienceContent />
    </Suspense>
  );
}
