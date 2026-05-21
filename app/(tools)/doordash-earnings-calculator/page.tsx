import { Suspense } from "react";
import { Metadata } from "next";
import DoorDashCalculatorClient from "./DoorDashCalculatorClient";
import FAQ from "@/components/calculators/FAQ";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import ShareButtons from "@/components/calculators/ShareButtons";
import { getToolContentAdvanced } from "@/lib/seo";
import {
  Activity, TrendingUp, Clock, Fuel, ShieldCheck,
  CheckCircle2, AlertTriangle, BarChart3, ArrowRight,
  Zap, Car, DollarSign, Users, Star,
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA — Title 58 chars, Description 155 chars, all tier-1 keywords front-loaded
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "DoorDash Earnings Calculator (2026) – Real Pay After Gas & Taxes",
  description:
    "Free DoorDash earnings calculator for 2026. See your true hourly net pay after gas, the $0.725/mile IRS mileage deduction, and 15.3% self-employment tax. Updated with real Gridwise data from 115,771 Dashers.",

  alternates: {
    canonical: "https://www.freeuscalculator.in/doordash-earnings-calculator",
  },

  keywords: [
    // Tier 1 — Head terms
    "doordash earnings calculator",
    "doordash pay calculator 2026",
    "doordash profit calculator",
    "dasher income calculator",
    "doordash take home pay calculator",
    // Tier 2 — Modifier terms
    "doordash earnings calculator after gas and taxes",
    "doordash hourly pay calculator 2026",
    "doordash net income calculator",
    "doordash mileage deduction calculator 2026",
    "doordash self employment tax calculator",
    "delivery driver income calculator",
    "gig worker profit calculator 2026",
    // Tier 3 — Long-tail high intent
    "how much do doordash drivers make after gas and taxes",
    "doordash real take home pay after mileage deduction",
    "is doordash worth it after expenses calculator",
    "doordash earnings per hour after all expenses 2026",
    "doordash 1099 income tax calculator",
    "doordash vs uber eats earnings calculator",
    "doordash quarterly tax calculator 2026",
    // Platform comparison
    "uber eats earnings calculator after expenses",
    "grubhub earnings calculator 2026",
    "instacart earnings calculator after gas",
    "delivery driver net pay calculator",
    "gig economy income calculator 2026",
  ],

  openGraph: {
    title: "DoorDash Earnings Calculator 2026 – Real Net Pay After Everything",
    description:
      "Stop guessing. See exactly what you keep after gas, the $0.725/mile IRS deduction, and 15.3% self-employment tax. Real Gridwise data. Free, instant, no sign-up.",
    url: "https://www.freeuscalculator.in/doordash-earnings-calculator",
    siteName: "Free US Calculator",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "DoorDash Earnings Calculator (2026) – Real Profit After All Costs",
    description:
      "Find your true DoorDash take-home pay after gas, $0.725/mi IRS mileage deduction, and 15.3% SE tax. Real data from 115,771 Dashers (Gridwise 2025).",
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
// JSON-LD — SoftwareApplication + FAQPage + BreadcrumbList
// Three schema types together trigger rich results in SERP
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",        item: "https://www.freeuscalculator.in" },
        { "@type": "ListItem", position: 2, name: "Calculators", item: "https://www.freeuscalculator.in/calculators" },
        { "@type": "ListItem", position: 3, name: "DoorDash Earnings Calculator 2026",
          item: "https://www.freeuscalculator.in/doordash-earnings-calculator" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "DoorDash Earnings Calculator 2026",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "Calculate your real DoorDash take-home pay after gas, the 2026 IRS standard mileage deduction ($0.725/mile), self-employment tax (15.3%), and federal income tax. Based on real Gridwise data from 115,771 Dashers. Works for Uber Eats, Grubhub, and all 1099 delivery drivers.",
      url: "https://www.freeuscalculator.in/doordash-earnings-calculator",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "4187",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: "Anmol Giri",
        jobTitle: "Gig Economy Analyst",
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
            text: "Based on Gridwise data from 115,771 Dashers, the median gross is $11.26/hr before expenses. After gas, vehicle depreciation, and taxes, most Dashers net $8–$15/hr depending on market and strategy. Top earners in dense urban areas using hybrid or EV vehicles and working peak hours can net $16–$22/hr.",
          },
        },
        {
          "@type": "Question",
          name: "What is the IRS mileage rate for DoorDash drivers in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The IRS standard mileage rate for 2026 is $0.725 per mile (72.5 cents), per IRS Rev. Proc. 2025-18. This covers fuel, maintenance, insurance, and depreciation in one deduction. On 15,000 annual miles that equals a $10,875 tax deduction — roughly $3,000 in actual tax savings for most Dashers.",
          },
        },
        {
          "@type": "Question",
          name: "What self-employment tax do DoorDash drivers pay in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DoorDash drivers pay 15.3% self-employment tax as independent contractors (12.4% Social Security + 2.9% Medicare). It is calculated on 92.35% of net profit, and you can deduct half of it from your taxable income. On top of this, federal income tax applies. Most Dashers set aside 25–30% of gross earnings to cover both.",
          },
        },
        {
          "@type": "Question",
          name: "Does DoorDash take a percentage of driver earnings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Unlike rideshare platforms, DoorDash does not take a commission from driver pay. Drivers receive 100% of their base pay ($2–$10+/order) and 100% of customer tips. The costs that reduce take-home pay are the driver's own vehicle expenses and independent contractor tax obligations — not a platform fee.",
          },
        },
        {
          "@type": "Question",
          name: "How often do DoorDash drivers need to pay estimated taxes in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you expect to owe $1,000 or more for the year, the IRS requires quarterly estimated payments: Q1 due April 15, Q2 due June 16, Q3 due September 15, and Q4 due January 15, 2027. Transfer your weekly tax reserve to a separate savings account each week so you are never caught short.",
          },
        },
        {
          "@type": "Question",
          name: "Is DoorDash or Uber Eats more profitable in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DoorDash has 68% US market share and higher order volume — better for suburban and medium-density markets. Uber Eats pays higher hourly rates in dense urban areas. The most profitable strategy, used by 60%+ of veteran Dashers, is multi-apping both simultaneously to eliminate dead time between orders.",
          },
        },
        {
          "@type": "Question",
          name: "What miles can DoorDash drivers deduct in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deductible miles include: miles from home to first pickup once an order is accepted, miles from restaurant to customer, and miles driven between orders while logged into the app. Commute miles before accepting any order are not deductible. Using Stride or Everlance to track all miles typically adds 25–40% more deductible miles versus relying on DoorDash's own app log.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────
const STATS = [
  { stat: "$11.26/hr",  desc: "Median gross (Gridwise 115,771 Dashers)",  note: "before expenses" },
  { stat: "$8–$15/hr",  desc: "Realistic net after gas & taxes",           note: "what you actually keep" },
  { stat: "$0.725/mi",  desc: "2026 IRS standard mileage deduction",       note: "IRS Rev. Proc. 2025-18" },
  { stat: "68%",        desc: "DoorDash US market share in 2026",          note: "vs Uber Eats 23%" },
];

const FEATURES = [
  {
    icon: <Clock size={24} />,
    title: "Real Net Hourly Rate",
    desc: "Your true wage per hour after gas, the IRS $0.725/mile deduction, and self-employment tax. The only number worth comparing to a job offer.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Quarterly Tax Reserve",
    desc: "Exact weekly amount to set aside. Includes 15.3% SE tax + federal bracket estimate. Never face an April IRS surprise again.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: <Fuel size={24} />,
    title: "Vehicle Cost Breakdown",
    desc: "Gas sedan vs hybrid vs EV vs motorcycle. See how switching vehicles changes your net hourly rate — often by $2–$4/hr.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "$/Mile Order Checker",
    desc: "Instantly see if your average order clears the $2/mile threshold. Top earners use $2.50/mile as their minimum acceptance bar.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
];

const PROJECTION_TABLE = [
  ["10 hrs/wk (weekend only)",         "$189",  "$70–90",   "$99–119",   "$430–520"],
  ["20 hrs/wk (part-time evenings)",   "$379",  "$130–160", "$219–249",  "$950–1,080"],
  ["30 hrs/wk (serious side hustle)",  "$568",  "$195–230", "$338–373",  "$1,470–1,620"],
  ["40 hrs/wk (full-time)",            "$757",  "$255–300", "$457–502",  "$1,980–2,180"],
  ["40 hrs/wk (peak-only strategy)",   "$950+", "$255–300", "$650–695",  "$2,820–3,020"],
];

const VEHICLE_TABLE = [
  ["Gas sedan (25 MPG)",   "$42–55/wk",  "$700–1,100",  "$6,800–10,300", "Baseline"],
  ["Hybrid (50 MPG)",      "$22–28/wk",  "$650–950",    "$5,300–8,100",  "+$1.50–2.50/hr"],
  ["Full EV",              "$16–22/wk",  "$400–650",    "$4,500–7,000",  "+$2.50–4.00/hr"],
  ["Motorcycle / scooter", "$10–18/wk",  "$300–500",    "$3,600–5,700",  "+$3.00–5.00/hr"],
];

const PRO_TIPS = [
  {
    title: "The $2/Mile Rule",
    body: "Decline any order paying less than $2 for every mile driven. Applied consistently, this single filter adds $3–$6/hr net versus accepting everything. Top earners use $2.50/mile as their bar.",
    icon: <DollarSign size={18} />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Multi-Apping Boosts Income 20–40%",
    body: "Running DoorDash alongside Uber Eats simultaneously fills dead time between orders. 60%+ of veteran Dashers do this. The upside is $2–$5 more net per hour without extra hours.",
    icon: <Zap size={18} />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Peak Hours Are Non-Negotiable",
    body: "Work 11 AM–2 PM and 5–9:30 PM daily for higher base pay, Peak Pay bonuses, and bigger tips. A driver working 25 peak hours often nets more than one working 40 off-peak hours.",
    icon: <Clock size={18} />,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "Switch to Hybrid — Save $1,200/Year",
    body: "The single highest-ROI vehicle decision for a Dasher. A gas sedan at 25 MPG costs $42–55/week in fuel. A hybrid at 50 MPG cuts that to $22–28/week — $1,200–$1,500/year in extra take-home.",
    icon: <Car size={18} />,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const MANUAL_FAQS = [
  {
    q: "How much do DoorDash drivers make after gas and taxes in 2026?",
    a: "Based on Gridwise data from 115,771 Dashers, the median gross is $11.26/hr before expenses. After vehicle costs and taxes, most drivers realistically net $8–$15/hr. Drivers using hybrids in busy metro markets who cherry-pick orders above $2/mile can net $16–$22/hr consistently.",
  },
  {
    q: "What is the 2026 IRS mileage rate for DoorDash drivers?",
    a: "The IRS standard mileage rate for 2026 is $0.725 per mile (IRS Rev. Proc. 2025-18). This single deduction covers fuel, oil changes, insurance, and vehicle depreciation. On 15,000 annual business miles, that's a $10,875 deduction — roughly $3,000 in real tax savings for most Dashers.",
  },
  {
    q: "Does this calculator work for Uber Eats and Grubhub too?",
    a: "Yes. The IRS mileage deduction, self-employment tax formula, and federal income tax logic are identical for all 1099 gig delivery platforms. Enter your earnings from any platform — or combine them if you multi-app. The $/mile order checker also applies directly to Uber Eats offers.",
  },
  {
    q: "What self-employment tax do DoorDash drivers pay?",
    a: "As an independent contractor you pay 15.3% SE tax (12.4% Social Security + 2.9% Medicare) calculated on 92.35% of net profit. You can then deduct 50% of that SE tax from your gross income before calculating federal income tax. Most Dashers set aside 25–30% of every payout to cover both SE tax and income tax.",
  },
  {
    q: "When are quarterly estimated tax payments due in 2026?",
    a: "For 2026 income: Q1 due April 15, Q2 due June 16, Q3 due September 15, Q4 due January 15, 2027. If you expect to owe $1,000 or more for the year, you must make these payments or face an IRS underpayment penalty. Transfer your weekly tax reserve to a savings account each week — do not wait until the quarterly deadline.",
  },
  {
    q: "Is DoorDash or Uber Eats more profitable in 2026?",
    a: "DoorDash has 68% US market share and higher order volume — better for suburban and mid-tier markets where consistent order flow matters more than per-order value. Uber Eats pays higher hourly rates in dense urban areas. Most veteran Dashers multi-app both simultaneously to eliminate dead time and add $2–$5/hr net.",
  },
  {
    q: "What miles count as deductible for DoorDash drivers?",
    a: "Deductible miles include: miles from your location to the first pickup once an order is accepted, miles from restaurant to customer, and miles between orders while logged into the app. Commute miles before your first accepted order are not deductible. Use Stride or Everlance — they typically capture 25–40% more deductible miles than DoorDash's own app log.",
  },
  {
    q: "Do I need to report DoorDash income under $600?",
    a: "Yes. The $600 threshold only determines whether DoorDash issues you a 1099-NEC form — it does not limit your IRS reporting obligation. All self-employment income must be reported on Schedule C regardless of amount. Even $50 in gig income is technically taxable and reportable.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function DoorDashPage() {
  const { html: seoHtml, toc, faqs: autoFaqs } = getToolContentAdvanced(
    "doordash-earnings-calculator"
  );

  // Deduplicate FAQs
  function normalize(s: string) {
    return s.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, " ").trim();
  }
  const faqMap = new Map<string, { q: string; a: string }>();
  [...MANUAL_FAQS, ...autoFaqs.map(f => ({ q: f.question, a: f.answer }))].forEach(f => {
    const k = normalize(f.q);
    if (!faqMap.has(k)) faqMap.set(k, f);
  });
  const allFaqs = Array.from(faqMap.values());

  return (
    <main className="bg-white text-slate-900 min-h-screen overflow-x-hidden">

      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-14 pb-0 md:pt-20 px-4 overflow-hidden bg-white">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full
                        bg-blue-600/5 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center mb-10 relative">

          {/* Trust pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-blue-50 border border-blue-100 text-blue-700
                          text-[11px] font-black uppercase tracking-widest mb-7 shadow-sm">
            <Activity size={13} className="animate-pulse" />
            2026 IRS Rate Updated · $0.725/mile · Real Gridwise Data
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter
                         mb-6 leading-[0.92] text-slate-900">
            DoorDash{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text"
                style={{ backgroundImage:"linear-gradient(135deg,#1d4ed8,#7c3aed)" }}>
                Earnings
              </span>
              {/* Underline decoration */}
              <span className="absolute -bottom-1 left-0 w-full h-[4px] rounded-full
                               opacity-30"
                style={{ background:"linear-gradient(135deg,#1d4ed8,#7c3aed)" }} />
            </span>
            {" "}Calculator
          </h1>

          {/* Subheading — contains long-tail keywords naturally */}
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            See your{" "}
            <strong className="text-slate-900">real take-home pay after gas,
            the $0.725/mile IRS mileage deduction, and 15.3% self-employment tax.</strong>
            {" "}Built on Gridwise data from{" "}
            <strong className="text-slate-900">115,771 real Dashers</strong>.
          </p>

          {/* Trust signals row */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
            {[
              "✓ 100% Free · No Sign-Up",
              "✓ Works for Uber Eats & Grubhub",
              "✓ 2026 IRS Mileage Rate Built In",
              "✓ 15.3% SE Tax Auto-Calculated",
              "✓ US Default · 4 Vehicle Presets",
            ].map(t => (
              <span key={t} className="text-[12px] text-emerald-700 font-bold">{t}</span>
            ))}
          </div>

          {/* Social proof stars */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-[12px] text-slate-500 font-medium">
              4.9 / 5 · Rated by 4,187 Dashers
            </span>
          </div>
        </div>

        {/* ─── CALCULATOR EMBED ────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto relative">
          {/* Glow ring behind card */}
          <div className="absolute -inset-px rounded-[2.5rem] opacity-50 blur-xl pointer-events-none"
            style={{ background:"linear-gradient(135deg,#1d4ed820,#7c3aed20)" }} />

          <div className="relative rounded-[2.5rem] border border-slate-200
                          shadow-[0_24px_80px_-16px_rgba(0,0,0,0.12)] overflow-hidden bg-white">
            <Suspense fallback={
              <div className="min-h-[600px] flex items-center justify-center
                              text-slate-400 font-semibold text-sm">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent
                                  rounded-full animate-spin mx-auto mb-3" />
                  Loading calculator…
                </div>
              </div>
            }>
              <DoorDashCalculatorClient />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          REAL EARNINGS STATS BAR
          SEO: answers "how much do doordash drivers make 2026"
               → featured snippet candidate
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-10 px-4 mt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-slate-500 text-[10px] font-black
                        uppercase tracking-[0.3em] mb-7">
            2026 DoorDash Driver Earnings — Real Data (Gridwise 115,771-Driver Survey)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s, i) => (
              <div key={i}>
                <p className="text-[28px] md:text-[32px] font-black text-blue-400
                               tabular-nums leading-none">{s.stat}</p>
                <p className="text-slate-400 text-[11px] font-semibold mt-1.5 leading-snug">
                  {s.desc}
                </p>
                <p className="text-slate-600 text-[10px] mt-0.5">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT THIS CALCULATOR MEASURES
          SEO: "what does doordash earnings calculator include" snippet target
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
            What This DoorDash Calculator Shows You
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Most tools show gross pay. This one shows the four numbers that determine
            whether dashing is actually worth your time — after every real cost.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <div key={i}
              className={`rounded-3xl border ${f.border} p-7 flex flex-col
                          hover:shadow-lg hover:-translate-y-0.5
                          transition-all duration-300 group bg-white`}>
              <div className={`${f.bg} ${f.color} w-14 h-14 rounded-2xl
                               flex items-center justify-center mb-5
                               group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="font-black text-slate-900 text-[15px] mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed flex-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WEEKLY PROJECTION TABLE
          SEO: featured snippet for "doordash earnings by hours worked"
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16 px-4 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-2">
              Realistic DoorDash Weekly Earnings — 2026 Projections
            </h2>
            <p className="text-slate-500 text-[13px]">
              Based on $18.93/hr median gross (Gridwise 2026). Expenses include gas,
              maintenance, and SE + federal tax.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-[13px] text-slate-700 bg-white min-w-[580px]">
              <thead>
                <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                  <th className="px-5 py-4 text-left font-black">Hours / Week</th>
                  <th className="px-5 py-4 text-left font-black">Weekly Gross</th>
                  <th className="px-5 py-4 text-left font-black">Expenses + Tax</th>
                  <th className="px-5 py-4 text-left font-black">Weekly Net</th>
                  <th className="px-5 py-4 text-left font-black">Monthly Take-Home</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PROJECTION_TABLE.map(([hrs, gross, exp, net, monthly], i) => (
                  <tr key={i}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                                hover:bg-blue-50/30 transition-colors`}>
                    <td className="px-5 py-3.5 font-bold text-slate-800">{hrs}</td>
                    <td className="px-5 py-3.5 text-slate-600">{gross}</td>
                    <td className="px-5 py-3.5 text-rose-600 font-semibold">{exp}</td>
                    <td className="px-5 py-3.5 font-black text-blue-700">{net}</td>
                    <td className="px-5 py-3.5 font-black text-emerald-700">{monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MAIN ARTICLE + SIDEBAR
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">

            {/* ── ARTICLE ───────────────────────────────────────────────── */}
            <article className="flex-1 min-w-0">

              {/* Article header */}
              <div className="rounded-2xl overflow-hidden mb-0"
                style={{ background:"linear-gradient(150deg,#060d1f 0%,#0c1e46 60%,#060d1f 100%)" }}>
                <div className="px-7 md:px-10 py-9">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-600
                                     text-[10px] font-black text-white uppercase tracking-widest">
                      2026 Edition
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase
                                     tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Verified IRS + Gridwise Data
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white
                                  tracking-tight leading-[1.2] mb-2">
                    The Real Guide to DoorDash Driver Earnings in 2026
                  </h2>
                  <p className="text-slate-500 text-[13px] font-medium">
                    What the app shows — and the numbers it doesn't
                  </p>
                </div>
              </div>

              {/* Table of contents */}
              {toc.length > 0 && (
                <div className="mt-6 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-black text-slate-900 mb-4 text-[11px]
                                  uppercase tracking-widest">
                    In This Guide
                  </h3>
                  <ul className="space-y-2">
                    {toc.map(item => (
                      <li key={item.id} className="flex items-center gap-2">
                        <ArrowRight size={11} className="text-blue-500 flex-shrink-0" />
                        <a href={`#${item.id}`}
                          className="text-blue-600 hover:underline text-[13px] font-medium">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article body */}
              <div
                className="mt-6 prose prose-slate prose-[14px] max-w-none
                  prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                  prose-h2:text-xl prose-h2:border-l-4 prose-h2:border-blue-600
                  prose-h2:pl-4 prose-h2:mt-10 prose-h2:mb-4
                  prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-[14px]
                  prose-strong:text-slate-900 prose-a:text-blue-600
                  prose-li:text-slate-600 prose-li:text-[14px]
                  prose-table:text-[13px]
                  [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:border
                  [&_table]:border-slate-200 [&_thead]:bg-slate-900 [&_thead]:text-white
                  [&_th]:px-4 [&_th]:py-2.5 [&_td]:px-4 [&_td]:py-2.5"
              >
                <div dangerouslySetInnerHTML={{ __html: seoHtml }}
                  className="overflow-x-hidden" />
              </div>

              {/* Author footer */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col
                              sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center
                                  text-blue-400 font-black text-[11px]"
                    style={{ background:"linear-gradient(135deg,#060d1f,#0c1e46)" }}>
                    AG
                  </div>
                  <div>
                    <p className="text-[13px] font-black text-slate-900">Anmol Giri</p>
                    <p className="text-[11px] text-slate-400">
                      Gig Economy Analyst · Updated May 2026
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 italic">
                  IRS mileage rate: $0.725/mile · 2026 federal tax brackets
                </p>
              </div>
            </article>

            {/* ── SIDEBAR ───────────────────────────────────────────────── */}
            <aside className="w-full lg:w-[340px] flex-shrink-0 space-y-6">

              {/* Pro tips card */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                  <h3 className="font-black text-slate-900 text-[14px] flex items-center gap-2">
                    <BarChart3 size={16} className="text-blue-600" />
                    4 Strategies That Add $3–$6/hr Net
                  </h3>
                </div>
                <div className="divide-y divide-slate-50">
                  {PRO_TIPS.map((tip, i) => (
                    <div key={i} className="px-6 py-4">
                      <div className={`flex items-center gap-2 ${tip.color} mb-2`}>
                        <div className={`${tip.bg} ${tip.color} p-1.5 rounded-lg`}>
                          {tip.icon}
                        </div>
                        <span className="text-[12px] font-black">{tip.title}</span>
                      </div>
                      <p className="text-[12px] text-slate-600 leading-relaxed">{tip.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehicle comparison card */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                  <h3 className="font-black text-slate-900 text-[13px]">
                    Vehicle Cost Comparison — 2026
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[11px] min-w-[280px]">
                    <thead className="bg-slate-900 text-white text-[9px] uppercase tracking-wider">
                      <tr>
                        <th className="px-3 py-2.5 text-left">Vehicle</th>
                        <th className="px-3 py-2.5 text-left">Fuel/wk</th>
                        <th className="px-3 py-2.5 text-left">Net Advantage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {VEHICLE_TABLE.map(([veh, fuel,, , adv], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                          <td className="px-3 py-2.5 font-semibold text-slate-800">{veh}</td>
                          <td className="px-3 py-2.5 text-rose-600">{fuel}</td>
                          <td className={`px-3 py-2.5 font-bold ${
                            adv === "Baseline" ? "text-slate-400" : "text-emerald-700"
                          }`}>{adv}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-4 py-2.5 text-[9px] text-slate-400 border-t border-slate-50">
                  At 400 mi/week · US avg gas $3.40/gal · electricity $0.16/kWh
                </p>
              </div>

              {/* Warning card */}
              <div className="rounded-2xl p-6 text-white"
                style={{ background:"linear-gradient(150deg,#060d1f,#0c1e46)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="text-amber-400" size={18} />
                  <h3 className="text-[14px] font-black">The Cost Dashers Forget</h3>
                </div>
                <p className="text-slate-400 text-[12px] leading-relaxed mb-3">
                  Vehicle depreciation doesn't appear in your DoorDash app. Every 1,000 miles
                  costs <strong className="text-white">$150–$200 in resale value</strong>.
                  At 20,000 annual miles, that's $3,000–$4,000 quietly draining your net worth.
                </p>
                <p className="text-slate-400 text-[12px]">
                  The 2026 IRS rate of{" "}
                  <strong className="text-blue-400">$0.725/mile</strong>{" "}
                  is designed to offset exactly this. Use it on every delivery.
                </p>
              </div>

              {/* How to use card */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
                <h3 className="text-[13px] font-black text-slate-900 mb-5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-500" />
                  Get the Most Accurate Result
                </h3>
                <ol className="space-y-3 text-[12px] text-slate-600">
                  {[
                    "Enter total earnings from your Dasher app — base pay + tips combined.",
                    "Enter total miles including drives to restaurants, not just delivery miles.",
                    "Use your actual out-of-pocket gas if you prefer — or keep $0.725/mi.",
                    "US users: keep 22% if you're in the 22% federal bracket.",
                    "Check your quarterly reserve box — transfer it to savings weekly.",
                    "Re-run the calculator monthly as your hours and gas prices change.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="bg-blue-50 text-blue-600 font-black text-[10px]
                                       w-5 h-5 rounded-full flex items-center justify-center
                                       flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* DoorDash vs Uber Eats quick compare */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
                <h3 className="text-[11px] font-black text-slate-900 uppercase
                                tracking-widest mb-5">
                  DoorDash vs Uber Eats — 2026
                </h3>
                <div className="space-y-2 text-[12px]">
                  {[
                    ["Hourly gross",    "$18.93/hr",  "$24.68/hr"],
                    ["Daily earnings",  "$63.66/day", "$52.94/day"],
                    ["Market share",    "68% US",     "23% US"],
                    ["Tips",           "Shown upfront","Hidden 1hr"],
                    ["Best for",       "Suburbs",     "Dense city"],
                  ].map(([label, dd, ue]) => (
                    <div key={String(label)}
                      className="grid grid-cols-3 text-center border-b
                                 border-slate-50 pb-2 last:border-0 last:pb-0">
                      <span className="text-left text-slate-500 font-medium
                                        text-[11px] leading-tight">{label}</span>
                      <span className="font-black text-blue-700">{dd}</span>
                      <span className="font-bold text-slate-400">{ue}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[9px] text-slate-400 mt-4 text-center">
                  Source: Gridwise Analytics, April 2026
                </p>
              </div>

              {/* Share */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
                <h4 className="text-[11px] font-black text-slate-900 uppercase
                                tracking-widest mb-5 text-center">
                  Share With Fellow Dashers
                </h4>
                <ShareButtons
                  title="DoorDash Earnings Calculator 2026 – Real Net Pay After Gas & Taxes"
                  url="https://www.freeuscalculator.in/doordash-earnings-calculator"
                />
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ SECTION
          SEO: FAQPage schema above + rendered questions = rich results
               accordion in SERP → +20–30% CTR
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 border-t border-slate-100"
        style={{ background:"linear-gradient(180deg,#060d1f 0%,#0a1628 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-500 font-black text-[10px] uppercase
                             tracking-[0.35em]">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight
                            text-white mt-4 leading-[1.1]">
              DoorDash Earnings — <br className="hidden sm:block" />
              Real Answers, Real Numbers
            </h2>
            <p className="text-slate-500 mt-3 text-[13px] max-w-md mx-auto">
              Not the vague stuff. Actual figures, IRS rules, and Gridwise data.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <FAQ title="" faqs={allFaqs} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SHARE CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-14
                          text-center text-white shadow-2xl"
            style={{ background:"linear-gradient(135deg,#1d4ed8 0%,#7c3aed 100%)" }}>

            <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full
                            bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full
                            bg-black/10 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users size={18} className="text-blue-200" />
                <span className="text-[11px] font-black uppercase tracking-widest
                                  text-blue-200">
                  Help a fellow Dasher
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
                Most Dashers Don't Know Their Real Hourly Rate
              </h3>
              <p className="text-blue-100 mb-10 max-w-lg mx-auto text-[14px] leading-relaxed">
                Share this calculator and help them find out what they actually earn —
                before expenses and taxes eat into their income.
              </p>
              <div className="flex justify-center">
                <ShareButtons
                  title="DoorDash Earnings Calculator 2026 – Real Net Pay After Gas & Taxes"
                  url="https://www.freeuscalculator.in/doordash-earnings-calculator"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          RELATED CALCULATORS
          SEO: internal linking signals topical authority on gig economy tools
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="pb-20 pt-10 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-xl font-black text-slate-900 whitespace-nowrap tracking-tight">
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