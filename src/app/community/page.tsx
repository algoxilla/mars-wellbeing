import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import {
  Users,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const SAMPLE_CIRCLES = [
  {
    id: "SAMPLE-CIR-01",
    title: "Tech Fatigue & Ambiguity: Stepping Off the Treadmill",
    location: "Indiranagar, Bengaluru (Offline)",
    schedule: "Saturday, 10:30 AM — 12:00 PM IST",
    capacity: "8-10 Participants (Demo Scope)",
    facilitator: "Facilitated by Certified Practitioner (Demo Data)",
    focus: "For engineers, product leads, and founders experiencing chronic cognitive overload.",
  },
  {
    id: "SAMPLE-CIR-02",
    title: "Unpacking Perfectionism & Inherited Expectations",
    location: "Koramangala, Bengaluru (Offline)",
    schedule: "Sunday, 4:00 PM — 5:30 PM IST",
    capacity: "8-10 Participants (Demo Scope)",
    facilitator: "Facilitated by Counseling Psychologist (Demo Data)",
    focus: "Exploring the difference between genuine personal values and societal pressure.",
  },
  {
    id: "SAMPLE-CIR-03",
    title: "Quiet Evening Somatic Pacing & Breath",
    location: "Virtual Space (Bengaluru Cohort Focus)",
    schedule: "Wednesday, 7:30 PM — 8:45 PM IST",
    capacity: "10-12 Participants (Demo Scope)",
    facilitator: "Facilitated by Somatic Practitioner (Demo Data)",
    focus: "Mid-week somatic resetting and guided autonomic nervous system settling.",
  },
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Facilitated Human Spaces
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Spaces to Speak Without Performance.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-2xl mx-auto leading-relaxed">
            In Bengaluru, conversation is too often measured by title, company valuation, or LinkedIn achievements. MARS Community Circles are deliberate counter-spaces: small, confidential circles designed for authentic human connection.
          </p>
        </div>
      </section>

      {/* 2. The Four Circle Agreements */}
      <section className="py-20 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E]">
              Circle Ethos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033] mt-2">
              The Four Grounding Agreements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs sm:text-sm text-[#3D5255]">
            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
              <span className="font-display text-lg font-bold text-[#6E8E7E] block">01</span>
              <strong className="text-[#1D3033] block text-xs uppercase tracking-wider">
                Strict Confidentiality
              </strong>
              <p className="leading-relaxed">
                Chatham House Rule. What is spoken inside the circle stays entirely within the circle.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
              <span className="font-display text-lg font-bold text-[#6E8E7E] block">02</span>
              <strong className="text-[#1D3033] block text-xs uppercase tracking-wider">
                No Unsolicited Advice
              </strong>
              <p className="leading-relaxed">
                We speak from personal experience using “I” statements, resisting the urge to fix or coach others.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
              <span className="font-display text-lg font-bold text-[#6E8E7E] block">03</span>
              <strong className="text-[#1D3033] block text-xs uppercase tracking-wider">
                Equal Airtime
              </strong>
              <p className="leading-relaxed">
                Circles are intentionally capped at 8-12 participants, ensuring unhurried space for every voice.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
              <span className="font-display text-lg font-bold text-[#6E8E7E] block">04</span>
              <strong className="text-[#1D3033] block text-xs uppercase tracking-wider">
                Silence is Welcomed
              </strong>
              <p className="leading-relaxed">
                You are never forced to speak. Being quietly present and listening is an honored form of participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sample Bengaluru Circles List */}
      <section className="py-24 bg-[#FAF7F2] border-b border-[#E2DDD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E]">
                Cohort Calendar Preview
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#1D3033] mt-2">
                Demonstration Circles
              </h2>
              <p className="mt-2 text-sm text-[#3D5255]">
                Upcoming sample cohorts scheduled for the Bengaluru validation phase.
              </p>
            </div>

            <Link
              href="/apply"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D]"
            >
              <span>Apply to Facilitate a Circle</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SAMPLE_CIRCLES.map((circle) => (
              <div
                key={circle.id}
                className="bg-[#F5F0E7] p-8 border border-[#E2DDD5] flex flex-col justify-between hover:border-[#6E8E7E] transition-all space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#EAE3D6] text-[#3D5255]">
                      Sample Circle — Demo Only
                    </span>
                    <span className="text-[11px] font-mono text-[#6E8E7E]">{circle.id}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-4 leading-snug">
                    {circle.title}
                  </h3>

                  <div className="mt-5 space-y-2 text-xs text-[#3D5255] border-t border-[#E2DDD5]/70 pt-4">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#6E8E7E]" />
                      <span>{circle.location}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#6E8E7E]" />
                      <span>{circle.schedule}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#6E8E7E]" />
                      <span>{circle.capacity}</span>
                    </p>
                  </div>

                  <p className="mt-4 text-xs text-[#3D5255] italic border-l-2 border-[#6E8E7E] pl-3 py-0.5">
                    {circle.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DDD5]">
                  <Link
                    href="/early-access"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-colors"
                  >
                    <span>Request Cohort Invite</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8FA89B]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <DevelopmentNotice
            phase="Phase 1 Demonstration"
            featureTitle="Community Circles Preview"
            description="Circle schedules and facilitator profiles shown above are sample demonstrations. Live ticketing, RSVP reservations, and calendar confirmations will be enabled during Phase 4."
          />
        </div>
      </section>
    </div>
  );
}
