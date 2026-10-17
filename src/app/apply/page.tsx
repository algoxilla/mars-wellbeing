"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, User, Mail, FileText, Building2 } from "lucide-react";

export default function ApplyPage() {
  const [selectedTrack, setSelectedTrack] = useState<"professional" | "facilitator" | "participant" | "partner">("professional");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [statement, setStatement] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Onboarding & Cohort Applications
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Join the MARS Wellbeing Ecosystem
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-xl mx-auto leading-relaxed">
            We are accepting applications from qualified clinicians, community facilitators, cohort participants, and institutional partners in Bengaluru.
          </p>

          {/* Track Selection Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "professional", label: "Mental Health Professional" },
              { id: "facilitator", label: "Circle Facilitator" },
              { id: "participant", label: "Cohort Participant" },
              { id: "partner", label: "Institutional Partner" },
            ].map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => {
                  setSelectedTrack(track.id as any);
                  setIsSubmitted(false);
                }}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all border ${
                  selectedTrack === track.id
                    ? "bg-[#1D3033] text-[#F5F0E7] border-[#1D3033]"
                    : "bg-[#F5F0E7] text-[#3D5255] border-[#E2DDD5] hover:border-[#6E8E7E]"
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Application Form */}
      <section className="py-20 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <div className="p-8 sm:p-12 bg-[#FAF7F2] border border-[#6E8E7E] text-center space-y-6 animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-[#4A6E5D] mx-auto" />
              <h2 className="font-display text-3xl font-bold uppercase text-[#1D3033]">
                Application Received
              </h2>
              <p className="text-sm text-[#3D5255] leading-relaxed">
                Thank you, {name}. Your application for the <strong>{selectedTrack.toUpperCase()}</strong> track has been recorded. Our review board will review your credentials and contact you via {email}.
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-colors"
                >
                  <span>Return to Homepage</span>
                </Link>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 bg-[#FAF7F2] border border-[#E2DDD5] space-y-6"
            >
              <div className="border-b border-[#E2DDD5] pb-4">
                <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                  {selectedTrack === "professional" && "Clinical Practitioner Onboarding"}
                  {selectedTrack === "facilitator" && "Community Circle Facilitation"}
                  {selectedTrack === "participant" && "Bengaluru Cohort Participant"}
                  {selectedTrack === "partner" && "Institutional & Healthcare Partnership"}
                </h3>
                <p className="text-xs text-[#3D5255] mt-1">
                  Please provide accurate details. All applications undergo verification.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                  Full Name / Contact Lead
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Raghavendra Rao"
                  className="w-full px-4 py-2.5 bg-[#F5F0E7] border border-[#E2DDD5] text-sm text-[#1D3033] focus:outline-none focus:border-[#6E8E7E]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="raghavendra@example.com"
                  className="w-full px-4 py-2.5 bg-[#F5F0E7] border border-[#E2DDD5] text-sm text-[#1D3033] focus:outline-none focus:border-[#6E8E7E]"
                />
              </div>

              {selectedTrack !== "participant" && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                    {selectedTrack === "professional" ? "Highest Clinical Qualification & RCI Number" : "Institution / Organization"}
                  </label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder={
                      selectedTrack === "professional"
                        ? "e.g. M.Phil Clinical Psychology, RCI A12345"
                        : "Organization Name"
                    }
                    className="w-full px-4 py-2.5 bg-[#F5F0E7] border border-[#E2DDD5] text-sm text-[#1D3033] focus:outline-none focus:border-[#6E8E7E]"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                  Statement of Interest / Experience
                </label>
                <textarea
                  rows={4}
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                  placeholder="Tell us about your background, clinical supervision, or why you wish to participate..."
                  className="w-full px-4 py-2.5 bg-[#F5F0E7] border border-[#E2DDD5] text-sm text-[#1D3033] focus:outline-none focus:border-[#6E8E7E]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all font-mono"
              >
                Submit Application →
              </button>
            </form>
          )}

          <DevelopmentNotice
            phase="Phase 1 Interactive Preview"
            featureTitle="Application Ingestion"
            description="In Phase 4, applicant submissions will connect to our administrative triage dashboard with secure file uploads for clinical certificates and supervisory logs."
          />
        </div>
      </section>
    </div>
  );
}
