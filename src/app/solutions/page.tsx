"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  ExternalLink,
  Bot,
  Cpu,
  Wifi,
  Layers,
  Wrench,
  Radio,
  BookOpen,
  Users,
  Settings,
  Calendar,
  FileText,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/common/CtaBanner";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LABS_DATA, STEM_KITS, COMPANY_INFO } from "@/data/websiteData";

export default function SolutionsPage() {
  const [selectedTrack, setSelectedTrack] = useState<string>("All");

  const filteredKits =
    selectedTrack === "All"
      ? STEM_KITS
      : STEM_KITS.filter((kit) =>
          selectedTrack === "AI"
            ? kit.track === "Artificial Intelligence"
            : kit.track === selectedTrack
        );

  const supportServices = [
    {
      title: "Teacher Training Programme",
      desc: "Hands-on training so teachers can run the lab with confidence.",
      icon: BookOpen,
    },
    {
      title: "Student Workshops",
      desc: "Robotics, AI, IoT and drone workshops at schools and colleges.",
      icon: Users,
    },
    {
      title: "Lab Maintenance",
      desc: "On-call servicing and repairs to keep every lab running.",
      icon: Settings,
    },
    {
      title: "Annual Maintenance Contract",
      desc: "A yearly plan for scheduled servicing, repairs and replacements.",
      icon: Calendar,
    },
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1">
          {/* Header Banner */}
          <section className="bg-[#102A4E] text-white py-16 sm:py-20 px-4 sm:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-4">
              <div className="text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>{" "}
                / <span className="text-[#FF8742]">Solutions</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E] block">
                SOLUTIONS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
                Labs, kits and <br />
                industrial technology
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Everything we build and deliver for schools, colleges and
                industry, designed and made in India.
              </p>
            </div>
          </section>

          {/* Section 1: Labs We Design and Install */}
          <section id="labs" className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E]">
                  LAB SOLUTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#153A6B] tracking-tight">
                  Labs we design and install
                </h2>
              </div>

              {/* 8 Lab Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {LABS_DATA.map((lab) => (
                  <div
                    key={lab.id}
                    id={lab.id}
                    className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#FF6F1E] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Lab Image container */}
                      <div className="relative w-full h-36 rounded-xl overflow-hidden mb-5 bg-slate-100 border border-slate-200">
                        {lab.image ? (
                          <Image
                            src={lab.image}
                            alt={lab.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                            <Bot className="w-8 h-8 text-slate-400 group-hover:text-[#FF6F1E] transition-colors mb-2" />
                            <span className="text-xs font-semibold text-slate-400">
                              {lab.title}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                      </div>

                      <h3 className="text-lg font-bold text-[#153A6B] mb-2 group-hover:text-[#FF6F1E] transition-colors">
                        {lab.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {lab.shortDesc}
                      </p>
                    </div>

                    <ul className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500 font-medium">
                      {lab.features.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#FF6F1E]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Download Official Product & Lab Catalog Banner */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-50 via-white to-orange-50/50 border-2 border-dashed border-[#FF6F1E]/30 shadow-sm">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6F1E] block">
                    INSTITUTIONAL GUIDE &amp; PRICING
                  </span>
                  <h3 className="text-xl font-black text-[#153A6B]">
                    Download Official Lab &amp; STEM Kits Catalog (2026 Edition)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                    Comprehensive 25 MB PDF covering equipment breakdowns, curriculum alignment, NITI Aayog ATL guidelines, and school lab layout templates.
                  </p>
                </div>
                <a
                  href="/catalog.pdf"
                  download="YuvaYantra-Lab-Kits-Catalog.pdf"
                  className="px-7 py-3.5 bg-[#FF6F1E] hover:bg-[#F45B0A] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Catalog (PDF)</span>
                </a>
              </div>

              {/* Every Lab Includes Dark Banner */}
              <div className="rounded-3xl bg-[#153A6B] text-white p-8 sm:p-10 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FF8742]">
                      EVERY LAB INCLUDES
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                      Turnkey, from the first visit to ongoing support
                    </h3>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-slate-200">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#FF6F1E] shrink-0" />
                      <span>Lab layout and furniture design</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#FF6F1E] shrink-0" />
                      <span>Equipment, kits and tools</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#FF6F1E] shrink-0" />
                      <span>Installation and testing</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#FF6F1E] shrink-0" />
                      <span>Curriculum and activity manuals</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#FF6F1E] shrink-0" />
                      <span>Teacher training</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#FF6F1E] shrink-0" />
                      <span>Maintenance and AMC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Our 15 Kits */}
          <section id="kits" className="py-20 px-4 sm:px-8 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E]">
                    STEM KITS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#153A6B] tracking-tight">
                    Our 15 kits
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
                    Robotics, AI, IoT and coding kits with step-by-step guides,
                    for school labs and home learners.
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2">
                  {["All", "Robotics", "AI", "IoT", "Coding"].map((track) => (
                    <button
                      key={track}
                      onClick={() => setSelectedTrack(track)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                        selectedTrack === track
                          ? "bg-[#153A6B] text-white shadow"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {track}
                    </button>
                  ))}
                </div>
              </div>

              {/* Kits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {filteredKits.map((kit) => (
                  <div
                    key={kit.id}
                    className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#FF6F1E] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Visual container */}
                      <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 bg-slate-50 border border-slate-200">
                        {kit.image ? (
                          <Image
                            src={kit.image}
                            alt={kit.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center">
                            <Cpu className="w-6 h-6 text-slate-400 group-hover:text-[#FF6F1E] transition-colors mb-1" />
                            <span className="text-[11px] font-semibold text-slate-400">
                              {kit.name}
                            </span>
                          </div>
                        )}
                      </div>

                      <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF6F1E]">
                        {kit.track.toUpperCase()}
                      </span>
                      <h4 className="text-sm font-bold text-[#153A6B] mt-0.5 mb-1 group-hover:text-[#FF6F1E] transition-colors">
                        {kit.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed min-h-[44px]">
                        {kit.description}
                      </p>
                      <span className="inline-block mt-2 text-[10px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                        {kit.classLevel}
                      </span>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-4">
                      <a
                        href={kit.shopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#FF6F1E] hover:underline"
                      >
                        <span>View on shop</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: For Industry */}
          <section id="industry" className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E]">
                  FOR INDUSTRY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#153A6B] tracking-tight">
                  Manufacturing, automation and R&amp;D
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 5 Capabilities */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#FF6F1E] transition flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF8F5] text-[#FF6F1E] flex items-center justify-center shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#153A6B]">
                        Industrial Automation
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Automation of machines and processes using PLCs, sensors
                        and controllers.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#FF6F1E] transition flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF8F5] text-[#FF6F1E] flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#153A6B]">
                        Industrial Products
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Custom electronic and automation products built to your
                        specifications.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#FF6F1E] transition flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF8F5] text-[#FF6F1E] flex items-center justify-center shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#153A6B]">
                        PCB Design &amp; Manufacturing
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        PCB layout, prototyping and production runs with strict
                        quality validation.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#FF6F1E] transition flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF8F5] text-[#FF6F1E] flex items-center justify-center shrink-0">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#153A6B]">
                        Product Design &amp; R&amp;D
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        From concept and prototype to a tested, production-ready
                        product.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#FF6F1E] transition flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF8F5] text-[#FF6F1E] flex items-center justify-center shrink-0">
                      <Radio className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#153A6B]">
                        Drones
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Drones and drone kits for training, agriculture and
                        surveillance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Visual Images Grid */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 group shadow-sm">
                    <Image
                      src="/images/robotic-arm-showcase.jpg"
                      alt="Industrial automation and robotic arm project"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#153A6B]/80 via-transparent to-transparent flex items-end p-4">
                      <p className="text-white text-xs font-semibold drop-shadow">
                        Industrial Robotic Arm &amp; Automation
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-200 group shadow-sm">
                      <Image
                        src="/images/custom-pcb-board.jpg"
                        alt="Custom PCB engineering and manufacturing"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 50vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#153A6B]/80 via-transparent to-transparent flex items-end p-3">
                        <p className="text-white text-[11px] font-semibold drop-shadow">
                          Custom PCB R&amp;D
                        </p>
                      </div>
                    </div>

                    <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-200 group shadow-sm">
                      <Image
                        src="/images/drone-field-testing.jpg"
                        alt="Aero drone systems for institutions"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 50vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#153A6B]/80 via-transparent to-transparent flex items-end p-3">
                        <p className="text-white text-[11px] font-semibold drop-shadow">
                          Drone Field Systems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Support Services */}
          <section id="support" className="py-20 px-4 sm:px-8 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E]">
                  SUPPORT SERVICES
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#153A6B] tracking-tight">
                  Support that lasts beyond installation
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={idx}
                      className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-start"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#FFF8F5] border border-[#FFEFE6] flex items-center justify-center text-[#FF6F1E] mb-5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-[#153A6B] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <CtaBanner />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
