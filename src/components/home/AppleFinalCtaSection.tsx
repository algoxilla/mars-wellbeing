"use client";

import React, { useState, useTransition } from "react";
import { ArrowRight, Phone, CheckCircle2, Loader2, Copy, Check } from "lucide-react";
import { submitEarlyAccess } from "@/app/early-access/actions";

const INTERESTS = [
  "Nova Hikari experiences",
  "Bengaluru community circles",
  "Professional mental healthcare",
  "Corporate wellbeing programmes",
];

export function AppleFinalCtaSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Bengaluru");
  const [selectedInterest, setSelectedInterest] = useState("Nova Hikari experiences");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      alert("Please enter both your name and email address.");
      return;
    }

    startTransition(async () => {
      const res = await submitEarlyAccess({
        fullName,
        email,
        city,
        interests: [selectedInterest],
      });

      if (res.success) {
        setIsSubmitted(true);
        setSubmissionFeedback(
          res.message || "Thank you for joining MARS Early Access. Our team will be in touch with thoughtful updates."
        );
      } else {
        alert(res.error || "Could not submit early access request.");
      }
    });
  };

  const handleCopy = () => {
    const details = `MARS Early Access Request:
Name: ${fullName || "[Not provided]"}
Email: ${email || "[Not provided]"}
City: ${city || "Bengaluru"}
Interest: ${selectedInterest}
Date: ${new Date().toLocaleDateString()}`;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(details).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }).catch(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section
      id="early-access"
      aria-label="Be among the first to experience MARS"
      className="relative z-10 py-16 sm:py-24 bg-[#F5F5F7] text-[#1D1D1F] border-t border-[#D2D2D7]/50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Apple Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2 sm:mb-3">
            Early Access • Bengaluru & Beyond
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.08] text-balance">
            Be among the first to experience MARS.
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed text-balance">
            Join early access cohorts in Bengaluru and beyond. Quiet personal practice, facilitated circles, and clinical care.
          </p>
        </div>

        {/* Minimal Apple Enrollment Card */}
        <div className="bg-[#FFFFFF] border border-[#D2D2D7]/60 rounded-[20px] sm:rounded-[28px] p-6 sm:p-10 shadow-xs">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#233B32]/10 text-[#233B32] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-sans text-2xl font-semibold text-[#1D1D1F]">
                Thank you, {fullName}.
              </h3>
              <p className="text-sm text-[#6E6E73] max-w-md mx-auto leading-relaxed">
                {submissionFeedback}
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium border border-[#D2D2D7] text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#233B32]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Details Copied" : "Copy Request Summary"}</span>
                </button>
                <a
                  href="tel:+919006219668"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#1D1D1F] text-[#FFFFFF] hover:bg-[#2D2D2F] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call MARS Team: +91 90062 19668</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="full-name"
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
                    htmlFor="email-address"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. ananya@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#6E6E73]/50 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all"
                  />
                </div>
              </div>

              {/* City Selection */}
              <div>
                <label
                  htmlFor="location-city"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2"
                >
                  City or Region
                </label>
                <input
                  id="location-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Bengaluru"
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#6E6E73]/50 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all"
                />
              </div>

              {/* Interest Selector */}
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2">
                  What interests you most?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {INTERESTS.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => setSelectedInterest(interest)}
                      className={`text-left px-4 py-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedInterest === interest
                          ? "bg-[#1D1D1F] text-[#FFFFFF] border-[#1D1D1F]"
                          : "bg-[#F5F5F7] text-[#1D1D1F] border-[#D2D2D7] hover:border-[#1D1D1F]/50"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#D2D2D7]/60">
                {/* Secondary direct call */}
                <a
                  href="tel:+919006219668"
                  className="inline-flex items-center justify-center gap-2 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors py-2"
                >
                  <Phone className="w-4 h-4 text-[#1D1D1F]" />
                  <span>Talk to the MARS Team: +91 90062 19668</span>
                </a>

                {/* Primary Coral CTA Button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all disabled:opacity-60 cursor-pointer shadow-xs"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Begin Your Journey</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Quiet assurance note */}
        <p className="mt-6 text-center text-xs text-[#6E6E73]">
          No spam, no intrusive marketing. We respect your attention and privacy.
        </p>
      </div>
    </section>
  );
}
