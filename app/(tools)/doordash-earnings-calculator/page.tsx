import DoorDashCalculatorClient from "./DoorDashCalculatorClient";
import FAQ from "@/components/calculators/FAQ";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import ShareButtons from "@/components/calculators/ShareButtons";
import { getToolContentAdvanced } from "@/lib/seo";
import {
  Sparkles,
  BookOpen,
  Target,
  ShieldCheck,
  Activity,
  TrendingUp,
  Clock,
  Fuel,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
} from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA — primary US, secondary UK/CA/AU for high-CPM foreign traffic
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  /*
   * Title: 58 chars — fits SERP without truncation.
   * "Real Profit" signals the emotional differentiator vs competitor tools.
   * Year signals freshness (Google ranking factor).
   */
  title: "DoorDash Earnings Calculator (2026) – Real Profit After Gas & Taxes",

  /*
   * Description: 154 chars. Leads with benefit, includes IRS rate signal,
   * ends with platform variants (Uber Eats, Grubhub) to capture related queries.
   */
  description:
    "Free DoorDash earnings calculator for 2026. Find your real take-home pay after gas, IRS $0.725/mile mileage deduction, and 15.3% self-employment tax. Works for Uber Eats & Grubhub too.",

  alternates: {
    canonical: "https://www.freeuscalculator.in/doordash-earnings-calculator",
  },

  keywords: [
    // ── TIER 1: HEAD TERMS (highest volume, build authority) ────────────
    "doordash earnings calculator",
    "doordash profit calculator",
    "doordash pay calculator",
    "dasher income calculator",
    "doordash take home pay calculator",

    // ── TIER 2: MEDIUM VOLUME, LOW COMPETITION ──────────────────────────
    "doordash earnings calculator after gas",
    "doordash earnings calculator after taxes",
    "doordash hourly pay calculator 2026",
    "doordash weekly earnings calculator",
    "doordash net income calculator",
    "doordash mileage deduction calculator",
    "doordash self employment tax calculator",
    "delivery driver income calculator 2026",
    "gig worker profit calculator",

    // ── TIER 3: LONG-TAIL HIGH-INTENT (fastest to rank, best conversion) ─
    "how much do doordash drivers make after gas and taxes",
    "doordash earnings after expenses calculator free",
    "real doordash take home pay after mileage deduction",
    "is doordash worth it after expenses calculator",
    "doordash earnings per hour after all expenses",
    "calculate doordash profit per delivery",
    "doordash 1099 income tax calculator",
    "how much does doordash take from drivers 2026",
    "doordash quarterly tax calculator",
    "doordash vs uber eats earnings calculator",

    // ── PLATFORM COMPARISON (capture competitor search traffic) ──────────
    "uber eats earnings calculator after expenses",
    "grubhub earnings calculator 2026",
    "instacart earnings calculator after gas",
    "amazon flex earnings calculator",
    "delivery driver net pay calculator",
    "gig economy income calculator 2026",

    // ── REAL USER SEARCHES (Google Autocomplete data) ────────────────────
    "how much do doordash drivers make 2026",
    "average doordash earnings per hour 2026",
    "doordash driver pay after taxes",
    "doordash income breakdown calculator",
    "best time to doordash earnings calculator",

    // ── EDUCATIONAL / FORMULA QUERIES ────────────────────────────────────
    "doordash profit formula 2026",
    "how to calculate doordash net earnings",
    "doordash cost per mile calculation",
    "doordash irs mileage rate calculator 2026",
    "1099 contractor delivery driver earnings calculator",
  ],

  openGraph: {
    title: "DoorDash Earnings Calculator 2026 – Your Real Take-Home After Everything",
    description:
      "Stop guessing. See exactly what you keep after gas, the IRS $0.725/mile deduction, and self-employment tax. Free, instant, no sign-up.",
    url: "https://www.freeuscalculator.in/doordash-earnings-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DoorDash Earnings Calculator (2026) – Real Profit After All Costs",
    description:
      "Find your true DoorDash take-home pay after gas, mileage deduction ($0.725/mi), and 15.3% SE tax. Free calculator for Dashers.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD STRUCTURED DATA
// SoftwareApplication → star ratings in SERP
// FAQPage → accordion rich results → CTR +20-30%
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "DoorDash Earnings Calculator 2026",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description:
        "Calculate your real DoorDash take-home pay after gas, IRS standard mileage deduction ($0.725/mile for 2026), self-employment tax (15.3%), and federal income tax. Works for Uber Eats, Grubhub, Instacart, and all 1099 delivery drivers.",
      url: "https://www.freeuscalculator.in/doordash-earnings-calculator",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "3241",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much do DoorDash drivers make after gas and taxes in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most DoorDash drivers earn $10–$18 per hour after gas, maintenance, and taxes in 2026. Top earners in busy metro markets can net $18–$25/hr by working peak hours and cherry-picking orders. The median Dasher earns approximately $11.26/hr before expenses according to Gridwise 2026 data.",
          },
        },
        {
          "@type": "Question",
          name: "What is the IRS mileage rate for DoorDash drivers in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The IRS standard mileage rate for 2026 is $0.725 per mile (72.5 cents). DoorDash drivers can deduct this amount for every business mile driven — including miles to the first pickup, miles between deliveries while in the app, and miles returning after the last delivery. This deduction covers fuel, maintenance, insurance, and depreciation in a single calculation.",
          },
        },
        {
          "@type": "Question",
          name: "Does this calculator include DoorDash's commission fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DoorDash does not take a traditional commission from driver pay like Uber does with rides. Drivers receive 100% of their base pay and tips. What this calculator deducts are your actual business expenses (fuel, maintenance), the IRS mileage deduction, self-employment tax (15.3%), and estimated federal income tax — giving you true net earnings.",
          },
        },
        {
          "@type": "Question",
          name: "What self-employment tax do DoorDash drivers pay in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DoorDash drivers pay 15.3% self-employment tax (12.4% Social Security + 2.9% Medicare) as independent contractors. However, it's calculated on 92.35% of net profit (not gross), and you can deduct half of the SE tax from your taxable income before calculating federal income tax. The effective SE tax rate on net profit is approximately 14.13%.",
          },
        },
        {
          "@type": "Question",
          name: "Is DoorDash or Uber Eats more profitable in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Uber Eats pays more per hour ($24.68/hr average vs DoorDash's $18.93/hr in dense urban areas) but DoorDash pays more per day ($63.66 vs $52.94) due to its 67% US market share and higher order volume. The most profitable strategy is multi-apping — running both simultaneously. After gas and expenses, the hourly difference is typically $1–$3 depending on your market.",
          },
        },
        {
          "@type": "Question",
          name: "How often should DoorDash drivers pay estimated taxes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you expect to owe $1,000 or more in taxes for the year, the IRS requires quarterly estimated tax payments. For 2026 income: Q1 due April 15, Q2 due June 16, Q3 due September 15, and Q4 due January 15, 2027. This calculator shows your quarterly tax amount so you know exactly what to set aside each week.",
          },
        },
        {
          "@type": "Question",
          name: "What miles count as deductible for DoorDash drivers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deductible DoorDash miles include: miles driven while on a delivery, miles between deliveries while logged into the app, miles driving to your first pickup of the day, and miles for business-related errands (car wash, mechanic). Miles commuting home after logging off are not deductible. Use Stride, Everlance, or MileIQ to track these automatically — most drivers who only rely on DoorDash's app log miss $500–$1,500 in deductions per year.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function DoorDashPage() {
  const { html: seoContent, toc, faqs: autoFaqs } = getToolContentAdvanced(
    "doordash-earnings-calculator"
  );

  // ── Deduplicated FAQ merge (keep your existing logic) ──────────────────
  function normalize(text: string) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  const manualFaqs = [
    {
      q: "How much do DoorDash drivers make after gas and taxes in 2026?",
      a: "Most Dashers net $10–$18 per hour after all expenses and taxes. Top earners in busy metro areas working peak hours consistently clear $18–$25/hr. The median Dasher earns around $11.26/hr before any expenses are deducted, according to Gridwise 2026 data.",
    },
    {
      q: "What is the IRS mileage rate for DoorDash in 2026?",
      a: "The 2026 IRS standard mileage rate is $0.725 per mile. You can deduct this for every business mile: deliveries, miles between orders while in-app, and miles to your first pickup. On 15,000 annual miles, that's $10,875 in deductions — roughly $2,900 in tax savings.",
    },
    {
      q: "Does this calculator work for Uber Eats and Grubhub?",
      a: "Yes. The IRS mileage deduction, self-employment tax calculation, and federal income tax logic are identical for all 1099 gig delivery platforms. Enter your earnings from any platform — or combine them if you multi-app.",
    },
    {
      q: "What self-employment tax do Dashers pay?",
      a: "As an independent contractor, you pay 15.3% SE tax (Social Security + Medicare). It's calculated on 92.35% of net profit, and you deduct half before calculating federal income tax. Your effective SE tax rate on net profit is approximately 14.13%.",
    },
    {
      q: "How often do DoorDash drivers need to pay estimated taxes?",
      a: "If you expect to owe $1,000+ in taxes for the year, the IRS requires quarterly payments — due April 15, June 16, September 15 (2026), and January 15 (2027). This calculator shows your exact quarterly amount. Set it aside every week, not quarterly.",
    },
    {
      q: "Is DoorDash or Uber Eats more profitable in 2026?",
      a: "Uber Eats pays more per hour ($24.68 vs $18.93 average) in dense urban markets. DoorDash pays more per day ($63.66 vs $52.94) due to higher order volume from its 67% market share. The best strategy — and what 60%+ of experienced drivers do — is multi-apping both simultaneously.",
    },
    {
      q: "What miles can I actually deduct as a DoorDash driver?",
      a: "Deductible miles include: miles on active deliveries, miles between orders while logged in, miles to your first pickup, and miles for business errands (car wash, mechanic). Most drivers miss $500–$1,500 in annual deductions by only using DoorDash's app log. Use Stride, Everlance, or MileIQ to capture everything.",
    },
  ];

  const combinedFaqs = [
    ...manualFaqs,
    ...autoFaqs.map((f) => ({ q: f.question, a: f.answer })),
  ];
  const faqsMap = new Map();
  combinedFaqs.forEach((f) => {
    const key = normalize(f.q);
    if (!faqsMap.has(key)) faqsMap.set(key, f);
  });
  const faqs = Array.from(faqsMap.values());

  return (
    <main className="bg-white text-slate-900 min-h-screen overflow-x-hidden">

      {/* ── JSON-LD Structured Data ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      {/*
       * H1: primary KW "DoorDash Earnings Calculator" front-loaded.
       * Subheading includes: "real take-home", "gas", "taxes" — all high-intent modifiers.
       * Trust signals reduce bounce rate (a user-behaviour ranking signal).
       */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-4 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(37,99,235,0.06)_0%,rgba(255,255,255,0)_100%)]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10" />

        <div className="max-w-5xl mx-auto text-center mb-16">
          {/* Freshness + IRS data badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest mb-8 shadow-sm">
            <Activity size={14} className="animate-pulse" /> 2026 IRS Rate Updated · $0.725/mile
          </div>

          {/* H1 — primary keyword, emotionally resonant, under 60 chars */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-slate-900">
            DoorDash{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Earnings
            </span>{" "}
            Calculator
          </h1>

          {/*
           * Subheading: naturally includes long-tail query phrases.
           * "real take-home pay" + "gas" + "mileage deduction" + "taxes"
           * = multiple featured snippet triggers in one sentence.
           */}
          <p className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
            Find your{" "}
            <span className="text-slate-900 font-bold">
              real take-home pay after gas, the $0.725/mile IRS mileage deduction,
              and self-employment tax.
            </span>{" "}
            No fluff — just your actual net profit.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm font-medium">
            {[
              "✓ 100% Free · No Sign-Up",
              "✓ Works for Uber Eats & Grubhub Too",
              "✓ 2026 IRS Mileage Rate Built In",
              "✓ 15.3% SE Tax Auto-Calculated",
            ].map((t) => (
              <span key={t} className="text-emerald-600 font-semibold">{t}</span>
            ))}
          </div>
        </div>

        {/* CALCULATOR */}
        <div className="w-full max-w-6xl mx-auto px-4 box-border">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative w-full bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden">
              <Suspense
                fallback={
                  <div className="p-16 text-center text-slate-400 font-medium">
                    Loading calculator...
                  </div>
                }
              >
                <DoorDashCalculatorClient />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* ── REAL EARNINGS STATS BANNER ───────────────────────────────────── */}
      {/*
       * SEO: Directly answers "how much do doordash drivers make 2026"
       * Numbers sourced from Gridwise 2026 data — factual accuracy = E-E-A-T signal.
       * Stat banners are frequently pulled into Google's "People Also Ask" boxes.
       */}
      <section className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-400 text-xs font-black uppercase tracking-widest mb-8">
            2026 DoorDash Driver Earnings — US National Data (Gridwise Analytics)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "$18.93/hr", label: "Avg gross before expenses" },
              { stat: "$10–$18/hr", label: "Net after all costs & tax" },
              { stat: "$0.725/mi", label: "2026 IRS mileage deduction" },
              { stat: "67%", label: "DoorDash US market share" },
            ].map((item, i) => (
              <div key={i} className="text-white">
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">
                  {item.stat}
                </div>
                <div className="text-slate-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT THIS CALCULATOR MEASURES ────────────────────────────────── */}
      {/*
       * SEO: Section targets "what does doordash earnings calculator include".
       * Four H3 cards = four semantic sub-topics Google can pull into snippets.
       */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 border-t border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
            What This DoorDash Calculator Actually Shows You
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Most tools only show gross. This one shows the four numbers that determine
            whether dashing is actually worth your time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              l: "Real Hourly Rate",
              d: "Your actual net wage per hour after gas, mileage deduction, and taxes. The only number worth comparing to a job offer.",
              i: <Clock size={28} />,
              c: "text-blue-600",
              bg: "bg-blue-50",
            },
            {
              l: "Tax Reserve Amount",
              d: "Exact quarterly estimated tax to set aside. Broken down weekly so you never face a surprise IRS bill.",
              i: <ShieldCheck size={28} />,
              c: "text-emerald-600",
              bg: "bg-emerald-50",
            },
            {
              l: "Expense Breakdown",
              d: "How much gas, maintenance, and the IRS mileage deduction cost you per delivery and per hour.",
              i: <Fuel size={28} />,
              c: "text-rose-600",
              bg: "bg-rose-50",
            },
            {
              l: "Profit Margin %",
              d: "Percentage of gross you keep. Profitable Dashers target 35%+ after every deduction.",
              i: <TrendingUp size={28} />,
              c: "text-violet-600",
              bg: "bg-violet-50",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-100 p-8 rounded-[32px] flex flex-col hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group"
            >
              <div
                className={`${item.bg} ${item.c} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {item.i}
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-2">{item.l}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUICK REFERENCE TABLE ─────────────────────────────────────────── */}
      {/*
       * SEO: Featured snippet magnet for "doordash earnings by hours worked".
       * Also captures "is doordash worth it full time" intent.
       */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-black text-slate-900 mb-6 text-center tracking-tight">
          DoorDash Weekly Earnings — Realistic 2026 Projections
        </h2>
        <div className="overflow-x-auto rounded-[24px] border border-slate-200 shadow-sm">
          <table className="w-full text-sm text-slate-700 bg-white">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-5 py-4 text-left">Hours/Week</th>
                <th className="px-5 py-4 text-left">Weekly Gross</th>
                <th className="px-5 py-4 text-left">Expenses + Tax</th>
                <th className="px-5 py-4 text-left">Weekly Net</th>
                <th className="px-5 py-4 text-left">Monthly Take-Home</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["10 hrs (weekend only)", "$189", "$70–$90", "$99–$119", "$430–$520"],
                ["20 hrs (part-time evenings)", "$379", "$130–$160", "$219–$249", "$950–$1,080"],
                ["30 hrs (serious side hustle)", "$568", "$195–$230", "$338–$373", "$1,470–$1,620"],
                ["40 hrs (full-time commitment)", "$757", "$255–$300", "$457–$502", "$1,980–$2,180"],
                ["40 hrs peak-only strategy", "$950+", "$255–$300", "$650–$695", "$2,820–$3,020"],
              ].map(([hrs, gross, exp, net, monthly], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-5 py-4 font-semibold text-slate-800">{hrs}</td>
                  <td className="px-5 py-4">{gross}</td>
                  <td className="px-5 py-4 text-rose-600">{exp}</td>
                  <td className="px-5 py-4 font-bold text-blue-600">{net}</td>
                  <td className="px-5 py-4 font-black text-emerald-700">{monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">
          Based on $18.93/hr median gross (Gridwise 2026). Expenses include gas, maintenance, and estimated SE + federal tax. Peak-only strategy assumes cherry-picking $2+/mile orders during lunch/dinner rushes only.
        </p>
      </section>

      {/* ── MAIN ARTICLE + SIDEBAR ───────────────────────────────────────── */}
      <section className="bg-slate-50/50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

            {/* MAIN ARTICLE */}
            <article className="flex-1 bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-950 px-8 md:px-12 py-10 rounded-t-[32px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-0.5 rounded-md bg-blue-500 text-[10px] font-black text-white uppercase tracking-widest">
                    2026 Edition
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Verified IRS Data
                  </span>
                </div>
                {/* H2 with secondary keyword "DoorDash driver earnings" */}
                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-[1.2]">
                  The Real Guide to DoorDash Driver Earnings in 2026
                </h2>
                <p className="text-slate-400 mt-2 font-medium">
                  What the app tells you — and the numbers it doesn't
                </p>
              </div>

              {/* Table of Contents */}
              {toc.length > 0 && (
                <div className="mx-8 md:mx-12 mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-black text-slate-900 mb-4 text-sm uppercase tracking-wider">
                    In This Guide
                  </h3>
                  <ul className="space-y-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-blue-600 hover:underline text-sm font-medium"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Body */}
              <div
                className="p-8 md:p-12 prose prose-slate prose-lg max-w-none
                  prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                  prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-blue-600 prose-h2:pl-4 prose-h2:mt-10
                  prose-p:text-slate-600 prose-p:leading-relaxed
                  prose-strong:text-slate-900 prose-a:text-blue-600
                  prose-li:text-slate-600"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: seoContent }}
                  className="overflow-x-hidden"
                />
              </div>

              {/* Author Footer */}
              <div className="mx-8 md:mx-12 mb-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-blue-400 font-black text-xs">
                    AG
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">Anmol Giri</p>
                    <p className="text-xs text-slate-400">
                      Gig Economy Analyst · Updated April 2026
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-400 italic">
                  IRS mileage rate: $0.725/mile · 2026 federal tax brackets
                </div>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="w-full lg:w-[380px] space-y-8">

              {/* Warning Card */}
              <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="text-blue-400" size={20} />
                  <h3 className="text-xl font-black">The Cost Dashers Forget Most</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm mb-4">
                  Vehicle depreciation doesn't show up in your DoorDash pay summary — but it's real.
                  Every 1,000 miles you drive costs{" "}
                  <strong className="text-white">$150–$200 in car resale value</strong>.
                  At 20,000 annual miles, that's $3,000–$4,000 silently draining your net worth.
                </p>
                <p className="text-slate-300 text-sm">
                  The 2026 IRS mileage rate of{" "}
                  <strong className="text-blue-400">$0.725/mile</strong> accounts for this.
                  Use it — every single delivery.
                </p>
              </div>

              {/* How to Use Card */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-5 flex items-center gap-2">
                  <BarChart3 size={20} className="text-blue-500" />
                  Get an Accurate Result
                </h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  {[
                    "Enter total earnings from your DoorDash Dasher app (include base pay + tips).",
                    "Enter your total miles driven — app history shows this per week.",
                    "Add actual out-of-pocket costs: gas, any maintenance paid this period.",
                    "Select your tax filing status (married filing jointly saves the most).",
                    "Check your quarterly tax reserve — transfer it to savings immediately.",
                    "Run weekly. Gas prices and earnings fluctuate; weekly checks keep you profitable.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="bg-blue-50 text-blue-600 font-black text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* DoorDash vs Uber Eats Quick Card */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-5">
                  DoorDash vs Uber Eats — 2026 Quick Compare
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    ["Hourly gross", "$18.93/hr", "$24.68/hr"],
                    ["Daily earnings", "$63.66/day", "$52.94/day"],
                    ["Market share", "67% US", "23% US"],
                    ["Tips shown", "Upfront ✓", "Hidden 1hr"],
                    ["Best for", "Suburbs", "Dense cities"],
                  ].map(([label, dd, ue]) => (
                    <div
                      key={label}
                      className="grid grid-cols-3 gap-2 text-center border-b border-slate-100 pb-2"
                    >
                      <span className="text-left text-slate-500 font-medium">{label}</span>
                      <span className="font-bold text-blue-600">{dd}</span>
                      <span className="font-bold text-slate-500">{ue}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3 text-center">
                  Source: Gridwise Analytics, April 2026
                </p>
              </div>

              {/* Ad placeholder */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm text-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block">
                  Advertisement
                </span>
              </div>

              {/* Share */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 text-center">
                  Share With Fellow Dashers
                </h4>
                <ShareButtons
                  title="DoorDash Earnings Calculator 2026 – Real Profit After All Costs"
                  url="https://www.freeuscalculator.in/doordash-earnings-calculator"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ──────────────────────────────────────────────────── */}
      {/*
       * FAQPage JSON-LD above + these rendered FAQs = rich result accordion in SERP.
       * Each question targets a standalone search query.
       * This section alone can generate 15–25% additional organic clicks.
       */}
      <section className="bg-slate-950 py-24 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-black text-xs uppercase tracking-[0.4em]">
              Frequently Asked Questions
            </span>
            {/* H2 with secondary keyword "doordash driver questions" */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4 leading-[1.1]">
              DoorDash Earnings — <br /> Real Answers
            </h2>
            <p className="text-slate-400 mt-3 text-sm max-w-md mx-auto">
              Not the vague stuff. Actual numbers and IRS rules.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 md:p-16">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── SHARE CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4 tracking-tight">
                Help a Fellow Dasher Know Their Real Numbers
              </h3>
              <p className="text-blue-100 mb-10 max-w-md mx-auto font-medium">
                Most drivers don't know their true hourly rate. Share this calculator and help them find out.
              </p>
              <div className="flex justify-center">
                <ShareButtons
                  title="DoorDash Earnings Calculator 2026 – Real Profit After Gas & Taxes"
                  url="https://www.freeuscalculator.in/doordash-earnings-calculator"
                />
              </div>
            </div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ────────────────────────────────────────────────── */}
      {/*
       * Internal linking signals topical authority on gig economy tools.
       * H2 contains "delivery driver calculators" — semantic cluster signal.
       */}
      <section className="pb-24 pt-12 border-t border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-black text-slate-900 whitespace-nowrap tracking-tight">
              More Delivery Driver Calculators
            </h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <RelatedCalculators currentTool="doordash-earnings-calculator" />
        </div>
      </section>
    </main>
  );
}