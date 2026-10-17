import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Governance & Compliance
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Privacy Policy
          </h1>
          <p className="mt-4 text-xs font-mono text-[#3D5255]/80">
            Last Updated: October 2026 • Compliant with DPDP Act 2023 (India)
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-[#3D5255] leading-relaxed">
          <div className="p-6 bg-[#FAF7F2] border border-[#6E8E7E] space-y-2">
            <strong className="text-[#1D3033] text-sm block font-semibold uppercase tracking-wider">
              Our Core Privacy Pledge
            </strong>
            <p>
              Your inner life is not for sale. MARS does not run third-party advertising pixels (no Meta Pixel, no data brokers), does not sell personal health reflections, and will never share individual data with your employer.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              1. Local-First Data Storage for Reflections
            </h2>
            <p>
              When you participate in Nova Hikari, your responses to contemplative inquiries and somatic exercises are saved locally in your browser storage. In Phase 1, they are never uploaded to any remote server without your explicit action.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              2. Information We Collect
            </h2>
            <p>
              When you register for early access or submit an application, we collect your name, email address, city, and indicated areas of interest solely for cohort allocation and direct communication.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              3. Data Subject Rights Under DPDP Act 2023
            </h2>
            <p>
              Under Indian data protection law, you possess the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request a complete export of any personal data stored on your account.</li>
              <li>Withdraw consent and request immediate, permanent deletion of your account.</li>
              <li>Nominate a representative in the event of death or incapacity.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              4. Contact Our Data Protection Officer
            </h2>
            <p>
              For privacy requests or inquiries regarding data protection, please contact us at privacy@marswellbeing.in or via our <Link href="/contact" className="underline text-[#1D3033]">contact portal</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
