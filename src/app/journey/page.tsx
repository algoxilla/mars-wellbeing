import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { NOVA_HIKARI_STAGES } from "@/content/nova-hikari-stages";
import { Sparkles, ArrowRight, Lock, CheckCircle2 } from "lucide-react";

export default function MemberJourneyPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      <section className="py-16 sm:py-20 border-b border-[#E2DDD5] bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
            Member Space
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033] mt-1">
            My Nova Hikari Journey
          </h1>
          <p className="text-xs text-[#3D5255] mt-1">
            Track your personal reflections, somatic logs, and completed stages.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {NOVA_HIKARI_STAGES.map((stage) => (
              <div
                key={stage.number}
                className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-[#6E8E7E]">{stage.number}</span>
                  {stage.freeStage && (
                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-[#EAF1ED] text-[#4A6E5D]">
                      Free
                    </span>
                  )}
                </div>
                <h4 className="font-display text-lg font-bold uppercase text-[#1D3033]">{stage.title}</h4>
                <p className="text-[11px] text-[#3D5255] leading-snug">{stage.theme}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/guided-experience"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all font-mono"
            >
              <span>Resume Stage 01 (Origin) →</span>
            </Link>
          </div>

          <DevelopmentNotice
            phase="Phase 2 Milestone"
            featureTitle="Member Journey Map"
            description="Encrypted cloud progress sync, past journal reflections, and audio playback bookmarks will be introduced in Phase 2."
          />
        </div>
      </section>
    </div>
  );
}
