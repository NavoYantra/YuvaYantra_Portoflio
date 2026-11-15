import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { LABS_DATA } from "@/data/websiteData";

export const LabSolutions: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
              LAB SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight">
              Turnkey labs, from <br className="hidden sm:inline" />
              design to training
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Design, equipment, installation, curriculum and teacher training,
              all from one team.
            </p>
          </div>

          <div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white font-bold text-sm rounded-xl transition-all duration-150 cursor-pointer"
            >
              <span>View All Labs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Content layout: Left Image Feature + Right 8 Lab Options */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Feature Showcase */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-orange-50/30 p-8 flex flex-col justify-between overflow-hidden shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/10 text-[#FF5722] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Government Installation</span>
              </div>
              <h3 className="text-2xl font-black text-[#0B2545]">
                IoT Labs in Government Schools
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Full-scale laboratory deployment with specialized IoT development kits, live dashboard displays, teacher lesson plans, and dedicated student workstation benches.
              </p>
            </div>

            {/* Visual Photo Card */}
            <div className="my-6 relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <Image
                src="/images/computer-lab-session.jpg"
                alt="Completed IoT lab in a government school"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                <span className="font-semibold drop-shadow">Completed IoT lab · Government school</span>
                <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">Active</span>
              </div>
            </div>

            <div className="text-xs text-slate-500 flex items-center justify-between">
              <span>Turnkey setup completed in 3 weeks</span>
              <span className="font-semibold text-[#FF5722]">10 Schools Equipped</span>
            </div>
          </div>

          {/* Right 8 Lab Options (Matching exact layout from design) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LABS_DATA.map((lab) => (
              <Link
                key={lab.id}
                href={`/solutions#${lab.id}`}
                className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#FF5722] hover:shadow-md transition-all duration-200 flex items-center justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-[#0B2545] group-hover:text-[#FF5722] transition-colors">
                    {lab.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {lab.shortDesc}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#FF5722] group-hover:text-white text-slate-400 flex items-center justify-center shrink-0 ml-3 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
