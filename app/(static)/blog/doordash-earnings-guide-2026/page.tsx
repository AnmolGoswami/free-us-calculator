import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Clock, DollarSign, Fuel, TrendingUp,
  ShieldCheck, AlertTriangle, CheckCircle2, Calculator,
  Calendar, BookOpen, ChevronRight,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// Title optimized for informational intent ("how much", "guide", "tips")
// while tool page targets transactional intent ("calculator")
// Together they cover both SERP intent clusters for the same keywords
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "How Much Do DoorDash Drivers Make in 2026? (Complete Guide)",
  description:
    "Honest breakdown of DoorDash driver pay in 2026. Median gross $11.26/hr, real net $8–$15/hr after gas, the $0.725/mile IRS deduction, and 15.3% self-employment tax. Includes every deduction, tax deadline, and strategy top Dashers use.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/blog/doordash-earnings-guide-2026",
  },
  keywords: [
    "how much do doordash drivers make 2026",
    "doordash driver income after expenses",
    "doordash pay after taxes and gas",
    "doordash irs mileage deduction 2026",
    "doordash self employment tax guide",
    "doordash earnings guide",
    "is doordash worth it 2026",
    "doordash vs uber eats pay 2026",
    "doordash quarterly taxes 2026",
    "gig worker tax guide 2026",
  ],
  openGraph: {
    title: "How Much Do DoorDash Drivers Really Make in 2026?",
    description:
      "The honest guide: $11.26/hr median gross, $8–$15/hr real net. Every deduction, tax rule, and strategy explained with real Gridwise data.",
    url: "https://www.freeuscalculator.in/blog/doordash-earnings-guide-2026",
    type: "article",
    publishedTime: "2026-01-15T00:00:00Z",
    modifiedTime: "2026-05-01T00:00:00Z",
    authors: ["Anmol Giri"],
    tags: ["DoorDash", "Gig Economy", "Taxes", "Earnings", "2026"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Do DoorDash Drivers Make in 2026? Real Numbers",
    description:
      "Median gross $11.26/hr, real take-home $8–$15/hr. Full breakdown of gas, IRS mileage deduction, SE tax, and how top Dashers hit $16–$22/hr.",
  },
  robots: { index: true, follow: true },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD — Article + FAQPage schema (different from tool page's SoftwareApp)
// Two schema types from two different URLs = stronger topical authority signal
// ─────────────────────────────────────────────────────────────────────────────
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
          name: "How Much Do DoorDash Drivers Make in 2026?",
          item: "https://www.freeuscalculator.in/blog/doordash-earnings-guide-2026",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How Much Do DoorDash Drivers Make in 2026? Complete Income Guide",
      description:
        "Real DoorDash driver earnings for 2026 based on Gridwise data from 115,771 Dashers. Covers gross pay, net pay after gas and taxes, IRS mileage deduction, self-employment tax, and strategies top earners use.",
      url: "https://www.freeuscalculator.in/blog/doordash-earnings-guide-2026",
      datePublished: "2026-01-15",
      dateModified: "2026-05-01",
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
      },
      mainEntityOfPage: "https://www.freeuscalculator.in/blog/doordash-earnings-guide-2026",
      // Explicitly links to the tool page — signals they are related content
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
            text: "The median DoorDash driver earns $11.26 per hour gross before expenses, based on Gridwise data tracking 115,771 active Dashers through 2025. After fuel, maintenance, and taxes, most drivers net $8 to $15 per hour in actual take-home pay. Strategic drivers using hybrids, filtering orders above $2/mile, and working peak hours consistently net $16 to $22 per hour.",
          },
        },
        {
          "@type": "Question",
          name: "Is DoorDash worth it in 2026 after gas and taxes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes for most drivers, with realistic expectations. Working 15 to 25 peak hours per week reliably produces $600 to $1,200 per month net. Full-time Dashers (35 to 45 hours/week) can net $2,200 to $2,900 per month using multi-apping and order filtering. The key is knowing your real hourly rate — use a DoorDash earnings calculator to find your exact number after all expenses.",
          },
        },
        {
          "@type": "Question",
          name: "What is the IRS mileage deduction for DoorDash in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The IRS standard mileage rate for 2026 is $0.725 per mile (IRS Rev. Proc. 2025-18). On 15,000 annual business miles this equals a $10,875 tax deduction — roughly $2,700 to $3,000 in real tax savings. Deductible miles include driving to the first pickup after accepting an order, restaurant to customer, and miles between orders while logged in.",
          },
        },
        {
          "@type": "Question",
          name: "How much should DoorDash drivers set aside for taxes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Set aside 25 to 28% of every DoorDash payout for taxes. This covers the 15.3% self-employment tax (Social Security and Medicare) plus estimated federal income tax. Transfer this amount to a separate savings account on the same day each payout arrives. Quarterly estimated payments are due April 15, June 16, September 15, and January 15.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// TABLE OF CONTENTS
// ─────────────────────────────────────────────────────────────────────────────
const TOC = [
  { id: "real-pay",        label: "What DoorDash drivers actually make in 2026" },
  { id: "pay-structure",   label: "How DoorDash pay is structured" },
  { id: "expenses",        label: "Where the money goes before it reaches you" },
  { id: "mileage",         label: "The IRS mileage deduction most Dashers miss" },
  { id: "taxes",           label: "Self-employment tax: the number that surprises everyone" },
  { id: "deductions",      label: "Every deduction DoorDash drivers can claim" },
  { id: "strategies",      label: "How top Dashers earn more per hour" },
  { id: "vs-uber",         label: "DoorDash vs. Uber Eats in 2026" },
  { id: "worth-it",        label: "Is DoorDash worth it? Honest answer for four types" },
  { id: "calculator-cta",  label: "Find your exact take-home number" },
];

// ─────────────────────────────────────────────────────────────────────────────
// REUSABLE SECTION ANCHOR
// ─────────────────────────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-black tracking-tight text-slate-900
                 border-l-4 border-blue-600 pl-4 mt-14 mb-5 scroll-mt-6"
    >
      {children}
    </h2>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CALCULATOR CTA BANNER — placed inline mid-article and at the end
// This is the key monetization / conversion element
// ─────────────────────────────────────────────────────────────────────────────
function CalculatorCTA({ variant = "mid" }: { variant?: "mid" | "end" }) {
  const isEnd = variant === "end";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl my-10 ${
        isEnd ? "p-10 text-center" : "p-7"
      }`}
      style={{
        background: isEnd
          ? "linear-gradient(135deg,#1d4ed8 0%,#7c3aed 100%)"
          : "linear-gradient(135deg,#060d1f 0%,#0c1e46 100%)",
      }}
    >
      {/* decorative glow */}
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full
                      bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center
                      justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Calculator size={16} className="text-blue-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">
              Free Tool
            </span>
          </div>
          <p className="text-white font-black text-lg leading-snug mb-1">
            {isEnd
              ? "Know your exact take-home number"
              : "Don't guess — calculate your real net pay"}
          </p>
          <p className="text-slate-400 text-[13px] leading-relaxed max-w-sm">
            {isEnd
              ? "Use our free DoorDash earnings calculator to see your real hourly rate after gas, IRS mileage deduction, and self-employment tax."
              : "Enter your actual hours, orders, and miles. Get your true net hourly rate, quarterly tax reserve, and vehicle cost breakdown instantly."}
          </p>
        </div>
        <Link
          href="/doordash-earnings-calculator"
          className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-blue-500 hover:bg-blue-400 text-white font-black text-[14px]
                     transition-colors whitespace-nowrap group"
        >
          Use the Calculator
          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function DoorDashEarningsGuidePage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 pt-12 md:pt-18 pb-0">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
          <ChevronRight size={11} />
          <Link href="/blog" className="hover:text-slate-700 transition-colors">Blog</Link>
          <ChevronRight size={11} />
          <span className="text-slate-600">DoorDash Earnings Guide 2026</span>
        </nav>

        {/* Category tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        bg-blue-50 border border-blue-100 text-blue-700
                        text-[10px] font-black uppercase tracking-widest mb-5">
          <BookOpen size={11} />
          Gig Economy · Tax Guide · 2026
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]
                       text-slate-900 mb-6">
          How Much Do DoorDash Drivers{" "}
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg,#1d4ed8,#7c3aed)" }}>
            Really Make
          </span>{" "}
          in 2026?
        </h1>

        <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-7 max-w-2xl">
          The median gross is <strong className="text-slate-900">$11.26 per hour</strong> —
          not the $18–$25 you see in DoorDash marketing. After gas, vehicle wear, and taxes,
          most Dashers net{" "}
          <strong className="text-slate-900">$8–$15 per hour</strong> in real spendable income.
          Here is every number, every deduction, and exactly how top earners push that to
          $16–$22/hr.
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 pb-7
                        border-b border-slate-100 text-[12px] text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center
                            text-blue-300 font-black text-[10px]"
              style={{ background: "linear-gradient(135deg,#060d1f,#0c1e46)" }}>
              AG
            </div>
            <span>
              <span className="text-slate-700 font-semibold">Anmol Giri</span>
              {" "}· Gig Economy Analyst
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            Updated May 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            12 min read
          </span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            IRS Rev. Proc. 2025-18 · Gridwise 2026 data
          </span>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── ARTICLE ─────────────────────────────────────────────────── */}
          <article className="flex-1 min-w-0 text-slate-700 text-[15px] leading-relaxed">

            {/* Table of contents */}
            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6 mb-10">
              <h2 className="text-[11px] font-black uppercase tracking-widest
                              text-slate-500 mb-4">
                In This Guide
              </h2>
              <ol className="space-y-2.5">
                {TOC.map((item, i) => (
                  <li key={item.id} className="flex items-center gap-2.5">
                    <span className="text-[10px] text-blue-500 font-black
                                     w-5 h-5 rounded-full bg-blue-50 flex items-center
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
            <SectionHeading id="real-pay">
              What DoorDash drivers actually make in 2026
            </SectionHeading>

            <p>
              Here is a number DoorDash does not put in its commercials: <strong>$11.26 per
              hour</strong>. That is the real median gross pay for a US Dasher, based on
              Gridwise tracking 115,771 active drivers through 2025. Not the $18 to $25 the
              platform uses in its marketing. Eleven dollars and twenty-six cents — and that
              is <em>before</em> gas, vehicle wear, and the IRS takes their share.
            </p>

            <p className="mt-4">
              By the time those three costs finish their work, the average suburban Dasher
              takes home somewhere between $7 and $12 per hour in actual spendable income.
              In slower markets with long delivery distances and no order filtering, it can
              be worse than that.
            </p>

            {/* Key stat callout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
              {[
                { n: "$11.26/hr", label: "Median gross", note: "before expenses" },
                { n: "$8–$15/hr", label: "Realistic net", note: "after gas + taxes" },
                { n: "$0.725/mi", label: "IRS deduction", note: "2026 rate" },
                { n: "68%",       label: "US market share", note: "DoorDash 2026" },
              ].map((s) => (
                <div key={s.n}
                  className="rounded-xl bg-slate-50 border border-slate-100
                             p-4 text-center">
                  <p className="text-xl font-black text-blue-700 tabular-nums
                                 leading-none mb-1">{s.n}</p>
                  <p className="text-[11px] font-semibold text-slate-700 leading-snug">
                    {s.label}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{s.note}</p>
                </div>
              ))}
            </div>

            <p>
              That is not meant to talk you out of dashing. Drivers genuinely making good
              money in 2026 exist in every market. But they share one trait: they know their
              exact numbers. They track every mile from day one. They understand their real
              cost per delivery. And they transfer their IRS reserve to a separate account
              every single week before spending anything.
            </p>

            {/* ─── SECTION 2 ─── */}
            <SectionHeading id="pay-structure">
              How DoorDash pay is structured
            </SectionHeading>

            <p>
              Every completed order pays you from three sources. Understanding each one
              matters because they behave completely differently depending on when and where
              you are dashing.
            </p>

            <p className="mt-4">
              <strong>Base pay</strong> is the guaranteed floor DoorDash sets for each order.
              It runs from $2 to $10 or more, depending on estimated distance, the time the
              delivery will take, and something the platform calls "desirability" — essentially
              how many other drivers have already passed on the offer. An order that sits
              unclaimed sees its base pay increase automatically over time.
            </p>

            <p className="mt-4">
              <strong>Tips</strong> are where most real income comes from. The Gridwise median
              tip is $3.66 per delivery — about 49% of total order pay on an average run.
              Tips are also the most unpredictable part of your earnings. Experienced drivers
              treat an order showing no tip as a strong signal to decline. The customer has
              already indicated what they plan to pay, and completing the delivery will not
              change that.
            </p>

            <p className="mt-4">
              <strong>Peak Pay and promotions</strong> stack on top of base when demand in a
              zone exceeds driver supply — typically $1 to $4 extra during genuine rush
              windows. One fact that surprises many first-year Dashers: DoorDash does not take
              a commission cut from your earnings the way Uber deducts from ride fares. You
              receive 100% of base pay and 100% of tips.
            </p>

            {/* ─── SECTION 3 ─── */}
            <SectionHeading id="expenses">
              Where the money goes before it reaches you
            </SectionHeading>

            <p>
              A driver working 30 hours per week might gross around $568 at the national
              average rate. Here is what it costs to earn it.
            </p>

            {/* Expense breakdown table */}
            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-6">
              <table className="w-full text-[13px] text-slate-700 bg-white min-w-[480px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Cost</th>
                    <th className="px-4 py-3 text-left font-black">Weekly (400 mi)</th>
                    <th className="px-4 py-3 text-left font-black">Annual</th>
                    <th className="px-4 py-3 text-left font-black">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Fuel (gas sedan 28 MPG)", "$43–58", "$2,240–3,020", "$3.35/gal avg"],
                    ["Maintenance", "$14–24", "$730–1,240", "Oil, tires, brakes"],
                    ["Depreciation", "$48–87", "$2,500–4,500", "Hidden — hits on sale"],
                    ["Insurance rider", "$10–30/mo", "$120–360", "Required for coverage"],
                  ].map(([cost, wk, yr, note], i) => (
                    <tr key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-3 font-bold text-slate-800">{cost}</td>
                      <td className="px-4 py-3 text-rose-600 font-semibold">{wk}</td>
                      <td className="px-4 py-3 text-slate-600">{yr}</td>
                      <td className="px-4 py-3 text-slate-400 text-[11px]">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl border border-amber-100 bg-amber-50
                            p-5 my-6 flex gap-3">
              <AlertTriangle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-amber-900 text-[13px] mb-1">
                  Depreciation is the cost Dashers forget
                </p>
                <p className="text-amber-800 text-[12px] leading-relaxed">
                  Vehicle depreciation never appears in your DoorDash app. Every 1,000
                  miles costs $150–$200 in resale value. At 20,000 annual miles, that
                  is $3,000–$4,000 quietly draining your net worth — until you try to
                  sell. The 2026 IRS rate of{" "}
                  <strong>$0.725/mile is designed to offset exactly this.</strong>
                </p>
              </div>
            </div>

            {/* MID-ARTICLE CTA — this is where conversions happen */}
            <CalculatorCTA variant="mid" />

            {/* ─── SECTION 4 ─── */}
            <SectionHeading id="mileage">
              The IRS mileage deduction most Dashers miss
            </SectionHeading>

            <p>
              The IRS standard mileage rate for 2026 is <strong>$0.725 per mile</strong>,
              confirmed in IRS Rev. Proc. 2025-18. This single deduction covers fuel, oil
              changes, tire wear, insurance, and vehicle depreciation — all bundled into one
              number you claim on Schedule C at tax time.
            </p>

            <div className="not-prose grid grid-cols-3 gap-3 my-6">
              {[
                { mi: "10,000 mi", ded: "$7,250", save: "~$2,000 saved" },
                { mi: "15,000 mi", ded: "$10,875", save: "~$3,000 saved" },
                { mi: "20,000 mi", ded: "$14,500", save: "~$4,000 saved" },
              ].map((r) => (
                <div key={r.mi}
                  className="rounded-xl bg-emerald-50 border border-emerald-100
                             p-4 text-center">
                  <p className="text-[11px] text-emerald-700 font-bold mb-1">{r.mi}</p>
                  <p className="text-lg font-black text-emerald-800 leading-none">{r.ded}</p>
                  <p className="text-[10px] text-emerald-600 mt-1">{r.save}</p>
                </div>
              ))}
            </div>

            <p>
              The DoorDash app's own mileage summary only tracks active delivery legs and
              consistently underestimates total deductible miles by 25 to 40%. Use{" "}
              <strong>Stride</strong> (free) or <strong>Everlance</strong> ($8/month). Start
              it when you leave home for your first dash.
            </p>

            <h3 className="text-lg font-black text-slate-900 mt-8 mb-3">
              Which miles are actually deductible?
            </h3>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                <p className="font-black text-emerald-800 text-[12px] mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  Deductible
                </p>
                <ul className="space-y-1.5 text-[12px] text-emerald-800">
                  {[
                    "Miles from your location to first pickup (after accepting)",
                    "Restaurant to customer",
                    "Between orders while logged in",
                    "Business errands (mechanic, car wash)",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-emerald-500 flex-shrink-0">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-rose-50 border border-rose-100 p-4">
                <p className="font-black text-rose-800 text-[12px] mb-2.5 flex items-center gap-1.5">
                  <AlertTriangle size={14} />
                  Not deductible
                </p>
                <ul className="space-y-1.5 text-[12px] text-rose-800">
                  {[
                    "Drive from home before accepting any order",
                    "Miles after logging off for the day",
                    "Personal trips mixed into your shift",
                    "Commute to a staging area before dashing",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-rose-400 flex-shrink-0">✗</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ─── SECTION 5 ─── */}
            <SectionHeading id="taxes">
              Self-employment tax: the number that surprises everyone
            </SectionHeading>

            <p>
              When you work a regular job, your employer pays half your Social Security
              and Medicare taxes. As an independent contractor, you pay both halves yourself.
              That is the <strong>15.3% self-employment tax</strong> — and it applies before
              federal income tax stacks on top of it.
            </p>

            <h3 className="text-lg font-black text-slate-900 mt-8 mb-3">
              Step-by-step calculation on $20,000 net profit
            </h3>

            <div className="not-prose rounded-2xl overflow-hidden border
                            border-slate-200 my-5">
              {[
                ["Net profit after expenses", "$20,000", ""],
                ["× 92.35% (SE tax base)", "$18,470", "IRS formula"],
                ["× 15.3% (SE tax rate)", "$2,826", "Your SE tax owed"],
                ["÷ 2 deductible half", "−$1,413", "Reduces taxable income"],
                ["After standard deduction ($15,000)", "$3,587", "Taxable income"],
                ["Federal income tax (10% bracket)", "$359", ""],
                ["Total tax bill", "~$3,185", "≈16% of net profit"],
              ].map(([label, value, note], i) => (
                <div key={i}
                  className={`flex items-center justify-between px-5 py-3
                    text-[13px] border-b border-slate-100 last:border-0
                    ${i === 6 ? "bg-blue-50 font-black" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                  <span className="text-slate-700">{label}</span>
                  <div className="text-right">
                    <span className={`font-bold tabular-nums ${
                      i === 6 ? "text-blue-700" : "text-slate-900"
                    }`}>{value}</span>
                    {note && (
                      <span className="ml-3 text-[10px] text-slate-400">{note}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="not-prose rounded-2xl border border-blue-100 bg-blue-50
                            p-5 my-6">
              <p className="font-black text-blue-900 text-[13px] mb-1 flex items-center gap-2">
                <ShieldCheck size={15} className="text-blue-600" />
                New for 2026: Qualified Tips Deduction
              </p>
              <p className="text-blue-800 text-[12px] leading-relaxed">
                Delivery workers can deduct up to <strong>$25,000 in qualifying tip
                income</strong> from federal taxable income (introduced for tax year 2025,
                confirmed through 2028). A driver earning $8,000 in tips saves roughly
                $2,400 in taxes at a 30% combined rate. Most tax guides have not caught up
                to this yet — make sure yours has.
              </p>
            </div>

            <h3 className="text-lg font-black text-slate-900 mt-8 mb-3">
              2026 quarterly tax deadlines
            </h3>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-5">
              <table className="w-full text-[13px] min-w-[380px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Quarter</th>
                    <th className="px-4 py-3 text-left font-black">Income Period</th>
                    <th className="px-4 py-3 text-left font-black">Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Q1 2026", "January – March", "April 15, 2026"],
                    ["Q2 2026", "April – May",     "June 16, 2026"],
                    ["Q3 2026", "June – August",   "September 15, 2026"],
                    ["Q4 2026", "September – December", "January 15, 2027"],
                  ].map(([q, period, due], i) => (
                    <tr key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-3 font-bold text-slate-800">{q}</td>
                      <td className="px-4 py-3 text-slate-600">{period}</td>
                      <td className="px-4 py-3 font-black text-blue-700">{due}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ─── SECTION 6 ─── */}
            <SectionHeading id="deductions">
              Every deduction DoorDash drivers can claim in 2026
            </SectionHeading>

            <p>
              Beyond mileage, every item below is a legitimate Schedule C deduction.
              Most drivers leave $1,500 to $4,000 in unclaimed deductions every year
              by not tracking these.
            </p>

            <ul className="mt-5 space-y-2.5">
              {[
                "Monthly phone plan at your business-use percentage (typically 75–90% for active Dashers)",
                "The phone itself, depreciated at that same business-use percentage",
                "Insulated delivery bags — 100% deductible",
                "Phone mount and car charging cables — 100% deductible",
                "Parking fees and tolls during deliveries (keep timestamped screenshots)",
                "Mileage tracking and accounting app subscriptions (Stride, Everlance, QuickBooks)",
                "Health insurance premiums if you're self-employed and paying out of pocket",
                "Qualified Tips Deduction — up to $25,000 in eligible tip income",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-[14px]">
                  <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* ─── SECTION 7 ─── */}
            <SectionHeading id="strategies">
              How top Dashers earn more per hour
            </SectionHeading>

            <p>
              The difference between netting $9 per hour and $17 per hour is not market
              or luck. It is three operating decisions applied without exception.
            </p>

            <div className="not-prose space-y-4 my-7">
              {[
                {
                  icon: <DollarSign size={18} />,
                  title: "The $2/mile rule",
                  color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
                  body: "Decline any order paying less than $2 for every mile driven. Applied consistently, this single filter adds $3–$6/hr net versus accepting everything. Top earners use $2.50/mile as their bar. DoorDash does not deactivate drivers for low acceptance rates as of 2026.",
                },
                {
                  icon: <TrendingUp size={18} />,
                  title: "Multi-apping boosts income 20–40%",
                  color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
                  body: "Running DoorDash alongside Uber Eats simultaneously fills dead time between orders. A 2024 Gridwise study found multi-apping drivers earned 31% more per hour than single-platform drivers. More than 65% of full-time gig workers now use two or more apps simultaneously.",
                },
                {
                  icon: <Clock size={18} />,
                  title: "Peak hours are non-negotiable",
                  color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100",
                  body: "Work 11 AM–2 PM and 5–9:30 PM daily. Sunday 6–8 PM averages $18.28/hr gross — the single best window nationally. A driver working 25 peak hours often nets more than one working 40 off-peak hours, while also logging fewer miles.",
                },
                {
                  icon: <Fuel size={18} />,
                  title: "Switch to hybrid — save $1,200/year",
                  color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100",
                  body: "A gas sedan at 25 MPG costs $42–55/week in fuel. A hybrid at 50 MPG cuts that to $22–28/week — $1,200–$1,500/year in extra take-home. The highest-ROI vehicle decision available to any Dasher.",
                },
              ].map((tip) => (
                <div key={tip.title}
                  className={`rounded-2xl border ${tip.border} p-5 flex gap-4`}>
                  <div className={`${tip.bg} ${tip.color} w-10 h-10 rounded-xl
                                   flex items-center justify-center flex-shrink-0`}>
                    {tip.icon}
                  </div>
                  <div>
                    <p className={`font-black text-[13px] mb-1 ${tip.color}`}>{tip.title}</p>
                    <p className="text-slate-600 text-[13px] leading-relaxed">{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── SECTION 8 ─── */}
            <SectionHeading id="vs-uber">
              DoorDash vs. Uber Eats in 2026
            </SectionHeading>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-6">
              <table className="w-full text-[13px] min-w-[400px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[10px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Metric</th>
                    <th className="px-4 py-3 text-left font-black">DoorDash</th>
                    <th className="px-4 py-3 text-left font-black">Uber Eats</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Hourly gross",     "$11.26/hr", "$24.68/hr urban"],
                    ["Market share",     "68% US",    "23% US"],
                    ["Tip visibility",   "Shown upfront", "Hidden 1hr"],
                    ["Best market",      "Suburban / mid-tier", "Dense urban"],
                    ["Order volume",     "Very high", "High in cities"],
                  ].map(([label, dd, ue], i) => (
                    <tr key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-3 font-semibold text-slate-600">{label}</td>
                      <td className="px-4 py-3 font-black text-blue-700">{dd}</td>
                      <td className="px-4 py-3 text-slate-500">{ue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              The practical answer for most drivers: anchor on DoorDash, add Uber Eats as
              a secondary, and run both during peak windows. The combination adds $2 to $5
              per hour net without additional hours worked.
            </p>

            {/* ─── SECTION 9 ─── */}
            <SectionHeading id="worth-it">
              Is DoorDash worth it? Honest answer for four types of drivers
            </SectionHeading>

            <div className="not-prose space-y-4 my-6">
              {[
                {
                  title: "Side income ($600–$1,200/month)",
                  verdict: "Clearly yes",
                  verdictColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
                  body: "Working 15–25 peak hours per week reliably delivers this in most US markets. The flexibility is genuine. Tax management is simple with a free tracking app and a consistent 26% set-aside from every payment.",
                },
                {
                  title: "Temporary full-time income replacement",
                  verdict: "Workable",
                  verdictColor: "text-blue-700 bg-blue-50 border-blue-100",
                  body: "You need 35–45 hours per week, should multi-app from the start, and must build the tax habit from week one. In a decent market, $2,200–$2,900 per month net is achievable. Treat it as a real business from day one.",
                },
                {
                  title: "Long-term full-time career",
                  verdict: "Possible with limits",
                  verdictColor: "text-amber-700 bg-amber-50 border-amber-100",
                  body: "The ceiling for a strategic driver in a strong market sits around $3,000–$3,500 per month net. Zero employer benefits, accelerating vehicle depreciation, and income subject to algorithm changes outside your control.",
                },
                {
                  title: "Outside the US",
                  verdict: "Yes, adjust the rate",
                  verdictColor: "text-violet-700 bg-violet-50 border-violet-100",
                  body: "The logic applies globally. Use your local rate: HMRC 45p/mi (UK), CRA 70¢/km (Canada), ATO 88¢/km (Australia). Enter that in the calculator's cost-per-mile field.",
                },
              ].map((s) => (
                <div key={s.title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <p className="font-black text-slate-900 text-[14px]">{s.title}</p>
                    <span className={`px-2.5 py-0.5 rounded-full border text-[10px]
                                      font-black uppercase tracking-wide ${s.verdictColor}`}>
                      {s.verdict}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[13px] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            {/* ─── FINAL CTA ─── */}
            <div id="calculator-cta" className="scroll-mt-6">
              <CalculatorCTA variant="end" />
            </div>

            {/* Author */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col
                            sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center
                                text-blue-400 font-black text-[11px]"
                  style={{ background: "linear-gradient(135deg,#060d1f,#0c1e46)" }}>
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
                Sources: Gridwise 2026 · IRS Rev. Proc. 2025-18 · IRS Pub. 463
              </p>
            </div>

          </article>

          {/* ── STICKY SIDEBAR ──────────────────────────────────────────── */}
          <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-5 lg:sticky lg:top-6">

            {/* Primary CTA card */}
            <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-sm">
              <div className="px-5 py-4 text-white"
                style={{ background: "linear-gradient(135deg,#1d4ed8,#7c3aed)" }}>
                <Calculator size={20} className="mb-2 text-blue-200" />
                <p className="font-black text-[15px] leading-snug mb-1">
                  Free Earnings Calculator
                </p>
                <p className="text-blue-200 text-[12px] leading-relaxed">
                  See your real net hourly rate after gas, IRS mileage deduction,
                  and SE tax — instantly.
                </p>
              </div>
              <Link
                href="/doordash-earnings-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3.5
                           bg-white border-t border-blue-100
                           text-blue-700 font-black text-[13px]
                           hover:bg-blue-50 transition-colors group"
              >
                Open Calculator
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Table of contents — desktop sticky */}
            <div className="hidden lg:block rounded-2xl border border-slate-100
                            bg-slate-50 p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-3">
                Jump to section
              </p>
              <ol className="space-y-2">
                {TOC.slice(0, 8).map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}
                      className="text-[12px] text-blue-600 hover:underline
                                 flex items-center gap-2">
                      <span className="text-[9px] text-slate-400 font-bold w-4">
                        {i + 1}.
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Quick stats */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">
                2026 Key Numbers
              </p>
              <div className="space-y-3">
                {[
                  { label: "IRS mileage rate", value: "$0.725/mi" },
                  { label: "SE tax rate", value: "15.3%" },
                  { label: "Median gross/hr", value: "$11.26" },
                  { label: "Tax set-aside", value: "25–28%" },
                  { label: "Tips % of pay", value: "~49%" },
                ].map((r) => (
                  <div key={r.label}
                    className="flex items-center justify-between
                               text-[12px] border-b border-slate-50 pb-2 last:border-0">
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-black text-slate-900">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}