import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Trees,
  Sparkles,
  HeartHandshake,
  Layers,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Origins & Philosophy
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Born in Bengaluru: Restoring Stillness to Ambition.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-2xl mx-auto leading-relaxed">
            MARS (Mental Assistance Reassurance System) was founded on a simple conviction: when the world moves at maximum velocity, pausing is not a luxury—it is an essential discipline.
          </p>
        </div>
      </section>

      {/* 2. The Vision Narrative */}
      <section className="py-24 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-[#3D5255] leading-relaxed">
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033]">
            The Need for Counter-Spaces
          </h2>
          <p>
            Bengaluru is home to the most brilliant builders, engineers, and creators in South Asia. Yet the modern ecosystem constantly rewards cognitive acceleration, multi-tasking, and hypervigilance. Over time, chronic pressure leads to cognitive narrowing, deep isolation, and autonomic exhaustion.
          </p>
          <p>
            MARS was conceived to create deliberate counter-spaces: physical and digital environments where individuals can step out of performance mode, regulate their nervous systems, and connect with qualified support without fear of judgment.
          </p>
          <p>
            We combine <strong>Nova Hikari</strong> (a private 10-stage guided journey), <strong>Community Circles</strong> (small, facilitator-held gatherings in Bengaluru), and <strong>Clinical Therapy</strong> (licensed psychologists with verified credentials).
          </p>
        </div>
      </section>

      {/* 3. Four Core Commitments */}
      <section className="py-24 bg-[#FAF7F2] border-b border-[#E2DDD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E]">
              Ethical Foundations
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1D3033] mt-2">
              Our Core Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#F5F0E7] border border-[#E2DDD5] space-y-3">
              <span className="font-display text-xl font-bold text-[#6E8E7E]">01</span>
              <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                Slowness Over Optimization
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5255] leading-relaxed">
                We reject gamified wellbeing metrics. You will find no daily streaks, countdowns, or badges in MARS. Stillness cannot be rushed.
              </p>
            </div>

            <div className="p-8 bg-[#F5F0E7] border border-[#E2DDD5] space-y-3">
              <span className="font-display text-xl font-bold text-[#6E8E7E]">02</span>
              <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                Radical Data Sovereignty
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5255] leading-relaxed">
                We believe your inner reflections are sacred. Your journal entries in Nova Hikari stay in your browser by default, in strict compliance with the DPDP Act 2023.
              </p>
            </div>

            <div className="p-8 bg-[#F5F0E7] border border-[#E2DDD5] space-y-3">
              <span className="font-display text-xl font-bold text-[#6E8E7E]">03</span>
              <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                Uncompromising Clinical Integrity
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5255] leading-relaxed">
                We never pretend self-help replaces medical care. Clinical directory listings undergo strict verification of RCI registration and credentials.
              </p>
            </div>

            <div className="p-8 bg-[#F5F0E7] border border-[#E2DDD5] space-y-3">
              <span className="font-display text-xl font-bold text-[#6E8E7E]">04</span>
              <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                Transparent Safety Escalation
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5255] leading-relaxed">
                We prominently signpost 24/7 national emergency helplines (Tele-MANAS, KIRAN, Emergency 112) on every page so those in crisis reach qualified clinical care immediately.
              </p>
            </div>
          </div>

          <div className="mt-12 p-5 bg-[#F5F0E7] border border-[#E2DDD5] flex items-start gap-3.5 text-xs text-[#3D5255]">
            <ShieldCheck className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1D3033]">Institutional Disclosure:</strong> <em>Institutional partnership information will be announced following formal confirmation.</em> Demonstration profiles and mock scheduling workflows are strictly simulated in this development preview.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Navigation Links */}
      <section className="py-16 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-[#1D3033]">
              Read the Founders’ Statement
            </h4>
            <p className="text-xs text-[#3D5255] mt-0.5">
              Reflections on why slow digital spaces matter now more than ever.
            </p>
          </div>
          <Link
            href="/founders"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all"
          >
            <span>Read Founders’ Note</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8FA89B]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
