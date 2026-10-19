import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Phone,
  HeartHandshake,
  CheckCircle2,
  Compass,
  Award,
} from "lucide-react";

const TEAM = [
  {
    name: "Dr. Saurabh Dixit",
    role: "Senior Consultant Surgeon & Medical Director",
    bio: "Pioneering clinical governance, patient-first care models, and clinical continuity across accredited hospitals.",
    photo: "/team/dr-saurabh-dixit.jpg",
  },
  {
    name: "Dr. Uzma Dixit",
    role: "Family Physician & Women's Health Consultant",
    bio: "Advocating for empathetic preventive care, somatic stress regulation, and holistic family health.",
    photo: "/team/dr-uzma-dixit.jpg",
  },
  {
    name: "Dr. Raghav Jha",
    role: "Ecosystem Partnerships & Operations",
    bio: "Building collaborative bridges between clinical healthcare providers, tech communities, and wellbeing sanctuaries.",
    photo: "/team/dr-raghav-jha.jpg",
  },
  {
    name: "Dr. Shreyansh Ojha",
    role: "Clinical Innovation & Digital Health Protocols",
    bio: "Designing evidence-backed contemplative workflows, autonomic resets, and digital wellbeing frameworks.",
    photo: "/team/dr-shreyansh-ojha.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      {/* 1. Apple Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#D2D2D7]/60 overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2 sm:mb-3">
            Origins & Philosophy • Born in Bengaluru
          </span>

          <h1 className="font-sans font-semibold tracking-tight text-[#1D1D1F] text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
            Restoring stillness to ambition.
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-2xl mx-auto text-balance">
            MARS (Mental Assistance Reassurance System) was founded on a simple conviction: when the world accelerates at maximum speed, pausing is not a luxury—it is an essential human discipline.
          </p>

          <div className="mt-6 flex flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/#early-access"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all shadow-xs"
            >
              <span>Begin Your Journey</span>
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

        {/* Sanctuary Visual */}
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mt-10 sm:mt-14">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#F5F5F7] shadow-sm">
            <Image
              src="/images/hero-sanctuary.jpg"
              alt="Serene minimalist stone and water reflection sanctuary bathed in natural morning light"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 2. The Vision Narrative */}
      <section className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-[#D2D2D7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 text-base sm:text-lg text-[#6E6E73] leading-relaxed">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block">
            Why MARS Exists
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
            The need for deliberate counter-spaces.
          </h2>
          <p>
            Bengaluru is home to the most brilliant builders, engineers, and creators in South Asia. Yet the modern ecosystem constantly rewards cognitive acceleration, multi-tasking, and hypervigilance. Over time, chronic pressure leads to cognitive narrowing, deep isolation, and autonomic exhaustion.
          </p>
          <p>
            MARS was conceived to create deliberate counter-spaces: physical and digital environments where individuals can step out of performance mode, regulate their nervous systems, and connect with qualified support without fear of judgment.
          </p>
          <p>
            We combine <strong>Nova Hikari</strong> (a private 10-stage guided journey), <strong>Community Circles</strong> (small, facilitator-held gatherings in Bengaluru), and <strong>Clinical Therapy</strong> (licensed psychologists and hospital partners).
          </p>
        </div>
      </section>

      {/* 3. Founding Medical Leadership */}
      <section id="team" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#D2D2D7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2">
              Medical Leadership
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
              Founded by practicing physicians.
            </h2>
            <p className="mt-3 text-base text-[#6E6E73]">
              Combining hospital-grade clinical governance with empathetic, human-centered wellbeing design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((doctor) => (
              <div
                key={doctor.name}
                className="bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-[20px] p-6 flex flex-col justify-between hover:border-[#1D1D1F]/40 transition-colors shadow-xs"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#D2D2D7]/60 mb-5">
                    <Image
                      src={doctor.photo}
                      alt={`Portrait of ${doctor.name}`}
                      fill
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-[#1D1D1F]">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-[#D96C68] font-medium mt-1">
                    {doctor.role}
                  </p>
                  <p className="text-xs text-[#6E6E73] mt-3 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. National Presentation Milestone (Bharat Mandapam) */}
      <section id="milestones" className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-[#D2D2D7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block">
                National Milestone
              </span>
              <h2 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
                Bharat Mandapam, New Delhi.
              </h2>
              <p className="text-base text-[#6E6E73] leading-relaxed">
                The MARS Wellbeing vision was unveiled on India&apos;s premier national convention stage at Bharat Mandapam in New Delhi—sharing our commitment to bringing accessible, clinically sound, and culturally nuanced mental health support to professionals across India.
              </p>
              <div className="pt-2">
                <a
                  href="https://hcmhospital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
                >
                  <span>Supported by Healthcare Partner Highland Care</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/9] w-full rounded-[20px] sm:rounded-[28px] overflow-hidden bg-[#040907] border border-[#D2D2D7]/70 shadow-sm">
                <Image
                  src="/milestones/bharat-mandapam-launch.jpg"
                  alt="MARS launch presentation at Bharat Mandapam, New Delhi with the illuminated amphitheatre and Nataraja statue at night"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing Call to Action */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block">
            Begin Your Experience
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
            Your next pause can start here.
          </h2>
          <p className="text-base text-[#6E6E73]">
            Explore Nova Hikari self-guided practices or join a facilitated Bengaluru circle.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#early-access"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] rounded-full transition-colors shadow-xs"
            >
              <span>Join Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919006219668"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] border border-[#D2D2D7] rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D96C68]" />
              <span>Call +91 90062 19668</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
