"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const TEAM = [
  {
    name: "Dr. Saurabh Dixit",
    role: "Senior Consultant Surgeon",
    photo: "/team/dr-saurabh-dixit.jpg",
  },
  {
    name: "Dr. Uzma Dixit",
    role: "Family Physician & Obstetrics",
    photo: "/team/dr-uzma-dixit.jpg",
  },
  {
    name: "Raghav Jha",
    role: "Ecosystem Partnerships",
    photo: "/team/dr-raghav-jha.jpg",
  },
  {
    name: "Shreyansh Ojha",
    role: "Clinical Innovation",
    photo: "/team/dr-shreyansh-ojha.jpg",
  },
];

export function AppleTrustStorySection() {
  return (
    <section
      id="about"
      aria-label="Clinical Governance & Milestones"
      className="bg-[#FFFFFF] py-6 sm:py-10"
    >
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6">
        {/* Apple 2-Column Promotional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Tile 1: Highland Care Healthcare Partner */}
          <div className="bg-[#F5F5F7] rounded-[20px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between p-6 sm:p-9 text-center relative border border-[#D2D2D7]/50 shadow-xs">
            <div className="relative z-10 max-w-md mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] block mb-2">
                Clinical Governance
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                Highland Care Hospital.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed">
                Direct clinical continuity with accredited psychiatrists, psychologists, and specialized hospital facilities.
              </p>
              <div className="mt-3.5">
                <a
                  href="https://hcmhospital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
                >
                  <span>Visit Highland Care (hcmhospital.com)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mt-6 bg-[#FFFFFF] border border-[#D2D2D7]/50">
              <Image
                src="/images/professional-care.jpg"
                alt="Dignified clinical consultation room overlooking peaceful garden greenery"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Tile 2: Medical Leadership (4 Doctors) */}
          <div className="bg-[#F5F5F7] rounded-[20px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between p-6 sm:p-9 text-center relative border border-[#D2D2D7]/50 shadow-xs">
            <div className="relative z-10 max-w-md mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] block mb-2">
                Founded by Clinicians
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                Grounded in medicine.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed">
                Conceived by practicing medical doctors and clinical specialists rooted in Bengaluru.
              </p>
              <div className="mt-3.5">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
                >
                  <span>Meet the Doctors</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Clean 4-doctor portrait display */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full mt-6 aspect-[16/9] items-center">
              {TEAM.map((doctor) => (
                <div key={doctor.name} className="flex flex-col items-center">
                  <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#D2D2D7]/60">
                    <Image
                      src={doctor.photo}
                      alt={doctor.name}
                      fill
                      loading="eager"
                      sizes="120px"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="text-[11px] font-semibold text-[#1D1D1F] mt-2 line-clamp-1">
                    {doctor.name}
                  </p>
                  <p className="text-[10px] text-[#6E6E73] line-clamp-1">
                    {doctor.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 3: National Milestone (Bharat Mandapam) */}
          <div className="bg-[#F5F5F7] rounded-[20px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between p-6 sm:p-9 text-center relative border border-[#D2D2D7]/50 shadow-xs">
            <div className="relative z-10 max-w-md mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] block mb-2">
                National Milestone
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                Bharat Mandapam, New Delhi.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed">
                Unveiling the MARS Wellbeing vision on India&apos;s premier national convention stage—sharing our commitment to accessible, clinically grounded mental health support.
              </p>
              <div className="mt-3.5">
                <Link
                  href="/about#milestones"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
                >
                  <span>Explore Milestone Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Authentic 16:9 Editorial Milestone Presentation */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mt-6 bg-[#040907] border border-[#D2D2D7]/60 shadow-inner">
              <Image
                src="/milestones/bharat-mandapam-official.jpg"
                alt="MARS launch presentation at Bharat Mandapam, New Delhi featuring the illuminated amphitheatre and Nataraja statue at night"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Tile 4: Premium Editorial Publication Showcase (Highland Care BLOOM Magazine) */}
          <div className="bg-[#F5F5F7] rounded-[20px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between p-6 sm:p-9 text-center relative border border-[#D2D2D7]/50 shadow-xs">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#D2D2D7]/80 text-[10px] font-semibold uppercase tracking-widest text-[#D96C68] mb-2">
                <span>Featured Publication • Highland Care</span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                BLOOM Magazine • Issue 01
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed">
                Curated healthcare and somatic wellness publication from Highland Care Multispeciality Hospital, examining preventative health, clinical continuity, and holistic restoration.
              </p>
              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2">
                <Link
                  href="/journal/bloom-magazine-issue-01"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#FFFFFF] bg-[#1D1D1F] hover:bg-[#2D2D2F] rounded-full transition-colors shadow-xs"
                >
                  <span>Read Newsletter</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://hcmhospital.com/wp-content/uploads/2026/09/BLOOM_Issue01_Highland_Health_Revised-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#1D1D1F] hover:bg-[#E5E5EA] border border-[#D2D2D7] rounded-full px-3 py-1.5 transition-colors"
                >
                  <span>PDF (24MB)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://hcmhospital.com/blogs-magazines/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors px-2 py-1"
                >
                  <span>HCM Archive</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Authentic BLOOM Magazine Cover Presentation */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mt-6 bg-[#0F172A] border border-[#D2D2D7]/60 shadow-inner">
              <Image
                src="/images/bloom-magazine-issue-01.jpg"
                alt="BLOOM Magazine Issue 01: Women's Health & Somatic Balance by Dr. Uzma Dixit"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
