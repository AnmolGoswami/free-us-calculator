// app/blog/hourly-to-salary-guide-2026/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Calculator, Calendar, Clock, CheckCircle2,
  ChevronRight, AlertTriangle, DollarSign, TrendingUp, Info,
  Briefcase, BarChart2, Shield,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA — Targeting highest-volume informational queries
// Primary cluster: "$20 an hour is how much a year" (~165k/mo searches)
// Secondary: "$25 an hour annually", "$30 an hour salary", "hourly to annual"
// Tertiary: "overtime pay calculator", "gross vs net salary", "2026 tax brackets"
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "$20 an Hour Is How Much a Year? Complete 2026 Salary Guide ($10–$100/hr)",
  description:
    "$20 an hour = $41,600/year gross, ~$35,606 after federal taxes and FICA. This 2026 guide converts every hourly wage from $10–$100/hr to annual, monthly, biweekly, and weekly pay — with real after-tax take-home, overtime calculations, and state-by-state notes.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/blog/hourly-to-salary-guide-2026",
  },
  keywords: [
    "$20 an hour is how much a year",
    "$25 an hour is how much a year",
    "$30 an hour is how much a year",
    "hourly to annual salary calculator 2026",
    "how much is $20 an hour annually",
    "$15 an hour annual salary",
    "$18 an hour yearly salary",
    "$22 an hour annual salary",
    "$35 an hour yearly income",
    "$40 an hour annual salary",
    "hourly wage to yearly income 2026",
    "overtime pay 1.5x calculator",
    "gross vs net salary US 2026",
    "how many hours in a work year",
    "hourly vs salary which is better",
    "2026 federal tax brackets hourly worker",
    "FICA tax hourly employee 2026",
    "biweekly paycheck calculator 2026",
  ],
  openGraph: {
    title: "$20 an Hour Is How Much a Year? 2026 Full Salary Breakdown",
    description:
      "$20/hr = $41,600 gross, ~$35,606 after taxes. Every hourly rate $10–$100 converted with monthly, biweekly, and after-tax figures. Updated for 2026.",
    url: "https://www.freeuscalculator.in/blog/hourly-to-salary-guide-2026",
    type: "article",
    publishedTime: "2026-01-10T00:00:00Z",
    modifiedTime: "2026-05-20T00:00:00Z",
    authors: ["Free US Calculator"],
    tags: ["Salary", "Hourly Pay", "Tax", "Finance", "2026", "FICA", "Overtime"],
  },
  twitter: {
    card: "summary_large_image",
    title: "$20/hr = $41,600/yr. But your take-home is ~$35,606. Here's why.",
    description:
      "Full 2026 salary guide: every hourly rate $10–$100 with after-tax take-home, overtime, biweekly pay, and state tax notes.",
  },
  robots: { index: true, follow: true },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD — Article + FAQPage (targets Google's People Also Ask boxes directly)
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.freeuscalculator.in/blog" },
        { "@type": "ListItem", position: 3, name: "Hourly to Salary Guide 2026",
          item: "https://www.freeuscalculator.in/blog/hourly-to-salary-guide-2026" },
      ],
    },
    {
      "@type": "Article",
      headline: "$20 an Hour Is How Much a Year? Complete 2026 Hourly to Salary Guide",
      description:
        "Converts every hourly wage $10–$100/hr to annual, monthly, biweekly, and weekly pay for 2026. Includes real after-tax take-home using 2026 IRS brackets, FICA breakdown, overtime at 1.5x, and part-time calculations.",
      url: "https://www.freeuscalculator.in/blog/hourly-to-salary-guide-2026",
      datePublished: "2026-01-10",
      dateModified: "2026-05-20",
      author: { "@type": "Organization", name: "Free US Calculator", url: "https://www.freeuscalculator.in" },
      publisher: { "@type": "Organization", name: "Free US Calculator",
        logo: { "@type": "ImageObject", url: "https://www.freeuscalculator.in/logo.png" } },
      mainEntityOfPage: "https://www.freeuscalculator.in/blog/hourly-to-salary-guide-2026",
      relatedLink: "https://www.freeuscalculator.in/hourly-to-salary-calculator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "$20 an hour is how much a year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "$20 an hour is $41,600 per year working 40 hours a week for 52 weeks (2,080 hours). After federal income tax ($2,812), Social Security ($2,579.20), and Medicare ($603.20), your estimated after-tax take-home is approximately $35,606 per year for a single filer — or about $2,967 per month. State income tax reduces this further.",
          },
        },
        {
          "@type": "Question",
          name: "$25 an hour is how much a year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "$25 an hour equals $52,000 per year at 40 hours/week. After federal income tax (~$4,658), Social Security ($3,224), and Medicare ($754), estimated after-tax take-home for a single filer is approximately $43,364 per year or $3,614 per month. State taxes reduce this further.",
          },
        },
        {
          "@type": "Question",
          name: "$30 an hour is how much a year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "$30 an hour equals $62,400 per year at full-time hours. After federal income tax (~$7,068), FICA ($4,774), estimated after-tax take-home is approximately $50,558 per year or $4,213 per month for a single filer using the standard deduction.",
          },
        },
        {
          "@type": "Question",
          name: "How do you convert hourly to annual salary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multiply: hourly rate × hours per week × 52 weeks. Examples: $20/hr × 40 × 52 = $41,600/yr. $25/hr × 40 × 52 = $52,000/yr. $30/hr × 40 × 52 = $62,400/yr. For part-time at 30 hrs/week multiply by 1,560 instead of 2,080.",
          },
        },
        {
          "@type": "Question",
          name: "How much is overtime pay at $20 an hour?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Overtime pay for $20/hr is $30.00/hr (1.5× the regular rate). Under the FLSA, non-exempt US employees must receive at least 1.5× their regular rate for hours over 40 per week. Working 5 hours of overtime weekly adds $7,800/year to your base $41,600 salary — bringing gross annual pay to $49,400.",
          },
        },
        {
          "@type": "Question",
          name: "How many hours are in a US work year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The standard US work year is 2,080 hours (40 hrs × 52 weeks). With 10 paid vacation days and 6 federal holidays, actual hours worked fall to approximately 1,952. Your salary stays the same either way — but knowing this matters when comparing salaried vs. hourly offers.",
          },
        },
        {
          "@type": "Question",
          name: "Is $20 an hour a good salary in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "$20 an hour ($41,600/year) is near the US median individual income and 2.76× the federal minimum wage of $7.25/hr. It's livable in most mid-cost cities but tight in high-cost metros like San Francisco, New York, or Boston. The BLS median hourly wage for all occupations is $23.11, so $20/hr sits slightly below the national median.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA TABLES
// ─────────────────────────────────────────────────────────────────────────────

// [rate, weekly, biweekly, monthly, annual, afterTax, fica, effectiveRate]
const FULL_TABLE = [
  ["$10/hr",  "$400",   "$800",   "$1,733",  "$20,800",  "~$18,942",  "$1,591",  "~9.9%"],
  ["$12/hr",  "$480",   "$960",   "$2,080",  "$24,960",  "~$22,582",  "$1,909",  "~9.5%"],
  ["$13/hr",  "$520",   "$1,040", "$2,253",  "$27,040",  "~$24,418",  "$2,068",  "~9.7%"],
  ["$15/hr",  "$600",   "$1,200", "$2,600",  "$31,200",  "~$27,718",  "$2,387",  "~11.2%"],
  ["$17/hr",  "$680",   "$1,360", "$2,947",  "$35,360",  "~$31,017",  "$2,705",  "~12.3%"],
  ["$18/hr",  "$720",   "$1,440", "$3,120",  "$37,440",  "~$32,742",  "$2,864",  "~12.6%"],
  ["$20/hr",  "$800",   "$1,600", "$3,467",  "$41,600",  "~$35,606",  "$3,182",  "~14.4%"],
  ["$22/hr",  "$880",   "$1,760", "$3,813",  "$45,760",  "~$38,987",  "$3,501",  "~14.8%"],
  ["$25/hr",  "$1,000", "$2,000", "$4,333",  "$52,000",  "~$43,364",  "$3,978",  "~16.6%"],
  ["$28/hr",  "$1,120", "$2,240", "$4,853",  "$58,240",  "~$48,012",  "$4,456",  "~17.6%"],
  ["$30/hr",  "$1,200", "$2,400", "$5,200",  "$62,400",  "~$50,558",  "$4,774",  "~19.0%"],
  ["$35/hr",  "$1,400", "$2,800", "$6,067",  "$72,800",  "~$57,944",  "$5,569",  "~20.4%"],
  ["$40/hr",  "$1,600", "$3,200", "$6,933",  "$83,200",  "~$65,157",  "$6,365",  "~21.7%"],
  ["$45/hr",  "$1,800", "$3,600", "$7,800",  "$93,600",  "~$72,093",  "$7,160",  "~23.0%"],
  ["$50/hr",  "$2,000", "$4,000", "$8,667",  "$104,000", "~$78,755",  "$7,956",  "~24.3%"],
  ["$60/hr",  "$2,400", "$4,800", "$10,400", "$124,800", "~$91,734",  "$9,547",  "~26.5%"],
  ["$75/hr",  "$3,000", "$6,000", "$13,000", "$156,000", "~$110,736", "$11,934", "~29.0%"],
  ["$100/hr", "$4,000", "$8,000", "$17,333", "$208,000", "~$141,712", "$15,912", "~31.9%"],
];

// Part-time calculations for $20/hr
const PART_TIME_20 = [
  ["10 hrs/wk",  "$200",  "$400",   "$867",   "$10,400",  "~$9,652"],
  ["20 hrs/wk",  "$400",  "$800",   "$1,733",  "$20,800",  "~$18,942"],
  ["25 hrs/wk",  "$500",  "$1,000", "$2,167",  "$26,000",  "~$23,317"],
  ["30 hrs/wk",  "$600",  "$1,200", "$2,600",  "$31,200",  "~$27,718"],
  ["35 hrs/wk",  "$700",  "$1,400", "$3,033",  "$36,400",  "~$32,097"],
  ["40 hrs/wk",  "$800",  "$1,600", "$3,467",  "$41,600",  "~$35,606"],
  ["45 hrs/wk*", "$950",  "$1,900", "$4,117",  "$49,400",  "~$42,147"],
  ["50 hrs/wk*", "$1,100","$2,200", "$4,767",  "$57,200",  "~$48,218"],
];

// Overtime table
const OVERTIME_TABLE = [
  ["$15/hr",  "$22.50", "1 OT hr/wk",  "+$1,170", "$32,370"],
  ["$15/hr",  "$22.50", "5 OT hrs/wk", "+$5,850", "$37,050"],
  ["$15/hr",  "$22.50", "10 OT hrs/wk","+$11,700","$42,900"],
  ["$20/hr",  "$30.00", "1 OT hr/wk",  "+$1,560", "$43,160"],
  ["$20/hr",  "$30.00", "5 OT hrs/wk", "+$7,800", "$49,400"],
  ["$20/hr",  "$30.00", "10 OT hrs/wk","+$15,600","$57,200"],
  ["$25/hr",  "$37.50", "5 OT hrs/wk", "+$9,750", "$61,750"],
  ["$30/hr",  "$45.00", "5 OT hrs/wk", "+$11,700","$74,100"],
  ["$40/hr",  "$60.00", "5 OT hrs/wk", "+$15,600","$98,800"],
];

// FICA breakdown for common rates
const FICA_TABLE = [
  ["$20/hr / $41,600", "$2,579.20", "$603.20",  "$3,182.40", "$38,418"],
  ["$25/hr / $52,000", "$3,224.00", "$754.00",  "$3,978.00", "$48,022"],
  ["$30/hr / $62,400", "$3,868.80", "$904.80",  "$4,773.60", "$57,626"],
  ["$40/hr / $83,200", "$5,158.40", "$1,206.40","$6,364.80", "$76,835"],
  ["$50/hr / $104,000","$6,448.00", "$1,508.00","$7,956.00", "$96,044"],
];

const TOC = [
  { id: "formula",       label: "The exact formula (and where people go wrong)" },
  { id: "20-an-hour",   label: "$20 an hour — full 2026 breakdown" },
  { id: "25-an-hour",   label: "$25 an hour — monthly and annual breakdown" },
  { id: "30-an-hour",   label: "$30 an hour — biweekly and annual" },
  { id: "big-table",    label: "$10–$100/hr master conversion table" },
  { id: "part-time",    label: "Part-time earnings at $20/hr (10–35 hrs/wk)" },
  { id: "overtime",     label: "Overtime at 1.5× — how much more you actually earn" },
  { id: "fica",         label: "FICA breakdown: Social Security + Medicare" },
  { id: "gross-vs-net", label: "Gross vs. net: what you actually keep" },
  { id: "state-taxes",  label: "State income tax: the variable nobody talks about" },
  { id: "work-hours",   label: "How many hours in a US work year?" },
  { id: "hourly-vs-sal",label: "Hourly vs salary: which pays more?" },
  { id: "is-it-good",   label: "Is $20/hr a good wage in 2026?" },
  { id: "faq",          label: "Frequently asked questions" },
];

// ─────────────────────────────────────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight
                           text-slate-900 mt-14 mb-5 scroll-mt-8 leading-tight">
      {children}
    </h2>
  );
}

function SubH({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold text-slate-900 mt-9 mb-3 leading-snug">{children}</h3>;
}

type CalloutType = "info" | "warning" | "success" | "tip";
function Callout({ type = "info", title, children }: { type?: CalloutType; title: string; children: React.ReactNode }) {
  const map: Record<CalloutType, { bg: string; border: string; icon: React.ReactNode; tc: string; bc: string }> = {
    info:    { bg: "bg-blue-50",    border: "border-blue-200",    icon: <Info size={15} className="text-blue-600 flex-shrink-0" />,           tc: "text-blue-900",    bc: "text-blue-800" },
    warning: { bg: "bg-amber-50",   border: "border-amber-200",   icon: <AlertTriangle size={15} className="text-amber-600 flex-shrink-0" />, tc: "text-amber-900",   bc: "text-amber-800" },
    success: { bg: "bg-emerald-50", border: "border-emerald-200", icon: <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />,tc: "text-emerald-900", bc: "text-emerald-800" },
    tip:     { bg: "bg-violet-50",  border: "border-violet-200",  icon: <TrendingUp size={15} className="text-violet-600 flex-shrink-0" />,   tc: "text-violet-900",  bc: "text-violet-800" },
  };
  const s = map[type];
  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-5`}>
      <div className={`flex items-start gap-2 font-bold text-[13px] mb-1.5 ${s.tc}`}>{s.icon}<span>{title}</span></div>
      <div className={`text-[13px] leading-relaxed ${s.bc}`}>{children}</div>
    </div>
  );
}

function CalculatorCTA({ variant = "mid" }: { variant?: "mid" | "end" }) {
  const isEnd = variant === "end";
  return (
    <div className={`relative rounded-2xl overflow-hidden my-10 p-6 sm:p-8 ${isEnd ? "text-center" : ""}`}
      style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 60%,#1d4ed8 100%)" }}>
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 70% 40%, #60a5fa, transparent 60%)" }} />
      <div className="relative">
        <span className="inline-block text-[10px] font-black uppercase tracking-widest text-blue-300
                         bg-blue-900/40 px-2 py-1 rounded-md mb-3">Free Tool · No Signup</span>
        <p className="text-white font-extrabold text-lg leading-snug mb-2">
          {isEnd ? "Get your exact after-tax take-home — instantly" : "Skip the math. Use the free calculator."}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-md mx-auto">
          {isEnd
            ? "Enter your hourly rate, hours worked, filing status, and state. Get annual, monthly, biweekly, and after-tax results updated for 2026."
            : "Enter your hourly rate and hours. Get annual, biweekly, overtime, and after-tax results updated for 2026 federal brackets."}
        </p>
        <Link href="/hourly-to-salary-calculator"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500
                     hover:bg-blue-400 text-white font-bold text-sm transition-all
                     shadow-lg shadow-blue-900/40 group ${isEnd ? "" : "w-full sm:w-auto"} justify-center`}>
          <Calculator size={15} />
          Use Free Calculator
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

/** Stat card grid */
function StatGrid({ items, color = "blue" }: { items: { label: string; value: string; sub?: string }[]; color?: "blue" | "emerald" | "violet" }) {
  const cls = color === "blue" ? "bg-blue-50 border-blue-100 text-blue-700 text-blue-600"
    : color === "emerald" ? "bg-emerald-50 border-emerald-100 text-emerald-700 text-emerald-600"
    : "bg-violet-50 border-violet-100 text-violet-700 text-violet-600";
  const [bg, border, val, sub] = cls.split(" ");
  return (
    <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 my-7">
      {items.map((s) => (
        <div key={s.label} className={`rounded-xl ${bg} border ${border} p-3 sm:p-4 text-center`}>
          <p className={`text-lg sm:text-xl font-extrabold ${val} tabular-nums leading-none mb-1`}>{s.value}</p>
          <p className={`text-[11px] font-semibold ${sub} leading-snug`}>{s.label}</p>
          {s.sub && <p className="text-[10px] text-slate-400 mt-0.5">{s.sub}</p>}
        </div>
      ))}
    </div>
  );
}

/** Responsive table: scrollable on mobile, full on desktop */
function RTable({ headers, rows, foot, highlightRow }: {
  headers: string[];
  rows: string[][];
  foot?: string[];
  highlightRow?: number;
}) {
  return (
    <div className="not-prose my-6 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-[11px] sm:text-[12px] md:text-[13px]">
          <thead>
            <tr className="bg-slate-950 text-white text-[9px] sm:text-[10px] uppercase tracking-widest">
              {headers.map((h, i) => (
                <th key={i} className="px-3 sm:px-4 py-3 text-left font-black whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, i) => (
              <tr key={i} className={
                i === highlightRow ? "bg-blue-50 font-bold" :
                i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
              }>
                {row.map((cell, j) => (
                  <td key={j} className={`px-3 sm:px-4 py-2 sm:py-2.5 whitespace-nowrap
                    ${j === 0 ? "font-bold text-slate-900" : ""}
                    ${j === row.length - 2 ? "font-bold text-blue-700" : ""}
                    ${j === row.length - 1 ? "font-bold text-emerald-700" : "text-slate-600"}
                  `}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
          {foot && (
            <tfoot>
              <tr className="bg-slate-900 text-white">
                {foot.map((cell, i) => (
                  <td key={i} className="px-3 sm:px-4 py-3 font-black text-[11px]">{cell}</td>
                ))}
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}

/** Mobile card + desktop table hybrid for the big conversion table */
function BigTableSection() {
  const mobileRows = FULL_TABLE.slice(0, 10); // show top 10 on mobile cards
  return (
    <div className="not-prose my-6">
      {/* Mobile: cards (show key rates only) */}
      <div className="grid grid-cols-1 gap-2 sm:hidden">
        {mobileRows.map(([rate, weekly, biweekly, monthly, annual, afterTax]) => (
          <div key={rate} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-extrabold text-slate-900 text-[14px]">{rate}</span>
              <span className="text-[10px] text-slate-400 font-medium">{annual}/yr gross</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-slate-50 rounded-lg py-2">
                <p className="text-[9px] text-slate-400 uppercase tracking-wide mb-0.5">Weekly</p>
                <p className="font-bold text-slate-700 text-[12px]">{weekly}</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2">
                <p className="text-[9px] text-slate-400 uppercase tracking-wide mb-0.5">Annual</p>
                <p className="font-bold text-blue-700 text-[12px]">{annual}</p>
              </div>
              <div className="bg-emerald-50 rounded-lg py-2">
                <p className="text-[9px] text-slate-400 uppercase tracking-wide mb-0.5">After Tax</p>
                <p className="font-bold text-emerald-700 text-[12px]">{afterTax}</p>
              </div>
            </div>
          </div>
        ))}
        <p className="text-[11px] text-slate-400 text-center pt-1">
          See the full $10–$100/hr table on desktop, or{" "}
          <Link href="/hourly-to-salary-calculator" className="text-blue-600 underline">
            use the calculator
          </Link>{" "}
          for your exact rate.
        </p>
      </div>
      {/* Desktop: full table */}
      <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                {["Rate", "Weekly", "Biweekly", "Monthly", "Annual Gross", "Est. After-Tax*", "FICA", "Eff. Rate"].map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-black whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {FULL_TABLE.map(([rate, weekly, biwk, monthly, annual, afterTax, fica, effRate], i) => (
                <tr key={rate} className={
                  rate === "$20/hr" ? "bg-blue-50 font-bold" :
                  i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                }>
                  <td className="px-4 py-2.5 font-extrabold text-slate-900 whitespace-nowrap">{rate}</td>
                  <td className="px-4 py-2.5 text-slate-500 tabular-nums">{weekly}</td>
                  <td className="px-4 py-2.5 text-slate-500 tabular-nums">{biwk}</td>
                  <td className="px-4 py-2.5 text-slate-500 tabular-nums">{monthly}</td>
                  <td className="px-4 py-2.5 font-bold text-blue-700 tabular-nums">{annual}</td>
                  <td className="px-4 py-2.5 font-bold text-emerald-700 tabular-nums">{afterTax}</td>
                  <td className="px-4 py-2.5 text-slate-400 tabular-nums text-[11px]">{fica}</td>
                  <td className="px-4 py-2.5 text-rose-600 font-semibold tabular-nums text-[11px]">{effRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="px-4 py-2.5 text-[11px] text-slate-400 border-t border-slate-100 bg-slate-50">
          * After-tax uses 2026 federal brackets, $15,000 standard deduction (single filer), FICA 7.65%. State tax not included. Your actual take-home will differ.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function HourlyToSalaryGuidePage() {
  return (
    <main className="bg-white text-slate-800 min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#0f172a 0%,#1e3a5f 55%,#1d4ed8 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-14 md:pt-16 md:pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-7 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} className="text-slate-600" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={10} className="text-slate-600" />
            <span className="text-slate-300">Hourly to Salary Guide 2026</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-5">
            {["Finance", "Salary Guide", "Updated May 2026"].map((t) => (
              <span key={t} className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1
                                       rounded-md bg-white/10 text-blue-200 border border-white/10">{t}</span>
            ))}
          </div>

          {/* H1 — contains the #1 target keyword verbatim */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-[1.15]
                         tracking-tight text-white mb-4 max-w-4xl">
            $20 an Hour Is How Much a Year?{" "}
            <span className="text-blue-300">Complete 2026 Salary Guide</span>
          </h1>

          <p className="text-slate-300 text-[15px] md:text-lg leading-relaxed mb-7 max-w-2xl">
            <strong className="text-white">$20/hr = $41,600/year gross. Take-home is ~$35,606</strong> after
            federal taxes and FICA for a single filer. This guide converts every hourly wage from{" "}
            <strong className="text-white">$10 to $100/hr</strong> to annual, monthly, biweekly, and
            weekly pay — with real after-tax numbers, overtime calculations, and state tax notes.
          </p>

          {/* Hero stat grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {[
              { value: "$41,600",  label: "$20/hr annual gross",  sub: "40 hrs × 52 wks" },
              { value: "~$35,606", label: "After-tax take-home",  sub: "Federal only, single filer" },
              { value: "$1,600",   label: "Biweekly paycheck",    sub: "Before deductions" },
              { value: "2,080",    label: "Hours in a work year", sub: "US standard" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white/8 border border-white/10 p-3 sm:p-4 text-center">
                <p className="text-lg sm:text-2xl font-extrabold text-white leading-none mb-1">{s.value}</p>
                <p className="text-[10px] sm:text-[11px] font-semibold text-blue-200 leading-snug">{s.label}</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-7 text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><Calendar size={11} /> Updated May 20, 2026</span>
            <span className="flex items-center gap-1"><Clock size={11} /> 14 min read</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 size={11} /> 2026 IRS brackets · BLS data · FLSA rules
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTENT + SIDEBAR ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── ARTICLE ── */}
          <article className="flex-1 min-w-0 w-full text-[15px] leading-relaxed text-slate-700">

            {/* TOC */}
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
                                 transition-colors leading-snug">{item.label}</a>
                  </li>
                ))}
              </ol>
            </div>

            {/* ═══ SECTION 1 — FORMULA ═══ */}
            <SectionHeading id="formula">The Exact Formula (and Where People Go Wrong)</SectionHeading>

            <p>
              The formula is simple:{" "}
              <strong>Hourly Rate × Hours Per Week × 52 Weeks = Annual Gross Salary.</strong>{" "}
              Punch in $20 an hour at full time and you get $41,600. That's the number you'll
              see on job boards, offer letters, and salary comparison sites. But it is a gross
              figure — meaning before taxes take their share.
            </p>

            <p className="mt-4">
              Here's where most people go wrong: they see $41,600 and assume that's their
              take-home pay. It's not. At $20/hr, a single filer loses:
            </p>

            <ul className="mt-3 space-y-1.5">
              {[
                ["Federal income tax (after $15,000 standard deduction)", "~$2,812"],
                ["Social Security (6.2% of gross)", "$2,579.20"],
                ["Medicare (1.45% of gross)", "$603.20"],
                ["State income tax (varies wildly — $0 to $4,000+)", "Depends on state"],
              ].map(([label, value]) => (
                <li key={label as string} className="flex items-start gap-2.5 text-[14px]">
                  <CheckCircle2 size={14} className="text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">{label}:</strong> {value}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4">
              After all of that (federal only), you keep roughly <strong>$35,606</strong> — not
              $41,600. That gap matters enormously when budgeting rent, car payments, or saving
              toward anything.
            </p>

            <Callout type="info" title="The formula for any rate, any hours">
              Full-time (40 hrs/wk): Rate × 2,080 = Annual gross<br />
              Part-time (30 hrs/wk): Rate × 1,560 = Annual gross<br />
              Part-time (20 hrs/wk): Rate × 1,040 = Annual gross<br />
              With overtime: add (OT hours × 52 × 1.5 × rate) to the base.
            </Callout>

            {/* ═══ SECTION 2 — $20 AN HOUR ═══ */}
            <SectionHeading id="20-an-hour">$20 an Hour Is How Much a Year? (2026 Full Breakdown)</SectionHeading>

            <p>
              At a standard 40-hour week, <strong>$20 an hour equals $41,600 per year</strong> in
              gross income. That puts you at 2.76 times the federal minimum wage ($7.25/hr) and
              just below the BLS national median hourly wage of $23.11 for all occupations.
            </p>

            <StatGrid color="blue" items={[
              { label: "Weekly gross",    value: "$800" },
              { label: "Biweekly gross",  value: "$1,600" },
              { label: "Monthly gross",   value: "$3,467" },
              { label: "Annual gross",    value: "$41,600" },
            ]} />

            <SubH>After-tax take-home at $20/hr (2026, single filer)</SubH>
            <div className="not-prose rounded-2xl border border-slate-200 overflow-hidden my-5 shadow-sm">
              {[
                ["Annual gross earnings", "$41,600", false],
                ["Standard deduction (single, 2026)", "−$15,000", true],
                ["Taxable income", "$26,600", false],
                ["Federal income tax (10% bracket)", "−$2,812", true],
                ["Social Security (6.2%)", "−$2,579", true],
                ["Medicare (1.45%)", "−$603", true],
                ["Estimated federal after-tax take-home", "~$35,606", false],
                ["Monthly take-home (÷ 12)", "~$2,967/mo", false],
                ["Biweekly take-home (÷ 26)", "~$1,370/paycheck", false],
              ].map(([label, val, neg], i) => (
                <div key={i} className={`flex items-center justify-between px-4 py-2.5 text-[13px]
                  border-b border-slate-100 last:border-0
                  ${i >= 6 ? "bg-emerald-50 font-bold" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                  <span className="text-slate-700">{label}</span>
                  <span className={`font-bold tabular-nums ${
                    i >= 6 ? "text-emerald-700" : neg ? "text-rose-600" : "text-slate-900"
                  }`}>{val}</span>
                </div>
              ))}
            </div>

            <p>
              Remember: this is <strong>federal tax only.</strong> California adds up to 9.3% on
              top of that. Texas, Florida, and Nevada charge zero state income tax. Where you live
              can swing your actual take-home by $1,500–$3,500 per year on a $20/hr income. We
              cover state taxes in detail in Section 10.
            </p>

            <Callout type="tip" title="Is $20/hr enough to live on?">
              At $35,606 net per year, $20/hr is livable in most mid-cost US cities — Oklahoma City,
              Indianapolis, Memphis, Pittsburgh — and tight but manageable in Phoenix, Austin, or Denver.
              In New York, San Francisco, or Los Angeles, $20/hr is below a living wage for a single adult.
              The MIT Living Wage Calculator puts the living wage for a single adult at $21–$37/hr
              depending on city.
            </Callout>

            {/* ═══ SECTION 3 — $25 AN HOUR ═══ */}
            <SectionHeading id="25-an-hour">$25 an Hour Is How Much a Year? (2026)</SectionHeading>

            <p>
              <strong>$25 an hour equals $52,000 per year</strong> at full-time hours. This sits at
              the US median household income range for single earners and puts you comfortably above
              the BLS national median hourly wage of $23.11. Here's the full picture:
            </p>

            <StatGrid color="blue" items={[
              { label: "Weekly gross",   value: "$1,000" },
              { label: "Biweekly gross", value: "$2,000" },
              { label: "Monthly gross",  value: "$4,333" },
              { label: "Annual gross",   value: "$52,000" },
            ]} />

            <div className="not-prose rounded-2xl border border-slate-200 overflow-hidden my-5 shadow-sm">
              {[
                ["Annual gross", "$52,000", false],
                ["Federal income tax (after std. deduction)", "−$4,658", true],
                ["FICA (Social Security + Medicare)", "−$3,978", true],
                ["Est. after-tax take-home (federal only)", "~$43,364", false],
                ["Monthly take-home", "~$3,614/mo", false],
                ["Biweekly take-home", "~$1,668/paycheck", false],
              ].map(([label, val, neg], i) => (
                <div key={i} className={`flex items-center justify-between px-4 py-2.5 text-[13px]
                  border-b border-slate-100 last:border-0
                  ${i >= 3 ? "bg-emerald-50 font-bold" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                  <span className="text-slate-700">{label}</span>
                  <span className={`font-bold tabular-nums ${
                    i >= 3 ? "text-emerald-700" : neg ? "text-rose-600" : "text-slate-900"
                  }`}>{val}</span>
                </div>
              ))}
            </div>

            <p>
              $52,000 a year is where housing in mid-cost cities starts becoming manageable —
              the standard guideline is to spend no more than 30% of gross income on rent, which
              gives you a $1,300/mo budget. That's tight in most major metros but workable in
              smaller cities and suburbs.
            </p>

            {/* ═══ SECTION 4 — $30 AN HOUR ═══ */}
            <SectionHeading id="30-an-hour">$30 an Hour Is How Much a Year? (2026)</SectionHeading>

            <p>
              <strong>$30 an hour equals $62,400 per year</strong> — just above the $60,000
              milestone many US workers target. Your overtime rate jumps to $45.00/hr (1.5×),
              and five hours of weekly overtime adds $11,700 to your annual gross.
            </p>

            <StatGrid color="emerald" items={[
              { label: "Weekly gross",   value: "$1,200" },
              { label: "Biweekly gross", value: "$2,400" },
              { label: "Monthly gross",  value: "$5,200" },
              { label: "Annual gross",   value: "$62,400" },
            ]} />

            <div className="not-prose rounded-2xl border border-slate-200 overflow-hidden my-5 shadow-sm">
              {[
                ["Annual gross", "$62,400", false],
                ["Federal income tax (22% bracket kicks in)", "−$7,068", true],
                ["FICA (Social Security + Medicare)", "−$4,774", true],
                ["Est. after-tax take-home (federal only)", "~$50,558", false],
                ["Monthly take-home", "~$4,213/mo", false],
                ["With 5 hrs OT/wk — annual gross", "$74,100", false],
              ].map(([label, val, neg], i) => (
                <div key={i} className={`flex items-center justify-between px-4 py-2.5 text-[13px]
                  border-b border-slate-100 last:border-0
                  ${i >= 3 ? "bg-emerald-50 font-bold" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                  <span className="text-slate-700">{label}</span>
                  <span className={`font-bold tabular-nums ${
                    i >= 3 ? "text-emerald-700" : neg ? "text-rose-600" : "text-slate-900"
                  }`}>{val}</span>
                </div>
              ))}
            </div>

            <Callout type="warning" title="$30/hr pushes you into the 22% federal bracket">
              At $62,400 gross, income above $47,150 (after the $15,000 standard deduction) is taxed
              at 22% federally — not 12%. This is the bracket where every extra hour of overtime is taxed
              more heavily. A $45/hr overtime rate doesn't add $45 of after-tax income; it adds closer to $33.
            </Callout>

            {/* ═══ SECTION 5 — BIG TABLE ═══ */}
            <SectionHeading id="big-table">$10–$100/hr Master Conversion Table (2026)</SectionHeading>

            <p>
              All figures assume 40 hours/week × 52 weeks (2,080 hours). After-tax column uses 2026
              federal brackets for single filers with the $15,000 standard deduction and FICA at 7.65%.
              State income tax is not included — see Section 10 for state-by-state notes.
            </p>

            <BigTableSection />

            <CalculatorCTA variant="mid" />

            {/* ═══ SECTION 6 — PART TIME ═══ */}
            <SectionHeading id="part-time">Part-Time Earnings at $20/hr (10–50 hrs/wk)</SectionHeading>

            <p>
              Not everyone works 40 hours a week. Here's what $20/hr looks like across different
              schedules — including overtime hours marked with an asterisk (rows above 40 hrs
              assume FLSA overtime at 1.5× for hours over 40).
            </p>

            {/* Part-time — mobile cards */}
            <div className="not-prose my-6">
              <div className="grid grid-cols-1 gap-2 sm:hidden">
                {PART_TIME_20.map(([hrs, weekly, , monthly, annual, afterTax]) => (
                  <div key={hrs} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-[13px]">{hrs}</span>
                      <span className="text-[10px] text-slate-400">{annual}/yr</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-slate-50 rounded-lg py-1.5">
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">Weekly</p>
                        <p className="font-bold text-[12px] text-slate-700">{weekly}</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg py-1.5">
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">Monthly</p>
                        <p className="font-bold text-[12px] text-blue-700">{monthly}</p>
                      </div>
                      <div className="bg-emerald-50 rounded-lg py-1.5">
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">After Tax</p>
                        <p className="font-bold text-[12px] text-emerald-700">{afterTax}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                      {["Schedule", "Weekly", "Biweekly", "Monthly", "Annual Gross", "Est. After-Tax"].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left font-black">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {PART_TIME_20.map(([hrs, ...rest], i) => (
                      <tr key={hrs} className={
                        hrs === "40 hrs/wk" ? "bg-blue-50 font-bold" :
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                      }>
                        <td className="px-4 py-2.5 font-bold text-slate-900">{hrs}</td>
                        {rest.map((cell, j) => (
                          <td key={j} className={`px-4 py-2.5 tabular-nums
                            ${j === 3 ? "font-bold text-blue-700" : ""}
                            ${j === 4 ? "font-bold text-emerald-700" : "text-slate-500"}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="px-4 py-2 text-[11px] text-slate-400 bg-slate-50 border-t border-slate-100">
                  * Rows above 40 hrs/wk include FLSA overtime pay at 1.5× for hours over 40.
                </p>
              </div>
            </div>

            {/* ═══ SECTION 7 — OVERTIME ═══ */}
            <SectionHeading id="overtime">Overtime at 1.5× — How Much More You Actually Earn</SectionHeading>

            <p>
              Under the Fair Labor Standards Act (FLSA), most non-exempt US employees must receive
              at least <strong>1.5× their regular hourly rate</strong> for all hours worked beyond
              40 per week. This is "time and a half" — and the impact on annual income is massive.
            </p>

            <p className="mt-4">
              A $20/hr worker doing just 5 hours of overtime weekly earns{" "}
              <strong>$7,800 extra per year</strong> — nearly an 18.75% raise without any change
              to their base rate. Ten overtime hours/week adds $15,600 — more than a standard annual raise.
            </p>

            {/* Overtime mobile cards */}
            <div className="not-prose my-6">
              <div className="grid grid-cols-1 gap-2 sm:hidden">
                {OVERTIME_TABLE.map(([base, ot, hrs, extra, total]) => (
                  <div key={`${base}-${hrs}`} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-[13px]">{base} base · {hrs}</span>
                      <span className="text-[10px] text-blue-600 font-bold">OT: {ot}</span>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">Extra/yr</p>
                        <p className="font-bold text-emerald-700 text-[13px]">{extra}</p>
                      </div>
                      <div>
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">Total annual</p>
                        <p className="font-extrabold text-slate-900 text-[13px]">{total}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                      {["Base Rate", "OT Rate (1.5×)", "OT Schedule", "Extra Per Year", "Annual w/ OT"].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left font-black">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {OVERTIME_TABLE.map(([base, ot, hrs, extra, total], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-4 py-2.5 font-bold text-slate-900">{base}</td>
                        <td className="px-4 py-2.5 text-blue-700 font-semibold">{ot}</td>
                        <td className="px-4 py-2.5 text-slate-500">{hrs}</td>
                        <td className="px-4 py-2.5 text-emerald-700 font-bold">{extra}</td>
                        <td className="px-4 py-2.5 font-extrabold text-slate-900">{total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Callout type="info" title="Are you exempt or non-exempt?">
              Salaried employees earning over $684/week ($35,568/year) and meeting certain job-duty
              tests are classified as "exempt" under the FLSA — meaning they're not entitled to
              overtime pay regardless of hours worked. Most hourly workers are non-exempt and are
              protected. If you're hourly and not receiving 1.5× for hours over 40, your employer
              may be violating federal law.
            </Callout>

            {/* ═══ SECTION 8 — FICA ═══ */}
            <SectionHeading id="fica">FICA Breakdown: Social Security + Medicare (2026)</SectionHeading>

            <p>
              FICA stands for the Federal Insurance Contributions Act. As an employee, you pay
              7.65% of your gross wages in FICA taxes — 6.2% to Social Security and 1.45% to
              Medicare. Your employer matches this exactly. If you're self-employed, you pay both
              sides (15.3% total).
            </p>

            {/* FICA mobile cards */}
            <div className="not-prose my-6">
              <div className="grid grid-cols-1 gap-2 sm:hidden">
                {FICA_TABLE.map(([rate, ss, med, total, remaining]) => (
                  <div key={rate} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="font-bold text-slate-900 text-[13px] mb-3">{rate}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-50 rounded-lg p-2 text-center">
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">Social Security</p>
                        <p className="font-bold text-rose-600 text-[12px]">{ss}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-2 text-center">
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">Medicare</p>
                        <p className="font-bold text-rose-600 text-[12px]">{med}</p>
                      </div>
                      <div className="bg-rose-50 rounded-lg p-2 text-center">
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">Total FICA</p>
                        <p className="font-extrabold text-rose-700 text-[12px]">{total}</p>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-2 text-center">
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">After FICA</p>
                        <p className="font-extrabold text-emerald-700 text-[12px]">{remaining}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                      {["Rate / Annual", "Social Security (6.2%)", "Medicare (1.45%)", "Total FICA", "Gross After FICA"].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left font-black">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {FICA_TABLE.map(([rate, ss, med, total, remaining], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-4 py-2.5 font-bold text-slate-900">{rate}</td>
                        <td className="px-4 py-2.5 text-rose-600 tabular-nums">{ss}</td>
                        <td className="px-4 py-2.5 text-rose-600 tabular-nums">{med}</td>
                        <td className="px-4 py-2.5 font-bold text-rose-700 tabular-nums">{total}</td>
                        <td className="px-4 py-2.5 font-bold text-emerald-700 tabular-nums">{remaining}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ═══ SECTION 9 — GROSS VS NET ═══ */}
            <SectionHeading id="gross-vs-net">Gross vs. Net Pay: What You Actually Keep</SectionHeading>

            <p>
              <strong>Gross pay</strong> is your total earnings before any deductions — the number
              on your offer letter, job post, or salary comparison site. <strong>Net pay</strong> is
              what lands in your bank account after federal income tax, FICA, state income tax, and
              any pre-tax deductions (health insurance, 401k) are removed.
            </p>

            <p className="mt-4">
              The gap between gross and net for a $20/hr worker in 2026 is roughly $6,000 per year
              in federal taxes and FICA alone — before state taxes. Pre-tax 401(k) contributions and
              health insurance premiums reduce taxable income and effectively close part of this gap.
            </p>

            <Callout type="tip" title="Pre-tax contributions reduce both your tax bill and FICA">
              Contributing $5,000/year to a traditional 401(k) at $20/hr reduces your taxable income
              to $36,600 — dropping your federal tax to ~$2,170 and saving an additional $383 in
              FICA. That's $625 in combined tax savings from a $5,000 contribution. The net cost to
              you is only $4,375, not the full $5,000.
            </Callout>

            {/* ═══ SECTION 10 — STATE TAXES ═══ */}
            <SectionHeading id="state-taxes">State Income Tax: The Variable Nobody Talks About</SectionHeading>

            <p>
              Federal taxes are the same for every American at the same income level. State taxes
              are wildly different — from zero to over 13% — and can swing your take-home by
              thousands of dollars per year on a $20/hr income.
            </p>

            {/* State tax cards - responsive grid */}
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
              {[
                { label: "No state income tax (9 states)", states: "Texas, Florida, Nevada, Washington, Wyoming, South Dakota, Alaska, Tennessee, New Hampshire", impact: "+$0 to state", color: "bg-emerald-50 border-emerald-100 text-emerald-800" },
                { label: "Low state tax (1–4%)", states: "Arizona (2.5%), Indiana (3.05%), Colorado (4.4%), Michigan (4.25%), Kentucky (4.5%)", impact: "−$520–$1,040/yr at $20/hr", color: "bg-blue-50 border-blue-100 text-blue-800" },
                { label: "Mid state tax (5–7%)", states: "New York (~6.8%), Wisconsin (5.3%), Minnesota (6.8%), Oregon (up to 9.9%)", impact: "−$1,300–$2,600/yr at $20/hr", color: "bg-amber-50 border-amber-100 text-amber-800" },
                { label: "High state tax (8–13%+)", states: "California (up to 13.3%), Hawaii (11%), New Jersey (up to 10.75%)", impact: "−$2,080–$4,160/yr at $20/hr", color: "bg-rose-50 border-rose-100 text-rose-800" },
              ].map((s) => (
                <div key={s.label} className={`rounded-xl border p-4 ${s.color}`}>
                  <p className="font-bold text-[13px] mb-1.5">{s.label}</p>
                  <p className="text-[12px] leading-relaxed mb-2">{s.states}</p>
                  <p className="font-extrabold text-[12px]">{s.impact}</p>
                </div>
              ))}
            </div>

            <p>
              A $20/hr worker in California can pay $2,000–$3,000 more per year in state income
              tax than the same worker in Texas or Florida. That's the equivalent of losing almost
              $1.50/hr to your state government — effectively dropping your real hourly rate from
              $20 to $18.50 or less.
            </p>

            {/* ═══ SECTION 11 — WORK HOURS ═══ */}
            <SectionHeading id="work-hours">How Many Hours Are in a US Work Year?</SectionHeading>

            <p>
              The standard US work year is <strong>2,080 hours</strong> (40 hrs × 52 weeks). This
              is the number used in all salary conversion formulas. But actual hours worked are
              usually less — and that gap matters when comparing hourly vs. salaried positions.
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              {[
                { label: "Standard work year", value: "2,080 hrs", sub: "40 hrs × 52 weeks" },
                { label: "With 10 PTO days + 6 holidays", value: "1,952 hrs", sub: "512 hrs off paid" },
                { label: "With 15 PTO + 10 holidays", value: "1,880 hrs", sub: "200 hrs off paid" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-center">
                  <p className="text-xl font-extrabold text-blue-700 leading-none mb-1">{s.value}</p>
                  <p className="text-[12px] font-semibold text-slate-700">{s.label}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            <p>
              Here's why this matters for comparing offers: a $60,000 salaried job where you actually
              work 50 hours/week pays you an effective <strong>$23.08/hr</strong> — lower than a
              $25/hr hourly contract where you work exactly 40. Always convert salary offers to
              effective hourly rate using your expected real hours.
            </p>

            {/* ═══ SECTION 12 — HOURLY VS SALARY ═══ */}
            <SectionHeading id="hourly-vs-sal">Hourly vs. Salary: Which Pays More in the Real World?</SectionHeading>

            <p>
              The question isn't which type of pay is better — it's which one pays more for the
              specific job and lifestyle you want. Each has genuine advantages that matter depending
              on your situation.
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-7">
              {[
                {
                  icon: <DollarSign size={18} />,
                  color: "bg-blue-600",
                  title: "Advantages of Hourly Pay",
                  items: [
                    "Paid for every minute worked — employers can't extend your day for free",
                    "Overtime at 1.5× for hours over 40 (FLSA non-exempt protection)",
                    "Easier to track exact income for budgeting",
                    "More negotiating leverage for contract and temp roles",
                    "Part-time and flexible scheduling options",
                  ],
                },
                {
                  icon: <Briefcase size={18} />,
                  color: "bg-violet-600",
                  title: "Advantages of Salary",
                  items: [
                    "Predictable paycheck — same amount every period",
                    "Often includes PTO, health insurance, 401k match",
                    "Easier mortgage/loan applications (stable documented income)",
                    "Advancement tracks and performance bonuses",
                    "Slow weeks don't reduce your pay",
                  ],
                },
              ].map((side) => (
                <div key={side.title} className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-xl ${side.color} flex items-center justify-center text-white flex-shrink-0`}>
                      {side.icon}
                    </div>
                    <p className="font-bold text-slate-900 text-[14px]">{side.title}</p>
                  </div>
                  <ul className="space-y-2">
                    {side.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-slate-600">
                        <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Callout type="tip" title="The effective hourly rate test — use it on every offer">
              Before accepting any offer: Annual salary ÷ (expected real weekly hours × 52) = effective
              hourly rate. A $75,000 salary at genuine 55 hrs/week = $26.22/hr effective. A $28/hr
              hourly at 40 hours = $28/hr with overtime potential. The hourly offer is likely better
              in total compensation.
            </Callout>

            {/* ═══ SECTION 13 — IS IT GOOD ═══ */}
            <SectionHeading id="is-it-good">Is $20/hr a Good Wage in 2026?</SectionHeading>

            <p>
              The short answer: it depends heavily on where you live and what you're comparing it to.
              Here's the honest benchmark:
            </p>

            <div className="not-prose space-y-3 my-6">
              {[
                { icon: <BarChart2 size={16} />, color: "text-blue-600 bg-blue-50", label: "vs. Federal minimum wage", body: "$20/hr is 2.76× the federal minimum wage of $7.25/hr. It's above the current minimum in all 50 states. That's a good starting point — but minimum wage is an extremely low bar." },
                { icon: <TrendingUp size={16} />, color: "text-violet-600 bg-violet-50", label: "vs. BLS national median ($23.11/hr)", body: "$20/hr is about 13.5% below the BLS national median hourly wage of $23.11 for all occupations (most recent data). You're in the lower half nationally, though not far off." },
                { icon: <Shield size={16} />, color: "text-emerald-600 bg-emerald-50", label: "vs. MIT Living Wage by city", body: "MIT Living Wage Calculator estimates a single adult needs $21–$37/hr depending on city. $20/hr covers living expenses in lower-cost cities but falls short in Boston, NYC, LA, SF, and Seattle." },
                { icon: <DollarSign size={16} />, color: "text-amber-600 bg-amber-50", label: "Career growth context", body: "Many $20/hr roles are entry-to-mid level. The jump from $20 to $25/hr adds $10,400/yr — achievable in 1–2 years in most fields with consistent performance. Job-switching typically delivers 10–20% raises faster than internal promotions." },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-200 bg-white shadow-sm p-4 flex gap-3">
                  <div className={`w-8 h-8 rounded-lg ${s.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-[13px] mb-1">{s.label}</p>
                    <p className="text-[12px] text-slate-600 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* End CTA */}
            <div id="calculator" className="scroll-mt-8">
              <CalculatorCTA variant="end" />
            </div>

            {/* ═══ SECTION 14 — FAQ ═══ */}
            <SectionHeading id="faq">Frequently Asked Questions</SectionHeading>

            <div className="space-y-3">
              {[
                {
                  q: "$20 an hour is how much a year?",
                  a: "$20/hr × 40 hrs × 52 weeks = $41,600/year gross. After federal income tax (~$2,812) and FICA ($3,182), estimated take-home for a single filer is approximately $35,606 — or $2,967/month. State taxes reduce this further.",
                },
                {
                  q: "$18 an hour is how much a year?",
                  a: "$18/hr × 40 hrs × 52 weeks = $37,440/year gross. After federal taxes and FICA, estimated take-home is approximately $32,742 for a single filer — roughly $2,729/month.",
                },
                {
                  q: "$22 an hour is how much a year?",
                  a: "$22/hr × 40 hrs × 52 weeks = $45,760/year gross. After federal taxes and FICA, estimated take-home is approximately $38,987 — or $3,249/month.",
                },
                {
                  q: "What is $20 an hour biweekly?",
                  a: "$20/hr biweekly gross is $1,600 (80 hours × $20). After taxes and FICA, your estimated biweekly net paycheck is approximately $1,370 for a single filer in a no-state-tax state.",
                },
                {
                  q: "What is $20/hr monthly?",
                  a: "$20/hr monthly gross is $3,467 (based on $41,600 ÷ 12). Biweekly paychecks don't divide evenly into months — some months you get 2 checks, some get 3. Actual monthly take-home is approximately $2,967 after federal taxes and FICA.",
                },
                {
                  q: "What is time and a half for $20 an hour?",
                  a: "Time and a half for $20/hr is $30/hr ($20 × 1.5). This applies to all hours over 40 per week under FLSA for non-exempt employees. Working 5 OT hours/week adds $7,800/year to your base $41,600 salary.",
                },
                {
                  q: "Is $20 an hour considered poverty level?",
                  a: "$20/hr ($41,600/year) is above the federal poverty guidelines for a single person ($15,060 in 2026) and for a family of two ($20,440). It's not poverty level. However, it falls below MIT's living wage estimate in many high-cost cities, where housing and childcare costs make $20/hr insufficient.",
                },
                {
                  q: "How much federal tax do I pay on $20 an hour?",
                  a: "At $20/hr ($41,600/year), a single filer pays approximately $2,812 in federal income tax after the $15,000 standard deduction leaves $26,600 taxable. The first $11,925 is taxed at 10% ($1,192.50), and the remaining $14,675 at 12% ($1,761). Plus $3,182 in FICA — total federal obligation is ~$5,994.",
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
              <div>
                <p className="font-bold text-slate-900 text-[13px]">Free US Calculator</p>
                <p className="text-[11px] text-slate-400">Updated May 20, 2026</p>
              </div>
              <p className="text-[11px] text-slate-400 italic leading-relaxed">
                Sources: IRS 2026 brackets · BLS OES data · FLSA (DOL) · MIT Living Wage Calculator
              </p>
            </div>
          </article>

          {/* ── SIDEBAR ── */}
          <aside className="w-full lg:w-[260px] flex-shrink-0 space-y-4 lg:sticky lg:top-6">

            {/* CTA card */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <div className="p-5 text-white"
                style={{ background: "linear-gradient(135deg,#0f172a,#1d4ed8)" }}>
                <Calculator size={20} className="mb-2 text-blue-300" />
                <p className="font-extrabold text-base leading-tight mb-1.5">Free Salary Calculator</p>
                <p className="text-blue-200 text-[12px] leading-relaxed">
                  Enter any hourly rate, hours, overtime, and state. Get exact annual,
                  monthly, and after-tax pay — updated for 2026.
                </p>
              </div>
              <Link href="/hourly-to-salary-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3.5
                           bg-white text-blue-700 font-bold text-[13px]
                           hover:bg-blue-50 transition-colors group border-t border-slate-100">
                Open Calculator
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Quick reference */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Quick Reference (40 hrs/wk)</p>
              <div className="space-y-2.5">
                {[
                  ["$13/hr", "$27,040", "~$24,418"],
                  ["$15/hr", "$31,200", "~$27,718"],
                  ["$18/hr", "$37,440", "~$32,742"],
                  ["$20/hr", "$41,600", "~$35,606"],
                  ["$22/hr", "$45,760", "~$38,987"],
                  ["$25/hr", "$52,000", "~$43,364"],
                  ["$30/hr", "$62,400", "~$50,558"],
                  ["$35/hr", "$72,800", "~$57,944"],
                  ["$40/hr", "$83,200", "~$65,157"],
                  ["$50/hr", "$104,000","~$78,755"],
                ].map(([rate, gross, net]) => (
                  <div key={rate} className="text-[11px] border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-800">{rate}</span>
                      <span className="font-bold text-blue-700 tabular-nums">{gross}</span>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-[10px] text-emerald-600 tabular-nums">{net} after tax</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-slate-400 mt-3">After-tax: federal only, single filer, 2026.</p>
            </div>

            {/* Key facts */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">2026 Key Numbers</p>
              <div className="space-y-2.5">
                {[
                  { label: "Work hrs/year",       value: "2,080" },
                  { label: "FLSA overtime rate",  value: "1.5×" },
                  { label: "Social Security",     value: "6.2%" },
                  { label: "Medicare",            value: "1.45%" },
                  { label: "FICA total",          value: "7.65%" },
                  { label: "Standard deduction",  value: "$15,000" },
                  { label: "10% bracket up to",   value: "$11,925" },
                  { label: "12% bracket up to",   value: "$48,475" },
                  { label: "Federal min. wage",   value: "$7.25/hr" },
                  { label: "BLS median wage",     value: "$23.11/hr" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between text-[12px]
                                                border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-extrabold text-slate-900">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jump to section */}
            <div className="hidden lg:block rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Jump to Section</p>
              <ol className="space-y-2">
                {TOC.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}
                      className="text-[12px] text-blue-600 hover:text-blue-800 hover:underline
                                 flex items-start gap-2 transition-colors">
                      <span className="text-[9px] text-slate-400 font-bold mt-0.5 flex-shrink-0 w-4">{i + 1}.</span>
                      <span className="leading-snug">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Related guides */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Related Guides</p>
              <div className="space-y-2.5">
                {[
                  { label: "DoorDash Earnings Guide 2026",    href: "/blog/doordash-earnings-guide-2026" },
                  { label: "Gig Worker Tax Guide 2026",       href: "/blog/gig-worker-taxes-2026" },
                  { label: "Salary After Tax Guide 2026",     href: "/blog/salary-after-tax-guide-2026" },
                  { label: "Self-Employment Tax Guide 2026",  href: "/blog/self-employment-tax-guide-2026" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="flex items-start gap-2 text-[12px] text-slate-700
                               hover:text-blue-600 transition-colors group">
                    <ChevronRight size={12} className="mt-0.5 flex-shrink-0 text-slate-400
                                                        group-hover:text-blue-400 transition-colors" />
                    <span className="leading-snug">{l.label}</span>
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