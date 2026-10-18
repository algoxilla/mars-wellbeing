import React from "react";
import { Info } from "lucide-react";

interface DevelopmentNoticeProps {
  phase?: string;
  featureTitle?: string;
  description?: string;
  compact?: boolean;
}

export function DevelopmentNotice({
  phase = "Phase 1 Preview",
  featureTitle = "Development Scaffold",
  description = "This page provides a visual and architectural preview. Live backend data, booking schedules, and account authentication will be activated in subsequent phases.",
  compact = false,
}: DevelopmentNoticeProps) {
  if (compact) {
    return (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-[#1D1D1F] bg-[#F5F5F7] border border-[#D2D2D7] rounded-full">
        <Info className="w-3 h-3 text-[#D96C68]" aria-hidden="true" />
        <span>{featureTitle} — {phase}</span>
      </div>
    );
  }

  return (
    <div
      role="status"
      className="p-4 sm:p-5 bg-[#F5F5F7] border border-[#D2D2D7] rounded-2xl flex items-start gap-3.5 my-6 text-xs text-[#6E6E73]"
    >
      <Info className="w-4 h-4 text-[#D96C68] shrink-0 mt-0.5" aria-hidden="true" />
      <div>
        <p className="font-semibold text-[#1D1D1F] text-[11px] mb-0.5">
          {featureTitle} — {phase}
        </p>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
