import React from "react";

export const HowWeWork: React.FC = () => {
  const steps = [
    { num: "01", title: "Consultation & site visit", color: "orange" },
    { num: "02", title: "Custom lab design", color: "navy" },
    { num: "03", title: "Manufacturing & supply", color: "orange" },
    { num: "04", title: "Installation", color: "navy" },
    { num: "05", title: "Curriculum & manuals", color: "orange" },
    { num: "06", title: "Teacher training", color: "navy" },
    { num: "07", title: "Support & AMC", color: "orange" },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center space-y-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E]">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#153A6B] tracking-tight">
            Seven steps to a working lab
          </h2>
        </div>

        {/* Desktop Horizontal Process Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-6 left-12 right-12 h-0.5 bg-slate-200 z-0" />

          <div className="relative z-10 grid grid-cols-7 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-md transition-transform duration-200 group-hover:scale-110 ${
                    step.color === "orange"
                      ? "bg-[#FF6F1E] text-white"
                      : "bg-[#153A6B] text-white"
                  }`}
                >
                  {step.num}
                </div>
                <h3 className="mt-4 text-xs font-bold text-[#153A6B] leading-snug px-1">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical / Staggered Grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/80 shadow-sm"
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ${
                  step.color === "orange"
                    ? "bg-[#FF6F1E] text-white"
                    : "bg-[#153A6B] text-white"
                }`}
              >
                {step.num}
              </div>
              <h3 className="text-sm font-bold text-[#153A6B]">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
