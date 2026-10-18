"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setIsSent(true);
  };

  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      {/* 1. Apple Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-20 border-b border-[#D2D2D7]/60 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2 sm:mb-3">
            Inquiries & Team Guidance • Bengaluru
          </span>

          <h1 className="font-sans font-semibold tracking-tight text-[#1D1D1F] text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
            Get in touch with MARS.
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-xl mx-auto text-balance">
            Have questions about our cohort rollouts, Nova Hikari contemplative practice, or clinical care pathways in Bengaluru? We welcome thoughtful dialogue.
          </p>
        </div>
      </section>

      {/* 2. Direct Contacts Grid & Form */}
      <section className="py-14 sm:py-20 bg-[#F5F5F7] border-b border-[#D2D2D7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Info Tiles */}
            <div className="lg:col-span-5 space-y-4">
              {/* Card 1: Direct Guidance Call */}
              <div className="bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] p-6 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#1D1D1F] text-[#FFFFFF] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
                  MARS Team Guidance
                </h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  Direct telephone contact for cohort enrollment, general questions, and guidance.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+919006219668"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#D96C68] hover:underline"
                  >
                    <span>+91 90062 19668</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card 2: Email Inquiries */}
              <div className="bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] p-6 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#1D1D1F] text-[#FFFFFF] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
                  Written Inquiries
                </h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  For corporate programs, research partnerships, and media communications.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:contact@marswellbeing.in"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
                  >
                    <span>contact@marswellbeing.in</span>
                  </a>
                </div>
              </div>

              {/* Card 3: Clinical Partner */}
              <div className="bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] p-6 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6E6E73]">
                    Healthcare Partner
                  </span>
                  <a
                    href="https://hcmhospital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#D96C68] hover:underline inline-flex items-center gap-1"
                  >
                    <span>hcmhospital.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="font-sans text-lg font-semibold text-[#1D1D1F]">
                  Highland Care Private Limited
                </h3>
                <p className="text-xs text-[#6E6E73]">
                  Clinical governance, hospital psychiatric referrals, and medical oversight.
                </p>
              </div>
            </div>

            {/* Right: Clean Apple Inquiry Form */}
            <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] sm:rounded-[28px] p-6 sm:p-10 shadow-xs">
              {isSent ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1D1D1F] text-[#FFFFFF] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans text-2xl font-semibold text-[#1D1D1F]">
                    Thank you, {name}.
                  </h3>
                  <p className="text-sm text-[#6E6E73] max-w-md mx-auto leading-relaxed">
                    We have received your message. A member of the MARS team will review your inquiry and reply thoughtfully to {email}.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSent(false)}
                      className="px-5 py-2.5 text-xs font-medium text-[#1D1D1F] border border-[#D2D2D7] rounded-full hover:bg-[#F5F5F7] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-sans text-2xl font-semibold text-[#1D1D1F]">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#6E6E73]">
                    Fill in your details and we will get back to you within 24 to 48 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rohan Sen"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#6E6E73]/50 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. rohan@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#6E6E73]/50 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-category"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="contact-category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Nova Hikari Question">Nova Hikari Question</option>
                      <option value="Bengaluru Community Circles">Bengaluru Community Circles</option>
                      <option value="Clinical Referral Pathway">Clinical Referral Pathway</option>
                      <option value="Corporate Wellbeing">Corporate Wellbeing</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share what's on your mind..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#6E6E73]/50 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all leading-relaxed"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-[#6E6E73]">
                      We respect your privacy and attention.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all shadow-xs cursor-pointer"
                    >
                      <span>Send Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Emergency & Crisis Protocols */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#D2D2D7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#D96C68] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] block">
                  Experiencing Acute Distress or Emergency?
                </strong>
                <p className="text-xs text-[#6E6E73] mt-1 leading-relaxed">
                  MARS Wellbeing is not a crisis center. If you are experiencing acute suicidal thoughts or emotional emergency, please call <strong>Tele-MANAS (14416)</strong>, national emergency <strong>112</strong>, or Vandrevala Foundation (<strong>+91 9999 666 555</strong>) immediately.
                </p>
              </div>
            </div>

            <a
              href="tel:14416"
              className="px-4 py-2 text-xs font-semibold text-[#FFFFFF] bg-[#1D1D1F] hover:bg-[#2D2D2F] rounded-full transition-colors whitespace-nowrap shrink-0"
            >
              Call 14416 &gt;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
