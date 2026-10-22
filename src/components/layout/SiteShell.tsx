"use client";

import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
import { CrisisBar } from "@/components/layout/CrisisBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";
import { WelcomeModal } from "@/components/ui/WelcomeModal";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isComingSoon = pathname === "/";

  if (isComingSoon) {
    return <main className="flex-1 flex flex-col">{children}</main>;
  }

  return (
    <>
      <CrisisBar />
      <Suspense
        fallback={
          <div className="h-[44px] bg-[#FFFFFF]/85 border-b border-[#D2D2D7]/60" />
        }
      >
        <Header />
      </Suspense>
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
      <ScrollToTopButton />
      <WelcomeModal />
    </>
  );
}
