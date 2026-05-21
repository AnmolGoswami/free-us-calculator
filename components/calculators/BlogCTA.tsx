"use client";
/**
 * BlogCTA — Drop this anywhere in your DoorDash tool page.
 *
 * It creates a bidirectional SEO link between tool page ↔ blog page,
 * signals topical authority to Google (two URLs covering the same topic
 * from different angles), and gives users a reason to visit the blog post.
 *
 * Usage in DoorDashPage (page.tsx):
 *   import BlogCTA from "@/components/calculators/BlogCTA";
 *   // Place after the STATS BAR section or before the FAQ section:
 *   <BlogCTA />
 */

import Link from "next/link";
import { ArrowRight, BookOpen, Clock, CheckCircle2 } from "lucide-react";

const BLOG_HIGHLIGHTS = [
  "Every IRS deduction DoorDash drivers can claim in 2026",
  "Step-by-step self-employment tax calculation",
  "The $2/mile filter that adds $3–$6/hr net",
  "DoorDash vs. Uber Eats — which pays more and when",
  "2026 quarterly tax deadlines (with exact dates)",
];

export default function BlogCTA() {
  return (
    <section className="py-16 px-4 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch">

            {/* Left: dark feature panel */}
            <div
              className="md:w-[52%] p-8 md:p-10 text-white flex flex-col justify-between"
              style={{ background: "linear-gradient(150deg,#060d1f 0%,#0c1e46 60%,#060d1f 100%)" }}
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                bg-blue-500/20 text-blue-300 text-[10px] font-black
                                uppercase tracking-widest mb-5">
                  <BookOpen size={11} />
                  Full Guide · 12 min read
                </div>

                <h2 className="text-xl md:text-2xl font-black leading-[1.2] mb-3">
                  The Complete DoorDash{" "}
                  <span className="text-blue-400">Earnings Guide</span>{" "}
                  for 2026
                </h2>

                <p className="text-slate-400 text-[13px] leading-relaxed mb-6">
                  The calculator shows your numbers. The guide explains why they are what
                  they are — and exactly how to improve them. Every IRS rule, deduction,
                  and strategy in one place.
                </p>

                <ul className="space-y-2.5 mb-8">
                  {BLOG_HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[12px] text-slate-300">
                      <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/blog/doordash-earnings-guide-2026"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                           bg-blue-600 hover:bg-blue-500 text-white font-black
                           text-[13px] transition-colors group w-fit"
              >
                Read the full guide
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* Right: quick preview cards */}
            <div className="md:w-[48%] bg-slate-50 p-8 md:p-10 flex flex-col gap-4">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-400 mb-1">
                What the guide covers
              </p>

              {[
                {
                  icon: <Clock size={14} />,
                  title: "Real earnings data",
                  desc: "Gridwise data from 115,771 Dashers — not marketing estimates.",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  icon: <CheckCircle2 size={14} />,
                  title: "Every 2026 tax deduction",
                  desc: "Phone, bags, parking, health insurance, qualified tips deduction.",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                },
                {
                  icon: <ArrowRight size={14} />,
                  title: "Strategies that add $3–$6/hr",
                  desc: "Order filtering, peak hours, multi-apping — backed by data.",
                  color: "text-violet-600",
                  bg: "bg-violet-50",
                },
              ].map((card) => (
                <Link
                  key={card.title}
                  href="/blog/doordash-earnings-guide-2026"
                  className="flex gap-3 rounded-xl bg-white border border-slate-200
                             p-4 hover:border-blue-200 hover:shadow-sm
                             transition-all group"
                >
                  <div className={`${card.bg} ${card.color} w-8 h-8 rounded-lg
                                   flex items-center justify-center flex-shrink-0`}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-[12px] mb-0.5">
                      {card.title}
                    </p>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <ArrowRight
                    size={13}
                    className="text-slate-300 flex-shrink-0 self-center ml-auto
                               group-hover:text-blue-400 group-hover:translate-x-0.5
                               transition-all"
                  />
                </Link>
              ))}

              <p className="text-[10px] text-slate-400 mt-1 text-center">
                Free · No sign-up · Updated May 2026
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}