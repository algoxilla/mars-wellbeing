import React from "react";
import Link from "next/link";
import { PhoneCall, ShieldAlert } from "lucide-react";

export function CrisisBar() {
  return (
    <aside
      aria-label="Crisis and Emergency Helplines"
      className="w-full bg-[#1D3033] text-[#F5F0E7] text-xs py-2 px-4 border-b border-[#3D5255] relative z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-3.5 h-3.5 text-[#C26D53] shrink-0" aria-hidden="true" />
          <span className="font-medium text-[#FAF7F2]">
            If you or someone you know is in immediate distress:
          </span>
          <span className="hidden sm:inline text-[#E2DDD5]/80">
            MARS is not an emergency service.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a
            href="tel:14416"
            className="inline-flex items-center gap-1.5 hover:text-[#7A9A8B] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7A9A8B]"
            title="Call Tele-MANAS 24/7 National Mental Health Helpline"
          >
            <PhoneCall className="w-3 h-3 text-[#7A9A8B]" aria-hidden="true" />
            <span>Tele-MANAS: <strong className="text-[#FAF7F2]">14416</strong></span>
          </a>

          <span className="text-[#3D5255] hidden md:inline" aria-hidden="true">|</span>

          <a
            href="tel:18005990019"
            className="inline-flex items-center gap-1 hover:text-[#7A9A8B] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7A9A8B]"
            title="Call KIRAN 24/7 Mental Health Helpline"
          >
            <span>KIRAN: <strong className="text-[#FAF7F2]">1800-599-0019</strong></span>
          </a>

          <span className="text-[#3D5255] hidden lg:inline" aria-hidden="true">|</span>

          <a
            href="tel:112"
            className="inline-flex items-center gap-1 hover:text-[#C26D53] transition-colors font-medium text-[#E8A896]"
            title="National Emergency Number"
          >
            <span>Emergency: 112</span>
          </a>

          <Link
            href="/wellbeing-safety"
            className="underline underline-offset-2 hover:text-[#FAF7F2] text-[#E2DDD5]/90 transition-colors ml-1"
          >
            Safety Protocols →
          </Link>
        </div>
      </div>
    </aside>
  );
}
