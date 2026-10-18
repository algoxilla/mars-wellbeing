import React from "react";
import Link from "next/link";
import { ShieldCheck, AlertCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      <section className="py-14 sm:py-20 border-b border-[#D2D2D7]/60 bg-[#F5F5F7] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2">
            Legal Terms & Scope
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
            Terms of Service
          </h1>
          <p className="mt-3 text-xs font-mono text-[#6E6E73]">
            Last Updated: October 2026 • Jurisdiction: Bengaluru, Karnataka, India
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-sm text-[#6E6E73] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-sans text-xl font-semibold text-[#1D1D1F]">
              1. Nature of Services
            </h2>
            <p>
              MARS Wellbeing provides digital tools for contemplative practice, somatic breath regulation, self-reflection (Nova Hikari), facilitator-led community circles, and healthcare continuity in partnership with Highland Care Private Limited.
            </p>
            <p className="font-medium text-[#1D1D1F]">
              MARS is not an emergency psychiatric hospital, suicide crisis line, or emergency medical facility.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-xl font-semibold text-[#1D1D1F]">
              2. User Eligibility & Conduct
            </h2>
            <p>
              Users must be at least 18 years of age to participate in community cohorts independently. All participants in community spaces must adhere to our strict confidentiality, respectful dialogue, and zero-solicitation guidelines.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-xl font-semibold text-[#1D1D1F]">
              3. Limitation of Liability
            </h2>
            <p>
              Self-guided materials and community circles are intended solely for personal wellbeing and grounding. They are not intended as clinical psychiatric diagnosis or medical prescriptions. Consult a qualified medical practitioner for any clinical psychiatric conditions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-xl font-semibold text-[#1D1D1F]">
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with the platform shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.
            </p>
          </div>

          <div className="pt-6 border-t border-[#D2D2D7]/60 flex items-center justify-between text-xs">
            <Link href="/" className="text-[#1D1D1F] hover:text-[#D96C68] transition-colors">
              ← Return to MARS Home
            </Link>
            <Link href="/privacy" className="text-[#1D1D1F] hover:text-[#D96C68] transition-colors">
              Privacy Policy &gt;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
