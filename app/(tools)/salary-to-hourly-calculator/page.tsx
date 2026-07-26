import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import SalaryToHourlyCalculator from "@/components/calculators/SalaryToHourlyCalculator";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  RefreshCw,
  BookOpen,
  ChevronRight,
  Clock,
  Briefcase,
  AlertCircle,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Globe,
  TrendingUp
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Salary to Hourly Calculator 2026 – See Your True Hourly Rate",
  description:
    "Convert your annual salary into an hourly wage. Find out exactly how much you make per hour based on 2026 workweek standards. Perfect for contract negotiation.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/salary-to-hourly-calculator",
  },
  keywords: [
    "salary to hourly calculator",
    "convert salary to hourly",
    "annual salary to hourly wage",
    "what is 100k a year hourly",
    "60k salary to hourly",
    "salary breakdown calculator",
    "contractor rate vs salary",
    "remote worker salary conversion"
  ],
  openGraph: {
    title: "Salary to Hourly Calculator 2026 – See Your True Hourly Rate",
    description:
      "Instantly calculate your hourly, daily, and weekly wage from your annual salary.",
    url: "https://www.freeuscalculator.in/salary-to-hourly-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary to Hourly Calculator – Find Your Wage",
    description: "Convert your annual salary to an hourly rate instantly.",
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
  name: "Salary to Hourly Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Converts annual salaries into equivalent hourly wages for employees and contractors.",
  url: "https://www.freeuscalculator.in/salary-to-hourly-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Salary Calculators", item: "https://www.freeuscalculator.in/salary-calculators" },
    { "@type": "ListItem", position: 3, name: "Salary to Hourly", item: "https://www.freeuscalculator.in/salary-to-hourly-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "How do you calculate an hourly rate from a salary?",
    a: "Divide your total annual salary by the number of hours you work in a year. A standard full-time year is 2,080 hours (40 hours/week × 52 weeks). So, a $50,000 salary ÷ 2,080 = $24.04 per hour."
  },
  {
    q: "What is a $100,000 salary per hour?",
    a: "Based on a 40-hour workweek and 52 weeks a year, $100,000 broken down into an hourly wage is exactly $48.08 an hour."
  },
  {
    q: "How much is $60,000 a year hourly?",
    a: "A $60,000 annual salary converts to $28.85 an hour, assuming a standard 2,080 hour working year."
  },
  {
    q: "Does my salary cover unpaid overtime?",
    a: "If you are an 'exempt' salaried employee in the US, your salary is meant to cover all hours worked, even if you work 50+ hours a week. This means your true hourly rate drops the more overtime you work. You can adjust the hours in our calculator to see your actual diminished hourly rate."
  },
  {
    q: "If I become a contractor, should I use this exact hourly rate?",
    a: "No. If you leave a salaried W-2 job to become a 1099 independent contractor doing the exact same work, you should multiply your calculated hourly rate by roughly 1.3x to 1.4x to cover the loss of benefits, health insurance, and paid time off."
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
  { annual: "$40,000", hourly: "$19.23", weekly: "$769", daily: "$153" },
  { annual: "$50,000", hourly: "$24.04", weekly: "$961", daily: "$192" },
  { annual: "$60,000", hourly: "$28.85", weekly: "$1,153", daily: "$230" },
  { annual: "$75,000", hourly: "$36.05", weekly: "$1,442", daily: "$288" },
  { annual: "$90,000", hourly: "$43.26", weekly: "$1,730", daily: "$346" },
  { annual: "$100,000", hourly: "$48.08", weekly: "$1,923", daily: "$384" },
  { annual: "$120,000", hourly: "$57.69", weekly: "$2,307", daily: "$461" },
  { annual: "$150,000", hourly: "$72.11", weekly: "$2,884", daily: "$576" },
];

export default function SalaryToHourlyPage() {
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
            <Link href="/salary-calculators" className="hover:text-emerald-600 transition-colors">Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Salary to Hourly</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <TrendingUp size={12} className="text-emerald-600" />
              Find Your True Value
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Salary to Hourly{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Convert your annual salary into an exact hourly wage. See how unpaid overtime is eating into your true hourly rate.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Zap, label: "Instant Math" },
                { icon: Clock, label: "True Hourly Rate" },
                { icon: RefreshCw, label: "Contractor Compare" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-emerald-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Salary to Hourly Calculator"
              description="Calculate your exact hourly wage from your yearly salary."
              category="Finance"
              lastUpdated="2026"
            >
              <SalaryToHourlyCalculator />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          2026 FACTS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10 sm:py-12 border-y border-slate-800 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8">
            Salary Benchmarks (2026)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "2,080", label: "Standard Work Hours", sub: "40 hrs/wk for 52 weeks" },
              { val: "Exempt", label: "No Overtime", sub: "If salary is over $43,888" },
              { val: "Diminished", label: "True Hourly Rate", sub: "Drops if working 50+ hrs" },
              { val: "W-2", label: "Employee Tax Status", sub: "Company pays half FICA" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-emerald-400 mb-2">{val}</p>
                <p className="text-sm font-bold text-white mb-1">{label}</p>
                <p className="text-[11px] text-slate-400 leading-tight">{sub}</p>
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
              Featured Reference
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Salary to Hourly Quick Conversion
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Based on a standard 40-hour workweek (2,080 hours per year).
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200/60 shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Annual Salary
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-emerald-700 text-[10px] uppercase tracking-widest">
                    Hourly Wage
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest hidden sm:table-cell">
                    Weekly
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest hidden sm:table-cell">
                    Daily (8hrs)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {SALARY_TABLE.map((row, i) => (
                  <tr key={row.annual} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"} hover:bg-emerald-50/50 transition-colors`}>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">{row.annual}</td>
                    <td className="py-4 px-4 sm:px-6 font-black text-emerald-600">{row.hourly} / hr</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500 hidden sm:table-cell">{row.weekly}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500 hidden sm:table-cell">{row.daily}</td>
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
                    Understanding Your True Hourly Value
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Salary Conversions · Unpaid Overtime · W-2 vs 1099</p>
                </div>
              </div>

              <div className="prose prose-slate prose-emerald max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-emerald-600 hover:prose-a:text-emerald-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                  A high annual salary looks great on paper, but if you are consistently working 50 to 60 hours a week, your actual hourly wage drops drastically. Calculating your salary to an hourly rate reveals how much your time is truly worth to your employer.
                </p>

                <h3>How to Convert Salary to Hourly (The Math)</h3>
                <p>
                  To find your baseline hourly rate, you divide your annual gross salary by the total number of hours you work in a year. In the United States, a standard full-time schedule is considered 40 hours per week for 52 weeks a year.
                </p>
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm my-6">
                  <p className="font-mono text-emerald-700 font-bold mb-2">Formula:</p>
                  <code className="text-lg bg-slate-100 px-3 py-1 rounded">40 hours × 52 weeks = 2,080 Total Yearly Hours</code><br/><br/>
                  <code className="text-lg bg-slate-100 px-3 py-1 rounded">Annual Salary ÷ 2,080 = Hourly Rate</code>
                </div>
                <p>
                  <strong>Example:</strong> If you are offered a $90,000 salary, your hourly breakdown is $90,000 ÷ 2,080 = <strong>$43.26 per hour</strong>.
                </p>
                
                <h3>The "Unpaid Overtime" Trap for Salaried Workers</h3>
                <p>
                  If you are a salaried employee classified as "Exempt" under the FLSA, you are not legally entitled to <Link href="/time-and-half-calculator">Time and a Half</Link> for overtime. Your salary is a fixed amount meant to cover <em>all</em> hours you work, whether that's 40 hours or 60 hours.
                </p>
                <p>
                  If you have a $90,000 salary but your company culture pressures you into working 55 hours a week, your true yearly hours jump to 2,860. Your actual hourly wage drops from $43.26 to <strong>$31.46 per hour</strong>. Use our calculator above to adjust the "Hours per Week" slider and see the devastating effect unpaid overtime has on your true hourly rate.
                </p>

                <div className="my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-amber-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-amber-900 font-bold mt-0 mb-2">Non-Exempt Salaried Workers</h4>
                    <p className="text-amber-800 text-sm m-0 leading-relaxed">
                      If you are salaried but classified as "Non-Exempt" (or your salary is below the $43,888 federal threshold), your employer <strong>must</strong> pay you overtime. They will calculate your hourly rate using the formula above, and then pay you 1.5x that rate for any hours worked over 40. Try our <Link href="/overtime-calculator">Overtime Calculator</Link> to see this math.
                    </p>
                  </div>
                </div>

                <h3>Transitioning to Freelance or Contracting?</h3>
                <p>
                  Many professionals use a Salary to Hourly calculator when quitting a full-time W-2 job to become an independent contractor (1099) doing the same work. 
                </p>
                <p>
                  <strong>Do not charge your exact salaried hourly rate as a contractor!</strong>
                </p>
                <p>
                  When you are an employee, your company pays for your health insurance, paid time off, 401(k) matching, and half of your FICA payroll taxes. As a contractor, you bear all of these costs, including a 15.3% Self-Employment Tax. To take home the same amount of money and maintain your lifestyle, you must charge roughly 30% to 40% more than your W-2 hourly rate. 
                </p>
                <p>
                  For example, if your salaried hourly rate is $45/hr, you should charge at least $60/hr as a freelancer. If you want to do the inverse math, use our <Link href="/hourly-to-salary-calculator">Hourly to Salary Calculator</Link>.
                </p>
                
                <p>
                  Finally, if you want to know what your final take-home pay is after all federal and state taxes are deducted from your salary, jump over to our <Link href="/salary-after-tax-calculator">Salary After Tax Calculator</Link>.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-emerald-900 to-teal-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe size={16} className="text-emerald-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-300">
                      Tax Warning
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Taxes Eat 20-30%</h3>
                  <p className="text-sm text-emerald-100/80 leading-relaxed mb-6">
                    A $100,000 salary ($48/hr) doesn't mean $48/hr goes into your bank. After federal, state, and FICA taxes, your net hourly rate drops significantly.
                  </p>
                  <Link href="/salary-after-tax-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Calculate Net Pay <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Hourly to Salary", href: "/hourly-to-salary-calculator", icon: Clock },
                    { title: "Salary After Tax", href: "/salary-after-tax-calculator", icon: DollarSign },
                    { title: "Paycheck Calculator", href: "/paycheck-calculator", icon: Briefcase },
                    { title: "Time and a Half", href: "/time-and-half-calculator", icon: Calculator },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-emerald-200 group-hover:text-emerald-700 transition-colors text-slate-500">
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
                  title="Salary to Hourly Calculator 2026"
                  url="https://www.freeuscalculator.in/salary-to-hourly-calculator"
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
          <RelatedCalculators currentTool="salary-to-hourly-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Salary Conversion Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-emerald-300 transition-colors shadow-sm">
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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-4">
            100% Free · Accurate Math
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Know What Your Time Is Worth
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
            Stop letting unpaid overtime lower your real wage. Use our tool to calculate your true hourly rate before negotiating your next salary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-emerald-900/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/hourly-to-salary-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              Convert Hourly to Salary
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SEO FOOTER NAV
      ════════════════════════════════════════════════════════════════════ */}
      <nav aria-label="Related calculators navigation" className="bg-slate-950 py-10 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6">
            {[
              { href: "/salary-after-tax-calculator",       label: "Salary After Tax"             },
              { href: "/paycheck-calculator",               label: "Paycheck Calculator"          },
              { href: "/hourly-to-salary-calculator",       label: "Hourly to Salary"             },
              { href: "/overtime-calculator",               label: "Overtime Pay Calculator"      },
              { href: "/self-employment-tax-calculator-usa",label: "Self-Employment Tax"          },
              { href: "/savings-calculator",                label: "Savings Calculator"           },
              { href: "/rent-affordability-calculator",     label: "Rent Affordability"           },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-500 hover:text-emerald-400 transition-colors text-xs font-medium">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-700">
            Salary to Hourly Calculator · FreeUSCalculator.in · 2026 Guidelines
          </p>
        </div>
      </nav>
    </main>
  );
}