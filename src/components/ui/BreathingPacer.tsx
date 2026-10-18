"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Wind } from "lucide-react";
import { useAmbientAudio } from "@/context/AmbientAudioContext";

export function BreathingPacer() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [breathPhase, setBreathPhase] = useState<"Inhale" | "Exhale">("Inhale");
  const { duckAudio } = useAmbientAudio();

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setBreathPhase((prev) => (prev === "Inhale" ? "Exhale" : "Inhale"));
    }, 4000);
    return () => clearInterval(interval);
  }, [isActive]);

  // Coordinate ambient audio: gently duck volume during active breathing exercises
  useEffect(() => {
    if (isActive) {
      duckAudio(true);
    } else {
      duckAudio(false);
    }
    return () => {
      duckAudio(false);
    };
  }, [isActive, duckAudio]);

  return (
    <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D2D2D7]/70 flex flex-col items-center text-center relative overflow-hidden shadow-xs">
      <div className="flex items-center gap-2 mb-4">
        <Wind className="w-4 h-4 text-[#D96C68]" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-wider uppercase text-[#6E6E73]">
          Somatic Grounding Pacer
        </span>
      </div>

      {/* Pulsing Breathing Circle */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center my-3">
        {/* Outer subtle ripple */}
        <div
          className={`absolute inset-0 rounded-full border border-[#D96C68]/30 transition-all duration-1000 ${
            isActive && breathPhase === "Inhale"
              ? "scale-105 opacity-60 bg-[#D96C68]/10"
              : "scale-95 opacity-20 bg-transparent"
          }`}
        />

        {/* Core animated orb */}
        <div
          className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center transition-all duration-[4000ms] ease-in-out shadow-sm ${
            isActive && breathPhase === "Inhale"
              ? "scale-110 bg-[#1D1D1F] text-[#FFFFFF] border border-[#1D1D1F]"
              : "scale-90 bg-[#F5F5F7] text-[#1D1D1F] border border-[#D2D2D7]"
          }`}
        >
          <span className="font-sans text-xl sm:text-2xl font-semibold tracking-tight">
            {isActive ? breathPhase : "Paused"}
          </span>
          <span className="text-[10px] tracking-widest uppercase opacity-70 mt-0.5">
            {isActive ? (breathPhase === "Inhale" ? "4 seconds" : "4 seconds") : "Tap to resume"}
          </span>
        </div>
      </div>

      <p className="text-xs text-[#6E6E73] max-w-xs mt-2 leading-relaxed">
        Somatic pacing activates vagal parasympathetic tone. Breathe in unison with the circle for four cycles.
      </p>

      {/* Toggle button */}
      <div className="mt-4">
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-[#1D1D1F] bg-[#F5F5F7] hover:bg-[#FFFFFF] border border-[#D2D2D7] rounded-full transition-colors cursor-pointer"
          aria-label={isActive ? "Pause breathing pacer" : "Resume breathing pacer"}
        >
          {isActive ? (
            <>
              <Pause className="w-3 h-3 text-[#D96C68]" />
              <span>Pause rhythm</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-[#D96C68]" />
              <span>Resume rhythm</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
