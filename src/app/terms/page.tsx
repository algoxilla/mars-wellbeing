import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { ShieldCheck, AlertCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Legal Terms & Scope
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Terms of Service
          </h1>
          <p className="mt-4 text-xs font-mono text-[#3D5255]/80">
            Last Updated: October 2026 • Jurisdiction: Bengaluru, Karnataka, India
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-[#3D5255] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              1. Nature of Services
            </h2>
            <p>
              MARS Wellbeing provides digital tools for psychoeducation, guided self-reflection (Nova Hikari), facilitator-led community circles, and an outpatient directory of qualified mental health professionals.
            </p>
            <p className="font-medium text-[#1D3033]">
              MARS is not an emergency psychiatric hospital, suicide crisis line, or emergency medical facility.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              2. User Eligibility & Conduct
            </h2>
            <p>
              Users must be at least 18 years of age to book consultations or participate in community circles independently. All participants in community spaces must adhere to our non-harassment, confidentiality, and anti-solicitation guidelines.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              3. Limitation of Liability
            </h2>
            <p>
              Self-guided materials and community circles are intended solely for personal wellbeing and grounding. They are not intended as clinical psychiatric diagnosis or medical prescriptions. Consult a qualified medical practitioner for any clinical psychiatric conditions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with the platform shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
