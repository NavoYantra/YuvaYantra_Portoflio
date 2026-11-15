"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  Award,
  Zap,
  Users,
  Send,
  CheckCircle,
  Upload,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CAREER_JOBS } from "@/data/websiteData";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>("Robotics Trainer");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "Robotics Trainer",
    whyJoin: "",
  });

  const perks = [
    {
      title: "Real projects",
      desc: "Work on labs, kits and industrial products that ship.",
      icon: Zap,
    },
    {
      title: "Learn fast",
      desc: "Hands-on exposure to robotics, AI, IoT and drones.",
      icon: Sparkles,
    },
    {
      title: "Build for India",
      desc: "Be part of a Make in India technology company.",
      icon: Award,
    },
    {
      title: "Small, close team",
      desc: "Work directly with the founder from day one.",
      icon: Users,
    },
  ];

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setFormData((prev) => ({ ...prev, position: roleTitle }));
    const formElem = document.getElementById("apply-form");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
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
                / <span className="text-[#FF7043]">Careers</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722] block">
                CAREERS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
                Join the team building <br />
                Indian technology
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Engineers, trainers and makers who love building things: we’d
                like to hear from you.
              </p>
            </div>
          </section>

          {/* Why Join Us */}
          <section className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                  WHY JOIN US
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
                  Build the future of Indian tech with us
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {perks.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-start"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#FFF5F0] border border-[#FFE8DC] flex items-center justify-center text-[#FF5722] mb-5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-[#0B2545] mb-2">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Current Openings */}
          <section className="py-20 px-4 sm:px-8 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto space-y-10">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                  OPEN POSITIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
                  Current openings
                </h2>
              </div>

              {/* Roles List */}
              <div className="space-y-4">
                {CAREER_JOBS.map((job) => (
                  <div
                    key={job.id}
                    className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-[#FF5722]/50 hover:shadow-md transition-all duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                  >
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-[#0B2545]">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-[#FF5722]" />
                          {job.team}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() => handleApplyClick(job.title)}
                        className="px-6 py-2.5 bg-[#0B2545] hover:bg-[#FF5722] text-white font-bold text-xs rounded-xl transition cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Apply Form: Don't see your role? Apply anyway */}
          <section id="apply-form" className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                  APPLY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
                  Don’t see your role? <br />
                  Apply anyway
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Send us your details and résumé. We’ll reach out when there’s
                  a fit.
                </p>
              </div>

              {/* Application Form */}
              <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B2545]">
                      Application Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                      Thank you for your interest in YuvaYantra. Our recruitment
                      team will review your profile and reach out soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Your name"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Phone *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+91..."
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Position *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Role you're applying for"
                          value={formData.position}
                          onChange={(e) =>
                            setFormData({ ...formData, position: e.target.value })
                          }
                          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Résumé (PDF)
                      </label>
                      <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 text-xs text-slate-500">
                        <Upload className="w-4 h-4 text-slate-400" />
                        <input type="file" accept=".pdf" className="text-xs" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Why do you want to join?
                      </label>
                      <textarea
                        rows={4}
                        placeholder="A few lines about you and what you enjoy building..."
                        value={formData.whyJoin}
                        onChange={(e) =>
                          setFormData({ ...formData, whyJoin: e.target.value })
                        }
                        className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5722] resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-7 py-3 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-sm rounded-xl shadow-md transition cursor-pointer flex items-center gap-2"
                      >
                        <span>Submit Application</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
