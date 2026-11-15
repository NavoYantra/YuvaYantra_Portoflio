import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { COMPANY_INFO } from "@/data/websiteData";

export const metadata = {
  title: "Privacy Policy | YuvaYantra Technology Private Limited",
  description: "Official Privacy Policy of YuvaYantra Technology Pvt. Ltd. compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act) and IT Act 2000.",
};

export default function PrivacyPolicyPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1">
          {/* Header Banner */}
          <section className="bg-[#0B1E38] text-white py-14 sm:py-18 px-4 sm:px-8 relative overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-4">
              <div className="text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>{" "}
                / <span className="text-[#FF7043]">Legal</span> / <span>Privacy Policy</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722] block">
                COMPLIANCE &amp; DATA PROTECTION
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Privacy Policy &amp; Data Protection
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act),
                Information Technology Act, 2000, and Consumer Protection Rules.
              </p>
              <div className="text-xs text-slate-400 font-mono pt-1">
                Last updated: 15 February 2026 · Effective Date: 15 January 2025
              </div>
            </div>
          </section>

          {/* Core Content */}
          <section className="py-16 px-4 sm:px-8 bg-white">
            <div className="max-w-4xl mx-auto space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
              
              {/* Highlight Box: Strict Data Confidentiality Pledge */}
              <div className="rounded-2xl border-2 border-[#FF5722]/30 bg-orange-50/50 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-[#FF5722]">
                  <ShieldCheck className="w-7 h-7 shrink-0" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                    Strict Customer Data Confidentiality Guarantee
                  </h2>
                </div>
                <p className="text-slate-800 font-medium leading-relaxed">
                  <strong>YuvaYantra Technology Private Limited</strong> collects client and customer
                  inquiries strictly through direct email communications (
                  <a href={`mailto:${COMPANY_INFO.emailOfficial}`} className="text-[#FF5722] underline">
                    {COMPANY_INFO.emailOfficial}
                  </a>
                  ) and our official website forms.
                </p>
                <div className="p-4 rounded-xl bg-white border border-orange-200 text-xs sm:text-sm text-slate-700 space-y-2">
                  <p className="font-bold text-[#0B2545]">Our Uncompromising Commitment:</p>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>Your submitted data remains exclusively within our secure, encrypted corporate environment.</li>
                    <li><strong>We DO NOT sell, rent, trade, lease, or share your personal, institutional, or contact data with any third-party marketing agencies, advertisers, or external brokers under any circumstances.</strong></li>
                    <li>All information collected is used solely and strictly to respond to your technical requirements, issue quotations, execute project orders, provide teacher/student training, and maintain legitimate ongoing or future professional collaborations.</li>
                  </ul>
                </div>
              </div>

              {/* Section 1: Corporate Entity Information */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#0B2545]">1. Corporate Identity &amp; Data Fiduciary</h3>
                <p>
                  This Privacy Policy applies to <strong>{COMPANY_INFO.legalName}</strong> (hereinafter referred to as &ldquo;YuvaYantra&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), including our educational division <strong>{COMPANY_INFO.educationBrand}</strong>. Under the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act, 2023)</strong>, YuvaYantra operates as the Data Fiduciary for all personal data collected through this website (<code>yuvayantra.com</code>) and its sub-domains.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs space-y-1 text-slate-800">
                  <p><strong>Legal Entity:</strong> {COMPANY_INFO.legalName}</p>
                  <p><strong>CIN:</strong> {COMPANY_INFO.cin}</p>
                  <p><strong>GSTIN:</strong> {COMPANY_INFO.gstin}</p>
                  <p><strong>Registered Office:</strong> {COMPANY_INFO.address}</p>
                  <p><strong>Official Contact:</strong> {COMPANY_INFO.emailOfficial} | {COMPANY_INFO.phone1}</p>
                </div>
              </div>

              {/* Section 2: Data We Collect */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#0B2545]">2. Personal Data We Collect</h3>
                <p>We believe in strict data minimization. We only collect the minimal personal information voluntarily provided by you when requesting a quotation, booking a lab consultation, ordering STEM kits, or applying for job openings:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-2">
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-[#0B2545] block">Contact Details:</strong>
                    Name, email address, contact phone number / WhatsApp number.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-[#0B2545] block">Institutional Details:</strong>
                    School name, college, university, company name, and designation.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-[#0B2545] block">Project Requirements:</strong>
                    Lab type, kit quantities, automation specifications, and messages.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-[#0B2545] block">Career Applications:</strong>
                    Resume / CV, educational qualifications, and portfolio links.
                  </li>
                </ul>
              </div>

              {/* Section 3: Legal Basis & Purpose */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#0B2545]">3. Purpose of Processing &amp; Lawful Basis</h3>
                <p>Under Section 4 and Section 6 of the DPDP Act 2023, data is processed lawfully based on your explicit consent and legitimate use for:</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>Responding to Enquiries:</strong> Answering queries about STEM kits, lab setups, robotics workshops, and industrial automation.</li>
                  <li><strong>Fulfilling Orders &amp; Contracts:</strong> Preparing commercial quotations, dispatching kits, lab installations, and Annual Maintenance Contracts (AMC).</li>
                  <li><strong>Statutory Compliance:</strong> Generating tax invoices, GST filings, and complying with Ministry of Corporate Affairs (MCA) regulations.</li>
                  <li><strong>Direct Communications:</strong> Reaching out regarding updates, warranty status, and future technical requirements directly requested by you.</li>
                </ol>
              </div>

              {/* Section 4: Data Storage, Retention & Security */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#0B2545]">4. Security Standards &amp; Data Storage</h3>
                <p>
                  In accordance with Section 43A of the Information Technology Act, 2000 and the <em>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</em>:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <Lock className="w-5 h-5 text-[#FF5722]" />
                    <h4 className="text-xs font-bold text-[#0B2545] uppercase">Encryption</h4>
                    <p className="text-xs text-slate-600">All data transmissions are protected via industry-standard SSL/TLS 256-bit encryption.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <ShieldCheck className="w-5 h-5 text-[#FF5722]" />
                    <h4 className="text-xs font-bold text-[#0B2545] uppercase">Access Controls</h4>
                    <p className="text-xs text-slate-600">Only authorized directors and core engineers have controlled access to project files.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <FileText className="w-5 h-5 text-[#FF5722]" />
                    <h4 className="text-xs font-bold text-[#0B2545] uppercase">India-Based Retention</h4>
                    <p className="text-xs text-slate-600">Customer records are retained in compliance with Indian commercial law and discarded securely.</p>
                  </div>
                </div>
              </div>

              {/* Section 5: Rights of Data Principals */}
              <div className="space-y-4 border-b border-slate-100 pb-8">
                <h3 className="text-xl font-black text-[#0B2545]">5. Your Rights as a Data Principal (DPDP Act 2023)</h3>
                <p>Under the DPDP Act 2023, you hold the following statutory rights regarding your personal data:</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Right to Access:</strong> You may request a summary of personal data held by YuvaYantra.</p>
                  <p><strong>Right to Correction &amp; Erasure:</strong> You may request correction of inaccurate data or deletion of your records once the purpose of enquiry is fulfilled.</p>
                  <p><strong>Right of Grievance Redressal:</strong> You can submit any complaint regarding your data directly to our Grievance Officer.</p>
                  <p><strong>Right to Nominate:</strong> You have the right to nominate another individual in case of incapacity.</p>
                </div>
              </div>

              {/* Section 6: Grievance Officer Details */}
              <div className="space-y-4 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                  6. Statutory Grievance Redressal Officer
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  In compliance with Rule 5(9) of the Information Technology (SPDI) Rules, 2011 and Section 12 of the DPDP Act 2023, the details of our Grievance Officer are:
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
                  <p><strong>Name:</strong> Rohit Rathore</p>
                  <p><strong>Designation:</strong> Director &amp; Grievance Officer</p>
                  <p><strong>Company:</strong> {COMPANY_INFO.legalName}</p>
                  <p><strong>Address:</strong> {COMPANY_INFO.address}</p>
                  <p><strong>Direct Email:</strong> <a href={`mailto:${COMPANY_INFO.emailFounder}`} className="text-[#FF5722] underline">{COMPANY_INFO.emailFounder}</a></p>
                  <p><strong>Official Contact:</strong> <a href={`mailto:${COMPANY_INFO.emailOfficial}`} className="text-[#FF5722] underline">{COMPANY_INFO.emailOfficial}</a> | {COMPANY_INFO.phone1}</p>
                  <p className="text-slate-500 text-xs pt-1">
                    Acknowledgment within 48 hours; resolution within 30 days of grievance receipt.
                  </p>
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
