import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Brain,
  Sparkles,
  HeartHandshake,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Navigation Framework — How MARS Wellbeing Works",
  description:
    "Explore the three interconnected spaces of MARS: Nova Hikari private practices, facilitated Bengaluru community circles, and accredited clinical healthcare continuity.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How MARS Works — The Unhurried Architecture of Care",
    description:
      "Three interconnected spaces: Nova Hikari private practices, community circles, and clinical care in Bengaluru.",
    url: "https://www.marswellbeing.xyz/how-it-works",
    siteName: "MARS Wellbeing",
    locale: "en_IN",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            The Navigation Framework
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            An Unhurried Architecture of Care.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-2xl mx-auto leading-relaxed">
            Human wellbeing is not one-size-fits-all. MARS provides three interconnected spaces, allowing you to choose the exact level of support, privacy, and depth you need at any moment.
          </p>
        </div>
      </section>

      {/* 2. Step-by-Step Pathway */}
      <section className="py-24 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E]">
              Three Distinct Pathways
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1D3033] mt-2">
              How to Navigate MARS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] flex flex-col justify-between space-y-6">
              <div>
                <div className="w-10 h-10 bg-[#1D3033] text-[#F5F0E7] flex items-center justify-center font-display text-lg font-bold">
                  01
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-6">
                  Self-Guided Practice
                </h3>
                <p className="text-xs font-semibold text-[#6E8E7E] uppercase tracking-wider mt-1">
                  Nova Hikari Journey
                </p>
                <p className="mt-4 text-sm text-[#3D5255] leading-relaxed">
                  Start with foundational Stages 01 and 02. Engage with quiet somatic pacing and reflective writing in complete privacy. Ideal for daily decompression and gentle cognitive untangling.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5]">
                <Link
                  href="/nova-hikari"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D]"
                >
                  <span>Explore Nova Hikari</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] flex flex-col justify-between space-y-6">
              <div>
                <div className="w-10 h-10 bg-[#1D3033] text-[#F5F0E7] flex items-center justify-center font-display text-lg font-bold">
                  02
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-6">
                  Community Circles
                </h3>
                <p className="text-xs font-semibold text-[#6E8E7E] uppercase tracking-wider mt-1">
                  Facilitator-Held Cohorts
                </p>
                <p className="mt-4 text-sm text-[#3D5255] leading-relaxed">
                  When private reflection is not enough, join an intimate Bengaluru gathering of 8-12 participants. Speak without performative pressure and listen to others walking similar paths.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5]">
                <Link
                  href="/community"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D]"
                >
                  <span>View Upcoming Circles</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] flex flex-col justify-between space-y-6">
              <div>
                <div className="w-10 h-10 bg-[#1D3033] text-[#F5F0E7] flex items-center justify-center font-display text-lg font-bold">
                  03
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-6">
                  Clinical Consultation
                </h3>
                <p className="text-xs font-semibold text-[#6E8E7E] uppercase tracking-wider mt-1">
                  Verified Psychologists
                </p>
                <p className="mt-4 text-sm text-[#3D5255] leading-relaxed">
                  When dealing with chronic anxiety, trauma, depression, or major transitions, consult directly with vetted clinical psychologists in Bengaluru or online with transparent pricing.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5]">
                <Link
                  href="/professionals"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D]"
                >
                  <span>Browse Directory</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Comparison Matrix Table */}
      <section className="py-24 bg-[#FAF7F2] border-b border-[#E2DDD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E]">
              Comparative Overview
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1D3033] mt-2">
              Choosing Your Starting Point
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#E2DDD5] bg-[#F5F0E7]">
            <table className="w-full text-left text-xs sm:text-sm text-[#3D5255] border-collapse">
              <thead>
                <tr className="bg-[#1D3033] text-[#FAF7F2] font-display uppercase tracking-wider text-xs sm:text-sm">
                  <th className="p-4 sm:p-5 border-r border-[#3D5255]">Care Space</th>
                  <th className="p-4 sm:p-5 border-r border-[#3D5255]">Primary Purpose</th>
                  <th className="p-4 sm:p-5 border-r border-[#3D5255]">Format & Pace</th>
                  <th className="p-4 sm:p-5">Privacy Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD5]">
                <tr className="hover:bg-[#FAF7F2]/80 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#1D3033] border-r border-[#E2DDD5]">
                    Nova Hikari (Stages 01–10)
                  </td>
                  <td className="p-4 sm:p-5 border-r border-[#E2DDD5]">
                    Personal introspection, somatic nervous system settling, untangling cognitive fatigue.
                  </td>
                  <td className="p-4 sm:p-5 border-r border-[#E2DDD5]">
                    Asynchronous, self-guided, 10–20 mins per stage.
                  </td>
                  <td className="p-4 sm:p-5 text-[#4A6E5D] font-medium">
                    100% Private (Local device storage).
                  </td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]/80 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#1D3033] border-r border-[#E2DDD5]">
                    Community Circles
                  </td>
                  <td className="p-4 sm:p-5 border-r border-[#E2DDD5]">
                    Shared humanity, breaking isolation, speaking candidly without networking pressure.
                  </td>
                  <td className="p-4 sm:p-5 border-r border-[#E2DDD5]">
                    90-minute structured sessions (in Bengaluru or virtual cohorts).
                  </td>
                  <td className="p-4 sm:p-5 text-[#1D3033]">
                    Confidential small circle agreement (Chatham House Rule).
                  </td>
                </tr>

                <tr className="hover:bg-[#FAF7F2]/80 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#1D3033] border-r border-[#E2DDD5]">
                    Clinical Therapy & Psychiatry
                  </td>
                  <td className="p-4 sm:p-5 border-r border-[#E2DDD5]">
                    Clinical assessment, treatment for anxiety/depression, trauma therapy, specialized care.
                  </td>
                  <td className="p-4 sm:p-5 border-r border-[#E2DDD5]">
                    50-minute 1-on-1 consultations (In-person in BLR or secure video).
                  </td>
                  <td className="p-4 sm:p-5 text-[#1D3033]">
                    Full clinical doctor-patient confidentiality.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <DevelopmentNotice
            phase="Phase 1 Architectural Scope"
            featureTitle="Framework Overview"
            description="The navigation framework illustrates the interconnected design of MARS. Live circle RSVPs and clinical bookings will be introduced in subsequent phases."
          />
        </div>
      </section>

      {/* 4. Non-Emergency Safety Banner */}
      <section className="py-16 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] flex items-start gap-4 text-xs text-[#3D5255]">
            <ShieldCheck className="w-5 h-5 text-[#C26D53] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-[#1D3033] text-sm block">
                Ethical Scope & Crisis Signposting
              </strong>
              <p className="leading-relaxed">
                MARS Wellbeing is not a substitute for clinical psychiatric intervention or emergency crisis care. If you are experiencing acute suicidal thoughts, severe depression, or medical danger, please call <strong>Tele-MANAS (14416)</strong> or <strong>Emergency (112)</strong> immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
