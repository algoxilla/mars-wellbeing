"use client";

import React from "react";
import Link from "next/link";
import { Search, Calendar, Users, HeartHandshake, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STEPS = [
  {
    num: "1. Discover",
    title: "Discover",
    text: "Explore guided experiences, community circles, and wellbeing resources at your own pace. Learn about our approach and join the early-access list.",
    icon: Search,
  },
  {
    num: "2. Experience",
    title: "Experience",
    text: "Step into immersive sessions like Nova Hikari, designed to calm the nervous system. Receive session details and reserve experiences that suit you.",
    icon: Calendar,
  },
  {
    num: "3. Connect",
    title: "Connect",
    text: "Join facilitated circles in Bengaluru or online to share experiences with peers in a safe, confidential space with zero performative pressure.",
    icon: Users,
  },
  {
    num: "4. Find Support",
    title: "Find Support",
    text: "When needed, explore appropriate support options from vetted, licensed mental health professionals dedicated to ethical, unhurried care.",
    icon: HeartHandshake,
  },
];

export function HowItWorksSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-24 sm:py-32 bg-[#F5F0E7] border-b border-[#E3E9DE] text-[#1B2926] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-full">
            <span>HOW IT WORKS</span>
          </div>

          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#153D35] leading-tight transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            A calm, step-by-step pathway.
          </h2>

          <p
            className={`mt-4 text-base sm:text-lg text-[#1B2926]/80 font-light leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            There are no rigid requirements, diagnostic tests, or compulsory tracks. Move at your natural cadence and choose the support you need.
          </p>
        </div>

        {/* 4-Step Container Card (Pixel-Aligned with Founder Screenshot media_1792280057273_299a7696.png) */}
        <div
          className={`bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-3xl p-6 sm:p-10 shadow-lg transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="divide-y divide-[#A8B9A2]/30">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`flex items-start gap-5 sm:gap-6 py-6 sm:py-8 first:pt-2 last:pb-2 transition-all duration-500`}
                >
                  {/* Circular Icon Badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFFFFF] border border-[#A8B9A2]/40 flex items-center justify-center shrink-0 text-[#153D35] shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Content */}
                  <div className="space-y-1.5 flex-1 pt-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#153D35]">
                      {step.num}
                    </h3>
                    <p className="text-sm sm:text-base text-[#1B2926]/85 font-light leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-10 text-center">
          <Link
            href="#early-access"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#153D35] hover:text-[#C9A15A] transition-colors"
          >
            <span>Begin your journey with Early Access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
