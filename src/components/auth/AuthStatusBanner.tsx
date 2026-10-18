import React from "react";
import { AlertTriangle, KeyRound } from "lucide-react";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export function AuthStatusBanner() {
  const configured = isSupabaseConfigured();

  if (configured) return null;

  return (
    <div className="mb-6 p-4 rounded-2xl bg-[#F5F5F7] border border-[#D2D2D7] text-left text-xs text-[#6E6E73] shadow-xs">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-[#D96C68] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-[#1D1D1F] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <KeyRound className="w-3.5 h-3.5" />
            Supabase Configuration Notice
          </p>
          <p className="leading-relaxed">
            Live authentication requires active Supabase credentials in <code className="px-1.5 py-0.5 bg-[#FFFFFF] border border-[#D2D2D7] rounded text-[#1D1D1F] font-mono">.env.local</code>.
          </p>
          <p className="text-[11px] text-[#6E6E73] pt-0.5">
            See <span className="font-mono font-semibold text-[#1D1D1F]">supabase/schema.sql</span> for table schema & RLS setup instructions.
          </p>
        </div>
      </div>
    </div>
  );
}
