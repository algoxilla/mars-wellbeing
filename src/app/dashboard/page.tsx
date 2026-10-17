import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { Sparkles, Calendar, BookOpen, Compass, ArrowRight, User } from "lucide-react";

export default function MemberDashboardPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      <section className="py-16 sm:py-20 border-b border-[#E2DDD5] bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                Member Sanctuary
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033] mt-1">
                Welcome Back (Preview Space)
              </h1>
              <p className="text-xs text-[#3D5255] mt-1">
                Your personal sanctuary for unhurried reflection and care.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-[11px] font-mono bg-[#EAF1ED] text-[#4A6E5D] border border-[#B4C8BE]">
                Preview Member: demo@marswellbeing.in
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Nova Hikari Progress */}
            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                  Nova Hikari
                </span>
                <span className="text-xs font-mono text-[#1D3033]">Stage 01 of 10</span>
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                Stage 01: Origin
              </h3>
              <p className="text-xs text-[#3D5255] leading-relaxed">
                Resume your self-guided practice and somatic breath pacing.
              </p>
              <Link
                href="/guided-experience"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D] pt-2"
              >
                <span>Continue Practice</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
              </Link>
            </div>

            {/* Card 2: Upcoming Circles */}
            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                  Community Circles
                </span>
                <span className="text-xs font-mono text-[#3D5255]/70">No Active RSVPs</span>
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                Bengaluru Meetups
              </h3>
              <p className="text-xs text-[#3D5255] leading-relaxed">
                Explore upcoming confidential small-cohort circles in Bengaluru.
              </p>
              <Link
                href="/community"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D] pt-2"
              >
                <span>Browse Circles</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
              </Link>
            </div>

            {/* Card 3: Consultations */}
            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
                  Clinical Care
                </span>
                <span className="text-xs font-mono text-[#3D5255]/70">Directory</span>
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                Find a Therapist
              </h3>
              <p className="text-xs text-[#3D5255] leading-relaxed">
                Connect with verified clinical psychologists in Bengaluru or online.
              </p>
              <Link
                href="/professionals"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D] pt-2"
              >
                <span>Search Directory</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
              </Link>
            </div>
          </div>

          <DevelopmentNotice
            phase="Phase 2 Milestone"
            featureTitle="Member Dashboard Scaffold"
            description="This layout previews the member portal structure. Live session records, encrypted progress sync, and personal reflection journals will be implemented in Phase 2."
          />
        </div>
      </section>
    </div>
  );
}
