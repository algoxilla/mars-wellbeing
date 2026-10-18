"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Mail,
  User,
  MapPin,
  Loader2,
  Phone,
  Copy,
  Check,
} from "lucide-react";
import { submitEarlyAccess } from "@/app/early-access/actions";

const INTEREST_OPTIONS = [
  "Nova Hikari Guided Experience",
  "Bengaluru Community Circles",
  "Professional Clinical Pathways",
  "Workplace & Team Wellbeing",
];

export default function EarlyAccessPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Bengaluru");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Nova Hikari Guided Experience",
    "Bengaluru Community Circles",
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleInterestToggle = (option: string) => {
    setSelectedInterests((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !fullName.trim()) return;

    startTransition(async () => {
      const res = await submitEarlyAccess({
        fullName,
        email,
        city,
        interests: selectedInterests,
      });

      if (res.success) {
        setIsSubmitted(true);
        setSubmissionFeedback(
          res.message || "Thank you for joining MARS Early Access. Your details have been recorded."
        );
      } else {
        alert(res.error || "Failed to submit request.");
      }
    });
  };

  const handleCopy = () => {
    const details = `MARS Early Access Request:
Name: ${fullName || "[Not provided]"}
Email: ${email || "[Not provided]"}
City: ${city || "Bengaluru"}
Interests: ${selectedInterests.join(", ")}
Date: ${new Date().toLocaleDateString()}`;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(details).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      {/* 1. Apple Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-20 border-b border-[#D2D2D7]/60 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2 sm:mb-3">
            Early Access • Bengaluru & Beyond
          </span>

          <h1 className="font-sans font-semibold tracking-tight text-[#1D1D1F] text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
            Be among the first to experience MARS.
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-xl mx-auto text-balance">
            We are opening early access cohorts in Bengaluru for Nova Hikari, small-group community circles, and accredited clinical care.
          </p>
        </div>
      </section>

      {/* 2. Apple Enrollment Form Container */}
      <section className="py-14 sm:py-20 bg-[#F5F5F7] border-b border-[#D2D2D7]/60">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] sm:rounded-[28px] p-6 sm:p-10 shadow-xs">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#1D1D1F] text-[#FFFFFF] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h2 className="font-sans text-2xl font-semibold text-[#1D1D1F]">
                  Thank you, {fullName}.
                </h2>

                <p className="text-sm text-[#6E6E73] max-w-md mx-auto leading-relaxed">
                  {submissionFeedback}
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium border border-[#D2D2D7] text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#1D1D1F]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Details Copied" : "Copy Summary"}</span>
                  </button>
                  <a
                    href="tel:+919006219668"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#1D1D1F] text-[#FFFFFF] hover:bg-[#2D2D2F] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Team: +91 90062 19668</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-sans text-2xl font-semibold text-[#1D1D1F]">
                    Request Early Access
                  </h3>
                  <p className="text-xs text-[#6E6E73] mt-1">
                    Select your areas of interest and we will reach out thoughtfully with cohort openings.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="early-fullname"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="early-fullname"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ananya Rao"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#6E6E73]/50 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="early-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="early-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. ananya@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#6E6E73]/50 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="early-city"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2"
                    >
                      City or Region
                    </label>
                    <input
                      id="early-city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Bengaluru"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#6E6E73]/50 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all"
                    />
                  </div>

                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2">
                      What experiences interest you?
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {INTEREST_OPTIONS.map((option) => {
                        const isChecked = selectedInterests.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleInterestToggle(option)}
                            className={`text-left px-4 py-3 rounded-xl border text-xs font-medium transition-all ${
                              isChecked
                                ? "bg-[#1D1D1F] text-[#FFFFFF] border-[#1D1D1F]"
                                : "bg-[#F5F5F7] text-[#1D1D1F] border-[#D2D2D7] hover:border-[#1D1D1F]/40"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D2D2D7]/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href="tel:+919006219668"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D96C68]" />
                    <span>Call +91 90062 19668</span>
                  </a>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all disabled:opacity-60 cursor-pointer shadow-xs"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Join Early Access</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-xs text-[#6E6E73]">
            No spam, no intrusive marketing. We respect your attention and privacy.
          </p>
        </div>
      </section>
    </div>
  );
}
