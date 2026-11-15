"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  ShoppingCart,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  FileText,
} from "lucide-react";
import { YuvaYantraLogo } from "../common/BrandLogos";
import { QuoteModal } from "./QuoteModal";
import { COMPANY_INFO } from "@/data/websiteData";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industry", href: "/industry" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-white">
        {/* Top Notification / Contact Bar (Exact Design) */}
        <div className="bg-[#0B1E38] text-white text-xs py-2 px-4 sm:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Desktop contact info */}
            <div className="hidden sm:flex items-center gap-6 text-slate-300">
              <a
                href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>{COMPANY_INFO.phone1}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.emailOfficial}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>{COMPANY_INFO.emailOfficial}</span>
              </a>
            </div>

            {/* Mobile simplified contact */}
            <div className="flex sm:hidden items-center gap-2 text-slate-300">
              <a
                href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, "")}`}
                className="flex items-center gap-1 hover:text-white"
              >
                <Phone className="w-3 h-3 text-[#FF5722]" />
                <span>{COMPANY_INFO.phone1}</span>
              </a>
            </div>

            {/* Shop & Catalog Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="/catalog.pdf"
                download="YuvaYantra-Catalog.pdf"
                className="hidden md:inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors text-[11px] font-medium bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10"
              >
                <FileText className="w-3 h-3 text-[#FF7043]" />
                <span>Catalog (PDF)</span>
              </a>
              <a
                href={COMPANY_INFO.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-medium text-slate-200 hover:text-orange-400 transition-colors"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-[#FF5722]" />
                <span className="hidden sm:inline">Shop STEM Kits:</span>
                <span className="font-semibold text-white underline underline-offset-2">
                  shop.navoyantra.com
                </span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full transition-all duration-200 border-b border-slate-100 ${
            scrolled ? "shadow-sm py-2.5 bg-white/95 backdrop-blur-md" : "py-3.5 bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
            {/* Brand Logo */}
            <YuvaYantraLogo />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-semibold transition-colors duration-150 py-1 ${
                      isActive
                        ? "text-[#0B2545] font-bold"
                        : "text-slate-600 hover:text-[#0B2545]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FF5722] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-5 py-2.5 bg-[#FF5722] hover:bg-[#E64A19] text-white text-sm font-bold rounded-lg shadow-sm hover:shadow transition-all duration-150 cursor-pointer"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-3 py-1.5 bg-[#FF5722] text-white text-xs font-bold rounded-md shadow-sm"
              >
                Quote
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#0B2545] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-3 pb-4 border-b border-slate-100">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-semibold py-2 px-3 rounded-lg flex items-center justify-between ${
                      isActive
                        ? "bg-orange-50 text-[#FF5722] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <ArrowRight className="w-4 h-4 text-[#FF5722]" />}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full py-3 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-center rounded-xl shadow cursor-pointer"
              >
                Get a Quote
              </button>

              <a
                href={COMPANY_INFO.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#0B1E38] text-white font-semibold text-center rounded-xl flex items-center justify-center gap-2 text-sm"
              >
                <ShoppingCart className="w-4 h-4 text-[#FF5722]" />
                <span>Shop on NavoYantra</span>
              </a>

              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p>📞 {COMPANY_INFO.phone1} · {COMPANY_INFO.phone2}</p>
                <p>✉️ {COMPANY_INFO.emailOfficial}</p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};
