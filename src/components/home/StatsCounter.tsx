"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPANY_INFO } from "@/data/websiteData";

export const StatsCounter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    numRefs.current.forEach((el, index) => {
      if (!el) return;
      const targetVal = COMPANY_INFO.stats[index].value;

      gsap.fromTo(
        el,
        { innerText: "0" },
        {
          innerText: targetVal,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative -mt-10 sm:-mt-12 z-30 max-w-7xl mx-auto px-4 sm:px-8">
      <div
        ref={containerRef}
        className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100"
      >
        {COMPANY_INFO.stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-center ${
              idx > 0 && idx % 2 === 0 ? "pt-6 lg:pt-0" : ""
            } ${idx > 0 ? "lg:pl-8" : ""}`}
          >
            <div className="flex items-baseline text-4xl sm:text-5xl lg:text-6xl font-black text-[#153A6B] tracking-tight">
              <span
                ref={(el) => {
                  numRefs.current[idx] = el;
                }}
              >
                {stat.value}
              </span>
              <span className="text-[#FF6F1E] ml-0.5">{stat.suffix}</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-slate-600 leading-snug max-w-[210px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
