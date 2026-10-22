"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { AmbientAudioToggle } from "@/components/ui/AmbientAudioToggle";
import { CinematicRibbonBackground } from "@/components/home/CinematicRibbonBackground";

export function ComingSoonLanding() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setStatus("error");
      setFeedbackMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        startTransition(() => {
          setStatus("success");
          setFeedbackMessage(
            data.message ||
              "Thank you for joining our waitlist! You will be among the first to experience Mars Wellbeing."
          );
          setEmail("");
        });
      } else {
        setStatus("error");
        setFeedbackMessage(
          data?.error ||
            "We could not register your email right now. Please try again shortly."
        );
      }
    } catch {
      setStatus("error");
      setFeedbackMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-x-hidden bg-[#000000] text-white selection:bg-orange-500/30 selection:text-white">
      {/* 1. Continuous Cinematic Motion Background with Sculptural Obsidian Ribbons & Amber Core */}
      <CinematicRibbonBackground />

      {/* 2. Top Minimal Utility Header: Ambient Sound Toggle + Clinical Platform Story */}
      <header className="relative z-30 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-5 sm:pt-6 flex items-center justify-end gap-2.5">
        {/* Ambient Audio Toggle */}
        <div className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-full px-2 py-1 backdrop-blur-md transition-colors shadow-sm">
          <AmbientAudioToggle
            compact={false}
            showText={false}
            className="text-zinc-300 hover:text-white"
          />
        </div>

        {/* Discreet link to Platform Story & Clinical Partners */}
        <Link
          href="/about"
          className="text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all inline-flex items-center gap-1.5 shadow-sm"
        >
          <span>Clinical Story</span>
          <ArrowRight className="w-3 h-3 text-zinc-400" />
        </Link>
      </header>

      {/* 3. Central Composition: Authentic Logo, Badge, Headline, Frosted Waitlist Card & Social Buttons */}
      <main className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 my-auto py-6 sm:py-8 flex flex-col items-center text-center">
        {/* Authentic Mars Wellbeing Logo (Prominent, crisp, confident, no adjacent text) */}
        <div className="mb-4 sm:mb-5">
          <Link
            href="/"
            aria-label="Mars Wellbeing Home"
            className="inline-block transition-opacity duration-300 hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
          >
            <Image
              src="/brand/mars-logo.png"
              alt="Mars Wellbeing"
              width={240}
              height={96}
              priority
              className="w-32 sm:w-40 md:w-44 h-auto object-contain brightness-0 invert opacity-95 drop-shadow-[0_2px_14px_rgba(255,255,255,0.18)]"
            />
          </Link>
        </div>

        {/* Waitlist Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] backdrop-blur-xl shadow-sm transition-all mb-3 sm:mb-4">
          <Sparkles className="w-3.5 h-3.5 text-orange-400/90 fill-orange-400/20" />
          <span className="text-[11px] sm:text-xs font-normal tracking-wide text-zinc-300">
            Waitlist
          </span>
        </div>

        {/* Illuminated Focal Headline ('Coming soon!') with thick, blunt, translucent glassmorphic styling */}
        <h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-[-0.035em] leading-[1.08] select-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.82) 55%, rgba(255, 255, 255, 0.65) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "0.5px rgba(255, 255, 255, 0.35)",
            filter:
              "drop-shadow(0 0 35px rgba(255, 255, 255, 0.38)) drop-shadow(0 4px 20px rgba(0, 0, 0, 0.8))",
          }}
        >
          Coming soon!
        </h1>

        {/* Lightweight Frosted Translucent Glass Waitlist Card */}
        <div className="w-full max-w-[500px] mt-6 sm:mt-8 p-6 sm:p-8 rounded-[26px] bg-white/[0.025] hover:bg-white/[0.035] backdrop-blur-2xl border border-white/[0.09] shadow-[0_24px_50px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.14)] relative overflow-hidden text-center transition-all">
          {/* Top Edge Specular Reflection */}
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
            aria-hidden="true"
          />

          <h2 className="text-xl sm:text-2xl font-medium text-white/95 tracking-tight">
            Join our waitlist!
          </h2>

          <p className="mt-2 text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-normal max-w-sm mx-auto">
            Be among the first to experience Mars Wellbeing. Join our waitlist for
            launch updates and early access.
          </p>

          {/* Functional Email Subscription Form */}
          {status === "success" ? (
            <div
              role="alert"
              className="mt-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-sm flex flex-col items-center gap-2 text-center shadow-lg animate-in fade-in zoom-in-95 duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="font-medium text-white">{feedbackMessage}</p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setFeedbackMessage(null);
                }}
                className="mt-1 text-xs text-emerald-300/80 hover:text-emerald-200 underline transition-colors"
              >
                Register another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6 relative">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-black/55 p-1.5 rounded-2xl sm:rounded-full border border-white/[0.12] focus-within:border-white/35 focus-within:ring-2 focus-within:ring-white/10 transition-all shadow-inner">
                <label htmlFor="waitlist-email" className="sr-only">
                  Enter your email
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  disabled={status === "loading"}
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none disabled:opacity-50"
                />

                <button
                  type="submit"
                  disabled={status === "loading" || !email.trim()}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-black font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_28px_rgba(255,255,255,0.5)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none shrink-0"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Joining...</span>
                    </span>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>
              </div>

              {/* Error Feedback */}
              {status === "error" && feedbackMessage && (
                <div
                  role="alert"
                  className="mt-3 flex items-center justify-center gap-1.5 text-xs text-rose-400 animate-in fade-in duration-200"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {/* Privacy Notice */}
              <p className="mt-3.5 text-[11px] text-zinc-500 font-normal">
                We respect your privacy. No spam, ever.{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-zinc-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </p>
            </form>
          )}
        </div>

        {/* Social Links Following Reference Layout (3 Small Rounded-Square Buttons) */}
        <div className="mt-6 flex items-center justify-center gap-2.5">
          {/* X (formerly Twitter) */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Mars Wellbeing on X"
            className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all backdrop-blur-md shadow-sm active:scale-95"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mars Wellbeing on Facebook"
            className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all backdrop-blur-md shadow-sm active:scale-95"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Mars Wellbeing on Instagram"
            className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all backdrop-blur-md shadow-sm active:scale-95"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </main>

      {/* 4. Bottom Oversized Shadow Typography ("Waitlist") & Minimal Footer */}
      <div className="relative z-10 w-full flex flex-col items-center select-none overflow-hidden mt-auto">
        {/* Oversized Luminous Shadow Typography matching Reference ("Waitlist" in Title Case with crisp white edge) */}
        <div
          className="w-full text-center pointer-events-none translate-y-[28%] sm:translate-y-[32%]"
          aria-hidden="true"
        >
          <span
            className="font-heading block text-[21vw] sm:text-[19vw] md:text-[17vw] font-bold tracking-[-0.03em] leading-none select-none whitespace-nowrap"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 42%, rgba(0, 0, 0, 0.35) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1.6px rgba(255, 255, 255, 0.65)",
              filter:
                "drop-shadow(0 -1px 2px rgba(255, 255, 255, 0.45)) drop-shadow(0 0 35px rgba(255, 255, 255, 0.15))",
            }}
          >
            Waitlist
          </span>
        </div>

        {/* Understated Minimal Footer */}
        <footer className="w-full pb-4 sm:pb-5 pt-3 text-center text-xs text-zinc-500 font-normal relative z-20 bg-gradient-to-t from-black via-black/85 to-transparent">
          <div className="flex items-center justify-center gap-2.5 flex-wrap px-4">
            <span>© 2026 Mars Wellbeing · All rights reserved</span>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <Link
              href="/privacy"
              className="hover:text-zinc-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <Link
              href="/terms"
              className="hover:text-zinc-400 transition-colors"
            >
              Terms
            </Link>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <Link
              href="/journal"
              className="hover:text-zinc-400 transition-colors"
            >
              Journal
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
