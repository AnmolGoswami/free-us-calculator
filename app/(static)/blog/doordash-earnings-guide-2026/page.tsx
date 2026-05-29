import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Clock, DollarSign, Fuel, TrendingUp,
  ShieldCheck, AlertTriangle, CheckCircle2, Calculator,
  Calendar, ChevronRight, Zap, Car, Phone, Receipt,
  PiggyBank, Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Do DoorDash Drivers Make After Expenses in 2026? (Real Numbers)",
  description:
    "Real DoorDash earnings data for 2026 — not marketing fluff. Median gross $11.26/hr, take-home $8–$18/hr after gas, vehicle costs, and 15.3% self-employment tax. Includes every IRS deduction, quarterly tax deadline, and strategies top Dashers use to clear $20+/hr.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/blog/doordash-earnings-guide-2026",
  },
  keywords: [
    "how much do doordash drivers make after expenses 2026",
    "doordash driver take home pay after taxes",
    "doordash earnings after gas and taxes",
    "doordash real hourly rate 2026",
    "doordash irs mileage deduction 2026",
    "doordash self employment tax calculator",
    "doordash quarterly estimated taxes",
    "is doordash worth it after expenses",
    "doordash vs uber eats pay comparison 2026",
    "how to make more money doordash tips",
    "doordash schedule c deductions",
    "gig worker tax guide 2026",
    "doordash net pay after mileage deduction",
  ],
  openGraph: {
    title: "DoorDash Driver Earnings 2026: What You Actually Take Home",
    description:
      "Stop guessing. Median gross $11.26/hr, real take-home $8–$18/hr. Every deduction, tax deadline, and strategy laid out clearly — with real Gridwise data from 115,771 Dashers.",
    url: "https://www.freeuscalculator.in/blog/doordash-earnings-guide-2026",
    type: "article",
    publishedTime: "2026-01-15T00:00:00Z",
    modifiedTime: "2026-05-15T00:00:00Z",
    authors: ["Anmol Giri"],
    tags: ["DoorDash", "Gig Economy", "Taxes", "Earnings", "Side Hustle", "2026"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DoorDash Pay 2026: Real Numbers After Gas + Taxes",
    description:
      "Median gross $11.26/hr. Real net $8–$18/hr depending on how smart you work. Full breakdown: gas, IRS deduction, SE tax, and how top Dashers hit $20+/hr.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.freeuscalculator.in/blog" },
        {
          "@type": "ListItem", position: 3,
          name: "DoorDash Earnings Guide 2026",
          item: "https://www.freeuscalculator.in/blog/doordash-earnings-guide-2026",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How Much Do DoorDash Drivers Make After Expenses in 2026?",
      description:
        "Real earnings data from 115,771 Dashers tracked by Gridwise through 2025. Covers gross pay, net pay, IRS mileage deduction, self-employment tax, quarterly deadlines, and strategies used by top earners.",
      url: "https://www.freeuscalculator.in/blog/doordash-earnings-guide-2026",
      datePublished: "2026-01-15",
      dateModified: "2026-05-15",
      author: {
        "@type": "Person",
        name: "Anmol Giri",
        jobTitle: "Gig Economy Analyst",
        url: "https://www.freeuscalculator.in/about",
      },
      publisher: {
        "@type": "Organization",
        name: "Free US Calculator",
        url: "https://www.freeuscalculator.in",
        logo: { "@type": "ImageObject", url: "https://www.freeuscalculator.in/logo.png" },
      },
      mainEntityOfPage: "https://www.freeuscalculator.in/blog/doordash-earnings-guide-2026",
      relatedLink: "https://www.freeuscalculator.in/doordash-earnings-calculator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much do DoorDash drivers make per hour in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DoorDash drivers earn a median of $11.26 per hour gross, based on Gridwise data from 115,771 Dashers tracked through 2025. After fuel, vehicle wear, and self-employment tax, most drivers net $8–$18/hr in real spendable income.",
          },
        },
        {
          "@type": "Question",
          name: "How much should I set aside for taxes as a DoorDash driver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Set aside 25–28% of every DoorDash payout for taxes. This covers the 15.3% self-employment tax plus estimated federal income tax. Quarterly payments are due April 15, June 16, September 15, and January 15.",
          },
        },
        {
          "@type": "Question",
          name: "What is the IRS mileage deduction rate for DoorDash drivers in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The IRS standard mileage rate for 2026 is $0.725 per mile (IRS Rev. Proc. 2025-18). At 15,000 annual business miles this equals a $10,875 deduction — roughly $2,700–$3,000 in real tax savings.",
          },
        },
        {
          "@type": "Question",
          name: "Is DoorDash worth it in 2026 after gas and taxes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes for most drivers, with realistic expectations. Working 15–25 peak hours per week reliably produces $600–$1,200/month net. Full-time Dashers with multi-apping can net $2,200–$2,900/month.",
          },
        },
        {
          "@type": "Question",
          name: "What expenses can DoorDash drivers deduct on taxes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DoorDash drivers can deduct: IRS mileage at $0.725/mile, business-use percentage of phone and phone plan, insulated delivery bags, phone mounts, tolls and parking, mileage tracking app subscriptions, health insurance premiums, and up to $25,000 in qualifying tip income.",
          },
        },
      ],
    },
  ],
};

// ─── REUSABLE COMPONENTS ────────────────────────────────────────────────────

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight
                 text-slate-900 mt-14 mb-5 scroll-mt-8 leading-tight"
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-9 mb-3 leading-snug">
      {children}
    </h3>
  );
}

function Callout({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "success" | "tip";
  title: string;
  children: React.ReactNode;
}) {
  const styles = {
    info:    { bg: "bg-blue-50",    border: "border-blue-200",    icon: <ShieldCheck size={15} className="text-blue-600 flex-shrink-0" />,    titleC: "text-blue-900",    bodyC: "text-blue-800" },
    warning: { bg: "bg-amber-50",   border: "border-amber-200",   icon: <AlertTriangle size={15} className="text-amber-600 flex-shrink-0" />, titleC: "text-amber-900",   bodyC: "text-amber-800" },
    success: { bg: "bg-emerald-50", border: "border-emerald-200", icon: <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />,titleC: "text-emerald-900", bodyC: "text-emerald-800" },
    tip:     { bg: "bg-violet-50",  border: "border-violet-200",  icon: <Zap size={15} className="text-violet-600 flex-shrink-0" />,           titleC: "text-violet-900",  bodyC: "text-violet-800" },
  };
  const s = styles[type];
  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-6`}>
      <div className={`flex items-start gap-2 font-bold text-[13px] mb-2 ${s.titleC}`}>
        {s.icon}
        <span>{title}</span>
      </div>
      <div className={`text-[13px] leading-relaxed ${s.bodyC}`}>{children}</div>
    </div>
  );
}

function CalculatorCTA({ variant = "mid" }: { variant?: "mid" | "end" }) {
  const isEnd = variant === "end";
  return (
    <div
      className="relative rounded-2xl overflow-hidden my-10 p-6 sm:p-8"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #60a5fa 0%, transparent 60%)" }} />
      <div className={`relative flex flex-col gap-5 ${isEnd ? "items-center text-center" : "items-start"}`}>
        <div>
          <span className="inline-block text-[10px] font-black uppercase tracking-widest
                           text-blue-300 mb-2 bg-blue-900/40 px-2 py-1 rounded-md">
            Free Tool · No Signup
          </span>
          <p className="text-white font-extrabold text-lg leading-snug mb-2">
            {isEnd ? "What's your real take-home number?" : "Stop estimating — know your actual net pay"}
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            {isEnd
              ? "Enter your hours, orders, and miles. Get your real net hourly rate after gas, the IRS mileage deduction, and self-employment tax — in 30 seconds."
              : "Enter your hours, orders, and miles. Get your true net hourly rate, quarterly tax reserve, and full expense breakdown instantly."}
          </p>
        </div>
        <Link
          href="/doordash-earnings-calculator"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-blue-500 hover:bg-blue-400 active:bg-blue-600
                     text-white font-bold text-sm transition-all
                     shadow-lg shadow-blue-900/40 group w-full sm:w-auto justify-center"
        >
          <Calculator size={15} />
          Use Free Calculator
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

// ─── Responsive table: scrolls only on very small screens, cards on mobile ──

/** A key-value row table (label | value) — renders as stacked cards on mobile */
function KVTable({
  rows,
  highlightLast = false,
}: {
  rows: { label: string; value: string; sub?: string; highlight?: "blue" | "rose" | "green" | "subtle" }[];
  highlightLast?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden my-6 shadow-sm">
      {rows.map((r, i) => {
        const isLast = i === rows.length - 1 && highlightLast;
        const bg = isLast ? "bg-blue-50" : r.highlight === "subtle" ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60";
        const valC = r.highlight === "blue" || isLast ? "text-blue-700" : r.highlight === "rose" ? "text-rose-600" : r.highlight === "green" ? "text-emerald-700" : "text-slate-900";
        return (
          <div key={i} className={`flex items-start justify-between gap-4 px-4 py-3 text-[13px] border-b border-slate-100 last:border-0 ${bg} ${isLast ? "font-black" : ""}`}>
            <span className="text-slate-700 leading-snug">{r.label}</span>
            <div className="text-right flex-shrink-0">
              <span className={`font-bold tabular-nums ${valC}`}>{r.value}</span>
              {r.sub && <span className="block text-[10px] text-slate-400">{r.sub}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Full data table — on mobile becomes scrollable with a scroll hint */
function DataTable({
  headers,
  rows,
  highlightRow,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  highlightRow?: number;
}) {
  return (
    <div className="my-6 -mx-1">
      {/* Mobile: scrollable with hint */}
      <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px] sm:text-[13px]" style={{ minWidth: "100%" }}>
            <thead>
              <tr className="bg-slate-950 text-white text-[9px] sm:text-[10px] uppercase tracking-widest">
                {headers.map((h, i) => (
                  <th key={i} className="px-3 sm:px-5 py-3 text-left font-black whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row, i) => (
                <tr key={i} className={
                  i === highlightRow ? "bg-blue-50" :
                  i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                }>
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 sm:px-5 py-2.5 sm:py-3 align-top">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const TOC = [
  { id: "real-numbers",      label: "The real hourly rate — gross vs. net" },
  { id: "pay-structure",     label: "How DoorDash actually pays you" },
  { id: "expense-breakdown", label: "Full expense breakdown" },
  { id: "mileage-deduction", label: "IRS mileage deduction: $0.725/mile" },
  { id: "taxes",             label: "Self-employment tax explained simply" },
  { id: "all-deductions",    label: "Every deduction you can claim" },
  { id: "peak-hours",        label: "When & where to dash for max pay" },
  { id: "strategies",        label: "Strategies top earners actually use" },
  { id: "vs-uber-eats",      label: "DoorDash vs. Uber Eats comparison" },
  { id: "worth-it",          label: "Is DoorDash worth it? By situation" },
  { id: "monthly-income",    label: "Realistic monthly income projections" },
  { id: "faq",               label: "Frequently asked questions" },
];

// ─── PAGE ───────────────────────────────────────────────────────────────────
export default function DoorDashEarningsGuidePage() {
  return (
    <main className="bg-white text-slate-800 min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#0f172a 0%,#1e3a5f 55%,#1d4ed8 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-14 md:pt-16 md:pb-22">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-7 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} className="text-slate-600" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={10} className="text-slate-600" />
            <span className="text-slate-300">DoorDash Earnings Guide 2026</span>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {["Gig Economy", "Tax Guide", "Updated May 2026"].map((tag) => (
              <span key={tag}
                className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1
                           rounded-md bg-white/10 text-blue-200 border border-white/10">
                {tag}
              </span>
            ))}
          </div>

          {/* H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-[1.15]
                         tracking-tight text-white mb-5 max-w-3xl">
            How Much Do DoorDash Drivers Make After Expenses in 2026?
          </h1>

          <p className="text-slate-300 text-[15px] md:text-lg leading-relaxed mb-7 max-w-2xl">
            DoorDash's ads say $18–$25/hr. The actual median across 115,771 Dashers is{" "}
            <strong className="text-white">$11.26/hr gross</strong> — and after gas, vehicle
            wear, and self-employment tax, most drivers keep{" "}
            <strong className="text-white">$8–$18/hr</strong> in real spendable money.
            This guide breaks down every number, every deduction, and exactly how top
            Dashers push that to $20+/hr.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {[
              { value: "$11.26/hr", label: "Median gross",        sub: "Gridwise 2025 data" },
              { value: "$8–$18/hr", label: "Real take-home net",  sub: "After all expenses" },
              { value: "$0.725/mi", label: "IRS mileage rate",    sub: "Rev. Proc. 2025-18" },
              { value: "15.3%",     label: "Self-employment tax", sub: "SS + Medicare" },
            ].map((s) => (
              <div key={s.value}
                className="rounded-xl bg-white/8 border border-white/10 backdrop-blur-sm p-3 sm:p-4 text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-none mb-1">
                  {s.value}
                </p>
                <p className="text-[10px] sm:text-[11px] font-semibold text-blue-200 leading-snug">{s.label}</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mt-7 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center
                              text-[9px] font-black text-white flex-shrink-0">AG</div>
              <span className="text-slate-300 font-medium">Anmol Giri</span>
              <span>· Gig Economy Analyst</span>
            </span>
            <span className="flex items-center gap-1"><Calendar size={11} /> May 15, 2026</span>
            <span className="flex items-center gap-1"><Clock size={11} /> 16 min read</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 size={11} /> IRS verified data
            </span>
          </div>
        </div>
      </section>

      {/* ── MAIN LAYOUT ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── ARTICLE ── */}
          <article className="flex-1 min-w-0 w-full text-[15px] leading-relaxed text-slate-700">

            {/* Table of Contents */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 mb-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                In This Guide — Jump to Any Section
              </p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {TOC.map((item, i) => (
                  <li key={item.id} className="flex items-start gap-2">
                    <span className="text-[10px] font-black text-blue-400 mt-0.5 w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a href={`#${item.id}`}
                      className="text-[13px] text-blue-600 hover:text-blue-800 hover:underline
                                 transition-colors leading-snug">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* ═══ SECTION 1 — REAL NUMBERS ═══ */}
            <SectionHeading id="real-numbers">
              The Real Hourly Rate: Gross vs. What You Actually Keep
            </SectionHeading>

            <p>
              Let's start with what nobody on DoorDash's website wants you to see. According
              to Gridwise — which tracked <strong>115,771 active Dashers</strong> through
              2025 — the median gross hourly rate is <strong>$11.26 per hour</strong>. Not
              $18. Not $25. Eleven dollars and change.
            </p>

            <p className="mt-4">
              The top earners are real too. The top 25% of Dashers gross $13.49+/hr, and
              the top 10% clear $15.63+/hr. But those people are working strategic hours,
              filtering orders aggressively, and tracking every mile. They are not the
              average person who opens the app and starts driving.
            </p>

            {/* Earnings distribution — responsive card grid on mobile */}
            <div className="not-prose my-7 space-y-2 sm:space-y-0 sm:rounded-2xl sm:border sm:border-slate-200 sm:shadow-sm sm:overflow-hidden">
              {/* Mobile cards */}
              <div className="grid grid-cols-1 gap-3 sm:hidden">
                {[
                  { pct: "Bottom 25%",    gross: "$7.80–$9.50", net: "$4–$6",    profile: "Off-peak, no order filtering" },
                  { pct: "Median (50th)", gross: "$11.26",       net: "$7–$12",   profile: "Average Dasher, mixed hours" },
                  { pct: "Top 25%",       gross: "$13.49+",      net: "$9–$15",   profile: "Peak hours, some filtering" },
                  { pct: "Top 10%",       gross: "$15.63+",      net: "$12–$20",  profile: "Strategic, multi-apping" },
                  { pct: "Top 5% (elite)",gross: "$18–$22+",     net: "$14–$22",  profile: "All strategies + hybrid" },
                ].map((r) => (
                  <div key={r.pct} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="font-extrabold text-slate-900 text-[13px] mb-2">{r.pct}</p>
                    <div className="flex gap-4 mb-1.5">
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wide">Gross/hr</p>
                        <p className="font-black text-blue-700 text-[14px]">{r.gross}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wide">Est. Net/hr</p>
                        <p className="font-black text-emerald-700 text-[14px]">{r.net}</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400">{r.profile}</p>
                  </div>
                ))}
              </div>
              {/* Desktop table */}
              <table className="hidden sm:table w-full text-[13px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                    <th className="px-5 py-3.5 text-left font-black">Dasher Percentile</th>
                    <th className="px-5 py-3.5 text-left font-black">Gross $/hr</th>
                    <th className="px-5 py-3.5 text-left font-black">Est. Net $/hr</th>
                    <th className="px-5 py-3.5 text-left font-black">Profile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Bottom 25%",     "$7.80–$9.50", "$4–$6",   "Off-peak, no order filtering"],
                    ["Median (50th)",  "$11.26",       "$7–$12",  "Average Dasher, mixed hours"],
                    ["Top 25%",        "$13.49+",      "$9–$15",  "Peak hours, some filtering"],
                    ["Top 10%",        "$15.63+",      "$12–$20", "Strategic, multi-apping, peak only"],
                    ["Top 5% (elite)", "$18–$22+",     "$14–$22", "All strategies + hybrid vehicle"],
                  ].map(([pct, gross, net, profile], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="px-5 py-3 font-bold text-slate-800">{pct}</td>
                      <td className="px-5 py-3 font-black text-blue-700 tabular-nums">{gross}</td>
                      <td className="px-5 py-3 font-semibold text-emerald-700 tabular-nums">{net}</td>
                      <td className="px-5 py-3 text-slate-400 text-[12px]">{profile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              The jump from $9/hr to $18/hr is not luck or a better market. It's three or
              four decisions applied every shift: which hours to work, which orders to
              accept, and whether you're tracking your miles.
            </p>

            <Callout type="warning" title="The number DoorDash shows you is not your real pay">
              Your DoorDash app shows gross earnings per delivery. It does not show your
              fuel cost, vehicle depreciation, or the 15.3% self-employment tax you owe
              in April. Drivers who don't account for these consistently earn less than
              minimum wage without realising it until tax season.
            </Callout>

            {/* ═══ SECTION 2 — PAY STRUCTURE ═══ */}
            <SectionHeading id="pay-structure">
              How DoorDash Actually Pays You (All Three Sources)
            </SectionHeading>

            <p>
              Every completed delivery pays you from three separate components. Understanding
              how each one works — and which one you control most — changes how you approach
              every shift.
            </p>

            <SubHeading>1. Base Pay ($2–$10+ per order)</SubHeading>
            <p>
              Base pay is DoorDash's guaranteed floor for each order, calculated from
              estimated delivery time, distance, and "desirability" — basically how many
              drivers have already passed on it. An unclaimed order gets its base pay bumped
              automatically over time. A long rural drive might start at $7–$10 base; a quick
              downtown hop could be $2–$3. Base pay alone won't make dashing profitable.
            </p>

            <SubHeading>2. Tips — 100% goes to you</SubHeading>
            <p>
              Tips are where real income comes from. DoorDash takes zero cut — 100% passes
              directly to you. The Gridwise median tip is <strong>$3.66 per delivery</strong>,
              roughly 49% of total order pay. This is also why experienced drivers treat a
              no-tip order as a red flag: the customer has already signalled what they intend
              to pay, and completing the delivery won't change that. DoorDash shows you the
              tip upfront — use that information.
            </p>

            <SubHeading>3. Peak Pay & Promotions ($1–$5 extra per order)</SubHeading>
            <p>
              When demand outpaces drivers in a zone, DoorDash adds Peak Pay on top of base.
              It stacks directly on tips — not averaged in. DoorDash also runs "Challenges"
              (complete X deliveries by Y time for a $20–$75 bonus). These are worth
              planning your schedule around when they align with your normal hours.
            </p>

            <Callout type="success" title="DoorDash doesn't take a commission from your earnings">
              Unlike Uber, which deducts a service fee from ride pay, DoorDash passes 100%
              of base pay and 100% of tips directly to you. Restaurants pay DoorDash a
              separate commission — that's the platform's business model. Your earnings are
              not reduced by it.
            </Callout>

            {/* ═══ SECTION 3 — EXPENSE BREAKDOWN ═══ */}
            <SectionHeading id="expense-breakdown">
              The Full Expense Breakdown: Where Gross Pay Becomes Net Pay
            </SectionHeading>

            <p>
              A Dasher working 30 hours per week grosses about $338 at the median rate.
              Here is what it actually costs to earn that money.
            </p>

            {/* Expense table — mobile cards */}
            <div className="not-prose my-7">
              <div className="grid grid-cols-1 gap-3 sm:hidden">
                {[
                  { label: "⛽ Fuel — gas sedan (28 MPG)", weekly: "$43–$57", annual: "$2,240–$2,960", note: "$3.50/gal avg" },
                  { label: "⛽ Fuel — hybrid (52 MPG)",    weekly: "$23–$31", annual: "$1,200–$1,600", note: "Best ROI upgrade" },
                  { label: "🔧 Oil changes + maintenance", weekly: "$14–$24", annual: "$730–$1,250",   note: "Every 3k–5k miles" },
                  { label: "📉 Vehicle depreciation",      weekly: "$48–$90", annual: "$2,500–$4,700", note: "Hidden — hits at sale" },
                  { label: "🛡️ Insurance rider",           weekly: "$10–$30", annual: "$120–$360",     note: "Required for coverage" },
                  { label: "📱 Phone plan (80% biz use)",  weekly: "$7–$12",  annual: "$84–$144",      note: "Deductible portion" },
                ].map((r) => (
                  <div key={r.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="font-semibold text-slate-800 text-[13px] mb-2">{r.label}</p>
                    <div className="flex gap-4">
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wide">Weekly</p>
                        <p className="font-bold text-rose-600 text-[13px]">{r.weekly}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wide">Annual</p>
                        <p className="font-semibold text-slate-600 text-[13px]">{r.annual}</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1.5">{r.note}</p>
                  </div>
                ))}
                <div className="rounded-xl bg-slate-900 text-white p-4">
                  <p className="font-black text-[13px]">Total (gas sedan)</p>
                  <div className="flex gap-4 mt-1">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wide">Weekly</p>
                      <p className="font-black text-rose-400">$122–$213</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wide">Annual</p>
                      <p className="font-black text-rose-400">$5,674–$9,414</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Desktop table */}
              <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                      <th className="px-5 py-3.5 text-left font-black">Expense</th>
                      <th className="px-5 py-3.5 text-left font-black">Weekly (400 mi)</th>
                      <th className="px-5 py-3.5 text-left font-black">Annual</th>
                      <th className="px-5 py-3.5 text-left font-black">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["⛽ Fuel — gas sedan (28 MPG)", "$43–$57",  "$2,240–$2,960", "$3.50/gal national avg"],
                      ["⛽ Fuel — hybrid (52 MPG)",    "$23–$31",  "$1,200–$1,600", "Best ROI upgrade"],
                      ["🔧 Oil changes + maintenance", "$14–$24",  "$730–$1,250",   "Every 3k–5k miles"],
                      ["📉 Vehicle depreciation",      "$48–$90",  "$2,500–$4,700", "Hidden — hits at sale"],
                      ["🛡️ Insurance rider",           "$10–$30",  "$120–$360",     "Required for coverage"],
                      ["📱 Phone plan (80% biz use)",  "$7–$12",   "$84–$144",      "Deductible portion"],
                    ].map(([expense, weekly, annual, note], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-5 py-3 font-semibold text-slate-800">{expense}</td>
                        <td className="px-5 py-3 font-bold text-rose-600 tabular-nums">{weekly}</td>
                        <td className="px-5 py-3 text-slate-600 tabular-nums">{annual}</td>
                        <td className="px-5 py-3 text-slate-400 text-[11px]">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-900 text-white">
                      <td className="px-5 py-3.5 font-black text-[12px]">Total (gas sedan)</td>
                      <td className="px-5 py-3.5 font-black text-rose-400 tabular-nums">$122–$213</td>
                      <td className="px-5 py-3.5 font-black text-rose-400 tabular-nums">$5,674–$9,414</td>
                      <td className="px-5 py-3.5 text-slate-400 text-[11px]">Before SE tax</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <Callout type="warning" title="Depreciation is the expense that never shows up in your app">
              Every 1,000 miles removes roughly $150–$200 from your car's resale value.
              At 20,000 annual delivery miles, that's $3,000–$4,000 quietly draining your
              net worth — until you try to sell. The 2026 IRS rate of{" "}
              <strong>$0.725/mile is designed to offset exactly this.</strong>
            </Callout>

            <SubHeading>Real-world net pay: one 30-hour week</SubHeading>
            <KVTable
              highlightLast
              rows={[
                { label: "Gross earnings (30 hrs × $11.26/hr)", value: "+$337.80", highlight: "green" },
                { label: "Fuel cost (400 miles, gas sedan)",     value: "−$50.00",  highlight: "rose" },
                { label: "Vehicle maintenance allocation",        value: "−$19.00",  highlight: "rose" },
                { label: "Depreciation (400 miles × $0.18)",     value: "−$72.00",  highlight: "rose" },
                { label: "Insurance rider (weekly)",              value: "−$8.75",   highlight: "rose" },
                { label: "Net before taxes",                      value: "$188.05" },
                { label: "Self-employment tax (15.3% × 92.35%)", value: "−$26.57",  highlight: "rose" },
                { label: "After-tax take-home",                   value: "$161.48" },
                { label: "Real hourly rate (÷ 30 hrs)",          value: "$5.38/hr", highlight: "blue" },
              ]}
            />

            <p>
              That's sobering — $5.38/hr. But this is a driver making no smart decisions:
              no order filtering, no peak hours, and not claiming the IRS mileage deduction.
              Fix those three things and the math changes completely.
            </p>

            <CalculatorCTA variant="mid" />

            {/* ═══ SECTION 4 — MILEAGE DEDUCTION ═══ */}
            <SectionHeading id="mileage-deduction">
              The IRS Mileage Deduction: $0.725/Mile in 2026
            </SectionHeading>

            <p>
              The IRS standard mileage rate for 2026 is <strong>$0.725 per mile</strong>,
              confirmed in IRS Revenue Procedure 2025-18. This single deduction bundles
              fuel, oil changes, tire wear, depreciation, and insurance — all in one number
              you claim on Schedule C. Multiply total business miles by $0.725 and that's
              your deduction — reducing taxable net profit dollar for dollar.
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3 my-7">
              {[
                { mi: "10,000 mi/yr", ded: "$7,250",  save: "~$2,000 saved", sub: "Part-time Dasher" },
                { mi: "15,000 mi/yr", ded: "$10,875", save: "~$3,000 saved", sub: "Regular part-time" },
                { mi: "20,000 mi/yr", ded: "$14,500", save: "~$4,000 saved", sub: "Full-time Dasher" },
              ].map((r) => (
                <div key={r.mi}
                  className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-center">
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">{r.sub}</p>
                  <p className="text-[13px] text-emerald-700 font-semibold mb-1">{r.mi}</p>
                  <p className="text-xl font-extrabold text-emerald-800 leading-none mb-1">{r.ded}</p>
                  <p className="text-[12px] text-emerald-600 font-bold">{r.save}</p>
                </div>
              ))}
            </div>

            <SubHeading>Which miles are deductible?</SubHeading>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                <p className="font-bold text-emerald-800 text-[12px] mb-3 flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> Deductible
                </p>
                <ul className="space-y-2 text-[12px] text-emerald-800">
                  {[
                    "Home → first pickup after accepting an order",
                    "Restaurant → customer (every delivery)",
                    "Between orders while logged in and active",
                    "Customer → next restaurant if you accept another",
                    "Business errands: mechanic, car wash, supply store",
                  ].map((t) => (
                    <li key={t} className="flex gap-2 items-start">
                      <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-rose-50 border border-rose-100 p-4">
                <p className="font-bold text-rose-800 text-[12px] mb-3 flex items-center gap-1.5">
                  <AlertTriangle size={13} /> Not Deductible
                </p>
                <ul className="space-y-2 text-[12px] text-rose-800">
                  {[
                    "Home → anywhere before you accept an order",
                    "Miles after you log off for the day",
                    "Personal trips mixed into a shift",
                    "Commuting to a staging area before dashing",
                    "Miles in a vehicle you don't own or lease",
                  ].map((t) => (
                    <li key={t} className="flex gap-2 items-start">
                      <span className="text-rose-400 font-bold flex-shrink-0 mt-0.5">✗</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <SubHeading>Best mileage tracking apps</SubHeading>
            <ul className="mt-3 space-y-2.5">
              {[
                { name: "Stride", cost: "Free", note: "Best for most Dashers. Automatic tracking, built-in tax deduction summary. Start it before you leave home." },
                { name: "Everlance", cost: "$8/month Pro", note: "Better for full-time or multi-app drivers. IRS audit-ready exports and vehicle cost tracking." },
                { name: "MileIQ", cost: "$5.99/month", note: "Clean UI, reliable auto-detection. Good if you're also tracking a separate business." },
              ].map((app) => (
                <li key={app.name} className="flex gap-3 items-start bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Car size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-[13px]">
                      {app.name}{" "}
                      <span className="text-[11px] font-normal text-slate-400">— {app.cost}</span>
                    </p>
                    <p className="text-[12px] text-slate-600 mt-0.5">{app.note}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Callout type="tip" title="Pro tip: Accept your first order before leaving home">
              If you accept an order before leaving your driveway, the miles from home to
              the restaurant are deductible. If you drive to a hotspot first and then
              accept — those pre-acceptance miles are not deductible. One habit, potentially
              hundreds of extra deductible miles per year.
            </Callout>

            {/* ═══ SECTION 5 — TAXES ═══ */}
            <SectionHeading id="taxes">
              Self-Employment Tax: The 15.3% Most New Dashers Forget
            </SectionHeading>

            <p>
              At a regular job your employer pays half your Social Security and Medicare.
              As an independent contractor you pay both halves yourself — that's the
              15.3% self-employment tax applied to your net profit before income tax.
              The good news: you deduct half of it from taxable income, and the mileage
              deduction directly reduces the SE tax base.
            </p>

            <SubHeading>Full tax calculation on $25,000 gross earnings</SubHeading>
            <KVTable
              rows={[
                { label: "Gross DoorDash earnings",                  value: "$25,000" },
                { label: "Mileage deduction (15,000 mi × $0.725)",   value: "−$10,875", highlight: "rose" },
                { label: "Other deductions (phone, bags, etc.)",      value: "−$900",    highlight: "rose" },
                { label: "Net profit for SE tax",                     value: "$13,225",  highlight: "subtle" },
                { label: "SE tax base (× 92.35%)",                   value: "$12,209" },
                { label: "SE tax owed (× 15.3%)",                    value: "$1,868",   highlight: "rose" },
                { label: "Deduct half of SE tax from income",         value: "−$934",    highlight: "rose" },
                { label: "Adjusted gross income",                     value: "$12,291" },
                { label: "Standard deduction ($15,000)",              value: "−$15,000", highlight: "rose" },
                { label: "Taxable income",                            value: "$0 (below deduction!)" },
                { label: "Federal income tax",                        value: "$0" },
                { label: "Total tax bill (SE only)",                  value: "~$1,868",  highlight: "blue" },
                { label: "Effective rate on gross earnings",          value: "~7.5%",    highlight: "blue" },
              ]}
            />

            <Callout type="info" title="New for 2026: Qualified Tips Deduction (up to $25,000)">
              Starting tax year 2025 (filed 2026) and confirmed through 2028, delivery
              workers can deduct up to <strong>$25,000 in qualifying tip income</strong> from
              federal taxable income. A Dasher earning $8,000 in tips saves roughly $2,400
              in taxes at a 30% combined rate. Most tax guides haven't updated for this yet
              — make sure yours has.
            </Callout>

            <SubHeading>2026 Quarterly Tax Deadlines</SubHeading>

            {/* Quarterly tax — mobile cards */}
            <div className="not-prose my-5">
              <div className="grid grid-cols-1 sm:hidden gap-3">
                {[
                  { q: "Q1 2026", period: "January – March",       due: "April 15, 2026",    status: "past" },
                  { q: "Q2 2026", period: "April – May",           due: "June 16, 2026",     status: "upcoming" },
                  { q: "Q3 2026", period: "June – August",         due: "September 15, 2026",status: "future" },
                  { q: "Q4 2026", period: "September – December",  due: "January 15, 2027",  status: "future" },
                ].map((r) => (
                  <div key={r.q} className="rounded-xl border border-slate-200 bg-white p-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-slate-900 text-[13px]">{r.q}</p>
                      <p className="text-[12px] text-slate-500">{r.period}</p>
                      <p className="font-bold text-blue-700 text-[13px] mt-1">{r.due}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex-shrink-0 mt-0.5
                      ${r.status === "past" ? "bg-slate-100 text-slate-500" :
                        r.status === "upcoming" ? "bg-amber-100 text-amber-700" :
                        "bg-blue-50 text-blue-600"}`}>
                      {r.status === "past" ? "Passed" : r.status === "upcoming" ? "⚡ Soon" : "Upcoming"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                      <th className="px-5 py-3.5 text-left font-black">Quarter</th>
                      <th className="px-5 py-3.5 text-left font-black">Income Covered</th>
                      <th className="px-5 py-3.5 text-left font-black">Due Date</th>
                      <th className="px-5 py-3.5 text-left font-black">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Q1 2026", "January – March",      "April 15, 2026",     "past"],
                      ["Q2 2026", "April – May",          "June 16, 2026",      "upcoming"],
                      ["Q3 2026", "June – August",        "September 15, 2026", "future"],
                      ["Q4 2026", "September – December", "January 15, 2027",   "future"],
                    ].map(([q, period, due, status], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-5 py-3 font-bold text-slate-800">{q}</td>
                        <td className="px-5 py-3 text-slate-600">{period}</td>
                        <td className="px-5 py-3 font-bold text-blue-700">{due}</td>
                        <td className="px-5 py-3">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full
                            ${status === "past" ? "bg-slate-100 text-slate-500" :
                              status === "upcoming" ? "bg-amber-100 text-amber-700" :
                              "bg-blue-50 text-blue-600"}`}>
                            {status === "past" ? "Passed" : status === "upcoming" ? "⚡ Coming up" : "Upcoming"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Callout type="tip" title="The 26% rule: set it aside automatically">
              Set aside 26% of every single DoorDash payout into a separate savings
              account on the day the payment hits. Treat it as if the money doesn't
              exist. This one habit eliminates almost all the tax-season anxiety that
              new Dashers experience.
            </Callout>

            {/* ═══ SECTION 6 — ALL DEDUCTIONS ═══ */}
            <SectionHeading id="all-deductions">
              Every Deduction DoorDash Drivers Can Claim in 2026
            </SectionHeading>

            <p>
              Most drivers leave $1,500–$4,000 in unclaimed deductions every year — not
              because they don't exist, but because nobody told them to track from day one.
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-7">
              {[
                { icon: <Car size={14} />,      title: "IRS Mileage ($0.725/mile)", body: "Your biggest deduction. Covers fuel, maintenance, and depreciation in one rate. Track every business mile with a dedicated app." },
                { icon: <Phone size={14} />,    title: "Phone & Plan (business %)", body: "Deduct 75–90% of your phone and monthly plan. Active Dashers commonly use 80–90% business-use percentage." },
                { icon: <Receipt size={14} />,  title: "Delivery Bags & Equipment", body: "Insulated bags, phone mounts, car chargers, and other delivery gear are 100% deductible." },
                { icon: <Target size={14} />,   title: "Tolls & Parking",           body: "Every toll and parking fee paid during a delivery is fully deductible. Keep timestamped screenshots from your app." },
                { icon: <DollarSign size={14} />, title: "App Subscriptions",       body: "Stride, Everlance, QuickBooks Self-Employed — any app for tracking earnings or expenses is deductible." },
                { icon: <ShieldCheck size={14} />, title: "Health Insurance Premiums", body: "If you're self-employed and pay your own health insurance, premiums are deductible from gross income." },
                { icon: <Zap size={14} />,      title: "Qualified Tips Deduction",  body: "New for 2026: deduct up to $25,000 in qualifying tip income from federal taxable income (through 2028)." },
                { icon: <PiggyBank size={14} />, title: "Self-Employed Retirement", body: "SEP-IRA or Solo 401(k) contributions are deductible and reduce your SE tax base — often overlooked." },
              ].map((d) => (
                <div key={d.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 flex gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center
                                  flex-shrink-0 text-blue-600 mt-0.5">
                    {d.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-[13px] mb-1">{d.title}</p>
                    <p className="text-[12px] text-slate-500 leading-relaxed">{d.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ═══ SECTION 7 — PEAK HOURS ═══ */}
            <SectionHeading id="peak-hours">
              When and Where to Dash for Maximum Pay
            </SectionHeading>

            <p>
              Timing is the most underrated variable in DoorDash earnings. A driver working
              25 strategic peak hours will often out-earn someone working 40 random hours —
              while putting fewer miles on their car.
            </p>

            {/* Peak hours — mobile cards */}
            <div className="not-prose my-6">
              <div className="grid grid-cols-1 gap-3 sm:hidden">
                {[
                  { time: "Sun 6–8 PM",         avg: "$18.28/hr", reason: "Highest nationally — families ordering in" },
                  { time: "Fri–Sat 6–9:30 PM",  avg: "$15–$17/hr", reason: "High tip culture, peak restaurant volume" },
                  { time: "Mon–Fri 11 AM–2 PM", avg: "$13–$15/hr", reason: "Lunch rush, office orders, lower traffic" },
                  { time: "Mon–Fri 5–8 PM",     avg: "$14–$16/hr", reason: "Dinner rush, consistent Peak Pay zones" },
                  { time: "Off-peak hours",      avg: "$7–$10/hr",  reason: "Low order volume, bad $/mile ratio" },
                ].map((r, i) => (
                  <div key={r.time} className={`rounded-xl p-4 border ${i === 0 ? "bg-emerald-50 border-emerald-200" : "bg-white border-slate-200"}`}>
                    <div className="flex items-center justify-between mb-1">
                      <p className={`font-bold text-[13px] ${i === 0 ? "text-emerald-800" : "text-slate-800"}`}>{r.time}</p>
                      <p className={`font-black text-[14px] ${i === 0 ? "text-emerald-700" : "text-blue-700"}`}>{r.avg}</p>
                    </div>
                    <p className="text-[11px] text-slate-500">{r.reason}</p>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                      <th className="px-5 py-3.5 text-left font-black">Time Window</th>
                      <th className="px-5 py-3.5 text-left font-black">Avg Gross/hr</th>
                      <th className="px-5 py-3.5 text-left font-black">Why It Works</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Sun 6–8 PM",         "$18.28/hr",  "Highest nationally — families ordering in"],
                      ["Fri–Sat 6–9:30 PM",  "$15–$17/hr", "High tip culture, peak restaurant volume"],
                      ["Mon–Fri 11 AM–2 PM", "$13–$15/hr", "Lunch rush, office orders, lower traffic"],
                      ["Mon–Fri 5–8 PM",     "$14–$16/hr", "Dinner rush, consistent Peak Pay zones"],
                      ["Sat–Sun 10 AM–1 PM", "$11–$13/hr", "Brunch orders, decent for experienced drivers"],
                      ["Off-peak hours",     "$7–$10/hr",  "Low volume, long wait times, bad $/mile"],
                    ].map(([time, avg, reason], i) => (
                      <tr key={i} className={i === 0 ? "bg-emerald-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className={`px-5 py-3 font-bold ${i === 0 ? "text-emerald-800" : "text-slate-800"}`}>{time}</td>
                        <td className={`px-5 py-3 font-black tabular-nums ${i === 0 ? "text-emerald-700" : "text-blue-700"}`}>{avg}</td>
                        <td className="px-5 py-3 text-slate-500 text-[12px]">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ═══ SECTION 8 — STRATEGIES ═══ */}
            <SectionHeading id="strategies">
              Strategies Top Dashers Use to Earn $20+/Hour
            </SectionHeading>

            <div className="not-prose space-y-4 my-7">
              {[
                {
                  num: "01", icon: <Target size={18} />, color: "bg-blue-600",
                  title: "The $2/mile rule — never break it",
                  body: "Decline any order paying less than $2 for every mile driven. A $6 order requiring 4 miles is $1.50/mile — skip it. Applied consistently, this filter adds $3–$6/hr net. Top earners use $2.50/mile as their floor. DoorDash does not deactivate drivers for low acceptance rates as of 2026.",
                },
                {
                  num: "02", icon: <Zap size={18} />, color: "bg-violet-600",
                  title: "Multi-apping: run DoorDash + Uber Eats simultaneously",
                  body: "Running both apps fills dead time and lets you take the better offer from either platform. A 2024 Gridwise study found multi-apping drivers earned 31% more per hour. Over 65% of full-time gig workers now use two or more apps at once. Rule: never accept a second order if it will make you late on the first.",
                },
                {
                  num: "03", icon: <TrendingUp size={18} />, color: "bg-emerald-600",
                  title: "Stack Challenges with your natural schedule",
                  body: "DoorDash Challenges (complete X deliveries by Y time for $Z bonus) are worth $20–$75 each. Don't alter your schedule to chase them — check weekly if any challenge aligns with what you'd already be doing during peak hours. Stack, don't chase.",
                },
                {
                  num: "04", icon: <Fuel size={18} />, color: "bg-rose-600",
                  title: "Switch to a hybrid — saves $1,200+/year",
                  body: "A gas sedan at 25 MPG costs $50–$60/week in fuel on 400 miles. A hybrid at 50 MPG cuts that to $25–$30/week — $1,200–$1,500/year extra take-home. Many Dashers finance a used hybrid specifically for delivery work, and the fuel savings often cover the payment.",
                },
                {
                  num: "05", icon: <DollarSign size={18} />, color: "bg-amber-600",
                  title: "Track miles from the second you leave home",
                  body: "Accept an order before leaving your driveway and those home-to-restaurant miles are deductible. At $0.725/mile, every extra 100 miles tracked = $72.50 in deductions = ~$20 in real tax savings. Over a year this habit is worth $200–$600 for most Dashers.",
                },
              ].map((s) => (
                <div key={s.num}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="flex items-start gap-4 p-4 sm:p-5">
                    <div className={`${s.color} w-10 h-10 rounded-xl flex items-center
                                    justify-center flex-shrink-0 text-white`}>
                      {s.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="text-[10px] font-black text-slate-400 tracking-widest">{s.num}</span>
                        <p className="font-extrabold text-slate-900 text-[13px] sm:text-[14px]">{s.title}</p>
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ═══ SECTION 9 — VS UBER EATS ═══ */}
            <SectionHeading id="vs-uber-eats">
              DoorDash vs. Uber Eats Pay in 2026
            </SectionHeading>

            <p>
              Neither is categorically better. The right answer for most drivers is both
              simultaneously — which is exactly what top earners do.
            </p>

            {/* Comparison — mobile cards */}
            <div className="not-prose my-6">
              <div className="grid grid-cols-1 gap-3 sm:hidden">
                {[
                  { cat: "Median gross/hr",      dd: "$11.26/hr",             ue: "$15–$22/hr (dense urban)" },
                  { cat: "US market share",       dd: "~68%",                  ue: "~23%" },
                  { cat: "Order volume",          dd: "Very high everywhere",  ue: "High in cities only" },
                  { cat: "Tip shown upfront",     dd: "✓ Yes, always",         ue: "✗ Hidden for first hour" },
                  { cat: "Best market",           dd: "Suburban / mid-tier",   ue: "Dense metro areas" },
                  { cat: "Multi-apping friendly", dd: "✓ Yes",                 ue: "✓ Yes" },
                ].map((r) => (
                  <div key={r.cat} className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wide mb-2">{r.cat}</p>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <p className="text-[10px] text-blue-400 font-bold mb-0.5">DoorDash</p>
                        <p className="font-bold text-blue-700 text-[13px]">{r.dd}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] text-slate-400 font-bold mb-0.5">Uber Eats</p>
                        <p className="font-semibold text-slate-600 text-[13px]">{r.ue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                      <th className="px-5 py-3.5 text-left font-black">Category</th>
                      <th className="px-5 py-3.5 text-left font-black">DoorDash</th>
                      <th className="px-5 py-3.5 text-left font-black">Uber Eats</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Median gross/hr",      "$11.26/hr",            "$15–$22/hr (dense urban)"],
                      ["US market share",      "~68%",                 "~23%"],
                      ["Order volume",         "Very high, everywhere","High in cities only"],
                      ["Tip shown upfront",    "✓ Yes, always",        "✗ Hidden for first hour"],
                      ["Best market",          "Suburban / mid-tier",  "Dense metro areas"],
                      ["Multi-apping",         "✓ Yes",                "✓ Yes"],
                      ["Weekly bonuses",       "✓ Challenges",         "✓ Quests"],
                    ].map(([label, dd, ue], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-5 py-3 font-semibold text-slate-700">{label}</td>
                        <td className="px-5 py-3 font-bold text-blue-700">{dd}</td>
                        <td className="px-5 py-3 text-slate-500">{ue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ═══ SECTION 10 — WORTH IT ═══ */}
            <SectionHeading id="worth-it">
              Is DoorDash Worth It in 2026? By Driver Situation
            </SectionHeading>

            <div className="not-prose space-y-3 my-7">
              {[
                {
                  type: "Side income ($600–$1,200/month)",
                  verdict: "Clearly worth it", vColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
                  body: "Working 15–25 peak hours per week reliably delivers this in most US markets. The flexibility is real. Tax management is simple with a free tracking app and a consistent 26% set-aside rule.",
                },
                {
                  type: "Temporary full-time income replacement",
                  verdict: "Workable with discipline", vColor: "text-blue-700 bg-blue-50 border-blue-200",
                  body: "You need 35–45 hours/week, multi-apping from day one, and strict tax habits from week one. In a decent market $2,200–$2,900/month net is achievable. Treat it as a real business.",
                },
                {
                  type: "Long-term full-time career",
                  verdict: "Possible, with real limits", vColor: "text-amber-700 bg-amber-50 border-amber-200",
                  body: "The ceiling for a strategic full-time Dasher is roughly $3,000–$3,500/month net. No employer benefits. Vehicle depreciation accelerates. Income subject to algorithm changes.",
                },
                {
                  type: "International drivers (UK, Canada, Australia)",
                  verdict: "Yes — adjust the rate", vColor: "text-violet-700 bg-violet-50 border-violet-200",
                  body: "The logic applies globally. UK: HMRC 45p/mile. Canada: CRA 70¢/km. Australia: ATO 88¢/km. The 25–28% tax set-aside principle is roughly consistent across these markets.",
                },
              ].map((s) => (
                <div key={s.type} className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 sm:p-5">
                  <div className="flex items-start sm:items-center gap-2 mb-2.5 flex-wrap">
                    <p className="font-extrabold text-slate-900 text-[13px] sm:text-[14px]">{s.type}</p>
                    <span className={`border text-[10px] font-black uppercase tracking-wide
                                      px-2 py-0.5 rounded-full whitespace-nowrap ${s.vColor}`}>
                      {s.verdict}
                    </span>
                  </div>
                  <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            {/* ═══ SECTION 11 — MONTHLY INCOME ═══ */}
            <SectionHeading id="monthly-income">
              Realistic Monthly Income Projections
            </SectionHeading>

            <p>
              What a driver with average efficiency in a mid-tier US market can realistically
              expect to net per month. "Average" means using the $2/mile filter and working
              primarily peak hours.
            </p>

            {/* Monthly income — mobile cards */}
            <div className="not-prose my-6">
              <div className="grid grid-cols-1 gap-3 sm:hidden">
                {[
                  { hrs: "10 hrs/wk",          gross: "$450–$550",   exp: "$120–$160", net: "$290–$390",   tier: "Light side hustle",      hi: false },
                  { hrs: "20 hrs/wk",          gross: "$900–$1,100", exp: "$240–$320", net: "$580–$780",   tier: "Solid side income",      hi: false },
                  { hrs: "30 hrs/wk",          gross: "$1,350–$1,650",exp:"$360–$480", net: "$870–$1,170", tier: "Heavy part-time",         hi: false },
                  { hrs: "40 hrs/wk",          gross: "$1,800–$2,200",exp:"$480–$640", net: "$1,160–$1,560",tier:"Full-time (basic)",       hi: false },
                  { hrs: "40 hrs + multi-app", gross: "$2,300–$3,000",exp:"$500–$680", net: "$1,620–$2,320",tier:"Full-time (optimized)",   hi: true },
                ].map((r) => (
                  <div key={r.hrs} className={`rounded-xl border p-4 ${r.hi ? "bg-blue-50 border-blue-200" : "bg-white border-slate-200"}`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-bold text-slate-900 text-[13px]">{r.hrs}</p>
                      <span className="text-[10px] text-slate-400">{r.tier}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">Gross/mo</p>
                        <p className="font-semibold text-slate-600 text-[12px]">{r.gross}</p>
                      </div>
                      <div>
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">Expenses</p>
                        <p className="font-semibold text-rose-600 text-[12px]">{r.exp}</p>
                      </div>
                      <div>
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">Net/mo</p>
                        <p className={`font-extrabold text-[13px] ${r.hi ? "text-blue-700" : "text-emerald-700"}`}>{r.net}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                      <th className="px-5 py-3.5 text-left font-black">Hours/Week</th>
                      <th className="px-5 py-3.5 text-left font-black">Gross/Month</th>
                      <th className="px-5 py-3.5 text-left font-black">Expenses</th>
                      <th className="px-5 py-3.5 text-left font-black">Net/Month</th>
                      <th className="px-5 py-3.5 text-left font-black">Tier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["10 hrs/wk",          "$450–$550",    "$120–$160", "$290–$390",    "Light side hustle"],
                      ["20 hrs/wk",          "$900–$1,100",  "$240–$320", "$580–$780",    "Solid side income"],
                      ["30 hrs/wk",          "$1,350–$1,650","$360–$480", "$870–$1,170",  "Heavy part-time"],
                      ["40 hrs/wk",          "$1,800–$2,200","$480–$640", "$1,160–$1,560","Full-time (basic)"],
                      ["40 hrs + multi-app", "$2,300–$3,000","$500–$680", "$1,620–$2,320","Full-time (optimized)"],
                    ].map(([hrs, gross, exp, net, tier], i) => (
                      <tr key={i} className={i === 4 ? "bg-blue-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-5 py-3 font-bold text-slate-800">{hrs}</td>
                        <td className="px-5 py-3 text-slate-600 tabular-nums">{gross}</td>
                        <td className="px-5 py-3 text-rose-600 tabular-nums">{exp}</td>
                        <td className={`px-5 py-3 font-extrabold tabular-nums ${i === 4 ? "text-blue-700" : "text-emerald-700"}`}>{net}</td>
                        <td className="px-5 py-3 text-slate-400 text-[11px]">{tier}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="calculator-cta" className="scroll-mt-8">
              <CalculatorCTA variant="end" />
            </div>

            {/* ═══ SECTION 12 — FAQ ═══ */}
            <SectionHeading id="faq">Frequently Asked Questions</SectionHeading>

            <div className="space-y-4">
              {[
                {
                  q: "Does DoorDash take a percentage of my tips?",
                  a: "No. DoorDash passes 100% of customer tips directly to drivers. The platform charges restaurants a commission on orders, but that's separate from your earnings. Whatever a customer tips, you keep entirely.",
                },
                {
                  q: "What happens if I don't pay quarterly taxes?",
                  a: "The IRS charges an underpayment penalty — typically around 8% annualised on the amount you should have paid. If you owe more than $1,000 for the year you're technically required to pay quarterly. The 26% set-aside rule and paying each quarter eliminates this risk entirely.",
                },
                {
                  q: "Can I claim the mileage deduction and also deduct my actual gas receipts?",
                  a: "No — you pick one method for the year. The standard mileage rate ($0.725/mile) already covers fuel, maintenance, and depreciation. For most Dashers, the mileage rate wins over tracking actual expenses.",
                },
                {
                  q: "Do I need a special insurance policy for DoorDash?",
                  a: "Most standard auto insurance policies do not cover commercial delivery use. You need either a commercial policy or a rideshare/delivery endorsement on your personal policy. Without it you're personally liable for any accident during a delivery. This typically costs $10–$30/month extra.",
                },
                {
                  q: "How does Earn by Time work vs. Earn by Order?",
                  a: "Earn by Time guarantees a minimum hourly rate ($14–$19/hr depending on market) plus 100% of tips, with the clock running from order acceptance to drop-off. Most experienced Dashers prefer Earn by Order during peak windows — but Earn by Time is better for slow markets or off-peak hours.",
                },
                {
                  q: "Is the $25,000 Qualified Tips Deduction automatic?",
                  a: "No — your tax software or accountant must apply it. Most major tools (TurboTax Self-Employed, FreeTaxUSA, TaxSlayer) have been updated for it. If you use a CPA, mention it explicitly. It's a relatively new provision for tax year 2025 and some tools haven't fully caught up.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white shadow-sm p-4 sm:p-5">
                  <p className="font-bold text-slate-900 text-[13px] sm:text-[14px] mb-2">{item.q}</p>
                  <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* Author footer */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row
                            justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center
                                text-white font-black text-[11px] flex-shrink-0">AG</div>
                <div>
                  <p className="font-bold text-slate-900 text-[13px]">Anmol Giri</p>
                  <p className="text-[11px] text-slate-400">Gig Economy Analyst · Updated May 15, 2026</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 italic leading-relaxed">
                Sources: Gridwise 2025–2026 · IRS Rev. Proc. 2025-18 · IRS Pub. 463
              </p>
            </div>
          </article>

          {/* ── STICKY SIDEBAR ── */}
          <aside className="w-full lg:w-[260px] flex-shrink-0 space-y-4 lg:sticky lg:top-6">

            {/* Primary CTA */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <div className="p-5 text-white"
                style={{ background: "linear-gradient(135deg,#0f172a,#1d4ed8)" }}>
                <Calculator size={20} className="mb-2 text-blue-300" />
                <p className="font-extrabold text-base leading-tight mb-1.5">Free Earnings Calculator</p>
                <p className="text-blue-200 text-[12px] leading-relaxed">
                  Enter your hours, miles, and orders. Get your real net hourly rate,
                  quarterly tax reserve, and expense breakdown in seconds.
                </p>
              </div>
              <Link
                href="/doordash-earnings-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3.5
                           bg-white text-blue-700 font-bold text-[13px]
                           hover:bg-blue-50 transition-colors group border-t border-slate-100"
              >
                Open Free Calculator
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Key numbers */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                2026 Key Numbers
              </p>
              <div className="space-y-2.5">
                {[
                  { label: "IRS mileage rate",    value: "$0.725/mi" },
                  { label: "SE tax rate",          value: "15.3%" },
                  { label: "Median gross/hr",      value: "$11.26" },
                  { label: "Top 10% gross/hr",     value: "$15.63+" },
                  { label: "Tax set-aside",        value: "25–28%" },
                  { label: "Tips % of pay",        value: "~49%" },
                  { label: "Tips deduction limit", value: "$25,000" },
                  { label: "Market share",         value: "~68%" },
                ].map((r) => (
                  <div key={r.label}
                    className="flex items-center justify-between text-[12px]
                               border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-extrabold text-slate-900">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick TOC — desktop only */}
            <div className="hidden lg:block rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">
                Jump to Section
              </p>
              <ol className="space-y-2">
                {TOC.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}
                      className="text-[12px] text-blue-600 hover:text-blue-800 hover:underline
                                 flex items-start gap-2 transition-colors">
                      <span className="text-[9px] text-slate-400 font-bold mt-0.5 flex-shrink-0 w-4">
                        {i + 1}.
                      </span>
                      <span className="leading-snug">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Related articles */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                Related Articles
              </p>
              <div className="space-y-3">
                {[
                  { title: "Uber Eats Driver Pay Guide 2026",      href: "/blog/uber-eats-earnings-2026" },
                  { title: "Gig Worker Tax Guide 2026",            href: "/blog/gig-worker-taxes-2026" },
                  { title: "Best Mileage Tracking Apps 2026",      href: "/blog/mileage-tracking-apps" },
                  { title: "Instacart vs DoorDash: Which Pays More?", href: "/blog/instacart-vs-doordash" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}
                    className="flex items-start gap-2 text-[12px] text-slate-700
                               hover:text-blue-600 transition-colors group">
                    <ChevronRight size={12} className="mt-0.5 flex-shrink-0 text-slate-400
                                                        group-hover:text-blue-400 transition-colors" />
                    <span className="leading-snug">{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}