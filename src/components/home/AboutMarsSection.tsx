"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf, Trees, ArrowRight, Sparkles, User, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const COMMITMENTS = [
  {
    num: "01",
    title: "Lightweight Digital Footprint",
    desc: "We engineer MARS with clean, lightweight web standards—minimal data transfer, optimized assets, green hosting, and zero-waste server routines that respect physical energy resources.",
  },
  {
    num: "02",
    title: "Rejection of Extractive Mechanics",
    desc: "We actively reject infinite scroll feeds, addictive streak algorithms, and dark patterns that treat human attention as a raw commodity to be mined and exhausted.",
  },
  {
    num: "03",
    title: "Truthful Stewardship",
    desc: "We make no fabricated carbon offset claims or artificial sustainability marketing badges. Honest communication, transparent practices, and genuine civic care guide our ongoing development in Karnataka.",
  },
];

interface TeamMember {
  name: string;
  initials: string;
  role: string;
  qualifications?: string[];
  specialties?: string;
  bio?: string;
  photo?: string;
  isReserved?: boolean;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Saurabh Dixit",
    initials: "SD",
    photo: "/team/dr-saurabh-dixit.jpg",
    role: "Senior Consultant — Laparoscopic, Robotic & Laser Surgeon; GI Endoscopic Interventionist",
    qualifications: [
      "MBBS",
      "MS (Gold Medalist) — General Surgery",
      "FMAS",
      "DMAS",
      "FIRCS",
      "FIAGES",
      "FALS",
    ],
    bio: "He is a renowned general surgeon with over 10 years of experience. Specialised in general and minimal-access surgery treatments and known for excellent patient care.",
  },
  {
    name: "Dr. Uzma Dixit",
    initials: "UD",
    photo: "/team/dr-uzma-dixit.jpg",
    role: "Family Physician & Obstetrics",
    qualifications: ["MBBS", "FFM", "FICD", "FID", "FIGD"],
    bio: "Dr. Uzma Dixit is a renowned family physician and obstetrics professional with over 10 years of experience. Specialised in gynaecology and obstetrics treatments and known for excellent patient care.",
  },
  {
    name: "Raghav Jha",
    initials: "RJ",
    photo: "/team/dr-raghav-jha.jpg",
    role: "MARS Core Team",
    isReserved: false,
    bio: "Contributing to the leadership, ecosystem partnerships, and institutional development of MARS Wellbeing.",
  },
  {
    name: "Shreyansh Ojha",
    initials: "SO",
    photo: "/team/dr-shreyansh-ojha.jpg",
    role: "MARS Core Team",
    isReserved: false,
    bio: "Contributing to the medical leadership, technological architecture, and platform innovation of MARS Wellbeing.",
  },
];

export function AboutMarsSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.08,
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 sm:py-32 bg-[#F5F0E7] border-b border-[#E3E9DE] text-[#1B2926] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            PART 1: THE STORY BEHIND MARS & BENGALURU ROOTS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-full">
              <Trees className="w-3.5 h-3.5 text-[#C9A15A]" />
              <span>ABOUT MARS • CIVIC ROOTS</span>
            </div>

            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#153D35] leading-tight transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Why Bengaluru? Restoring the Garden of Stillness.
            </h2>

            <p
              className={`text-base sm:text-lg text-[#1B2926]/85 font-light leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Bengaluru is world-renowned for relentless ambition, high-velocity engineering, and global entrepreneurship. But speed has extracted a heavy human toll: chronic cognitive fatigue, social isolation, and constant hypervigilance.
            </p>

            <p
              className={`text-base text-[#1B2926]/80 font-light leading-relaxed transition-all duration-700 delay-150 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              MARS is born here to re-anchor Bengaluru to its origin as India’s Garden City—creating quiet spaces where stepping back is honored as essential maintenance for a sustainable human life.
            </p>
          </div>

          <div
            className={`lg:col-span-5 bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-3xl p-8 space-y-5 transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 pb-3 border-b border-[#A8B9A2]/30">
              <Sparkles className="w-5 h-5 text-[#C9A15A]" />
              <h3 className="font-display text-xl font-bold text-[#153D35]">Our Guiding Mission</h3>
            </div>
            <p className="text-sm text-[#1B2926]/85 leading-relaxed font-light">
              To bring people back to themselves by offering contemplative self-directed journeys, unhurried community spaces, and transparent pathways to verified clinical care.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#153D35] hover:text-[#C9A15A] transition-colors"
              >
                <span>Read our founding values</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 2: ENVIRONMENTAL RESPONSIBILITY — "A GENTLER WAY FORWARD."
            ========================================================================= */}
        <div className="bg-[#FFFFFF] border border-[#A8B9A2]/40 rounded-3xl p-8 sm:p-14 shadow-md mb-24">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-full">
              <Leaf className="w-3.5 h-3.5 text-[#C9A15A]" />
              <span>ENVIRONMENTAL & ETHICAL RESPONSIBILITY</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153D35] tracking-tight mb-3">
              A gentler way forward.
            </h3>

            <p className="text-lg sm:text-xl text-[#65716A] italic font-serif mb-6">
              Caring for ourselves, one another, and the world we inhabit.
            </p>

            <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#153D35] leading-snug">
              True wellbeing cannot be extracted from a depleted world.
            </h4>

            <p className="mt-4 text-base text-[#1B2926]/80 font-light leading-relaxed">
              We believe that the health of our inner lives is deeply entangled with the health of the communities and natural ecosystems we inhabit. Just as a tree requires patient, unhurried seasons to root and blossom, human restoration cannot survive on perpetual acceleration and environmental neglect.
            </p>
          </div>

          {/* Three Concrete Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#E3E9DE]">
            {COMMITMENTS.map((com) => (
              <div
                key={com.num}
                className="bg-[#E3E9DE]/60 border border-[#A8B9A2]/30 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-sm font-bold text-[#C9A15A]">{com.num}</span>
                    <Leaf className="w-4 h-4 text-[#153D35]/50" />
                  </div>
                  <h5 className="font-display text-lg font-bold text-[#153D35] mb-2">
                    {com.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-[#1B2926]/80 leading-relaxed font-light">
                    {com.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            PART 3: THE PEOPLE BEHIND MARS (Four Core Member Profiles)
            ========================================================================= */}
        <div id="team" className="space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-full">
              <Users className="w-3.5 h-3.5 text-[#C9A15A]" />
              <span>MARS CORE LEADERSHIP</span>
            </div>

            <h3
              className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153D35] tracking-tight leading-tight transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              The People Behind MARS
            </h3>

            <p
              className={`mt-4 text-base sm:text-lg text-[#65716A] font-light leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Meet the people contributing to the vision, expertise, and development of MARS.
            </p>
          </div>

          {/* Four Member Profile Grid: 2 Columns x 2 Rows on Desktop & Tablet, 1 Column on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={member.name}
                className={`bg-[#FFFFFF] border border-[#A8B9A2]/40 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#153D35]/40 transition-all duration-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${150 + idx * 100}ms` }}
              >
                <div>
                  {/* Portrait Area: Circular Professional Portrait */}
                  <div className="flex justify-center mb-6">
                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#FAF7F2] border-2 border-[#153D35]/20 flex items-center justify-center relative overflow-hidden shadow-md group shrink-0">
                      {member.photo ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 176px, 208px"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-[#E3E9DE] border-2 border-[#153D35]/20 flex items-center justify-center text-[#153D35] font-display text-2xl font-bold tracking-wider shadow-xs mb-2">
                            {member.initials}
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#65716A]/75">
                            Portrait Asset Pending
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="mt-5 space-y-1">
                    <h4 className="font-display text-2xl sm:text-[26px] font-bold text-[#153D35]">
                      {member.name}
                    </h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#C9A15A]">
                      {member.role}
                    </p>
                  </div>

                  {/* Qualifications structured for readability */}
                  {member.qualifications && (
                    <div className="mt-4 pt-4 border-t border-[#E3E9DE]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#65716A] block mb-2 font-semibold">
                        Qualifications & Fellowships:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.qualifications.map((q) => (
                          <span
                            key={q}
                            className="bg-[#FAF7F2] text-[#153D35] text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-[#A8B9A2]/30"
                          >
                            {q}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Approved Biography */}
                  {member.bio && (
                    <p className="mt-4 text-xs sm:text-sm text-[#1B2926]/85 font-light leading-relaxed">
                      {member.bio}
                    </p>
                  )}

                  {/* Reserved Space for Raghav Jha & Shreyansh Ojha */}
                  {member.isReserved && (
                    <div className="mt-6 p-5 rounded-2xl bg-[#FAF7F2]/70 border border-dashed border-[#A8B9A2]/60 text-center">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#65716A] block font-semibold">
                        Profile Reserved
                      </span>
                      <p className="text-xs text-[#65716A]/85 font-light mt-1">
                        Detailed role and biographical background will be published upon formal platform onboarding.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
