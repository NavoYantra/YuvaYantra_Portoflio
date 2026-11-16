import React from "react";
import Link from "next/link";
import { Cookie, Shield, CheckCircle, Info } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { COMPANY_INFO } from "@/data/websiteData";

export const metadata = {
  title: "Cookie Policy | YuvaYantra Technology Private Limited",
  description: "Official Cookie Policy of YuvaYantra Technology Pvt. Ltd. explaining how minimal, essential cookies are utilized.",
};

export default function CookiePolicyPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1">
          {/* Header Banner */}
          <section className="bg-[#102A4E] text-white py-14 sm:py-18 px-4 sm:px-8 relative overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-4">
              <div className="text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>{" "}
                / <span className="text-[#FF8742]">Legal</span> / <span>Cookie Policy</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E] block">
                PRIVACY TRANSPARENCY
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Cookie Policy
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Clear and transparent disclosure of how cookies and local storage technologies
                are utilized on YuvaYantra websites.
              </p>
              <div className="text-xs text-slate-400 font-mono pt-1">
                Last updated: 15 February 2026
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-16 px-4 sm:px-8 bg-white">
            <div className="max-w-4xl mx-auto space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
              
              {/* Privacy-First Commitment Box */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3 text-emerald-700">
                  <Shield className="w-6 h-6 shrink-0" />
                  <h2 className="text-lg font-bold">Privacy-First Cookie Philosophy</h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  YuvaYantra Technology Private Limited believes in privacy by design. <strong>We do NOT employ invasive third-party cross-site advertising cookies, behavioral tracking scripts, or data-broker trackers.</strong> Any cookies or local storage utilized on our website serve strictly functional and performance-optimization purposes.
                </p>
              </div>

              {/* 1. What Are Cookies */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#153A6B]">1. What Are Cookies?</h3>
                <p>
                  Cookies are small text files stored on your browser or device when you visit websites. They help the website remember your device preferences, maintain secure sessions, and ensure responsive page loading.
                </p>
              </div>

              {/* 2. Types of Cookies We Use */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#153A6B]">2. Categories of Cookies Used</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#153A6B] text-white">
                      Strictly Necessary
                    </span>
                    <h4 className="text-sm font-bold text-[#153A6B]">Essential &amp; Security Cookies</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Essential for navigation, preventing Cross-Site Request Forgery (CSRF), and securing enquiry forms. These cannot be switched off without impairing site functionality.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FF6F1E] text-white">
                      Performance &amp; UI
                    </span>
                    <h4 className="text-sm font-bold text-[#153A6B]">Preference &amp; Cache Cookies</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Remembering UI preferences, smooth scrolling positions, and caching static assets locally to ensure lightning-fast page transitions on mobile devices.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Managing Cookies */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#153A6B]">3. How You Can Control Cookies</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Most modern web browsers allow you to manage or block cookies through browser settings (Chrome, Firefox, Safari, Edge). Please note that completely disabling essential cookies may impact interactive forms on the website.
                </p>
              </div>

              {/* 4. Contact */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-[#153A6B]">Questions Regarding Cookie Usage?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  If you have any questions regarding our cookie practices, please email our legal team at{" "}
                  <a href={`mailto:${COMPANY_INFO.emailOfficial}`} className="text-[#FF6F1E] font-semibold underline">
                    {COMPANY_INFO.emailOfficial}
                  </a>.
                </p>
              </div>

            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
