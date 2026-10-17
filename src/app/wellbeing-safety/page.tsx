import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import {
  ShieldAlert,
  PhoneCall,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";

export default function WellbeingSafetyPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-5 text-xs font-semibold tracking-wider uppercase text-[#C26D53] bg-[#F9EBE7] border border-[#E8A896]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#C26D53]" />
            <span>Crisis & Emergency Protocols</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Wellbeing & Safety Framework
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-2xl mx-auto leading-relaxed">
            Your safety and ethical care come before everything else. Please review our crisis protocols, non-emergency boundaries, and verified official helplines in India.
          </p>
        </div>
      </section>

      {/* 2. Official Emergency Helplines (Verified) */}
      <section className="py-20 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-[#E2DDD5] pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
              Immediate Human Support
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033] mt-1">
              Verified 24/7 National Helplines (India)
            </h2>
            <p className="text-xs text-[#3D5255] mt-1">
              Free, confidential, government and accredited non-profit crisis helplines available 24 hours a day, 7 days a week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tele-MANAS */}
            <div className="p-8 bg-[#FAF7F2] border-2 border-[#1D3033] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6E8E7E]">
                    National Tele Mental Health Programme
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#EAF1ED] text-[#4A6E5D]">
                    24/7 Toll-Free
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold uppercase text-[#1D3033] mt-3">
                  Tele-MANAS
                </h3>
                <p className="text-xs text-[#3D5255] leading-relaxed mt-1">
                  Government of India national mental health assistance network across states. Multi-lingual counseling and clinical triage.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5]">
                <a
                  href="tel:14416"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#FAF7F2] hover:bg-[#284145] transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#8FA89B]" />
                  <span>Call Toll-Free: 14416 (or 1800-891-4416)</span>
                </a>
              </div>
            </div>

            {/* KIRAN */}
            <div className="p-8 bg-[#FAF7F2] border-2 border-[#1D3033] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6E8E7E]">
                    Ministry of Social Justice & Empowerment
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#EAF1ED] text-[#4A6E5D]">
                    24/7 Toll-Free
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold uppercase text-[#1D3033] mt-3">
                  KIRAN Helpline
                </h3>
                <p className="text-xs text-[#3D5255] leading-relaxed mt-1">
                  National mental health rehabilitation helpline offering first-line psychological support, crisis intervention, and distress relief.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5]">
                <a
                  href="tel:18005990019"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#FAF7F2] hover:bg-[#284145] transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#8FA89B]" />
                  <span>Call Toll-Free: 1800-599-0019</span>
                </a>
              </div>
            </div>

            {/* NIMHANS (Bengaluru) */}
            <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6E8E7E]">
                    Bengaluru Specialized Care
                  </span>
                  <span className="text-xs font-mono text-[#3D5255]">Local Emergency</span>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-3">
                  NIMHANS Emergency Triage
                </h3>
                <p className="text-xs text-[#3D5255] leading-relaxed mt-1">
                  National Institute of Mental Health and Neurosciences, Hosur Road, Bengaluru. 24/7 psychiatric emergency casualty triage.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5]">
                <a
                  href="tel:08026995000"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-[#FAF7F2] text-[#1D3033] border border-[#E2DDD5] hover:bg-[#EAE3D6] transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#6E8E7E]" />
                  <span>Call: 080-26995000 / Casualty</span>
                </a>
              </div>
            </div>

            {/* Emergency Services */}
            <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C26D53]">
                    Police, Fire & Medical
                  </span>
                  <span className="text-xs font-mono text-[#C26D53]">Acute Danger</span>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-3">
                  National Emergency Services
                </h3>
                <p className="text-xs text-[#3D5255] leading-relaxed mt-1">
                  For immediate physical danger, medical emergencies, or life-threatening situations anywhere in India.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5]">
                <a
                  href="tel:112"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-[#C26D53] text-[#FAF7F2] hover:bg-[#A8573E] transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#FAF7F2]" />
                  <span>Call Emergency: 112</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Non-Emergency Disclaimer */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E2DDD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs sm:text-sm text-[#3D5255] leading-relaxed">
          <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
            What MARS Wellbeing Is and Is Not
          </h3>
          <p>
            MARS Wellbeing is an intentional, preventative, and psychoeducational platform. It is designed to provide spaces for reflection (Nova Hikari), supportive human dialogue (Community Circles), and outpatient appointments with licensed psychologists.
          </p>
          <div className="p-5 bg-[#F5F0E7] border border-[#E2DDD5] space-y-2">
            <strong className="text-[#1D3033] block uppercase tracking-wider text-xs font-semibold">
              Explicit Boundaries:
            </strong>
            <p>
              1. MARS does not provide inpatient psychiatric care, acute suicide crisis intervention, or prescription medical management.
            </p>
            <p>
              2. Participation in Nova Hikari or community circles does not establish a doctor-patient clinical relationship.
            </p>
            <p>
              3. If our facilitators or practitioners identify that a participant is in immediate danger to themselves or others, ethical clinical protocols mandate that we direct them to emergency services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
