// app/blog/paycheck-calculator-guide-2026/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Calculator, Calendar, Clock, CheckCircle2,
  ChevronRight, AlertTriangle, TrendingUp, Globe,
  Wallet, ShieldCheck,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// Tool page = transactional: "paycheck calculator"
// Blog page = informational: "how much tax is taken out of my paycheck",
//   "salary after tax USA 2026", "california vs texas take home pay",
//   "what is fica on my paycheck"
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Paycheck Calculator Guide 2026 – Take-Home Pay for All 50 US States",
  description:
    "How much tax is taken out of your paycheck in 2026? Complete guide: federal brackets, FICA rates, state income tax comparison for all 50 states, 401(k) savings, California vs Texas take-home, and every IRS number you need.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/blog/paycheck-calculator-guide-2026",
  },
  keywords: [
    "how much tax is taken out of my paycheck 2026",
    "paycheck calculator guide all 50 states",
    "salary after tax USA 2026",
    "california vs texas take home pay",
    "social security wage base 2026",
    "what is fica on my paycheck",
    "401k effect on paycheck 2026",
    "2026 federal income tax brackets",
    "states with no income tax 2026",
    "new york city paycheck tax 2026",
    "how to maximize take home pay 2026",
  ],
  openGraph: {
    title: "Paycheck Calculator Guide 2026 – Take-Home Pay All 50 US States",
    description:
      "Federal brackets, FICA explained, state tax comparison for all 50 states, CA vs TX take-home, and how 401(k)/HSA reduce your tax bill. Real 2026 IRS numbers.",
    url: "https://www.freeuscalculator.in/blog/paycheck-calculator-guide-2026",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    modifiedTime: "2026-05-01T00:00:00Z",
    authors: ["FreeUSCalculator"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.freeuscalculator.in/blog" },
        { "@type": "ListItem", position: 3,
          name: "Paycheck Calculator Guide 2026",
          item: "https://www.freeuscalculator.in/blog/paycheck-calculator-guide-2026" },
      ],
    },
    {
      "@type": "Article",
      headline: "Paycheck Calculator Guide 2026 – Take-Home Pay for All 50 US States",
      description:
        "Complete 2026 guide to US take-home pay: federal tax brackets, FICA rates, state income tax comparison for all 50 states, 401k/HSA savings, California vs Texas comparison, and every IRS number for the year.",
      url: "https://www.freeuscalculator.in/blog/paycheck-calculator-guide-2026",
      datePublished: "2026-04-01",
      dateModified: "2026-05-01",
      author: { "@type": "Organization", name: "FreeUSCalculator",
        url: "https://www.freeuscalculator.in" },
      publisher: { "@type": "Organization", name: "FreeUSCalculator",
        url: "https://www.freeuscalculator.in" },
      relatedLink: "https://www.freeuscalculator.in/paycheck-calculator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much tax is taken out of my paycheck in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most workers in 2026, total withholdings fall between 18% and 35% of gross pay depending on income, state, and filing status. At $50,000 filing single in a moderate-tax state, expect 20–24% total withholding. At $100,000, expect 27–32%. FICA alone takes 7.65% (6.2% Social Security + 1.45% Medicare) on top of federal and state income tax.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Social Security wage base for 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Social Security wage base for 2026 is $184,500. You pay 6.2% Social Security tax on every dollar up to this amount. Once your wages exceed $184,500 in a calendar year, Social Security withholding stops. Medicare (1.45%) continues on all wages with no cap, plus 0.9% additional on wages above $200,000 (single filers).",
          },
        },
        {
          "@type": "Question",
          name: "Which states have no income tax in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nine states have no broad-based wage income tax: Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Wyoming, Washington (no wage tax, but 7% capital gains tax above $270,000), and New Hampshire (no wage tax). Workers in these states take home $2,000–$10,000+ more per year compared to high-tax states like California or New York.",
          },
        },
        {
          "@type": "Question",
          name: "How does a 401(k) contribution affect my paycheck?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional 401(k) contributions reduce your federal and state taxable income dollar-for-dollar. The 2026 limit is $24,500 (under 50) or $31,000 (50+). A 5% contribution on a $75,000 salary ($3,750/year) saves roughly $600–$1,000 in combined federal and state taxes annually. Your paycheck decreases by less than the contribution because you're keeping money that would have gone to taxes.",
          },
        },
        {
          "@type": "Question",
          name: "What is the 2026 standard deduction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 2026 federal standard deduction is $16,100 for single filers, $32,200 for married filing jointly, and $24,150 for head of household. Seniors 65+ can claim an additional $2,050 (single) or $1,650 per qualifying spouse (married), plus the new Senior Bonus Deduction of up to $6,000 for eligible taxpayers.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const TAKEHOOME_TABLE = [
  ["$40,000",  "$2,568",  "$3,060",  "$1,600", "$2,731",  "$32,772",  "18.1%"],
  ["$50,000",  "$4,068",  "$3,825",  "$2,000", "$3,342",  "$40,107",  "19.8%"],
  ["$60,000",  "$5,918",  "$4,590",  "$2,400", "$3,924",  "$47,092",  "21.5%"],
  ["$75,000",  "$9,043",  "$5,738",  "$3,000", "$4,768",  "$57,219",  "23.7%"],
  ["$100,000", "$15,794", "$7,650",  "$4,000", "$6,046",  "$72,556",  "27.4%"],
  ["$120,000", "$21,294", "$9,180",  "$4,800", "$7,060",  "$84,726",  "29.4%"],
  ["$150,000", "$30,544", "$11,475", "$6,000", "$8,582",  "$102,981", "31.3%"],
  ["$200,000", "$46,544", "$14,505", "$8,000", "$10,996", "$131,951", "34.0%"],
];

const STATE_TABLE = [
  ["🏖️ Florida",    "0%",      "$0",     "$57,219", "—"],
  ["🤠 Texas",      "0%",      "$0",     "$57,219", "—"],
  ["☀️ Nevada",     "0%",      "$0",     "$57,219", "—"],
  ["🌲 Washington", "0%*",     "$0",     "$57,219", "—"],
  ["🌵 Arizona",    "2.5%",    "$1,875", "$55,344", "−$1,875"],
  ["Pennsylvania",  "3.07%",   "$2,303", "$54,916", "−$2,303"],
  ["🏔️ Colorado",   "4.4%",    "$3,300", "$53,919", "−$3,300"],
  ["🌸 Georgia",    "5.49%",   "$4,118", "$53,101", "−$4,118"],
  ["🗽 New York",   "4–10.9%", "$4,780", "$52,439", "−$4,780"],
  ["🌉 California", "1–13.3%", "$5,750", "$51,469", "−$5,750"],
];

const CA_VS_TX = [
  ["$60,000",  "~$43,100", "~$47,200", "+$4,100/yr", "+$342/mo"],
  ["$80,000",  "~$56,300", "~$61,800", "+$5,500/yr", "+$458/mo"],
  ["$100,000", "~$71,400", "~$77,550", "+$6,150/yr", "+$513/mo"],
  ["$150,000", "~$101,800","~$110,900","+$9,100/yr", "+$758/mo"],
  ["$200,000", "~$128,600","~$139,900","+$11,300/yr","+$942/mo"],
];

const PRETAX_TABLE = [
  ["401(k) 5% ($75K salary)",   "$3,750/yr",  "$450–825", "$0",  "$600–$1,020"],
  ["401(k) max (under 50)",     "$24,500/yr", "$5,390",   "$0",  "$5,390+"],
  ["HSA self-only",             "$4,400/yr",  "$968",     "$337","$1,305"],
  ["HSA family",                "$8,750/yr",  "$1,925",   "$669","$2,594"],
  ["Health insurance $300/mo",  "$3,600/yr",  "$792",     "$275","$1,067"],
  ["FSA",                       "$3,400/yr",  "$748",     "$260","$1,008"],
];

const IRS_NUMBERS = [
  { value: "$184,500",  label: "Social Security wage base",        note: "6.2% stops here" },
  { value: "$24,500",   label: "401(k) limit (under 50)",          note: "+$6,500 catch-up at 50+" },
  { value: "$16,100",   label: "Standard deduction — single",      note: "Up from $15,750" },
  { value: "$32,200",   label: "Standard deduction — married",     note: "Filing jointly" },
  { value: "$4,400",    label: "HSA limit — self-only",             note: "+$350 from 2025" },
  { value: "$8,750",    label: "HSA limit — family",                note: "+$400 from 2025" },
  { value: "$6,000",    label: "Senior Bonus Deduction (65+)",      note: "New for 2026" },
  { value: "$11,439",   label: "Max SS tax (employee)",             note: "6.2% × $184,500" },
];

const TOC = [
  { id: "formula",       label: "How your paycheck is calculated" },
  { id: "brackets",      label: "2026 federal income tax brackets" },
  { id: "fica",          label: "FICA: Social Security & Medicare explained" },
  { id: "irs-numbers",   label: "2026 key IRS numbers" },
  { id: "takehome-table",label: "Salary take-home table: $40K–$200K" },
  { id: "state-compare", label: "State income tax comparison" },
  { id: "no-tax-states", label: "States with zero income tax" },
  { id: "pretax",        label: "How 401(k) & HSA reduce your tax bill" },
  { id: "ca-vs-tx",      label: "California vs Texas take-home comparison" },
  { id: "nyc",           label: "New York City paycheck — city tax included" },
  { id: "maximize",      label: "How to maximize your take-home pay" },
  { id: "calculator",    label: "Use the free paycheck calculator" },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id}
      className="text-2xl md:text-3xl font-black tracking-tight text-slate-900
                 border-l-4 border-amber-500 pl-4 mt-14 mb-5 scroll-mt-6">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-black text-slate-900 mt-8 mb-3">{children}</h3>
  );
}

function CalculatorCTA({ variant = "mid" }: { variant?: "mid" | "end" }) {
  const isEnd = variant === "end";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl my-10
                  ${isEnd ? "p-10 text-center" : "p-7"}`}
      style={{
        background: isEnd
          ? "linear-gradient(135deg,#d97706 0%,#b45309 100%)"
          : "linear-gradient(135deg,#1c1917 0%,#292524 100%)",
      }}
    >
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full
                      bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center
                      justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Calculator size={15} className="text-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
              Free Tool · All 50 States
            </span>
          </div>
          <p className="text-white font-black text-lg leading-snug mb-1">
            {isEnd
              ? "Calculate your exact take-home pay by state"
              : "Skip the estimates — get your exact number"}
          </p>
          <p className="text-slate-400 text-[13px] leading-relaxed max-w-sm">
            {isEnd
              ? "Enter salary, select your state, add 401(k) and health insurance. See your real net paycheck broken down by federal tax, state tax, and FICA — instantly."
              : "All 50 states · Federal + state tax · FICA · 401(k) · HSA · Health insurance · 2026 IRS rates."}
          </p>
        </div>
        <Link
          href="/paycheck-calculator"
          className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-amber-500 hover:bg-amber-400 text-white font-black text-[14px]
                     transition-colors whitespace-nowrap group"
        >
          Use the Calculator
          <ArrowRight size={14}
            className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function PaycheckCalculatorGuidePage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 pt-12 md:pt-18 pb-0">
        <nav className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
          <ChevronRight size={11} />
          <Link href="/blog" className="hover:text-slate-700 transition-colors">Blog</Link>
          <ChevronRight size={11} />
          <span className="text-slate-600">Paycheck Calculator Guide 2026</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        bg-amber-50 border border-amber-100 text-amber-700
                        text-[10px] font-black uppercase tracking-widest mb-5">
          <Globe size={11} />
          US Payroll · All 50 States · 2026 IRS Rates
        </div>

        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]
                       text-slate-900 mb-6">
          Paycheck Calculator{" "}
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg,#d97706,#b45309)" }}>
            Guide
          </span>{" "}
          2026
          <br className="hidden sm:block" />
          <span className="text-slate-500 text-xl md:text-2xl font-bold">
            Take-Home Pay for All 50 US States
          </span>
        </h1>

        <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-7 max-w-2xl">
          Getting a job offer and wondering what you'll actually bring home? Confused
          why your $75,000 salary only nets $4,768 a month? This guide covers every
          deduction — federal brackets, FICA, state taxes, and how{" "}
          <strong className="text-slate-900">401(k) and HSA contributions cut your
          tax bill</strong> — with real 2026 IRS numbers.
        </p>

        {/* Key numbers strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
          {[
            { value: "$184,500", label: "SS wage base 2026" },
            { value: "$24,500",  label: "401(k) limit (under 50)" },
            { value: "$16,100",  label: "Std. deduction single" },
            { value: "9 states", label: "Zero income tax" },
          ].map((s) => (
            <div key={s.label}
              className="rounded-xl bg-amber-50 border border-amber-100 p-4 text-center">
              <p className="text-xl font-black text-amber-700 tabular-nums
                             leading-none mb-1">{s.value}</p>
              <p className="text-[10px] text-amber-600 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pb-7
                        border-b border-slate-100 text-[12px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} /> Updated May 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> 14 min read
          </span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            IRS Rev. Proc. 2025-32 · SSA 2026 data · One Big Beautiful Bill
          </span>
        </div>
      </section>

      {/* ── CONTENT + SIDEBAR ────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── ARTICLE ─────────────────────────────────────────────────── */}
          <article className="flex-1 min-w-0 text-slate-700 text-[15px] leading-relaxed">

            {/* TOC */}
            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6 mb-10">
              <p className="text-[11px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">In This Guide</p>
              <ol className="space-y-2.5">
                {TOC.map((item, i) => (
                  <li key={item.id} className="flex items-center gap-2.5">
                    <span className="text-[10px] text-amber-600 font-black w-5 h-5
                                     rounded-full bg-amber-50 flex items-center
                                     justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <a href={`#${item.id}`}
                      className="text-amber-700 hover:underline text-[13px] font-medium">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* ─── SECTION 1 ─── */}
            <H2 id="formula">How your paycheck is calculated</H2>
            <p>
              Every paycheck follows the same equation. It's not complicated once
              you see it clearly:
            </p>
            <div className="not-prose my-6 p-5 bg-slate-50 rounded-2xl border
                            border-slate-100 font-mono text-[13px] text-slate-700">
              <p className="leading-relaxed">
                <strong>Net Pay</strong> = Gross Pay<br />
                − Federal Income Tax<br />
                − State Income Tax<br />
                − FICA (Social Security 6.2% + Medicare 1.45%)<br />
                − Pre-Tax Deductions (401k, HSA, health insurance)<br />
                − Post-Tax Deductions<br />
                − Local Taxes (NYC, Philadelphia, etc.)
              </p>
            </div>
            <p>
              For most middle-income workers,{" "}
              <strong>net pay is 65–80% of gross pay</strong>. In high-tax states
              at higher incomes, it can drop below 65%.
            </p>

            {/* ─── SECTION 2 ─── */}
            <H2 id="brackets">2026 federal income tax brackets</H2>
            <p>
              These are <strong>marginal brackets</strong> — only the income within
              each bracket is taxed at that rate, not your entire salary. The IRS
              adjusted all thresholds roughly 2.8–4% for inflation in 2026.
            </p>

            <H3>Single filers</H3>
            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 my-4">
              <table className="w-full text-[12px] min-w-[360px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Rate</th>
                    <th className="px-4 py-3 text-left font-black">Taxable Income Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["10%", "$0 – $12,400"],
                    ["12%", "$12,401 – $50,400"],
                    ["22%", "$50,401 – $105,700"],
                    ["24%", "$105,701 – $201,775"],
                    ["32%", "$201,776 – $256,225"],
                    ["35%", "$256,226 – $640,600"],
                    ["37%", "Over $640,600"],
                  ].map(([rate, range], i) => (
                    <tr key={rate}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-black text-amber-700">{rate}</td>
                      <td className="px-4 py-2.5 text-slate-600">{range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-slate-400">
              Standard deduction: $16,100 (single) · $32,200 (married filing jointly) ·
              $24,150 (head of household)
            </p>

            <div className="not-prose rounded-2xl bg-amber-50 border border-amber-100
                            p-5 my-6">
              <p className="font-black text-amber-900 text-[13px] mb-2">
                Marginal vs effective rate — the most misunderstood thing in US taxes
              </p>
              <p className="text-amber-800 text-[13px] leading-relaxed">
                If you earn $60,000 single in 2026, you are <strong>not</strong> taxed
                at 22% on your whole salary. After the $16,100 standard deduction,
                your taxable income is $43,900. The first $12,400 is taxed at 10%
                ($1,240), the rest at 12% ($3,780). Total federal tax: $5,020.
                Effective rate: <strong>8.4%</strong> — not 22%.
              </p>
            </div>

            {/* ─── SECTION 3 ─── */}
            <H2 id="fica">FICA: Social Security & Medicare explained</H2>
            <p>
              FICA is mandatory — there's no way to reduce or avoid it through
              deductions or filing status. Both you and your employer each pay half.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[420px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Tax</th>
                    <th className="px-4 py-3 text-left font-black">Rate</th>
                    <th className="px-4 py-3 text-left font-black">Wage Cap</th>
                    <th className="px-4 py-3 text-left font-black">Max Employee Tax</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Social Security", "6.2%", "$184,500", "$11,439"],
                    ["Medicare", "1.45%", "No cap", "Unlimited"],
                    ["Additional Medicare", "0.9%", "Wages over $200K (single)", "Varies"],
                  ].map(([tax, rate, cap, max], i) => (
                    <tr key={tax}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-bold text-slate-900">{tax}</td>
                      <td className="px-4 py-2.5 font-black text-amber-700">{rate}</td>
                      <td className="px-4 py-2.5 text-slate-600">{cap}</td>
                      <td className="px-4 py-2.5 text-slate-600">{max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl border border-blue-100 bg-blue-50
                            p-5 my-5">
              <p className="font-black text-blue-900 text-[13px] mb-1.5">
                Self-employed? You pay both sides
              </p>
              <p className="text-blue-800 text-[13px] leading-relaxed">
                W-2 employees pay 7.65% FICA. Self-employed workers pay the full
                15.3% self-employment tax. The IRS does allow deducting half of
                the SE tax from taxable income, which softens the hit.
              </p>
            </div>

            {/* ─── SECTION 4 — IRS NUMBERS ─── */}
            <H2 id="irs-numbers">2026 key IRS numbers</H2>
            <p className="mb-5">
              Sourced from IRS Revenue Procedure 2025-32 and the Social Security
              Administration. The One Big Beautiful Bill (signed July 4, 2025)
              permanently extended TCJA provisions and introduced the new Senior
              Bonus Deduction.
            </p>
            <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
              {IRS_NUMBERS.map((s) => (
                <div key={s.label}
                  className="rounded-xl bg-slate-50 border border-slate-100 p-4">
                  <p className="text-lg font-black text-amber-700 tabular-nums
                                 leading-none mb-1">{s.value}</p>
                  <p className="text-[11px] font-semibold text-slate-700 leading-snug">
                    {s.label}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{s.note}</p>
                </div>
              ))}
            </div>

            {/* ─── SECTION 5 — TAKE HOME TABLE ─── */}
            <H2 id="takehome-table">Salary take-home table: $40K–$200K (2026)</H2>
            <p className="mb-5">
              Single filer · No pre-tax deductions · US national average state tax (~4%).
              Your actual take-home will vary by state — use the calculator for your
              exact figure.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-2">
              <table className="w-full text-[11px] text-slate-700 bg-white min-w-[600px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Salary</th>
                    <th className="px-3 py-3 text-left font-black">Federal Tax</th>
                    <th className="px-3 py-3 text-left font-black">FICA</th>
                    <th className="px-3 py-3 text-left font-black">Avg State Tax</th>
                    <th className="px-3 py-3 text-left font-black">Monthly Net</th>
                    <th className="px-3 py-3 text-left font-black">Annual Net</th>
                    <th className="px-3 py-3 text-left font-black">Eff. Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {TAKEHOOME_TABLE.map(([salary, fed, fica, state, monthly, annual, rate], i) => (
                    <tr key={salary}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                                  hover:bg-amber-50/20 transition-colors`}>
                      <td className="px-3 py-2.5 font-black text-slate-900">{salary}</td>
                      <td className="px-3 py-2.5 text-rose-600 font-semibold">{fed}</td>
                      <td className="px-3 py-2.5 text-orange-600">{fica}</td>
                      <td className="px-3 py-2.5 text-slate-500">{state}</td>
                      <td className="px-3 py-2.5 font-bold text-blue-700">{monthly}</td>
                      <td className="px-3 py-2.5 font-black text-emerald-700">{annual}</td>
                      <td className="px-3 py-2.5 text-slate-400">{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MID-ARTICLE CTA */}
            <CalculatorCTA variant="mid" />

            {/* ─── SECTION 6 — STATE COMPARE ─── */}
            <H2 id="state-compare">State income tax comparison (2026)</H2>
            <p className="mb-5">
              Impact on a <strong>$75,000 salary, single filer</strong>. This shows
              why state selection matters more than most people realize.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-2">
              <table className="w-full text-[12px] min-w-[500px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">State</th>
                    <th className="px-3 py-3 text-left font-black">Rate</th>
                    <th className="px-3 py-3 text-left font-black">State Tax on $75K</th>
                    <th className="px-3 py-3 text-left font-black">Est. Take-Home</th>
                    <th className="px-3 py-3 text-left font-black">vs No-Tax State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {STATE_TABLE.map(([state, rate, tax, home, diff], i) => (
                    <tr key={state}
                      className={`${i < 4 ? "bg-emerald-50/40" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                      <td className="px-3 py-2.5 font-bold text-slate-900">{state}</td>
                      <td className={`px-3 py-2.5 font-bold ${i < 4 ? "text-emerald-700" : "text-amber-700"}`}>
                        {rate}
                      </td>
                      <td className={`px-3 py-2.5 font-semibold ${i < 4 ? "text-emerald-600" : "text-rose-600"}`}>
                        {tax}
                      </td>
                      <td className="px-3 py-2.5 font-black text-blue-700">{home}</td>
                      <td className="px-3 py-2.5 text-slate-500 font-medium">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              *Washington has no wage income tax but does have a 7% capital gains tax
              above $270,000 (2026). California figures include SDI.
            </p>

            {/* ─── SECTION 7 — NO TAX STATES ─── */}
            <H2 id="no-tax-states">States with zero income tax — 2026</H2>
            <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
              {[
                ["🤠 Texas",       "No income tax"],
                ["🏖️ Florida",    "No income tax"],
                ["🎰 Nevada",      "No income tax"],
                ["❄️ Alaska",      "No income tax"],
                ["🌾 South Dakota","No income tax"],
                ["🦅 Wyoming",     "No income tax"],
                ["⛵ Tennessee",   "No wage income tax"],
                ["🌿 N. Hampshire","No wage income tax"],
                ["🌲 Washington",  "No wage tax*"],
              ].map(([state, note]) => (
                <div key={state}
                  className="rounded-xl bg-emerald-50 border border-emerald-100
                             p-3.5 flex flex-col gap-1">
                  <p className="font-black text-slate-900 text-[13px]">{state}</p>
                  <p className="text-[11px] text-emerald-700 font-semibold">{note}</p>
                </div>
              ))}
            </div>
            <p>
              Moving from California to Texas on a{" "}
              <strong>$100,000 salary saves roughly $6,150/year</strong> (~$512/month)
              in state income tax alone. At $150,000, the gap grows to $9,100/year.
            </p>

            {/* ─── SECTION 8 — PRE-TAX ─── */}
            <H2 id="pretax">How 401(k) & HSA reduce your tax bill</H2>
            <p>
              Pre-tax deductions reduce your taxable income before federal and state
              taxes are calculated. Every dollar you put into a qualifying pre-tax
              account saves real cash — not just deferred money.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[500px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Deduction</th>
                    <th className="px-4 py-3 text-left font-black">2026 Amount</th>
                    <th className="px-4 py-3 text-left font-black">Fed Tax Saved (22%)</th>
                    <th className="px-4 py-3 text-left font-black">FICA Saved</th>
                    <th className="px-4 py-3 text-left font-black">Total Saved</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PRETAX_TABLE.map(([ded, amount, fed, fica, total], i) => (
                    <tr key={ded}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-bold text-slate-900">{ded}</td>
                      <td className="px-4 py-2.5 text-blue-700 font-semibold">{amount}</td>
                      <td className="px-4 py-2.5 text-emerald-700 font-bold">{fed}</td>
                      <td className="px-4 py-2.5 text-emerald-600">{fica}</td>
                      <td className="px-4 py-2.5 font-black text-emerald-800">{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl border border-blue-100 bg-blue-50
                            p-5 my-5">
              <p className="font-black text-blue-900 text-[13px] mb-1.5">
                HSA: the triple tax advantage
              </p>
              <p className="text-blue-800 text-[13px] leading-relaxed">
                HSA contributions are pre-tax (reduce taxable income), growth is
                tax-free, and withdrawals for qualified medical expenses are tax-free.
                The 2026 limits are <strong>$4,400 (self-only)</strong> and{" "}
                <strong>$8,750 (family)</strong>. This is one of the most
                tax-efficient savings vehicles available to US workers.
              </p>
            </div>

            {/* ─── SECTION 9 — CA VS TX ─── */}
            <H2 id="ca-vs-tx">California vs Texas take-home pay comparison</H2>
            <p>
              One of the most searched salary comparisons in the US — the difference
              is real and grows significantly with income.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-5">
              <table className="w-full text-[12px] min-w-[460px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Salary</th>
                    <th className="px-3 py-3 text-left font-black">CA Take-Home</th>
                    <th className="px-3 py-3 text-left font-black">TX Take-Home</th>
                    <th className="px-3 py-3 text-left font-black">TX Advantage/yr</th>
                    <th className="px-3 py-3 text-left font-black">TX Advantage/mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {CA_VS_TX.map(([salary, ca, tx, yr, mo], i) => (
                    <tr key={salary}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-black text-slate-900">{salary}</td>
                      <td className="px-3 py-2.5 text-slate-600">{ca}</td>
                      <td className="px-3 py-2.5 font-bold text-blue-700">{tx}</td>
                      <td className="px-3 py-2.5 font-black text-emerald-700">{yr}</td>
                      <td className="px-3 py-2.5 text-emerald-600 font-semibold">{mo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl border border-amber-100 bg-amber-50
                            p-5 my-5 flex gap-3">
              <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-amber-900 text-[13px] mb-1">
                  The honest picture — property taxes matter too
                </p>
                <p className="text-amber-800 text-[13px] leading-relaxed">
                  Texas income tax savings are real. But Texas property tax rates
                  average 1.6–2.4% of assessed value annually — significantly higher
                  than California's Prop 13-capped rates. On a $500,000 home, Texas
                  property tax can run $8,000–$12,000/year vs $5,000–$7,000 in
                  California. Run both numbers before deciding.
                </p>
              </div>
            </div>

            {/* ─── SECTION 10 — NYC ─── */}
            <H2 id="nyc">New York City paycheck — city tax included</H2>
            <p>
              NYC workers face three layers: federal, New York State, and a separate
              New York City income tax — making it one of the highest-tax jurisdictions
              in the US.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[360px]">
                <caption className="text-left text-[11px] text-slate-500 mb-2 px-1">
                  $100,000 salary · Single filer · New York City · 2026
                </caption>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Federal Income Tax",         "~$15,800", "15.8%"],
                    ["Social Security (6.2%)",      "$6,200",   "6.2%"],
                    ["Medicare (1.45%)",            "$1,450",   "1.5%"],
                    ["New York State Tax",          "~$6,350",  "6.4%"],
                    ["New York City Tax (≤3.876%)", "~$3,620",  "3.6%"],
                    ["Total Deductions",            "~$33,420", "33.4%"],
                    ["Annual Take-Home",            "~$66,580", "66.6%"],
                    ["Monthly Take-Home",           "~$5,548",  "—"],
                  ].map(([item, amount, pct], i) => (
                    <tr key={item}
                      className={`${i >= 6 ? "bg-blue-50 font-black" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                      <td className="px-4 py-2.5 text-slate-700">{item}</td>
                      <td className={`px-4 py-2.5 font-bold tabular-nums ${
                        i >= 6 ? "text-blue-700" :
                        i < 5 ? "text-rose-600" : "text-rose-700"
                      }`}>{amount}</td>
                      <td className="px-4 py-2.5 text-slate-400">{pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              The same $100,000 in Texas nets roughly <strong>$77,550</strong> —
              nearly $11,000 more per year than New York City.
            </p>

            {/* ─── SECTION 11 — MAXIMIZE ─── */}
            <H2 id="maximize">How to maximize your take-home pay in 2026</H2>

            <div className="not-prose space-y-4 my-6">
              {[
                {
                  n: "1", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100",
                  title: "Max your 401(k) — or at least hit the employer match",
                  body: "The 2026 limit is $24,500 (under 50). Every dollar reduces your taxable income. A 5% contribution on $75,000 saves $600–$1,020/year in taxes. If your employer matches, that's free money on top.",
                },
                {
                  n: "2", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
                  title: "Open an HSA if you're on a High Deductible Health Plan",
                  body: "Triple tax advantage: pre-tax contributions, tax-free growth, tax-free withdrawals for medical expenses. 2026 limits: $4,400 (self-only), $8,750 (family). Balances roll over indefinitely — no use-it-or-lose-it.",
                },
                {
                  n: "3", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
                  title: "Update your W-4",
                  body: "Many people haven't updated their W-4 since starting their job. If you've gotten married, had children, bought a home, or started a side business, your withholding is probably wrong. The IRS free Tax Withholding Estimator at irs.gov/W4app takes 10 minutes.",
                },
                {
                  n: "4", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100",
                  title: "Use all available pre-tax benefits",
                  body: "Beyond 401(k) and HSA: Dependent Care FSA (up to $5,000/yr), Commuter Benefits ($340/month pre-tax for transit/parking), FSA ($3,400/yr). These are all legally reducing your taxable income.",
                },
                {
                  n: "5", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100",
                  title: "Understand bonus withholding — it's not your final tax rate",
                  body: "Bonuses are withheld at a flat 22% federal rate. This doesn't mean you owe 22% — your actual rate depends on total income. You may get some back at filing. Knowing this avoids the '$5,000 bonus only netted $3,700' shock.",
                },
              ].map((s) => (
                <div key={s.title}
                  className={`rounded-2xl border ${s.border} p-5 flex gap-4`}>
                  <div className={`${s.bg} ${s.color} w-9 h-9 rounded-xl
                                   flex items-center justify-center flex-shrink-0
                                   font-black text-[13px]`}>
                    {s.n}
                  </div>
                  <div>
                    <p className={`font-black text-[13px] mb-1 ${s.color}`}>{s.title}</p>
                    <p className="text-slate-600 text-[13px] leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FINAL CTA */}
            <div id="calculator">
              <CalculatorCTA variant="end" />
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100">
              <p className="text-[11px] text-slate-400 italic leading-relaxed">
                All tax calculations based on IRS Revenue Procedure 2025-32, Social
                Security Administration data, and state tax authority publications as
                of May 2026. Take-home estimates are for informational purposes only.
                Actual withholding may differ based on local taxes, W-4 elections, and
                employer-specific payroll configurations. Not tax advice — consult a
                licensed CPA or enrolled agent for your specific situation.
              </p>
              <p className="text-[11px] text-slate-400 mt-2">Last updated: May 2026</p>
            </div>

          </article>

          {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
          <aside className="w-full lg:w-[260px] flex-shrink-0 space-y-5 lg:sticky lg:top-6">

            {/* Primary CTA */}
            <div className="rounded-2xl overflow-hidden border border-amber-100 shadow-sm">
              <div className="px-5 py-4 text-white"
                style={{ background: "linear-gradient(135deg,#d97706,#b45309)" }}>
                <Wallet size={18} className="mb-2 text-amber-200" />
                <p className="font-black text-[14px] leading-snug mb-1">
                  Free Paycheck Calculator
                </p>
                <p className="text-amber-200 text-[11px] leading-relaxed">
                  All 50 states · Federal + state + FICA · 401(k) · HSA ·
                  2026 IRS rates.
                </p>
              </div>
              <Link href="/paycheck-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white
                           border-t border-amber-100 text-amber-700 font-black
                           text-[13px] hover:bg-amber-50 transition-colors group">
                Open Calculator
                <ArrowRight size={13}
                  className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* 2026 IRS quick ref */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">2026 IRS Key Numbers</p>
              <div className="space-y-2.5">
                {[
                  { label: "SS wage base",        value: "$184,500" },
                  { label: "401(k) limit <50",    value: "$24,500" },
                  { label: "401(k) limit 50+",    value: "$31,000" },
                  { label: "HSA self-only",        value: "$4,400" },
                  { label: "HSA family",           value: "$8,750" },
                  { label: "Std. ded. single",     value: "$16,100" },
                  { label: "Std. ded. married",    value: "$32,200" },
                  { label: "FICA total rate",      value: "7.65%" },
                ].map((r) => (
                  <div key={r.label}
                    className="flex items-center justify-between text-[12px]
                               border-b border-slate-50 pb-2 last:border-0">
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-black text-slate-900">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* No-tax states */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-emerald-700 mb-3">Zero Income Tax States</p>
              <div className="space-y-1.5">
                {["🤠 Texas","🏖️ Florida","🎰 Nevada","❄️ Alaska",
                  "🌾 South Dakota","🦅 Wyoming","⛵ Tennessee",
                  "🌿 N. Hampshire","🌲 Washington*"].map((s) => (
                  <p key={s} className="text-[12px] text-emerald-800 font-medium">{s}</p>
                ))}
              </div>
              <p className="text-[10px] text-emerald-600 mt-2">
                *No wage tax. 7% capital gains above $270K.
              </p>
            </div>

            {/* Related */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-3">Related Calculators</p>
              <div className="space-y-2">
                {[
                  { label: "Hourly to Salary Calculator", href: "/hourly-to-salary-calculator" },
                  { label: "Overtime Pay Calculator",     href: "/overtime-calculator" },
                  { label: "Bonus Tax Calculator",        href: "/bonus-tax-calculator" },
                  { label: "401(k) Calculator",           href: "/401k-calculator" },
                  { label: "Income Tax Calculator",       href: "/tax-calculator" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-amber-700
                               hover:underline">
                    <Calculator size={11} className="flex-shrink-0" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related blog posts */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-3">Related Guides</p>
              <div className="space-y-2">
                {[
                  { label: "Hourly to Salary Guide 2026",      href: "/blog/hourly-to-salary-guide-2026" },
                  { label: "Self-Employment Tax Guide 2026",    href: "/blog/self-employment-tax-guide-2026" },
                  { label: "Salary After Tax Guide 2026",       href: "/blog/salary-after-tax-guide-2026" },
                  { label: "India Salary Guide 2026",           href: "/blog/india-salary-guide-2026" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-amber-700
                               hover:underline">
                    <TrendingUp size={11} className="flex-shrink-0" />
                    {l.label}
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