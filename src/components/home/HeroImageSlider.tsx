"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

interface SlideItem {
  id: string;
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  badge: string;
}

const SLIDES: SlideItem[] = [
  {
    id: "modern-lab",
    image: "/images/gallery/school-computer-lab-wide.jpg",
    tag: "TURNKEY INSTALLATION",
    title: "Modern School Computer & Robotics Lab",
    subtitle: "Turnkey lab infrastructure, digital workstations, and curriculum manuals for institutions",
    badge: "Government & Private Labs",
  },
  {
    id: "workshop-action",
    image: "/images/gallery/stem-workshop-students.jpg",
    tag: "STUDENT WORKSHOPS",
    title: "Hands-On Robotics & Circuit Bootcamps",
    subtitle: "Students building and coding their first autonomous mobile robots",
    badge: "NEP 2020 Aligned",
  },
  {
    id: "training",
    image: "/images/classroom-trainer-rohit.jpg",
    tag: "HANDS-ON LEARNING",
    title: "Classroom Robotics & AI Training",
    subtitle: "Hands-on workshops & practical stem coaching with students in schools and colleges",
    badge: "150+ Students Trained",
  },
  {
    id: "labs",
    image: "/images/computer-lab-session.jpg",
    tag: "GOVERNMENT TENDER",
    title: "IoT & AI Labs in Government Schools",
    subtitle: "Turnkey laboratory deployment across 10+ schools in Noida & Greater Noida",
    badge: "10+ Schools Equipped",
  },
  {
    id: "yuvabot",
    image: "/images/yuvabot-featured.jpg",
    tag: "MAKE IN INDIA",
    title: "YuvaBot v1.0 Autonomous Rover",
    subtitle: "Indigenous STEM educational robot programmable in Block code, Python and C++",
    badge: "Designed in India",
  },
  {
    id: "robotic-arm",
    image: "/images/robotic-arm-showcase.jpg",
    tag: "INDUSTRIAL AUTOMATION",
    title: "Multi-Axis Industrial Robotic Arm",
    subtitle: "Industrial automation, machine control, PLCs and custom electronic prototypes",
    badge: "Production Ready",
  },
  {
    id: "ai-vision",
    image: "/images/ai-camera-robot-car.jpg",
    tag: "EDGE AI & VISION",
    title: "Smart Vision Robot Car for ESP32",
    subtitle: "Real-time object recognition, computer vision, and wireless control platforms",
    badge: "AI Vision Module",
  },
  {
    id: "pcb",
    image: "/images/custom-pcb-board.jpg",
    tag: "HARDWARE R&D",
    title: "Custom PCB Design & Manufacturing",
    subtitle: "Schematic layout, circuit prototyping, and domestic electronic hardware production",
    badge: "Certified Engineering",
  },
  {
    id: "drone",
    image: "/images/drone-field-testing.jpg",
    tag: "AVIATION SYSTEMS",
    title: "AeroYuva Quad Drone Field Testing",
    subtitle: "Aviation education kits, quadcopter aerodynamics and institutional drone setups",
    badge: "Flight Ready",
  },
];

export const HeroImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, isPaused]);

  const active = SLIDES[current];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-[440px] sm:h-[480px] lg:h-[510px] rounded-3xl overflow-hidden border border-[#20487E] bg-[#0A1A2F] shadow-2xl group select-none"
    >
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          {/* Gradient overlays for readability and high-tech feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#102A4E] via-[#102A4E]/40 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102A4E]/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Top Bar: Tag & Slide Counter & Pause/Play */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#102A4E]/85 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#FF8742] shadow">
            <Sparkles className="w-3 h-3 text-[#FF6F1E]" />
            <span>{active.tag}</span>
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold text-white/90 border border-white/10">
            {active.badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused((p) => !p)}
            className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white/80 hover:text-white flex items-center justify-center transition border border-white/10 cursor-pointer"
            aria-label={isPaused ? "Play slider" : "Pause slider"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <span className="font-mono text-xs font-bold text-white/80 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
            0{current + 1} / 0{SLIDES.length}
          </span>
        </div>
      </div>

      {/* Prev / Next Arrow Controls */}
      <div className="absolute inset-y-0 left-3 flex items-center z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-[#FF6F1E] backdrop-blur-md text-white flex items-center justify-center transition-all duration-150 border border-white/15 hover:border-[#FF6F1E] hover:scale-110 cursor-pointer shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-3 flex items-center z-20">
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-[#FF6F1E] backdrop-blur-md text-white flex items-center justify-center transition-all duration-150 border border-white/15 hover:border-[#FF6F1E] hover:scale-110 cursor-pointer shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Content Card & Indicators */}
      <div className="absolute bottom-4 left-4 right-4 z-20 space-y-3">
        {/* Caption Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#102A4E]/90 backdrop-blur-md border border-white/15 shadow-xl">
          <motion.div
            key={active.id + "-content"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-1"
          >
            <h3 className="text-base sm:text-lg font-black text-white leading-tight">
              {active.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
              {active.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Dots & Progress Indicator */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                current === idx
                  ? "w-8 bg-[#FF6F1E]"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
