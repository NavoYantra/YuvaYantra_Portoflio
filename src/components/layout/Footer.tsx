import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  Scale,
  Lock,
  FileText,
} from "lucide-react";
import { YuvaYantraLogo } from "../common/BrandLogos";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "../common/SocialIcons";
import { COMPANY_INFO } from "@/data/websiteData";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#102A4E] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Grid: 5 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info & Mission (Col 1: Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Same Main Logo as Header (White-text variant for Navy Background) */}
            <div className="h-11 flex items-center">
              <YuvaYantraLogo variant="light" />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Robotics, AI, IoT, drones and industrial automation, designed and
              made in India. Our education brand{" "}
              <span className="text-[#FF8742] font-semibold">NavoYantra</span>{" "}
              brings STEM kits and labs to schools and colleges.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-slate-300 hover:text-[#FF6F1E] hover:border-[#FF6F1E] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-slate-300 hover:text-[#FF6F1E] hover:border-[#FF6F1E] transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-slate-300 hover:text-[#FF6F1E] hover:border-[#FF6F1E] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links (Col 2: Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog &amp; News
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links (Col 3: Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/solutions#labs" className="hover:text-white transition-colors">
                  Lab Setup
                </Link>
              </li>
              <li>
                <Link href="/solutions#kits" className="hover:text-white transition-colors">
                  STEM Kits
                </Link>
              </li>
              <li>
                <Link href="/industry#automation" className="hover:text-white transition-colors">
                  Industrial Automation
                </Link>
              </li>
              <li>
                <Link href="/industry#pcb" className="hover:text-white transition-colors">
                  PCB &amp; Product R&amp;D
                </Link>
              </li>
              <li>
                <Link href="/solutions#support" className="hover:text-white transition-colors">
                  Training &amp; AMC
                </Link>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#FF8742] hover:underline"
                >
                  <span>Shop NavoYantra</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Links (Col 4: Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#FF8742]" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-[#FF8742]" />
                  <span>Terms &amp; Conditions</span>
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#FF8742]" />
                  <span>Cookie Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy#grievance" className="hover:text-white transition-colors">
                  Grievance Officer
                </Link>
              </li>
              <li>
                <span className="text-[11px] text-emerald-400 font-semibold block pt-1">
                  ✓ DPDP Act 2023 Ready
                </span>
              </li>
            </ul>
          </div>

          {/* Get in touch (Col 5: Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Get in touch
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6F1E] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs">
                  {COMPANY_INFO.address}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6F1E] shrink-0 mt-0.5" />
                <div className="text-xs leading-tight space-y-1">
                  <p>
                    <a href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, "")}`} className="hover:text-white">
                      {COMPANY_INFO.phone1}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${COMPANY_INFO.phone2.replace(/\s+/g, "")}`} className="hover:text-white">
                      {COMPANY_INFO.phone2}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6F1E] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.emailOfficial}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {COMPANY_INFO.emailOfficial}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Statutory Disclosures & Compliance Box (MCA Companies Act & IT Act Mandatory) */}
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white tracking-wide uppercase text-[11px]">
                Statutory Corporate Disclosures &amp; Compliance (MCA &amp; IT Act)
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-300">
              <span className="px-2 py-0.5 rounded bg-white/10">DPIIT Startup India</span>
              <span className="px-2 py-0.5 rounded bg-white/10">MSME Udyam</span>
              <span className="px-2 py-0.5 rounded bg-white/10">GeM OEM Seller</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[11px]">
            <div>
              <span className="text-slate-400 block">Corporate Name:</span>
              <span className="font-semibold text-white">{COMPANY_INFO.legalName}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Corporate ID (CIN):</span>
              <span className="font-mono font-semibold text-white">{COMPANY_INFO.cin}</span>
            </div>
            <div>
              <span className="text-slate-400 block">GSTIN:</span>
              <span className="font-mono font-semibold text-white">{COMPANY_INFO.gstin}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Nodal Grievance Officer:</span>
              <span className="text-white font-medium">
                {COMPANY_INFO.grievanceOfficer.name} (
                <a href={`mailto:${COMPANY_INFO.grievanceOfficer.email}`} className="text-[#FF8742] underline">
                  {COMPANY_INFO.grievanceOfficer.email}
                </a>
                )
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed border-t border-white/5 pt-2">
            <strong>Customer Data Privacy Pledge:</strong> In strict compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology (SPDI) Rules, 2011, all client, school, and customer information gathered via website enquiries or direct correspondence is retained exclusively by YuvaYantra Technology Private Limited for executing technical requirements, project orders, and legitimate future work. We strictly guarantee that customer data is never shared, rented, or transferred to any third party.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {COMPANY_INFO.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition">Terms &amp; Conditions</Link>
            <span>•</span>
            <Link href="/cookie-policy" className="hover:text-white transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
