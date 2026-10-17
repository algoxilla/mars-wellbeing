"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Mail, User, MapPin } from "lucide-react";

export default function EarlyAccessPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Bengaluru");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Nova Hikari Guided Experience",
    "Bengaluru Community Circles",
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    "Nova Hikari Guided Experience",
    "Bengaluru Community Circles",
    "Qualified Therapy Appointments",
    "Workplace & Team Wellbeing",
  ];

  const handleInterestToggle = (option: string) => {
    setSelectedInterests((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-semibold tracking-wider uppercase text-[#4A6E5D] bg-[#EAF1ED] border border-[#B4C8BE]">
            <Sparkles className="w-3.5 h-3.5 text-[#6E8E7E]" />
            <span>Bengaluru Initial Cohort</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Join the First Grounded Spaces.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-xl mx-auto leading-relaxed">
            We are opening early access to our first cohorts in Bengaluru for Nova Hikari, small-group community circles, and curated clinical appointments.
          </p>
        </div>
      </section>

      {/* 2. Waitlist Form Container */}
      <section className="py-20 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            /* Simulated Confirmation State */
            <div className="p-8 sm:p-12 bg-[#FAF7F2] border border-[#6E8E7E] text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-14 h-14 bg-[#EAF1ED] text-[#4A6E5D] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#EAE3D6] text-[#3D5255] border border-[#DCD5C9]">
                Simulated Submission — Phase 1 Preview
              </div>

              <h2 className="font-display text-3xl font-bold uppercase text-[#1D3033]">
                Demonstration Request Received
              </h2>

              <p className="text-sm text-[#3D5255] leading-relaxed">
                Thank you for testing the early-access flow, <strong>{fullName}</strong>. <em>Please note:</em> In this Phase 1 preview, this submission is <strong>simulated locally on your device</strong>. No data has been saved to a live database, and no confirmation email has been dispatched yet.
              </p>

              <div className="p-4 bg-[#F5F0E7] border border-[#E2DDD5] text-xs text-[#3D5255] text-left space-y-2">
                <p>
                  <strong className="text-[#1D3033]">Inputted Email:</strong> {email} (Not transmitted)
                </p>
                <p>
                  <strong className="text-[#1D3033]">Selected Spaces:</strong> {selectedInterests.join(", ")}
                </p>
                <p>
                  <strong className="text-[#1D3033]">City:</strong> {city}
                </p>
                <p className="text-[11px] text-[#4A6E5D] pt-1 font-medium">
                  ✓ Form validation & field states verified. Real database persistence will be activated in Phase 2.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#F5F0E7] text-[#1D3033] hover:bg-[#EAE3D6] border border-[#E2DDD5] transition-colors"
                >
                  Edit / Test Again
                </button>
                <Link
                  href="/nova-hikari"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-colors"
                >
                  <span>Explore Nova Hikari</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8FA89B]" />
                </Link>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 bg-[#FAF7F2] border border-[#E2DDD5] space-y-6"
            >
              <div className="border-b border-[#E2DDD5] pb-4">
                <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                  Early Access Request
                </h2>
                <p className="text-xs text-[#3D5255] mt-1">
                  Bengaluru initial cohort. Unhurried spaces with zero spam.
                </p>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#6E8E7E] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rohini Deshmukh"
                    className="w-full pl-10 pr-4 py-2.5 bg-[#F5F0E7] border border-[#E2DDD5] text-sm text-[#1D3033] placeholder-[#3D5255]/50 focus:outline-none focus:border-[#6E8E7E]"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#6E8E7E] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rohini@example.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-[#F5F0E7] border border-[#E2DDD5] text-sm text-[#1D3033] placeholder-[#3D5255]/50 focus:outline-none focus:border-[#6E8E7E]"
                  />
                </div>
              </div>

              {/* City */}
              <div className="space-y-1.5">
                <label htmlFor="city" className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                  Location / City
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#6E8E7E] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    id="city"
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#F5F0E7] border border-[#E2DDD5] text-sm text-[#1D3033] focus:outline-none focus:border-[#6E8E7E]"
                  />
                </div>
              </div>

              {/* Interests Checkboxes */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1D3033] block">
                  Spaces You Wish to Access
                </span>
                <div className="space-y-2">
                  {interestOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 p-2.5 bg-[#F5F0E7] border border-[#E2DDD5] cursor-pointer hover:border-[#6E8E7E] transition-colors text-xs text-[#3D5255]"
                    >
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(option)}
                        onChange={() => handleInterestToggle(option)}
                        className="rounded-xs text-[#1D3033] focus:ring-0 accent-[#1D3033]"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all font-mono"
              >
                Join Bengaluru Waitlist →
              </button>

              <p className="text-[11px] text-[#3D5255]/70 text-center">
                We respect your inbox. You will only be contacted regarding your cohort allocation.
              </p>
            </form>
          )}

          <DevelopmentNotice
            phase="Phase 1 Interactive Preview"
            featureTitle="Waitlist Registration"
            description="In Phase 2, this registration will be persisted to our Supabase database and issue a branded confirmation receipt via Resend."
          />
        </div>
      </section>
    </div>
  );
}
