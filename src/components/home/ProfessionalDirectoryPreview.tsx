"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const DEMO_PRACTITIONERS = [
  {
    sampleId: "DEMO-01",
    name: "Dr. A. Sharma (Sample Placeholder)",
    qualification: "Ph.D., M.Phil in Clinical Psychology (Demonstration Data)",
    focus: "Chronic Anxiety, Cognitive Burnout & Life Transitions",
    languages: "English, Kannada, Hindi",
    mode: "In-Person (Indiranagar, Bengaluru) & Online",
    sampleFee: "₹2,200 (Sample Tariff)",
    slug: "sample-profile-sharma",
  },
  {
    sampleId: "DEMO-02",
    name: "R. Varma (Sample Placeholder)",
    qualification: "M.Sc. Counseling Psychology (Demonstration Data)",
    focus: "Workplace Dynamics, Emotional Exhaustion & Grief",
    languages: "English, Hindi, Bengali",
    mode: "Online & In-Person (Koramangala, Bengaluru)",
    sampleFee: "₹1,800 (Sample Tariff)",
    slug: "sample-profile-varma",
  },
  {
    sampleId: "DEMO-03",
    name: "P. Nair (Sample Placeholder)",
    qualification: "MA Clinical Psychology, Narrative Therapy (Demonstration Data)",
    focus: "Self-Worth, Relationship Grounding & Somatic Pacing",
    languages: "English, Tamil, Kannada",
    mode: "In-Person (Jayanagar, Bengaluru) & Online",
    sampleFee: "₹2,000 (Sample Tariff)",
    slug: "sample-profile-nair",
  },
];

export function ProfessionalDirectoryPreview() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="professionals"
      className="py-24 sm:py-32 bg-[#F5F0E7] border-b border-[#E3E9DE] text-[#1B2926] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A15A]" />
              <span>CLINICAL GOVERNANCE & CARE</span>
            </div>

            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#153D35] leading-tight transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Qualified Mental Health Directory
            </h2>

            <p
              className={`mt-4 text-base sm:text-lg text-[#1B2926]/80 font-light leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Demonstration previews of practitioner profiles. In production, every professional undergoes credential verification, RCI registration checks, and clinical governance vetting.
            </p>
          </div>

          <Link
            href="/professionals"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#153D35] hover:text-[#C9A15A] transition-colors shrink-0"
          >
            <span>View Full Directory Scaffold</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEMO_PRACTITIONERS.map((pro, idx) => (
            <div
              key={pro.sampleId}
              className={`bg-[#FFFFFF] p-8 border border-[#A8B9A2]/40 rounded-3xl flex flex-col justify-between hover:shadow-lg hover:border-[#153D35]/40 transition-all duration-500 relative ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${150 + idx * 100}ms` }}
            >
              <div>
                {/* Demo Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E3E9DE]">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-[#E3E9DE] text-[#153D35] rounded-full">
                    Sample Profile • Demo Only
                  </span>
                  <span className="text-[11px] font-mono text-[#65716A]">{pro.sampleId}</span>
                </div>

                <div className="pt-5">
                  <h3 className="font-display text-2xl font-bold text-[#153D35]">
                    {pro.name}
                  </h3>
                  <p className="text-xs text-[#65716A] font-medium mt-1">
                    {pro.qualification}
                  </p>

                  <div className="mt-5 space-y-2.5 text-xs text-[#1B2926]/85 border-t border-[#E3E9DE] pt-4">
                    <p>
                      <strong className="text-[#153D35]">Focus:</strong> {pro.focus}
                    </p>
                    <p>
                      <strong className="text-[#153D35]">Languages:</strong> {pro.languages}
                    </p>
                    <p>
                      <strong className="text-[#153D35]">Format:</strong> {pro.mode}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#E3E9DE] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#65716A] block">
                    Illustrative Tariff
                  </span>
                  <span className="text-xs font-bold text-[#153D35]">{pro.sampleFee}</span>
                </div>
                <Link
                  href={`/professionals/${pro.slug}`}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#153D35] text-[#F5F0E7] hover:bg-[#1B2926] rounded-full active:scale-[0.98] transition-all shadow-xs"
                >
                  View Bio Demo
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Governance Notice */}
        <div
          className={`mt-10 p-5 bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-2xl flex items-start gap-3.5 text-xs text-[#1B2926]/85 transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <ShieldCheck className="w-5 h-5 text-[#C9A15A] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#153D35]">Institutional & Clinical Governance Disclosure:</strong> No clinical endorsement or professional licensing is active during this development phase. <em>Institutional partnership information will be announced following formal confirmation.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
