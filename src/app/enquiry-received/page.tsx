import React from "react";
import Link from "next/link";
import { Check, ArrowRight, FolderKanban, ShoppingCart, BookOpen } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { COMPANY_INFO } from "@/data/websiteData";

export default function EnquiryReceivedPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1 flex flex-col justify-center py-20 sm:py-28 px-4 sm:px-8">
          <div className="max-w-3xl mx-auto w-full text-center space-y-6">
            {/* Orange Circular Checkmark Emblem (Exact Design) */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FF5722] text-white flex items-center justify-center mx-auto shadow-xl animate-in zoom-in-50 duration-300">
              <Check className="w-10 h-10 sm:w-12 sm:h-12 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                ENQUIRY RECEIVED
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight">
                Thank you! We’ll <br />
                be in touch soon.
              </h1>
            </div>

            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Our team will reply within one working day. For anything urgent,
              call or WhatsApp us on{" "}
              <a
                href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, "")}`}
                className="font-bold text-[#0B2545] hover:text-[#FF5722]"
              >
                {COMPANY_INFO.phone1}
              </a>
              .
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/"
                className="px-6 py-3 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-sm rounded-xl shadow-md transition"
              >
                Back to Home
              </Link>
              <Link
                href="/solutions"
                className="px-6 py-3 border-2 border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white font-bold text-sm rounded-xl transition"
              >
                Explore Solutions
              </Link>
            </div>

            {/* 3 Quick Link Cards */}
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <Link
                href="/projects"
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#FF5722] hover:shadow-md transition-all group"
              >
                <FolderKanban className="w-5 h-5 text-[#FF5722] mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-[#0B2545] group-hover:text-[#FF5722] transition-colors">
                  See our projects
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Labs and products we have delivered
                </p>
              </Link>

              <a
                href={COMPANY_INFO.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#FF5722] hover:shadow-md transition-all group"
              >
                <ShoppingCart className="w-5 h-5 text-[#FF5722] mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-[#0B2545] group-hover:text-[#FF5722] transition-colors">
                  Shop STEM kits
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Browse kits on NavoYantra
                </p>
              </a>

              <Link
                href="/blog"
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#FF5722] hover:shadow-md transition-all group"
              >
                <BookOpen className="w-5 h-5 text-[#FF5722] mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-[#0B2545] group-hover:text-[#FF5722] transition-colors">
                  Read the blog
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Lab guides and STEM ideas
                </p>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
