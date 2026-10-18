"use client";

import React, { useState, useTransition } from "react";
import { Check, Copy, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { submitEarlyAccess } from "@/app/early-access/actions";

const INTEREST_OPTIONS = [
  "Nova Hikari experiences",
  "Community and social events",
  "Professional support options",
  "Corporate wellbeing programmes",
];

export function EarlyAccessSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("Bengaluru");
  const [selectedInterest, setSelectedInterest] = useState("Nova Hikari experiences");
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      alert("Please enter both your name and email address.");
      return;
    }

    startTransition(async () => {
      const res = await submitEarlyAccess({
        fullName: name,
        email,
        city: location,
        interests: [selectedInterest],
      });

      if (res.success) {
        setIsSubmitted(true);
        setSubmissionFeedback(
          res.message || "Thank you for joining MARS Early Access. Your details have been recorded."
        );
      } else {
        alert(res.error || "Could not submit early access request.");
      }
    });
  };

  const handleCopy = () => {
    const details = `MARS Early Access Enquiry:
Name: ${name || "[Not provided]"}
Email: ${email || "[Not provided]"}
Location: ${location || "Bengaluru"}
Primary Interest: ${selectedInterest}
Submitted: ${new Date().toLocaleString()}`;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(details).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3500);
      }).catch(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3500);
      });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="early-access"
      className="py-24 sm:py-32 bg-[#F5F0E7] text-[#1B2926] relative overflow-hidden"
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Form Container (Pixel-Aligned with Founder Screenshot media_1792280049970_349201bd.png) */}
        <div
          className={`space-y-6 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#65716A] block">
            MARS • EARLY ACCESS
          </span>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#153D35] leading-[1.08] tracking-tight">
            Be among the first to experience MARS.
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-[#65716A] font-light leading-relaxed">
            Get updates about upcoming wellbeing experiences, introductory sessions, and community activities in Bengaluru.
          </p>

          {/* Form Fields */}
          <div className="space-y-5 pt-3">
            {/* Your Name */}
            <div className="space-y-2">
              <label htmlFor="early-access-name" className="block text-sm font-medium text-[#153D35]">
                Your name
              </label>
              <input
                id="early-access-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-5 py-3.5 rounded-full bg-[#FFFFFF] border border-[#A8B9A2]/50 text-[#1B2926] placeholder-[#65716A]/60 focus:outline-none focus:ring-2 focus:ring-[#153D35] transition-all shadow-xs text-sm sm:text-base"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label htmlFor="early-access-email" className="block text-sm font-medium text-[#153D35]">
                Email address
              </label>
              <input
                id="early-access-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-5 py-3.5 rounded-full bg-[#FFFFFF] border border-[#A8B9A2]/50 text-[#1B2926] placeholder-[#65716A]/60 focus:outline-none focus:ring-2 focus:ring-[#153D35] transition-all shadow-xs text-sm sm:text-base"
              />
            </div>

            {/* Where are you based? */}
            <div className="space-y-2">
              <label htmlFor="early-access-location" className="block text-sm font-medium text-[#153D35]">
                Where are you based?
              </label>
              <input
                id="early-access-location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-5 py-3.5 rounded-full bg-[#FFFFFF] border border-[#A8B9A2]/50 text-[#1B2926] focus:outline-none focus:ring-2 focus:ring-[#153D35] transition-all shadow-xs text-sm sm:text-base"
              />
            </div>

            {/* What interests you most? */}
            <div className="space-y-3 pt-2">
              <span className="block text-sm font-medium text-[#153D35]">
                What interests you most?
              </span>

              <div className="space-y-3">
                {INTEREST_OPTIONS.map((option) => {
                  const isChecked = selectedInterest === option;
                  return (
                    <label
                      key={option}
                      className="flex items-center gap-3.5 cursor-pointer select-none group"
                    >
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          name="interest"
                          value={option}
                          checked={isChecked}
                          onChange={() => setSelectedInterest(option)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                            isChecked
                              ? "border-[#153D35] bg-[#153D35]"
                              : "border-[#A8B9A2] bg-[#FFFFFF] group-hover:border-[#153D35]"
                          }`}
                        >
                          {isChecked && <div className="w-2 h-2 rounded-full bg-[#F5F0E7]" />}
                        </div>
                      </div>
                      <span className="text-sm sm:text-base text-[#1B2926] font-normal">
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Submission State or Primary Action Button */}
            {isSubmitted ? (
              <div className="p-6 rounded-3xl bg-[#EAF1ED] border border-[#B4C8BE] text-center space-y-3 animate-in fade-in">
                <div className="w-10 h-10 rounded-full bg-[#153D35] text-[#F5F0E7] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A15A]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#153D35]">
                  Enquiry Registered
                </h3>
                <p className="text-xs text-[#1B2926] leading-relaxed max-w-md mx-auto">
                  {submissionFeedback}
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setEmail("");
                    }}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#153D35] border border-[#153D35]/30 rounded-full hover:bg-[#FAF7F2] transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#65716A] hover:text-[#153D35] transition-colors flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? "Copied!" : "Copy Details"}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 pt-3">
                <button
                  type="button"
                  disabled={isPending}
                  onClick={handleSubmit}
                  className="w-full py-4 px-6 text-sm sm:text-base font-semibold text-[#FFFFFF] bg-[#153D35] hover:bg-[#1B2926] rounded-full active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#153D35] focus:ring-offset-2 disabled:opacity-60"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#C9A15A]" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Early Access Enquiry</span>
                      <Sparkles className="w-4 h-4 text-[#C9A15A]" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between pt-1 text-xs text-[#65716A]">
                  <span>Prefer to retain a copy?</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 hover:text-[#153D35] transition-colors underline cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#153D35]" />
                        <span>Copied to clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy details to clipboard</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs sm:text-[13px] text-[#65716A] leading-relaxed pt-1 font-light">
                  Enquiries are securely saved directly to the MARS database for priority invitations. We respect your confidentiality.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
