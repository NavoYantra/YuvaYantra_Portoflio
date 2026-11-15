import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Wrench, Handshake, GraduationCap } from "lucide-react";
import { PROJECTS_DATA } from "@/data/websiteData";

export const ProjectsPreview: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Government Tender":
        return <Building2 className="w-5 h-5 text-[#FF5722]" />;
      case "Industry":
        return <Wrench className="w-5 h-5 text-[#0B2545]" />;
      case "Collaboration":
        return <Handshake className="w-5 h-5 text-[#0284C7]" />;
      case "Education":
        return <GraduationCap className="w-5 h-5 text-[#16A34A]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#FF5722]" />;
    }
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
              PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight">
              Work we are proud of
            </h2>
          </div>

          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white font-bold text-sm rounded-xl transition duration-150 cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden p-6 flex flex-col justify-between hover:border-[#FF5722] hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                {/* Visual Image box */}
                <div className="relative w-full h-40 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mb-5 group-hover:shadow-md transition">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    {getCategoryIcon(proj.category)}
                  </div>
                </div>

                <span className="text-[11px] font-bold tracking-wider uppercase text-[#FF5722]">
                  {proj.category}
                </span>

                <h3 className="text-lg font-bold text-[#0B2545] mt-1 mb-2 group-hover:text-[#FF5722] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {proj.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-5">
                <Link
                  href={`/projects#${proj.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] group-hover:text-[#FF5722] group-hover:translate-x-1 transition-all"
                >
                  <span>Case details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
