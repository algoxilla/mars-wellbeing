import React from "react";
import Link from "next/link";
import { RiverFogOpening } from "@/components/animations/RiverFogOpening";
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
  ExternalLink,
} from "lucide-react";

// Clearly marked DEMO practitioners
const DEMO_PRACTITIONERS = [
  {
    name: "Dr. Ananya Rao",
    qualification: "M.Phil Clinical Psychology (RCI Reg.), Ph.D.",
    specialities: ["Anxiety & Stress", "Tech Burnout", "Life Transitions"],
    languages: ["English", "Kannada", "Hindi"],
    experience: "11+ Years Experience",
    mode: "In-Person (Indiranagar, BLR) & Online",
    slug: "dr-ananya-rao",
    fee: "₹2,200 / session",
  },
  {
    name: "Vikram Sengupta",
    qualification: "M.Sc. Counseling Psychology, Certified CBT Practitioner",
    specialities: ["ADHD Coping", "Workplace Dynamics", "Grief & Loss"],
    languages: ["English", "Bengali", "Hindi"],
    experience: "8+ Years Experience",
    mode: "Online & In-Person (Koramangala, BLR)",
    slug: "vikram-sengupta",
    fee: "₹1,800 / session",
  },
  {
    name: "Meera Krishnan",
    qualification: "MA Clinical Psychology, Narrative Therapy Specialist",
    specialities: ["Identity & Self-Worth", "Relationship Dynamics", "Grounding"],
    languages: ["English", "Tamil", "Kannada"],
    experience: "9+ Years Experience",
    mode: "In-Person (Jayanagar, BLR) & Online",
    slug: "meera-krishnan",
    fee: "₹2,000 / session",
  },
];

const NOVA_HIKARI_STAGES_PREVIEW = [
  { number: "01", name: "Origin", theme: "Acknowledging where you stand today without judgment." },
  { number: "02", name: "Grounding", theme: "Somatic pacing, nervous system settling, and breath." },
  { number: "03", name: "Unpacking", theme: "Untangling noise, chronic expectations, and internalized pressure." },
  { number: "04", name: "Resonance", theme: "Identifying authentic emotional frequencies beneath fatigue." },
  { number: "05", name: "Illumination", theme: "Discovering clarity and reframing personal narrative." },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Signature River & Fog Opening Hero */}
      <RiverFogOpening />

      {/* 2. The Core Triad of MARS */}
      <section className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#7A9A8B]">
              The MARS Wellbeing Framework
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1D3033] mt-2">
              Three Spaces. One Continuous Continuum of Care.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#3D5255] leading-relaxed">
              Wellbeing is not a single transaction. We combine self-directed introspective guidance, small cohort human connection, and qualified clinical therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#F5F0E7] p-8 border border-[#E2DDD5] flex flex-col justify-between group hover:border-[#7A9A8B] transition-all">
              <div>
                <div className="w-10 h-10 rounded-xs bg-[#1D3033] text-[#F5F0E7] flex items-center justify-center font-display text-lg font-bold">
                  01
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-6">
                  Nova Hikari
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#7A9A8B] font-semibold mt-1">
                  Ten-Stage Guided Journey
                </p>
                <p className="mt-4 text-sm text-[#3D5255] leading-relaxed">
                  A structured, introspective self-guided experience designed for slow reflection. Move from fatigue to grounding, unpack chronic stress, and restore inner agency at your own natural pace.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E2DDD5]">
                <Link
                  href="/nova-hikari"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] group-hover:text-[#5B7B6C] transition-colors"
                >
                  <span>Explore the 10 stages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F5F0E7] p-8 border border-[#E2DDD5] flex flex-col justify-between group hover:border-[#7A9A8B] transition-all">
              <div>
                <div className="w-10 h-10 rounded-xs bg-[#1D3033] text-[#F5F0E7] flex items-center justify-center font-display text-lg font-bold">
                  02
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-6">
                  Community Circles
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#7A9A8B] font-semibold mt-1">
                  Bengaluru & Virtual Spaces
                </p>
                <p className="mt-4 text-sm text-[#3D5255] leading-relaxed">
                  Intimate, facilitator-held gatherings designed to dismantle isolation. Structured dialogs for builders, professionals, and seekers in Bengaluru to speak openly without performative expectations.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E2DDD5]">
                <Link
                  href="/community"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] group-hover:text-[#5B7B6C] transition-colors"
                >
                  <span>Discover upcoming circles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F5F0E7] p-8 border border-[#E2DDD5] flex flex-col justify-between group hover:border-[#7A9A8B] transition-all">
              <div>
                <div className="w-10 h-10 rounded-xs bg-[#1D3033] text-[#F5F0E7] flex items-center justify-center font-display text-lg font-bold">
                  03
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-6">
                  Qualified Professionals
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#7A9A8B] font-semibold mt-1">
                  Vetted Clinical Directory
                </p>
                <p className="mt-4 text-sm text-[#3D5255] leading-relaxed">
                  Connect with licensed clinical psychologists, counsellors, and mental health specialists. Transparent credentials, verified RCI registrations, clear pricing in INR, and seamless booking.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E2DDD5]">
                <Link
                  href="/professionals"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] group-hover:text-[#5B7B6C] transition-colors"
                >
                  <span>Browse directory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nova Hikari Spotlight */}
      <section className="py-20 sm:py-28 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1D3033] bg-[#FAF7F2] border border-[#E2DDD5]">
                <Sparkles className="w-3.5 h-3.5 text-[#7A9A8B]" />
                Self-Guided Experience
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase text-[#1D3033] leading-tight">
                Nova Hikari: A 10-Stage Path of Deep Introspection.
              </h2>
              <p className="text-sm sm:text-base text-[#3D5255] leading-relaxed">
                Meaning “New Light”, Nova Hikari is a slow-paced digital space engineered to help you decouple from external noise. There are no gamified streaks or pressure to optimize.
              </p>
              <div className="space-y-3 pt-2 text-sm text-[#3D5255]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7A9A8B] shrink-0 mt-0.5" />
                  <span>Interactive breathing pacer and ambient soundscapes</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7A9A8B] shrink-0 mt-0.5" />
                  <span>Private, local-first reflection prompts stored solely on your device</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7A9A8B] shrink-0 mt-0.5" />
                  <span>Stages 1 & 2 are completely free and immediately accessible</span>
                </div>
              </div>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/nova-hikari"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all"
                >
                  <span>Explore All 10 Stages</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7A9A8B]" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-1.5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#5B7B6C] transition-colors"
                >
                  How It Works →
                </Link>
              </div>
            </div>

            {/* Stages Visual Stepper */}
            <div className="lg:col-span-7 bg-[#FAF7F2] p-8 border border-[#E2DDD5] space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD5]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                  Journey Architecture Preview
                </p>
                <span className="text-xs text-[#7A9A8B] font-mono">Stages 01 — 10</span>
              </div>
              <div className="space-y-3">
                {NOVA_HIKARI_STAGES_PREVIEW.map((stage) => (
                  <div
                    key={stage.number}
                    className="p-4 bg-[#F5F0E7] border border-[#E2DDD5]/80 flex items-start gap-4 hover:border-[#7A9A8B] transition-all"
                  >
                    <span className="font-display text-xl font-bold text-[#7A9A8B] shrink-0">
                      {stage.number}
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-bold uppercase text-[#1D3033]">
                        {stage.name}
                      </h4>
                      <p className="text-xs text-[#3D5255] mt-0.5 leading-relaxed">
                        {stage.theme}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2 text-center">
                <p className="text-xs text-[#3D5255]/80 italic">
                  + 5 additional stages including Renewal, Compassion, Agency, and Transcendence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curated Professional Directory Preview */}
      <section className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#7A9A8B]">
                Qualified Clinical Support
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1D3033] mt-2">
                Verified Mental Health Professionals
              </h2>
              <p className="mt-3 text-sm text-[#3D5255] max-w-xl">
                Consult with licensed clinical psychologists, counsellors, and therapists in Bengaluru and nationwide online.
              </p>
            </div>
            <Link
              href="/professionals"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#5B7B6C] transition-colors"
            >
              <span>View Full Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Directory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMO_PRACTITIONERS.map((pro) => (
              <div
                key={pro.slug}
                className="bg-[#F5F0E7] p-6 border border-[#E2DDD5] flex flex-col justify-between hover:border-[#7A9A8B] transition-all relative"
              >
                {/* Visual DEMO Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#FAF7F2] text-[#3D5255] border border-[#E2DDD5]">
                    DEMO PROFILE
                  </span>
                </div>

                <div>
                  <div className="w-12 h-12 bg-[#1D3033]/10 text-[#1D3033] flex items-center justify-center font-display text-xl font-bold">
                    {pro.name.split(" ")[1][0]}
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-[#1D3033] mt-4">
                    {pro.name}
                  </h3>
                  <p className="text-xs text-[#3D5255] font-medium mt-1">
                    {pro.qualification}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#E2DDD5]/70 space-y-2 text-xs text-[#3D5255]">
                    <p>
                      <strong className="text-[#1D3033]">Focus:</strong> {pro.specialities.join(", ")}
                    </p>
                    <p>
                      <strong className="text-[#1D3033]">Languages:</strong> {pro.languages.join(", ")}
                    </p>
                    <p>
                      <strong className="text-[#1D3033]">Format:</strong> {pro.mode}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7A9A8B] block">Fee</span>
                    <span className="text-xs font-semibold text-[#1D3033]">{pro.fee}</span>
                  </div>
                  <Link
                    href={`/professionals/${pro.slug}`}
                    className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-colors"
                  >
                    View Bio
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Statement Box */}
          <div className="mt-10 p-5 bg-[#F5F0E7] border border-[#E2DDD5] flex items-start gap-3 text-xs text-[#3D5255]">
            <ShieldCheck className="w-4 h-4 text-[#7A9A8B] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1D3033]">Credential Integrity & Clinical Governance:</strong> All practitioner credentials, supervision hours, and RCI registrations will undergo multi-tier clinical verification. <em>Institutional partnership information will be announced following formal confirmation.</em>
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bengaluru First & Purpose */}
      <section className="py-20 sm:py-24 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#7A9A8B]">
                Civic Roots & Context
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1D3033] mt-2 leading-tight">
                Why Bengaluru? Creating Calm in the Center of Innovation.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#3D5255] leading-relaxed">
                Bengaluru is home to the world’s most relentless builders, engineers, and creators. Yet the velocity of innovation often comes at the price of cognitive exhaustion, isolation, and constant hypervigilance.
              </p>
              <p className="mt-3 text-sm text-[#3D5255] leading-relaxed">
                MARS was founded here to create counter-spaces—environments where pausing is celebrated as a strategic necessity rather than a personal failure. We are validating individual demand in Bengaluru first before expanding our community footprint.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] px-5 py-2.5 hover:bg-[#284145] transition-all"
                >
                  <span>Our Philosophy & Origins</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7A9A8B]" />
                </Link>
                <Link
                  href="/community"
                  className="text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#5B7B6C] transition-colors"
                >
                  Bengaluru Circles →
                </Link>
              </div>
            </div>

            <div className="bg-[#FAF7F2] p-8 border border-[#E2DDD5] space-y-6">
              <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                Guiding Principles of Our Spaces
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-[#3D5255]">
                <div className="p-4 bg-[#F5F0E7] border border-[#E2DDD5]/80">
                  <strong className="text-[#1D3033] block mb-1 font-semibold uppercase text-xs tracking-wider">
                    1. No Performative Positivity
                  </strong>
                  You do not need to be cheerful or productive in MARS spaces. Grief, ambiguity, exhaustion, and silence are fully welcome.
                </div>
                <div className="p-4 bg-[#F5F0E7] border border-[#E2DDD5]/80">
                  <strong className="text-[#1D3033] block mb-1 font-semibold uppercase text-xs tracking-wider">
                    2. Uncompromising Privacy
                  </strong>
                  No algorithms selling your vulnerabilities. Reflections in Nova Hikari are strictly private and local to your device by default.
                </div>
                <div className="p-4 bg-[#F5F0E7] border border-[#E2DDD5]/80">
                  <strong className="text-[#1D3033] block mb-1 font-semibold uppercase text-xs tracking-wider">
                    3. Ethical Clinical Boundaries
                  </strong>
                  We never pretend self-help replaces medical psychiatry. Clear escalation pathways protect individuals in acute need.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Early Access Waitlist & Invitation */}
      <section className="py-20 sm:py-28 bg-[#1D3033] text-[#F5F0E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#7A9A8B] bg-[#273F43] border border-[#3D5255]">
            <Sparkles className="w-3.5 h-3.5" />
            Bengaluru Initial Cohort
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#FAF7F2] leading-tight">
            Be Part of the First Grounded Spaces.
          </h2>
          <p className="text-sm sm:text-base text-[#E2DDD5]/85 max-w-xl mx-auto leading-relaxed">
            We are opening early access to our first cohort in Bengaluru for Nova Hikari, facilitator-led circles, and curated clinical appointments.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <Link
              href="/early-access"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#F5F0E7] text-[#1D3033] hover:bg-[#FAF7F2] active:scale-[0.99] transition-all font-mono"
            >
              <span>Join Early Access Waitlist</span>
              <ArrowRight className="w-4 h-4 text-[#7A9A8B]" />
            </Link>
            <Link
              href="/apply"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#E2DDD5] hover:text-[#FAF7F2] border border-[#3D5255] hover:border-[#7A9A8B] transition-all"
            >
              Apply as Professional / Facilitator
            </Link>
          </div>

          <p className="text-[11px] text-[#E2DDD5]/60 pt-4">
            Zero spam. We will only contact you when your cohort opens.
          </p>
        </div>
      </section>
    </div>
  );
}
