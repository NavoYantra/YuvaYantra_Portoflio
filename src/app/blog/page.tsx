"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Send,
  CheckCircle,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { BLOG_POSTS } from "@/data/websiteData";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const categories = [
    "All",
    "News",
    "STEM Education",
    "Lab Guides",
    "Industry",
    "Projects",
  ];

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.filter((p) => p.id !== featuredPost.id);

  const filteredPosts =
    selectedCategory === "All"
      ? otherPosts
      : otherPosts.filter((p) => p.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
  };

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
                / <span className="text-[#FF7043]">Blog &amp; News</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5722] block">
                BLOG &amp; NEWS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
                Ideas, guides and updates
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Lab guides for schools, STEM project ideas, industry insights
                and news from YuvaYantra and NavoYantra.
              </p>
            </div>
          </section>

          {/* Main Blog Body */}
          <section className="py-20 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#0B2545] text-white shadow"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Featured Post Card (Exact Design from PDF) */}
              {selectedCategory === "All" && (
                <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-[#FF5722]/50 hover:shadow-xl transition-all duration-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 group shadow-sm">
                    {featuredPost.image ? (
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center p-6 text-center space-y-2">
                        <BookOpen className="w-10 h-10 text-slate-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {featuredPost.title}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5722]">
                      <span>{featuredPost.category}</span>
                      <span>•</span>
                      <span className="text-slate-500 font-normal">
                        {featuredPost.date} · {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] leading-snug">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {featuredPost.summary}
                    </p>

                    <div className="pt-2">
                      <button className="px-6 py-3 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-sm rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Articles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-[#FF5722]/50 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Article Image */}
                      <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-50 border border-slate-200">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                            <BookOpen className="w-6 h-6 text-slate-400 group-hover:text-[#FF5722] mb-1" />
                            <span className="text-xs font-semibold text-slate-400">
                              {post.title}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-bold tracking-wider uppercase mb-1">
                        <span className="text-[#FF5722]">{post.category}</span>
                        <span className="text-slate-400 font-normal">
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#0B2545] group-hover:text-[#FF5722] transition-colors leading-snug mb-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] group-hover:text-[#FF5722] group-hover:translate-x-1 transition-all cursor-pointer">
                        <span>Read more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 pt-8">
                <span className="w-9 h-9 rounded-xl bg-[#0B2545] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <button className="w-9 h-9 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center justify-center cursor-pointer">
                  2
                </button>
                <button className="w-9 h-9 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center justify-center cursor-pointer">
                  3
                </button>
                <button className="px-3 h-9 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center justify-center gap-1 cursor-pointer">
                  <span>Next</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Newsletter Box (Exact Design from PDF page 21) */}
              <div className="rounded-3xl bg-[#0B1E38] text-white p-8 sm:p-10 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FF7043]">
                      NEWSLETTER
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug text-white">
                      Get STEM ideas and lab guides in your inbox
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm">
                      One email a month. No spam.
                    </p>
                  </div>

                  <div className="lg:col-span-6">
                    {newsletterSuccess ? (
                      <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span>
                          Thank you for subscribing! You’ll receive our monthly
                          STEM insights.
                        </span>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleSubscribe}
                        className="flex flex-col sm:flex-row items-center gap-3"
                      >
                        <input
                          type="email"
                          required
                          placeholder="Your email address"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                        />
                        <button
                          type="submit"
                          className="w-full sm:w-auto px-7 py-3 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-sm rounded-xl shadow transition cursor-pointer flex items-center justify-center gap-2 shrink-0"
                        >
                          <span>Subscribe</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    )}
                  </div>
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
