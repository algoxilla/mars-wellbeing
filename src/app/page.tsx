import React from "react";
import Link from "next/link";
import { RiverFogOpening } from "@/components/animations/RiverFogOpening";
import { BreathingPacer } from "@/components/ui/BreathingPacer";
import {
  Sparkles,
  ArrowRight,
  Compass,
  Users,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Heart,
  Wind,
  Trees,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";

// Explicit DEMONSTRATION ONLY Practitioner Placeholders
const DEMO_PRACTITIONERS = [
  {
    sampleId: "DEMO-01",
    name: "Dr. A. Sharma (Sample Placeholder)",
    qualification: "Ph.D., M.Phil in Clinical Psychology (Demonstration Data)",
    focus: "Chronic Anxiety, Cognitive Burnout & Life Transitions",
    languages: "English, Kannada, Hindi",
    mode: "In-Person (Indiranagar, Bengaluru) & Online",
    sampleFee: "₹2,200 (Sample Tariff)",
    slug: "sample-profile-sharma",
  },
  {
    sampleId: "DEMO-02",
    name: "R. Varma (Sample Placeholder)",
    qualification: "M.Sc. Counseling Psychology (Demonstration Data)",
    focus: "Workplace Dynamics, Emotional Exhaustion & Grief",
    languages: "English, Hindi, Bengali",
    mode: "Online & In-Person (Koramangala, Bengaluru)",
    sampleFee: "₹1,800 (Sample Tariff)",
    slug: "sample-profile-varma",
  },
  {
    sampleId: "DEMO-03",
    name: "P. Nair (Sample Placeholder)",
    qualification: "MA Clinical Psychology, Narrative Therapy (Demonstration Data)",
    focus: "Self-Worth, Relationship Grounding & Somatic Pacing",
    languages: "English, Tamil, Kannada",
    mode: "In-Person (Jayanagar, Bengaluru) & Online",
    sampleFee: "₹2,000 (Sample Tariff)",
    slug: "sample-profile-nair",
  },
];

const NOVA_HIKARI_STAGES = [
  { num: "01", name: "Origin", desc: "Acknowledging where you stand right now, without shame or judgment." },
  { num: "02", name: "Grounding", desc: "Somatic pacing, nervous system regulation, and deep breath resets." },
  { num: "03", name: "Unpacking", desc: "Untangling chronic cognitive noise and internalized expectations." },
  { num: "04", name: "Resonance", desc: "Reconnecting with authentic emotional signals beneath fatigue." },
  { num: "05", name: "Illumination", desc: "Discovering perspective and gently reframing your inner narrative." },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Signature Atmospheric River & Fog Hero */}
      <RiverFogOpening />

      {/* 2. The Living Continuum of Care — Organic Flowing Transition (Not Boxed Cards) */}
      <section className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#E2DDD5] relative overflow-hidden">
        {/* Soft natural ambient lighting */}
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(110,142,126,0.15)_0%,transparent_70%)] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-2">
              The Architecture of Care
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
              A Living Continuum, Not Isolated Silos.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#3D5255] leading-relaxed">
              Wellbeing is rarely a single transaction. MARS connects self-guided reflection, small cohort human spaces, and qualified clinical psychotherapy into one coherent, unhurried ecosystem.
            </p>
          </div>

          {/* Flowing Asymmetric Pillar Journey */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            {/* Pillar 01: Nova Hikari */}
            <div className="lg:col-span-4 bg-[#F5F0E7] p-8 sm:p-10 border border-[#E2DDD5] flex flex-col justify-between relative group hover:border-[#6E8E7E] transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-4">
                  <span className="font-display text-3xl font-bold text-[#6E8E7E]">01</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3D5255] bg-[#FAF7F2] px-2.5 py-1 border border-[#E2DDD5]">
                    Self-Directed
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold uppercase text-[#1D3033]">
                  Nova Hikari
                </h3>
                <p className="text-xs font-semibold text-[#4A6E5D] uppercase tracking-wider">
                  Ten-Stage Guided Journey
                </p>
                <p className="text-sm text-[#3D5255] leading-relaxed pt-2">
                  A slow, meditative digital journey designed to help you decouple from external pressure. Move from exhaustion to somatic grounding at your own natural pace.
                </p>
              </div>

              <div className="pt-8 border-t border-[#E2DDD5] mt-8">
                <Link
                  href="/nova-hikari"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D3033] group-hover:text-[#4A6E5D] transition-colors"
                >
                  <span>Explore the 10 stages</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
                </Link>
              </div>
            </div>

            {/* Pillar 02: Community Circles */}
            <div className="lg:col-span-4 bg-[#F5F0E7] p-8 sm:p-10 border border-[#E2DDD5] flex flex-col justify-between relative group hover:border-[#6E8E7E] transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-4">
                  <span className="font-display text-3xl font-bold text-[#6E8E7E]">02</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3D5255] bg-[#FAF7F2] px-2.5 py-1 border border-[#E2DDD5]">
                    Bengaluru Circles
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold uppercase text-[#1D3033]">
                  Human Circles
                </h3>
                <p className="text-xs font-semibold text-[#4A6E5D] uppercase tracking-wider">
                  Facilitator-Held Gatherings
                </p>
                <p className="text-sm text-[#3D5255] leading-relaxed pt-2">
                  Small, confidential spaces across Bengaluru designed to dismantle isolation. Structured dialogues for builders and seekers to speak without performative positivity.
                </p>
              </div>

              <div className="pt-8 border-t border-[#E2DDD5] mt-8">
                <Link
                  href="/community"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D3033] group-hover:text-[#4A6E5D] transition-colors"
                >
                  <span>Discover upcoming circles</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
                </Link>
              </div>
            </div>

            {/* Pillar 03: Qualified Clinical Directory */}
            <div className="lg:col-span-4 bg-[#F5F0E7] p-8 sm:p-10 border border-[#E2DDD5] flex flex-col justify-between relative group hover:border-[#6E8E7E] transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-4">
                  <span className="font-display text-3xl font-bold text-[#6E8E7E]">03</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3D5255] bg-[#FAF7F2] px-2.5 py-1 border border-[#E2DDD5]">
                    Clinical Care
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold uppercase text-[#1D3033]">
                  Verified Care
                </h3>
                <p className="text-xs font-semibold text-[#4A6E5D] uppercase tracking-wider">
                  Licensed Psychologists
                </p>
                <p className="text-sm text-[#3D5255] leading-relaxed pt-2">
                  Direct access to clinical psychologists and therapists. Clear qualifications, verified RCI registration checks, transparent tariffs, and unhurried appointments.
                </p>
              </div>

              <div className="pt-8 border-t border-[#E2DDD5] mt-8">
                <Link
                  href="/professionals"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D3033] group-hover:text-[#4A6E5D] transition-colors"
                >
                  <span>Browse the directory</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nova Hikari: Immersive Sensory & Somatic Experience */}
      <section className="py-24 sm:py-32 bg-[#F5F0E7] border-b border-[#E2DDD5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Philosophical Overview */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1D3033] bg-[#FAF7F2] border border-[#E2DDD5]">
                <Sparkles className="w-3.5 h-3.5 text-[#6E8E7E]" />
                Signature Guided Experience
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-[#1D3033] leading-none">
                Nova Hikari: Reclaiming Stillness in a Noisy World.
              </h2>
              <p className="text-base sm:text-lg text-[#3D5255] leading-relaxed">
                Meaning <em>“New Light”</em> in Japanese, Nova Hikari is a contemplative digital sanctuary. It offers no badges, no streaks, and no gamified optimization—only a slow, rhythmic space to breathe and reflect.
              </p>

              {/* Guarantees */}
              <div className="space-y-3.5 pt-2 text-sm text-[#3D5255]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
                  <span><strong>100% Private:</strong> Reflections remain local to your browser and are never tracked or monetized.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
                  <span><strong>Accessible to All:</strong> Stages 01 (Origin) and 02 (Grounding) are permanently free to experience.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
                  <span><strong>Ambient Soundscapes:</strong> Composed to guide theta-wave relaxation and cognitive decompression.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/nova-hikari"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all"
                >
                  <span>Begin Stage 01 (Origin)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8FA89B]" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-1.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D] transition-colors"
                >
                  How It Works →
                </Link>
              </div>
            </div>

            {/* Right Column: Somatic Breathing Pacer + Stages Architecture */}
            <div className="lg:col-span-6 space-y-6">
              {/* Interactive Breathing Pacer Widget */}
              <BreathingPacer />

              {/* 5 Stages Preview Strip */}
              <div className="bg-[#FAF7F2] p-6 border border-[#E2DDD5] space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                    The Ten-Stage Arc
                  </span>
                  <span className="text-xs text-[#6E8E7E] font-mono">Stages 01 — 10</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
                  {NOVA_HIKARI_STAGES.map((s) => (
                    <div key={s.num} className="p-2.5 bg-[#F5F0E7] border border-[#E2DDD5]">
                      <span className="font-display text-sm font-bold text-[#6E8E7E] block">{s.num}</span>
                      <span className="text-[11px] font-medium text-[#1D3033]">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bengaluru Context: Creating Calm in the Garden City */}
      <section className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#E2DDD5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-[#6E8E7E] bg-[#EAF1ED] border border-[#B4C8BE]">
                <Trees className="w-3.5 h-3.5 text-[#4A6E5D]" />
                Civic Roots & Context
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
                Why Bengaluru? Restoring the Garden of Stillness.
              </h2>
              <p className="text-base sm:text-lg text-[#3D5255] leading-relaxed">
                Bengaluru is world-renowned for relentless ambition, high-velocity engineering, and global entrepreneurship. But speed has extracted a heavy human toll: chronic cognitive fatigue, social isolation, and constant hypervigilance.
              </p>
              <p className="text-sm sm:text-base text-[#3D5255] leading-relaxed">
                MARS is born here to re-anchor Bengaluru to its origin as India’s Garden City—creating quiet spaces where stepping back is honored as essential maintenance for a sustainable human life.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all"
                >
                  <span>Our Philosophy & Origins</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8FA89B]" />
                </Link>
                <Link
                  href="/community"
                  className="text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D] transition-colors"
                >
                  Bengaluru Circles →
                </Link>
              </div>
            </div>

            {/* Right Core Non-Negotiables Panel */}
            <div className="lg:col-span-6 bg-[#F5F0E7] p-8 sm:p-10 border border-[#E2DDD5] space-y-6">
              <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] border-b border-[#E2DDD5] pb-4">
                Our Operating Principles
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#3D5255]">
                <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5]">
                  <strong className="text-[#1D3033] block mb-1 font-semibold uppercase text-xs tracking-wider">
                    1. No Performative Positivity
                  </strong>
                  You never have to pretend to be happy, inspired, or thriving. Fatigue, grief, ambiguity, and silence are welcomed with equal dignity.
                </div>

                <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5]">
                  <strong className="text-[#1D3033] block mb-1 font-semibold uppercase text-xs tracking-wider">
                    2. Uncompromising Privacy
                  </strong>
                  No algorithms selling your vulnerabilities. Guided reflections in Nova Hikari are strictly private and local to your device by default.
                </div>

                <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5]">
                  <strong className="text-[#1D3033] block mb-1 font-semibold uppercase text-xs tracking-wider">
                    3. Unambiguous Clinical Boundaries
                  </strong>
                  We never claim self-guided experiences substitute for clinical psychiatry. Clear emergency escalation pathways protect individuals in acute need.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Demonstration Professional Directory Section */}
      <section className="py-24 sm:py-32 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E]">
                Clinical Governance & Professional Directory
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#1D3033] mt-2 leading-none">
                Qualified Mental Health Directory
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#3D5255] max-w-xl">
                Demonstration previews of practitioner profiles. In production, every professional will undergo credential verification, RCI registration checks, and clinical governance vetting.
              </p>
            </div>

            <Link
              href="/professionals"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D] transition-colors"
            >
              <span>View Full Directory Scaffold</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
            </Link>
          </div>

          {/* Cards Grid with Unmistakable DEMO Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DEMO_PRACTITIONERS.map((pro) => (
              <div
                key={pro.sampleId}
                className="bg-[#FAF7F2] p-8 border border-[#E2DDD5] flex flex-col justify-between hover:border-[#6E8E7E] transition-all relative"
              >
                {/* Clear DEMONSTRATION ONLY Chip */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD5]">
                  <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-[#EAE3D6] text-[#3D5255] border border-[#DCD5C9]">
                    Sample Profile — Demo Only
                  </span>
                  <span className="text-[11px] font-mono text-[#6E8E7E]">{pro.sampleId}</span>
                </div>

                <div className="pt-4">
                  <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                    {pro.name}
                  </h3>
                  <p className="text-xs text-[#6E8E7E] font-medium mt-1">
                    {pro.qualification}
                  </p>

                  <div className="mt-5 space-y-2.5 text-xs text-[#3D5255] border-t border-[#E2DDD5]/70 pt-4">
                    <p>
                      <strong className="text-[#1D3033]">Focus:</strong> {pro.focus}
                    </p>
                    <p>
                      <strong className="text-[#1D3033]">Languages:</strong> {pro.languages}
                    </p>
                    <p>
                      <strong className="text-[#1D3033]">Format:</strong> {pro.mode}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6E8E7E] block">Illustrative Tariff</span>
                    <span className="text-xs font-semibold text-[#1D3033]">{pro.sampleFee}</span>
                  </div>
                  <Link
                    href={`/professionals/${pro.slug}`}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-colors"
                  >
                    View Bio Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Formal Partnership Notice */}
          <div className="mt-10 p-5 bg-[#FAF7F2] border border-[#E2DDD5] flex items-start gap-3.5 text-xs text-[#3D5255]">
            <ShieldCheck className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1D3033]">Institutional & Clinical Governance Disclosure:</strong> No clinical endorsement or professional licensing is active during this development phase. <em>Institutional partnership information will be announced following formal confirmation.</em>
            </p>
          </div>
        </div>
      </section>

      {/* 6. Wellbeing Resources & Journal — Magazine Editorial Style */}
      <section className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E]">
                Editorial & Grounding Guides
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#1D3033] mt-2 leading-none">
                The Journal of Quiet Practice
              </h2>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D] transition-colors"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
            </Link>
          </div>

          {/* Editorial Grid: Asymmetrical Featured Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Lead Essay */}
            <div className="lg:col-span-7 bg-[#F5F0E7] p-8 sm:p-12 border border-[#E2DDD5] flex flex-col justify-between group hover:border-[#6E8E7E] transition-all">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#6E8E7E] font-medium mb-4">
                  <span className="uppercase tracking-wider">Grounding Practices</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033] leading-tight">
                  The Architecture of Silence: Why High-Velocity Builders Need Spaces to Disconnect.
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#3D5255] leading-relaxed">
                  When cognitive speed is continuously rewarded, our nervous systems stay locked in an emergency vigilance loop. Discovering how to step out of reactive overdrive is not a luxury—it is cognitive preservation.
                </p>
              </div>

              <div className="pt-8 border-t border-[#E2DDD5] mt-8 flex items-center justify-between">
                <span className="text-xs font-mono text-[#3D5255]/70">Demonstration Article</span>
                <Link
                  href="/journal/architecture-of-silence"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] group-hover:text-[#4A6E5D] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
                </Link>
              </div>
            </div>

            {/* Two Stacked Secondary Essays */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-[#F5F0E7] p-8 border border-[#E2DDD5] flex flex-col justify-between flex-1 group hover:border-[#6E8E7E] transition-all">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#6E8E7E] font-medium mb-3">
                    <span className="uppercase tracking-wider">Somatic Wellbeing</span>
                    <span>•</span>
                    <span>4 min read</span>
                  </div>
                  <h4 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                    Decompressing from Screen Fatigue: The Somatics of the Five-Minute Reset.
                  </h4>
                  <p className="mt-2 text-xs text-[#3D5255] leading-relaxed">
                    Practical somatic techniques to re-anchor autonomic tone when hours of continuous virtual context switching deplete your focus.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2DDD5] mt-6 flex justify-between items-center">
                  <span className="text-[11px] font-mono text-[#3D5255]/70">Demonstration Article</span>
                  <Link
                    href="/journal/screen-fatigue-reset"
                    className="text-xs font-semibold uppercase tracking-wider text-[#1D3033] group-hover:text-[#4A6E5D] transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </div>

              <div className="bg-[#F5F0E7] p-8 border border-[#E2DDD5] flex flex-col justify-between flex-1 group hover:border-[#6E8E7E] transition-all">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#6E8E7E] font-medium mb-3">
                    <span className="uppercase tracking-wider">Human Connection</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                  <h4 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                    Vulnerability Without Performance: The Ethos of Community Circles.
                  </h4>
                  <p className="mt-2 text-xs text-[#3D5255] leading-relaxed">
                    What happens when we gather in Bengaluru without comparing titles, seed rounds, or personal accomplishments?
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2DDD5] mt-6 flex justify-between items-center">
                  <span className="text-[11px] font-mono text-[#3D5255]/70">Demonstration Article</span>
                  <Link
                    href="/journal/vulnerability-without-performance"
                    className="text-xs font-semibold uppercase tracking-wider text-[#1D3033] group-hover:text-[#4A6E5D] transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Distinctive, Resonant Closing Sanctuary Section */}
      <section className="py-24 sm:py-36 bg-[#122022] text-[#F5F0E7] relative overflow-hidden">
        {/* Soft dawn horizon glow at the top */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(110,142,126,0.18)_0%,transparent_70%)] pointer-events-none"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-7">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#8FA89B] bg-[#1A2E31] border border-[#2B474B]">
            <Sparkles className="w-3.5 h-3.5" />
            Bengaluru Initial Cohort
          </span>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#FAF7F2] leading-none">
            A Space to Breathe When the World Is Too Loud.
          </h2>

          <p className="text-base sm:text-lg text-[#E2DDD5]/85 max-w-xl mx-auto leading-relaxed">
            We are opening early access in Bengaluru for Nova Hikari, small-cohort community circles, and curated clinical appointments.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/early-access"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider bg-[#F5F0E7] text-[#1D3033] hover:bg-[#FAF7F2] active:scale-[0.99] transition-all font-mono"
            >
              <span>Join Early Access Waitlist</span>
              <ArrowRight className="w-4 h-4 text-[#6E8E7E]" />
            </Link>

            <Link
              href="/apply"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#E2DDD5] hover:text-[#FAF7F2] border border-[#384F52] hover:border-[#6E8E7E] transition-all"
            >
              Apply as Facilitator / Partner
            </Link>
          </div>

          <p className="text-xs text-[#E2DDD5]/60 pt-4">
            No spam. We will only reach out when spaces open for your cohort.
          </p>
        </div>
      </section>
    </div>
  );
}
