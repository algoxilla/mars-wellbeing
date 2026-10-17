import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { HeartHandshake, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PartnersPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Institutional Collaboration Framework
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Healthcare & Institutional Partnerships
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-2xl mx-auto leading-relaxed">
            Collaborating with clinical hospitals, research centers, and academic institutions to ensure rigorous clinical governance, psychiatric triage, and safe referral pathways.
          </p>
        </div>
      </section>

      {/* 2. Mandatory Partnership Disclosure */}
      <section className="py-20 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-8 bg-[#FAF7F2] border-2 border-[#DCD5C9] space-y-4">
            <div className="flex items-center gap-2.5 text-[#6E8E7E]">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-display text-lg font-bold uppercase tracking-wider text-[#1D3033]">
                Formal Collaboration Status
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#1D3033] font-medium leading-relaxed">
              Institutional partnership information will be announced following formal confirmation.
            </p>
            <p className="text-xs text-[#3D5255] leading-relaxed">
              In accordance with ethical clinical guidelines and legal governance, MARS does not publish institutional logos, clinical endorsements, or memorandums of understanding until all legal documentation and scopes of clinical practice have received formal bilateral clearance.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#3D5255] leading-relaxed">
            <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              Proposed Collaboration Streams
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <strong className="text-[#1D3033] block text-xs uppercase tracking-wider">
                  Psychiatric Emergency Triage
                </strong>
                <p>
                  Establishing formal emergency referral corridors to specialized psychiatric hospitals in Bengaluru when platform participants require immediate clinical care.
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <strong className="text-[#1D3033] block text-xs uppercase tracking-wider">
                  Contemplative Efficacy Research
                </strong>
                <p>
                  Academic studies assessing autonomic nervous system markers and subjective wellbeing indicators during the 10 stages of Nova Hikari.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E2DDD5] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#3D5255]">
              Interested in proposing an institutional research collaboration?
            </span>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all font-mono"
            >
              <span>Submit Partnership Inquiry →</span>
            </Link>
          </div>

          <DevelopmentNotice
            phase="Phase 1 Regulatory Scope"
            featureTitle="Partnership Disclosure"
            description="All hospital and clinical relationships are subject to verified, formal legal clearance before publication."
          />
        </div>
      </section>
    </div>
  );
}
