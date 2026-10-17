"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/nova-hikari", label: "Nova Hikari" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/community", label: "Community" },
  { href: "/professionals", label: "Professionals" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-[#F5F0E7]/95 backdrop-blur-md border-b border-[#E2DDD5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D3033]"
            aria-label="MARS Wellbeing Home"
          >
            <div className="relative h-10 w-36 sm:w-44">
              <Image
                src="/brand/mars-logo.png"
                alt="MARS - Mental Assistance Reassurance System"
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left mix-blend-multiply transition-opacity group-hover:opacity-90"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors py-1 relative",
                    isActive
                      ? "text-[#1D3033] font-semibold"
                      : "text-[#3D5255] hover:text-[#1D3033]"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#7A9A8B]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/early-access"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#273F43] active:scale-[0.99] transition-all border border-[#1D3033]"
            >
              <span>Join Early Access</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#7A9A8B]" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 text-[#1D3033] hover:bg-[#E2DDD5]/50 transition-colors focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E2DDD5] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-3 py-2 text-base font-medium transition-colors border-l-2",
                  pathname === link.href
                    ? "border-[#7A9A8B] text-[#1D3033] font-semibold bg-[#EAF0EC]/40"
                    : "border-transparent text-[#3D5255] hover:text-[#1D3033]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#E2DDD5]/80 flex flex-col gap-2">
              <Link
                href="/early-access"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#273F43] transition-colors"
              >
                Join Early Access
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 px-4 text-xs font-medium text-[#3D5255] hover:text-[#1D3033]"
              >
                Inquiries & Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
