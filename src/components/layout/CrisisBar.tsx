import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CrisisBar() {
  return (
    <aside
      aria-label="Clinical Partnership & Emergency Protocols"
      className="w-full bg-[#F5F5F7] text-[#1D1D1F] text-[12px] py-2 px-4 border-b border-[#D2D2D7]/50 relative z-50 text-center font-normal"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span>In clinical affiliation with</span>
        <a
          href="https://hcmhospital.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline inline-flex items-center gap-0.5 text-[#1D1D1F]"
        >
          <span>Highland Care Pvt. Ltd.</span>
          <ArrowUpRight className="w-3 h-3 text-[#6E6E73]" />
        </a>
        <span className="text-[#86868B] hidden sm:inline" aria-hidden="true">•</span>
        <span className="text-[#6E6E73]">24/7 Helpline:</span>
        <a href="tel:14416" className="font-semibold text-[#1D1D1F] hover:underline">
          Tele-MANAS 14416
        </a>
        <span className="text-[#86868B] hidden md:inline" aria-hidden="true">|</span>
        <a href="tel:112" className="text-[#6E6E73] hover:text-[#1D1D1F] hidden md:inline">
          National: 112
        </a>
        <span className="text-[#86868B] hidden lg:inline" aria-hidden="true">•</span>
        <Link
          href="/wellbeing-safety"
          className="text-[#6E6E73] hover:text-[#1D1D1F] hover:underline hidden lg:inline"
        >
          Safety Protocols &gt;
        </Link>
      </div>
    </aside>
  );
}
