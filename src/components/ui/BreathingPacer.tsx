"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Wind } from "lucide-react";

export function BreathingPacer() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [breathPhase, setBreathPhase] = useState<"Inhale" | "Exhale">("Inhale");

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setBreathPhase((prev) => (prev === "Inhale" ? "Exhale" : "Inhale"));
    }, 4000);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="bg-[#FAF7F2] p-8 sm:p-10 border border-[#E2DDD5] flex flex-col items-center text-center relative overflow-hidden">
      {/* Background radial ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,142,126,0.12)_0%,transparent_70%)] pointer-events-none"
      />

      <div className="flex items-center gap-2 mb-6">
        <Wind className="w-4 h-4 text-[#6E8E7E]" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-wider uppercase text-[#6E8E7E]">
          Somatic Grounding Pacer
        </span>
      </div>

      {/* Pulsing Breathing Circle */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center my-4">
        {/* Outer subtle ripple */}
        <div
          className={`absolute inset-0 rounded-full border border-[#6E8E7E]/30 transition-all duration-1000 ${
            isActive && breathPhase === "Inhale"
              ? "scale-105 opacity-80 bg-[#EAF1ED]/40"
              : "scale-95 opacity-30 bg-transparent"
          }`}
        />

        {/* Core animated orb */}
        <div
          className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center transition-all duration-[4000ms] ease-in-out shadow-xs ${
            isActive && breathPhase === "Inhale"
              ? "scale-110 bg-[#6E8E7E] text-[#F5F0E7]"
              : "scale-90 bg-[#D8E4DD] text-[#1D3033]"
          }`}
        >
          <span className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider">
            {isActive ? breathPhase : "Paused"}
          </span>
          <span className="text-[10px] tracking-widest uppercase opacity-80 mt-0.5">
            {isActive ? (breathPhase === "Inhale" ? "4 seconds" : "4 seconds") : "Click to resume"}
          </span>
        </div>
      </div>

      <p className="text-xs text-[#3D5255] max-w-xs mt-3 leading-relaxed">
        Stage 02 of Nova Hikari begins with gentle nervous system regulation. Pause for four cycles to settle chronic cognitive fatigue.
      </p>

      {/* Toggle button */}
      <div className="mt-5">
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1D3033] bg-[#F5F0E7] hover:bg-[#EAE3D6] border border-[#E2DDD5] rounded-xs transition-colors"
          aria-label={isActive ? "Pause breathing pacer" : "Resume breathing pacer"}
        >
          {isActive ? (
            <>
              <Pause className="w-3 h-3 text-[#6E8E7E]" />
              <span>Pause rhythm</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-[#6E8E7E]" />
              <span>Resume rhythm</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
