"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/layout/QuoteModal";
import { HeroImageSlider } from "@/components/home/HeroImageSlider";
import { StatsCounter } from "@/components/home/StatsCounter";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { TechAreas } from "@/components/home/TechAreas";
import { LabSolutions } from "@/components/home/LabSolutions";
import { StemKits } from "@/components/home/StemKits";
import { HowWeWork } from "@/components/home/HowWeWork";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CtaBanner } from "@/components/common/CtaBanner";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { COMPANY_INFO } from "@/data/websiteData";

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1">
          {/* HERO SECTION (Navy Blue Background - Exact Design) */}
          <section className="relative w-full bg-[#102A4E] text-white pt-12 pb-24 lg:pt-16 lg:pb-28 overflow-hidden">
            {/* Subtle Grid / Circuit Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Headline & Value Prop */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Tagline */}
                  <div className="inline-block">
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#FF8742] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {COMPANY_INFO.tagline}
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                    Indigenous <br />
                    technology for <br />
                    <span className="text-[#FF6F1E]">classrooms</span> <br className="sm:hidden" />
                    and <span className="text-[#FF6F1E]">industry</span>
                  </h1>

                  {/* Subheadline */}
                  <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                    {COMPANY_INFO.subheadline}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/solutions"
                      className="px-6 py-3.5 bg-[#FF6F1E] hover:bg-[#F45B0A] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 flex items-center gap-2 group cursor-pointer"
                    >
                      <span>Explore Lab Solutions</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() => setIsQuoteOpen(true)}
                      className="px-6 py-3.5 bg-[#173E73] hover:bg-[#1A437C] border border-[#20487E] text-white font-semibold text-sm rounded-xl transition duration-150 flex items-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-[#FF8742]" />
                      <span>Talk to Us</span>
                    </button>
                  </div>

                  {/* Trust Badges (Exact pills from design) */}
                  <div className="pt-4 flex flex-wrap items-center gap-2.5">
                    {COMPANY_INFO.recognitions.map((item, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#173E73]/90 border border-[#20487E] text-xs font-medium text-slate-200 shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Hero Real Image Carousel Slider */}
                <div className="lg:col-span-5">
                  <HeroImageSlider />
                </div>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <StatsCounter />

          {/* What We Do (NavoYantra Education vs YuvaYantra Industry) */}
          <WhatWeDo />

          {/* Deep Tech Built in India */}
          <TechAreas />

          {/* Lab Solutions Turnkey */}
          <LabSolutions />

          {/* 15 STEM Kits Across Four Tracks + YuvaBot v1.0 */}
          <StemKits />

          {/* Seven Steps to a Working Lab */}
          <HowWeWork />

          {/* Six Reasons Schools and Industry Choose Us */}
          <WhyChooseUs />

          {/* Bottom Orange Consultation Banner */}
          <CtaBanner />
        </main>

        <Footer />
        <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      </div>
    </SmoothScroll>
  );
}
