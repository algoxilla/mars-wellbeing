import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { User, ShieldCheck, Download, Trash2, Bell } from "lucide-react";

export default function MemberSettingsPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      <section className="py-16 sm:py-20 border-b border-[#E2DDD5] bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
            Account & Governance
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033] mt-1">
            Privacy & Account Controls
          </h1>
          <p className="text-xs text-[#3D5255] mt-1">
            Control your personal data, notification preferences, and privacy sovereignty.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Section 1: Profile */}
          <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] space-y-4">
            <h3 className="font-display text-xl font-bold uppercase text-[#1D3033] border-b border-[#E2DDD5] pb-3">
              Member Credentials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#3D5255]">
              <div>
                <span className="font-semibold text-[#1D3033] block">Status:</span>
                <span>Development Preview (Unauthenticated)</span>
              </div>
              <div>
                <span className="font-semibold text-[#1D3033] block">Identifier:</span>
                <span className="font-mono">preview-user@marswellbeing.in</span>
              </div>
            </div>
          </div>

          {/* Section 2: DPDP Data Rights */}
          <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] space-y-4">
            <h3 className="font-display text-xl font-bold uppercase text-[#1D3033] border-b border-[#E2DDD5] pb-3">
              DPDP Act 2023 Data Sovereignty
            </h3>
            <p className="text-xs text-[#3D5255] leading-relaxed">
              In strict accordance with Indian data protection regulations, you retain total ownership over your wellbeing records.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#F5F0E7] text-[#3D5255] border border-[#E2DDD5] cursor-not-allowed opacity-75"
              >
                <Download className="w-3.5 h-3.5 text-[#6E8E7E]" />
                <span>Export Personal Data (JSON)</span>
              </button>
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#F5F0E7] text-[#C26D53] border border-[#E2DDD5] cursor-not-allowed opacity-75"
              >
                <Trash2 className="w-3.5 h-3.5 text-[#C26D53]" />
                <span>Request Permanent Deletion</span>
              </button>
            </div>
          </div>

          <DevelopmentNotice
            phase="Phase 2 Milestone"
            featureTitle="Account & Settings Controls"
            description="Live profile configuration, session token revocation, and full automated data export will be enabled in Phase 2."
          />
        </div>
      </section>
    </div>
  );
}
