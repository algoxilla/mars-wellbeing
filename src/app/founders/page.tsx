import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";

export default function FoundersPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Statement of Intent
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            The Founders’ Note
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-2xl mx-auto leading-relaxed">
            Why we are building MARS Wellbeing in Bengaluru, and our commitment to slow, honest, and ethical spaces.
          </p>
        </div>
      </section>

      {/* 2. Essay Body */}
      <section className="py-24 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-base text-[#3D5255] leading-relaxed">
          <p>
            MARS (Mental Assistance Reassurance System) was initialized by practitioners and builders in Bengaluru who saw firsthand how the velocity of modern digital life was eroding human peace.
          </p>
          <p>
            Every tool in our modern workday is engineered to capture attention, accelerate output, and maximize engagement. We asked a simple question: <em>What would it look like to build a technology platform designed to help people do the opposite—to pause, decouple, and settle?</em>
          </p>
          <p>
            We do not believe in superficial “quick fixes” or gamified streaks. True psychological wellbeing requires time, somatic regulation, honest human community, and access to accredited, compassionate clinicians.
          </p>
          <p>
            We are validating individual demand here in Bengaluru first. If you share this conviction, we invite you to explore Nova Hikari or join our initial community cohorts.
          </p>

          <div className="pt-8 border-t border-[#E2DDD5] space-y-4">
            <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] text-xs text-[#3D5255]">
              <strong className="text-[#1D3033] block mb-1 uppercase tracking-wider font-semibold">
                Integrity & Governance Disclosure:
              </strong>
              <span>
                Founding team biographies, formal clinical advisory board appointments, and hospital collaboration agreements will be published following formal confirmation and legal clearance.
              </span>
            </div>

            <DevelopmentNotice
              phase="Phase 1 Architectural Scope"
              featureTitle="Founders’ Statement"
              description="Full biographies and accredited advisory appointments will be updated in subsequent phases as formal partnerships are finalized."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
