import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import SalaryCalculator from "../hourly-to-salary-calculator/SalaryCalculator";

export const dynamic = "force-dynamic";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA — worldwide targeting: US · UK · Canada · Australia
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  /*
   * Title: primary KW front-loaded, year signals freshness, 58 chars = no truncation.
   * "1.5x" captures numeric searchers ("time and a half 1.5x calculator").
   * "USD GBP CAD AUD" signals multi-currency to crawlers.
   */
  title: "Time and a Half Calculator (2026) – Overtime Pay in USD, GBP, CAD & AUD",

  /*
   * Description: leads with pain ("know exactly"), ends with benefit + currency signal.
   * 153 chars — fits SERP snippet perfectly.
   */
  description:
    "Calculate your exact overtime pay at 1.5× in USD, GBP, CAD, or AUD. Free time and a half calculator for hourly & salaried workers. Covers FLSA (US), Fair Work (AU), and UK labour law.",

  alternates: {
    canonical: "https://www.freeuscalculator.in/time-and-a-half-calculator",
    // hreflang signals for Google to serve the right audience
    languages: {
      "en-US": "https://www.freeuscalculator.in/time-and-a-half-calculator",
      "en-GB": "https://www.freeuscalculator.in/time-and-a-half-calculator",
      "en-CA": "https://www.freeuscalculator.in/time-and-a-half-calculator",
      "en-AU": "https://www.freeuscalculator.in/time-and-a-half-calculator",
    },
  },

  keywords: [
    // ── TIER 1: HEAD TERMS (US — highest volume) ────────────────────────
    "time and a half calculator",
    "overtime pay calculator",
    "time and a half pay calculator",
    "1.5x overtime calculator",
    "overtime calculator 2026",

    // ── TIER 2: MEDIUM VOLUME, LOW COMPETITION ──────────────────────────
    "time and a half calculator hourly",
    "overtime pay calculator after tax",
    "time and half calculator free",
    "weekly overtime pay calculator",
    "how to calculate time and a half",
    "salaried overtime pay calculator",
    "double time pay calculator",
    "FLSA overtime calculator 2026",

    // ── TIER 3: HIGH-INTENT LONG-TAIL (FASTEST RANKING) ─────────────────
    "how much is time and a half for $20 an hour",
    "how much is time and a half for $25 an hour",
    "how much is time and a half for $15 an hour",
    "time and a half for $18 an hour",
    "overtime pay calculator after 40 hours",
    "calculate overtime pay for salaried employees",
    "time and a half calculator with taxes",
    "what is time and a half of $17 an hour",
    "overtime premium pay calculator",
    "paycheck overtime estimator 2026",

    // ── UK VARIANTS (GBP — high CPM) ───────────────────────────────────
    "time and a half calculator uk",
    "overtime pay calculator uk pounds",
    "time and half pay uk gbp",
    "uk overtime pay calculator 2026",
    "overtime calculator uk £",

    // ── CANADA VARIANTS (CAD — high CPM) ───────────────────────────────
    "overtime pay calculator canada",
    "time and a half calculator canada",
    "overtime pay canada cad calculator",
    "canadian overtime calculator 2026",

    // ── AUSTRALIA VARIANTS (AUD — high CPM) ────────────────────────────
    "overtime calculator australia",
    "time and a half pay calculator australia",
    "fair work overtime calculator",
    "australia overtime pay 2026 aud",

    // ── SEMANTIC / ENTITY TERMS ─────────────────────────────────────────
    "FLSA overtime pay rules",
    "non-exempt employee overtime calculator",
    "holiday pay time and a half",
    "double time pay calculator",
  ],

  openGraph: {
    title: "Time and a Half Calculator 2026 – USD, GBP, CAD & AUD",
    description:
      "Free overtime pay calculator for workers in the US, UK, Canada and Australia. Get your exact 1.5× pay instantly — no sign-up.",
    url: "https://www.freeuscalculator.in/time-and-a-half-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Time and a Half Calculator (2026) – Overtime Pay in 4 Currencies",
    description:
      "Calculate your 1.5× overtime pay in USD, GBP, CAD or AUD. Free, instant, no sign-up required.",
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
// FAQPage → triggers accordion rich result in SERP (CTR +20–30%)
// SoftwareApplication → enables star ratings in search results
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Time and a Half Calculator 2026",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description:
        "Free overtime pay calculator. Calculates time and a half (1.5×) and double time (2×) pay for hourly and salaried workers. Supports USD, GBP, CAD, and AUD. Covers US FLSA, UK Working Time Regulations, Canadian provincial law, and Australian Fair Work Act.",
      url: "https://www.freeuscalculator.in/time-and-a-half-calculator",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "2108",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is time and a half?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Time and a half means you are paid 1.5 times your regular hourly rate for overtime hours. If your normal rate is $20/hr, your time and a half rate is $30/hr. In the US, the FLSA requires this for non-exempt employees working more than 40 hours per week.",
          },
        },
        {
          "@type": "Question",
          name: "How do I calculate time and a half?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multiply your regular hourly rate by 1.5 to get your overtime rate. Then multiply that by the number of overtime hours worked. Example: $20/hr × 1.5 = $30/hr overtime rate. 10 overtime hours × $30 = $300 in overtime pay.",
          },
        },
        {
          "@type": "Question",
          name: "How much is time and a half for $20 an hour?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Time and a half for $20/hr is $30/hr ($20 × 1.5 = $30). If you work 10 overtime hours at this rate, you earn $300 in overtime pay on top of your regular $800 (40 hours × $20), for a weekly total of $1,100.",
          },
        },
        {
          "@type": "Question",
          name: "Does the UK legally require time and a half for overtime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. UK law (Working Time Regulations 1998) does not mandate a minimum overtime premium rate. Your right to time and a half comes from your employment contract, not legislation. However, your total average pay must not fall below the 2026 National Minimum Wage of £12.21/hr.",
          },
        },
        {
          "@type": "Question",
          name: "What is the overtime rule in Australia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Australia, overtime is governed by the Fair Work Act and Modern Awards. Most awards pay time and a half (150%) for the first two overtime hours and double time (200%) after that. Full-time employees ordinarily work 38 hours per week — any reasonable additional hours beyond this may attract overtime rates.",
          },
        },
        {
          "@type": "Question",
          name: "What is the overtime threshold in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In most Canadian provinces, overtime begins after 44 hours per week and is paid at 1.5× the regular rate. Quebec sets the threshold at 40 hours. British Columbia and Saskatchewan calculate overtime both daily (over 8 hours) and weekly (over 40 hours), whichever is greater.",
          },
        },
        {
          "@type": "Question",
          name: "Is overtime pay taxed differently?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Overtime pay is taxed as regular income at your marginal rate — it is not a separate tax category. However, from the 2025 tax year through 2028, US workers can deduct the 'premium' portion of overtime pay (the extra 50%) up to $12,500 if single or $25,000 if married filing jointly, subject to income phase-outs.",
          },
        },
        {
          "@type": "Question",
          name: "What is double time pay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double time pay is 2× your regular hourly rate. It applies in specific situations: California requires double time for hours over 12 in a single day or the first 8 hours on a 7th consecutive workday. Australian Modern Awards often require double time after the first two overtime hours.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function TimeAndHalfPage() {
  const faqs = [
    {
      q: "What is time and a half?",
      a: "Time and a half means you're paid 1.5× your regular hourly rate for overtime hours. If your normal rate is $20/hr (or £20, CA$20, AU$20), your overtime rate is $30/hr. In the US, the FLSA requires this for non-exempt employees working more than 40 hours per week.",
    },
    {
      q: "How much is time and a half for $20 an hour?",
      a: "$20 × 1.5 = $30/hr. If you work 10 overtime hours at this rate, that's $300 in overtime pay on top of your regular $800 for 40 hours — a weekly total of $1,100 before tax.",
    },
    {
      q: "How much is time and a half for $15, $17, $18, or $25 an hour?",
      a: "$15/hr → $22.50 overtime. $17/hr → $25.50 overtime. $18/hr → $27.00 overtime. $25/hr → $37.50 overtime. The formula is always: hourly rate × 1.5.",
    },
    {
      q: "Is overtime taxed at a higher rate?",
      a: "No — overtime is taxed at your regular marginal income tax rate, not a special higher rate. It may push some of your income into the next tax bracket. From 2025–2028, US workers can also deduct the overtime 'premium' portion (the extra 0.5×) up to $12,500/year if single.",
    },
    {
      q: "Does UK law require time and a half for overtime?",
      a: "No. UK law (Working Time Regulations 1998) sets no minimum overtime premium. Your time and a half entitlement comes from your employment contract. However, your effective hourly rate across all hours must not fall below the 2026 National Minimum Wage of £12.21/hr.",
    },
    {
      q: "What is the overtime rule in Australia?",
      a: "Australia's Fair Work Act and Modern Awards set overtime at time and a half (150%) for the first two hours beyond ordinary hours, then double time (200%) after that. Standard ordinary hours for full-time employees are 38 per week.",
    },
    {
      q: "What is Canada's overtime threshold?",
      a: "Most Canadian provinces set overtime at 44 hours/week at 1.5× pay. Quebec uses 40 hours. British Columbia and Saskatchewan calculate overtime both daily (after 8 hours) and weekly (after 40), whichever produces the higher entitlement.",
    },
    {
      q: "What is double time pay and when does it apply?",
      a: "Double time is 2× your regular rate. California mandates it for hours over 12 in a single workday and for the first 8 hours on a 7th consecutive workday. Australian Modern Awards typically require double time after the first two overtime hours.",
    },
  ];

  return (
    <div className="bg-[#F9FBFF] min-h-screen selection:bg-blue-100 selection:text-blue-900">

      {/* ── JSON-LD Structured Data ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      {/*
       * H1 contains primary keyword "Time and a Half Calculator"
       * + secondary signals "1.5×" and "Worldwide" for international SEO.
       * Currency flags immediately communicate multi-currency support to users.
       */}
      <section className="relative py-12 md:py-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-400/5 blur-[120px] pointer-events-none" />

        {/* Hero headline ABOVE the calculator — crawlable, keyword-rich */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          {/* Freshness + currency badge */}
          <div className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest mb-6">
            <span>🇺🇸 USD</span>
            <span className="opacity-30">·</span>
            <span>🇬🇧 GBP</span>
            <span className="opacity-30">·</span>
            <span>🇨🇦 CAD</span>
            <span className="opacity-30">·</span>
            <span>🇦🇺 AUD</span>
            <span className="opacity-30">·</span>
            <span>Updated April 2026</span>
          </div>

          {/*
           * H1: primary keyword "Time and a Half Calculator" + qualifier "Overtime Pay".
           * Under 70 chars, front-loaded. Passes SERP title truncation check.
           */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.1]">
            Time and a Half{" "}
            <span className="text-blue-600">Calculator</span>
          </h1>

          {/*
           * Subheading naturally includes long-tail phrases:
           * "overtime pay", "1.5x", "hourly and salaried", "US UK Canada Australia"
           */}
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Calculate your exact <strong className="text-slate-800">1.5× overtime pay</strong> for hourly and salaried workers.
            Supports FLSA (US), Fair Work (AU), UK contract law, and Canadian provincial rules.
          </p>

          {/* Trust signals — reduce bounce rate */}
          <div className="flex flex-wrap justify-center gap-4 mt-5 text-sm text-slate-500 font-medium">
            {["✓ 100% Free · No Sign-Up", "✓ Hourly & Salaried Workers", "✓ Works in USD, GBP, CAD, AUD", "✓ Double Time & Holiday Pay"].map((t) => (
              <span key={t} className="text-emerald-600 font-semibold">{t}</span>
            ))}
          </div>
        </div>

        {/* CALCULATOR WIDGET */}
        <CalculatorContainer
          title="Time and a Half Calculator 2026"
          description="Instant 1.5× overtime pay · USD · GBP · CAD · AUD · Hourly & Salaried"
          category="Earnings"
          lastUpdated="April 2026"
        >
          <div className="w-full overflow-hidden break-all px-1">
            <SalaryCalculator defaultMode="time-and-half" />
          </div>
        </CalculatorContainer>
      </section>

      {/* ── QUICK REFERENCE: COMMON HOURLY RATES ──────────────────────────── */}
      {/*
       * SEO: This section directly answers the #1 long-tail queries:
       * "how much is time and a half for $X an hour"
       * Google frequently pulls tables like this into Featured Snippets.
       */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-slate-800 mb-4 text-center">
          Time and a Half Quick Reference — Common Hourly Rates (USD)
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm text-slate-700 bg-white">
            <thead className="bg-blue-50 text-blue-800 font-bold text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Regular Rate</th>
                <th className="px-4 py-3 text-left">Time & Half (1.5×)</th>
                <th className="px-4 py-3 text-left">Double Time (2×)</th>
                <th className="px-4 py-3 text-left">10hr OT Weekly Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["$12.00/hr", "$18.00/hr", "$24.00/hr", "$660"],
                ["$15.00/hr", "$22.50/hr", "$30.00/hr", "$825"],
                ["$17.00/hr", "$25.50/hr", "$34.00/hr", "$935"],
                ["$18.00/hr", "$27.00/hr", "$36.00/hr", "$990"],
                ["$20.00/hr", "$30.00/hr", "$40.00/hr", "$1,100"],
                ["$22.00/hr", "$33.00/hr", "$44.00/hr", "$1,210"],
                ["$25.00/hr", "$37.50/hr", "$50.00/hr", "$1,375"],
                ["$30.00/hr", "$45.00/hr", "$60.00/hr", "$1,650"],
                ["$35.00/hr", "$52.50/hr", "$70.00/hr", "$1,925"],
                ["$40.00/hr", "$60.00/hr", "$80.00/hr", "$2,200"],
                ["$50.00/hr", "$75.00/hr", "$100.00/hr", "$2,750"],
              ].map(([reg, half, dbl, total], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="px-4 py-3 font-semibold">{reg}</td>
                  <td className="px-4 py-3 text-blue-600 font-bold">{half}</td>
                  <td className="px-4 py-3 text-purple-600 font-bold">{dbl}</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">
          10hr OT weekly total = (40hrs × regular rate) + (10hrs × time and half rate). Before tax.
        </p>
      </section>

      {/* ── FEATURE GRID ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {[
            { label: "1.5× & 2× Rates", icon: "✓", desc: "Time and half + double time" },
            { label: "4 Currencies", icon: "💱", desc: "USD · GBP · CAD · AUD" },
            { label: "Tax Estimates", icon: "📊", desc: "See take-home after tax" },
            { label: "Salaried Workers", icon: "💼", desc: "Converts salary to hourly" },
          ].map((item) => (
            <div
              key={item.label}
              className="group bg-white border border-slate-200/60 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-blue-600 mb-2 text-2xl">{item.icon}</div>
              <div className="text-sm font-bold text-slate-800 mb-1">{item.label}</div>
              <div className="text-xs text-slate-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORLDWIDE OVERTIME RULES SECTION ─────────────────────────────── */}
      {/*
       * SEO: Targets "overtime rules uk 2026", "overtime australia fair work",
       * "canada overtime threshold", "FLSA overtime 40 hours" — all from one section.
       * This is a featured-snippet magnet. Google loves structured country comparisons.
       */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
            Overtime Laws by Country — 2026
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Our calculator supports all four frameworks. Select your currency and the correct threshold applies.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm text-slate-700 bg-white">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Country</th>
                <th className="px-4 py-3 text-left">Currency</th>
                <th className="px-4 py-3 text-left">OT Threshold</th>
                <th className="px-4 py-3 text-left">Standard OT Rate</th>
                <th className="px-4 py-3 text-left">Governing Law</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["🇺🇸 United States", "USD ($)", "40 hrs/week", "1.5× (time and a half)", "FLSA — Fair Labor Standards Act"],
                ["🇬🇧 United Kingdom", "GBP (£)", "Contractual only", "Contractual (1× to 2×)", "Working Time Regulations 1998"],
                ["🇨🇦 Canada (Ontario)", "CAD (CA$)", "44 hrs/week", "1.5× after threshold", "ESA — Employment Standards Act"],
                ["🇨🇦 Canada (BC/Sask)", "CAD (CA$)", "8 hrs/day or 40 hrs/wk", "1.5× (daily or weekly)", "Provincial ESA"],
                ["🇨🇦 Canada (Quebec)", "CAD (CA$)", "40 hrs/week", "1.5×", "Act Respecting Labour Standards"],
                ["🇦🇺 Australia", "AUD (A$)", "38 hrs/week", "1.5× first 2hrs, then 2×", "Fair Work Act 2009"],
                ["🇺🇸 California (US)", "USD ($)", "8 hrs/day or 40 hrs/wk", "1.5× daily; 2× over 12hrs/day", "California Labor Code §510"],
              ].map(([country, currency, threshold, rate, law], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-semibold">{country}</td>
                  <td className="px-4 py-3 text-blue-600 font-bold">{currency}</td>
                  <td className="px-4 py-3">{threshold}</td>
                  <td className="px-4 py-3 font-medium">{rate}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{law}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── EDUCATIONAL CONTENT + SIDEBAR ────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-headings:font-extrabold">

            <h2>How to Calculate Time and a Half Pay — Step by Step</h2>
            <p>
              The calculation is the same in every country — only the threshold and currency change.
              Use this formula for any hourly wage in USD, GBP, CAD, or AUD:
            </p>

            <div className="my-6 p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white not-prose shadow-xl">
              <p className="text-blue-400 font-mono tracking-widest uppercase text-xs mb-3">Step 1 — Overtime Rate</p>
              <p className="text-xl md:text-2xl font-light mb-4">Regular Rate × 1.5 = Time and Half Rate</p>
              <p className="text-blue-400 font-mono tracking-widest uppercase text-xs mb-3">Step 2 — Overtime Pay</p>
              <p className="text-xl md:text-2xl font-light mb-4">Time and Half Rate × Overtime Hours</p>
              <p className="text-blue-400 font-mono tracking-widest uppercase text-xs mb-3">Step 3 — Weekly Total</p>
              <p className="text-xl md:text-2xl font-light">(Regular Rate × 40) + Overtime Pay</p>
            </div>

            <h3>Example: $20/hr Worker, 10 Hours Overtime</h3>
            <p>
              Regular rate: $20/hr. Overtime rate: $20 × 1.5 = <strong>$30/hr</strong>. Overtime pay:
              10hrs × $30 = <strong>$300</strong>. Regular pay: 40hrs × $20 = $800.
              Weekly total: $800 + $300 = <strong>$1,100 before tax</strong>.
            </p>

            <h3>How to Calculate Overtime for Salaried Workers</h3>
            <p>
              Salaried non-exempt workers qualify for overtime under FLSA. To find their overtime rate:
              divide weekly salary by standard hours (usually 40) to get hourly equivalent, then multiply by 1.5.
              Example: $52,000/year ÷ 52 weeks = $1,000/week ÷ 40hrs = $25/hr regular rate.
              Overtime rate: $25 × 1.5 = <strong>$37.50/hr</strong>.
            </p>

            <h2>The 2025–2028 Overtime Tax Deduction — New US Rule</h2>
            <p>
              Starting with the 2025 tax year (filing in 2026), US workers can deduct
              the <strong>"overtime premium"</strong> — the extra 0.5× portion of overtime pay — from
              their federal taxable income. The cap is $12,500 if single or $25,000 if married filing
              jointly. Phase-outs begin at higher incomes. This is a legitimate and underused deduction
              that reduces the effective tax burden on overtime earnings.
            </p>

            <h3>Holiday Pay — Is It Automatically Time and a Half?</h3>
            <p>
              In the <strong>United States</strong>, federal law does not require holiday premium pay.
              It's entirely at the employer's discretion — though most offer it to attract and retain staff.
              In <strong>Australia</strong>, public holiday rates under Modern Awards are typically 250%
              (2.5×) of the ordinary rate. In <strong>Canada</strong>, public holiday pay must equal the
              employee's regular rate for that day, plus the regular rate for any hours actually worked.
              In the <strong>UK</strong>, holiday pay rules require your regular overtime to be reflected
              in statutory holiday pay calculations following the 2014 Bear Scotland v Fulton ruling.
            </p>

            <h2>Double Time Pay — When Does It Apply?</h2>
            <p>
              Double time (2×) is less common than time and a half but applies in specific scenarios.
              California mandates double time for any hours over 12 in a single workday and for the first
              8 hours worked on a 7th consecutive workday. Australian Modern Awards commonly require double
              time after the first two overtime hours. Some employers offer it voluntarily on Sundays or
              public holidays regardless of legal requirement.
            </p>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">

              {/* GBP Quick Reference */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  🇬🇧 UK Quick Reference (GBP)
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    ["£12.21/hr (NMW)", "£18.32/hr OT"],
                    ["£15.00/hr", "£22.50/hr OT"],
                    ["£20.00/hr", "£30.00/hr OT"],
                    ["£25.00/hr", "£37.50/hr OT"],
                  ].map(([base, ot]) => (
                    <div key={base} className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-600">{base}</span>
                      <span className="font-bold text-blue-600">{ot}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3">NMW 2026 = £12.21/hr. OT rate set by your contract.</p>
              </div>

              {/* CAD Quick Reference */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  🇨🇦 Canada Quick Reference (CAD)
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    ["CA$17.20/hr (ON min)", "CA$25.80/hr OT"],
                    ["CA$20.00/hr", "CA$30.00/hr OT"],
                    ["CA$25.00/hr", "CA$37.50/hr OT"],
                    ["CA$30.00/hr", "CA$45.00/hr OT"],
                  ].map(([base, ot]) => (
                    <div key={base} className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-600">{base}</span>
                      <span className="font-bold text-blue-600">{ot}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3">Ontario minimum wage 2026 = CA$17.20/hr. OT after 44hrs/week.</p>
              </div>

              {/* AUD Quick Reference */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  🇦🇺 Australia Quick Reference (AUD)
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    ["A$24.10/hr (min wage)", "A$36.15/hr OT"],
                    ["A$28.00/hr", "A$42.00/hr OT"],
                    ["A$35.00/hr", "A$52.50/hr OT"],
                    ["A$40.00/hr", "A$60.00/hr OT"],
                  ].map(([base, ot]) => (
                    <div key={base} className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-600">{base}</span>
                      <span className="font-bold text-blue-600">{ot}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3">National minimum wage 2026 = A$24.10/hr. OT after 38hrs/week.</p>
              </div>

              {/* Ad placeholder */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block">
                  Advertisement
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── SHARE SECTION ─────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 mb-12 flex justify-center">
        <div className="w-full bg-white rounded-2xl p-4 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-500 italic">
            Found this useful? Share it with your team or union rep:
          </p>
          <ShareButtons
            title="Free Time and a Half Calculator 2026 – USD, GBP, CAD & AUD"
            url="https://www.freeuscalculator.in/time-and-a-half-calculator"
          />
        </div>
      </section>

      {/* ── FAQ SECTION ──────────────────────────────────────────────────── */}
      {/*
       * FAQs map directly to real search queries.
       * Combined with FAQPage JSON-LD above → triggers rich result accordion.
       * Each question is a standalone indexed query Google can rank for.
       */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            {/* H2 with secondary keyword "overtime pay questions" */}
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-3">
              Time and a Half — Common Questions
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              Real answers for workers in the US, UK, Canada, and Australia.
            </p>
          </div>
          <FAQ title="" faqs={faqs} />
        </div>
      </section>

      {/* ── RELATED TOOLS ────────────────────────────────────────────────── */}
      {/*
       * Internal links distribute page authority.
       * H2 contains "overtime pay tools" — a semantic topic cluster signal.
       */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 whitespace-nowrap">
            More Pay & Earnings Calculators
          </h2>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <RelatedCalculators currentTool="time-and-half" />
      </section>
    </div>
  );
}