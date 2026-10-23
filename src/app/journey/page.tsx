import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { NOVA_HIKARI_STAGES } from "@/content/nova-hikari-stages";
import { ArrowRight, CheckCircle2, ChevronRight, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "My Sanctuary Journey — Nova Hikari Stage Tracker",
  description:
    "Track your progress across the 10 stages of Nova Hikari. Revisit contemplative inquiries and somatic breath resets.",
  alternates: {
    canonical: "/journey",
  },
  openGraph: {
    title: "My Sanctuary Journey — Nova Hikari Stage Tracker | MARS Wellbeing",
    description:
      "Track your progress across the 10 stages of Nova Hikari. Revisit contemplative inquiries and somatic breath resets.",
    url: "https://www.marswellbeing.xyz/journey",
    siteName: "MARS Wellbeing",
    locale: "en_IN",
  },
};

export default function MemberJourneyPage() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      {/* 1. Header Hero */}
      <section className="py-12 sm:py-16 border-b border-[#D2D2D7]/60 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] block mb-2">
            Member Sanctuary
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
            My Nova Hikari Journey.
          </h1>
          <p className="mt-2 text-base text-[#6E6E73]">
            Track your contemplative inquiries, somatic resets, and completed stages.
          </p>
        </div>
      </section>

      {/* 2. Stages Matrix */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {NOVA_HIKARI_STAGES.map((stage) => (
              <div
                key={stage.number}
                className="p-5 bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-2xl flex flex-col justify-between hover:border-[#1D1D1F]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#D2D2D7]/60">
                    <span className="font-mono text-lg font-bold text-[#D96C68]">
                      {stage.number}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-[#6E6E73]">
                      Stage
                    </span>
                  </div>
                  <h4 className="font-sans text-base font-semibold text-[#1D1D1F] mt-3">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-[#6E6E73] mt-1 line-clamp-2 leading-relaxed">
                    {stage.theme}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D2D2D7]/60">
                  <Link
                    href={`/guided-experience?stage=${stage.id}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
                  >
                    <span>Practice Stage</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#D96C68]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#D2D2D7]/60 flex items-center justify-between">
            <Link
              href="/guided-experience"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] rounded-full transition-all shadow-xs"
            >
              <span>Resume Stage 01 (Origin)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/nova-hikari"
              className="text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
            >
              Curriculum Overview &gt;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
