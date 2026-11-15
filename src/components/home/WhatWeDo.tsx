import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { NavoYantraLogo, YuvaYantraLogo } from "../common/BrandLogos";

export const WhatWeDo: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-left space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight">
            We make it, and we make it work
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
            Two strengths under one roof: manufacturing technology products, and
            the services that put them to work.
          </p>
        </div>

        {/* Two Dual Strengths Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: For Education (NavoYantra) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#FFF7F2] border border-[#FFE8DC] flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="space-y-6">
              <div className="h-12 flex items-center">
                <NavoYantraLogo className="h-11 sm:h-12" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2545]">
                For Education
              </h3>

              <ul className="space-y-3.5 text-slate-700 text-sm sm:text-base font-medium">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>STEM, STEAM, Robotics, AI, IoT and Drone labs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>15 STEM kits with guided curriculum</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Teacher training and student workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Lab maintenance and AMC</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer group"
              >
                <span>Explore Education</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: For Industry (YuvaYantra) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#0B2545] border border-[#14325C] text-white flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="space-y-6">
              <div className="h-12 flex items-center">
                <YuvaYantraLogo variant="light" showLink={false} className="h-10 sm:h-11" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Industry</h3>

              <ul className="space-y-3.5 text-slate-200 text-sm sm:text-base font-medium">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/15 text-[#FF7043] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Industrial automation services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/15 text-[#FF7043] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Industrial product manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/15 text-[#FF7043] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>PCB design and manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/15 text-[#FF7043] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Product design, R&amp;D and drones</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/industry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-xl transition-all cursor-pointer group"
              >
                <span>Explore Industry</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
