import React from "react";
import {
  Bot,
  Cpu,
  Wifi,
  Radio,
  Layers,
  FlaskConical,
} from "lucide-react";

export const TechAreas: React.FC = () => {
  const techCards = [
    {
      title: "Robotics & Automation",
      desc: "Robots, controllers and automated systems.",
      icon: Bot,
    },
    {
      title: "Artificial Intelligence",
      desc: "AI kits, computer vision and smart systems.",
      icon: Cpu,
    },
    {
      title: "IoT & Industrial IoT",
      desc: "Connected devices, sensors and dashboards.",
      icon: Wifi,
    },
    {
      title: "Drone Technology",
      desc: "Drones for education and field use.",
      icon: Radio,
    },
    {
      title: "PCB & Embedded",
      desc: "Custom PCBs and microcontroller hardware.",
      icon: Layers,
    },
    {
      title: "Product R&D",
      desc: "From idea and prototype to finished product.",
      icon: FlaskConical,
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center space-y-2 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E]">
            TECHNOLOGY AREAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#153A6B] tracking-tight">
            Deep tech, built in India
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#FF6F1E]/30 transition-all duration-200 flex flex-col justify-start group"
              >
                {/* Icon square with soft peach outline */}
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#FFEFE6] flex items-center justify-center text-[#FF6F1E] mb-5 group-hover:scale-110 group-hover:bg-[#FF6F1E] group-hover:text-white transition-all duration-200">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-[#153A6B] mb-2 group-hover:text-[#FF6F1E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
