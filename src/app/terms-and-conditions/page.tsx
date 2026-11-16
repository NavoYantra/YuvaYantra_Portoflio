import React from "react";
import Link from "next/link";
import { Scale, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { COMPANY_INFO } from "@/data/websiteData";

export const metadata = {
  title: "Terms and Conditions | YuvaYantra Technology Private Limited",
  description: "Official Terms and Conditions for YuvaYantra Technology Pvt. Ltd. and education brand NavoYantra under Indian commercial and contract law.",
};

export default function TermsAndConditionsPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1">
          {/* Header Banner */}
          <section className="bg-[#102A4E] text-white py-14 sm:py-18 px-4 sm:px-8 relative overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-4">
              <div className="text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>{" "}
                / <span className="text-[#FF8742]">Legal</span> / <span>Terms &amp; Conditions</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6F1E] block">
                LEGAL AGREEMENT &amp; USER TERMS
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Terms &amp; Conditions
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Governing the supply of STEM kits, laboratory installations, industrial engineering services,
                and digital interactions with YuvaYantra Technology Private Limited.
              </p>
              <div className="text-xs text-slate-400 font-mono pt-1">
                Last updated: 15 February 2026 · Jurisdiction: Delhi, India
              </div>
            </div>
          </section>

          {/* Terms Content */}
          <section className="py-16 px-4 sm:px-8 bg-white">
            <div className="max-w-4xl mx-auto space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
              
              {/* Introduction Box */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h2 className="text-lg font-bold text-[#153A6B]">
                  1. Acceptance of Terms &amp; Company Disclosures
                </h2>
                <p>
                  These Terms and Conditions constitute a legally binding agreement made between you (whether personally or on behalf of an institution/entity, &ldquo;Client&rdquo;, &ldquo;Institution&rdquo;, or &ldquo;User&rdquo;) and <strong>{COMPANY_INFO.legalName}</strong> (CIN: <code>{COMPANY_INFO.cin}</code>), having its registered office at <strong>{COMPANY_INFO.address}</strong>.
                </p>
                <p className="text-xs text-slate-600">
                  By browsing this website, requesting quotations, ordering kits via <code>shop.navoyantra.com</code>, or entering into institutional service agreements, you acknowledge having read, understood, and agreed to be bound by these Terms and our Privacy Policy.
                </p>
              </div>

              {/* 2. Products, Kits and Lab Solutions */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#153A6B]">
                  2. Supply of Educational Kits &amp; Lab Infrastructure
                </h3>
                <p>
                  YuvaYantra designs and manufactures educational hardware through brand <strong>NavoYantra</strong>, as well as customized industrial automation solutions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  <li><strong>Turnkey Lab Installations:</strong> Atal Tinkering Labs (ATL), STEM/STEAM Labs, Robotics, AI, IoT, and Drone Labs are executed per official Purchase Orders (PO) or Work Orders, including physical furniture, equipment supply, curriculum, and faculty enablement.</li>
                  <li><strong>Product Specifications:</strong> Hardware components, microcontrollers, sensor modules, and chassis designs adhere to strict Make in India engineering standards. Minor technical improvements may be made to enhance durability without diminishing performance.</li>
                  <li><strong>Safety &amp; Compliance:</strong> Educational kits operate on low-voltage DC power (3.3V–12V). Students must use robotic tools and soldering stations under trained instructor supervision.</li>
                </ul>
              </div>

              {/* 3. Intellectual Property Rights */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#153A6B]">
                  3. Proprietary Rights &amp; Trademark Protection
                </h3>
                <p>
                  All proprietary content, source code, designs, 3D models, PCB schematics, instructional lab manuals, videos, and trademarks—including <strong>YuvaYantra™</strong>, <strong>NavoYantra™</strong>, and <strong>YuvaBot™</strong>—are the sole intellectual property of <strong>{COMPANY_INFO.legalName}</strong>.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Purchasing kits or lab packages grants the client a non-exclusive license to use the accompanying learning material for educational purposes within the purchasing institution. Reverse-engineering, commercial resale, or unauthorized duplication of courseware is strictly prohibited under Indian Copyright and Patent Laws.
                </p>
              </div>

              {/* 4. Pricing, Invoicing & Taxes */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#153A6B]">
                  4. Commercial Terms, GST &amp; Invoicing
                </h3>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>All institutional orders are billed under official Tax Invoices bearing our GSTIN: <code>{COMPANY_INFO.gstin}</code>.</li>
                  <li>Government tenders and GeM (Government e-Marketplace) procurements are executed in accordance with General Financial Rules (GFR) and GeM contractual SLAs.</li>
                  <li>Payment terms for institutional lab setups are structured on milestones agreed in the commercial contract (e.g., advance, delivery, and post-installation sign-off).</li>
                </ul>
              </div>

              {/* 5. Warranty & Maintenance (AMC) */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#153A6B]">
                  5. Warranty, Repairs &amp; Annual Maintenance Contract (AMC)
                </h3>
                <p>
                  We stand firmly behind our engineering quality:
                </p>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  <li><strong>Hardware Warranty:</strong> Standard 6 to 12 months manufacturer warranty against manufacturing defects on core electronic controllers and sensor boards.</li>
                  <li><strong>Exclusions:</strong> Warranty does not cover physical breakage, liquid damage, improper reverse polarity power supply, or unauthorized modifications.</li>
                  <li><strong>AMC Support:</strong> Schools and colleges opting for AMC receive scheduled preventive maintenance, firmware upgrades, and on-call technician support.</li>
                </ul>
              </div>

              {/* 6. Limitation of Liability */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#153A6B]">
                  6. Limitation of Liability &amp; Force Majeure
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  To the maximum extent permitted by Indian Law, YuvaYantra Technology Private Limited shall not be liable for any indirect, incidental, or consequential damages resulting from improper hardware usage. Neither party shall be liable for delays caused by Force Majeure events, natural disasters, national supply chain disruptions, or government regulatory restrictions.
                </p>
              </div>

              {/* 7. Governing Law & Dispute Resolution */}
              <div className="space-y-4 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#153A6B]">
                  7. Governing Law &amp; Exclusive Jurisdiction
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  These Terms and any contractual agreements entered into with YuvaYantra Technology Private Limited shall be governed by and construed in accordance with the <strong>laws of the Republic of India</strong>. Any dispute, claim, or controversy arising out of or in connection with these terms shall be subject to the <strong>exclusive jurisdiction of the competent courts in Delhi, India</strong>.
                </p>
                <div className="pt-2 text-xs text-slate-500">
                  For legal inquiries or statutory questions, please contact:{" "}
                  <a href={`mailto:${COMPANY_INFO.emailOfficial}`} className="text-[#FF6F1E] font-semibold underline">
                    {COMPANY_INFO.emailOfficial}
                  </a>
                </div>
              </div>

            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
