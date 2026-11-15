import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Quote,
  CheckCircle,
  Flag,
  Wrench,
  Award,
  Lightbulb,
  ShieldCheck,
  Building2,
  GraduationCap,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/common/CtaBanner";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { COMPANY_INFO } from "@/data/websiteData";

export default function AboutPage() {
  const values = [
    {
      title: "Make in India",
      desc: "Indigenous design and manufacturing at the core.",
      icon: Flag,
    },
    {
      title: "Hands-on learning",
      desc: "Students learn best by building real things.",
      icon: Wrench,
    },
    {
      title: "Quality first",
      desc: "Reliable products, tested before they ship.",
      icon: ShieldCheck,
    },
    {
      title: "Innovation",
      desc: "Constant R&D to solve real problems.",
      icon: Lightbulb,
    },
    {
      title: "Partnership",
      desc: "We stay with clients well after delivery.",
      icon: Award,
    },
    {
      title: "Integrity",
      desc: "Honest commitments, delivered on time.",
      icon: CheckCircle,
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
                / <span className="text-[#FF7043]">About Us</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722] block">
                ABOUT US
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
                Where business <br />
                meets technology
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                A young Indian company building robotics, AI, IoT and automation
                technology, and the people who will use it next.
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                  OUR STORY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
                  Indigenous technology, built for classrooms and factories
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                  <p>
                    <strong className="text-[#0B2545]">
                      {COMPANY_INFO.name}
                    </strong>{" "}
                    was incorporated on {COMPANY_INFO.incorporatedDate}. We are
                    a technology manufacturing and service company working across
                    automation and robotics, AI, IoT, drones and industrial
                    projects.
                  </p>
                  <p>
                    We design and manufacture educational kits, industrial
                    products and PCBs, deliver industrial automation and product
                    R&amp;D, and set up future-ready labs in schools and colleges
                    through our education brand,{" "}
                    <strong className="text-[#FF5722]">NavoYantra</strong>.
                  </p>
                </div>
              </div>

              {/* Workspace Photo */}
              <div className="lg:col-span-5 relative h-72 sm:h-84 rounded-3xl overflow-hidden shadow-lg border border-slate-200 group">
                <Image
                  src="/images/computer-lab-session.jpg"
                  alt="YuvaYantra R&D lab & educational training facility, New Delhi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-black/20 to-transparent flex items-end p-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7043] block">
                      R&amp;D &amp; Training Facility
                    </span>
                    <p className="text-xs font-semibold text-white drop-shadow mt-0.5">
                      YuvaYantra Technology Lab &amp; Manufacturing, New Delhi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Founder's Message */}
          <section className="py-20 px-4 sm:px-8 bg-slate-50 border-t border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Founder Photo & Title */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                <div className="relative w-full max-w-sm h-80 sm:h-96 rounded-3xl overflow-hidden shadow-md border border-slate-200 group">
                  <Image
                    src="/images/classroom-trainer-rohit.jpg"
                    alt="Rohit Rathore - Founder & Director, YuvaYantra Technology"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/20 to-transparent flex items-end p-5">
                    <div className="text-white text-left">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF7043] block">
                        Founder &amp; Trainer
                      </span>
                      <p className="text-xs font-medium text-slate-200 mt-0.5">
                        Rohit Rathore conducting live robotics training
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#0B2545]">
                    {COMPANY_INFO.founder.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                    {COMPANY_INFO.founder.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {COMPANY_INFO.founder.education}
                  </p>
                </div>
              </div>

              {/* Founder's Quote & Narrative */}
              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                  FOUNDER’S MESSAGE
                </span>

                <div className="text-[#FF5722]">
                  <Quote className="w-12 h-12 rotate-180 opacity-80" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] leading-snug">
                  {COMPANY_INFO.founder.message[0]}
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                  <p>{COMPANY_INFO.founder.message[1]}</p>
                  <p>{COMPANY_INFO.founder.message[2]}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Vision Card */}
              <div className="lg:col-span-6 rounded-3xl bg-[#0B2545] text-white p-8 sm:p-10 shadow-lg flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF7043]">
                    OUR VISION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold leading-relaxed">
                    A self-reliant India in technology, where Indian classrooms
                    create innovators and Indian industry runs on Indian-made
                    technology.
                  </h3>
                </div>
              </div>

              {/* Mission Card */}
              <div className="lg:col-span-6 rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between">
                <div className="space-y-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                    OUR MISSION
                  </span>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="font-mono font-bold text-[#FF5722] text-sm shrink-0">
                        01
                      </span>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed">
                        Design and manufacture reliable, affordable technology in
                        India.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-mono font-bold text-[#FF5722] text-sm shrink-0">
                        02
                      </span>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed">
                        Give every student a hands-on foundation in robotics, AI,
                        IoT and coding.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-mono font-bold text-[#FF5722] text-sm shrink-0">
                        03
                      </span>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed">
                        Help schools, colleges and industries adopt modern
                        technology.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-mono font-bold text-[#FF5722] text-sm shrink-0">
                        04
                      </span>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed">
                        Empower teachers with training and continuous support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values: What We Stand For */}
          <section className="py-20 px-4 sm:px-8 bg-slate-50 border-t border-b border-slate-100">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-2 mb-14">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                  OUR VALUES
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
                  What we stand for
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#FFF5F0] border border-[#FFE8DC] flex items-center justify-center text-[#FF5722] shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-[#0B2545]">
                          {val.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Recognition & Company Facts */}
          <section className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Recognitions */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                  RECOGNITION
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
                  Registered, recognised and government-ready
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {COMPANY_INFO.recognitions.map((rec, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 flex flex-col justify-between space-y-4 hover:border-[#FF5722]/50 hover:shadow-md transition group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-[#0B2545]/5 border border-slate-200 flex items-center justify-center text-[#0B2545] group-hover:text-[#FF5722] transition-colors">
                          <ShieldCheck className="w-6 h-6 text-[#FF5722]" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Verified
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0B2545] group-hover:text-[#FF5722] transition-colors">
                          {rec.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {rec.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Facts Table */}
              <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm">
                <h3 className="text-lg font-black text-[#0B2545] pb-4 border-b border-slate-100">
                  Company facts
                </h3>

                <dl className="divide-y divide-slate-100 text-sm">
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-slate-500">Legal name</dt>
                    <dd className="font-semibold text-[#0B2545] text-right">
                      {COMPANY_INFO.legalName}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-slate-500">Incorporated</dt>
                    <dd className="font-semibold text-slate-800 text-right">
                      {COMPANY_INFO.incorporatedDate}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-slate-500">CIN</dt>
                    <dd className="font-mono font-semibold text-slate-800 text-right text-xs">
                      {COMPANY_INFO.cin}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-slate-500">GSTIN</dt>
                    <dd className="font-mono font-semibold text-slate-800 text-right text-xs">
                      {COMPANY_INFO.gstin}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-slate-500">Registered Office</dt>
                    <dd className="font-medium text-slate-800 text-right text-xs max-w-xs">
                      {COMPANY_INFO.address}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-slate-500">Grievance Officer</dt>
                    <dd className="font-semibold text-slate-800 text-right text-xs">
                      {COMPANY_INFO.grievanceOfficer.name} ({COMPANY_INFO.grievanceOfficer.email})
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-slate-500">Education brand</dt>
                    <dd className="font-semibold text-[#FF5722] text-right text-xs sm:text-sm">
                      {COMPANY_INFO.educationBrand}
                    </dd>
                  </div>
                </dl>
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
