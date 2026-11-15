"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Wrench,
  Handshake,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/common/CtaBanner";
import { QuoteModal } from "@/components/layout/QuoteModal";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PROJECTS_DATA } from "@/data/websiteData";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const filteredProjects =
    filter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Government Tender":
        return <Building2 className="w-5 h-5 text-[#FF5722]" />;
      case "Industry":
        return <Wrench className="w-5 h-5 text-[#0B2545]" />;
      case "Collaboration":
        return <Handshake className="w-5 h-5 text-[#0284C7]" />;
      case "Education":
        return <GraduationCap className="w-5 h-5 text-[#16A34A]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#FF5722]" />;
    }
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1">
          {/* Header Banner */}
          <section className="bg-[#0B1E38] text-white py-16 sm:py-20 px-4 sm:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-4">
              <div className="text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>{" "}
                / <span className="text-[#FF7043]">Projects</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722] block">
                PROJECTS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
                Work we are proud of
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                From turnkey IoT installations in government schools to commercial
                hardware R&amp;D and national educational collaborations.
              </p>
            </div>
          </section>

          {/* Filter & Projects Grid */}
          <section className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "All",
                  "Government Tender",
                  "Industry",
                  "Collaboration",
                  "Education",
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                      filter === cat
                        ? "bg-[#0B2545] text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Project Cards (Expanded Case Studies) */}
              <div className="space-y-10">
                {filteredProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    id={project.id}
                    className="p-8 sm:p-10 rounded-3xl border border-slate-200/90 bg-white hover:border-[#FF5722]/50 hover:shadow-lg transition-all duration-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                  >
                    {/* Visual box with real photo */}
                    <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm shadow flex items-center justify-center">
                        {getCategoryIcon(project.category)}
                      </div>
                      {project.location && (
                        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-lg flex items-center gap-1.5 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
                          <span>{project.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Content Details */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722] bg-[#FF5722]/10 px-3 py-1 rounded-md">
                          {project.category}
                        </span>
                        {project.client && (
                          <span className="text-xs text-slate-500 font-medium">
                            • Client: {project.client}
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
                        {project.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                        {project.summary}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {project.details}
                      </p>

                      {/* Deliverable Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={() => setIsQuoteOpen(true)}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF5722] hover:text-[#E64A19] cursor-pointer"
                        >
                          <span>Request similar project plan</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <CtaBanner
            title="Have an upcoming project or lab requirement?"
            subtitle="Let’s discuss your technical specifications and prepare a feasibility proposal."
          />
        </main>

        <Footer />
        <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      </div>
    </SmoothScroll>
  );
}
