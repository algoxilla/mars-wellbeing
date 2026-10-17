import React from "react";
import { Info, Sparkles } from "lucide-react";

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
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-[#4A6E5D] bg-[#EAF1ED] border border-[#B4C8BE] rounded-xs">
        <Sparkles className="w-3 h-3 text-[#6E8E7E]" aria-hidden="true" />
        <span>{featureTitle} — {phase}</span>
      </div>
    );
  }

  return (
    <div
      role="status"
      className="p-4 sm:p-5 bg-[#FAF7F2] border border-[#DCD5C9] flex items-start gap-3.5 my-6 text-xs text-[#3D5255]"
    >
      <Info className="w-4 h-4 text-[#6E8E7E] shrink-0 mt-0.5" aria-hidden="true" />
      <div>
        <p className="font-semibold text-[#1D3033] uppercase tracking-wider text-[11px] mb-0.5">
          {featureTitle} — {phase}
        </p>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
