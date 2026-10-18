"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Users, Phone, ArrowRight, HeartHandshake, HelpCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PATHWAYS = [
  {
    tag: "Self-Guided • Private",
    title: "I need immediate calm and somatic reset",
    subtitle: "Nova Hikari Guided Experience",
    description:
      "Step directly into ten progressive stages of Indo-Japanese breath pacing, contemplative soundscapes, and nervous system regulation. Practice at your natural cadence with zero pressure.",
    ctaText: "Start Self-Guided Practice →",
    href: "/guided-experience",
    icon: Sparkles,
    badge: "100% Private in Browser",
  },
  {
    tag: "Peer Dialogue • Bengaluru",
    title: "I want to share and listen without judgment",
    subtitle: "Confidential Community Circles",
    description:
      "Small, facilitated cohorts of 6–8 people gathering in quiet Bengaluru spaces or online. Leave titles, resumes, and performative success outside. Speak honestly and listen deeply.",
    ctaText: "Explore Bengaluru Circles →",
    href: "#community",
    icon: Users,
    badge: "Confidential Small Groups",
  },
  {
    tag: "Direct Contact • Guidance",
    title: "I would like guidance from the MARS team",
    subtitle: "Direct Team Conversation",
    description:
      "Speak directly with our team at +91 90062 19668. We will listen to what you are looking for, answer questions about our spaces, and help you find an unhurried starting point.",
    ctaText: "Call +91 90062 19668",
    href: "tel:+919006219668",
    icon: Phone,
    badge: "Available Now",
    isPhone: true,
  },
];

export function StartingPathwaySection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="support-pathway"
      className="py-24 sm:py-32 bg-[#153D35] text-[#F5F0E7] relative overflow-hidden"
    >
      {/* Background Decorative Ambient Radial Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_10%,rgba(168,185,162,0.15)_0%,transparent_70%)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#0F2C26] border border-[#C9A15A]/30 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-[#C9A15A]" />
            <span>NOT SURE WHERE TO BEGIN?</span>
          </div>

          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-tight transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Choose the starting point that fits you today.
          </h2>

          <p
            className={`mt-5 text-base sm:text-lg text-[#F5F0E7]/80 leading-relaxed font-light transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            You don’t have to figure everything out on your own. Whether you need fifteen minutes of restorative stillness, a quiet circle of peers, or direct guidance from our team, choose the pace that feels right.
          </p>
        </div>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATHWAYS.map((pathway, idx) => {
            const Icon = pathway.icon;
            return (
              <div
                key={pathway.title}
                className={`bg-[#0F2C26] border border-[#A8B9A2]/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl transition-all duration-500 hover:border-[#C9A15A]/60 hover:-translate-y-1.5 group ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${150 + idx * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#153D35] border border-[#A8B9A2]/30 flex items-center justify-center text-[#C9A15A] shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#153D35] border border-[#A8B9A2]/20 text-[#A8B9A2]">
                      {pathway.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A15A] block mb-1">
                      {pathway.tag}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFFFFF]">
                      {pathway.title}
                    </h3>
                    <p className="text-xs font-medium text-[#A8B9A2] mt-0.5">
                      {pathway.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#F5F0E7]/80 leading-relaxed font-light">
                    {pathway.description}
                  </p>
                </div>

                <div className="pt-8 border-t border-[#A8B9A2]/20 mt-6">
                  {pathway.isPhone ? (
                    <a
                      href={pathway.href}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A15A] group-hover:text-[#FFFFFF] transition-colors"
                    >
                      <span>{pathway.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#C9A15A] group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={pathway.href}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A15A] group-hover:text-[#FFFFFF] transition-colors"
                    >
                      <span>{pathway.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#C9A15A] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Immediate Support Note */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0F2C26] border border-[#A8B9A2]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E7]/80">
          <div className="flex items-center gap-3">
            <HeartHandshake className="w-5 h-5 text-[#C9A15A] shrink-0" />
            <p>
              Looking for a team conversation before making a decision? Call{" "}
              <strong className="text-[#FFFFFF] font-mono">+91 90062 19668</strong> during regular hours.
            </p>
          </div>
          <a
            href="tel:+919006219668"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C9A15A] text-[#0F2C26] hover:bg-[#D4AF37] transition-all font-bold whitespace-nowrap shrink-0 shadow-md"
          >
            Call +91 90062 19668
          </a>
        </div>
      </div>
    </section>
  );
}
