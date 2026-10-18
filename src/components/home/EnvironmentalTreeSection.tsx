"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function EnvironmentalTreeSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.08,
  });
  const { ref: progressRef, entryProgress } = useScrollProgress<HTMLDivElement>();
  const [hasBloomed, setHasBloomed] = useState<boolean>(true);

  useEffect(() => {
    if (entryProgress > 0.20 || isVisible) {
      setHasBloomed(true);
    }
  }, [entryProgress, isVisible]);

  return (
    <section
      ref={sectionRef}
      id="environmental-responsibility"
      className="py-24 sm:py-36 bg-transparent border-b border-[#397F83]/20 relative overflow-hidden"
    >
      {/* Spacious Atmospheric Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_80%_40%,rgba(242,185,194,0.14)_0%,transparent_70%)] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-10 w-96 h-96 bg-[radial-gradient(circle,rgba(185,228,221,0.08)_0%,transparent_70%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pl-24 lg:pl-28 lg:pr-12 relative z-10">
        {/* Montfort Diamond Chapter Badge */}
        <div className="flex items-center gap-3.5 mb-6 sm:mb-8">
          <div className="w-8 h-8 rotate-45 border border-[#397F83] bg-[#102D35]/60 backdrop-blur-xs flex items-center justify-center shadow-xs">
            <span className="-rotate-45 font-mono text-xs font-bold text-[#A8DAD0]">3</span>
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8DAD0]">
            Chapter 03 • Ecological Conscience
          </span>
        </div>

        {/* Section Header: Exact Requested Heading & Supporting Line */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="overflow-hidden mb-3">
            <span
              className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A8DAD0] transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-[#A8DAD0]" />
              <span>Environmental & Ethical Responsibility</span>
            </span>
          </div>

          <div className="overflow-hidden">
            <h2
              className={`font-display text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tight text-[#F5EEE3] leading-none transition-all duration-700 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              A gentler way forward.
            </h2>
          </div>

          <p
            className={`mt-4 sm:mt-5 text-lg sm:text-xl text-[#F5EEE3]/80 font-light leading-relaxed italic transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Caring for ourselves, one another, and the world we inhabit.
          </p>
        </div>

        {/* Dynamic Centerpiece: Editorial Narrative (Left) + Large Graceful Cherry-Blossom Tree (Right) */}
        <div ref={progressRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
          {/* Left Column (lg:col-span-7): Primary Statement & Three Principled Commitments (Editorial, Open, No Boxy Cards) */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-3.5">
              <h3
                className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#F5EEE3] leading-tight transition-all duration-700 delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                True wellbeing cannot be extracted from a depleted world.
              </h3>
              <p
                className={`text-sm sm:text-base text-[#F5EEE3]/80 leading-relaxed font-light transition-all duration-700 delay-400 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                We believe that the health of our inner lives is deeply entangled with the health of the communities and natural ecosystems we inhabit. Just as a tree requires patient, unhurried seasons to root and blossom, human restoration cannot survive on perpetual acceleration and environmental neglect.
              </p>
            </div>

            {/* Three Principled Commitments: Open Editorial Layout with Hairline Dividers (Preserved in original order and wording) */}
            <div className="space-y-5 pt-3 border-t border-[#397F83]/30">
              {/* Commitment 01 */}
              <div
                className={`group py-3.5 border-b border-[#397F83]/20 transition-all duration-700 delay-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <div className="flex items-baseline gap-4 mb-1.5">
                  <span className="font-mono text-sm font-bold text-[#A8DAD0] tracking-wider">
                    01
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#F5EEE3]">
                    Lightweight Digital Footprint
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#F5EEE3]/75 leading-relaxed pl-8 font-light">
                  We engineer MARS with clean, lightweight web standards—minimizing unnecessary data bloat, avoiding heavy continuous trackers, and designing zero-waste server routines that respect physical energy resources.
                </p>
              </div>

              {/* Commitment 02 */}
              <div
                className={`group py-3.5 border-b border-[#397F83]/20 transition-all duration-700 delay-600 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <div className="flex items-baseline gap-4 mb-1.5">
                  <span className="font-mono text-sm font-bold text-[#A8DAD0] tracking-wider">
                    02
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#F5EEE3]">
                    Rejection of Extractive Mechanics
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#F5EEE3]/75 leading-relaxed pl-8 font-light">
                  We actively reject infinite scroll feeds, streak addiction algorithms, and performative metrics that treat human attention as a raw commodity to be mined and exhausted.
                </p>
              </div>

              {/* Commitment 03 */}
              <div
                className={`group py-3.5 border-b border-[#397F83]/20 transition-all duration-700 delay-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <div className="flex items-baseline gap-4 mb-1.5">
                  <span className="font-mono text-sm font-bold text-[#A8DAD0] tracking-wider">
                    03
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#F5EEE3]">
                    Truthful Stewardship
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#F5EEE3]/75 leading-relaxed pl-8 font-light">
                  We make no fabricated carbon offset claims or artificial sustainability marketing badges. As MARS matures, our civic tree-planting and environmental initiatives in Karnataka will be documented with radical transparency.
                </p>
              </div>
            </div>

            {/* Founding Charter Link */}
            <div
              className={`pt-1 transition-all duration-700 delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#A8DAD0] hover:text-[#C2E7DF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8DAD0]"
              >
                <span>Read our founding values & charter</span>
                <span className="relative flex items-center w-4 h-4 overflow-hidden" aria-hidden="true">
                  <ArrowRight className="w-3.5 h-3.5 text-[#A8DAD0] transition-transform duration-300 ease-out group-hover:translate-x-5" />
                  <ArrowRight className="w-3.5 h-3.5 text-[#A8DAD0] absolute -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column (lg:col-span-5): The Large, Graceful Cherry-Blossom Tree Entering from the Right in 3D Canvas */}
          <div
            className={`lg:col-span-5 relative lg:sticky lg:top-28 flex flex-col items-end justify-center pointer-events-none transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Soft Ambient Halo accentuating the 3D Tree Canopy */}
            <div
              aria-hidden="true"
              className="absolute -top-12 -right-8 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(242,185,194,0.18)_0%,rgba(185,228,221,0.06)_60%,transparent_80%)] pointer-events-none"
            />

            {/* Editorial Architectural Living Continuum Pill */}
            <div className="hidden sm:inline-flex items-center gap-2.5 px-4 py-2 border border-[#397F83]/30 bg-[#102D35]/40 backdrop-blur-md text-[#A8DAD0] font-mono text-[11px] tracking-widest uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2B9C2] animate-pulse" />
              <span>Living Botanical Canopy • Continuous Canvas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
