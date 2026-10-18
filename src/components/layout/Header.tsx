"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoreHorizontal, X, ChevronRight } from "lucide-react";
import { AmbientAudioToggle } from "@/components/ui/AmbientAudioToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is open without layout shifts
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full transition-colors">
      {/* Background with Apple blur separated from root to prevent fixed containing block distortion */}
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.85)] backdrop-blur-md border-b border-[#D2D2D7]/60 pointer-events-none -z-10" />

      <nav
        aria-label="Global"
        className="relative max-w-[1024px] mx-auto px-4 sm:px-6 h-[44px] flex items-center justify-between"
      >
        {/* Left: Brand Mark (Slightly enlarged by 18.75% for legibility while strictly preserving aspect ratio) */}
        <Link
          href="/"
          className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F] rounded"
          aria-label="MARS Wellbeing Home"
        >
          <div className="relative h-[19px] sm:h-[22px] w-[50px] sm:w-[58px] shrink-0">
            <Image
              src="/brand/mars-logo.png"
              alt="MARS - Mental Assistance Reassurance System"
              fill
              priority
              sizes="(max-width: 640px) 50px, 58px"
              className="object-contain object-left transition-opacity group-hover:opacity-80"
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links (Apple Style 12px) */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link
            href="#explore"
            className="px-2.5 py-1 text-[12px] text-[#1D1D1F]/80 hover:text-[#1D1D1F] transition-colors"
          >
            Explore
          </Link>
          <Link
            href="/nova-hikari"
            className="px-2.5 py-1 text-[12px] text-[#1D1D1F]/80 hover:text-[#1D1D1F] transition-colors"
          >
            Nova Hikari
          </Link>
          <Link
            href="/community"
            className="px-2.5 py-1 text-[12px] text-[#1D1D1F]/80 hover:text-[#1D1D1F] transition-colors"
          >
            Community
          </Link>
          <Link
            href="/professionals"
            className="px-2.5 py-1 text-[12px] text-[#1D1D1F]/80 hover:text-[#1D1D1F] transition-colors"
          >
            Clinical Care
          </Link>
          <Link
            href="/about"
            className="px-2.5 py-1 text-[12px] text-[#1D1D1F]/80 hover:text-[#1D1D1F] transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-2.5 py-1 text-[12px] text-[#1D1D1F]/80 hover:text-[#1D1D1F] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Ambient Music Toggle */}
          <AmbientAudioToggle compact={true} />

          <Link
            href="/login"
            className="hidden sm:inline-block text-[12px] text-[#1D1D1F]/80 hover:text-[#1D1D1F] transition-colors"
          >
            Sign In
          </Link>

          <Link
            href="#early-access"
            className="inline-flex items-center justify-center px-3 py-1 text-[12px] font-medium text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all shadow-xs"
          >
            <span>Begin</span>
          </Link>

          {/* Mobile Three-Dot Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-[#1D1D1F] hover:bg-[#F5F5F7] active:bg-[#EBEBED] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]"
            aria-expanded={mobileMenuOpen}
            aria-haspopup="dialog"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            data-testid="mobile-menu-trigger"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-[#1D1D1F]" strokeWidth={2.2} />
            ) : (
              <MoreHorizontal className="w-5 h-5 text-[#1D1D1F]" strokeWidth={2.2} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Floating Navigation Panel & Scrim */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Scrim for outside click dismissal */}
          <div
            className="fixed inset-0 z-40 bg-black/15 backdrop-blur-[2px] md:hidden animate-in fade-in duration-150"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Apple-Style Panel (Occupies upper ~quarter of the mobile screen) */}
          <div
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="absolute top-[calc(100%+8px)] left-3.5 right-3.5 sm:left-auto sm:right-6 sm:w-80 z-50 bg-[#FFFFFF] rounded-2xl border border-[#D2D2D7]/80 shadow-[0_12px_32px_rgba(0,0,0,0.12)] p-3.5 md:hidden animate-in fade-in zoom-in-95 duration-150"
          >
            {/* 1. Ambient Sanctuary Music Row with Live Play/Pause State */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7]/50 mb-2.5">
              <div className="space-y-0.5">
                <p className="text-[13px] font-semibold text-[#1D1D1F] leading-tight">
                  Sanctuary Music
                </p>
                <p className="text-[11px] text-[#6E6E73] leading-tight">
                  Atmospheric ambient audio
                </p>
              </div>
              <AmbientAudioToggle showText={true} />
            </div>

            <div className="h-[1px] bg-[#D2D2D7]/50 mb-1.5" />

            {/* 2. Primary Navigation Links (Community, About, Contact) with Generous Tap Targets */}
            <nav className="flex flex-col space-y-0.5" aria-label="Mobile Navigation Links">
              <Link
                href="/community"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-[15px] font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] active:bg-[#EBEBED] transition-colors"
              >
                <span>Community</span>
                <ChevronRight className="w-4 h-4 text-[#86868B]" />
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-[15px] font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] active:bg-[#EBEBED] transition-colors"
              >
                <span>About</span>
                <ChevronRight className="w-4 h-4 text-[#86868B]" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-[15px] font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] active:bg-[#EBEBED] transition-colors"
              >
                <span>Contact</span>
                <ChevronRight className="w-4 h-4 text-[#86868B]" />
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
