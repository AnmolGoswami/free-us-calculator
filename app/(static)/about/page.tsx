// app/about/page.tsx
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ShieldCheck, Zap, Users,
  TrendingUp, Calendar, Globe, Calculator, Lock,
  Heart, Star, ChevronRight, Mail, Target, Award,
} from "lucide-react";
import type { Metadata } from "next";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About FreeUSCalculator – Free 2026 US Tax & Financial Tools for Every American",
  description:
    "Learn why 75,000+ Americans trust FreeUSCalculator. We provide 85+ free, accurate 2026 tax calculators — self-employment, paycheck, gig earnings, loan EMI, and rent. No signup. No ads in tools. 100% private.",
  keywords: [
    "about freeuscalculator",
    "free financial calculators 2026",
    "best free tax calculator usa",
    "gig economy tools 2026",
    "accurate 2026 tax calculator",
    "why use freeuscalculator",
    "free emi calculator usa",
    "self employment tax calculator",
  ],
  alternates: { canonical: "https://www.freeuscalculator.in/about" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About FreeUSCalculator – Trusted by 75,000+ Americans",
    description:
      "85+ free accurate 2026 financial calculators. No signup. No data collected. Updated for Tax Year 2026.",
    url: "https://www.freeuscalculator.in/about",
    type: "website",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "About FreeUSCalculator",
      url: "https://www.freeuscalculator.in/about",
      description:
        "FreeUSCalculator provides 85+ free, accurate financial calculators updated for Tax Year 2026. Trusted by over 75,000 Americans monthly.",
      dateModified: "2026-05-28",
      publisher: {
        "@type": "Organization",
        name: "FreeUSCalculator",
        url: "https://www.freeuscalculator.in",
        logo: "https://www.freeuscalculator.in/logo.png",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are FreeUSCalculator tools really 100% free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every calculator is completely free — no premium features, no paywalls, no forced signups. Ever.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate are the 2026 tax calculators?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We use official IRS formulas, current 2026 tax brackets, the $176,100 Social Security wage base, Medicare rates, and state-specific rules. All tools are regularly reviewed and updated.",
          },
        },
        {
          "@type": "Question",
          name: "Do you store or sell user data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Never. All calculations run in your browser. No financial data is transmitted to our servers, stored, or sold.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use these calculators for official tax filing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our tools are for estimation and planning only. For official tax filings, consult a CPA or use IRS-approved software.",
          },
        },
      ],
    },
  ],
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "75,000+", label: "Monthly Users",        icon: Users,       color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
  { value: "85+",     label: "Free Calculators",     icon: Calculator,  color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  { value: "2026",    label: "Tax Year Updated",     icon: Calendar,    color: "text-amber-600 bg-amber-50 border-amber-100" },
  { value: "50",      label: "US States Covered",    icon: Globe,       color: "text-violet-600 bg-violet-50 border-violet-100" },
];

const VALUES = [
  {
    icon: Lock,
    color: "bg-indigo-100 text-indigo-600",
    title: "Privacy First",
    desc: "All calculations happen in your browser. No data ever reaches our servers. We don't ask for your name, email, or anything else.",
  },
  {
    icon: Zap,
    color: "bg-amber-100 text-amber-600",
    title: "Always Accurate",
    desc: "We use official IRS formulas, the 2026 tax brackets, $176,100 SS wage base, and state-specific rules. No guesswork.",
  },
  {
    icon: Heart,
    color: "bg-rose-100 text-rose-600",
    title: "Genuinely Free",
    desc: "No paywalls. No forced signups. No premium tiers. Every tool — all 85+ of them — is 100% free for every American.",
  },
  {
    icon: Target,
    color: "bg-emerald-100 text-emerald-600",
    title: "Built for Real Life",
    desc: "From DoorDash drivers calculating hourly take-home to families planning mortgages — our tools solve real problems.",
  },
  {
    icon: TrendingUp,
    color: "bg-violet-100 text-violet-600",
    title: "Regularly Updated",
    desc: "Tax law changes every year. We update every calculator when the IRS releases new brackets, limits, and rules.",
  },
  {
    icon: Globe,
    color: "bg-sky-100 text-sky-600",
    title: "For All 50 States",
    desc: "Federal + state calculations across all 50 states. Special support for CA, NY, TX, FL, and IL with unique local rules.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Updated the Day IRS Changes Rates",
    body: "Most free calculators online still use 2023 or 2024 rates. We update every tool the moment IRS publishes new brackets, wage bases, and standard deductions. When you use our self-employment tax calculator today, you're getting the exact 15.3% rate on the correct 2026 SS wage base of $176,100 — not an estimate from two years ago.",
    tag: "Accuracy",
    tagColor: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "No Data, No Tracking, No Compromise",
    body: "We made a deliberate architectural decision: every calculator runs entirely in JavaScript on your device. When you enter your salary, it never leaves your browser tab. We don't know what you calculated, and we don't want to. This isn't a policy — it's how the code is written.",
    tag: "Privacy",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Built Specifically for Gig Workers",
    body: "The US gig economy now includes 59 million Americans — but most financial tools were built for W-2 employees. Our Uber and DoorDash earnings calculators account for platform fees, mileage deductions, self-employment tax on gig income, and realistic expense ratios. Real numbers, not optimistic estimates.",
    tag: "Gig Economy",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    title: "Readable Results, Not Just Numbers",
    body: "A paycheck calculator that shows '$3,847' means nothing without context. Our tools show the full breakdown: federal tax, state tax, Social Security, Medicare, net take-home, and what each line means. We write for humans, not accountants.",
    tag: "UX",
    tagColor: "bg-violet-100 text-violet-700",
  },
];

const TOOLS_FEATURED = [
  { label: "Self-Employment Tax",  href: "/self-employment-tax-calculator-usa", tag: "Most used" },
  { label: "Salary After Tax",     href: "/salary-after-tax-calculator",        tag: "Popular"   },
  { label: "Paycheck Calculator",  href: "/paycheck-calculator",                tag: "Popular"   },
  { label: "Uber Earnings",        href: "/uber-earnings-calculator",           tag: "Gig"       },
  { label: "DoorDash Pay",         href: "/doordash-earnings-calculator",       tag: "Gig"       },
  { label: "Hourly to Salary",     href: "/hourly-to-salary-calculator",        tag: "Earning"   },
  { label: "Loan EMI",             href: "/loan-calculator",                    tag: "Cost"      },
  { label: "Rent Affordability",   href: "/rent-affordability-calculator",      tag: "Cost"      },
];

const FAQS = [
  {
    q: "Are FreeUSCalculator tools really 100% free?",
    a: "Yes — every single calculator is free, forever. No premium tier, no paywall, no forced signup. We keep tools free by displaying non-intrusive ads via Google AdSense.",
  },
  {
    q: "How accurate are the 2026 tax and financial calculators?",
    a: "We use official IRS formulas and the latest 2026 figures: updated federal brackets, $176,100 Social Security wage base, 15.3% SE tax rate, and state-specific rules across all 50 states. All tools are reviewed regularly.",
  },
  {
    q: "Can I use these calculators for official tax filing?",
    a: "Our tools are for estimation, planning, and education — not official filing. For your actual return, use IRS Free File or consult a licensed CPA. Our results are a starting point, not a final answer.",
  },
  {
    q: "Do you sell or share user data?",
    a: "Never. All calculations run in your browser. No financial data is transmitted to our servers, stored in a database, or shared with third parties. This is a technical guarantee, not just a policy.",
  },
  {
    q: "Which states do your calculators support?",
    a: "All 50 US states, with dedicated accuracy for high-complexity states like California (SDI, CA income tax brackets), New York, Texas (no income tax), Florida, and Illinois.",
  },
  {
    q: "How often are the calculators updated?",
    a: "We update tools when the IRS releases new rates — typically in late Q4 for the following tax year. We also update mid-year if Congress passes tax law changes that affect calculations.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD }}
      />

      <div className="min-h-screen bg-slate-50">

        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#0a0f1e] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#3730a340,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,#06b6d410,transparent)]" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-14 sm:pt-22 pb-14 sm:pb-20 text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mb-7">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <ChevronRight size={11} />
              <span className="text-slate-400">About</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            bg-white/8 border border-white/10 text-xs font-bold
                            uppercase tracking-widest text-emerald-300 mb-6">
              <Calendar size={12} />
              Est. 2025 · Updated for Tax Year 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight
                           leading-[1.05] mb-6">
              Making Smart Financial Decisions{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400
                               bg-clip-text text-transparent">
                Accessible to Every American
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              We believe financial tools should be free, accurate, and easy to use —
              for W-2 workers, gig drivers, freelancers, and everyone in between.
              That's why we built FreeUSCalculator.
            </p>

            {/* Stat chips */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { val: "75,000+", label: "Monthly users"    },
                { val: "85+",     label: "Free calculators" },
                { val: "0",       label: "Required signups" },
                { val: "2026",    label: "Tax year updated" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center px-5 py-3 bg-white/8 border
                             border-white/10 rounded-2xl"
                >
                  <span className="text-2xl font-black text-white">{val}</span>
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            STATS BAR
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map(({ value, label, icon: Icon, color }) => (
              <div key={label} className={`flex items-center gap-3 p-4 rounded-2xl border ${color}`}>
                <Icon size={20} className="shrink-0" />
                <div>
                  <p className="text-xl font-black leading-none">{value}</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">

          {/* ══════════════════════════════════════════════════════════════
              OUR STORY
          ══════════════════════════════════════════════════════════════ */}
          <section aria-labelledby="story-heading">
            <div className="text-center mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">Our Story</p>
              <h2 id="story-heading" className="text-3xl sm:text-4xl font-black text-slate-900">
                Why We Built This
              </h2>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                <p>
                  In early 2025, our founding team noticed a frustrating pattern: Americans were spending
                  hours trying to understand their taxes and earnings using calculators that were
                  outdated, plastered with ads, or required creating an account just to see a result.
                </p>
                <p>
                  The problem was worst for gig workers. A DoorDash driver in Los Angeles wanted to know
                  their real hourly earnings after gas, vehicle depreciation, and self-employment tax.
                  A freelancer in Texas needed to estimate quarterly payments. A young couple in Chicago
                  was trying to figure out how much mortgage they could actually afford. None of the
                  existing tools gave clear, honest answers.
                </p>
                <p>
                  We decided to fix that. FreeUSCalculator launched with one mission:{" "}
                  <strong className="text-slate-900">
                    build the most accurate, private, and genuinely free financial calculators for Americans.
                  </strong>
                </p>
                <p>
                  Today, we serve over 75,000 monthly users across all 50 states. Every calculator runs
                  in your browser — your financial data never touches our servers. And every tool is
                  updated for Tax Year 2026 using real IRS formulas, not approximations.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              VALUES
          ══════════════════════════════════════════════════════════════ */}
          <section aria-labelledby="values-heading">
            <div className="text-center mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">What We Stand For</p>
              <h2 id="values-heading" className="text-3xl sm:text-4xl font-black text-slate-900">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map(({ icon: Icon, color, title, desc }) => (
                <div
                  key={title}
                  className="bg-white border border-slate-100 rounded-2xl p-6
                             hover:border-indigo-200 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-4`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-black text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              WHAT MAKES US DIFFERENT — long-form content for SEO
          ══════════════════════════════════════════════════════════════ */}
          <section aria-labelledby="different-heading">
            <div className="text-center mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">Why Choose Us</p>
              <h2 id="different-heading" className="text-3xl sm:text-4xl font-black text-slate-900">
                What Makes FreeUSCalculator Different
              </h2>
            </div>

            <div className="space-y-5">
              {DIFFERENTIATORS.map(({ title, body, tag, tagColor }) => (
                <div
                  key={title}
                  className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm
                             hover:border-indigo-100 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 size={20} className="text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <h3 className="font-black text-slate-900 text-base sm:text-lg">{title}</h3>
                        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${tagColor}`}>
                          {tag}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              FEATURED TOOLS — internal links for SEO + AdSense
          ══════════════════════════════════════════════════════════════ */}
          <section aria-labelledby="tools-heading" className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="text-center mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">Start Calculating</p>
              <h2 id="tools-heading" className="text-3xl font-black text-slate-900">
                Our Most Popular Free Tools
              </h2>
              <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
                All updated for 2026. All free. All running in your browser — no data stored.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {TOOLS_FEATURED.map(({ label, href, tag }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl
                             border border-slate-100 hover:border-indigo-300 hover:bg-indigo-50
                             transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Calculator size={14} className="text-indigo-500 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-indigo-700">
                      {label}
                    </span>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wide text-indigo-400
                                   bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full shrink-0">
                    {tag}
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/tax-calculators"
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600
                           hover:text-indigo-800 transition-colors"
              >
                View all 85+ free calculators <ArrowRight size={15} />
              </Link>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              IMPACT — dark card
          ══════════════════════════════════════════════════════════════ */}
          <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full
                            bg-indigo-600/10 blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-indigo-300 mb-4">
                  Real Impact
                </p>
                <h2 className="text-3xl sm:text-4xl font-black mb-8 leading-tight">
                  Trusted by 75,000+ Americans Every Month
                </h2>
                <div className="space-y-6">
                  {[
                    { stat: "75,000+", desc: "Monthly active users across all 50 states"    },
                    { stat: "85+",     desc: "Free financial calculators, all updated 2026"  },
                    { stat: "4.9/5",   desc: "Average user rating across all tools"          },
                  ].map(({ stat, desc }) => (
                    <div key={stat} className="flex items-center gap-4">
                      <div className="text-3xl font-black text-indigo-300 w-20 shrink-0 tabular-nums">
                        {stat}
                      </div>
                      <p className="text-slate-400 text-sm leading-snug">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Whether it's a DoorDash driver in Los Angeles calculating real hourly earnings
                  after gas and vehicle wear, a freelancer in Texas estimating quarterly
                  self-employment taxes, or a young couple in Chicago planning their first
                  home purchase — FreeUSCalculator has become their go-to financial tool.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["W-2 Employees", "1099 Freelancers", "Gig Drivers", "Small Business", "First-time Buyers"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-slate-300 bg-white/8 border
                                 border-white/10 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              FAQ — FAQPage schema eligible
          ══════════════════════════════════════════════════════════════ */}
          <section aria-labelledby="faq-heading">
            <div className="text-center mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">FAQ</p>
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-black text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <dl className="space-y-4">
              {FAQS.map(({ q, a }) => (
                <div
                  key={q}
                  className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6
                             hover:border-indigo-200 transition-colors shadow-sm"
                >
                  <dt className="font-black text-slate-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                    <Star size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                    {q}
                  </dt>
                  <dd className="text-slate-500 text-sm leading-relaxed pl-5">{a}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              TRUST STRIP
          ══════════════════════════════════════════════════════════════ */}
          <section className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm">
            <p className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
              Why 75,000+ Americans Trust Us
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, label: "No data stored",        color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
                { icon: Lock,        label: "Browser-only calc",     color: "text-indigo-600 bg-indigo-50 border-indigo-100"   },
                { icon: Award,       label: "IRS formula accurate",  color: "text-amber-600 bg-amber-50 border-amber-100"      },
                { icon: Heart,       label: "Always 100% free",      color: "text-rose-600 bg-rose-50 border-rose-100"         },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border ${color}`}
                >
                  <Icon size={20} />
                  <p className="text-xs font-bold text-center text-slate-700">{label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-700 to-violet-800 text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-300 mb-4">
              Free · No Signup · Instant Results
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-5">
              Ready to Make Better Financial Decisions?
            </h2>
            <p className="text-indigo-200 text-base mb-8 max-w-lg mx-auto leading-relaxed">
              Join 75,000+ Americans who use FreeUSCalculator every month to understand
              their taxes, plan their budgets, and take control of their finances.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tax-calculators"
                className="inline-flex items-center gap-2 bg-white text-indigo-700 font-black
                           text-sm px-8 py-4 rounded-2xl hover:bg-amber-300 hover:text-indigo-900
                           transition-all shadow-xl active:scale-95"
              >
                Browse Tax Tools <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20
                           border border-white/20 text-white font-bold text-sm px-8 py-4
                           rounded-2xl transition-all active:scale-95"
              >
                <Mail size={16} />
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}