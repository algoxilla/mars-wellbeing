import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, HeartHandshake } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1D3033] text-[#F5F0E7] border-t border-[#3D5255] pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3D5255]">
          {/* Column 1: Brand & Origin */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-10 w-44 brightness-150 contrast-125">
              <Image
                src="/brand/mars-logo.png"
                alt="MARS - Mental Assistance Reassurance System"
                fill
                sizes="176px"
                className="object-contain object-left bg-transparent"
              />
            </div>
            <p className="text-sm text-[#E2DDD5]/85 leading-relaxed max-w-sm">
              Creating spaces for people to pause, reconnect, and access thoughtful human support. Initialized with care for individuals and organizations in Bengaluru, India.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#7A9A8B]">
              <span className="w-2 h-2 rounded-full bg-[#7A9A8B] animate-pulse" />
              <span>Validating early individual demand & community cohorts</span>
            </div>
          </div>

          {/* Column 2: Experiences */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#7A9A8B]">Experiences</p>
            <ul className="space-y-2 text-sm text-[#E2DDD5]/80">
              <li>
                <Link href="/nova-hikari" className="hover:text-[#FAF7F2] transition-colors">
                  Nova Hikari (10 Stages)
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#FAF7F2] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-[#FAF7F2] transition-colors">
                  Bengaluru Circles
                </Link>
              </li>
              <li>
                <Link href="/professionals" className="hover:text-[#FAF7F2] transition-colors">
                  Directory of Professionals
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#FAF7F2] transition-colors">
                  Wellbeing Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Collaboration */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#7A9A8B]">Organization</p>
            <ul className="space-y-2 text-sm text-[#E2DDD5]/80">
              <li>
                <Link href="/about" className="hover:text-[#FAF7F2] transition-colors">
                  About MARS
                </Link>
              </li>
              <li>
                <Link href="/founders" className="hover:text-[#FAF7F2] transition-colors">
                  Founders’ Note
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-[#FAF7F2] transition-colors">
                  Corporate & Teams
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-[#FAF7F2] transition-colors">
                  Institutional Partners
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-[#FAF7F2] transition-colors flex items-center gap-1">
                  <span>Applications</span>
                  <ArrowUpRight className="w-3 h-3 text-[#7A9A8B]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Safety */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#7A9A8B]">Trust & Ethics</p>
            <ul className="space-y-2 text-sm text-[#E2DDD5]/80">
              <li>
                <Link href="/wellbeing-safety" className="hover:text-[#FAF7F2] transition-colors text-[#E8A896]">
                  Wellbeing & Safety
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#FAF7F2] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#FAF7F2] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#FAF7F2] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FAF7F2] transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical Disclaimer & Partnership Statement */}
        <div className="py-6 border-b border-[#3D5255] space-y-3 text-xs text-[#E2DDD5]/75">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#C26D53] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#FAF7F2]">Clinical & Emergency Boundaries:</strong> MARS Wellbeing is not a hospital, psychiatric facility, or crisis intervention service. Self-guided journeys and community circles are designed for personal grounding and psychological wellbeing, not psychiatric treatment. If you are experiencing acute psychological crisis, suicidal thoughts, or medical emergency, please call <strong>Tele-MANAS (14416)</strong> or <strong>112</strong> immediately.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <HeartHandshake className="w-4 h-4 text-[#7A9A8B] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#FAF7F2]">Institutional Disclosure:</strong> Institutional partnership information will be announced following formal confirmation. Demonstration profiles and mock scheduling workflows are strictly simulated in this development preview.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E2DDD5]/60">
          <p>© 2026 MARS Wellbeing. All rights reserved. Operating on marswellbeing.in.</p>
          <div className="flex items-center gap-4">
            <span>Bengaluru, Karnataka, India</span>
            <span>•</span>
            <span className="text-[#7A9A8B]">Development Build (Phase 1)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
