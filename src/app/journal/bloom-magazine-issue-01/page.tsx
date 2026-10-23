import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  Share2,
  Calendar,
  Clock,
  Sparkles,
  Heart,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Leaf,
  Activity,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLOOM Magazine • Issue 01: Women's Health & Prevention | MARS Journal",
  description:
    "Digital edition and newsletter of BLOOM Magazine Issue 01 by Highland Care Multispecialty Hospital. Clinical guidance on menstrual literacy, PCOS, preventative screenings, and metabolic health.",
  alternates: {
    canonical: "/journal/bloom-magazine-issue-01",
  },
  openGraph: {
    title: "BLOOM Magazine • Issue 01: Women's Health & Prevention",
    description:
      "Digital edition and newsletter of BLOOM Magazine Issue 01 by Highland Care Multispecialty Hospital. Authored by Dr. Uzma Dixit.",
    url: "https://www.marswellbeing.xyz/journal/bloom-magazine-issue-01",
    siteName: "MARS Wellbeing",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "/images/bloom-magazine-issue-01.jpg",
        width: 1200,
        height: 630,
        alt: "BLOOM Magazine Issue 01 Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLOOM Magazine • Issue 01: Women's Health & Prevention",
    description:
      "Official health publication by Highland Care Hospital and MARS Wellbeing.",
    images: ["/images/bloom-magazine-issue-01.jpg"],
  },
};

const bloomJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "MARS Wellbeing",
          item: "https://www.marswellbeing.xyz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Journal",
          item: "https://www.marswellbeing.xyz/journal",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BLOOM Magazine Issue 01",
          item: "https://www.marswellbeing.xyz/journal/bloom-magazine-issue-01",
        },
      ],
    },
    {
      "@type": "Article",
      "@id": "https://www.marswellbeing.xyz/journal/bloom-magazine-issue-01#article",
      headline: "BLOOM Magazine — Issue 01: Women's Health, Prevention & Somatic Balance",
      description:
        "The inaugural health newsletter and clinical publication from Highland Care Multispecialty Hospital, examining adolescent cycle literacy, PCOS, preventative screenings, and metabolic health after 35.",
      image: "https://www.marswellbeing.xyz/images/bloom-magazine-issue-01.jpg",
      datePublished: "2026-09-01",
      dateModified: "2026-10-24",
      author: {
        "@type": "Person",
        name: "Dr. Uzma Dixit",
        jobTitle: "Family Physician & Women's Health Consultant",
        affiliation: {
          "@type": "MedicalOrganization",
          name: "Highland Care Multispeciality Hospital",
          url: "https://hcmhospital.com/",
        },
      },
      publisher: {
        "@type": "Organization",
        name: "Highland Care Private Limited & MARS Wellbeing",
        url: "https://hcmhospital.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.marswellbeing.xyz/brand/highland-care-logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.marswellbeing.xyz/journal/bloom-magazine-issue-01",
      },
    },
  ],
};

export default function BloomMagazineIssue01Page() {
  return (
    <article className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bloomJsonLd) }}
      />
      {/* 1. Header Navigation Bar */}
      <div className="sticky top-14 z-20 bg-[rgba(255,255,255,0.85)] backdrop-blur-md border-b border-[#D2D2D7]/50 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="https://hcmhospital.com/wp-content/uploads/2026/09/BLOOM_Issue01_Highland_Health_Revised-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D1D1F] text-[#FFFFFF] text-xs font-medium hover:bg-[#2D2D2F] transition-colors shadow-xs"
            >
              <Download className="w-3 h-3" />
              <span>Original PDF (24MB)</span>
            </a>
            <a
              href="https://hcmhospital.com/blogs-magazines/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#6E6E73] hover:text-[#1D1D1F] transition-colors px-2 py-1"
            >
              <span>HCM Archive</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Hero Header Showcase */}
      <header className="pt-12 sm:pt-20 pb-12 sm:pb-16 bg-[#F5F5F7] border-b border-[#D2D2D7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#D2D2D7]/80 text-[11px] font-semibold uppercase tracking-wider text-[#D96C68] mb-6 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#D96C68]" />
            <span>Official Publication • Highland Care Hospital</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.1] text-balance">
            BLOOM Magazine — Issue 01: Women’s Health, Prevention &amp; Somatic Balance
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed text-balance">
            The complete newsletter and digital edition extracted from Highland Care Multispecialty Hospital’s inaugural health magazine—examining adolescent cycle literacy, PCOS, cancer prevention, and metabolic vitality after 35.
          </p>

          <div className="mt-8 pt-6 border-t border-[#D2D2D7]/60 flex flex-wrap items-center justify-between gap-4 text-xs text-[#6E6E73]">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-[#E5E5EA] relative shrink-0 border-2 border-[#D2D2D7] shadow-sm">
                <Image
                  src="/images/dr-uzma-dixit-avatar.jpg"
                  alt="Dr. Uzma Dixit - Consultant Gynaecologist & Women's Health Specialist"
                  fill
                  priority
                  sizes="56px"
                  className="object-cover object-center"
                />
              </div>
              <div>
                <p className="font-semibold text-[#1D1D1F] text-sm">Dr. Uzma Dixit</p>
                <p className="text-xs text-[#6E6E73]">Consultant Gynaecologist &amp; Women&apos;s Health Specialist • Highland Care</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#86868B]" />
                <span>Issue No. 01 • September 2026</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#86868B]" />
                <span>12 min reading edition</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Article Content Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        {/* Cover Feature Card */}
        <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0F172A] border border-[#D2D2D7]/80 shadow-md">
          <Image
            src="/images/bloom-magazine-issue-01.jpg"
            alt="BLOOM Magazine Issue 01: Women's Health & Somatic Balance by Dr. Uzma Dixit"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-center"
          />
        </div>

        {/* Chapter 1: Editor's Note */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D96C68]">
            <span>Editor&apos;s Note</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F]">
            Welcome to BLOOM: A Letter from our Medical Director
          </h2>

          <div className="prose prose-neutral max-w-none text-base sm:text-lg text-[#3A3A3C] leading-relaxed space-y-5">
            <p className="text-xl font-medium text-[#1D1D1F] leading-snug">
              Every day at Highland Care Multispecialty Hospital, I meet women and girls who tell me the same thing in different words: <em>“I wish someone had explained this to me sooner.”</em>
            </p>

            <p>
              A teenager confused about her first period. A young woman told that her irregular cycles are “normal for her,” without ever being screened for PCOS. A mother who postpones her own mammogram because she is busy scheduling everyone else’s appointments. A woman in her forties surprised to learn that heart disease, not cancer, is the leading cause of death among women worldwide.
            </p>

            <p>
              BLOOM exists to close the gap between what women deserve to know and what too often reaches them only after a crisis. This first issue brings together the five pillars of our Women’s Health Awareness &amp; Prevention Initiative: adolescent menstrual health; PCOS and hormonal wellbeing; HPV vaccination and cervical cancer prevention; breast health and early detection; and metabolic health for women over 35.
            </p>

            {/* Editorial Quote Callout */}
            <blockquote className="my-8 p-6 sm:p-8 rounded-2xl bg-[#F5F5F7] border-l-4 border-[#D96C68] not-italic">
              <p className="text-lg sm:text-xl font-medium text-[#1D1D1F] leading-relaxed">
                “Prevention is not a one-time appointment. It is a habit we build together, one informed choice at a time.”
              </p>
              <footer className="mt-3 text-sm text-[#6E6E73] font-normal">
                — Dr. Uzma Dixit, Consultant Gynaecologist &amp; Medical Director, Highland Care
              </footer>
            </blockquote>

            <p>
              Nothing in these pages replaces a consultation with your own doctor. What it can do is give you the language, the confidence, and the checklist to ask better questions the next time you sit across from one—including me.
            </p>
          </div>
        </section>

        {/* Visual Break 1: Dr. Uzma Dixit Consultation Portrait */}
        <div className="space-y-3 my-8">
          <div className="relative aspect-[3/4] max-w-sm sm:max-w-md mx-auto rounded-2xl overflow-hidden bg-[#F5F5F7] border border-[#D2D2D7]/80 shadow-md">
            <Image
              src="/images/dr-uzma-dixit-portrait.jpg"
              alt="Dr. Uzma Dixit, Consultant Gynaecologist & Women's Health Specialist at Highland Care Multispecialty Hospital"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 448px"
              className="object-cover object-center"
            />
          </div>
          <p className="text-xs text-[#6E6E73] text-center font-medium max-w-md mx-auto">
            Dr. Uzma Dixit, Consultant Gynaecologist &amp; Women&apos;s Health Specialist at Highland Care Multispecialty Hospital.
          </p>
        </div>

        {/* Chapter 2: Lifetime Health Checkpoints */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D96C68]">
            <span>Clinical Reference</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
            By the Numbers: Five Checkpoints Every Woman Should Know
          </h2>

          <p className="text-base text-[#6E6E73] leading-relaxed">
            Think of these milestones as a healthcare roadmap across a lifetime. While symptoms, family history, and physician guidance personalize your timeline, these five checkpoints are fundamental starting points:
          </p>

          <div className="grid grid-cols-1 gap-3 pt-2">
            {[
              {
                age: "Ages 9–14",
                title: "HPV Vaccination Window",
                desc: "The HPV vaccination window opens; receiving the vaccine before exposure provides the highest clinical protection against cervical cancer.",
              },
              {
                age: "Every Cycle",
                title: "Cycle & Pain Tracking",
                desc: "Track cycle length, flow volume, and cramp severity. Consistent patterns provide vital diagnostics for endocrinologists and gynecologists.",
              },
              {
                age: "From Early 20s",
                title: "Cervical Screening Rhythms",
                desc: "Routine Pap smears and HPV co-testing begin per your physician’s guidance to detect cellular changes long before they advance.",
              },
              {
                age: "From Your 20s",
                title: "Breast Self-Awareness",
                desc: "Monthly self-checks to establish baseline familiarity, paired with clinical breast examinations during regular annual medical visits.",
              },
              {
                age: "Age 35+",
                title: "Metabolic Risk Screenings",
                desc: "Annual blood pressure, fasting glucose, HbA1c, and lipid profiling, as cardiovascular and metabolic risk increases with chronological age.",
              },
            ].map((check, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7]/70 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
              >
                <span className="font-mono text-xs font-bold text-[#D96C68] shrink-0 sm:w-28">
                  {check.age}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-[#1D1D1F]">{check.title}</h4>
                  <p className="text-xs sm:text-sm text-[#6E6E73] mt-0.5 leading-relaxed">
                    {check.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Break 2: Family & Adolescent Support */}
        <div className="space-y-2">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#F5F5F7] border border-[#D2D2D7]/60 shadow-xs">
            <Image
              src="/images/bloom-family-support.jpg"
              alt="Supportive family conversation about adolescent health"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-center"
            />
          </div>
          <p className="text-xs text-[#86868B] text-center italic">
            Adolescent cycle conversations land best when shared calmly with trusted family and educators.
          </p>
        </div>

        {/* Chapter 3: Menstrual Literacy & Myth Busting */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D96C68]">
            <span>Part One • Menstrual Health</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
            Understanding Your Cycle &amp; Busting Period Myths
          </h2>

          <div className="text-base sm:text-lg text-[#3A3A3C] leading-relaxed space-y-4">
            <p>
              For most girls, menarche arrives between ages 10 and 15, marking the onset of a monthly hormonal rhythm that continues for decades. A typical menstrual cycle encompasses four distinct biological phases:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-base text-[#1D1D1F]">
              <li>
                <strong>Menstrual Phase (Days 1–5):</strong> The shedding of the endometrial uterine lining.
              </li>
              <li>
                <strong>Follicular Phase (Days 1–13):</strong> Estrogen rises as ovarian follicles mature in preparation for ovulation.
              </li>
              <li>
                <strong>Ovulation (Around Day 14):</strong> The release of a mature ovum into the fallopian tube—the fertile window.
              </li>
              <li>
                <strong>Luteal Phase (Days 15–28):</strong> Progesterone elevates to support potential implantation; if fertilization does not occur, hormone levels recede to restart the cycle.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1D1D1F] pt-4">
              Debunking Common Period Misconceptions
            </h3>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D2D2D7]">
                <p className="text-xs font-bold uppercase text-[#D96C68]">Myth vs. Fact: Severe Pain</p>
                <p className="text-sm text-[#1D1D1F] mt-1">
                  <strong>Myth:</strong> Debilitating pain is just something women have to endure.
                </p>
                <p className="text-xs sm:text-sm text-[#6E6E73] mt-1">
                  <strong>Fact:</strong> Mild cramping is normal, but cramps severe enough to disrupt school, work, or sleep can signal underlying conditions like endometriosis or adenomyosis and warrant medical evaluation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D2D2D7]">
                <p className="text-xs font-bold uppercase text-[#D96C68]">Myth vs. Fact: Exercise Restrictions</p>
                <p className="text-sm text-[#1D1D1F] mt-1">
                  <strong>Myth:</strong> Physical activity, swimming, or washing hair must be avoided.
                </p>
                <p className="text-xs sm:text-sm text-[#6E6E73] mt-1">
                  <strong>Fact:</strong> There is zero medical reason to restrict normal hygiene or movement. Light aerobic exercise releases endorphins that naturally alleviate cramping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Break 3: Mindful Somatic Equilibrium */}
        <div className="space-y-2">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#F5F5F7] border border-[#D2D2D7]/60 shadow-xs">
            <Image
              src="/images/bloom-mindful-wellness.jpg"
              alt="Mindful morning meditation and somatic breathing"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-center"
            />
          </div>
          <p className="text-xs text-[#86868B] text-center italic">
            Restoring autonomic nervous system balance through daily somatic grounding.
          </p>
        </div>

        {/* Chapter 4: PCOS & Hormonal Balance */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D96C68]">
            <span>Part Two • Endocrine Health</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
            PCOS Explained: Demystifying the Follicles
          </h2>

          <div className="text-base sm:text-lg text-[#3A3A3C] leading-relaxed space-y-4">
            <p>
              Polycystic ovary syndrome (PCOS) is one of the most common endocrine conditions in women of reproductive age. Clinically, diagnosis follows the Rotterdam criteria, requiring at least two of three markers: irregular or absent ovulation, clinical or biochemical androgen excess, and polycystic ovarian morphology on ultrasound.
            </p>

            <div className="p-5 rounded-2xl bg-[#F5F5F7] border border-[#D2D2D7]/80 space-y-2">
              <h4 className="text-sm font-bold text-[#1D1D1F] uppercase tracking-wider">
                What Those “Cysts” Actually Are
              </h4>
              <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                The name is over a century old and misleading. The structures seen on an ultrasound are not pathological cysts; they are small, immature follicles that paused before releasing an egg. A diagnosis should never be made or dismissed solely on the basis of an ultrasound image.
              </p>
            </div>

            <p>
              At the physiological heart of PCOS is frequently <strong>insulin resistance</strong>. When cells respond sluggishly to insulin, the pancreas produces more, which stimulates ovarian theca cells to synthesize excess testosterone. Lifestyle medicine—prioritizing whole-food nutrition, resistance training, sleep quality, and stress downshifting—is the cornerstone of lifelong management.
            </p>
          </div>
        </section>

        {/* Visual Break 4: Nutrition & The Buddha Bowl */}
        <div className="space-y-2">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#F5F5F7] border border-[#D2D2D7]/60 shadow-xs">
            <Image
              src="/images/bloom-nutrition-bowl.jpg"
              alt="Hormone-friendly Buddha bowl with greens, seeds, and protein"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-center"
            />
          </div>
          <p className="text-xs text-[#86868B] text-center italic">
            The Hormone-Friendly Buddha Bowl: balanced fiber, clean protein, and healthy fats (Page 42 of BLOOM Issue 01).
          </p>
        </div>

        {/* Chapter 5: Practical Nutrition Card */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D96C68]">
            <span>Practical Toolkit • Nutrition</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
            The Hormone-Friendly Plate
          </h2>

          <p className="text-base text-[#6E6E73] leading-relaxed">
            Stabilizing blood sugar is the most effective daily intervention for hormonal balance. Build your meals with three foundational pillars:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7]">
              <span className="text-xs font-bold text-[#D96C68] uppercase">1. Fiber First</span>
              <h4 className="text-sm font-semibold text-[#1D1D1F] mt-1">Cruciferous &amp; Leafy Greens</h4>
              <p className="text-xs text-[#6E6E73] mt-1 leading-relaxed">
                Broccoli, spinach, and chia seeds slow glucose absorption and assist the liver in clearing metabolised estrogens.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7]">
              <span className="text-xs font-bold text-[#D96C68] uppercase">2. Clean Protein</span>
              <h4 className="text-sm font-semibold text-[#1D1D1F] mt-1">Lentils, Eggs, Tofu &amp; Fish</h4>
              <p className="text-xs text-[#6E6E73] mt-1 leading-relaxed">
                Adequate amino acids sustain satiety, stabilize daytime ghrelin, and preserve lean muscle mass.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7]">
              <span className="text-xs font-bold text-[#D96C68] uppercase">3. Essential Fats</span>
              <h4 className="text-sm font-semibold text-[#1D1D1F] mt-1">Avocados, Walnuts &amp; Seeds</h4>
              <p className="text-xs text-[#6E6E73] mt-1 leading-relaxed">
                Omega-3 fatty acids blunt systemic inflammation and supply essential lipids for cellular hormone synthesis.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 6: Closing Action & Hospital Affiliation */}
        <section className="pt-8 border-t border-[#D2D2D7] space-y-6">
          <div className="bg-[#F5F5F7] rounded-2xl p-6 sm:p-8 border border-[#D2D2D7]/80 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#D2D2D7] mx-auto flex items-center justify-center text-[#D96C68] shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F]">
              Consult Highland Care Multispecialty Hospital
            </h3>

            <p className="text-xs sm:text-sm text-[#6E6E73] max-w-lg mx-auto leading-relaxed">
              Healthcare partnerships, clinical oversight, and physician evaluations are provided in collaboration with Highland Care Private Limited.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://hcmhospital.com/wp-content/uploads/2026/09/BLOOM_Issue01_Highland_Health_Revised-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#D96C68] text-[#FFFFFF] text-xs font-semibold hover:bg-[#C65A57] transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Full Magazine (24MB PDF)</span>
              </a>

              <a
                href="https://hcmhospital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FFFFFF] text-[#1D1D1F] text-xs font-medium hover:bg-[#F5F5F7] border border-[#D2D2D7] transition-colors"
              >
                <span>Visit Highland Care (hcmhospital.com)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6E6E73]" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
