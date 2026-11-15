"use client";

import React, { useState } from "react";
import {
  Flag,
  Wrench,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { QuoteModal } from "../layout/QuoteModal";

export const WhyChooseUs: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reasons = [
    {
      title: "Designed & made in India",
      desc: "Our own kits, PCBs and products, made in India.",
      icon: Flag,
    },
    {
      title: "One partner, end to end",
      desc: "Design, supply, installation, training and support.",
      icon: Wrench,
    },
    {
      title: "Engineering-led",
      desc: "Founded by an Automation & Robotics engineer.",
      icon: GraduationCap,
    },
    {
      title: "NEP 2020-aligned",
      desc: "Structured activities and manuals for every class.",
      icon: Lightbulb,
    },
    {
      title: "Government-ready",
      desc: "GeM OEM seller, DPIIT-recognised, MSME-registered.",
      icon: ShieldCheck,
    },
    {
      title: "Support after install",
      desc: "Training, maintenance, AMC and competitions.",
      icon: CalendarCheck,
    },
  ];

  return (
    <>
      <section className="w-full py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight leading-tight">
                Six reasons <br className="hidden sm:inline" />
                schools and <br className="hidden sm:inline" />
                industry choose us
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Industry experience in the classroom. Classroom innovation for
                industry.
              </p>

              <div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-7 py-3.5 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition cursor-pointer flex items-center gap-2 group"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right 6 Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-[#FF5722]/50 hover:shadow-md transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFF5F0] border border-[#FFE8DC] flex items-center justify-center text-[#FF5722] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#0B2545]">
                        {reason.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
