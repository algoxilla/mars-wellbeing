"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BreathingPacer } from "@/components/ui/BreathingPacer";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Volume2,
  RotateCcw,
  Save,
} from "lucide-react";

export default function GuidedExperiencePage() {
  const [reflectionText, setReflectionText] = useState("");
  const [isSavedLocally, setIsSavedLocally] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mars_hikari_stage_01_note");
    if (saved) {
      setReflectionText(saved);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("mars_hikari_stage_01_note", reflectionText);
    setIsSavedLocally(true);
    setTimeout(() => setIsSavedLocally(false), 3000);
  };

  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-16 sm:py-24 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-semibold tracking-wider uppercase text-[#4A6E5D] bg-[#EAF1ED] border border-[#B4C8BE]">
            <Sparkles className="w-3.5 h-3.5 text-[#6E8E7E]" />
            <span>Self-Guided Contemplation</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Stage 01: Origin
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#3D5255] leading-relaxed">
            Acknowledging where you stand today without shame or judgment. Take off the pressure to perform or optimize.
          </p>
        </div>
      </section>

      {/* 2. Interactive Practice */}
      <section className="py-16 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Somatic Settling Step */}
          <div className="bg-[#FAF7F2] p-8 border border-[#E2DDD5] space-y-6">
            <div className="border-b border-[#E2DDD5] pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                Step 01 of 02 — Somatic Pacing
              </span>
              <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-1">
                Settle the Nervous System
              </h2>
              <p className="text-xs text-[#3D5255] mt-1">
                Before answering any questions, match your breath to the rhythm below for four cycles. Feel your feet flat on the floor and let your shoulders drop.
              </p>
            </div>

            <BreathingPacer />
          </div>

          {/* Contemplative Notepad Step */}
          <div className="bg-[#FAF7F2] p-8 border border-[#E2DDD5] space-y-6">
            <div className="border-b border-[#E2DDD5] pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                Step 02 of 02 — Quiet Inquiry
              </span>
              <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-1">
                What is currently carrying the heaviest emotional or cognitive load in your life?
              </h2>
              <p className="text-xs text-[#3D5255] mt-1">
                Write freely. Do not edit, judge, or polish your words.
              </p>
            </div>

            <div className="space-y-4">
              <textarea
                rows={6}
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                placeholder="I am carrying the weight of..."
                className="w-full p-4 bg-[#F5F0E7] border border-[#E2DDD5] text-sm text-[#1D3033] placeholder-[#3D5255]/50 focus:outline-none focus:border-[#6E8E7E] leading-relaxed"
              />

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#4A6E5D]">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Stored securely on your browser only. Never transmitted.</span>
                </div>

                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all"
                >
                  <Save className="w-3.5 h-3.5 text-[#8FA89B]" />
                  <span>{isSavedLocally ? "Saved to Device!" : "Save Reflection"}</span>
                </button>
              </div>
            </div>
          </div>

          <DevelopmentNotice
            phase="Phase 1 Live Demo"
            featureTitle="Stage 01 Experience"
            description="Stage 01 reflection storage above operates directly in your browser localStorage. Stages 02 through 10, ambient soundscape controls, and optional encrypted account sync will be activated in Phase 2."
          />
        </div>
      </section>
    </div>
  );
}
