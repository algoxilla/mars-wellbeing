import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { ShieldCheck, Users, FileCheck, AlertTriangle } from "lucide-react";

export default function AdminPortalPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      <section className="py-16 sm:py-20 border-b border-[#E2DDD5] bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#C26D53] text-[#FAF7F2]">
              Internal Operations
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033]">
            Administration & Governance Portal
          </h1>
          <p className="text-xs text-[#3D5255] mt-1">
            Access-controlled internal area for application triage, practitioner verification, and community moderation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                Operations 01
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                Application Triage
              </h3>
              <p className="text-xs text-[#3D5255] leading-relaxed">
                Review incoming professional submissions, verify RCI registrations, and evaluate circle facilitator applications.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                Operations 02
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                Waitlist Allocation
              </h3>
              <p className="text-xs text-[#3D5255] leading-relaxed">
                Manage Bengaluru cohort rollouts, export early-access records, and track invitation delivery status.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                Operations 03
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                Safety Moderation
              </h3>
              <p className="text-xs text-[#3D5255] leading-relaxed">
                Monitor community circle conduct flags, audit logging, and protocol compliance reports.
              </p>
            </div>
          </div>

          <DevelopmentNotice
            phase="Phase 4 Milestone"
            featureTitle="Administrative Operations"
            description="Role-based access control, cryptographic audit logs, and practitioner verification workflows will be activated in Phase 4."
          />
        </div>
      </section>
    </div>
  );
}
