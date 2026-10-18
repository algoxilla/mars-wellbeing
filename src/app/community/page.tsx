import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
} from "lucide-react";

const COMMUNITY_CIRCLES = [
  {
    id: "CIR-01",
    title: "Stepping Off the Treadmill",
    focus: "For engineers, product leaders, and founders experiencing chronic cognitive overload.",
    location: "Indiranagar, Bengaluru (In-Person)",
    schedule: "Saturday mornings • 10:30 AM — 12:00 PM IST",
    cohortSize: "6–8 participants",
    facilitation: "Facilitated by certified psychological practitioner",
  },
  {
    id: "CIR-02",
    title: "Unpacking Inherited Expectations",
    focus: "Exploring the boundary between authentic personal values and societal pressure.",
    location: "Koramangala, Bengaluru (In-Person)",
    schedule: "Sunday afternoons • 4:00 PM — 5:30 PM IST",
    cohortSize: "6–8 participants",
    facilitation: "Facilitated by counseling psychologist",
  },
  {
    id: "CIR-03",
    title: "Quiet Midweek Somatic Pacing",
    focus: "Midweek nervous system regulation, guided breath resets, and quiet community dialogue.",
    location: "Virtual Space (Bengaluru Cohort Focus)",
    schedule: "Wednesday evenings • 7:30 PM — 8:45 PM IST",
    cohortSize: "8–10 participants",
    facilitation: "Facilitated by somatic mindfulness practitioner",
  },
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      {/* 1. Apple Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#D2D2D7]/60 overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2 sm:mb-3">
            Bengaluru Cohorts • Facilitated Human Spaces
          </span>

          <h1 className="font-sans font-semibold tracking-tight text-[#1D1D1F] text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
            Spaces to speak without performance.
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-2xl mx-auto text-balance">
            In Bengaluru, conversations are too often measured by startup valuations, engineering titles, or networking agendas. MARS Community Circles are deliberate counter-spaces: small, confidential circles designed for unhurried human connection.
          </p>

          <div className="mt-6 flex flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/#early-access"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all shadow-xs"
            >
              <span>Join a Bengaluru Circle</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
            <a
              href="tel:+919006219668"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] border border-[#D2D2D7] active:scale-[0.98] rounded-full transition-all"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#D96C68]" />
              <span>Call +91 90062 19668</span>
            </a>
          </div>
        </div>

        {/* Flagship Large Community Visual */}
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mt-10 sm:mt-14">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#F5F5F7] shadow-sm">
            <Image
              src="/images/community-circle.jpg"
              alt="Adults gathered in an unhurried, thoughtful, supportive discussion circle in Bengaluru"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 2. Core Circle Principles Section */}
      <section className="py-14 sm:py-20 bg-[#F5F5F7] border-b border-[#D2D2D7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-2xl shadow-xs space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D96C68]">
                Intimate Group Size
              </span>
              <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
                6 to 8 Participants
              </h3>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Large groups encourage masking and passive observation. We keep every circle strictly capped so every person has breathing room to be heard.
              </p>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-2xl shadow-xs space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D96C68]">
                Professional Facilitation
              </span>
              <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
                Clinically Grounded
              </h3>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Every cohort is held by qualified psychologists or trained group facilitators—ensuring emotional safety, active listening, and healthy boundaries.
              </p>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-2xl shadow-xs space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D96C68]">
                Strict Confidentiality
              </span>
              <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
                Zero Networking
              </h3>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                No pitches, no business cards, no LinkedIn exchanges during the circle. What is spoken inside the room stays inside the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bengaluru Circles Overview */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#D2D2D7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2">
              Active Bengaluru Cohorts
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
              Find your circle.
            </h2>
            <p className="mt-3 text-base text-[#6E6E73]">
              Circles meet across quiet partner spaces in central Bengaluru and secure virtual meeting rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY_CIRCLES.map((circle) => (
              <div
                key={circle.id}
                className="bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-[20px] p-6 sm:p-7 flex flex-col justify-between hover:border-[#1D1D1F]/40 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#D2D2D7]/60">
                    <span className="font-mono text-xs font-bold text-[#D96C68]">
                      {circle.id}
                    </span>
                    <span className="text-[11px] font-semibold text-[#1D1D1F]">
                      {circle.cohortSize}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-semibold text-[#1D1D1F] mt-4">
                    {circle.title}
                  </h3>

                  <p className="text-xs text-[#6E6E73] mt-2 leading-relaxed">
                    {circle.focus}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#D2D2D7]/60 space-y-2 text-xs text-[#6E6E73]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#1D1D1F] shrink-0" />
                      <span>{circle.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#1D1D1F] shrink-0" />
                      <span>{circle.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D2D2D7]/60">
                  <Link
                    href="/#early-access"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold text-[#FFFFFF] bg-[#1D1D1F] hover:bg-[#2D2D2F] rounded-full transition-colors"
                  >
                    <span>Request Early Access</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing Reassurance & Guidance */}
      <section className="py-16 sm:py-24 bg-[#F5F5F7] text-[#1D1D1F] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block">
            Questions About Joining?
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F]">
            Talk to a human before deciding.
          </h2>
          <p className="text-base text-[#6E6E73] leading-relaxed">
            Unsure whether a circle or individual practice is appropriate for you? Our team is glad to answer questions directly.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+919006219668"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] rounded-full transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call MARS Team: +91 90062 19668</span>
            </a>
            <Link
              href="/#early-access"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-[#1D1D1F] hover:bg-[#FFFFFF] border border-[#D2D2D7] rounded-full transition-colors"
            >
              <span>Join Cohort Waitlist</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
