"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PILLARS = [
  {
    num: "01",
    tag: "Self-Directed Sanctuary",
    title: "Guided Experiences",
    description: "Immersive, nature-inspired sessions designed to help you pause, reflect, and reset.",
    detail: "Zero streaks, zero addictive mechanics, and no performative metrics. Move at your natural cadence with the 10-stage Nova Hikari journey.",
    image: "/images/guided-practice.jpg",
    alt: "Japanese-inspired indoor sanctuary with morning light on tatami and river stones",
    linkText: "Explore Nova Hikari",
    href: "#nova-hikari",
    icon: Sparkles,
  },
  {
    num: "02",
    tag: "Facilitated Gatherings",
    title: "Meaningful Connection",
    description: "Facilitated community circles where you can share and listen without judgment.",
    detail: "Small, confidential cohorts of 6–8 people across Bengaluru. Safe psychological space with no resumes, no networking, and genuine presence.",
    image: "/images/community-circle.jpg",
    alt: "Adults gathered in an unhurried, thoughtful, supportive discussion circle",
    linkText: "Discover Community Circles",
    href: "#community",
    icon: Users,
  },
  {
    num: "03",
    tag: "Clinical Governance",
    title: "Professional Support",
    description: "Thoughtful pathways to vetted mental health professionals when you need them.",
    detail: "Transparent qualifications, clinical integrity, and direct continuity through our clinical partner Highland Care Private Limited.",
    image: "/images/professional-care.jpg",
    alt: "Dignified, warm clinical consultation room with garden foliage view",
    linkText: "Browse Directory",
    href: "#professionals",
    icon: ShieldCheck,
  },
];

export function WhatIsMarsSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="what-is-mars"
      className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#E3E9DE] text-[#1B2926] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-full">
            <span>WHAT IS MARS?</span>
          </div>

          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#153D35] leading-tight transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            A different kind of space for wellbeing.
          </h2>

          <p
            className={`mt-5 text-base sm:text-lg text-[#1B2926]/90 leading-relaxed font-light transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            MARS creates intentional environments where you can step away from relentless digital noise, reconnect with your authentic inner rhythm, and access compassionate human and professional support without friction.
          </p>
        </div>

        {/* 3 Pillars Grid with Rich Editorial Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className={`group bg-[#FFFFFF] border border-[#E3E9DE] hover:border-[#153D35]/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${150 + idx * 100}ms` }}
              >
                <div>
                  {/* Image Card Header */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-[#E3E9DE]">
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#153D35]/40 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-md flex items-center justify-center text-[#153D35] shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>

                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#153D35]/85 backdrop-blur-md text-[11px] font-mono font-bold text-[#FAF7F2]">
                      {pillar.num}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#C9A15A] block mb-2">
                    {pillar.tag}
                  </span>

                  <h3 className="font-display text-2xl font-bold text-[#153D35] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-base text-[#1B2926] font-medium leading-relaxed mb-3">
                    {pillar.description}
                  </p>

                  <p className="text-sm text-[#526059] leading-relaxed font-light">
                    {pillar.detail}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E3E9DE]">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#153D35] hover:text-[#C9A15A] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
