"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import {
  Mail,
  PhoneCall,
  ShieldAlert,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSent(true);
  };

  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Inquiries & Communication
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Get in Touch with MARS.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-xl mx-auto leading-relaxed">
            Have questions about our cohort rollouts, corporate programs, or community circles in Bengaluru? We welcome thoughtful dialogue.
          </p>
        </div>
      </section>

      {/* 2. Urgent Crisis Alert Box */}
      <section className="py-8 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-[#FAF7F2] border-2 border-[#C26D53] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start gap-3.5">
              <ShieldAlert className="w-6 h-6 text-[#C26D53] shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm text-[#1D3033] uppercase tracking-wide block">
                  Experiencing an Acute Mental Health Emergency?
                </strong>
                <p className="text-xs text-[#3D5255] mt-1 leading-relaxed">
                  MARS Wellbeing is not an emergency hospital or suicide crisis service. Please reach out directly to 24/7 verified official helplines in India.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:14416"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#FAF7F2] hover:bg-[#284145] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#8FA89B]" />
                <span>Tele-MANAS: 14416</span>
              </a>
              <a
                href="tel:18005990019"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#FAF7F2] text-[#1D3033] border border-[#E2DDD5] hover:bg-[#EAE3D6] transition-colors"
              >
                <span>KIRAN: 1800-599-0019</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Inquiries Form & Contact Details Grid */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E2DDD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              {isSent ? (
                <div className="p-10 bg-[#F5F0E7] border border-[#6E8E7E] text-center space-y-4 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-[#4A6E5D] mx-auto" />
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#EAE3D6] text-[#3D5255] border border-[#DCD5C9]">
                    Simulated Submission — Phase 1 Preview
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                    Demonstration Message Received
                  </h3>
                  <p className="text-sm text-[#3D5255] leading-relaxed">
                    Thank you, <strong>{name}</strong>. Your inquiry regarding <strong>{category}</strong> has been validated locally. <em>Please note:</em> In this Phase 1 preview, this form is simulated on your device. Live server dispatch and email delivery will be connected in Phase 2.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSent(false)}
                      className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#FAF7F2] text-[#1D3033] hover:bg-[#EAE3D6] border border-[#E2DDD5] transition-colors"
                    >
                      Send Another Message / Test Again
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 sm:p-10 bg-[#F5F0E7] border border-[#E2DDD5] space-y-5"
                >
                  <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] border-b border-[#E2DDD5] pb-3">
                    Send an Inquiry
                  </h3>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Maya Sundaram"
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E2DDD5] text-sm text-[#1D3033] focus:outline-none focus:border-[#6E8E7E]"
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
                      placeholder="maya@example.com"
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E2DDD5] text-sm text-[#1D3033] focus:outline-none focus:border-[#6E8E7E]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                      Topic of Inquiry
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E2DDD5] text-sm text-[#1D3033] focus:outline-none focus:border-[#6E8E7E]"
                    >
                      <option>General Inquiry</option>
                      <option>Corporate & Team Programs</option>
                      <option>Clinical Professional Application</option>
                      <option>Community Facilitation</option>
                      <option>Press & Research Collaborations</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help or collaborate?"
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E2DDD5] text-sm text-[#1D3033] focus:outline-none focus:border-[#6E8E7E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all font-mono"
                  >
                    Submit Message →
                  </button>
                </form>
              )}
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-[#F5F0E7] border border-[#E2DDD5] space-y-4 text-xs sm:text-sm text-[#3D5255]">
                <h4 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                  Location & Response Time
                </h4>
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
                  <span>Bengaluru, Karnataka, India</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" />
                  <span>We aim to reply to general inquiries within 2 business days.</span>
                </p>
              </div>

              <div className="p-8 bg-[#F5F0E7] border border-[#E2DDD5] space-y-3 text-xs text-[#3D5255]">
                <strong className="text-[#1D3033] block text-xs uppercase tracking-wider">
                  Applications & Collaborations
                </strong>
                <p>
                  If you are a clinical psychologist, psychiatrist, or community facilitator looking to apply, please use our structured onboarding form.
                </p>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D] pt-2"
                >
                  <span>Go to Applications Portal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
                </Link>
              </div>
            </div>
          </div>

          <DevelopmentNotice
            phase="Phase 1 Interactive Preview"
            featureTitle="Contact & Inquiry Ingestion"
            description="In Phase 2, this endpoint will be connected to our transactional routing pipeline to forward inquiries directly to our administrative team."
          />
        </div>
      </section>
    </div>
  );
}
