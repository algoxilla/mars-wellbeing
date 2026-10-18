import React from "react";
import Link from "next/link";
import { Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      <section className="py-14 sm:py-20 border-b border-[#D2D2D7]/60 bg-[#F5F5F7] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2">
            Governance & Compliance
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs font-mono text-[#6E6E73]">
            Last Updated: October 2026 • Compliant with DPDP Act 2023 (India)
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-sm text-[#6E6E73] leading-relaxed">
          <div className="p-6 bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-2xl space-y-2">
            <strong className="text-[#1D1D1F] text-sm block font-semibold">
              Our Core Privacy Pledge
            </strong>
            <p>
              Your inner reflections are private. MARS Wellbeing does not run third-party advertising trackers or data-broker pixels, does not sell personal health reflections, and will never share individual data with your employer.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-xl font-semibold text-[#1D1D1F]">
              1. Local-First Storage for Contemplative Reflections
            </h2>
            <p>
              When you participate in Nova Hikari, your responses to contemplative inquiries and somatic exercises are saved locally on your device. They are not uploaded or indexed by our servers without your explicit permission.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-xl font-semibold text-[#1D1D1F]">
              2. Information We Collect
            </h2>
            <p>
              When you register for early access or create an account, we collect your name, email address, city, and indicated areas of interest solely for cohort allocation, customer support, and direct communication.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-xl font-semibold text-[#1D1D1F]">
              3. Data Subject Rights Under DPDP Act 2023
            </h2>
            <p>
              Under Indian data protection law, you possess the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request an export of any personal data stored with your account.</li>
              <li>Request full deletion of your user profile and early access records at any time.</li>
              <li>Revoke marketing or cohort communication consent.</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-[#D2D2D7]/60 flex items-center justify-between text-xs">
            <Link href="/" className="text-[#1D1D1F] hover:text-[#D96C68] transition-colors">
              ← Return to MARS Home
            </Link>
            <Link href="/terms" className="text-[#1D1D1F] hover:text-[#D96C68] transition-colors">
              Terms of Service &gt;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
