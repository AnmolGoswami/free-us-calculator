// app/blog/hourly-to-salary-guide-2026/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Calculator, Calendar, Clock, CheckCircle2,
  ChevronRight, AlertTriangle, DollarSign, TrendingUp,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// Informational intent: "how much is $20 an hour annually", "hourly to salary guide"
// Tool page covers transactional: "hourly to salary calculator"
// Together they dominate both intent clusters for the same keywords
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hourly to Annual Salary Guide (US 2026) – $15, $20, $25, $30/hr Explained",
  description:
    "How much is $20 an hour per year? Complete 2026 guide: every hourly wage from $10–$100/hr converted to annual, monthly, biweekly, and weekly pay. Includes overtime at 1.5×, after-tax take-home, and gross vs net explained.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/blog/hourly-to-salary-guide-2026",
  },
  keywords: [
    "how much is $20 an hour annually",
    "hourly to annual salary guide 2026",
    "$25 an hour is how much a year",
    "$30 an hour annual salary",
    "hourly wage to yearly income",
    "overtime pay explained 2026",
    "gross vs net salary US",
    "how many hours in a work year",
    "hourly vs salary which is better 2026",
    "take home pay from hourly wage 2026",
  ],
  openGraph: {
    title: "$20, $25, $30/hr — How Much Is That Per Year? (US 2026 Guide)",
    description:
      "Every hourly wage converted to yearly salary with overtime, after-tax take-home, and biweekly pay. Real numbers, 2026 federal brackets.",
    url: "https://www.freeuscalculator.in/blog/hourly-to-salary-guide-2026",
    type: "article",
    publishedTime: "2026-01-10T00:00:00Z",
    modifiedTime: "2026-05-01T00:00:00Z",
    authors: ["Free US Calculator"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD — Article + FAQPage
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",  item: "https://www.freeuscalculator.in" },
        { "@type": "ListItem", position: 2, name: "Blog",  item: "https://www.freeuscalculator.in/blog" },
        { "@type": "ListItem", position: 3, name: "Hourly to Salary Guide 2026",
          item: "https://www.freeuscalculator.in/blog/hourly-to-salary-guide-2026" },
      ],
    },
    {
      "@type": "Article",
      headline: "Hourly to Annual Salary Guide 2026 – $15, $20, $25, $30/hr Explained",
      description:
        "Complete conversion guide for US hourly wages. Covers $10–$100/hr to annual, monthly, biweekly, and weekly pay with overtime and after-tax take-home estimates.",
      url: "https://www.freeuscalculator.in/blog/hourly-to-salary-guide-2026",
      datePublished: "2026-01-10",
      dateModified: "2026-05-01",
      author: { "@type": "Organization", name: "Free US Calculator",
        url: "https://www.freeuscalculator.in" },
      publisher: { "@type": "Organization", name: "Free US Calculator",
        url: "https://www.freeuscalculator.in" },
      relatedLink: "https://www.freeuscalculator.in/hourly-to-salary-calculator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much is $20 an hour annually in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "$20 an hour is $41,600 per year working 40 hours a week for 52 weeks. After a roughly 10–12% effective federal tax rate, estimated take-home is $36,600–$37,400 per year, or about $3,050–$3,117 per month.",
          },
        },
        {
          "@type": "Question",
          name: "How much is $25 an hour per year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "$25 an hour equals $52,000 per year at full-time hours (40 hrs/week × 52 weeks). After a roughly 15% effective tax rate, estimated take-home is about $44,200 annually or $3,683 per month.",
          },
        },
        {
          "@type": "Question",
          name: "How do you convert an hourly wage to annual salary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multiply your hourly rate × hours per week × 52. Example: $30/hour × 40 hours × 52 weeks = $62,400 per year. For part-time at 30 hrs/week: $30 × 30 × 52 = $46,800.",
          },
        },
        {
          "@type": "Question",
          name: "How does overtime affect annual salary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under the FLSA, most US non-exempt employees earn 1.5× their regular rate for hours over 40/week. A $20/hr worker doing 5 hours of overtime weekly earns an extra $7,800/year — raising total from $41,600 to $49,400.",
          },
        },
        {
          "@type": "Question",
          name: "How many hours are in a US work year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The standard is 2,080 hours (40 hrs × 52 weeks). With 10 paid vacation days and 6 federal holidays, actual hours drop to 1,952 — but your salary stays the same, raising your effective hourly rate.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const CONVERSION_TABLE = [
  ["$10/hr", "$400",   "$800",   "$1,733",  "$20,800",  "~$19,000"],
  ["$12/hr", "$480",   "$960",   "$2,080",  "$24,960",  "~$22,700"],
  ["$15/hr", "$600",   "$1,200", "$2,600",  "$31,200",  "~$28,100"],
  ["$17/hr", "$680",   "$1,360", "$2,947",  "$35,360",  "~$31,800"],
  ["$20/hr", "$800",   "$1,600", "$3,467",  "$41,600",  "~$36,900"],
  ["$22/hr", "$880",   "$1,760", "$3,813",  "$45,760",  "~$40,500"],
  ["$25/hr", "$1,000", "$2,000", "$4,333",  "$52,000",  "~$44,200"],
  ["$28/hr", "$1,120", "$2,240", "$4,853",  "$58,240",  "~$49,500"],
  ["$30/hr", "$1,200", "$2,400", "$5,200",  "$62,400",  "~$53,000"],
  ["$35/hr", "$1,400", "$2,800", "$6,067",  "$72,800",  "~$61,500"],
  ["$40/hr", "$1,600", "$3,200", "$6,933",  "$83,200",  "~$69,500"],
  ["$50/hr", "$2,000", "$4,000", "$8,667",  "$104,000", "~$85,300"],
  ["$60/hr", "$2,400", "$4,800", "$10,400", "$124,800", "~$99,800"],
  ["$75/hr", "$3,000", "$6,000", "$13,000", "$156,000", "~$121,700"],
  ["$100/hr","$4,000", "$8,000", "$17,333", "$208,000", "~$158,800"],
];

const TOC = [
  { id: "formula",      label: "The conversion formula" },
  { id: "20-an-hour",   label: "$20 an hour annually — full breakdown" },
  { id: "25-an-hour",   label: "$25 an hour monthly salary" },
  { id: "30-an-hour",   label: "$30/hr weekly & biweekly pay" },
  { id: "table",        label: "Quick reference: $10–$100/hr table" },
  { id: "overtime",     label: "How overtime changes everything" },
  { id: "gross-vs-net", label: "Gross vs take-home pay" },
  { id: "hours-in-year",label: "How many hours in a work year?" },
  { id: "hourly-vs-salary", label: "Hourly vs salary: which is better?" },
  { id: "calculator",   label: "Use the free calculator" },
];

// ─────────────────────────────────────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id}
      className="text-2xl md:text-3xl font-black tracking-tight text-slate-900
                 border-l-4 border-blue-600 pl-4 mt-14 mb-5 scroll-mt-6">
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
      className={`relative overflow-hidden rounded-2xl my-10 ${isEnd ? "p-10 text-center" : "p-7"}`}
      style={{
        background: isEnd
          ? "linear-gradient(135deg,#1d4ed8 0%,#7c3aed 100%)"
          : "linear-gradient(135deg,#060d1f 0%,#0c1e46 100%)",
      }}
    >
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full
                      bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center
                      justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Calculator size={15} className="text-blue-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">
              Free Tool
            </span>
          </div>
          <p className="text-white font-black text-lg leading-snug mb-1">
            {isEnd ? "Convert your exact hourly rate instantly" : "Skip the math — use the free calculator"}
          </p>
          <p className="text-slate-400 text-[13px] leading-relaxed max-w-sm">
            {isEnd
              ? "Enter any hourly wage and see yearly, monthly, biweekly, and weekly pay with overtime and after-tax take-home."
              : "Enter your rate, hours, and overtime. Get annual, monthly, and after-tax results instantly — updated for 2026 tax brackets."}
          </p>
        </div>
        <Link
          href="/hourly-to-salary-calculator"
          className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-blue-500 hover:bg-blue-400 text-white font-black text-[14px]
                     transition-colors whitespace-nowrap group"
        >
          Use the Calculator
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function HourlyToSalaryGuidePage() {
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
          <span className="text-slate-600">Hourly to Salary Guide 2026</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        bg-blue-50 border border-blue-100 text-blue-700
                        text-[10px] font-black uppercase tracking-widest mb-5">
          <DollarSign size={11} />
          Finance · US 2026 · Salary Guide
        </div>

        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]
                       text-slate-900 mb-6">
          Hourly to Annual Salary{" "}
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg,#1d4ed8,#7c3aed)" }}>
            Guide
          </span>{" "}
          — US 2026
        </h1>

        <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-7 max-w-2xl">
          <strong className="text-slate-900">$20 an hour is $41,600 per year.</strong>{" "}
          But that's the gross figure — after federal tax, FICA, and overtime the real
          number looks different. This guide converts every common hourly wage to its
          real annual equivalent, with after-tax estimates and overtime included.
        </p>

        <div className="flex flex-wrap items-center gap-4 pb-7
                        border-b border-slate-100 text-[12px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} /> Updated May 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> 10 min read
          </span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            2026 IRS federal tax brackets · FLSA overtime rules
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
                    <span className="text-[10px] text-blue-500 font-black w-5 h-5
                                     rounded-full bg-blue-50 flex items-center
                                     justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <a href={`#${item.id}`}
                      className="text-blue-600 hover:underline text-[13px] font-medium">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* ─── SECTION 1 ─── */}
            <H2 id="formula">The simple formula everyone gets wrong</H2>

            <p>
              Converting hourly pay to annual salary is simple on the surface:{" "}
              <strong>Hourly Rate × 40 hours × 52 weeks = Annual Salary.</strong>{" "}
              That gives you $41,600 for a $20/hour job, $52,000 for $25/hour, and
              $62,400 for $30/hour — all gross figures before any taxes touch them.
            </p>

            <p className="mt-4">
              Where US workers go wrong is assuming they'll work exactly 40 hours every
              week, 52 weeks straight. Real life has overtime, slow weeks, unpaid leave,
              and federal holidays. The calculator linked in this guide lets you plug
              in your actual hours. The table below gives you the standard gross figures
              for every common rate.
            </p>

            {/* ─── SECTION 2 ─── */}
            <H2 id="20-an-hour">$20 an hour is how much a year? (2026)</H2>

            <p>
              At a standard 40-hour week,{" "}
              <strong>$20 an hour equals $41,600 per year</strong> in gross income.
              For most US workers at this income level, the effective federal tax rate
              lands around 10–12%, putting your estimated after-tax take-home at{" "}
              <strong>roughly $36,600–$37,400 per year</strong> — or about
              $3,050–$3,117 per month.
            </p>

            <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 my-7">
              {[
                { label: "Weekly gross",  value: "$800" },
                { label: "Biweekly",      value: "$1,600" },
                { label: "Monthly gross", value: "$3,467" },
                { label: "Annual gross",  value: "$41,600" },
              ].map((s) => (
                <div key={s.label}
                  className="rounded-xl bg-slate-50 border border-slate-100
                             p-4 text-center">
                  <p className="text-xl font-black text-blue-700 tabular-nums
                                 leading-none mb-1">{s.value}</p>
                  <p className="text-[11px] text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>

            <p>
              That's the federal picture only. Add state income tax (0% in Texas, Florida,
              and Nevada — up to 13.3% in California) and FICA (7.65% flat), and your
              actual take-home will vary significantly by where you live.
            </p>

            {/* ─── SECTION 3 ─── */}
            <H2 id="25-an-hour">$25 an hour monthly salary — US 2026</H2>

            <p>
              <strong>$25 per hour comes to $52,000 per year</strong> at full-time hours.
              Breaking it down for monthly budgeting:
            </p>

            <ul className="mt-4 space-y-1.5">
              {[
                ["Weekly pay",           "$1,000"],
                ["Biweekly pay",         "$2,000"],
                ["Monthly gross",        "$4,333"],
                ["Annual gross",         "$52,000"],
                ["After-tax est. (~15%)", "~$44,200/yr or $3,683/mo"],
              ].map(([l, v]) => (
                <li key={l} className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                  <span><strong>{l}:</strong> {v}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4">
              $52,000/year sits right around the US median household income for a single
              earner. It's a comfortable starting point in most mid-cost US cities, though
              high-cost metros like New York, San Francisco, or Boston will stretch it thin.
            </p>

            {/* ─── SECTION 4 ─── */}
            <H2 id="30-an-hour">$30/hr weekly and biweekly pay (2026)</H2>

            <p>
              <strong>$30 an hour</strong> sits just above the $60,000/year mark that
              many US workers use as a financial milestone. Here's the full breakdown:
            </p>

            <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 my-7">
              {[
                { label: "Weekly",        value: "$1,200" },
                { label: "Biweekly",      value: "$2,400" },
                { label: "Monthly gross", value: "$5,200" },
                { label: "Annual gross",  value: "$62,400" },
              ].map((s) => (
                <div key={s.label}
                  className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-center">
                  <p className="text-xl font-black text-blue-700 tabular-nums
                                 leading-none mb-1">{s.value}</p>
                  <p className="text-[11px] text-blue-600">{s.label}</p>
                </div>
              ))}
            </div>

            <p>
              After federal and FICA (~22% combined), after-tax income is roughly
              $48,700/year or $4,058/month. If you're evaluating a $30/hr contract
              offer, also factor in overtime — at 5 hours of weekly overtime (1.5×),
              your annual earnings jump to $74,100, not $62,400.
            </p>

            {/* ─── SECTION 5 — TABLE ─── */}
            <H2 id="table">$10–$100/hr quick reference table</H2>

            <p className="mb-5">
              All figures based on 40 hrs/week × 52 weeks (2,080 hours).
              After-tax column uses 2026 federal brackets for single filers — your
              actual figure will vary by state and filing status.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-2">
              <table className="w-full text-[12px] text-slate-700 bg-white min-w-[560px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Rate</th>
                    <th className="px-4 py-3 text-left font-black">Weekly</th>
                    <th className="px-4 py-3 text-left font-black">Biweekly</th>
                    <th className="px-4 py-3 text-left font-black">Monthly</th>
                    <th className="px-4 py-3 text-left font-black">Annual</th>
                    <th className="px-4 py-3 text-left font-black">Est. After-Tax</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {CONVERSION_TABLE.map(([rate, wk, biwk, mo, yr, net], i) => (
                    <tr key={rate}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                                  hover:bg-blue-50/30 transition-colors`}>
                      <td className="px-4 py-2.5 font-black text-slate-900">{rate}</td>
                      <td className="px-4 py-2.5 text-slate-500">{wk}</td>
                      <td className="px-4 py-2.5 text-slate-500">{biwk}</td>
                      <td className="px-4 py-2.5 text-slate-500">{mo}</td>
                      <td className="px-4 py-2.5 font-bold text-blue-700">{yr}</td>
                      <td className="px-4 py-2.5 font-bold text-emerald-700">{net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              After-tax estimates use 2026 federal brackets, standard deduction ($15,000
              single), FICA 7.65%. State tax not included.
            </p>

            {/* MID-ARTICLE CTA */}
            <CalculatorCTA variant="mid" />

            {/* ─── SECTION 6 ─── */}
            <H2 id="overtime">Overtime changes everything</H2>

            <p>
              Under the Fair Labor Standards Act (FLSA), most non-exempt US employees
              must be paid at least <strong>1.5× their regular rate</strong> for any
              hours worked beyond 40 per week. That's time-and-a-half — and it adds
              up fast.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 my-6">
              <table className="w-full text-[12px] min-w-[440px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Base Rate</th>
                    <th className="px-4 py-3 text-left font-black">OT Rate (1.5×)</th>
                    <th className="px-4 py-3 text-left font-black">5 OT hrs/wk extra</th>
                    <th className="px-4 py-3 text-left font-black">Annual with OT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["$15/hr", "$22.50/hr", "+$5,850/yr",  "$37,050"],
                    ["$20/hr", "$30.00/hr", "+$7,800/yr",  "$49,400"],
                    ["$25/hr", "$37.50/hr", "+$9,750/yr",  "$61,750"],
                    ["$30/hr", "$45.00/hr", "+$11,700/yr", "$74,100"],
                  ].map(([base, ot, extra, total], i) => (
                    <tr key={base}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-bold text-slate-900">{base}</td>
                      <td className="px-4 py-2.5 text-blue-700 font-semibold">{ot}</td>
                      <td className="px-4 py-2.5 text-emerald-700 font-bold">{extra}</td>
                      <td className="px-4 py-2.5 font-black text-slate-900">{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              A $20/hr worker doing 5 hours of overtime weekly earns $7,800 extra per
              year — nearly a 20% raise without any change in base rate. This is why
              evaluating hourly offers without considering your expected overtime hours
              gives you an incomplete picture.
            </p>

            {/* ─── SECTION 7 ─── */}
            <H2 id="gross-vs-net">Gross salary vs take-home pay</H2>

            <p>
              Your annual salary figure is <strong>gross income</strong> — what you earn
              before federal income tax, FICA (Social Security + Medicare at 7.65%),
              state taxes, and pre-tax deductions take their share. For most US workers
              in 2026, the gap between gross and net is significant.
            </p>

            <div className="not-prose rounded-2xl border border-amber-100 bg-amber-50
                            p-5 my-6 flex gap-3">
              <AlertTriangle size={17} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-amber-900 text-[13px] mb-1">
                  The number your bank account sees
                </p>
                <p className="text-amber-800 text-[12px] leading-relaxed">
                  $20/hr = $41,600 gross → ~$36,900 after-tax (federal only). Add 5%
                  California state tax and your take-home drops closer to $34,000. Always
                  use your state + federal combined rate for budgeting.
                </p>
              </div>
            </div>

            {/* ─── SECTION 8 ─── */}
            <H2 id="hours-in-year">How many hours in a US work year?</H2>

            <p>
              The standard is <strong>2,080 hours</strong> (40 hrs × 52 weeks). But if
              your employer gives you 10 paid vacation days and 6 federal holidays, your
              actual working hours drop to <strong>1,952</strong>. Your salary stays the
              same — but your effective hourly rate increases, which matters when comparing
              a salaried offer against an hourly contract role.
            </p>

            <p className="mt-4">
              A $60,000 salary at 40 hrs/week = $28.85/hr. But if that salaried role
              genuinely expects 50 hrs/week, your real hourly rate is just $23.08 — less
              than a $24/hr contractor position with the same base pay.
            </p>

            {/* ─── SECTION 9 ─── */}
            <H2 id="hourly-vs-salary">Hourly vs salary — which is better for US workers?</H2>

            <H3>Hourly pay advantages</H3>
            <p>
              You get paid for every hour worked, including overtime at 1.5× under FLSA.
              More transparent — your employer can't quietly extend your workday without
              paying for it. Ideal if your hours vary or you regularly work extra shifts.
            </p>

            <H3>Salary advantages</H3>
            <p>
              Predictable paycheck regardless of slow weeks — important for budgeting
              fixed expenses like rent and car payments. Often comes with better benefits,
              PTO accrual, health insurance, and career advancement tracks.
            </p>

            <H3>The real test: convert both to effective hourly</H3>
            <p>
              Before accepting any US job offer, convert everything to an effective hourly
              rate. A $75,000/year salary sounds great — but if the role realistically
              expects 55-hour weeks, your effective rate is just{" "}
              <strong>$26.22/hr</strong>, not the $36.06 a 40-hour week implies. A $25/hr
              hourly role might actually pay better in real terms.
            </p>

            <div className="not-prose" id="calculator">
              <CalculatorCTA variant="end" />
            </div>

            {/* Author */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col
                            sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-[13px] font-black text-slate-900">Free US Calculator</p>
                <p className="text-[11px] text-slate-400">Updated May 2026</p>
              </div>
              <p className="text-[11px] text-slate-400 italic">
                Sources: IRS 2026 tax brackets · BLS wage data · FLSA regulations
              </p>
            </div>

          </article>

          {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
          <aside className="w-full lg:w-[260px] flex-shrink-0 space-y-5 lg:sticky lg:top-6">

            <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-sm">
              <div className="px-5 py-4 text-white"
                style={{ background: "linear-gradient(135deg,#1d4ed8,#7c3aed)" }}>
                <Calculator size={18} className="mb-2 text-blue-200" />
                <p className="font-black text-[14px] leading-snug mb-1">
                  Free Hourly → Salary Calculator
                </p>
                <p className="text-blue-200 text-[11px] leading-relaxed">
                  Enter any rate. Get annual, monthly, biweekly, overtime, and after-tax
                  results instantly.
                </p>
              </div>
              <Link
                href="/hourly-to-salary-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3
                           bg-white border-t border-blue-100 text-blue-700
                           font-black text-[13px] hover:bg-blue-50 transition-colors group"
              >
                Open Calculator
                <ArrowRight size={13}
                  className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Quick reference */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">Quick Reference</p>
              <div className="space-y-2.5">
                {[
                  ["$15/hr", "$31,200/yr"],
                  ["$20/hr", "$41,600/yr"],
                  ["$25/hr", "$52,000/yr"],
                  ["$30/hr", "$62,400/yr"],
                  ["$40/hr", "$83,200/yr"],
                  ["$50/hr", "$104,000/yr"],
                ].map(([rate, annual]) => (
                  <div key={rate}
                    className="flex items-center justify-between text-[12px]
                               border-b border-slate-50 pb-2 last:border-0">
                    <span className="text-slate-500 font-medium">{rate}</span>
                    <span className="font-black text-blue-700">{annual}</span>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-slate-400 mt-3">40 hrs/wk × 52 wks. Gross.</p>
            </div>

            {/* Key facts */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">2026 Key Numbers</p>
              <div className="space-y-2.5">
                {[
                  { label: "Full-time hours/yr", value: "2,080" },
                  { label: "OT rate (FLSA)",      value: "1.5×" },
                  { label: "FICA rate",           value: "7.65%" },
                  { label: "Std. deduction",      value: "$15,000" },
                  { label: "Min. wage (federal)", value: "$7.25/hr" },
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

            {/* Related */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-3">Related Guides</p>
              <div className="space-y-2">
                {[
                  { label: "Self-Employment Tax Guide",    href: "/blog/self-employment-tax-guide-2026" },
                  { label: "Salary After Tax Guide 2026", href: "/blog/salary-after-tax-guide-2026" },
                  { label: "DoorDash Earnings Guide",     href: "/blog/doordash-earnings-guide-2026" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-blue-600
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