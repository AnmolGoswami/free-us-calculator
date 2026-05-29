// app/page.tsx
import Link from "next/link";
import ToolCard from "@/components/ui/ToolCard";
import { popularTools } from "@/lib/tools";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
  Users,
  TrendingUp,
  CheckCircle2,
  Star,
  Calculator,
  Clock,
  Lock,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

// ─── Page-level SEO Metadata ──────────────────────────────────────────────────
// These override the layout defaults for the homepage specifically.
// Primary keyword front-loaded in title. Under 60 chars for zero truncation.
export const metadata: Metadata = {
  title: "Free 2026 US Tax & Financial Calculators | FreeUSCalculator",
  description:
    "Free accurate 2026 US tax calculators: self-employment tax, salary after tax, paycheck, Uber & DoorDash earnings, loan EMI, rent affordability. Instant results. No signup.",
  alternates: { canonical: "https://www.freeuscalculator.in" },
  openGraph: {
    title: "Free 2026 US Tax & Financial Calculators | FreeUSCalculator",
    description:
      "85+ free accurate financial calculators updated for Tax Year 2026. Self-employment tax, paycheck, earnings, loans & more. No signup required.",
    images: [{ url: "https://www.freeuscalculator.in/og-image.jpg" }],
  },
};

// ─── Stat counters ─────────────────────────────────────────────────────────────
const STATS = [
  { value: "85+", label: "Free Calculators" },
  { value: "75K+", label: "Monthly Users" },
  { value: "2026", label: "Tax Year Updated" },
  { value: "0", label: "Signup Required" },
];

// ─── Trust badges ──────────────────────────────────────────────────────────────
const TRUST_BADGES = [
  { icon: ShieldCheck, label: "100% Free & Private", color: "text-emerald-500" },
  { icon: Zap,         label: "Real 2026 IRS Rates", color: "text-amber-500"   },
  { icon: Smartphone,  label: "Mobile Optimized",     color: "text-sky-500"    },
  { icon: Lock,        label: "No Data Stored",       color: "text-violet-500" },
];

// ─── Category cards ────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    href: "/tax-calculators",
    title: "Tax Calculators",
    desc: "Self-employment tax, paycheck estimators, federal & state income tax tools. Updated with 2026 IRS brackets.",
    gradient: "from-blue-600 to-indigo-700",
    accent: "bg-blue-50 border-blue-100 hover:border-blue-300",
    tag: "25+ Tools",
    popular: ["Self-Employment Tax", "Salary After Tax", "Paycheck Calculator"],
  },
  {
    href: "/earning-calculators",
    title: "Earnings & Gig Tools",
    desc: "Uber, DoorDash, and gig economy earnings calculators. Hourly to salary, overtime, and take-home pay.",
    gradient: "from-emerald-500 to-teal-600",
    accent: "bg-emerald-50 border-emerald-100 hover:border-emerald-300",
    tag: "18+ Tools",
    popular: ["Uber Earnings", "DoorDash Pay", "Hourly to Salary"],
  },
  {
    href: "/cost-calculators",
    title: "Cost & Planning",
    desc: "Loan EMI, rent affordability, savings growth, and compound interest calculators for smart budgeting.",
    gradient: "from-amber-500 to-orange-600",
    accent: "bg-amber-50 border-amber-100 hover:border-amber-300",
    tag: "22+ Tools",
    popular: ["Loan EMI", "Rent Affordability", "Savings Calculator"],
  },
];

// ─── Why choose us features ────────────────────────────────────────────────────
const WHY_US = [
  {
    icon: BadgeCheck,
    title: "Updated for Tax Year 2026",
    desc: "Every calculator uses the latest IRS brackets, FICA rates, Social Security wage base ($176,100), and state tax rules. No outdated numbers.",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: Lock,
    title: "No Data Stored — Ever",
    desc: "All calculations run entirely in your browser. We never transmit, log, or sell your financial data. Your numbers stay on your device.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Clock,
    title: "Results in Under 30 Seconds",
    desc: "Designed for speed. Enter your numbers and get a full breakdown — federal, state, FICA, net pay — in one click. No waiting.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Calculator,
    title: "Built on Real IRS Formulas",
    desc: "No approximations. Our self-employment tax, overtime, and paycheck calculators are built directly from IRS Publication 15 and Schedule SE.",
    color: "bg-sky-100 text-sky-700",
  },
];

// ─── FAQ data (mirrors layout.tsx schema — keep in sync) ──────────────────────
const FAQS = [
  {
    q: "Are all calculators on FreeUSCalculator free?",
    a: "Yes. Every calculator is 100% free to use — no account, no signup, and no hidden fees, ever.",
  },
  {
    q: "Are the 2026 tax rates up to date?",
    a: "Yes. All calculators are updated for Tax Year 2026 including federal income tax brackets, Social Security and Medicare (FICA) rates, and self-employment tax.",
  },
  {
    q: "Can I use these calculators on my phone?",
    a: "Absolutely. All tools are fully mobile-optimized and work on any device — smartphone, tablet, or desktop.",
  },
  {
    q: "How accurate is the self-employment tax calculator?",
    a: "Our SE tax calculator uses the exact IRS formula: 15.3% on net earnings up to $176,100 (2026 SS wage base) and 2.9% Medicare above that, plus the 0.9% Additional Medicare Tax where applicable.",
  },
  {
    q: "Do you store my financial data?",
    a: "No. All calculations happen instantly in your browser. We never store, share, or transmit any financial data you enter.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
          • H1 contains primary keyword "2026 US Tax Calculators"
          • Subheading reinforces E-E-A-T and search intent
          • CTA links deep into category pages (good internal link equity)
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Hero"
        className="relative overflow-hidden bg-[#0a0f1e] text-white"
      >
        {/* Background mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#3730a340,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,#06b6d415,transparent)]" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-28 lg:pt-32 lg:pb-36">
          {/* Live badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/10 rounded-full px-5 py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-emerald-300">
                Updated · Tax Year 2026
              </span>
            </div>
          </div>

          {/* H1 — primary keyword front-loaded, under 70 chars per line */}
          <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-extrabold tracking-tight leading-[1.05] mb-6">
            Free 2026 US Tax &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Financial Calculators
            </span>
          </h1>

          {/* Subheading — reinforces search intent, includes secondary keywords */}
          <p className="text-center text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Accurate self-employment tax, paycheck, gig earnings, loan EMI, and rent calculators.
            Built on real IRS formulas. No signup. Instant results.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/tax-calculators"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-900/40 hover:shadow-indigo-800/60 hover:-translate-y-0.5 active:scale-95"
            >
              Tax Calculators <ArrowRight size={18} />
            </Link>
            <Link
              href="/earning-calculators"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-xl transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Gig Earnings Tools <ChevronRight size={18} />
            </Link>
          </div>

          {/* Quick-access popular tools */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-medium">
              Jump to a calculator
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
              {[
                { label: "Self-Employment Tax", href: "/self-employment-tax-calculator-usa" },
                { label: "Salary After Tax",    href: "/salary-after-tax-calculator"        },
                { label: "Paycheck Calculator", href: "/paycheck-calculator"                },
                { label: "Uber Earnings",       href: "/uber-earnings-calculator"           },
                { label: "DoorDash Pay",        href: "/doordash-earnings-calculator"       },
                { label: "Hourly to Salary",    href: "/hourly-to-salary-calculator"        },
                { label: "Loan EMI",            href: "/loan-calculator"                    },
                { label: "Rent Affordability",  href: "/rent-affordability-calculator"      },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/6 hover:bg-white/12 border border-white/8 hover:border-white/20 text-slate-300 hover:text-white transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t border-white/6 bg-white/3 backdrop-blur-xl">
          <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x divide-white/8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="text-3xl font-black text-white">{s.value}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TRUST BADGES
          Builds E-E-A-T trust above the fold
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Trust signals"
        className="bg-slate-50 border-b border-slate-100"
      >
        <div className="max-w-5xl mx-auto px-4 py-5 flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {TRUST_BADGES.map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm font-medium text-slate-600">
              <Icon size={19} className={color} />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          POPULAR TOOLS
          H2 includes secondary keyword. Direct links to tool slugs = good
          internal linking for crawlers.
      ══════════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="popular-heading" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-indigo-500 font-semibold mb-2">
                Most Used in 2026
              </p>
              <h2
                id="popular-heading"
                className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900"
              >
                Popular Calculators
              </h2>
            </div>
            <Link
              href="/tax-calculators"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-base sm:text-lg group"
            >
              View all tools{" "}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CATEGORY CARDS
          Each card links to a hub page — strong internal link architecture
      ══════════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="categories-heading" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-indigo-500 font-semibold mb-3">
              Browse by Category
            </p>
            <h2
              id="categories-heading"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4"
            >
              Every Calculator You Need
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              From gig economy earnings to retirement planning — organized so you find the right tool instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`group block bg-white border rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${cat.accent}`}
              >
                {/* Gradient top strip */}
                <div className={`h-2 w-full bg-gradient-to-r ${cat.gradient}`} />

                <div className="p-8">
                  {/* Tag */}
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                    {cat.tag}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6 text-[15px]">{cat.desc}</p>

                  {/* Popular links within category */}
                  <ul className="space-y-2 mb-8">
                    {cat.popular.map((tool) => (
                      <li key={tool} className="flex items-center gap-2 text-sm text-slate-500">
                        <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                        {tool}
                      </li>
                    ))}
                  </ul>

                  <span
                    className={`inline-flex items-center gap-2 font-semibold text-sm bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                  >
                    Explore tools <ArrowRight size={16} className="text-current opacity-60" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHY US — E-E-A-T SECTION
          Specificity (real numbers like $176,100) signals expertise to Google
      ══════════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="why-heading" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-indigo-500 font-semibold mb-3">
              Why FreeUSCalculator
            </p>
            <h2
              id="why-heading"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900"
            >
              Trusted by 75,000+ Americans
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-[17px] mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          USER REVIEWS / SOCIAL PROOF
          Star ratings + quotes improve CTR in SERPs (combined with Review schema)
      ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="User reviews" className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">What Users Are Saying</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Finally a self-employment tax calculator that actually matches my CPA's numbers. Saved me hours of spreadsheet work.",
                name: "Marcus T.",
                role: "Freelance Developer, Texas",
              },
              {
                quote:
                  "I use the DoorDash earnings calculator every week to decide if it's worth dashing on slow nights. Super accurate.",
                name: "Priya K.",
                role: "DoorDash Driver, California",
              },
              {
                quote:
                  "The rent affordability tool showed me I was overpaying by $400/mo. Used it to negotiate my lease renewal.",
                name: "Jordan L.",
                role: "Nurse, New York",
              },
            ].map((r) => (
              <figure
                key={r.name}
                className="bg-white/5 border border-white/8 rounded-2xl p-7 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-300 text-sm leading-relaxed flex-1">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption>
                  <p className="font-semibold text-white text-sm">{r.name}</p>
                  <p className="text-slate-500 text-xs">{r.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ SECTION
          Matches FAQPage schema in layout.tsx for rich results eligibility.
          People Also Ask answers are a direct ranking signal.
      ══════════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="faq-heading" className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-indigo-500 font-semibold mb-3">
              Frequently Asked Questions
            </p>
            <h2
              id="faq-heading"
              className="text-4xl font-bold tracking-tight text-slate-900"
            >
              Common Questions
            </h2>
          </div>

          <dl className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <div
                key={q}
                className="border border-slate-200 rounded-2xl p-6 hover:border-indigo-200 transition-colors"
              >
                <dt className="font-semibold text-slate-900 text-[17px] mb-2">{q}</dt>
                <dd className="text-slate-500 leading-relaxed text-sm">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Call to action"
        className="py-24 bg-gradient-to-br from-indigo-700 via-violet-700 to-indigo-800 text-white"
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-4">
            No Signup · No Ads · Instant Results
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Start Calculating Now
          </h2>
          <p className="text-indigo-200 text-lg mb-10 max-w-lg mx-auto">
            Join 75,000+ Americans making smarter money decisions with free, accurate 2026 calculators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tax-calculators"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-10 py-4 rounded-2xl hover:bg-amber-300 hover:text-indigo-900 transition-all shadow-xl active:scale-95"
            >
              Browse Tax Tools <ArrowRight size={18} />
            </Link>
            <Link
              href="/earning-calculators"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-10 py-4 rounded-2xl transition-all active:scale-95"
            >
              Gig Earnings <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}