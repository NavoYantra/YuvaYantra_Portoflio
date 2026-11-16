import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center py-24 px-4 sm:px-8 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          {/* Big 404 with orange 0 */}
          <div className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight flex items-center justify-center select-none">
            <span className="text-[#153A6B]">4</span>
            <span className="text-[#FF6F1E]">0</span>
            <span className="text-[#153A6B]">4</span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              PAGE NOT FOUND
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#153A6B] tracking-tight">
              This page took a wrong turn
            </h1>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            The page you are looking for may have moved or no longer exists.
            Let’s get you back on track.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/"
              className="px-6 py-3 bg-[#FF6F1E] hover:bg-[#F45B0A] text-white font-bold text-sm rounded-xl shadow-md transition"
            >
              Go to Home
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-[#153A6B] text-[#153A6B] hover:bg-[#153A6B] hover:text-white font-bold text-sm rounded-xl transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
