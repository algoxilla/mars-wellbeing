import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#F5F5F7] text-[#1D1D1F] border-t border-[#D2D2D7]/60 pt-10 pb-12 mt-auto font-sans">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        {/* Apple Style Footnotes (Numbered Disclaimers) */}
        <section aria-label="Footnotes and Disclaimers" className="text-[11px] text-[#6E6E73] leading-relaxed pb-8 space-y-2.5">
          <p>
            1. <strong>Emergency & Crisis Boundaries:</strong> MARS Wellbeing is a contemplative sanctuary and community support platform. It is not an emergency crisis intervention service. If you or someone you know is in acute distress or experiencing thoughts of self-harm, please call Tele-MANAS at <strong>14416</strong> (toll-free, 24/7 national mental health helpline), dial <strong>112</strong> for emergency services, or contact the Vandrevala Foundation at <strong>+91 9999 666 555</strong> immediately.
          </p>
          <p>
            2. <strong>Clinical Governance:</strong> Healthcare partnerships and medical oversight are provided in affiliation with <strong>Highland Care Private Limited</strong> (<a href="https://hcmhospital.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1D1D1F]">hcmhospital.com</a>). Specialized consultations, psychological assessments, and psychiatric continuity are conducted by licensed clinical practitioners.
          </p>
          <p>
            3. <strong>Early Access Cohorts:</strong> Nova Hikari experiences and Bengaluru community circles operate in small facilitated groups to protect confidentiality and quality of connection. Registration indicates interest and does not establish a formal doctor-patient relationship.
          </p>
        </section>

        {/* Apple Divider */}
        <div className="h-px w-full bg-[#D2D2D7]" aria-hidden="true" />

        {/* Apple 5-Column Directory Grid */}
        <nav aria-label="Directory" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 py-8 text-[12px]">
          {/* Column 1: Experiences */}
          <div className="space-y-3">
            <h3 className="font-semibold text-[#1D1D1F]">Experiences</h3>
            <ul className="space-y-2 text-[#6E6E73]">
              <li>
                <Link href="/nova-hikari" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Nova Hikari (10 Stages)
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Bengaluru Circles
                </Link>
              </li>
              <li>
                <Link href="/professionals" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Healthcare Pathways
                </Link>
              </li>
              <li>
                <Link href="#explore" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Contemplative Practice
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Organization */}
          <div className="space-y-3">
            <h3 className="font-semibold text-[#1D1D1F]">Organization</h3>
            <ul className="space-y-2 text-[#6E6E73]">
              <li>
                <Link href="/about" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  About MARS
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Medical Leadership
                </Link>
              </li>
              <li>
                <Link href="/about#milestones" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Bharat Mandapam
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Healthcare Partner */}
          <div className="space-y-3">
            <h3 className="font-semibold text-[#1D1D1F]">Healthcare Partner</h3>
            <ul className="space-y-2 text-[#6E6E73]">
              <li>
                <a
                  href="https://hcmhospital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D1D1F] hover:underline transition-colors inline-flex items-center gap-1"
                >
                  <span>Highland Care Pvt. Ltd.</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/professionals" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Clinical Continuity
                </Link>
              </li>
              <li>
                <Link href="/wellbeing-safety" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Safety Standards
                </Link>
              </li>
              <li>
                <a
                  href="tel:+919006219668"
                  className="hover:text-[#1D1D1F] hover:underline transition-colors"
                >
                  Call +91 90062 19668
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Access & Account */}
          <div className="space-y-3">
            <h3 className="font-semibold text-[#1D1D1F]">Account</h3>
            <ul className="space-y-2 text-[#6E6E73]">
              <li>
                <Link href="/login" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Member Sign In
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Member Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Admin Console
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Ethics */}
          <div className="space-y-3">
            <h3 className="font-semibold text-[#1D1D1F]">Legal & Ethics</h3>
            <ul className="space-y-2 text-[#6E6E73]">
              <li>
                <Link href="/privacy" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/wellbeing-safety" className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  Medical Boundaries
                </Link>
              </li>
              <li>
                <a
                  href="tel:14416"
                  className="hover:text-[#1D1D1F] hover:underline transition-colors"
                >
                  Tele-MANAS (14416)
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Apple Divider */}
        <div className="h-px w-full bg-[#D2D2D7]" aria-hidden="true" />

        {/* Apple Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px] text-[#6E6E73]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Copyright © 2026 MARS Wellbeing. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-[#1D1D1F] hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-[#1D1D1F] hover:underline">
              Terms of Use
            </Link>
            <span>|</span>
            <Link href="/wellbeing-safety" className="hover:text-[#1D1D1F] hover:underline">
              Clinical Boundaries
            </Link>
            <span>|</span>
            <a
              href="https://hcmhospital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1D1D1F] hover:underline"
            >
              Highland Care Hospital
            </a>
          </div>

          <div className="text-[#6E6E73] shrink-0">
            <span>India (English) • Bengaluru, Karnataka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
