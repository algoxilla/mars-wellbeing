import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { Compass, Calendar, Clock, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";

export default function ProfessionalPortalPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      <section className="py-16 sm:py-20 border-b border-[#E2DDD5] bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#1D3033] text-[#FAF7F2]">
              Clinical Operations
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033]">
            Professional Portal (Operational Area)
          </h1>
          <p className="text-xs text-[#3D5255] mt-1">
            Access-controlled management portal for verified mental health practitioners and clinicians.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                Module 01
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                Availability Management
              </h3>
              <p className="text-xs text-[#3D5255] leading-relaxed">
                Configure weekly consultation windows, buffer periods between clients, and blackout dates.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                Module 02
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                Client Consultations
              </h3>
              <p className="text-xs text-[#3D5255] leading-relaxed">
                Review scheduled sessions, secure tele-health room triggers, and client intake documentation.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                Module 03
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                Credentials & Audits
              </h3>
              <p className="text-xs text-[#3D5255] leading-relaxed">
                Submit annual RCI registration renewals, clinical supervision attestations, and billing details.
              </p>
            </div>
          </div>

          <DevelopmentNotice
            phase="Phase 3 Milestone"
            featureTitle="Professional Portal Operations"
            description="Practitioner calendar syncing, Razorpay automated fee settlements, and client consultation rooms will be activated during Phase 3."
          />
        </div>
      </section>
    </div>
  );
}
