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
    name: "Dr. Raghav Jha",
    role: "Ecosystem Partnerships",
    photo: "/team/dr-raghav-jha.jpg",
  },
  {
    name: "Dr. Shreyansh Ojha",
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
          <div className="bg-[#F5F5F7] rounded-[20px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between h-[480px] sm:h-[540px] p-8 sm:p-10 text-center relative border border-[#D2D2D7]/40 shadow-xs">
            <div className="relative z-10 max-w-md mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] block mb-2">
                Clinical Governance
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                Highland Care.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed">
                Direct clinical continuity with accredited psychiatrists, psychologists, and specialized hospital care.
              </p>
              <div className="mt-3.5">
                <a
                  href="https://hcmhospital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
                >
                  <span>Visit Highland Care (hcmhospital.com)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden mt-6 bg-[#FFFFFF]">
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
          <div className="bg-[#F5F5F7] rounded-[20px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between h-[480px] sm:h-[540px] p-8 sm:p-10 text-center relative border border-[#D2D2D7]/40 shadow-xs">
            <div className="relative z-10 max-w-md mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] block mb-2">
                Founded by Clinicians
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                Grounded in medicine.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed">
                Conceived by medical doctors and clinical practitioners rooted in Bengaluru.
              </p>
              <div className="mt-3.5">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
                >
                  <span>Meet the Doctors</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Clean 4-doctor portrait display */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full mt-6">
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
          <div className="bg-[#F5F5F7] rounded-[20px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between h-[480px] sm:h-[540px] p-8 sm:p-10 text-center relative border border-[#D2D2D7]/40 shadow-xs">
            <div className="relative z-10 max-w-md mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] block mb-2">
                National Milestone
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                Bharat Mandapam.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed">
                Unveiling the MARS Wellbeing vision on India&apos;s premier national convention stage in New Delhi.
              </p>
              <div className="mt-3.5">
                <Link
                  href="/about#milestones"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
                >
                  <span>Explore the Journey</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden mt-6 bg-[#FFFFFF]">
              <Image
                src="/milestones/bharat-mandapam-launch.jpg"
                alt="MARS presented at Bharat Mandapam, New Delhi"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Tile 4: The Journal of Quiet Practice */}
          <div className="bg-[#F5F5F7] rounded-[20px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between h-[480px] sm:h-[540px] p-8 sm:p-10 text-center relative border border-[#D2D2D7]/40 shadow-xs">
            <div className="relative z-10 max-w-md mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] block mb-2">
                Self-Paced Practice
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                The Journal.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed">
                Quiet reflections with zero streaks, algorithmic feeds, or notification pressure.
              </p>
              <div className="mt-3.5">
                <Link
                  href="/journal"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
                >
                  <span>Read the Journal</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden mt-6 bg-[#FFFFFF]">
              <Image
                src="/images/mindful-journaling.jpg"
                alt="Open linen journal with handwritten reflections and ceramic tea on oak table"
                fill
                loading="eager"
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
