import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import OvertimeCalculator from "@/components/calculators/OvertimeCalculator";
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
  BriefcaseBusiness,
  Timer
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Overtime Pay Calculator 2026 – Calculate 1.5x and Double Time",
  description:
    "Calculate your weekly overtime pay accurately. Supports time and a half (1.5x) and double time (2.0x) rates based on 2026 FLSA guidelines.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/overtime-calculator",
  },
  keywords: [
    "overtime calculator",
    "overtime pay calculator",
    "calculate overtime",
    "double time calculator",
    "time and a half calculator",
    "flsa overtime rules",
    "how to calculate overtime pay",
    "california overtime calculator",
    "overtime rules 2026"
  ],
  openGraph: {
    title: "Overtime Pay Calculator 2026 – 1.5x and Double Time",
    description:
      "Find out exactly how much you earn when working overtime. Supports both time-and-a-half and double-time rates.",
    url: "https://www.freeuscalculator.in/overtime-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overtime Pay Calculator – Calculate Extra Pay",
    description: "Instantly calculate your overtime earnings including double time.",
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
  name: "Overtime Pay Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculate overtime pay including time and a half and double time rates according to US labor laws.",
  url: "https://www.freeuscalculator.in/overtime-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Salary Calculators", item: "https://www.freeuscalculator.in/salary-calculators" },
    { "@type": "ListItem", position: 3, name: "Overtime Pay", item: "https://www.freeuscalculator.in/overtime-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "How is overtime pay calculated?",
    a: "Overtime pay is generally calculated at 'time and a half' (1.5 times your regular hourly rate) for all hours worked beyond 40 in a standard workweek."
  },
  {
    q: "When does double time apply?",
    a: "Double time (2.0x your regular rate) is not required by federal FLSA law. However, state laws like California mandate double time for hours worked beyond 12 in a single day, or beyond 8 hours on the seventh consecutive day of a workweek."
  },
  {
    q: "Can my employer force me to work overtime?",
    a: "Yes. In the United States, there is no limit on the number of hours an employer can require an adult employee to work, as long as the employee is paid properly for the overtime hours."
  },
  {
    q: "Are independent contractors eligible for overtime?",
    a: "No. The FLSA's overtime provisions strictly apply to W-2 employees. Independent contractors, freelancers, and 1099 workers must negotiate their own overtime or rush rates within their service contracts."
  },
  {
    q: "Are bonuses included in overtime calculation?",
    a: "Yes, non-discretionary bonuses (like performance or attendance bonuses) must be added to your regular earnings before calculating your overtime rate, which increases the overtime pay you are owed."
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
const OVERTIME_TABLE = [
  { hourly: "$15.00", oneHalf: "$22.50", double: "$30.00" },
  { hourly: "$18.00", oneHalf: "$27.00", double: "$36.00" },
  { hourly: "$20.00", oneHalf: "$30.00", double: "$40.00" },
  { hourly: "$22.00", oneHalf: "$33.00", double: "$44.00" },
  { hourly: "$25.00", oneHalf: "$37.50", double: "$50.00" },
  { hourly: "$30.00", oneHalf: "$45.00", double: "$60.00" },
  { hourly: "$35.00", oneHalf: "$52.50", double: "$70.00" },
  { hourly: "$40.00", oneHalf: "$60.00", double: "$80.00" },
  { hourly: "$50.00", oneHalf: "$75.00", double: "$100.00" },
];

export default function OvertimePage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/salary-calculators" className="hover:text-amber-600 transition-colors">Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Overtime Pay</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Timer size={12} className="text-amber-600" />
              1.5x & 2.0x Pay Tool
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Overtime Pay{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Find out exactly how much you earn when working overtime. Supports both time-and-a-half and double-time tracking.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Zap, label: "Double Time Math" },
                { icon: ShieldCheck, label: "FLSA Compliant" },
                { icon: RefreshCw, label: "State Overrides" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-amber-600" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Overtime Calculator"
              description="Calculate your weekly overtime earnings."
              category="Finance"
              lastUpdated="2026"
            >
              <OvertimeCalculator />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          2026 OVERTIME STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10 sm:py-12 border-y border-slate-800 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8">
            Overtime Legal Benchmarks (2026)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "> 40", label: "Weekly OT Limit", sub: "Federal law kicks in at 40 hrs" },
              { val: "1.5x", label: "Standard Rate", sub: "Mandated time and a half" },
              { val: "2.0x", label: "Double Time", sub: "State-specific (like California)" },
              { val: "No Limit", label: "Mandatory Overtime", sub: "Employers can demand OT" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-amber-400 mb-2">{val}</p>
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
            <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">
              Featured Reference
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Overtime Pay Quick Reference
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Standard time and a half and double time rates for popular hourly wages.
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200/60 shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Base Hourly
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-amber-700 text-[10px] uppercase tracking-widest">
                    Time & Half (1.5x)
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-orange-600 text-[10px] uppercase tracking-widest">
                    Double Time (2.0x)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {OVERTIME_TABLE.map((row, i) => (
                  <tr key={row.hourly} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"} hover:bg-amber-50/50 transition-colors`}>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">{row.hourly} / hr</td>
                    <td className="py-4 px-4 sm:px-6 font-black text-amber-600">{row.oneHalf} / hr</td>
                    <td className="py-4 px-4 sm:px-6 font-black text-orange-500">{row.double} / hr</td>
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
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    The Global Guide to US Overtime Laws
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Double Time · Freelance Remote Contracts · FLSA Standards</p>
                </div>
              </div>

              <div className="prose prose-slate prose-amber max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-amber-600 hover:prose-a:text-amber-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-amber-500 p-6 rounded-r-2xl">
                  Working overtime can massively increase your weekly paycheck. Whether you are a W-2 employee navigating strict FLSA laws or an international contractor negotiating a retainer, understanding how overtime translates into real money is crucial.
                </p>

                <h3>How to Use the Overtime Calculator</h3>
                <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
                  <img 
                    src="/overtime-calculator-screenshot.jpg" 
                    alt="Overtime Calculator Interface" 
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <p>
                  Simply enter your <strong>Regular Hourly Rate</strong> and the total <strong>Regular Hours</strong> worked. Then, enter any <strong>1.5x Overtime Hours</strong> and (if applicable in your state) <strong>2.0x Double Time Hours</strong>. The calculator will instantly sum your base pay and your premium rates so you can verify your exact paycheck amount!
                </p>

                <h3>How Overtime is Actually Calculated in the US</h3>
                <p>
                  The Fair Labor Standards Act (FLSA) sets the federal baseline: any covered non-exempt employee who works more than 40 hours in a 168-hour workweek must be paid <Link href="/time-and-half-calculator">Time and a Half</Link> (1.5x) for those excess hours.
                </p>
                <p>
                  For example, if you make $20/hr and work 50 hours in a week:
                </p>
                <ul>
                  <li><strong>Regular Pay:</strong> 40 hours × $20 = $800</li>
                  <li><strong>Overtime Pay:</strong> 10 hours × $30 (1.5x) = $300</li>
                  <li><strong>Total Gross Pay:</strong> $1,100</li>
                </ul>
                <p>
                  To figure out what that $1,100 looks like after the IRS takes its cut, plug it into our <Link href="/paycheck-calculator">Paycheck Calculator</Link>.
                </p>

                <h3>What About Double Time?</h3>
                <p>
                  "Double Time" means you get paid twice your regular hourly rate (2.0x). The FLSA <strong>does not</strong> require employers to ever pay double time. It is entirely a state-level mandate or a private company benefit.
                </p>
                <p>
                  The most famous example is <strong>California</strong>, which enforces strict daily overtime rules. In California, you must be paid 1.5x for hours worked beyond 8 in a day, but you must be paid <strong>Double Time</strong> for any hours worked beyond 12 in a single day. You are also owed Double Time if you work more than 8 hours on your seventh consecutive day of work in a single week.
                </p>

                <div className="my-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-blue-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-blue-900 font-bold mt-0 mb-2">Remote Workers & Global Contractors</h4>
                    <p className="text-blue-800 text-sm m-0 leading-relaxed">
                      If you are an international freelancer, digital nomad, or contractor (signing a W-8BEN), <strong>US FLSA laws do not protect you</strong>. You are not legally entitled to 1.5x or 2.0x pay. Your pay is dictated entirely by your contract. Always ensure you write an "Out of Scope" or "Rush Rate" clause into your freelance agreements if a client demands weekend or 40+ hour work. Use our <Link href="/hourly-to-salary-calculator">Hourly to Salary Calculator</Link> to ensure your base rate is high enough to compensate for lacking these legal protections.
                    </p>
                  </div>
                </div>

                <h3>Can Salaried Workers Get Overtime?</h3>
                <p>
                  Yes, if they are classified as "Non-Exempt". The Department of Labor sets a salary threshold (currently $43,888 annually). If your salary is below this, your employer <strong>must</strong> pay you overtime, even if you are salaried.
                </p>
                <p>
                  If you make $40,000 a year, your base hourly rate is $19.23. If you work 50 hours, your employer owes you 10 hours of overtime at $28.85/hr. Check out our <Link href="/salary-to-hourly-calculator">Salary to Hourly Calculator</Link> to find your base hourly rate.
                </p>
                
                <h3>Mandatory Overtime Limits</h3>
                <p>
                  Many workers ask: "Can my boss force me to work overtime?" Under federal US law, the answer is Yes. There is no legal limit on the number of hours an employer can require an adult to work in a week, provided they pay the appropriate overtime premiums. However, safety regulations (like DOT rules for truck drivers) may apply in specific industries.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-amber-900 to-orange-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <BriefcaseBusiness size={16} className="text-amber-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-amber-300">
                      Payroll Tip
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Bonus Inclusion</h3>
                  <p className="text-sm text-amber-100/80 leading-relaxed mb-6">
                    Performance bonuses must be added to your regular base pay before calculating your 1.5x overtime rate, meaning your OT rate should actually be higher on weeks you get a bonus!
                  </p>
                  <Link href="/paycheck-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Check Your Paycheck <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Time and a Half", href: "/time-and-half-calculator", icon: Calculator },
                    { title: "Salary After Tax", href: "/salary-after-tax-calculator", icon: DollarSign },
                    { title: "Salary to Hourly", href: "/salary-to-hourly-calculator", icon: Clock },
                    { title: "Hourly to Salary", href: "/hourly-to-salary-calculator", icon: Briefcase },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 border border-transparent hover:border-amber-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-amber-200 group-hover:text-amber-700 transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-amber-700 text-sm">{item.title}</span>
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
                  title="Overtime Calculator 2026"
                  url="https://www.freeuscalculator.in/overtime-calculator"
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
          <RelatedCalculators currentTool="overtime-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Overtime Pay Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-amber-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-amber-500 shrink-0 mt-0.5" />
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
          <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-4">
            100% Free · Accurate Math
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Track Every Extra Dollar
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
            Don't let complex overtime laws shortchange your paycheck. Use our calculator to instantly verify your 1.5x and 2.0x earnings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-amber-900/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/time-and-half-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              Try Time and a Half Only
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
              { href: "/salary-to-hourly-calculator",       label: "Salary to Hourly"             },
              { href: "/self-employment-tax-calculator-usa",label: "Self-Employment Tax"          },
              { href: "/savings-calculator",                label: "Savings Calculator"           },
              { href: "/rent-affordability-calculator",     label: "Rent Affordability"           },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-500 hover:text-amber-400 transition-colors text-xs font-medium">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-700">
            Overtime Calculator · FreeUSCalculator.in · 2026 Guidelines
          </p>
        </div>
      </nav>
    </main>
  );
}