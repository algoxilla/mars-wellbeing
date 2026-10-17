import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { Briefcase, ArrowRight, ShieldCheck, CheckCircle2, Users, Sparkles } from "lucide-react";

export default function CorporatePage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Institutional Programs
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Wellbeing for High-Velocity Teams.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-2xl mx-auto leading-relaxed">
            Helping startups, technology teams, and knowledge institutions in Bengaluru create sustainable cultures where human beings do not have to burn out to build great things.
          </p>
        </div>
      </section>

      {/* 2. Program Offerings */}
      <section className="py-24 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] space-y-4">
              <span className="font-display text-2xl font-bold text-[#6E8E7E]">01</span>
              <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                Workplace Circles
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5255] leading-relaxed">
                Facilitator-led confidential circles for engineering, product, and leadership teams to address imposter syndrome, chronic urgency, and alignment.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] space-y-4">
              <span className="font-display text-2xl font-bold text-[#6E8E7E]">02</span>
              <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                Nova Hikari for Teams
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5255] leading-relaxed">
                Provide employees with private, unmonitored access to the ten-stage contemplative journey and somatic grounding pacers.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] space-y-4">
              <span className="font-display text-2xl font-bold text-[#6E8E7E]">03</span>
              <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                Crisis Support Design
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5255] leading-relaxed">
                Consultation on creating clear, non-stigmatizing mental health escalation pathways and emergency signposts for remote and hybrid teams.
              </p>
            </div>
          </div>

          <div className="mt-14 p-8 bg-[#FAF7F2] border border-[#E2DDD5] text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              Request an Institutional Briefing
            </h3>
            <p className="text-xs text-[#3D5255]">
              We are currently validating individual cohorts while keeping institutional pilots accessible for Bengaluru organizations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all font-mono"
            >
              <span>Submit Corporate Inquiry →</span>
            </Link>
          </div>

          <DevelopmentNotice
            phase="Phase 1 Inquiry Scaffold"
            featureTitle="Corporate Programs"
            description="Corporate program modules are currently accepting initial pilot inquiries. Full organizational admin dashboards will be released in Phase 4."
          />
        </div>
      </section>
    </div>
  );
}
