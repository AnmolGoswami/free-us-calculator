
// app/blog/india-salary-guide-2026/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Calculator, Calendar, Clock, CheckCircle2,
  ChevronRight, AlertTriangle, TrendingUp, Globe,
  Info, Zap, Building2, Users, Briefcase, DollarSign,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA — Targeting highest-volume Indian salary search queries
// Primary: "ctc to in hand salary india 2026" / "1 lakh salary in hand"
// Secondary: "10 lpa in hand", "new vs old tax regime", "nri salary india"
// Tertiary: "india salary in usd", "what is good salary india 2026"
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "CTC to In-Hand Salary India 2026: ₹6L to ₹50L Full Breakdown (New & Old Regime)",
  description:
    "What does ₹10 LPA actually pay per month? Complete CTC to in-hand guide for India FY 2026-27. Covers new vs old tax regime slabs, ₹50K–₹4L monthly breakdowns, NRI salary comparison UAE/US/UK, freelancer USD rates, and what counts as a good salary by city. Updated May 2026.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/blog/india-salary-guide-2026",
  },
  keywords: [
    "ctc to in hand salary india 2026",
    "10 lpa in hand salary 2026",
    "12 lpa in hand salary india",
    "1 lakh per month in hand salary india",
    "50000 salary in hand india 2026",
    "new vs old tax regime india 2026",
    "new tax regime slabs fy 2026-27",
    "india salary to hourly rate",
    "nri salary comparison india vs uae",
    "what is good salary india 2026",
    "india salary in usd 2026",
    "india freelancer usd rates 2026",
    "ctc in hand difference india",
    "india salary guide 2026",
    "6 lpa in hand salary per month",
    "professional tax india 2026",
    "epf deduction salary india",
    "india income tax slab 2026",
  ],
  openGraph: {
    title: "CTC to In-Hand Salary India 2026: Full Breakdown ₹6L–₹50L",
    description:
      "The honest Indian salary guide. ₹12 LPA = ₹85,500/month in-hand (new regime) or ₹89,000 (old regime + HRA + 80C). Full breakdown with NRI comparisons, tax slabs, and freelancer USD rates.",
    url: "https://www.freeuscalculator.in/blog/india-salary-guide-2026",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    modifiedTime: "2026-05-27T00:00:00Z",
    authors: ["Free US Calculator"],
    tags: ["India", "Salary", "CTC", "Tax Regime", "NRI", "2026", "Freelancer"],
  },
  twitter: {
    card: "summary_large_image",
    title: "₹12 LPA = ₹85,500/month (not ₹1,00,000). Here's why.",
    description:
      "India's CTC illusion explained. New vs old regime, ₹50K–₹4L monthly breakdowns, NRI comparisons, freelancer USD rates. Full 2026 guide.",
  },
  robots: { index: true, follow: true },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD — Article + FAQPage (targets Google PAA directly)
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
      headline: "CTC to In-Hand Salary India 2026: Complete Breakdown ₹6L to ₹50L",
      description:
        "Full FY 2026-27 guide: CTC structure, new vs old tax regime slabs, monthly in-hand at every salary level, NRI country comparisons, and freelancer USD rates.",
      url: "https://www.freeuscalculator.in/blog/india-salary-guide-2026",
      datePublished: "2026-04-01",
      dateModified: "2026-05-27",
      author: { "@type": "Organization", name: "Free US Calculator", url: "https://www.freeuscalculator.in" },
      publisher: { "@type": "Organization", name: "Free US Calculator",
        logo: { "@type": "ImageObject", url: "https://www.freeuscalculator.in/logo.png" } },
      mainEntityOfPage: "https://www.freeuscalculator.in/blog/india-salary-guide-2026",
      relatedLink: "https://www.freeuscalculator.in/india-salary-calculator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "10 LPA in hand salary per month in India 2026?",
          acceptedAnswer: { "@type": "Answer",
            text: "₹10 LPA (₹83,333/month gross) gives approximately ₹67,000–₹72,000/month in-hand under the New Tax Regime after employee EPF (₹4,800), professional tax (₹200), and TDS. Under Old Regime with HRA exemption and full 80C investment, in-hand rises to ₹71,000–₹76,000/month.",
          },
        },
        {
          "@type": "Question",
          name: "12 LPA in hand salary per month India 2026?",
          acceptedAnswer: { "@type": "Answer",
            text: "₹12 LPA (₹1,00,000/month gross) gives approximately ₹85,500/month in-hand under New Tax Regime. Under Old Regime with HRA (₹20,000+ rent) and ₹1.5L 80C investments, in-hand rises to about ₹89,000/month — a ₹42,000/year difference.",
          },
        },
        {
          "@type": "Question",
          name: "₹50,000 per month in hand salary India 2026?",
          acceptedAnswer: { "@type": "Answer",
            text: "₹50,000/month gross (₹6 LPA) yields approximately ₹43,000–₹44,500/month in-hand under New Tax Regime after employee EPF (₹3,000), professional tax (₹200), and TDS (~₹2,300). Under Old Regime with HRA declared, in-hand rises to ₹45,000–₹46,500.",
          },
        },
        {
          "@type": "Question",
          name: "Which is better — old or new tax regime India 2026?",
          acceptedAnswer: { "@type": "Answer",
            text: "New Tax Regime is the default and wins if total deductions are under ₹2,00,000, or if income is under ₹12.75 LPA (zero tax with standard deduction + rebate). Old Regime wins for metro renters + full 80C investors + home loan holders at ₹12–25 LPA — typically saving ₹40,000–₹1,20,000/year.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good salary in India in 2026?",
          acceptedAnswer: { "@type": "Answer",
            text: "In Bengaluru/Mumbai: ₹12–22 LPA is mid-level (3–6 yrs); ₹25–45 LPA is senior. In Hyderabad/Pune: ₹10–18 LPA is mid-level. Average salary in India 2026 is ₹7–9 LPA; median is ₹5–6 LPA. ₹20 LPA+ puts you in the top ~5% of Indian earners.",
          },
        },
        {
          "@type": "Question",
          name: "Is income up to ₹12 lakh tax free in India in 2026?",
          acceptedAnswer: { "@type": "Answer",
            text: "Yes. Under the New Tax Regime for FY 2025-26 and FY 2026-27, a Section 87A rebate of ₹60,000 makes tax liability zero for income up to ₹12 lakh. For salaried individuals, the ₹75,000 standard deduction pushes this effective tax-free ceiling to ₹12.75 lakh.",
          },
        },
        {
          "@type": "Question",
          name: "What is the CTC to in-hand ratio in India?",
          acceptedAnswer: { "@type": "Answer",
            text: "At ₹5 LPA CTC, in-hand is roughly 78–82% of CTC. At ₹10 LPA, it drops to 72–78%. At ₹20 LPA, you keep around 62–68%. At ₹50 LPA+, take-home is often only 55–62% of CTC because higher tax slabs, EPF caps, and company benefit inclusions widen the gap.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a ₹12 LPA Indian employee cost a foreign company?",
          acceptedAnswer: { "@type": "Answer",
            text: "Total all-in cost is ₹13.5–₹14.2 LPA (~$16,100–$16,900/year) including employer PF (₹6,000/month), gratuity provisioning (₹2,400/month), and health insurance. Via a PEO/EOR like Deel or Remofirst, add 10–15% — approximately $18,000–$20,000/year total.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

// New Tax Regime slabs FY 2026-27 (confirmed unchanged from FY 2025-26)
const NEW_REGIME_SLABS = [
  ["Up to ₹4,00,000",        "0% (Nil)"],
  ["₹4,00,001 – ₹8,00,000",  "5%"],
  ["₹8,00,001 – ₹12,00,000", "10%"],
  ["₹12,00,001 – ₹16,00,000","15%"],
  ["₹16,00,001 – ₹20,00,000","20%"],
  ["₹20,00,001 – ₹24,00,000","25%"],
  ["Above ₹24,00,000",        "30%"],
];

const OLD_REGIME_SLABS = [
  ["Up to ₹2,50,000",          "0% (Nil)"],
  ["₹2,50,001 – ₹5,00,000",   "5%"],
  ["₹5,00,001 – ₹10,00,000",  "20%"],
  ["Above ₹10,00,000",          "30%"],
];

// [monthlyGross, annualCTC, hr40, hr45, inHandNew, inHandOld, usdMo, ctcRatio]
const SALARY_TABLE = [
  ["₹20,000",  "₹2.4 LPA", "₹115", "₹102", "₹17,500–₹18,800",   "₹18,200–₹19,200",   "~$220",   "~80%"],
  ["₹30,000",  "₹3.6 LPA", "₹173", "₹154", "₹25,500–₹27,000",   "₹26,500–₹28,000",   "~$331",   "~79%"],
  ["₹40,000",  "₹4.8 LPA", "₹231", "₹205", "₹33,800–₹35,500",   "₹35,000–₹37,000",   "~$441",   "~78%"],
  ["₹50,000",  "₹6 LPA",   "₹288", "₹256", "₹43,000–₹44,500",   "₹45,000–₹46,500",   "~$595",   "~77%"],
  ["₹66,667",  "₹8 LPA",   "₹385", "₹342", "₹55,000–₹57,500",   "₹57,500–₹60,500",   "~$793",   "~75%"],
  ["₹83,333",  "₹10 LPA",  "₹481", "₹427", "₹67,000–₹70,500",   "₹71,000–₹74,500",   "~$992",   "~74%"],
  ["₹1,00,000","₹12 LPA",  "₹577", "₹513", "₹84,000–₹87,000",   "₹87,500–₹91,000",   "~$1,190", "~72%"],
  ["₹1,25,000","₹15 LPA",  "₹721", "₹641", "₹1,00,000–₹1,05,000","₹1,05,000–₹1,10,000","~$1,488","~69%"],
  ["₹1,66,667","₹20 LPA",  "₹962", "₹855", "₹1,27,000–₹1,34,000","₹1,33,000–₹1,41,000","~$1,985","~65%"],
  ["₹2,00,000","₹24 LPA",  "₹1,154","₹1,026","₹1,47,000–₹1,55,000","₹1,55,000–₹1,64,000","~$2,381","~63%"],
  ["₹2,50,000","₹30 LPA",  "₹1,442","₹1,282","₹1,75,000–₹1,85,000","₹1,83,000–₹1,94,000","~$2,976","~60%"],
  ["₹4,16,667","₹50 LPA",  "₹2,404","₹2,137","₹2,72,000–₹2,90,000","₹2,80,000–₹2,98,000","~$4,960","~57%"],
];

const NRI_TABLE = [
  ["Bengaluru, India",  "₹20–30 LPA (~$24K–$36K)",        "₹1,10,000–₹1,60,000",    "10–25%", "20–35%", "Best quality-to-cost ratio"],
  ["Dubai, UAE",        "AED 14K–22K/mo (~$46K–$72K/yr)", "AED 14K–22K (0% tax!)",   "0%",     "30–45%", "High gross, high living cost"],
  ["London, UK",        "£45,000–£75,000/yr",              "£2,700–£4,200/mo",         "20–40%", "10–20%", "Expensive city, good career"],
  ["New York/SF, US",   "$90,000–$145,000/yr",             "$5,500–$8,800/mo",          "25–35%", "15–25%", "Highest gross, high cost"],
  ["Toronto, Canada",   "CAD 80K–125K/yr",                 "CAD 4,800–7,200/mo",        "20–33%", "15–25%", "Stable, multicultural"],
  ["Sydney, Australia", "AUD 95K–145K/yr",                 "AUD 5,500–8,200/mo",        "19–37%", "15–25%", "High cost, high lifestyle"],
  ["Singapore",         "SGD 75K–115K/yr",                 "SGD 4,800–7,200/mo",        "7–17%",  "25–35%", "Low tax, high savings"],
];

const FREELANCER_TABLE = [
  ["Content Writer / Copywriter",  "1–3 yrs", "$8–$18/hr",   "₹1,08,000–₹2,43,000", "Upwork, direct clients"],
  ["Web Developer (React/Next.js)","2–5 yrs", "$20–$40/hr",  "₹2,70,000–₹5,40,000", "High demand globally"],
  ["Full-Stack Engineer",          "4–8 yrs", "$35–$65/hr",  "₹4,73,000–₹8,78,000", "SaaS startups pay top"],
  ["Data Analyst / BI",            "3–6 yrs", "$22–$45/hr",  "₹2,97,000–₹6,08,000", "Tableau, Power BI skills"],
  ["ML/AI Engineer",               "3–7 yrs", "$40–$80/hr",  "₹5,40,000–₹10,80,000","Fastest growing segment"],
  ["Product Manager",              "5–10 yrs","$35–$75/hr",  "₹4,73,000–₹10,13,000","Needs domain depth"],
  ["Digital Marketing / SEO",      "2–5 yrs", "$15–$32/hr",  "₹2,03,000–₹4,32,000", "Performance-based clients"],
  ["Graphic / UI-UX Designer",     "2–6 yrs", "$15–$38/hr",  "₹2,03,000–₹5,13,000", "Portfolio is everything"],
];

const TOC = [
  { id: "ctc-illusion",     label: "The CTC illusion — what the offer letter hides" },
  { id: "tax-slabs",        label: "New vs old regime slabs FY 2026-27" },
  { id: "6lpa",             label: "₹6 LPA (₹50K/mo) — full in-hand breakdown" },
  { id: "10lpa",            label: "₹10 LPA in-hand — detailed calculation" },
  { id: "12lpa",            label: "₹12 LPA in-hand — ₹1L milestone reality check" },
  { id: "20lpa",            label: "₹20 LPA in-hand — senior professional" },
  { id: "salary-table",     label: "₹20K–₹50L master salary reference table" },
  { id: "regime-choice",    label: "Old vs new regime: which wins for your income?" },
  { id: "ctc-anatomy",      label: "Anatomy of an Indian salary slip" },
  { id: "nri-comparison",   label: "NRI salary comparison: India vs UAE, US, UK" },
  { id: "foreign-hire",     label: "What foreign companies pay for Indian hires" },
  { id: "freelancer",       label: "Indian freelancer USD rates 2026" },
  { id: "good-salary",      label: "What is a good salary in India? City guide" },
  { id: "faq",              label: "Frequently asked questions" },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
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

type CType = "info" | "warning" | "success" | "tip";
function Callout({ type = "info", title, children }: { type?: CType; title: string; children: React.ReactNode }) {
  const m: Record<CType, { bg: string; border: string; icon: React.ReactNode; tc: string; bc: string }> = {
    info:    { bg: "bg-blue-50",    border: "border-blue-200",    icon: <Info size={15} className="text-blue-600 flex-shrink-0" />,           tc: "text-blue-900",    bc: "text-blue-800" },
    warning: { bg: "bg-amber-50",   border: "border-amber-200",   icon: <AlertTriangle size={15} className="text-amber-600 flex-shrink-0" />, tc: "text-amber-900",   bc: "text-amber-800" },
    success: { bg: "bg-emerald-50", border: "border-emerald-200", icon: <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />,tc: "text-emerald-900", bc: "text-emerald-800" },
    tip:     { bg: "bg-violet-50",  border: "border-violet-200",  icon: <Zap size={15} className="text-violet-600 flex-shrink-0" />,           tc: "text-violet-900",  bc: "text-violet-800" },
  };
  const s = m[type];
  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-5`}>
      <div className={`flex items-start gap-2 font-bold text-[13px] mb-2 ${s.tc}`}>{s.icon}<span>{title}</span></div>
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
          {isEnd ? "Calculate your exact in-hand salary — instantly" : "Find your real in-hand salary in 10 seconds"}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-md mx-auto">
          {isEnd
            ? "Enter your CTC, choose old or new regime, add HRA and 80C details. Get monthly in-hand in ₹ and USD — updated for FY 2026-27."
            : "Enter CTC, toggle old vs new regime, see exact monthly in-hand, hourly rate, and tax breakdown for FY 2026-27."}
        </p>
        <Link href="/india-salary-calculator"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500
                     hover:bg-blue-400 text-white font-bold text-sm transition-all
                     shadow-lg shadow-blue-900/40 group justify-center w-full sm:w-auto">
          <Calculator size={15} />
          Use Free Calculator
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

/** Breakdown row table (KV style) */
function BreakdownTable({ rows }: {
  rows: { label: string; value: string; value2?: string; highlight?: boolean; negative?: boolean }[];
}) {
  return (
    <div className="not-prose rounded-2xl border border-slate-200 overflow-hidden my-5 shadow-sm">
      {rows.map((r, i) => (
        <div key={i} className={`flex items-center justify-between gap-4 px-4 py-3 text-[13px]
          border-b border-slate-100 last:border-0
          ${r.highlight ? "bg-blue-50 font-bold" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
          <span className="text-slate-700 leading-snug">{r.label}</span>
          <div className="text-right flex-shrink-0 flex gap-3 items-center">
            <span className={`font-bold tabular-nums ${
              r.highlight ? "text-blue-700" : r.negative ? "text-rose-600" : "text-slate-900"
            }`}>{r.value}</span>
            {r.value2 && (
              <span className="font-bold tabular-nums text-emerald-700">{r.value2}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function IndiaSalaryGuidePage() {
  return (
    <main className="bg-white text-slate-800 min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#0f172a 0%,#1a3a6e 55%,#1d4ed8 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-orange-500/5 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-14 md:pt-16 md:pb-20">
          <nav className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-7 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} className="text-slate-600" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={10} className="text-slate-600" />
            <span className="text-slate-300">India Salary Guide 2026</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-5">
            {["India · FY 2026-27", "CTC to In-Hand", "New & Old Regime", "NRI Comparison"].map((t) => (
              <span key={t} className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1
                                       rounded-md bg-white/10 text-blue-200 border border-white/10">{t}</span>
            ))}
          </div>

          {/* H1 — exact-match keyword at the front */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-[1.15]
                         tracking-tight text-white mb-4 max-w-4xl">
            CTC to In-Hand Salary India 2026:{" "}
            <span className="text-blue-300">Complete Breakdown FY 2026-27</span>
          </h1>

          <p className="text-slate-300 text-[15px] md:text-lg leading-relaxed mb-7 max-w-2xl">
            Your offer letter says <strong className="text-white">₹12 LPA</strong>. What actually
            hits your bank is <strong className="text-white">₹85,500/month</strong> — not
            ₹1,00,000. This guide converts every CTC from ₹2.4L to ₹50L into real monthly
            in-hand pay under both tax regimes, with NRI salary comparisons, freelancer USD
            rates, and a city-by-city guide to what counts as a good salary.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {[
              { value: "₹85,500", label: "₹12 LPA monthly in-hand", sub: "New regime, Maharashtra" },
              { value: "₹12.75L", label: "Effective tax-free limit", sub: "New regime + std. deduction" },
              { value: "7–9 LPA", label: "Average Indian salary 2026", sub: "National estimate" },
              { value: "₹84/$1",  label: "USD/INR (May 2026)",         sub: "Verify before contracts" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white/8 border border-white/10 p-3 sm:p-4 text-center">
                <p className="text-base sm:text-xl font-extrabold text-white leading-none mb-1">{s.value}</p>
                <p className="text-[10px] sm:text-[11px] font-semibold text-blue-200 leading-snug">{s.label}</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-7 text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><Calendar size={11} /> Updated May 27, 2026</span>
            <span className="flex items-center gap-1"><Clock size={11} /> 17 min read</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 size={11} /> Income Tax Act 2025 · FY 2026-27 slabs · ClearTax verified
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

            {/* ═══ SECTION 1 — CTC ILLUSION ═══ */}
            <SectionHeading id="ctc-illusion">The CTC Illusion — What Your Offer Letter Is Actually Telling You</SectionHeading>

            <p>
              In the US or UK, a salary figure is reasonably close to what you'll earn before tax.
              India is different in a fundamental way: <strong>CTC (Cost to Company) is the total
              amount the company spends to have you on payroll</strong> — not the amount you receive.
              The gap between the two ranges from 18% at ₹6 LPA to over 40% at ₹50 LPA.
            </p>

            <p className="mt-4">
              A 2024 survey of 500+ engineering freshers found 68% were surprised their first
              payslip was 30–40% lower than their CTC figure. This is not a scam — it's a
              structural feature of how Indian compensation works. Understanding it before
              you accept any offer is one of the highest-value financial decisions you'll make.
            </p>

            <Callout type="warning" title="CTC includes money you will never see in your account">
              A ₹12 LPA CTC includes: employer's PF contribution (12% of basic = ₹6,000–₹7,200/month),
              gratuity provision (~4.8% of basic = ₹2,400–₹2,880/month), and group health insurance
              premiums (₹10,000–₹25,000/year). These are real costs to your employer but never appear
              in your account. The actual number that matters is your <strong>gross monthly salary</strong> —
              which is your CTC minus these employer-side costs, divided by 12.
            </Callout>

            <SubH>The CTC to in-hand ratio at a glance</SubH>
            <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              {[
                { ctc: "₹5 LPA", ratio: "~78–82%", inhand: "₹31,000–₹34,000/mo", note: "Fresher / junior level" },
                { ctc: "₹12 LPA", ratio: "~72–75%", inhand: "₹85,500–₹91,000/mo", note: "Mid-level professional" },
                { ctc: "₹25 LPA", ratio: "~62–67%", inhand: "₹1,55,000–₹1,68,000/mo", note: "Senior / specialist" },
              ].map((s) => (
                <div key={s.ctc} className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-center">
                  <p className="text-[11px] font-black text-slate-500 uppercase tracking-wide mb-1">{s.ctc} CTC</p>
                  <p className="text-2xl font-extrabold text-blue-700 leading-none mb-1">{s.ratio}</p>
                  <p className="text-[12px] font-semibold text-emerald-700 mb-1">{s.inhand}</p>
                  <p className="text-[10px] text-slate-400">{s.note}</p>
                </div>
              ))}
            </div>

            {/* ═══ SECTION 2 — TAX SLABS ═══ */}
            <SectionHeading id="tax-slabs">New vs Old Tax Regime Slabs FY 2026-27 (Confirmed Unchanged)</SectionHeading>

            <p>
              For FY 2026-27 (AY 2027-28), the Union Budget 2026 confirmed no changes to income
              tax slabs under either regime. The <strong>New Tax Regime is now the default</strong>
              — you must explicitly opt into Old Regime when filing. Here are the exact slabs:
            </p>

            {/* Tax slabs — mobile stacked, desktop side-by-side */}
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {/* New Regime */}
              <div className="rounded-2xl border border-blue-200 overflow-hidden shadow-sm">
                <div className="bg-blue-700 text-white px-4 py-3">
                  <p className="font-extrabold text-[13px]">New Tax Regime (Default)</p>
                  <p className="text-blue-200 text-[11px]">FY 2025-26 & FY 2026-27</p>
                </div>
                <table className="w-full text-[12px]">
                  <tbody className="divide-y divide-slate-100">
                    {NEW_REGIME_SLABS.map(([range, rate], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50/50"}>
                        <td className="px-4 py-2.5 text-slate-700">{range}</td>
                        <td className="px-4 py-2.5 font-bold text-blue-700 text-right">{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="bg-blue-50 px-4 py-2.5 border-t border-blue-100">
                  <p className="text-[11px] text-blue-800 font-semibold">
                    Standard deduction: ₹75,000 · Rebate u/s 87A: ₹60,000 (zero tax up to ₹12.75L for salaried)
                  </p>
                </div>
              </div>
              {/* Old Regime */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-800 text-white px-4 py-3">
                  <p className="font-extrabold text-[13px]">Old Tax Regime (Optional)</p>
                  <p className="text-slate-300 text-[11px]">Must opt-in explicitly</p>
                </div>
                <table className="w-full text-[12px]">
                  <tbody className="divide-y divide-slate-100">
                    {OLD_REGIME_SLABS.map(([range, rate], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-4 py-2.5 text-slate-700">{range}</td>
                        <td className="px-4 py-2.5 font-bold text-slate-800 text-right">{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-100">
                  <p className="text-[11px] text-slate-600 font-semibold">
                    Allows: 80C (₹1.5L), HRA, 80D, home loan (₹2L), NPS 80CCD(1B) (₹50K)
                  </p>
                </div>
              </div>
            </div>

            <Callout type="success" title="Zero tax under New Regime up to ₹12.75 lakh for salaried employees">
              After the ₹75,000 standard deduction, taxable income is ₹12,00,000 or below. Section 87A
              provides a full rebate of ₹60,000 on this amount — making effective tax liability zero.
              This is the most significant tax relief for middle-income salaried earners in recent years.
            </Callout>

            {/* ═══ SECTION 3 — ₹6 LPA ═══ */}
            <SectionHeading id="6lpa">₹6 LPA In-Hand: The ₹50,000/Month Reality Check</SectionHeading>

            <p>
              ₹50,000/month gross (₹6 LPA CTC) is a milestone for millions of junior IT professionals,
              experienced BPO team leaders, and banking officers at 3–5 years. Here's what actually
              reaches your account — the numbers most job boards don't show you.
            </p>

            <div className="not-prose my-5">
              <div className="grid grid-cols-2 gap-2 sm:hidden mb-4">
                {[
                  { label: "New Regime in-hand", value: "~₹44,000/mo", color: "text-blue-700" },
                  { label: "Old Regime + HRA",   value: "~₹46,000/mo", color: "text-emerald-700" },
                  { label: "Hourly (40 hrs/wk)", value: "₹288/hr",    color: "text-slate-700" },
                  { label: "USD equivalent",      value: "~$595/mo",   color: "text-slate-700" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-center">
                    <p className={`text-[15px] font-extrabold leading-none mb-1 ${s.color}`}>{s.value}</p>
                    <p className="text-[10px] text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="hidden sm:grid sm:grid-cols-4 gap-3 mb-5">
                {[
                  { label: "New Regime in-hand", value: "~₹44,000/mo", color: "text-blue-700", bg: "bg-blue-50 border-blue-100" },
                  { label: "Old Regime + HRA",   value: "~₹46,000/mo", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-100" },
                  { label: "Hourly (40 hrs/wk)", value: "₹288/hr",    color: "text-slate-700", bg: "bg-slate-50 border-slate-200" },
                  { label: "USD equivalent",      value: "~$595/mo",   color: "text-slate-700", bg: "bg-slate-50 border-slate-200" },
                ].map((s) => (
                  <div key={s.label} className={`rounded-xl border ${s.bg} p-4 text-center`}>
                    <p className={`text-xl font-extrabold leading-none mb-1 ${s.color}`}>{s.value}</p>
                    <p className="text-[11px] text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <BreakdownTable rows={[
              { label: "Monthly gross (₹6 LPA ÷ 12)", value: "₹50,000" },
              { label: "Employee EPF (12% of ₹25,000 basic)", value: "−₹3,000", negative: true },
              { label: "Professional tax (Maharashtra)", value: "−₹200", negative: true },
              { label: "TDS — New Regime", value: "−₹2,300", negative: true },
              { label: "Monthly in-hand — New Regime", value: "~₹44,500", highlight: true },
              { label: "TDS — Old Regime (with HRA ₹12K + 80C ₹1.5L)", value: "−₹1,800", negative: true },
              { label: "Monthly in-hand — Old Regime", value: "~₹45,800", highlight: true },
            ]} />

            <p>
              For foreign clients: ₹50,000/month = approximately $595/month or{" "}
              <strong>$3.40–$3.60/hour</strong>. For an Indian professional at 3–5 years, this
              is genuine mid-level pay — not entry level, not premium. A ₹6 LPA job in Pune or
              Hyderabad leaves you comfortable; the same in Mumbai or Bengaluru means roommates
              or long commutes.
            </p>

            {/* ═══ SECTION 4 — ₹10 LPA ═══ */}
            <SectionHeading id="10lpa">₹10 LPA In-Hand: Detailed Calculation (New vs Old Regime)</SectionHeading>

            <p>
              ₹10 LPA (₹83,333/month gross) is where the new vs old regime choice starts making
              a meaningful monthly difference. This is the mid-level IT professional at 4–6 years,
              the experienced manager in BFSI, or a senior analyst in consulting.
            </p>

            <BreakdownTable rows={[
              { label: "Monthly gross (₹10 LPA ÷ 12)", value: "₹83,333" },
              { label: "Employee EPF (12% of ₹40,000 basic)", value: "−₹4,800", negative: true },
              { label: "Professional tax", value: "−₹200", negative: true },
              { label: "TDS — New Regime (₹10L after std. ded.)", value: "−₹8,333", negative: true },
              { label: "In-hand — New Regime", value: "~₹70,000/mo", highlight: true },
              { label: "TDS — Old Regime (HRA ₹18K rent + 80C ₹1.5L declared)", value: "−₹5,000", negative: true },
              { label: "In-hand — Old Regime", value: "~₹73,333/mo", highlight: true },
              { label: "Annual difference (Old saves)", value: "~₹40,000/year" },
            ]} />

            <Callout type="tip" title="₹10 LPA crosses into the 15% new regime bracket">
              After the ₹75,000 standard deduction, taxable income is ₹9.25L — falling into
              the 10% bracket (₹8–12L). The effective tax rate under New Regime at ₹10 LPA is
              approximately 5.6% of gross. Under Old Regime with proper deductions, it can fall
              to 3–4% effective.
            </Callout>

            {/* ═══ SECTION 5 — ₹12 LPA ═══ */}
            <SectionHeading id="12lpa">₹12 LPA In-Hand: India's Aspirational ₹1 Lakh Milestone</SectionHeading>

            <p>
              ₹12 LPA (₹1,00,000/month gross) carries real cultural weight in India. It's the number
              5–8 year professionals are working toward. The gap between what's on paper and what's in
              your account is ₹14,500–₹15,000 per month under New Regime — and the old vs new
              regime choice matters more here than at any salary below this.
            </p>

            {/* Dual column breakdown — responsive */}
            <div className="not-prose my-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "New Tax Regime", color: "border-blue-200 bg-blue-50", hc: "bg-blue-700",
                    rows: [
                      ["Monthly gross", "₹1,00,000"],
                      ["Employee EPF", "−₹6,000"],
                      ["Professional tax", "−₹200"],
                      ["TDS (est.)", "−₹8,300"],
                      ["Monthly in-hand", "₹85,500"],
                    ],
                  },
                  {
                    title: "Old Regime (HRA ₹20K rent + 80C ₹1.5L + 80D ₹25K)", color: "border-emerald-200 bg-emerald-50", hc: "bg-emerald-700",
                    rows: [
                      ["Monthly gross", "₹1,00,000"],
                      ["Employee EPF", "−₹6,000"],
                      ["Professional tax", "−₹200"],
                      ["TDS (est.)", "−₹4,800"],
                      ["Monthly in-hand", "₹89,000"],
                    ],
                  },
                ].map((col) => (
                  <div key={col.title} className={`rounded-2xl border overflow-hidden shadow-sm ${col.color}`}>
                    <div className={`${col.hc} text-white px-4 py-3`}>
                      <p className="font-bold text-[13px]">{col.title}</p>
                    </div>
                    {col.rows.map(([label, val], i) => (
                      <div key={i} className={`flex justify-between px-4 py-2.5 text-[13px] border-b border-slate-100 last:border-0
                        ${i === col.rows.length - 1 ? "font-extrabold bg-white" : "bg-white/60"}`}>
                        <span className="text-slate-700">{label}</span>
                        <span className={`tabular-nums font-bold ${
                          i === col.rows.length - 1 ? (col.hc.includes("blue") ? "text-blue-700" : "text-emerald-700") :
                          val.startsWith("−") ? "text-rose-600" : "text-slate-900"
                        }`}>{val}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-slate-400 mt-3 text-center">
                Difference: ₹3,500/month = <strong className="text-slate-600">₹42,000/year</strong> saved by Old Regime (with deductions)
              </p>
            </div>

            {/* ═══ SECTION 6 — ₹20 LPA ═══ */}
            <SectionHeading id="20lpa">₹20 LPA In-Hand: Senior Professional Breakdown</SectionHeading>

            <p>
              ₹20 LPA (₹1,66,667/month gross) puts you in the top ~5% of Indian earners. At this
              level, both your tax bracket and the old vs new regime choice become more complex.
              The 25% slab kicks in for income between ₹20–₹24L under the New Regime.
            </p>

            <BreakdownTable rows={[
              { label: "Monthly gross (₹20 LPA ÷ 12)", value: "₹1,66,667" },
              { label: "Employee EPF (12% of ₹70,000 basic)", value: "−₹8,400", negative: true },
              { label: "Professional tax", value: "−₹200", negative: true },
              { label: "TDS — New Regime", value: "−₹29,067", negative: true },
              { label: "In-hand — New Regime", value: "~₹1,29,000/mo", highlight: true },
              { label: "TDS — Old Regime (home loan + HRA + 80C + NPS)", value: "−₹19,500", negative: true },
              { label: "In-hand — Old Regime", value: "~₹1,38,567/mo", highlight: true },
              { label: "Annual Old Regime saving", value: "~₹1,14,000/year" },
            ]} />

            <Callout type="info" title="At ₹20+ LPA, Old Regime almost always wins">
              With a home loan (₹2L interest deduction), HRA (metro rent ₹30K+), 80C (₹1.5L), 80D
              (₹25K), and NPS 80CCD(1B) (₹50K), total deductions easily exceed ₹5L. Old Regime
              saves ₹90,000–₹1,20,000/year at this income level. The breakeven point: if your
              deductions exceed ₹3,75,000, Old Regime wins at nearly every income above ₹15 LPA.
            </Callout>

            {/* ═══ SECTION 7 — BIG TABLE ═══ */}
            <SectionHeading id="salary-table">₹20K–₹50L Master Salary Reference Table (FY 2026-27)</SectionHeading>

            <p>
              All in-hand figures use New Tax Regime with ₹75,000 standard deduction and Maharashtra
              professional tax. Old Regime column assumes HRA declared + ₹1.5L 80C invested.
              USD at ₹84/$ (May 2026 — verify before contracts). EPF based on 40–50% basic.
            </p>

            {/* Big table — mobile cards + desktop table */}
            <div className="not-prose my-6">
              {/* Mobile cards */}
              <div className="grid grid-cols-1 gap-2 sm:hidden">
                {SALARY_TABLE.map(([monthly, ctc, hr40, , inNew, inOld, usd, ratio]) => (
                  <div key={monthly} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-extrabold text-slate-900 text-[14px]">{monthly}/mo</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-blue-600">{ctc}</span>
                        <span className="text-[10px] text-slate-400">{ratio} in-hand</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="bg-blue-50 rounded-lg p-2 text-center">
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">New Regime</p>
                        <p className="font-bold text-blue-700 text-[12px]">{inNew}</p>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-2 text-center">
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">Old Regime</p>
                        <p className="font-bold text-emerald-700 text-[12px]">{inOld}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-[11px] text-slate-400">
                      <span>₹/hr (40h): <strong className="text-slate-600">{hr40}</strong></span>
                      <span>USD: <strong className="text-slate-600">{usd}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Desktop table */}
              <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[11px] sm:text-[12px]">
                    <thead>
                      <tr className="bg-slate-950 text-white text-[9px] sm:text-[10px] uppercase tracking-widest">
                        {["Monthly Gross", "Annual CTC", "₹/hr (40h)", "In-Hand New Regime", "In-Hand Old Regime", "USD/mo", "Take-Home %"].map((h, i) => (
                          <th key={i} className="px-3 sm:px-4 py-3 text-left font-black whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {SALARY_TABLE.map(([monthly, ctc, hr40, , inNew, inOld, usd, ratio], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                          <td className="px-3 sm:px-4 py-2.5 font-extrabold text-slate-900 whitespace-nowrap">{monthly}</td>
                          <td className="px-3 sm:px-4 py-2.5 font-bold text-blue-700">{ctc}</td>
                          <td className="px-3 sm:px-4 py-2.5 text-slate-500">{hr40}</td>
                          <td className="px-3 sm:px-4 py-2.5 font-bold text-blue-700">{inNew}</td>
                          <td className="px-3 sm:px-4 py-2.5 font-bold text-emerald-700">{inOld}</td>
                          <td className="px-3 sm:px-4 py-2.5 text-slate-400">{usd}</td>
                          <td className="px-3 sm:px-4 py-2.5 text-rose-500 font-semibold">{ratio}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-4 py-2.5 text-[11px] text-slate-400 border-t border-slate-100 bg-slate-50">
                  Old Regime assumes HRA declared (city rent ₹12K–₹40K), 80C invested (₹1.5L), 80D health premium (₹25K). State PT: Maharashtra ₹200/mo. USD at ₹84.
                </p>
              </div>
            </div>

            <CalculatorCTA variant="mid" />

            {/* ═══ SECTION 8 — REGIME CHOICE ═══ */}
            <SectionHeading id="regime-choice">Old vs New Regime: Which Wins for Your Specific Income?</SectionHeading>

            <p>
              This is the single decision that moves your monthly take-home the most — and
              it's entirely reversible each year at filing. No universally right answer exists;
              it depends on your actual deduction profile.
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-7">
              {[
                {
                  title: "Choose New Regime if you:",
                  color: "bg-blue-600",
                  items: [
                    "Live with family / no rent to declare",
                    "Don't have a home loan",
                    "Earn under ₹12.75 LPA (zero tax!)",
                    "Don't invest ₹1.5L in 80C actively",
                    "Want simpler ITR filing",
                    "Earn above ₹50 LPA with few deductions",
                  ],
                },
                {
                  title: "Choose Old Regime if you:",
                  color: "bg-emerald-700",
                  items: [
                    "Pay metro rent ₹20,000+ and declare HRA",
                    "Have a home loan (₹2L interest deduction)",
                    "Max out 80C (PPF + ELSS + EPF = ₹1.5L)",
                    "Have health insurance (80D ₹25K–₹50K)",
                    "Invest ₹50K in NPS (80CCD extra deduction)",
                    "Earn ₹12–₹40 LPA — this is typically the sweet spot",
                  ],
                },
              ].map((col) => (
                <div key={col.title} className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
                  <div className={`w-full ${col.color} text-white rounded-xl px-3 py-2 mb-4`}>
                    <p className="font-bold text-[13px]">{col.title}</p>
                  </div>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-slate-600">
                        <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick decision table */}
            <SubH>Quick decision table by CTC and deduction level</SubH>
            <div className="not-prose rounded-2xl border border-slate-200 overflow-hidden shadow-sm my-5">
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                      <th className="px-4 py-3 text-left font-black">CTC Range</th>
                      <th className="px-4 py-3 text-left font-black">Low Deductions (&lt;₹2L)</th>
                      <th className="px-4 py-3 text-left font-black">Mid Deductions (₹2–4L)</th>
                      <th className="px-4 py-3 text-left font-black">High Deductions (&gt;₹4L)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Up to ₹7.5 LPA",  "New ✓",   "New ✓",   "Calc needed"],
                      ["₹7.5–₹12 LPA",    "New ✓",   "Calc needed","Old ✓"],
                      ["₹12–₹20 LPA",     "New ✓",   "Old ✓",   "Old ✓✓"],
                      ["₹20–₹40 LPA",     "Calc needed","Old ✓✓","Old ✓✓"],
                      ["₹40 LPA+",        "New ✓",   "Old ✓",   "Old ✓✓"],
                    ].map(([range, low, mid, high], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-4 py-2.5 font-bold text-slate-800">{range}</td>
                        <td className={`px-4 py-2.5 font-semibold ${low.includes("New") ? "text-blue-700" : "text-amber-600"}`}>{low}</td>
                        <td className={`px-4 py-2.5 font-semibold ${mid.includes("Old") ? "text-emerald-700" : mid.includes("New") ? "text-blue-700" : "text-amber-600"}`}>{mid}</td>
                        <td className={`px-4 py-2.5 font-semibold ${high.includes("Old") ? "text-emerald-700" : "text-amber-600"}`}>{high}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ═══ SECTION 9 — CTC ANATOMY ═══ */}
            <SectionHeading id="ctc-anatomy">Anatomy of an Indian Salary Slip (Every Component Explained)</SectionHeading>

            <p>
              Every Indian salary slip has the same basic structure. Understanding what each
              component means — and which are taxable vs exempt — directly affects how much
              you negotiate and how you structure your declaration.
            </p>

            <div className="not-prose space-y-2 my-6">
              {[
                { comp: "Basic Salary", pct: "40–50% of CTC", tax: "Fully taxable", note: "Foundation for all other calculations. Higher basic = higher EPF, gratuity, and overtime calculations. Lower basic = more in short-term allowances but less retirement corpus." },
                { comp: "HRA (House Rent Allowance)", pct: "15–40% of basic", tax: "Partially exempt", note: "Exempt for rent payers under Section 10(13A). Metro: 50% of basic. Non-metro: 40% of basic. Least-of-three formula applies. Fully taxable if you don't pay rent." },
                { comp: "Special Allowance", pct: "20–40% of CTC", tax: "Fully taxable", note: "Pure cash, fully taxable. Some companies split this into meal vouchers (₹2,200/mo tax-free) and fuel reimbursement (₹2,400/mo tax-free) — ask HR about this." },
                { comp: "LTA (Leave Travel Allowance)", pct: "Varies", tax: "Exempt with proof", note: "Tax-exempt for actual travel expenses within India, once in two calendar years. Requires travel proof. Often paid out taxable if not claimed." },
                { comp: "Employee EPF Contribution", pct: "12% of basic", tax: "Deductible u/s 80C", note: "Goes to your PF account. Employer matches this — but employer PF is included in CTC, not your gross. Combined, you're building a retirement corpus at 24% of basic." },
                { comp: "Employer EPF / Gratuity", pct: "12% basic + 4.8%", tax: "N/A (never seen)", note: "Real cost to employer, included in CTC, but never appears in your account. Gratuity is paid as a lump sum after 5 years of continuous service." },
                { comp: "Performance / Annual Bonus", pct: "10–40% of CTC", tax: "Fully taxable", note: "Often included in CTC at 100% of target — meaning you'll only see it in full if you hit targets. Budget monthly expenses on base, not CTC including bonus." },
              ].map((r) => (
                <div key={r.comp} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <p className="font-bold text-slate-900 text-[13px]">{r.comp}</p>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{r.pct}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      r.tax.includes("Fully") ? "bg-rose-50 text-rose-700" :
                      r.tax.includes("Partially") ? "bg-amber-50 text-amber-700" :
                      "bg-emerald-50 text-emerald-700"
                    }`}>{r.tax}</span>
                  </div>
                  <p className="text-[12px] text-slate-500 leading-relaxed">{r.note}</p>
                </div>
              ))}
            </div>

            {/* ═══ SECTION 10 — NRI COMPARISON ═══ */}
            <SectionHeading id="nri-comparison">NRI Salary Comparison: India vs UAE, US, UK, Singapore (2026)</SectionHeading>

            <p>
              For a software engineer or finance professional with 5 years of experience, here are
              the real numbers across countries where most Indian diaspora live and work — including
              after-tax take-home and realistic savings rates.
            </p>

            {/* NRI table — mobile cards + desktop table */}
            <div className="not-prose my-6">
              <div className="grid grid-cols-1 gap-3 sm:hidden">
                {NRI_TABLE.map(([loc, gross, inhand, tax, savings, note]) => (
                  <div key={loc} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-bold text-slate-900 text-[13px]">{loc}</p>
                      <span className="text-[10px] text-slate-400 text-right">{note}</span>
                    </div>
                    <p className="text-[12px] text-slate-500 mb-2">{gross}</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-blue-50 rounded-lg p-2">
                        <p className="text-[9px] text-slate-400">In-Hand</p>
                        <p className="font-bold text-blue-700 text-[11px]">{inhand}</p>
                      </div>
                      <div className="bg-rose-50 rounded-lg p-2">
                        <p className="text-[9px] text-slate-400">Tax Rate</p>
                        <p className="font-bold text-rose-600 text-[11px]">{tax}</p>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-2">
                        <p className="text-[9px] text-slate-400">Savings</p>
                        <p className="font-bold text-emerald-700 text-[11px]">{savings}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                        {["Location", "Annual Gross", "Monthly In-Hand", "Tax Rate", "Savings Rate", "Note"].map((h, i) => (
                          <th key={i} className="px-3 py-3 text-left font-black whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {NRI_TABLE.map(([loc, gross, inhand, tax, savings, note], i) => (
                        <tr key={i} className={i === 0 ? "bg-blue-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                          <td className="px-3 py-2.5 font-bold text-slate-900">{loc}</td>
                          <td className="px-3 py-2.5 text-slate-500">{gross}</td>
                          <td className="px-3 py-2.5 font-semibold text-blue-700">{inhand}</td>
                          <td className="px-3 py-2.5 text-rose-500 font-semibold">{tax}</td>
                          <td className="px-3 py-2.5 font-bold text-emerald-700">{savings}</td>
                          <td className="px-3 py-2.5 text-slate-400 text-[11px]">{note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <Callout type="tip" title="The honest NRI return-to-India calculation">
              Dubai wins on paper — 0% income tax, strong AED, high salaries. But a 2BHK in
              a decent area runs AED 7,000–12,000/month. International school per child:
              AED 4,000–8,000/month. Your actual savings in Dubai can be less than a senior
              Bengaluru professional who owns a home. An NRI returning to India at ₹35–40 LPA
              with a paid-off property often has a superior quality-of-life-to-cost ratio.
              <strong> Run your specific numbers — don't make a return decision on the
              exchange rate alone.</strong>
            </Callout>

            {/* ═══ SECTION 11 — FOREIGN HIRE ═══ */}
            <SectionHeading id="foreign-hire">What Foreign Companies Actually Pay for Indian Hires</SectionHeading>

            <p>
              If you're a US, UK, or Australian company hiring Indian talent — whether direct
              employees or contractors — Indian compensation structure will feel unfamiliar.
              Here's what you need to know to budget correctly and avoid surprises.
            </p>

            <SubH>Offer letter vs actual employer cost</SubH>
            <div className="not-prose rounded-2xl border border-slate-200 overflow-hidden shadow-sm my-5">
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                      {["Cost Component", "% of CTC", "Monthly Amount (₹12L CTC)", "Note"].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left font-black whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Basic + HRA + Allowances", "~80% of CTC", "₹80,000/mo", "What employee grosses"],
                      ["Employer EPF (12% of basic)", "~5–6%", "₹4,800–₹6,000/mo", "Never in employee account"],
                      ["Gratuity provision (4.8% of basic)", "~2–2.5%", "₹2,000–₹2,400/mo", "Paid after 5 yrs service"],
                      ["Group health insurance", "~₹15,000–₹25,000/yr", "₹1,250–₹2,083/mo", "Low cost, high employee value"],
                      ["Total employer cost (₹12L CTC)", "100%", "₹1,13,000–₹1,17,500/mo", "~₹13.5–₹14.2L total"],
                      ["Via PEO/EOR (Deel, Remofirst etc.)", "+10–15%", "~$1,900–$2,100/mo", "Required without India entity"],
                    ].map(([comp, pct, amt, note], i) => (
                      <tr key={i} className={i === 5 ? "bg-amber-50 font-bold" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-4 py-2.5 font-semibold text-slate-800">{comp}</td>
                        <td className="px-4 py-2.5 text-blue-700 font-semibold">{pct}</td>
                        <td className="px-4 py-2.5 text-emerald-700 font-bold">{amt}</td>
                        <td className="px-4 py-2.5 text-slate-400 text-[11px]">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              Bottom line for foreign companies: a ₹12 LPA Indian hire costs approximately{" "}
              <strong>$18,000–$20,000/year</strong> all-in through a PEO. For reference, an equivalent
              US mid-level hire at $70,000–$90,000 costs $84,000–$108,000/year with employer payroll
              tax, benefits, and overhead. The cost advantage is real and significant — but the
              quality-of-life-to-salary ratio in India means top talent increasingly commands higher
              premiums for remote work.
            </p>

            {/* ═══ SECTION 12 — FREELANCER ═══ */}
            <SectionHeading id="freelancer">Indian Freelancer USD Rates for Foreign Clients (2026)</SectionHeading>

            <p>
              Setting your freelance rate for US, UK, or Australian clients is one of the most
              impactful financial decisions you'll make. Too low and you're subsidising clients
              who have $200/hr US alternatives. Too high without portfolio evidence and you lose
              before you start. Here's where the market actually sits in 2026:
            </p>

            {/* Freelancer table — mobile cards + desktop table */}
            <div className="not-prose my-6">
              <div className="grid grid-cols-1 gap-2 sm:hidden">
                {FREELANCER_TABLE.map(([role, exp, usd, inr, note]) => (
                  <div key={role} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-1.5">
                      <p className="font-bold text-slate-900 text-[13px]">{role}</p>
                      <span className="text-[10px] text-slate-400 flex-shrink-0 ml-2">{exp}</span>
                    </div>
                    <div className="flex gap-4 mb-1">
                      <div>
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">USD Rate</p>
                        <p className="font-extrabold text-blue-700 text-[14px]">{usd}</p>
                      </div>
                      <div>
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">₹/month (45h)</p>
                        <p className="font-bold text-emerald-700 text-[13px]">{inr}</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400">{note}</p>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                      {["Role", "Experience", "USD Rate", "₹/month (45 hrs)", "Tip"].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left font-black">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {FREELANCER_TABLE.map(([role, exp, usd, inr, note], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-4 py-2.5 font-bold text-slate-900">{role}</td>
                        <td className="px-4 py-2.5 text-slate-500">{exp}</td>
                        <td className="px-4 py-2.5 font-extrabold text-blue-700">{usd}</td>
                        <td className="px-4 py-2.5 font-bold text-emerald-700">{inr}</td>
                        <td className="px-4 py-2.5 text-slate-400 text-[11px]">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Callout type="warning" title="Your freelance rate must beat your salaried total compensation — not just gross salary">
              A ₹12 LPA salaried role at 45 hrs/week = ₹513/hour gross — plus employer PF
              (₹6,000/mo), gratuity (₹2,400/mo), health insurance (₹1,500–₹3,000/mo value),
              and paid leave (18–21 days/year). Your freelance hourly rate needs to exceed{" "}
              <strong>₹800–₹900/hour ($9.50–$10.70/hr)</strong> to genuinely beat that role.
              This means a $10/hr freelance rate is barely breaking even with a ₹12 LPA job.
              Price accordingly.
            </Callout>

            <Callout type="tip" title="Build a 3–5% USD/INR buffer into every contract">
              USD/INR moves 3–6 rupees in a quarter. On a $3,000/month invoice, the difference
              between converting at ₹86 vs ₹80 is ₹18,000/month. Quote in USD, specify
              conversion at invoice date rate, and maintain a 3-month USD buffer before converting.
              LRS (Liberalised Remittance Scheme) applies for inflows — ensure your bank sets
              up proper FEMA-compliant freelancer receipts from day one.
            </Callout>

            {/* ═══ SECTION 13 — GOOD SALARY ═══ */}
            <SectionHeading id="good-salary">What Is a Good Salary in India in 2026? City-by-City Guide</SectionHeading>

            <p>
              The national average salary is ₹7–9 LPA; the median is ₹5–6 LPA. But those
              numbers are meaningless without city context. Here's what the same salary feels
              like across different markets:
            </p>

            <div className="not-prose space-y-3 my-7">
              {[
                {
                  city: "Bengaluru & Mumbai", tag: "Highest cost · Highest salaries",
                  color: "border-blue-200 bg-blue-50",
                  hc: "bg-blue-700",
                  levels: [
                    { level: "Fresher (0–2 yrs)", range: "₹4–7 LPA reasonable · ₹8+ LPA is strong · IIT/NIT grads at top firms: ₹15–24 LPA" },
                    { level: "Mid-level (3–6 yrs)", range: "₹12–22 LPA for tech, finance, consulting" },
                    { level: "Senior (7–12 yrs)", range: "₹25–45 LPA IC · ₹45–80 LPA for managers at top cos" },
                    { level: "Director / VP", range: "₹80 LPA–₹2 Cr+ at FAANG/startups" },
                  ],
                },
                {
                  city: "Hyderabad & Pune", tag: "Strong market · Better cost-of-living ratio",
                  color: "border-emerald-200 bg-emerald-50",
                  hc: "bg-emerald-700",
                  levels: [
                    { level: "Fresher", range: "₹3.5–6 LPA · Rent 30–35% cheaper than Bengaluru" },
                    { level: "Mid-level", range: "₹10–18 LPA — often better lifestyle-to-salary ratio" },
                    { level: "Senior", range: "₹20–40 LPA — top tier for product/BFSI/pharma" },
                  ],
                },
                {
                  city: "Delhi NCR", tag: "Diverse economy · Wide salary range",
                  color: "border-violet-200 bg-violet-50",
                  hc: "bg-violet-700",
                  levels: [
                    { level: "Fresher", range: "₹3–6 LPA (Gurgaon/Noida corps run ₹5–8 LPA)" },
                    { level: "Mid-level", range: "₹10–20 LPA in IT, BFSI, manufacturing" },
                    { level: "Senior", range: "₹22–45 LPA · GCCs (Global Capability Centres) pay well" },
                  ],
                },
                {
                  city: "Tier 2 cities (Jaipur, Lucknow, Indore, Coimbatore, Kochi)",
                  tag: "Lower salary · Much lower cost",
                  color: "border-amber-200 bg-amber-50",
                  hc: "bg-amber-700",
                  levels: [
                    { level: "Salary range", range: "20–35% lower than Bengaluru equivalents" },
                    { level: "Cost of living", range: "30–45% lower — rent, food, transport are significantly cheaper" },
                    { level: "Net lifestyle", range: "Comparable or better for mid-level professionals with family commitments" },
                  ],
                },
              ].map((s) => (
                <div key={s.city} className={`rounded-2xl border overflow-hidden ${s.color}`}>
                  <div className={`${s.hc} text-white px-4 py-3 flex items-center justify-between`}>
                    <p className="font-bold text-[13px]">{s.city}</p>
                    <span className="text-[10px] text-white/70">{s.tag}</span>
                  </div>
                  <div className="p-4 space-y-2">
                    {s.levels.map((l) => (
                      <div key={l.level} className="flex gap-2 text-[13px]">
                        <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span><strong>{l.level}:</strong> {l.range}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* End CTA */}
            <div id="calculator-cta" className="scroll-mt-8">
              <CalculatorCTA variant="end" />
            </div>

            {/* ═══ SECTION 14 — FAQ ═══ */}
            <SectionHeading id="faq">Frequently Asked Questions</SectionHeading>

            <div className="space-y-3">
              {[
                {
                  q: "10 LPA in hand salary per month India 2026?",
                  a: "₹10 LPA (₹83,333/month gross) gives approximately ₹67,000–₹72,000/month in-hand under New Tax Regime after employee EPF (₹4,800), professional tax (₹200), and TDS. Under Old Regime with metro HRA + full 80C, in-hand rises to ₹71,000–₹76,000/month.",
                },
                {
                  q: "12 LPA in hand salary per month 2026?",
                  a: "₹12 LPA (₹1,00,000/month gross) gives approximately ₹85,500/month under New Regime. Under Old Regime with HRA (₹20,000+ rent) and ₹1.5L 80C, in-hand rises to ~₹89,000/month — a ₹42,000/year difference.",
                },
                {
                  q: "6 LPA in hand salary per month?",
                  a: "₹6 LPA (₹50,000/month gross) gives approximately ₹43,000–₹44,500/month in-hand under New Regime. Under Old Regime with HRA declared, approximately ₹45,000–₹46,500/month.",
                },
                {
                  q: "Is income up to ₹12 lakh tax free in 2026?",
                  a: "Yes, effectively. Under New Tax Regime, income up to ₹12 lakh attracts zero tax after the Section 87A rebate of ₹60,000. For salaried individuals, the ₹75,000 standard deduction pushes this ceiling to ₹12.75 lakh. This does not apply if income includes special-rate income (LTCG/STCG).",
                },
                {
                  q: "What is professional tax in India?",
                  a: "Professional tax is a state-level tax on employment income, capped at ₹2,500/year (₹200/month in most states). Maharashtra, Karnataka, Tamil Nadu, West Bengal, and several other states levy it. States like Delhi, Rajasthan, and Haryana do not. It's deducted from your salary before TDS.",
                },
                {
                  q: "Can I switch between old and new tax regime every year?",
                  a: "Salaried employees can switch between regimes every financial year at the time of filing their ITR. However, you must inform your employer at the start of the year for TDS purposes. If you have business income, switching is more restricted — you can move from Old to New only once.",
                },
                {
                  q: "What is the EPF deduction from salary?",
                  a: "Employee EPF contribution is 12% of your basic salary (capped at 12% of ₹15,000 = ₹1,800/month if your basic exceeds ₹15,000 and the company follows the wage ceiling). Many companies contribute on actual basic (no ceiling). This deduction is eligible for 80C tax benefit under Old Regime.",
                },
                {
                  q: "How much salary in India is equivalent to $1,000/month USD?",
                  a: "At ₹84/$ (May 2026), $1,000/month = ₹84,000/month = ₹10.08 LPA annual gross. This is mid-level professional territory in Bengaluru/Mumbai and above-average in Hyderabad/Pune. For foreign clients, $1,000/month for a skilled Indian professional is on the lower end — expect $1,500–$2,500/month for experienced engineers.",
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
                <p className="text-[11px] text-slate-400">Updated May 27, 2026</p>
              </div>
              <p className="text-[11px] text-slate-400 italic leading-relaxed max-w-sm text-right">
                Sources: Income Tax Dept. India · ClearTax FY 2026-27 · RBI · EPFO circular ·
                MIT Living Wage (India). For precise tax calculations consult a CA or{" "}
                <a href="https://incometax.gov.in" className="underline">incometax.gov.in</a>.
              </p>
            </div>
          </article>

          {/* ── SIDEBAR ── */}
          <aside className="w-full lg:w-[260px] flex-shrink-0 space-y-4 lg:sticky lg:top-6">

            {/* CTA Card */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <div className="p-5 text-white"
                style={{ background: "linear-gradient(135deg,#0f172a,#1d4ed8)" }}>
                <Calculator size={20} className="mb-2 text-blue-300" />
                <p className="font-extrabold text-base leading-tight mb-1.5">India Salary Calculator</p>
                <p className="text-blue-200 text-[12px] leading-relaxed">
                  CTC to in-hand in 10 seconds. Old vs new regime toggle. Shows ₹ and USD.
                  Updated for FY 2026-27.
                </p>
              </div>
              <Link href="/india-salary-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3.5
                           bg-white text-blue-700 font-bold text-[13px]
                           hover:bg-blue-50 transition-colors group border-t border-slate-100">
                Open Calculator
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Quick in-hand reference */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                Quick In-Hand Reference (New Regime)
              </p>
              <div className="space-y-2.5">
                {[
                  ["₹3 LPA",  "~₹22,500/mo"],
                  ["₹5 LPA",  "~₹37,000/mo"],
                  ["₹6 LPA",  "~₹44,500/mo"],
                  ["₹8 LPA",  "~₹56,500/mo"],
                  ["₹10 LPA", "~₹70,000/mo"],
                  ["₹12 LPA", "~₹85,500/mo"],
                  ["₹15 LPA", "~₹1,02,500/mo"],
                  ["₹20 LPA", "~₹1,29,000/mo"],
                  ["₹25 LPA", "~₹1,55,000/mo"],
                  ["₹30 LPA", "~₹1,78,000/mo"],
                  ["₹50 LPA", "~₹2,81,000/mo"],
                ].map(([ctc, inhand]) => (
                  <div key={ctc} className="flex items-center justify-between text-[12px]
                                            border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                    <span className="font-extrabold text-slate-800">{ctc}</span>
                    <span className="font-bold text-blue-700 tabular-nums">{inhand}</span>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-slate-400 mt-3">
                Maharashtra PT. Standard ded. ₹75K. Approx. — use calculator for exact.
              </p>
            </div>

            {/* Key numbers */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                FY 2026-27 Key Numbers
              </p>
              <div className="space-y-2.5">
                {[
                  { label: "Tax-free limit (New)", value: "₹12.75L" },
                  { label: "Standard deduction", value: "₹75,000" },
                  { label: "87A rebate (New)", value: "₹60,000" },
                  { label: "Employee EPF", value: "12% of basic" },
                  { label: "80C limit (Old)", value: "₹1,50,000" },
                  { label: "80CCD(1B) NPS", value: "₹50,000 extra" },
                  { label: "Professional tax", value: "₹2,500/yr max" },
                  { label: "USD/INR (May 2026)", value: "~₹84" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between text-[12px]
                                                border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-extrabold text-slate-900">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* New regime slabs quick ref */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">
                New Regime Slabs (FY 2026-27)
              </p>
              <div className="space-y-1.5">
                {NEW_REGIME_SLABS.map(([range, rate], i) => (
                  <div key={i} className="flex justify-between text-[11px]">
                    <span className="text-slate-500">{range}</span>
                    <span className={`font-bold ${
                      rate === "0% (Nil)" ? "text-emerald-600" :
                      rate === "30%" ? "text-rose-600" : "text-blue-700"
                    }`}>{rate}</span>
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
                  { label: "Hourly to Salary Guide 2026",    href: "/blog/hourly-to-salary-guide-2026" },
                  { label: "DoorDash Earnings Guide 2026",   href: "/blog/doordash-earnings-guide-2026" },
                  { label: "Gig Worker Tax Guide 2026",      href: "/blog/gig-worker-taxes-2026" },
                  { label: "Self-Employment Tax Guide 2026", href: "/blog/self-employment-tax-guide-2026" },
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
