import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingCart, Bot, Cpu, Wifi, Code2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";

export const StemKits: React.FC = () => {
  const tracks = [
    {
      name: "Robotics",
      desc: "Build, wire and program robots.",
      icon: Bot,
      color: "#FF6F1E",
      image: "/images/sumo-robot.jpg",
      slug: "robotics",
    },
    {
      name: "Artificial Intelligence",
      desc: "Machine learning and vision projects.",
      icon: Cpu,
      color: "#153A6B",
      image: "/images/ai-camera-robot-car.jpg",
      slug: "ai",
    },
    {
      name: "IoT",
      desc: "Sensors, connectivity and smart devices.",
      icon: Wifi,
      color: "#0284C7",
      image: "/images/esp32-robot-car.jpg",
      slug: "iot",
    },
    {
      name: "Coding",
      desc: "Block, Python and C++ programming.",
      icon: Code2,
      color: "#16A34A",
      image: "/images/custom-pcb-board.jpg",
      slug: "coding",
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E]">
              STEM KITS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#153A6B] tracking-tight">
              15 hands-on kits <br className="hidden sm:inline" />
              across four tracks
            </h2>
          </div>

          <div>
            <a
              href={COMPANY_INFO.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#153A6B] hover:bg-[#0D203C] text-white font-bold text-sm rounded-xl shadow-md transition cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4 text-[#FF6F1E]" />
              <span>Shop on NavoYantra</span>
            </a>
          </div>
        </div>

        {/* 4 Track Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden p-6 flex flex-col justify-between hover:border-[#FF6F1E]/50 hover:shadow-lg transition-all duration-200 group"
              >
                {/* Visual Image box */}
                <div className="relative w-full h-36 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mb-5 group-hover:shadow-md transition">
                  <Image
                    src={track.image}
                    alt={track.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#FF6F1E] shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#153A6B] group-hover:text-[#FF6F1E] transition-colors">
                    {track.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[36px]">
                    {track.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4">
                  <Link
                    href={`/solutions?track=${track.slug}#kits`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6F1E] group-hover:translate-x-1 transition-all"
                  >
                    <span>View kits</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Kit Box: YuvaBot v1.0 (Exact Design from PDF) */}
        <div className="rounded-3xl bg-[#FFF6F0] border border-[#FFE2D1] p-8 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image: Real YuvaBot v1.0 kit photo */}
            <div className="lg:col-span-5 relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#FFE2D1] bg-white shadow-sm flex items-center justify-center p-4">
              <Image
                src="/images/yuvabot-featured.jpg"
                alt="YuvaBot v1.0 Beginner Wheeled Robot"
                fill
                className="object-contain p-2"
              />
              <div className="absolute top-3 left-3 bg-[#FF6F1E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                Official Kit
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E]">
                FEATURED KIT
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-[#153A6B] tracking-tight">
                YuvaBot v1.0
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                A beginner wheeled robot built on Arduino Uno. Students program
                it in block code, Python or C++, using four IR/distance sensors
                and two motors.
              </p>

              <div className="pt-3">
                <a
                  href={`${COMPANY_INFO.shopUrl}/yuvabot`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF6F1E] hover:bg-[#F45B0A] text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <span>Buy on shop.navoyantra.com</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
