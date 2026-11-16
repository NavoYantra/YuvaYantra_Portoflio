"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ShoppingCart,
  Send,
  HelpCircle,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { COMPANY_INFO, FAQS_DATA } from "@/data/websiteData";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    orgName: "",
    email: "",
    phone: "",
    interestedIn: "Lab setup (STEM / Robotics / AI / IoT / ATL)",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/enquiry-received");
    }, 700);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1">
          {/* Header Banner */}
          <section className="bg-[#102A4E] text-white py-16 sm:py-20 px-4 sm:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-4">
              <div className="text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>{" "}
                / <span className="text-[#FF8742]">Contact</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E] block">
                CONTACT
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
                Let’s build the future, <br />
                together
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Planning a lab, a workshop or an industrial project? Tell us
                what you need and we’ll get back to you.
              </p>
            </div>
          </section>

          {/* Form + Contact Cards */}
          <section className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Form */}
              <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#153A6B]">
                    Send us an enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    We usually reply within one working day.
                  </p>
                </div>

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
                        className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F1E]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        School / Company *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Organisation name"
                        value={formData.orgName}
                        onChange={(e) =>
                          setFormData({ ...formData, orgName: e.target.value })
                        }
                        className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F1E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F1E]"
                      />
                    </div>
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
                        className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F1E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      I’m interested in
                    </label>
                    <select
                      value={formData.interestedIn}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          interestedIn: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F1E] bg-white text-slate-800"
                    >
                      <option value="Lab setup (STEM / Robotics / AI / IoT / ATL)">
                        Lab setup (STEM / Robotics / AI / IoT / ATL)
                      </option>
                      <option value="STEM Kits Bulk Purchase">
                        STEM Kits Bulk Purchase
                      </option>
                      <option value="Industrial Automation Services">
                        Industrial Automation Services
                      </option>
                      <option value="PCB Design & Custom Prototyping">
                        PCB Design &amp; Custom Prototyping
                      </option>
                      <option value="Drone Systems & Training">
                        Drone Systems &amp; Training
                      </option>
                      <option value="Teacher Training & Student Workshops">
                        Teacher Training &amp; Student Workshops
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your requirement..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F1E] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-3 bg-[#FF6F1E] hover:bg-[#F45B0A] text-white font-bold text-sm rounded-xl shadow-md transition cursor-pointer flex items-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: 4 Contact Cards */}
              <div className="lg:col-span-5 space-y-4">
                {/* Office */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8F5] text-[#FF6F1E] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      OFFICE
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#153A6B] leading-relaxed mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Call / WhatsApp */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8F5] text-[#FF6F1E] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      CALL / WHATSAPP
                    </span>
                    <div className="text-xs sm:text-sm font-semibold text-[#153A6B] mt-0.5 space-y-0.5">
                      <p>
                        <a href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, "")}`}>
                          {COMPANY_INFO.phone1}
                        </a>
                      </p>
                      <p>
                        <a href={`tel:${COMPANY_INFO.phone2.replace(/\s+/g, "")}`}>
                          {COMPANY_INFO.phone2}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8F5] text-[#FF6F1E] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      EMAIL
                    </span>
                    <div className="text-xs sm:text-sm font-semibold text-[#153A6B] mt-0.5 space-y-0.5">
                      <p>
                        <a href={`mailto:${COMPANY_INFO.emailOfficial}`}>
                          {COMPANY_INFO.emailOfficial}
                        </a>
                      </p>
                      <p>
                        <a href={`mailto:${COMPANY_INFO.emailFounder}`}>
                          {COMPANY_INFO.emailFounder}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Online Store */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8F5] text-[#FF6F1E] flex items-center justify-center shrink-0 mt-0.5">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      ONLINE STORE
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#FF6F1E] mt-0.5">
                      <a
                        href={COMPANY_INFO.shopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        <span>shop.navoyantra.com</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Google Map Embed Card */}
          <section className="px-4 sm:px-8 pb-16">
            <div className="max-w-7xl mx-auto rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
              <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-[#153A6B] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FF6F1E]" />
                  <span>Google Map Embed: Naveen Shahdara, Delhi Office</span>
                </span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    COMPANY_INFO.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF6F1E] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative w-full h-80 sm:h-96 bg-slate-100">
                <iframe
                  title="YuvaYantra Technology Pvt. Ltd. Location Map"
                  src="https://maps.google.com/maps?q=YuvaYantra%20Technology%2C%201%2F10726-A%2C%20KH%20No.%201622%2F62%2C%20Gali%20No.%202%2C%20Subhash%20Park%2C%20Naveen%20Shahdara%2C%20Delhi%20110032&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* FAQ Section: Common Questions */}
          <section className="py-20 px-4 sm:px-8 bg-slate-50 border-t border-slate-100">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E]">
                  FAQ
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#153A6B] tracking-tight">
                  Common questions
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS_DATA.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span className="text-sm sm:text-base font-bold text-[#153A6B]">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#FF6F1E]" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
