import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  Phone,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MapPin,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Crisis Protocols & Safety Framework — Verified Helplines India",
  description:
    "Safety standards, ethical boundaries, and verified 24/7 emergency helplines in India including Tele-MANAS (14416), Emergency (112), and Vandrevala Foundation (+91 9999 666 555).",
  alternates: {
    canonical: "/wellbeing-safety",
  },
  openGraph: {
    title: "Wellbeing & Safety Framework — MARS Wellbeing",
    description:
      "Safety standards, ethical non-emergency boundaries, and verified 24/7 emergency mental health helplines across India.",
    url: "https://www.marswellbeing.xyz/wellbeing-safety",
    siteName: "MARS Wellbeing",
    locale: "en_IN",
  },
};

export default function WellbeingSafetyPage() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      {/* 1. Header Hero */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-20 border-b border-[#D2D2D7]/60 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#D96C68] block mb-2 sm:mb-3">
            Crisis & Emergency Protocols
          </span>

          <h1 className="font-sans font-semibold tracking-tight text-[#1D1D1F] text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
            Wellbeing & Safety Framework.
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-2xl mx-auto text-balance">
            Your safety and ethical care come before everything else. Please review our crisis protocols, non-emergency boundaries, and verified official helplines in India.
          </p>
        </div>
      </section>

      {/* 2. Official Emergency Helplines */}
      <section className="py-14 sm:py-20 bg-[#F5F5F7] border-b border-[#D2D2D7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="border-b border-[#D2D2D7]/60 pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
              Immediate Human Support
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-semibold text-[#1D1D1F] mt-1">
              Verified 24/7 National Helplines (India).
            </h2>
            <p className="text-sm text-[#6E6E73] mt-1">
              Free, confidential, government and accredited crisis helplines available 24 hours a day, 7 days a week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tele-MANAS */}
            <div className="p-8 bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] sm:rounded-[24px] flex flex-col justify-between space-y-4 shadow-xs">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#D2D2D7]/60">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                    National Tele Mental Health
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#F5F5F7] text-[#1D1D1F] border border-[#D2D2D7] rounded-full">
                    24/7 Toll-Free
                  </span>
                </div>
                <h3 className="font-sans text-2xl font-semibold text-[#1D1D1F] mt-4">
                  Tele-MANAS (14416)
                </h3>
                <p className="text-xs text-[#6E6E73] mt-2 leading-relaxed">
                  Initiative by the Ministry of Health and Family Welfare (MoHFW) with NIMHANS Bengaluru as the apex digital coordinating center. Multi-lingual clinical counselors available across India.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D2D2D7]/60 flex items-center justify-between">
                <a
                  href="tel:14416"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] rounded-full transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 14416 (Free)</span>
                </a>
                <span className="text-xs text-[#6E6E73]">Toll-Free Nationwide</span>
              </div>
            </div>

            {/* National Emergency 112 */}
            <div className="p-8 bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] sm:rounded-[24px] flex flex-col justify-between space-y-4 shadow-xs">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#D2D2D7]/60">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                    National Emergency
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#F5F5F7] text-[#1D1D1F] border border-[#D2D2D7] rounded-full">
                    Emergency Response
                  </span>
                </div>
                <h3 className="font-sans text-2xl font-semibold text-[#1D1D1F] mt-4">
                  All-India Emergency (112)
                </h3>
                <p className="text-xs text-[#6E6E73] mt-2 leading-relaxed">
                  Unified national emergency service in India for immediate police, ambulance, medical, and acute physical rescue situations.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D2D2D7]/60 flex items-center justify-between">
                <a
                  href="tel:112"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#1D1D1F] hover:bg-[#2D2D2F] rounded-full transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 112</span>
                </a>
                <span className="text-xs text-[#6E6E73]">Ambulance & Medical</span>
              </div>
            </div>

            {/* Vandrevala Foundation */}
            <div className="p-8 bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] sm:rounded-[24px] flex flex-col justify-between space-y-4 shadow-xs">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#D2D2D7]/60">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                    Psychological Crisis Support
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#F5F5F7] text-[#1D1D1F] border border-[#D2D2D7] rounded-full">
                    24/7 Helpline
                  </span>
                </div>
                <h3 className="font-sans text-2xl font-semibold text-[#1D1D1F] mt-4">
                  Vandrevala Foundation
                </h3>
                <p className="text-xs text-[#6E6E73] mt-2 leading-relaxed">
                  Confidential crisis intervention, psychological first aid, and emotional guidance provided round the clock by trained counselors.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D2D2D7]/60 flex items-center justify-between">
                <a
                  href="tel:+919999666555"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#1D1D1F] bg-[#F5F5F7] border border-[#D2D2D7] hover:border-[#1D1D1F] rounded-full transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 9999 666 555</span>
                </a>
              </div>
            </div>

            {/* KIRAN Helpline */}
            <div className="p-8 bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] sm:rounded-[24px] flex flex-col justify-between space-y-4 shadow-xs">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#D2D2D7]/60">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                    Ministry of Social Justice
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#F5F5F7] text-[#1D1D1F] border border-[#D2D2D7] rounded-full">
                    Toll-Free
                  </span>
                </div>
                <h3 className="font-sans text-2xl font-semibold text-[#1D1D1F] mt-4">
                  KIRAN (1800-599-0019)
                </h3>
                <p className="text-xs text-[#6E6E73] mt-2 leading-relaxed">
                  24/7 national mental health helpline providing early screening, psychological first aid, panic management, and rehabilitation guidance across 13 languages.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D2D2D7]/60 flex items-center justify-between">
                <a
                  href="tel:18005990019"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#1D1D1F] bg-[#F5F5F7] border border-[#D2D2D7] hover:border-[#1D1D1F] rounded-full transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>1800-599-0019</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operational Boundaries & Ethical Framework */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block">
              Ethical Standards
            </span>
            <h2 className="font-sans text-3xl font-semibold text-[#1D1D1F]">
              MARS Scope & Boundaries.
            </h2>
          </div>

          <div className="space-y-4 text-sm text-[#6E6E73] leading-relaxed">
            <p>
              <strong>1. Contemplative Sanctuary:</strong> MARS is a reflective, preventative wellbeing space. Our Nova Hikari sensory practices and community circles are designed to encourage nervous system regulation, unhurried introspection, and peer reassurance. They do not constitute formal psychotherapy or medical treatment.
            </p>
            <p>
              <strong>2. Clinical Referrals:</strong> Through our partnership with Highland Care Private Limited, members seeking formal clinical care are directed to licensed psychologists, accredited psychiatrists, and hospital facilities.
            </p>
            <p>
              <strong>3. Radical Privacy:</strong> We do not track or sell personal reflections written inside our digital tools. Reflections remain in your browser storage.
            </p>
          </div>

          <div className="pt-6 border-t border-[#D2D2D7]/60 flex items-center justify-between">
            <Link
              href="/"
              className="text-xs font-medium text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
            >
              ← Return to MARS Home
            </Link>
            <a
              href="tel:+919006219668"
              className="text-xs font-semibold text-[#D96C68] hover:underline"
            >
              MARS Team Guidance: +91 90062 19668
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
