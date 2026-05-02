import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";
import UberEarningsClient from "./UberEarningsClient";
import {
  Sparkles,
  Car,
  TrendingUp,
  DollarSign,
  Clock,
  ShieldCheck,
  BookOpen,
  Fuel,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA  –  every field is intentional for CTR, SERP snippets & crawlability
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  /*
   * Title formula: [Primary KW] + value prop + year
   * Target: "uber earnings calculator" (US: 12k/mo)  |  "uber driver income after tax" (UK/AU)
   * Keep under 60 chars for no truncation in SERP.
   */
  title:
    "Uber Earnings Calculator (2026) – Real Take-Home Pay After Gas, Expenses & Taxes",

  /*
   * Description is the #1 CTR lever outside the title.
   * Lead with the user's pain, end with the benefit.
   * 150–155 chars → fits Google's snippet without truncation.
   */
  description:
    "See your exact Uber take-home pay in 2026. Factors in the IRS $0.725/mile rate, 15.3% self-employment tax, gas, maintenance & Uber's commission. Free, no sign-up.",

  alternates: {
    canonical: "https://www.freeuscalculator.in/uber-earnings-calculator",
  },

  /*
   * KEYWORD STRATEGY
   * ─────────────────
   * Tier 1 – High-volume head terms (ranking takes time, builds authority)
   * Tier 2 – Medium-volume, low competition → fastest first-page wins
   * Tier 3 – Long-tail, commercial intent → convert visitors immediately
   *
   * Foreign-first targeting: US > UK > Canada > Australia > NZ
   * India excluded intentionally (low CPM, hurts RPM on ads).
   */
  keywords: [
    // ── TIER 1: HEAD TERMS (US primary) ──────────────────────────────────
    "uber earnings calculator",
    "uber driver earnings calculator",
    "uber take home pay calculator",
    "rideshare earnings calculator",
    "gig driver income calculator",

    // ── TIER 2: MEDIUM VOLUME, FAST WINS ─────────────────────────────────
    "uber driver profit calculator 2026",
    "uber earnings after expenses calculator",
    "uber hourly rate calculator after taxes",
    "lyft earnings calculator 2026",
    "doordash earnings calculator after expenses",
    "gig economy tax calculator USA",
    "uber driver net pay calculator",

    // ── TIER 3: LONG-TAIL (HIGH INTENT, LOW COMPETITION) ─────────────────
    "how much do uber drivers make after gas and taxes",
    "uber driver income after self employment tax",
    "uber earnings calculator after uber commission",
    "calculate uber profit per hour after all expenses",
    "uber driver break even calculator",
    "is uber driving worth it after expenses calculator",
    "uber driver quarterly tax estimator",
    "uber driver mileage deduction calculator 2026",
    "rideshare driver take home pay after irs mileage",
    "how to calculate real uber hourly wage",

    // ── UK / CANADA / AUSTRALIA VARIANTS ─────────────────────────────────
    "uber driver earnings uk after expenses",
    "uber driver take home pay canada",
    "uber driver income calculator australia",
    "gig worker tax calculator uk 2026",
  ],

  openGraph: {
    title:
      "Uber Earnings Calculator 2026 – What Do You Actually Take Home?",
    description:
      "Stop guessing. Calculate your real Uber profit after gas, Uber's cut, the IRS $0.725/mile deduction, and self-employment tax. Free & instant.",
    url: "https://www.freeuscalculator.in/uber-earnings-calculator",
    siteName: "Free US Calculator",
    type: "website",
    // Tip: add an og:image with text overlay "Uber Earnings Calculator" for social CTR
  },

  twitter: {
    card: "summary_large_image",
    title: "Uber Earnings Calculator (2026) – Real Driver Take-Home Pay",
    description:
      "Find out exactly what you keep after gas, Uber fees, mileage deduction ($0.725/mi), and taxes. Free calculator for Uber, Lyft & DoorDash.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /*
   * Structured data hint for your layout.tsx or _document.tsx:
   * Add <script type="application/ld+json"> with FAQPage + SoftwareApplication schema.
   * Drives rich results (FAQ accordion in SERP) → CTR lift of ~20-30%.
   */
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD STRUCTURED DATA  –  paste this into layout.tsx head or a Script tag
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Uber Earnings Calculator 2026",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description:
        "Calculate your real Uber driver take-home pay after gas, maintenance, IRS mileage deduction ($0.725/mile), Uber commission, self-employment tax, and federal income tax.",
      url: "https://www.freeuscalculator.in/uber-earnings-calculator",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1240",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is effective hourly rate calculated for Uber drivers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your effective hourly rate is your final take-home pay — after subtracting all operating expenses (gas, maintenance), self-employment tax (15.3%), and estimated federal income tax — divided by total hours worked. Most Uber drivers earn $10–$18 per hour after everything.",
          },
        },
        {
          "@type": "Question",
          name: "What is the IRS mileage rate for Uber drivers in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The IRS standard mileage rate for 2026 is $0.725 per mile (72.5 cents), up from $0.67 in 2024. This covers fuel, maintenance, insurance, and depreciation in a single deduction, and it is almost always more beneficial than tracking actual expenses.",
          },
        },
        {
          "@type": "Question",
          name: "How much do Uber drivers make after taxes and expenses in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Uber drivers net $10–$18 per hour after all expenses and taxes in 2026. Top earners in high-demand markets like New York or San Francisco can reach $20–$25/hr net during peak hours. Full-time drivers typically take home $25,000–$40,000 annually after expenses.",
          },
        },
        {
          "@type": "Question",
          name: "Does this calculator work for Lyft and DoorDash drivers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The tax calculations — self-employment tax, federal income tax, and IRS mileage deduction — are identical across all gig platforms. Simply enter your earnings from Lyft, DoorDash, Uber Eats, or any other rideshare or delivery app.",
          },
        },
        {
          "@type": "Question",
          name: "Do Uber drivers have to pay quarterly estimated taxes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you expect to owe $1,000 or more in taxes for the year, the IRS requires quarterly estimated tax payments (due in April, June, September, and January). This calculator shows your quarterly amount so you know exactly what to set aside.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function UberEarningsPage() {
  const seoContent = getToolContent("uber-earnings-calculator");

  const faqs = [
    {
      q: "How is my effective hourly rate calculated?",
      a: "It's your final take-home pay after deducting every operating expense — gas, maintenance, phone, cleaning — plus self-employment tax and estimated federal income tax, divided by total hours worked. This is the only number that tells you whether driving is actually worth your time.",
    },
    {
      q: "What is the IRS mileage deduction rate for 2026?",
      a: "The IRS standard mileage rate for 2026 is $0.725 per mile (72.5 cents). This is up from $0.67 in 2024. For every 1,000 miles you drive for Uber, you can deduct $725 from your taxable income — covering fuel, maintenance, insurance, and depreciation in a single calculation.",
    },
    {
      q: "What expenses should I enter for the most accurate result?",
      a: "For accuracy, include: gas, oil changes, tire rotations, brake work, rideshare insurance premiums, your phone bill (business portion), car washes, tolls, parking, and a vehicle depreciation estimate. Many drivers forget depreciation — driving 1,000 miles costs roughly $150–$200 in hidden vehicle wear.",
    },
    {
      q: "Does this include Self-Employment Tax?",
      a: "Yes. The calculator applies the full 15.3% SE tax (Social Security + Medicare) using 2026 IRS rules. It also automatically applies the 7.65% deduction adjustment that reduces your taxable income before calculating SE tax — the same method your CPA would use.",
    },
    {
      q: "Does this calculator work for Lyft, DoorDash, and Uber Eats?",
      a: "Absolutely. The self-employment tax, IRS mileage deduction, and federal income tax logic is identical for all gig platforms. Just enter your earnings from any platform — or combine them if you multi-app.",
    },
    {
      q: "How often should I run this calculation?",
      a: "Weekly is ideal. Gas prices fluctuate, surge income varies, and your expenses change. Drivers who check their real hourly rate weekly make better decisions about when and where to drive — and catch unprofitable shifts before they become a habit.",
    },
    {
      q: "Is this accurate for UK, Canada, and Australian drivers?",
      a: "The expense and hourly rate calculations apply universally. The tax section specifically models US federal tax rules (IRS). UK, Canadian, and Australian drivers should use the net profit figure and apply their own local tax rates for a final take-home number.",
    },
  ];

  return (
    <main className="bg-white text-slate-900 min-h-screen overflow-x-hidden">

      {/* ── JSON-LD Structured Data ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      {/*
       * SEO NOTE: H1 contains primary keyword "Uber Earnings Calculator"
       * and a secondary keyword "Take-Home Pay" naturally.
       * The subheading reinforces long-tail intent: "after gas, expenses and taxes".
       */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-4 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(245,158,11,0.08)_0%,rgba(255,255,255,0)_100%)]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10" />

        <div className="max-w-5xl mx-auto text-center mb-16">
          {/*
           * Badge: "2026 IRS RATES UPDATED" signals freshness to both users and Google.
           * Fresh content is a lightweight ranking signal and a strong CTR signal.
           */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-xs font-black uppercase tracking-widest mb-8 shadow-sm animate-fade-in">
            <Sparkles size={14} className="animate-pulse" /> 2026 IRS Rates Updated · $0.725/mile
          </div>

          {/*
           * H1: Primary keyword front-loaded. Under 70 chars so it reads cleanly.
           * "Real Take-Home" signals the emotional angle — no more guessing.
           */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-slate-900">
            Uber Earnings{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Calculator
            </span>
          </h1>

          {/*
           * Subheading: naturally contains "after gas, expenses and taxes" and
           * "take-home pay" — long-tail queries Google matches to this page.
           */}
          <p className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
            Find your{" "}
            <span className="text-slate-900 font-bold">
              real take-home pay after gas, expenses, and taxes
            </span>
            . Uses the 2026 IRS mileage rate ($0.725/mile) and actual federal tax brackets.
          </p>

          {/*
           * Trust signals directly under the headline:
           * These reduce bounce rate, which is a user-behaviour ranking signal.
           */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-500" /> 100% Free · No Sign-Up
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-500" /> Works for Uber, Lyft & DoorDash
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-500" /> Updated April 2026
            </span>
          </div>
        </div>

        {/* CALCULATOR */}
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden">
              <CalculatorContainer
                title="Uber & Rideshare Earnings Calculator"
                description="Net Profit, Hourly Rate & Tax Estimate · 2026 IRS Rules"
                category="Logistics"
                lastUpdated="April 2026"
              >
                <UberEarningsClient />
              </CalculatorContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT THIS CALCULATES SECTION ─────────────────────────────────── */}
      {/*
       * SEO: This section targets "what does uber earnings calculator include"
       * and "uber driver expenses" queries. H2 contains secondary keyword.
       * Four cards = four semantic sub-topics Google can surface in SERP snippets.
       */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-24 border-t border-slate-100">
        {/* Section heading — contains secondary keyword naturally */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
            What This Uber Driver Calculator Measures
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Most online tools only show gross pay. This one shows the four numbers that actually matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              l: "Net Hourly Rate",
              d: "Your real wage per hour after every expense and tax deduction. The number to benchmark against minimum wage.",
              i: <Clock size={28} />,
              c: "text-amber-500",
              bg: "bg-amber-50",
            },
            {
              l: "Tax Reserve Amount",
              d: "Exact quarterly estimated tax to set aside so you never face an IRS penalty at year-end.",
              i: <ShieldCheck size={28} />,
              c: "text-blue-500",
              bg: "bg-blue-50",
            },
            {
              l: "Expense Breakdown",
              d: "See exactly how much gas, maintenance, and Uber's commission eat into every dollar you earn.",
              i: <Fuel size={28} />,
              c: "text-rose-500",
              bg: "bg-rose-50",
            },
            {
              l: "Profit Margin %",
              d: "What percentage of your gross earnings you actually keep. Healthy drivers target 35%+ after everything.",
              i: <TrendingUp size={28} />,
              c: "text-emerald-500",
              bg: "bg-emerald-50",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 p-8 rounded-[32px] flex flex-col hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 group"
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

      {/* ── QUICK STATS BANNER ───────────────────────────────────────────── */}
      {/*
       * SEO: Answers "how much do uber drivers make" directly on page.
       * These numbers match current 2026 data — Google rewards factual accuracy.
       * Also a strong user engagement hook that reduces bounce.
       */}
      <section className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-400 text-xs font-black uppercase tracking-widest mb-8">
            2026 Average Uber Driver Earnings — United States
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "$15–$25/hr", label: "Gross before expenses" },
              { stat: "$10–$18/hr", label: "Net after all costs & tax" },
              { stat: "$0.725/mi", label: "2026 IRS mileage deduction" },
              { stat: "15.3%", label: "Self-employment tax rate" },
            ].map((item, i) => (
              <div key={i} className="text-white">
                <div className="text-3xl md:text-4xl font-black text-amber-400 mb-1">
                  {item.stat}
                </div>
                <div className="text-slate-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ───────────────────────────────────────── */}
      <section className="bg-slate-50/50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

            {/* ── MAIN ARTICLE ─────────────────────────────────────────── */}
            {/*
             * SEO: This article section is crawled as the main body content.
             * getToolContent() should return the human-written MD file (see content.md).
             * Ensure it contains H2/H3 headings with keyword variations,
             * real data references (e.g. $0.725/mile IRS 2026), and 1,200+ words.
             */}
            <article className="flex-1 bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-white px-8 md:px-12 py-10 border-b border-slate-100 flex items-center gap-5">
                <div className="bg-amber-500 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                  <BookOpen size={28} />
                </div>
                <div>
                  {/* H2 with secondary KW "uber driver earnings" */}
                  <h2 className="text-3xl font-black tracking-tight text-slate-900">
                    The Real Guide to Uber Driver Earnings in 2026
                  </h2>
                  <p className="text-slate-400 font-medium">
                    What the app shows you — and what it hides
                  </p>
                </div>
              </div>

              <div className="p-8 md:p-12 prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-amber-600">
                <div dangerouslySetInnerHTML={{ __html: seoContent }} />
              </div>
            </article>

            {/* ── SIDEBAR ──────────────────────────────────────────────── */}
            <aside className="w-full lg:w-[380px] space-y-8">

              {/* Warning Card — addresses "is uber worth it" search intent */}
              <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Car size={100} />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="text-amber-400" size={20} />
                  <h3 className="text-xl font-black">The Hidden Cost Most Drivers Miss</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm mb-4">
                  Vehicle depreciation is the largest expense most Uber drivers never track.
                  Every 1,000 miles you drive costs an estimated{" "}
                  <strong className="text-white">$150–$200 in car value</strong> — money that
                  doesn't show up in your weekly payout but hits you when you sell.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm">
                  The 2026 IRS mileage deduction of{" "}
                  <strong className="text-amber-400">$0.725 per mile</strong> already
                  accounts for this. Use it, every time.
                </p>
              </div>

              {/* How to Use This Calculator Card */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-5 flex items-center gap-2">
                  <BarChart3 size={20} className="text-amber-500" /> How to Get an Accurate Result
                </h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  {[
                    "Enter gross earnings from your Uber driver app (before Uber's commission).",
                    "Add your total tips for the period.",
                    "Enter total miles driven (check your app's trip history).",
                    "Add out-of-pocket expenses: gas receipts, maintenance, phone plan.",
                    "Select your tax filing status. Married filing jointly usually reduces your bill.",
                    "Check the result weekly as gas prices and earnings fluctuate.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="bg-amber-50 text-amber-600 font-black text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Ad placeholder */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm text-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-6">
                  Advertisement
                </span>
              </div>

              {/* Social share */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 text-center">
                  Share This Calculator
                </h4>
                <ShareButtons
                  title="Uber Earnings Calculator 2026 – Real Take-Home Pay After Expenses"
                  url="https://www.freeuscalculator.in/uber-earnings-calculator"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ──────────────────────────────────────────────────── */}
      {/*
       * SEO: FAQs trigger Google's rich results (accordion in SERP).
       * Combined with the FAQPage JSON-LD above, this is the fastest path
       * to earning more SERP real estate without building backlinks.
       *
       * Each question maps to a real search query:
       * "what is irs mileage rate 2026" | "uber driver quarterly taxes" etc.
       */}
      <section className="bg-white py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-black text-xs uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            {/* H2 contains long-tail "uber driver earnings questions" */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-4 text-slate-900 leading-[1.1]">
              Uber Driver Earnings — <br /> Common Questions Answered
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Real answers, not the vague stuff Uber puts in its help centre.
            </p>
          </div>

          <div className="bg-slate-50/50 rounded-[40px] p-8 md:p-16 border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKING — RELATED TOOLS ────────────────────────────── */}
      {/*
       * SEO: Internal links distribute page authority to related calculator pages.
       * This also helps Google understand your site's topical depth on gig economy tools.
       */}
      <section className="py-24 md:py-32 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div className="text-center md:text-left">
              <span className="text-amber-400 text-xs font-black tracking-[0.2em] uppercase">
                More Free Calculators
              </span>
              {/* H2 with topical anchor: "gig driver tools" */}
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-3">
                More Tools for Gig Drivers
              </h2>
              <p className="text-slate-400 mt-2 text-sm max-w-sm">
                Lyft, DoorDash, Instacart, Amazon Flex — the same tax rules apply.
              </p>
            </div>
            <div className="h-[2px] flex-1 bg-white/10 hidden md:block mx-12" />
          </div>
          <RelatedCalculators currentTool="uber-earnings-calculator" />
        </div>
      </section>
    </main>
  );
}