"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Phone, X, Compass, ArrowRight } from "lucide-react";

export function WelcomeModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Routes where the modal should NEVER appear
  const isExcludedRoute =
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/forgot-password") ||
    pathname.startsWith("/reset-password") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/dashboard");

  const dismissModal = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("mars_welcome_dismissed", "true");
    } catch (_) {}
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isExcludedRoute) return;

    try {
      const alreadyDismissed = sessionStorage.getItem("mars_welcome_dismissed");
      if (alreadyDismissed === "true") return;
    } catch (_) {}

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, prefersReducedMotion ? 600 : 2000);

    return () => clearTimeout(timer);
  }, [isExcludedRoute]);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismissModal();
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, dismissModal]);

  if (!isOpen || isExcludedRoute) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1D1D1F]/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismissModal();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-modal-heading"
        aria-describedby="welcome-modal-description"
        className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#D2D2D7] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#1D1D1F] space-y-6 animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={dismissModal}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]"
          aria-label="Close message"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1D1D1F] bg-[#F5F5F7] rounded-full border border-[#D2D2D7]/50">
            <Compass className="w-3.5 h-3.5" />
            <span>Finding Your Starting Point</span>
          </span>
        </div>

        {/* Heading & Supporting Copy */}
        <div className="space-y-2">
          <h2
            id="welcome-modal-heading"
            className="font-sans text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight leading-snug"
          >
            Not sure where to start?
          </h2>
          <p
            id="welcome-modal-description"
            className="text-sm text-[#6E6E73] leading-relaxed font-normal"
          >
            You don’t have to figure everything out alone. Tell us a little about what you’re looking for, and our team can help you explore a suitable next step.
          </p>
        </div>

        {/* Helpful Pathway Options */}
        <div className="space-y-2 pt-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6E6E73] block">
            What brings you to MARS today?
          </span>
          <div className="grid grid-cols-1 gap-2 text-xs">
            {[
              { id: "practice", label: "Self-guided quiet practice (Nova Hikari)" },
              { id: "community", label: "Small-group community circles in Bengaluru" },
              { id: "clinical", label: "Consulting a qualified mental health clinician" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedInterest(item.id)}
                className={`text-left px-4 py-3 rounded-xl border text-xs font-medium transition-all ${
                  selectedInterest === item.id
                    ? "bg-[#1D1D1F] text-[#FFFFFF] border-[#1D1D1F]"
                    : "bg-[#F5F5F7] text-[#1D1D1F] border-[#D2D2D7] hover:border-[#1D1D1F]/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Direct Team Phone Callout */}
        <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1D1D1F] text-[#FFFFFF] flex items-center justify-center shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="font-semibold text-[#1D1D1F]">MARS Team Guidance Line</p>
              <p className="text-[#6E6E73] font-mono text-[11px]">+91 90062 19668</p>
            </div>
          </div>
          <a
            href="tel:+919006219668"
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#1D1D1F] text-[#FFFFFF] hover:bg-[#6E6E73] transition-colors whitespace-nowrap shrink-0"
          >
            Call Now
          </a>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="tel:+919006219668"
            onClick={dismissModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] rounded-full shadow-xs active:scale-[0.98] transition-all cursor-pointer text-center"
          >
            <span>Talk to the MARS Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={dismissModal}
            className="w-full sm:w-auto px-5 py-3 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors cursor-pointer text-center"
          >
            Explore MARS →
          </button>
        </div>
      </div>
    </div>
  );
}
