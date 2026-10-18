"use client";

import React, { useEffect, useState } from "react";

interface Chapter {
  id: string;
  num: string;
  label: string;
}

const CHAPTERS: Chapter[] = [
  { id: "hero-arrival", num: "01", label: "ARRIVAL" },
  { id: "continuum-of-care", num: "02", label: "CONTINUUM" },
  { id: "nova-hikari", num: "03", label: "NOVA HIKARI" },
  { id: "environmental-responsibility", num: "04", label: "RESPONSIBILITY" },
  { id: "community-circles", num: "05", label: "COMMUNITY" },
  { id: "bengaluru-context", num: "06", label: "SPACES" },
  { id: "clinical-directory", num: "07", label: "DIRECTORY" },
  { id: "journal-preview", num: "08", label: "JOURNAL" },
];

export function CinematicChapterNav() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Show nav only after initial opening has settled
    const checkVisibility = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Hide if near very bottom (in footer)
      if (scrollY > docHeight - 350) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);

      // Determine active section
      const sectionElements = CHAPTERS.map((c) => document.getElementById(c.id));
      const viewportMid = window.innerHeight * 0.45;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid) {
            setActiveIdx(i);
            return;
          }
        }
      }
      setActiveIdx(0);
    };

    window.addEventListener("scroll", checkVisibility, { passive: true });
    // Initial check after short delay for intro
    const t = setTimeout(checkVisibility, 1500);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      clearTimeout(t);
    };
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Story chapter progress"
      className="fixed left-4 sm:left-6 bottom-10 sm:bottom-14 z-30 hidden md:flex flex-col items-center gap-2 transition-opacity duration-700 pointer-events-auto bg-[#102D35]/40 backdrop-blur-xs p-2 rounded-xs border border-[#397F83]/20"
    >
      {/* Chapter Nodes on Continuous Track */}
      <div className="relative flex flex-col items-center py-1">
        {/* Track Line */}
        <div className="absolute top-1 bottom-1 left-1/2 -translate-x-1/2 w-[1px] bg-[#397F83]/30" />

        <div className="flex flex-col gap-2.5 relative z-10">
          {CHAPTERS.map((ch, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => scrollToChapter(ch.id)}
                className="group p-1 focus:outline-none cursor-pointer flex items-center justify-center relative"
                aria-label={`Jump to ${ch.num} ${ch.label}`}
                aria-current={isActive ? "step" : undefined}
                title={`${ch.num} ${ch.label}`}
              >
                {/* Node Diamond */}
                <span
                  className={`w-[7px] h-[7px] rotate-45 transition-all duration-300 border block ${
                    isActive
                      ? "border-[#A8DAD0] bg-[#A8DAD0] shadow-[0_0_8px_rgba(168,218,208,0.9)] scale-125"
                      : "border-[#397F83]/70 bg-[#102D35] group-hover:border-[#A8DAD0]"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Chapter Label Anchored Below Track */}
      <div className="pt-1 border-t border-[#397F83]/30 text-center flex flex-col items-center">
        <span className="font-mono text-[9px] font-bold text-[#A8DAD0] tracking-widest uppercase">
          {CHAPTERS[activeIdx]?.num}
        </span>
        <span className="font-mono text-[8px] text-[#F5EEE3]/70 tracking-[0.2em] uppercase truncate max-w-[70px]">
          {CHAPTERS[activeIdx]?.label}
        </span>
      </div>
    </nav>
  );
}
