import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import RentAffordabilityClient from "./RentAffordabilityClient";
import {
  Home,
  BookOpen,
  ChevronRight,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Briefcase,
  TrendingDown,
  AlertCircle,
  MapPin
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Rent Affordability Calculator 2026: How Much Rent Can I Afford?",
  description:
    "Free rent affordability calculator using the 30% rule and debt-adjusted methods. See exactly how much rent you can afford based on your income and debts.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/rent-affordability-calculator",
  },
  keywords: [
    "rent affordability calculator",
    "how much rent can I afford",
    "30 percent rule rent",
    "rent calculator by salary",
    "debt-to-income rent calculator",
    "apartment budget calculator 2026"
  ],
  openGraph: {
    title: "Rent Affordability Calculator 2026 – Free Apartment Budget Tool",
    description:
      "Find out your maximum affordable rent using both the 30% landlord rule and a realistic debt-adjusted method.",
    url: "https://www.freeuscalculator.in/rent-affordability-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent Affordability Calculator (2026)",
    description: "Calculate how much rent you can afford based on gross income and existing debt.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Rent Affordability Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates maximum affordable rent using the 30% gross income rule and a net-income debt-adjusted method.",
  url: "https://www.freeuscalculator.in/rent-affordability-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Cost Calculators", item: "https://www.freeuscalculator.in/cost-calculators" },
    { "@type": "ListItem", position: 3, name: "Rent Affordability Calculator", item: "https://www.freeuscalculator.in/rent-affordability-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "Is the 30% rent rule still valid in 2026?",
    a: "Yes as a starting point. It remains the most widely recognized housing guideline, and most landlords still use a version of it (3× monthly income) for application approval. However, in expensive markets, you must also look at your debt-to-income ratio."
  },
  {
    q: "Should I calculate rent based on gross or net income?",
    a: "For landlord applications: gross income. For your personal budget: net (take-home) pay. These two numbers can be very different due to progressive taxation."
  },
  {
    q: "Does the 30% rule include utilities?",
    a: "Technically, the original HUD standard was 30% of income for total housing costs including rent and utilities. In practice, most landlords now apply 30% to rent alone. We recommend keeping rent + utilities under 35%."
  },
  {
    q: "What rent can I afford making $60,000 a year?",
    a: "At $60,000, your gross monthly income is $5,000. The 30% rule puts your ceiling at $1,500/month. However, with typical debts, a sweet spot of $1,100–$1,300/month leaves you a sustainable margin for savings."
  },
  {
    q: "What is the income needed to afford $2,000 a month rent?",
    a: "Using the landlord 3× rule, you need $6,000/month gross ($72,000/year). Under the stricter 30% rule for personal budgeting, you need $6,667/month gross ($80,000/year)."
  }
];

const SCHEMA_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS_DATA.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const SALARY_TABLE = [
  { salary: "$40,000", gross: "$3,333", maxRent: "$1,000/mo", conservative: "$820–$955/mo" },
  { salary: "$50,000", gross: "$4,167", maxRent: "$1,250/mo", conservative: "$1,020–$1,190/mo" },
  { salary: "$60,000", gross: "$5,000", maxRent: "$1,500/mo", conservative: "$1,215–$1,418/mo" },
  { salary: "$75,000", gross: "$6,250", maxRent: "$1,875/mo", conservative: "$1,485–$1,733/mo" },
  { salary: "$100,000", gross: "$8,333", maxRent: "$2,500/mo", conservative: "$1,950–$2,275/mo" },
];

export default function RentAffordabilityPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/cost-calculators" className="hover:text-emerald-600 transition-colors">Cost Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Rent Affordability</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Home size={12} className="text-emerald-600" />
              2026 Apartment Guidelines
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Rent Affordability{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Find the maximum rent you can safely afford without breaking your budget. Compare the landlord 30% rule with a realistic debt-adjusted budget.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Briefcase, label: "Gross Income" },
                { icon: DollarSign, label: "Take-Home Pay" },
                { icon: TrendingDown, label: "Debt Adjusted" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-emerald-600" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Rent Budget Calculator"
              description="Calculate how much apartment you can actually afford."
              category="Housing"
              lastUpdated="2026"
            >
              <RentAffordabilityClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          2026 FINANCE FACTS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10 sm:py-12 border-y border-slate-950 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
            2026 Housing Baselines
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "30%", label: "Gross Rule", sub: "Max % of pre-tax income" },
              { val: "3×", label: "Landlord Req", sub: "Income must be 3x rent" },
              { val: "<43%", label: "DTI Warning", sub: "Debt-to-Income limit" },
              { val: "50/30/20", label: "Budget Guide", sub: "Needs / Wants / Savings" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-white mb-2">{val}</p>
                <p className="text-sm font-bold text-slate-300 mb-1">{label}</p>
                <p className="text-[11px] text-slate-400/80 leading-tight">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20 pb-20">
        
        {/* ════════════════════════════════════════════════════════════════
            QUICK REFERENCE TABLE
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="table-heading">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">
              Quick Reference
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Affordable Rent by Salary
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              The 30% rule limits vs realistic conservative targets.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200/60 shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Annual Salary
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Monthly Gross
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-emerald-700 text-[10px] uppercase tracking-widest">
                    Max Rent (30%)
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Conservative Target
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {SALARY_TABLE.map((row, i) => (
                  <tr key={row.salary} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"} hover:bg-emerald-50/50 transition-colors`}>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">{row.salary}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-600">{row.gross}</td>
                    <td className="py-4 px-4 sm:px-6 font-black text-emerald-600">{row.maxRent}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500">{row.conservative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            COMPREHENSIVE GUIDE WITH INTERNAL LINKS
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="guide-heading">
          <div className="flex flex-col lg:flex-row gap-10 items-start max-w-6xl mx-auto">
            
            {/* Main Article */}
            <article className="flex-1 min-w-0 space-y-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    How Much Rent Can I Actually Afford?
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">The 30% Rule · DTI · Take-Home Pay</p>
                </div>
              </div>

              <div className="prose prose-slate prose-emerald max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-emerald-600 hover:prose-a:text-emerald-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                  Most people look at what they <em>can</em> technically pay rather than what they <em>should</em> pay. You might be able to swing $2,000 a month, but after student loans, car payments, and groceries, you might be drowning.
                </p>

                <h3>The 30% Rule Explained</h3>
                <p>
                  The 30% rule says you should spend no more than 30% of your gross monthly income on rent. This is the baseline landlords use when checking your application (often phrased as "income must be 3x the rent"). 
                </p>
                <p>
                  However, if you have significant debt, 30% of your gross income might be too high. That's why our calculator also offers a debt-adjusted method.
                </p>

                <div className="my-8 bg-teal-50 border border-teal-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-teal-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-teal-900 font-bold mt-0 mb-2">Gross vs Net Income</h4>
                    <p className="text-teal-800 text-sm m-0 leading-relaxed">
                      Use gross income to see if a landlord will approve you. Use your actual net take-home pay to figure out if you can safely afford it in your daily life.
                    </p>
                  </div>
                </div>

                <h3>Debt-to-Income (DTI) Ratio</h3>
                <p>
                  Your total debt-to-income ratio affects how much of your actual income is available for rent. If your student loans and car payments already eat up 20% of your income, adding a 30% rent payment pushes you into risky territory. 
                </p>
                <p>
                  To figure out your precise take-home pay after federal and state taxes before committing to an apartment, use our <Link href="/paycheck-calculator">Paycheck Calculator</Link>.
                </p>

                <h3>Hidden Costs That Kill Your Rent Budget</h3>
                <p>
                  The sticker price is rarely the full story. Remember to factor in utilities ($100–$250/mo), internet ($50–$100), renter's insurance ($20), parking ($100+ in cities), and pet fees ($50) when calculating your final affordability. 
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-900 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={16} className="text-emerald-200" />
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-200">
                      Buying vs Renting
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Compare Mortgage Costs</h3>
                  <p className="text-sm text-emerald-100/90 leading-relaxed mb-6">
                    See if a mortgage on a comparable home would actually cost more per month than renting.
                  </p>
                  <Link href="/loan-calculator" className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Loan / Mortgage Calculator <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Paycheck Calculator", href: "/paycheck-calculator", icon: DollarSign },
                    { title: "Savings Calculator", href: "/savings-calculator", icon: BookOpen },
                    { title: "Loan Calculator", href: "/loan-calculator", icon: Calculator },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-emerald-700 text-sm">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6 text-center">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Share This Tool
                </h4>
                <ShareButtons
                  title="Rent Affordability Calculator 2026"
                  url="https://www.freeuscalculator.in/rent-affordability-calculator"
                />
              </div>

              {/* AdSense Placeholder */}
              <div className="bg-slate-50 border border-dashed border-slate-300 rounded-[2rem] h-[250px] flex items-center justify-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Advertisement
                </span>
              </div>

            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <div className="pt-10">
          <RelatedCalculators currentTool="rent-affordability-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Apartment Budgeting Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-emerald-400 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  {q}
                </dt>
                <dd className="text-slate-500 text-sm sm:text-base leading-relaxed pl-8">{a}</dd>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-black text-white text-center border-t border-slate-800">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-4">
            Free Financial Tool
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Sign With Confidence
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-10 leading-relaxed">
            Don't let FOMO drive your apartment decision. Calculate your real limits before you sign the lease.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-black/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/paycheck-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              Take-Home Pay
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SEO FOOTER NAV
      ════════════════════════════════════════════════════════════════════ */}
      <nav aria-label="Related calculators navigation" className="bg-black py-10 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6">
            {[
              { href: "/savings-calculator",                label: "Savings Calculator"           },
              { href: "/loan-calculator",                   label: "Loan Calculator"              },
              { href: "/paycheck-calculator",               label: "Paycheck Calculator"          },
              { href: "/salary-after-tax-calculator",       label: "Salary After Tax"             },
              { href: "/hourly-to-salary-calculator",       label: "Hourly to Salary"             },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-500 hover:text-white transition-colors text-xs font-medium">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-700">
            Rent Affordability Calculator · FreeUSCalculator.in · 2026 Guidelines
          </p>
        </div>
      </nav>
    </main>
  );
}