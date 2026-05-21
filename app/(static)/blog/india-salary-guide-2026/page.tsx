// app/blog/india-salary-guide-2026/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Calculator, Calendar, Clock, CheckCircle2,
  ChevronRight, AlertTriangle, TrendingUp, Globe,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// Targets informational intent: "ctc to in-hand", "india salary guide",
// "nri salary comparison" — distinct from tool page's transactional intent
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "India Salary Guide 2026 – CTC to In-Hand, NRI Comparison & Hourly Rates",
  description:
    "Complete India salary breakdown for 2026. CTC to in-hand calculator, old vs new tax regime comparison, ₹50K–₹1L monthly salary explained, NRI salary comparison across UAE/US/UK, and freelancer USD rates. Updated April 2026.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/blog/india-salary-guide-2026",
  },
  keywords: [
    "india salary guide 2026",
    "ctc to in-hand salary calculator india",
    "india salary to hourly rate",
    "new vs old tax regime india 2026",
    "nri salary comparison india vs uae",
    "1 lakh per month in hand salary",
    "50000 salary in hand india 2026",
    "india freelancer usd rates 2026",
    "india salary in usd 2026",
    "what is good salary india 2026",
  ],
  openGraph: {
    title: "India Salary Guide 2026 – CTC to In-Hand, NRI Pay & Hourly Rates (₹ + USD)",
    description:
      "Honest breakdown of Indian salaries: CTC illusion explained, ₹50K–₹1L in-hand figures, old vs new regime comparison, NRI country comparisons, and freelancer USD rates.",
    url: "https://www.freeuscalculator.in/blog/india-salary-guide-2026",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    modifiedTime: "2026-05-01T00:00:00Z",
    authors: ["Free US Calculator"],
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
        { "@type": "ListItem", position: 3, name: "India Salary Guide 2026",
          item: "https://www.freeuscalculator.in/blog/india-salary-guide-2026" },
      ],
    },
    {
      "@type": "Article",
      headline: "India Salary Guide 2026 – CTC to In-Hand, NRI Comparison & Hourly Rates",
      description:
        "Complete breakdown of Indian compensation: CTC structure, old vs new tax regime, ₹50K–₹1L monthly in-hand, NRI country comparisons, and freelancer USD rates for 2026.",
      url: "https://www.freeuscalculator.in/blog/india-salary-guide-2026",
      datePublished: "2026-04-01",
      dateModified: "2026-05-01",
      author: { "@type": "Organization", name: "Free US Calculator",
        url: "https://www.freeuscalculator.in" },
      publisher: { "@type": "Organization", name: "Free US Calculator",
        url: "https://www.freeuscalculator.in" },
      relatedLink: "https://www.freeuscalculator.in/india-salary-calculator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much is ₹50,000 per month in hand in India 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "₹50,000/month gross (₹6 LPA) yields approximately ₹43,000–₹44,500 per month in-hand under the New Tax Regime after employee EPF (₹3,000), professional tax (~₹200), and TDS (~₹2,800). Under Old Regime with HRA declared, in-hand rises to ₹45,000–₹46,500.",
          },
        },
        {
          "@type": "Question",
          name: "How much is ₹1 lakh per month in hand in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "₹1,00,000/month gross (₹12 LPA) gives approximately ₹85,500/month in-hand under New Tax Regime. Under Old Regime with HRA (₹20,000 rent) and ₹1.5L 80C investments, in-hand rises to about ₹89,000/month — a ₹3,500/month or ₹42,000/year difference.",
          },
        },
        {
          "@type": "Question",
          name: "Which is better — old or new tax regime in India 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New Regime wins if your total deductions are under ₹2,00,000. Old Regime wins if deductions exceed ₹3,75,000 — typically when paying significant rent in a metro city plus maxing 80C (EPF + ELSS + LIC). At ₹12–20 LPA, Old Regime with full deductions typically saves ₹40,000–₹1,20,000 per year.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good salary in India in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Bengaluru or Mumbai: ₹12–22 LPA is mid-level (3–6 yrs experience); ₹25–45 LPA is senior. In Hyderabad or Pune: ₹10–18 LPA is mid-level. In Tier 2 cities: salaries run 20–35% lower but cost of living is 30–45% lower — lifestyle quality is often comparable or better.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a foreign company really pay for a ₹12 LPA Indian hire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your all-in annual cost is approximately ₹13.5–₹14.2 LPA (~$16,100–$16,900/year) once you add employer PF (~₹6,000/month), gratuity provisioning (~₹2,400/month), and group health insurance. Through a PEO/EOR service (Deel, Remofirst, Multiplier), add 10–15%, bringing real annual cost to approximately $18,000–$20,000/year.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const SALARY_TABLE = [
  ["₹20,000", "₹2.4 LPA",  "₹115", "₹103", "₹17,500–18,500", "~$238"],
  ["₹35,000", "₹4.2 LPA",  "₹202", "₹179", "₹29,500–31,200", "~$417"],
  ["₹50,000", "₹6 LPA",    "₹288", "₹256", "₹42,000–44,500", "~$595"],
  ["₹66,667", "₹8 LPA",    "₹385", "₹342", "₹54,000–57,500", "~$793"],
  ["₹83,333", "₹10 LPA",   "₹481", "₹427", "₹65,000–70,000", "~$992"],
  ["₹1,00,000","₹12 LPA",  "₹577", "₹513", "₹83,000–88,000", "~$1,190"],
  ["₹1,25,000","₹15 LPA",  "₹721", "₹641", "₹98,000–1,05,000","~$1,488"],
  ["₹2,00,000","₹24 LPA",  "₹1,154","₹1,026","₹1,46,000–1,58,000","~$2,381"],
  ["₹4,16,667","₹50 LPA",  "₹2,404","₹2,137","₹2,72,000–2,95,000","~$4,960"],
];

const NRI_TABLE = [
  ["Bengaluru, India",  "₹20–28 LPA (~$24K–$33K)",       "₹1,10,000–₹1,50,000",    "10–20%", "20–35%"],
  ["Dubai, UAE",        "AED 14K–20K/mo (~$46K–$65K/yr)", "AED 14K–20K (0% tax)",    "0%",     "30–45%"],
  ["London, UK",        "£45,000–£70,000/yr",             "£2,700–£3,900/mo",         "20–40%", "10–20%"],
  ["New York/SF, US",   "$90,000–$140,000/yr",            "$5,500–$8,500/mo",          "25–35%", "15–25%"],
  ["Toronto, Canada",   "CAD 80K–120K/yr",                "CAD 4,800–6,800/mo",        "20–33%", "15–25%"],
  ["Sydney, Australia", "AUD 95K–140K/yr",                "AUD 5,500–8,000/mo",        "19–37%", "15–25%"],
  ["Singapore",         "SGD 75K–110K/yr",                "SGD 4,800–7,000/mo",        "7–17%",  "25–35%"],
];

const FREELANCER_TABLE = [
  ["Content Writer",       "1–3 yrs",  "$8–$15/hr",   "₹1,21,000–₹2,27,000"],
  ["Web Dev (React/Vue)",  "2–5 yrs",  "$18–$35/hr",  "₹2,72,000–₹5,29,000"],
  ["Full-Stack Engineer",  "4–8 yrs",  "$30–$60/hr",  "₹4,54,000–₹9,07,000"],
  ["Data Analyst / BI",    "3–6 yrs",  "$20–$40/hr",  "₹3,02,000–₹6,05,000"],
  ["Product Manager",      "5–10 yrs", "$35–$70/hr",  "₹5,29,000–₹10,58,000"],
  ["Digital Marketing",    "2–5 yrs",  "$15–$30/hr",  "₹2,27,000–₹4,54,000"],
  ["Graphic / UI Designer","2–6 yrs",  "$15–$35/hr",  "₹2,27,000–₹5,29,000"],
];

const TOC = [
  { id: "ctc-problem",     label: "The CTC illusion — what Indian salary means" },
  { id: "50k-salary",      label: "₹50,000/month — full in-hand breakdown" },
  { id: "1-lakh",          label: "₹1 lakh/month — the aspirational milestone" },
  { id: "salary-table",    label: "₹20K–₹50L salary reference table" },
  { id: "tax-regime",      label: "Old vs new tax regime 2026 — which wins?" },
  { id: "nri-comparison",  label: "NRI salary comparison: India vs UAE, US, UK" },
  { id: "foreign-employers","label": "What foreign companies actually pay for Indian hires" },
  { id: "freelancer-rates","label": "Indian freelancer USD rates 2026" },
  { id: "good-salary",     label: "What is a good salary in India? City guide" },
  { id: "calculator",      label: "Use the free India salary calculator" },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
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
            {isEnd
              ? "Calculate your exact Indian salary in-hand"
              : "Find your real in-hand salary instantly"}
          </p>
          <p className="text-slate-400 text-[13px] leading-relaxed max-w-sm">
            {isEnd
              ? "Enter your CTC, choose old or new regime, and see your exact monthly in-hand plus hourly rate — in ₹ and USD."
              : "Enter CTC, toggle old vs new regime, and see your real monthly in-hand, hourly rate, and annual tax breakdown in seconds."}
          </p>
        </div>
        <Link
          href="/india-salary-calculator"
          className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-blue-500 hover:bg-blue-400 text-white font-black text-[14px]
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
export default function IndiaSalaryGuidePage() {
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
          <span className="text-slate-600">India Salary Guide 2026</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        bg-blue-50 border border-blue-100 text-blue-700
                        text-[10px] font-black uppercase tracking-widest mb-5">
          <Globe size={11} />
          India · NRI · CTC · 2026
        </div>

        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]
                       text-slate-900 mb-6">
          India Salary Guide{" "}
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg,#1d4ed8,#7c3aed)" }}>
            2026
          </span>
          <br className="hidden sm:block" />
          <span className="text-slate-500 text-2xl md:text-3xl font-bold">
            CTC to In-Hand · NRI Comparison · ₹ + USD
          </span>
        </h1>

        <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-7 max-w-2xl">
          An offer letter says ₹8.5 LPA. A US client proposes $1,500/month for remote
          work. An NRI in Dubai is evaluating a Bangalore return offer. All three share
          the same problem: <strong className="text-slate-900">the headline figure tells
          you almost nothing useful</strong> until you break it into what actually reaches
          your account every month.
        </p>

        <div className="flex flex-wrap items-center gap-4 pb-7
                        border-b border-slate-100 text-[12px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} /> Updated May 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> 15 min read
          </span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            New & Old Tax Regime · ₹ + USD + GBP + AED · April 2026 rates
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
            <H2 id="ctc-problem">The CTC illusion — why Indian salary confuses everyone</H2>

            <p>
              In the US or UK, a salary offer is reasonably close to what you earn.
              A $70,000 salary means roughly $5,833/month before income tax — most
              people have a working intuition for the tax bill. India has several layers
              most outsiders and many Indians themselves don't fully account for.
            </p>

            <div className="not-prose rounded-2xl border border-amber-100 bg-amber-50
                            p-5 my-7 flex gap-3">
              <AlertTriangle size={17} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-amber-900 text-[13px] mb-2">
                  CTC ≠ Your Salary
                </p>
                <p className="text-amber-800 text-[12px] leading-relaxed">
                  CTC stands for Cost to Company — the total annual expenditure the
                  company incurs to employ you. It includes employer PF (12% of basic),
                  gratuity provision (~4.8% of basic), and group health insurance premiums
                  you never see in your account.{" "}
                  <strong>A ₹12 LPA CTC does not mean ₹1,00,000/month in your bank.
                  It means ₹83,000–₹89,000</strong>, depending on your tax regime choices.
                </p>
              </div>
            </div>

            <p>
              India also operates <strong>two parallel tax systems simultaneously</strong>.
              The Old Regime allows substantial deductions — HRA, Section 80C investments,
              home loan interest. The New Regime offers lower slab rates but almost no
              deductions. Choosing wrongly costs ₹8,000–₹18,000 per month at senior
              salary levels. Most salary calculators either ignore this or default to one
              regime without telling you.
            </p>

            {/* ─── SECTION 2 ─── */}
            <H2 id="50k-salary">₹50,000/month — the complete in-hand breakdown</H2>

            <p>
              ₹50,000/month (₹6 LPA) is the target salary for millions of junior IT
              professionals, experienced BPO team leaders, and mid-level bank officers
              at the 3–5 year mark. Here is the honest picture:
            </p>

            <div className="not-prose grid grid-cols-3 gap-3 my-7">
              {[
                { rate: "40 hrs/wk", value: "₹288/hr" },
                { rate: "45 hrs/wk", value: "₹256/hr" },
                { rate: "48 hrs/wk", value: "₹240/hr" },
              ].map((s) => (
                <div key={s.rate}
                  className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-center">
                  <p className="text-lg font-black text-blue-700 leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-slate-500">{s.rate}</p>
                </div>
              ))}
            </div>

            <p><strong>What actually reaches your account (New Tax Regime):</strong></p>
            <ul className="mt-3 space-y-1.5">
              {[
                ["Employee EPF (12% of ₹25,000 basic)", "−₹3,000"],
                ["Professional tax (Maharashtra)",       "−₹200"],
                ["TDS (approximate)",                    "−₹2,800"],
                ["Monthly in-hand",                      "≈ ₹44,000"],
              ].map(([l, v]) => (
                <li key={l} className="flex items-center gap-2.5 text-[14px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>{l}: <strong>{v}</strong></span>
                </li>
              ))}
            </ul>

            <p className="mt-4">
              If you're paying rent above ₹10,000/month and declare HRA under the Old
              Regime, you can push in-hand to ₹45,000–₹46,500. For foreign employers:{" "}
              ₹50,000/month = approximately{" "}
              <strong>$595/month or $3.40–$3.60/hour</strong>. For an Indian professional
              with 3–5 years of experience, this is a genuine mid-level salary — not
              entry level, not premium.
            </p>

            {/* ─── SECTION 3 ─── */}
            <H2 id="1-lakh">₹1 lakh/month — India's aspirational milestone</H2>

            <p>
              ₹1,00,000/month (₹12 LPA) carries real cultural weight in India. It's the
              milestone most salaried professionals are working toward at 5–8 years of
              experience. Here's what it actually looks like:
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-6">
              <table className="w-full text-[13px] min-w-[380px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Item</th>
                    <th className="px-4 py-3 text-left font-black">New Regime</th>
                    <th className="px-4 py-3 text-left font-black">Old Regime + HRA + 80C</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Monthly gross",       "₹1,00,000",   "₹1,00,000"],
                    ["Employee EPF",        "−₹6,000",     "−₹6,000"],
                    ["Professional tax",    "−₹200",       "−₹200"],
                    ["TDS",                 "−₹8,300",     "−₹4,800"],
                    ["Monthly in-hand",     "₹85,500",     "₹89,000"],
                  ].map(([item, newR, oldR], i) => (
                    <tr key={item}
                      className={`${i === 4 ? "bg-blue-50 font-black" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                      <td className="px-4 py-3 text-slate-700">{item}</td>
                      <td className={`px-4 py-3 tabular-nums ${i === 4 ? "text-blue-700 font-black" : "text-slate-600"}`}>
                        {newR}
                      </td>
                      <td className={`px-4 py-3 tabular-nums ${i === 4 ? "text-emerald-700 font-black" : "text-slate-600"}`}>
                        {oldR}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              That ₹3,500/month difference between regimes is ₹42,000 per year — real
              money. The Old Regime wins here specifically because of rent payment combined
              with 80C investment. Without those, the New Regime usually comes out ahead.
            </p>

            {/* ─── SECTION 4 — SALARY TABLE ─── */}
            <H2 id="salary-table">Indian salary reference table — ₹20K to ₹50L (2026)</H2>

            <p className="mb-5">
              All figures use New Tax Regime with standard ₹75,000 deduction.
              USD column at ₹84/$ (April 2026 rate — verify before contracts).
              In-hand estimates use Maharashtra professional tax.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-2">
              <table className="w-full text-[11px] text-slate-700 bg-white min-w-[640px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Monthly Gross</th>
                    <th className="px-3 py-3 text-left font-black">Annual CTC</th>
                    <th className="px-3 py-3 text-left font-black">₹/hr (40hrs)</th>
                    <th className="px-3 py-3 text-left font-black">₹/hr (45hrs)</th>
                    <th className="px-3 py-3 text-left font-black">Est. In-Hand/mo</th>
                    <th className="px-3 py-3 text-left font-black">USD/mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {SALARY_TABLE.map(([monthly, ctc, hr40, hr45, inhand, usd], i) => (
                    <tr key={monthly}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                                  hover:bg-blue-50/20 transition-colors`}>
                      <td className="px-3 py-2.5 font-black text-slate-900">{monthly}</td>
                      <td className="px-3 py-2.5 text-blue-700 font-bold">{ctc}</td>
                      <td className="px-3 py-2.5 text-slate-600">{hr40}</td>
                      <td className="px-3 py-2.5 text-slate-600">{hr45}</td>
                      <td className="px-3 py-2.5 font-bold text-emerald-700">{inhand}</td>
                      <td className="px-3 py-2.5 text-slate-500">{usd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MID-ARTICLE CTA */}
            <CalculatorCTA variant="mid" />

            {/* ─── SECTION 5 ─── */}
            <H2 id="tax-regime">Old vs new tax regime — which saves more in 2026?</H2>

            <p>
              This is the single decision that makes the biggest difference to your
              take-home pay. There's no universally correct answer — it depends entirely
              on your deduction profile.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-6">
              <table className="w-full text-[12px] min-w-[420px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Regime</th>
                    <th className="px-4 py-3 text-left font-black">Best For</th>
                    <th className="px-4 py-3 text-left font-black">Key Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-bold text-blue-700">New Regime</td>
                    <td className="px-4 py-3 text-slate-700">Under ₹8 LPA with no home loan; high earners ₹30 LPA+ with few deductions</td>
                    <td className="px-4 py-3 text-slate-600">Lower slab rates, simpler filing, ₹75,000 standard deduction</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-bold text-emerald-700">Old Regime</td>
                    <td className="px-4 py-3 text-slate-700">Metro renters, home loan holders, consistent 80C investors at ₹12–20 LPA</td>
                    <td className="px-4 py-3 text-slate-600">HRA, 80C (₹1.5L), 80D, home loan (₹2L), NPS (₹50K extra)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl bg-blue-50 border border-blue-100
                            p-5 my-5">
              <p className="font-black text-blue-900 text-[13px] mb-2">Quick shortcut</p>
              <ul className="space-y-1.5 text-[13px] text-blue-900">
                <li className="flex gap-2">
                  <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  Deductions under ₹2,00,000 → <strong>New Regime wins</strong>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  Deductions over ₹3,75,000 → <strong>Old Regime wins</strong>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  Between those numbers → run both calculations (use the calculator below)
                </li>
              </ul>
            </div>

            {/* ─── SECTION 6 ─── */}
            <H2 id="nri-comparison">NRI salary comparison: India vs UAE, US, UK, Singapore (2026)</H2>

            <p>
              This is the table NRIs actually need — not generic cost-of-living comparisons,
              but real salary ranges for a software engineer or finance professional with
              5 years of experience across the countries where most Indian diaspora live.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-6">
              <table className="w-full text-[11px] min-w-[580px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Location</th>
                    <th className="px-3 py-3 text-left font-black">Annual Gross</th>
                    <th className="px-3 py-3 text-left font-black">Monthly In-Hand</th>
                    <th className="px-3 py-3 text-left font-black">Tax Rate</th>
                    <th className="px-3 py-3 text-left font-black">Savings Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {NRI_TABLE.map(([loc, gross, inhand, tax, savings], i) => (
                    <tr key={loc}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-bold text-slate-900">{loc}</td>
                      <td className="px-3 py-2.5 text-slate-600">{gross}</td>
                      <td className="px-3 py-2.5 font-semibold text-blue-700">{inhand}</td>
                      <td className="px-3 py-2.5 text-slate-500">{tax}</td>
                      <td className="px-3 py-2.5 font-bold text-emerald-700">{savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl border border-slate-200 bg-slate-50
                            p-5 my-5">
              <p className="font-black text-slate-900 text-[13px] mb-2">
                The honest NRI answer
              </p>
              <p className="text-slate-600 text-[13px] leading-relaxed">
                Dubai wins on paper — zero income tax, strong AED, high salaries. But a
                2BHK in a decent Dubai neighbourhood runs AED 7,000–12,000/month.
                International school fees: AED 4,000–8,000/month per child. You're left
                with less than it looks. An NRI returning to Bengaluru at ₹35 LPA can
                have an excellent lifestyle at a fraction of that cost. The quality-of-life
                gap between India and the Gulf has narrowed considerably for senior
                professionals. <strong>Run your specific numbers — don't make a return
                decision on the exchange rate alone.</strong>
              </p>
            </div>

            {/* ─── SECTION 7 ─── */}
            <H2 id="foreign-employers">What foreign companies actually pay for Indian hires</H2>

            <p>
              If you're a US, UK, or Australian company hiring Indian talent — whether as
              employees or contractors — the structure of Indian compensation will feel
              unfamiliar. Here's what you actually need to know.
            </p>

            <H3>The anatomy of an Indian offer letter</H3>
            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[420px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Component</th>
                    <th className="px-4 py-3 text-left font-black">% of CTC</th>
                    <th className="px-4 py-3 text-left font-black">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Basic Salary",         "40–50%", "Foundation for PF, gratuity, OT calculations"],
                    ["HRA",                  "15–40%", "Tax-exempt for rent payers — costs employer nothing extra"],
                    ["Special Allowance",    "20–35%", "Fully taxable cash. Can include meal/fuel vouchers"],
                    ["Employer PF",          "12% of Basic", "Mandatory. Never reaches employee's account"],
                    ["Gratuity Provision",   "~4.8% of Basic","Paid after 5 years of service"],
                    ["Group Health Insurance","₹10K–₹25K/yr", "Valuable benefit, inexpensive for employers"],
                  ].map(([comp, pct, note], i) => (
                    <tr key={comp}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-bold text-slate-900">{comp}</td>
                      <td className="px-4 py-2.5 text-blue-700 font-semibold">{pct}</td>
                      <td className="px-4 py-2.5 text-slate-500 text-[11px]">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              For a ₹12 LPA hire, your true all-in cost is approximately{" "}
              <strong>₹13.5–₹14.2 LPA (~$16,100–$16,900/year)</strong> with employer PF,
              gratuity, and insurance. Through a PEO/EOR service like Deel, Remofirst,
              or Multiplier (needed to legally employ Indian workers without a local entity),
              add 10–15% — bringing total annual cost to approximately{" "}
              <strong>$18,000–$20,000/year</strong>. Still a significant cost advantage
              compared to equivalent US or UK hiring.
            </p>

            {/* ─── SECTION 8 ─── */}
            <H2 id="freelancer-rates">Indian freelancer rates for foreign clients (2026)</H2>

            <p>
              If you're an Indian professional doing contract work for US, UK, or
              Australian clients, setting your rate correctly is one of the highest-ROI
              decisions you'll make. Too low and you signal inexperience. Too high without
              the portfolio to back it up and you lose early opportunities.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-6">
              <table className="w-full text-[12px] min-w-[500px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Role</th>
                    <th className="px-4 py-3 text-left font-black">Experience</th>
                    <th className="px-4 py-3 text-left font-black">USD Rate</th>
                    <th className="px-4 py-3 text-left font-black">₹/month (45hrs)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {FREELANCER_TABLE.map(([role, exp, usd, inr], i) => (
                    <tr key={role}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-bold text-slate-900">{role}</td>
                      <td className="px-4 py-2.5 text-slate-500">{exp}</td>
                      <td className="px-4 py-2.5 font-black text-blue-700">{usd}</td>
                      <td className="px-4 py-2.5 font-bold text-emerald-700">{inr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl border border-blue-100 bg-blue-50
                            p-5 my-5">
              <p className="font-black text-blue-900 text-[13px] mb-1.5">
                Currency buffer note
              </p>
              <p className="text-blue-800 text-[13px] leading-relaxed">
                Build a 3–5% currency buffer into your USD rate. USD/INR can move 3–6
                rupees in a quarter — on a $3,000/month invoice, the difference between
                converting at ₹84 vs ₹80 is ₹12,000 per month. Quote in USD and specify
                conversion at invoice date rate in your contract.
              </p>
            </div>

            <p>
              A key thing most freelancers miss:{" "}
              <strong>your hourly rate needs to account for lost benefits</strong>. A
              ₹12 LPA salaried role at 45 hours/week pays ₹513/hour gross — but also
              delivers employer PF (₹6,000/month), gratuity accrual (₹2,400/month),
              health insurance (₹1,500–3,000/month value), and paid leave. A freelance
              hourly rate needs to exceed <strong>₹800–₹850/hour</strong> — not ₹513 —
              to genuinely beat that salaried role on total compensation.
            </p>

            {/* ─── SECTION 9 ─── */}
            <H2 id="good-salary">What is a good salary in India in 2026? City guide</H2>

            <div className="not-prose space-y-4 my-6">
              {[
                {
                  city: "Bengaluru & Mumbai (highest cost, highest salaries)",
                  color: "border-blue-100 bg-blue-50",
                  levels: [
                    ["Fresher (0–2 yrs)", "₹4–7 LPA reasonable; ₹8+ LPA is strong"],
                    ["Mid-level (3–6 yrs)", "₹12–22 LPA for tech and finance"],
                    ["Senior (7–12 yrs)", "₹25–45 LPA individual contributor; ₹45–80 LPA for managers"],
                  ],
                },
                {
                  city: "Hyderabad & Pune (strong markets, better cost-of-living ratio)",
                  color: "border-emerald-100 bg-emerald-50",
                  levels: [
                    ["Fresher", "₹3.5–6 LPA"],
                    ["Mid-level", "₹10–18 LPA"],
                    ["Senior", "₹20–40 LPA — often better lifestyle-to-salary ratio than Bengaluru"],
                  ],
                },
                {
                  city: "Tier 2 cities (Jaipur, Lucknow, Indore, Coimbatore)",
                  color: "border-violet-100 bg-violet-50",
                  levels: [
                    ["Salaries", "20–35% lower than Bengaluru equivalents"],
                    ["Cost of living", "30–45% lower — net lifestyle quality often comparable or better"],
                  ],
                },
              ].map((s) => (
                <div key={s.city}
                  className={`rounded-2xl border p-5 ${s.color}`}>
                  <p className="font-black text-slate-900 text-[13px] mb-3">{s.city}</p>
                  <div className="space-y-2">
                    {s.levels.map(([level, range]) => (
                      <div key={level} className="flex gap-2 text-[13px]">
                        <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>{level}:</strong> {range}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="not-prose" id="calculator">
              <CalculatorCTA variant="end" />
            </div>

            {/* Author */}
            <div className="mt-10 pt-6 border-t border-slate-100">
              <p className="text-[11px] text-slate-400 italic">
                Written after conversations with salaried professionals across IT,
                manufacturing, BPO, and finance in India; HR managers structuring CTC
                offers; Indian freelancers billing US and UK clients; NRIs evaluating
                return offers; and foreign startup founders building India-based remote
                teams. Exchange rates as of April 2026 — verify before finalising
                contracts. For precise income tax calculations consult a Chartered
                Accountant or the Income Tax Department calculator at incometax.gov.in.
              </p>
              <p className="text-[11px] text-slate-400 mt-2">
                Last updated: May 2026
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
                  India Salary Calculator
                </p>
                <p className="text-blue-200 text-[11px] leading-relaxed">
                  CTC → in-hand in seconds. Old vs new regime toggle. ₹ + USD + GBP + AED.
                </p>
              </div>
              <Link
                href="/india-salary-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white
                           border-t border-blue-100 text-blue-700 font-black
                           text-[13px] hover:bg-blue-50 transition-colors group"
              >
                Open Calculator
                <ArrowRight size={13}
                  className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Quick stats */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">2026 Key Numbers</p>
              <div className="space-y-2.5">
                {[
                  { label: "₹1 Lakh/mo in-hand",  value: "₹85,500 (New)" },
                  { label: "₹50K/mo in-hand",      value: "~₹44,000" },
                  { label: "Employer PF",           value: "12% of basic" },
                  { label: "New regime std. ded.",  value: "₹75,000" },
                  { label: "₹84 = $1",              value: "Apr 2026 rate" },
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
                  { label: "Hourly to Salary Guide",       href: "/blog/hourly-to-salary-guide-2026" },
                  { label: "Self-Employment Tax Guide",     href: "/blog/self-employment-tax-guide-2026" },
                  { label: "DoorDash Earnings Guide",       href: "/blog/doordash-earnings-guide-2026" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-blue-600 hover:underline">
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