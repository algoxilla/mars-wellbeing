"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      id="scroll-top"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to top"
      className="fixed bottom-6 right-6 z-40 p-3 bg-[#FAF7F2]/95 hover:bg-[#FAF7F2] text-[#1D3033] border border-[#E2DDD5] shadow-md hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E8E7E] active:scale-95 cursor-pointer backdrop-blur-xs flex items-center justify-center group"
    >
      <ArrowUp className="w-4 h-4 text-[#3D5255] group-hover:text-[#1D3033] group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
}
