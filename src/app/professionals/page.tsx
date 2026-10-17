"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Languages,
  DollarSign,
  Filter,
  Sparkles,
} from "lucide-react";

interface SampleDoctor {
  sampleId: string;
  name: string;
  qualification: string;
  speciality: string;
  languages: string[];
  mode: string;
  location: string;
  sampleFee: string;
  slug: string;
}

const SAMPLE_DOCTORS: SampleDoctor[] = [
  {
    sampleId: "DEMO-01",
    name: "Dr. A. Sharma (Sample Placeholder)",
    qualification: "Ph.D., M.Phil in Clinical Psychology (Demonstration Data)",
    speciality: "Chronic Anxiety, Cognitive Burnout & Life Transitions",
    languages: ["English", "Kannada", "Hindi"],
    mode: "In-Person & Online",
    location: "Indiranagar, Bengaluru",
    sampleFee: "₹2,200 (Sample Tariff)",
    slug: "sample-profile-sharma",
  },
  {
    sampleId: "DEMO-02",
    name: "R. Varma (Sample Placeholder)",
    qualification: "M.Sc. Counseling Psychology (Demonstration Data)",
    speciality: "Workplace Dynamics, Emotional Exhaustion & Grief",
    languages: ["English", "Hindi", "Bengali"],
    mode: "Online & In-Person",
    location: "Koramangala, Bengaluru",
    sampleFee: "₹1,800 (Sample Tariff)",
    slug: "sample-profile-varma",
  },
  {
    sampleId: "DEMO-03",
    name: "P. Nair (Sample Placeholder)",
    qualification: "MA Clinical Psychology, Narrative Therapy (Demonstration Data)",
    speciality: "Self-Worth, Relationship Grounding & Somatic Pacing",
    languages: ["English", "Tamil", "Kannada"],
    mode: "In-Person & Online",
    location: "Jayanagar, Bengaluru",
    sampleFee: "₹2,000 (Sample Tariff)",
    slug: "sample-profile-nair",
  },
  {
    sampleId: "DEMO-04",
    name: "Dr. S. Kulkarni (Sample Placeholder)",
    qualification: "MD Psychiatry (Demonstration Data)",
    speciality: "Psychiatric Triage, Mood Regulation & Sleep",
    languages: ["English", "Kannada", "Marathi"],
    mode: "In-Person & Online",
    location: "Malleshwaram, Bengaluru",
    sampleFee: "₹2,500 (Sample Tariff)",
    slug: "sample-profile-kulkarni",
  },
  {
    sampleId: "DEMO-05",
    name: "T. Banerjee (Sample Placeholder)",
    qualification: "M.Phil Clinical Psychology (Demonstration Data)",
    speciality: "ADHD in Adults, Executive Dysfunction & Burnout",
    languages: ["English", "Hindi", "Bengali"],
    mode: "Online Exclusively",
    location: "Bengaluru & Pan-India Online",
    sampleFee: "₹1,900 (Sample Tariff)",
    slug: "sample-profile-banerjee",
  },
  {
    sampleId: "DEMO-06",
    name: "K. Reddy (Sample Placeholder)",
    qualification: "M.Sc. Applied Psychology (Demonstration Data)",
    speciality: "Relational Trauma, Grounding & Young Adults",
    languages: ["English", "Telugu", "Kannada"],
    mode: "In-Person & Online",
    location: "Whitefield, Bengaluru",
    sampleFee: "₹1,750 (Sample Tariff)",
    slug: "sample-profile-reddy",
  },
];

export default function ProfessionalsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");

  const filteredDoctors =
    selectedLanguage === "All"
      ? SAMPLE_DOCTORS
      : SAMPLE_DOCTORS.filter((doc) => doc.languages.includes(selectedLanguage));

  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Directory Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Clinical Care Directory
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Qualified Mental Health Directory
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-2xl mx-auto leading-relaxed">
            Demonstration previews of practitioner profiles. In production, every professional will undergo credential verification, RCI registration checks, and clinical governance vetting.
          </p>
        </div>
      </section>

      {/* 2. Verification Standards Strip */}
      <section className="py-8 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#3D5255]">
            <div className="flex items-start gap-2.5 p-3 bg-[#FAF7F2] border border-[#E2DDD5]">
              <CheckCircle2 className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
              <span>Accredited Postgraduate Degrees (M.Phil / Ph.D. / MD)</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 bg-[#FAF7F2] border border-[#E2DDD5]">
              <CheckCircle2 className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
              <span>RCI Clinical Registration Validation</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 bg-[#FAF7F2] border border-[#E2DDD5]">
              <CheckCircle2 className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
              <span>Verified Supervised Clinical Hours</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 bg-[#FAF7F2] border border-[#E2DDD5]">
              <CheckCircle2 className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
              <span>Transparent INR Pricing per Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filter Bar & Doctors Grid */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E2DDD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Language Filter */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E2DDD5] mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
              <Filter className="w-4 h-4 text-[#6E8E7E]" />
              <span>Filter by Language:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "English", "Kannada", "Hindi", "Tamil", "Bengali"].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all border ${
                    selectedLanguage === lang
                      ? "bg-[#1D3033] text-[#F5F0E7] border-[#1D3033]"
                      : "bg-[#F5F0E7] text-[#3D5255] border-[#E2DDD5] hover:border-[#6E8E7E]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.sampleId}
                className="bg-[#F5F0E7] p-8 border border-[#E2DDD5] flex flex-col justify-between hover:border-[#6E8E7E] transition-all relative space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#EAE3D6] text-[#3D5255]">
                      Sample Profile — Demo Only
                    </span>
                    <span className="text-[11px] font-mono text-[#6E8E7E]">{doc.sampleId}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-4">
                    {doc.name}
                  </h3>

                  <p className="text-xs text-[#6E8E7E] font-medium mt-1">
                    {doc.qualification}
                  </p>

                  <div className="mt-5 space-y-2.5 text-xs text-[#3D5255] border-t border-[#E2DDD5]/70 pt-4">
                    <p>
                      <strong className="text-[#1D3033]">Focus:</strong> {doc.speciality}
                    </p>
                    <p>
                      <strong className="text-[#1D3033]">Languages:</strong> {doc.languages.join(", ")}
                    </p>
                    <p>
                      <strong className="text-[#1D3033]">Format:</strong> {doc.mode} ({doc.location})
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6E8E7E] block">Sample Tariff</span>
                    <span className="text-xs font-semibold text-[#1D3033]">{doc.sampleFee}</span>
                  </div>

                  <Link
                    href={`/professionals/${doc.slug}`}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-colors"
                  >
                    View Bio Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Statement */}
          <div className="mt-12 p-5 bg-[#F5F0E7] border border-[#E2DDD5] flex items-start gap-3.5 text-xs text-[#3D5255]">
            <ShieldCheck className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1D3033]">Institutional & Clinical Governance Disclosure:</strong> No clinical endorsement or professional licensing is active during this development phase. <em>Institutional partnership information will be announced following formal confirmation.</em>
            </p>
          </div>

          <DevelopmentNotice
            phase="Phase 1 Demonstration"
            featureTitle="Directory Preview"
            description="The profiles displayed are sample representations for architecture review. In Phase 3, live practitioner onboarding, scheduling calendar integration, and Razorpay payment escrow will be activated."
          />
        </div>
      </section>

      {/* 4. Professional Application Callout */}
      <section className="py-20 bg-[#1D3033] text-[#F5F0E7] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#FAF7F2]">
            Are You a Licensed Mental Health Professional?
          </h2>
          <p className="text-sm sm:text-base text-[#E2DDD5]/85 max-w-xl mx-auto">
            We are accepting applications from clinical psychologists, psychiatrists, and licensed therapists in Bengaluru who share our commitment to ethical, unhurried care.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#F5F0E7] text-[#1D3033] hover:bg-[#FAF7F2] font-mono transition-all"
            >
              <span>Apply for Clinical Onboarding</span>
              <ArrowRight className="w-4 h-4 text-[#6E8E7E]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
