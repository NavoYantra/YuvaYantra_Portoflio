import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  Cpu,
  Wrench,
  Layers,
  Radio,
  FlaskConical,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/common/CtaBanner";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export default function IndustryPage() {
  const fiveWays = [
    {
      id: "automation",
      title: "Industrial Automation",
      subtitle: "Automate machines and processes to cut manual effort and errors.",
      icon: Wrench,
      features: [
        "Machine and process automation",
        "Sensor, controller and PLC integration",
        "IoT-based monitoring dashboards",
        "Retrofitting existing machines",
      ],
      placeholder: "Automation project on a shop floor",
      image: "/images/robotic-arm-showcase.jpg",
    },
    {
      id: "manufacturing",
      title: "Industrial Product Manufacturing",
      subtitle: "Electronic and automation products built to your specifications.",
      icon: Layers,
      features: [
        "Custom electronic devices",
        "Control panels and enclosures",
        "Small and medium batch production",
        "Testing before dispatch",
      ],
      placeholder: "Finished industrial product",
      image: "/images/yuva-battle-robots.jpg",
    },
    {
      id: "pcb",
      title: "PCB Design & Manufacturing",
      subtitle: "From schematic to assembled board, for industry and education.",
      icon: Cpu,
      features: [
        "Schematic and PCB layout",
        "Prototype boards",
        "Assembly and production runs",
        "Embedded firmware",
      ],
      placeholder: "PCB board close-up",
      image: "/images/custom-pcb-board.jpg",
    },
    {
      id: "rnd",
      title: "Product Design & R&D",
      subtitle: "We take an idea through design and prototyping to a working product.",
      icon: FlaskConical,
      features: [
        "Concept and feasibility",
        "Electronics and mechanical design",
        "Prototyping and testing",
        "Design for manufacturing",
      ],
      placeholder: "Prototype on the test bench",
      image: "/images/red-robot-top.jpg",
    },
    {
      id: "drones",
      title: "Drones",
      subtitle: "Drones and drone systems for training and field applications.",
      icon: Radio,
      features: [
        "Training and educational drones",
        "Agriculture and survey use cases",
        "Custom drone builds",
        "Drone labs for institutions",
      ],
      placeholder: "Drone in flight",
      image: "/images/drone-field-testing.jpg",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Requirement study",
      desc: "We study your process, problem and constraints.",
    },
    {
      num: "02",
      title: "Concept & design",
      desc: "Electronics, PCB and mechanical design.",
    },
    {
      num: "03",
      title: "Prototype & testing",
      desc: "A working prototype, tested and refined.",
    },
    {
      num: "04",
      title: "Manufacturing",
      desc: "Production of the final product or system.",
    },
    {
      num: "05",
      title: "Deployment & support",
      desc: "Installation, handover and after-sales support.",
    },
  ];

  const industries = [
    "Manufacturing & MSMEs",
    "OEMs & product companies",
    "Agriculture",
    "Educational institutions",
    "Government & PSUs",
    "Startups & R&D teams",
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
                / <span className="text-[#FF7043]">Industry</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722] block">
                INDUSTRY
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
                Automation, manufacturing <br />
                and R&amp;D for industry
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                We help businesses automate processes and build electronic
                products, designed and made in India.
              </p>
            </div>
          </section>

          {/* Five Ways We Help Industry */}
          <section className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-16">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                  WHAT WE OFFER
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
                  Five ways we help industry
                </h2>
              </div>

              {/* Rows of 5 ways */}
              <div className="space-y-12">
                {fiveWays.map((item, idx) => {
                  const Icon = item.icon;
                  const isEven = idx % 2 === 1;
                  return (
                    <div
                      key={item.id}
                      id={item.id}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-3xl border border-slate-200/90 bg-white hover:border-[#FF5722]/50 hover:shadow-md transition-all duration-200"
                    >
                      {/* Text Column */}
                      <div
                        className={`space-y-5 ${
                          isEven ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"
                        }`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-[#FFF5F0] border border-[#FFE8DC] flex items-center justify-center text-[#FF5722]">
                          <Icon className="w-6 h-6" />
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-[#0B2545]">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-1">
                            {item.subtitle}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          {item.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700"
                            >
                              <Check className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Image Column */}
                      <div
                        className={`relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group shadow-sm ${
                          isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"
                        }`}
                      >
                        {item.image ? (
                          <>
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent flex items-end p-4">
                              <p className="text-white text-xs font-semibold drop-shadow">
                                {item.title}
                              </p>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                            <Icon className="w-8 h-8 text-slate-400 mb-2" />
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                              {item.placeholder}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* How We Work: From Problem to Production */}
          <section className="py-20 px-4 sm:px-8 bg-slate-50 border-t border-b border-slate-100">
            <div className="max-w-7xl mx-auto space-y-14">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                  HOW WE WORK
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
                  From problem to production
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xl font-black font-mono text-[#FF5722] block mb-3">
                        {step.num}
                      </span>
                      <h3 className="text-base font-bold text-[#0B2545] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries We Serve & Track Record */}
          <section className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: Who We Work With */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between p-8 rounded-3xl border border-slate-200">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                    INDUSTRIES WE SERVE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0B2545]">
                    Who we work with
                  </h3>
                  <p className="text-sm text-slate-600">
                    From agile hardware startups and manufacturing SMEs to
                    educational institutions and government organizations.
                  </p>

                  <div className="flex flex-wrap gap-2.5 pt-4">
                    {industries.map((ind, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Track Record Box */}
              <div className="lg:col-span-6 rounded-3xl bg-[#0B2545] text-white p-8 sm:p-10 shadow-lg flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF7043]">
                    TRACK RECORD
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                    Product design for 3 established companies
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We took each product from initial concept and feasibility to
                    a working design, multi-layer PCB layout, and reliable
                    assembly.
                  </p>
                </div>

                <div className="pt-8">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-sm rounded-xl transition"
                  >
                    <span>See Our Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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
