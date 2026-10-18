"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  MapPin,
  Languages,
  Clock,
  Filter,
} from "lucide-react";

interface DoctorProfile {
  id: string;
  name: string;
  qualification: string;
  speciality: string;
  languages: string[];
  mode: string;
  location: string;
  clinicalAffiliation: string;
}

const CLINICAL_PRACTITIONERS: DoctorProfile[] = [
  {
    id: "CLIN-01",
    name: "Dr. Saurabh Dixit",
    qualification: "Senior Consultant Surgeon & Clinical Director",
    speciality: "Clinical Governance, Trauma-Informed Continuity & Psychosomatic Health",
    languages: ["English", "Hindi"],
    mode: "Hospital & Consultation",
    location: "Bengaluru",
    clinicalAffiliation: "Highland Care Private Limited",
  },
  {
    id: "CLIN-02",
    name: "Dr. Uzma Dixit",
    qualification: "Family Physician & Women's Health Consultant",
    speciality: "Primary Healthcare, Stress Physiology & Chronic Fatigue Management",
    languages: ["English", "Hindi", "Urdu"],
    mode: "In-Person & Virtual",
    location: "Bengaluru",
    clinicalAffiliation: "Highland Care Private Limited",
  },
  {
    id: "CLIN-03",
    name: "Dr. Raghav Jha",
    qualification: "Healthcare Strategy & Clinical Ecosystems",
    speciality: "Integrative Mental Health Pathways & Community Health Systems",
    languages: ["English", "Hindi"],
    mode: "Consultation & Ecosystem",
    location: "Bengaluru",
    clinicalAffiliation: "MARS Wellbeing Ecosystem",
  },
  {
    id: "CLIN-04",
    name: "Dr. Shreyansh Ojha",
    qualification: "Clinical Innovation & Digital Health",
    speciality: "Preventative Mental Health, Cognitive Pacing & Behavioral Protocols",
    languages: ["English", "Hindi"],
    mode: "Consultation & Protocols",
    location: "Bengaluru",
    clinicalAffiliation: "MARS Clinical Innovation",
  },
];

export default function ClinicalCarePage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");

  const filteredDoctors =
    selectedLanguage === "All"
      ? CLINICAL_PRACTITIONERS
      : CLINICAL_PRACTITIONERS.filter((d) => d.languages.includes(selectedLanguage));

  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      {/* 1. Apple Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#D2D2D7]/60 overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2 sm:mb-3">
            Clinical Governance • Medical Continuity
          </span>

          <h1 className="font-sans font-semibold tracking-tight text-[#1D1D1F] text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
            Grounded in clinical care.
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-2xl mx-auto text-balance">
            Contemplative practices provide space to breathe, but they do not replace clinical diagnosis. In partnership with Highland Care Private Limited, MARS offers clear, verified pathways to accredited psychiatrists, clinical psychologists, and hospital care.
          </p>

          <div className="mt-6 flex flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://hcmhospital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all shadow-xs"
            >
              <span>Visit Highland Care (hcmhospital.com)</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </a>
            <a
              href="tel:+919006219668"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] border border-[#D2D2D7] active:scale-[0.98] rounded-full transition-all"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#D96C68]" />
              <span>Call +91 90062 19668</span>
            </a>
          </div>
        </div>

        {/* Flagship Consultation Room Visual */}
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mt-10 sm:mt-14">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#F5F5F7] shadow-sm">
            <Image
              src="/images/professional-care.jpg"
              alt="Dignified clinical consultation room overlooking tranquil garden greenery"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 2. Clinical Distinction & Hospital Affiliation Banner */}
      <section className="py-12 sm:py-16 bg-[#F5F5F7] border-b border-[#D2D2D7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Box 1: Wellbeing vs Clinical Care */}
            <div className="bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] p-6 sm:p-8 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D96C68]">
                Clear Boundaries
              </span>
              <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
                Contemplative Space vs. Clinical Treatment
              </h3>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Nova Hikari and community circles are designed for non-clinical stress reduction, self-reflection, and social connection. They do not constitute psychotherapy or psychiatric treatment.
              </p>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                If your screening or personal assessment indicates acute anxiety, clinical depression, trauma, or medical distress, MARS guides you immediately into formal clinical pathways.
              </p>
            </div>

            {/* Box 2: Highland Care Partnership */}
            <div className="bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] p-6 sm:p-8 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F]">
                Healthcare Partner
              </span>
              <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
                Highland Care Private Limited
              </h3>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Highland Care provides institutional healthcare governance, clinical triage oversight, and direct continuity to accredited hospitals and psychiatric specialists in Bengaluru.
              </p>
              <div className="pt-2">
                <a
                  href="https://hcmhospital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D96C68] hover:underline"
                >
                  <span>Explore Highland Care Hospital (hcmhospital.com)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founding Medical Leadership & Clinicians */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#D2D2D7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2">
              Medical Leadership
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
              Founding Clinicians & Advisors.
            </h2>
            <p className="mt-3 text-base text-[#6E6E73]">
              Every protocol in MARS is shaped by practicing medical doctors and healthcare leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-[20px] p-6 flex flex-col justify-between hover:border-[#1D1D1F]/40 transition-colors shadow-xs"
              >
                <div>
                  <span className="font-mono text-[11px] font-semibold text-[#D96C68] block">
                    {doc.clinicalAffiliation}
                  </span>
                  <h3 className="font-sans text-lg font-semibold text-[#1D1D1F] mt-2">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-[#6E6E73] font-medium mt-1 leading-snug">
                    {doc.qualification}
                  </p>
                  <p className="text-xs text-[#1D1D1F]/80 mt-3 leading-relaxed">
                    {doc.speciality}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#D2D2D7]/60 space-y-1.5 text-xs text-[#6E6E73]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#1D1D1F]" />
                    <span>{doc.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Languages className="w-3.5 h-3.5 text-[#1D1D1F]" />
                    <span>{doc.languages.join(", ")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Emergency Helplines Notice */}
      <section className="py-14 sm:py-20 bg-[#F5F5F7] text-[#1D1D1F]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#D2D2D7] flex items-center justify-center mx-auto text-[#D96C68]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
            Need immediate medical or psychological assistance?
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed max-w-xl mx-auto">
            If you or a loved one are experiencing acute emotional crisis, self-harm impulses, or severe psychiatric distress, please connect with official emergency services right away:
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a
              href="tel:14416"
              className="px-5 py-2.5 rounded-full bg-[#FFFFFF] border border-[#D2D2D7] text-[#1D1D1F] hover:border-[#1D1D1F] transition-colors"
            >
              Tele-MANAS: 14416 (24/7 Toll-Free)
            </a>
            <a
              href="tel:112"
              className="px-5 py-2.5 rounded-full bg-[#FFFFFF] border border-[#D2D2D7] text-[#1D1D1F] hover:border-[#1D1D1F] transition-colors"
            >
              Emergency Helpline: 112
            </a>
            <a
              href="tel:+919999666555"
              className="px-5 py-2.5 rounded-full bg-[#FFFFFF] border border-[#D2D2D7] text-[#1D1D1F] hover:border-[#1D1D1F] transition-colors"
            >
              Vandrevala Foundation: +91 9999 666 555
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
