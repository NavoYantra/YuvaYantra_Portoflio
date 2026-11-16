"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { QuoteModal } from "../layout/QuoteModal";

export const CtaBanner: React.FC<{
  title?: string;
  subtitle?: string;
  buttonText?: string;
}> = ({
  title = "Planning a lab, a workshop or an industrial project?",
  subtitle = "Talk to our team for a free consultation and a tailored proposal.",
  buttonText = "Get a Free Consultation",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="w-full py-8 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-[#FF6F1E] text-white p-8 sm:p-12 lg:p-14 shadow-xl">
            {/* Geometric watermark / backdrop accent */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 pointer-events-none opacity-15 overflow-hidden">
              <svg
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover"
              >
                <path d="M100 0L350 250H450L200 0H100Z" fill="#000000" />
                <path d="M220 0L470 250H550L300 0H220Z" fill="#000000" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {title}
                </h2>
                <p className="text-orange-100 text-base sm:text-lg">
                  {subtitle}
                </p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => setIsOpen(true)}
                  className="px-7 py-3.5 bg-[#102A4E] hover:bg-[#0D203C] text-white font-bold rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-150 flex items-center gap-2.5 cursor-pointer group"
                >
                  <span>{buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
