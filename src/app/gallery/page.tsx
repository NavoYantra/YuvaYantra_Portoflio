"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  Image as ImageIcon,
  ExternalLink,
} from "lucide-react";
import { YoutubeIcon } from "@/components/common/SocialIcons";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/common/CtaBanner";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { GALLERY_ITEMS } from "@/data/websiteData";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Labs",
    "Workshops",
    "Teacher Training",
    "Products",
    "Events",
  ];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const videos = [
    {
      id: "v1",
      title: "YouTube video: lab walkthrough",
      desc: "Step-by-step tour inside our newly commissioned IoT & robotics lab.",
      duration: "4:15",
    },
    {
      id: "v2",
      title: "YouTube video: building YuvaBot",
      desc: "Unboxing, chassis assembly and writing first line following program.",
      duration: "6:40",
    },
    {
      id: "v3",
      title: "YouTube video: workshop highlights",
      desc: "High energy moments and student project presentations from Meerut.",
      duration: "3:50",
    },
  ];

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
                / <span className="text-[#FF7043]">Gallery</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722] block">
                GALLERY
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
                Our work in action
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Labs, workshops, training sessions and products from our
                projects across India.
              </p>
            </div>
          </section>

          {/* Photo Gallery Grid */}
          <section className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                      activeCategory === cat
                        ? "bg-[#0B2545] text-white shadow"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Gallery Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#FF5722]/50 transition-all duration-200 flex flex-col justify-between"
                  >
                    {/* Visual Photo Card */}
                    <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group-hover:shadow-md transition">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="mt-5 space-y-1">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF5722]">
                        {item.category.toUpperCase()}
                      </span>
                      <h3 className="text-base font-bold text-[#0B2545]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center pt-6">
                <button
                  type="button"
                  className="px-8 py-3.5 border-2 border-slate-300 hover:border-[#0B2545] text-[#0B2545] font-bold text-sm rounded-xl transition cursor-pointer"
                >
                  Load More Photos
                </button>
              </div>
            </div>
          </section>

          {/* Videos Section: Watch Us Build */}
          <section className="py-20 px-4 sm:px-8 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                    VIDEOS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
                    Watch us build
                  </h2>
                </div>

                <div>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-[#FF5722] text-[#0B2545] font-bold text-sm rounded-xl shadow-sm transition"
                  >
                    <YoutubeIcon className="w-4 h-4 text-[#FF5722]" />
                    <span>Our YouTube Channel</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 3 Video Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((vid) => (
                  <div
                    key={vid.id}
                    className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                  >
                    {/* Video Visual Box with Play Button */}
                    <div className="relative w-full h-48 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-100 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                      {/* Orange Play circle */}
                      <div className="w-14 h-14 rounded-full bg-[#FF5722] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 cursor-pointer">
                        <Play className="w-6 h-6 ml-1 fill-white" />
                      </div>
                      <span className="absolute bottom-3 left-4 text-[10px] font-mono font-semibold text-slate-500 bg-white/80 px-2 py-0.5 rounded">
                        {vid.duration}
                      </span>
                    </div>

                    <div className="mt-5 space-y-1">
                      <h3 className="text-base font-bold text-[#0B2545] group-hover:text-[#FF5722] transition-colors">
                        {vid.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {vid.desc}
                      </p>
                    </div>
                  </div>
                ))}
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
