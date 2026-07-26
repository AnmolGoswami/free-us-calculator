import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import TimeAndHalfCalculator from "@/components/calculators/TimeAndHalfCalculator";
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
  Info,
  Scale
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Time and a Half Calculator 2026 – Calculate 1.5x Overtime Pay",
  description:
    "Instantly calculate time and a half (1.5x) overtime pay. See your exact weekly gross, hourly rate, and annual earnings based on the US FLSA 2026 guidelines.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/time-and-half-calculator",
  },
  keywords: [
    "time and a half calculator",
    "1.5x pay calculator",
    "calculate time and a half",
    "how much is time and a half for $20",
    "FLSA overtime calculator",
    "time and a half overtime pay",
    "what is time and a half for $15 an hour",
    "time and a half rate",
    "overtime pay laws 2026",
    "california daily overtime calculator"
  ],
  openGraph: {
    title: "Time and a Half Calculator 2026 – 1.5x Overtime Pay",
    description:
      "Find out exactly how much you earn when working overtime at time and a half. Free FLSA compliant calculator.",
    url: "https://www.freeuscalculator.in/time-and-half-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Time and a Half Calculator – Calculate 1.5x Pay",
    description: "Instantly calculate your time and a half overtime earnings.",
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
  name: "Time and a Half Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculate 1.5x overtime pay accurately according to US FLSA regulations.",
  url: "https://www.freeuscalculator.in/time-and-half-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Salary Calculators", item: "https://www.freeuscalculator.in/salary-calculators" },
    { "@type": "ListItem", position: 3, name: "Time and a Half", item: "https://www.freeuscalculator.in/time-and-half-calculator" },
  ],
});

const SCHEMA_HOWTO = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Time and a Half",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enter Regular Wage", text: "Input your standard hourly rate." },
    { "@type": "HowToStep", position: 2, name: "Enter Work Hours", text: "Input total hours worked in the week, or explicitly separate regular and overtime hours." },
    { "@type": "HowToStep", position: 3, name: "Review 1.5x Rate", text: "The calculator instantly multiplies your base rate by 1.5 to determine your overtime rate." },
    { "@type": "HowToStep", position: 4, name: "See Gross Pay", text: "Review your total weekly compensation combining standard pay and time-and-a-half pay." }
  ]
});

const FAQS_DATA = [
  {
    q: "What is time and a half?",
    a: "Time and a half is the standard overtime pay rate mandated by the US FLSA. It is exactly 1.5 times your regular hourly wage. Employers must pay this rate to covered non-exempt employees for all hours worked over 40 in a single workweek."
  },
  {
    q: "How much is time and a half for $20 an hour?",
    a: "For a regular rate of $20 an hour, time and a half is $30.00 an hour. (Calculation: $20 × 1.5 = $30)."
  },
  {
    q: "How much is time and a half for $15 an hour?",
    a: "If your base pay is $15 an hour, your time and a half overtime rate is $22.50 an hour. (Calculation: $15 × 1.5 = $22.50)."
  },
  {
    q: "How do you calculate time and a half from a salary?",
    a: "To find the time and a half rate for a salaried employee, first determine the regular hourly rate by dividing the weekly salary by 40 (or the standard hours intended to be covered). Then, multiply that hourly rate by 1.5."
  },
  {
    q: "Do independent contractors get time and a half?",
    a: "No. The FLSA's overtime provisions strictly apply to employees. Independent contractors, freelancers, and 1099 workers are not legally entitled to time and a half unless it is specifically negotiated in their contract."
  },
  {
    q: "Is double time the same as time and a half?",
    a: "No. Time and a half is 1.5x your regular pay. Double time is 2.0x your regular pay. Double time is not federally mandated but is required in certain states (like California after 12 hours in a day) or offered as a company benefit for holidays."
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
const RATES_TABLE = [
  { reg: "$10.00", ot: "$15.00" },
  { reg: "$12.50", ot: "$18.75" },
  { reg: "$15.00", ot: "$22.50" },
  { reg: "$18.00", ot: "$27.00" },
  { reg: "$20.00", ot: "$30.00" },
  { reg: "$22.00", ot: "$33.00" },
  { reg: "$25.00", ot: "$37.50" },
  { reg: "$30.00", ot: "$45.00" },
  { reg: "$35.00", ot: "$52.50" },
  { reg: "$40.00", ot: "$60.00" },
  { reg: "$50.00", ot: "$75.00" },
];

export default function TimeAndHalfPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-violet-200 selection:text-violet-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_HOWTO }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-violet-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/salary-calculators" className="hover:text-violet-600 transition-colors">Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Time & Half</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Sparkles size={12} className="text-violet-600" />
              1.5x Overtime Pay Tool
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Time and a Half{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Find out exactly what your 1.5x overtime rate is and calculate your total weekly take-home under US FLSA rules.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Zap, label: "Instant 1.5x Math" },
                { icon: ShieldCheck, label: "FLSA Compliant" },
                { icon: RefreshCw, label: "Multi-Currency" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-violet-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Time and a Half Calculator"
              description="Calculate your 1.5x overtime rate and weekly pay."
              category="Finance"
              lastUpdated="2026"
            >
              <TimeAndHalfCalculator />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          2026 FLSA RULES STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10 sm:py-12 border-y border-slate-800 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8">
            FLSA Overtime Rules & Facts (2026)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "1.5x", label: "Time and a Half", sub: "Standard Overtime Rate" },
              { val: "40 hrs", label: "Weekly Threshold", sub: "When OT legally begins" },
              { val: "Zero", label: "Weekend Mandates", sub: "Unless over 40 hours" },
              { val: "$43,888", label: "Salary Threshold", sub: "Exempt status minimum" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-violet-400 mb-2">{val}</p>
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
            <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">
              Featured Reference
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Common 1.5x Overtime Rates
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Quickly see the time and a half conversion for standard hourly wages.
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200/60 shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-4 px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Regular Base Rate
                  </th>
                  <th className="py-4 px-6 font-black text-violet-700 text-[10px] uppercase tracking-widest">
                    Time and a Half (1.5x) Rate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {RATES_TABLE.map((row, i) => (
                  <tr key={row.reg} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"} hover:bg-violet-50/50 transition-colors`}>
                    <td className="py-4 px-6 font-bold text-slate-900">{row.reg} / hr</td>
                    <td className="py-4 px-6 font-black text-violet-600">{row.ot} / hr</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            HOW IT WORKS — HowTo schema content
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="howto-heading">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">How to Use</p>
            <h2 id="howto-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Calculating Time and a Half
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { n: "1", title: "Enter Regular Wage", body: "Input your standard hourly rate before overtime applies." },
              { n: "2", title: "Add Work Hours", body: "Type in your total hours for the week. The calculator separates regular vs overtime automatically." },
              { n: "3", title: "See the 1.5x Rate", body: "We instantly multiply your base rate by 1.5 to show your time and a half wage." },
              { n: "4", title: "Review Total Pay", body: "See a complete breakdown of regular earnings, overtime premium, and gross weekly pay." },
            ].map(({ n, title, body }) => (
              <div key={n} className="bg-white border border-slate-200/60 rounded-[2rem] p-6 shadow-sm relative pt-10">
                <span className="absolute -top-4 left-6 w-10 h-10 rounded-2xl bg-violet-600 text-white font-black flex items-center justify-center shadow-lg shadow-violet-600/30">
                  {n}
                </span>
                <h3 className="font-black text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
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
                <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
                  <Scale size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    The Complete Guide to Time and a Half (2026 Rules)
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">FLSA laws · Independent Contractors · Overtime Rules · Salary Exemptions</p>
                </div>
              </div>

              <div className="prose prose-slate prose-violet max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-violet-600 hover:prose-a:text-violet-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-violet-500 p-6 rounded-r-2xl">
                  "Time and a half" is the standard overtime pay rate mandated by the US federal government under the Fair Labor Standards Act (FLSA). It means that for every hour of overtime worked, you are paid your regular hourly rate ("time") plus an additional 50% of that rate ("and a half"). 
                </p>

                <h3>How to Calculate Time and a Half (Formula & Examples)</h3>
                <p>
                  Calculating time and a half is straightforward mathematics. You simply take your standard hourly wage and multiply it by <strong>1.5</strong>.
                </p>
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm my-6">
                  <p className="font-mono text-violet-700 font-bold mb-2">Formula:</p>
                  <code className="text-lg bg-slate-100 px-3 py-1 rounded">Regular Hourly Rate × 1.5 = Overtime Rate</code>
                </div>
                <p>
                  <strong>Example 1:</strong> If you make <strong>$18.00 per hour</strong>, your time and a half rate is $18.00 × 1.5 = <strong>$27.00 per hour</strong>.<br />
                  <strong>Example 2:</strong> If you make <strong>$25.00 per hour</strong>, your time and a half rate is $25.00 × 1.5 = <strong>$37.50 per hour</strong>.
                </p>
                <p>
                  If you want to estimate your total weekly paycheck after these overtime rules are applied and taxes are deducted, our comprehensive <Link href="/paycheck-calculator">Paycheck Calculator</Link> is highly recommended. It factors in federal, state, and FICA taxes on top of your overtime pay.
                </p>

                <h3>The 40-Hour Workweek Rule (FLSA Mandate)</h3>
                <p>
                  Under the FLSA, covered non-exempt employees must receive overtime pay for hours worked <strong>over 40 in a single workweek</strong>. A workweek is defined as a fixed and regularly recurring period of 168 hours (seven consecutive 24-hour periods). 
                </p>
                <p>
                  It's important to note that the FLSA does not average hours over two weeks. If you work 50 hours one week and 30 hours the next, you are entitled to 10 hours of overtime for the first week, even though you averaged 40 hours over the two weeks.
                </p>

                <div className="my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-amber-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-amber-900 font-bold mt-0 mb-2">No Weekend or Holiday Mandate</h4>
                    <p className="text-amber-800 text-sm m-0 leading-relaxed">
                      The FLSA <strong>does not</strong> require employers to pay time and a half for working on weekends, holidays, or regular days of rest, unless those hours push the total hours worked in the workweek past 40. Double time and holiday pay are strictly matters of agreement between an employer and employee. If you're looking for double-time calculations, you can use our <Link href="/overtime-calculator">Overtime Pay Calculator</Link>.
                    </p>
                  </div>
                </div>

                <h3>State by State Daily Overtime Exceptions</h3>
                <p>
                  While federal law only looks at the 40-hour weekly threshold, several states have stricter labor laws that benefit the employee by enforcing <strong>daily overtime rules</strong>. 
                </p>
                <ul>
                  <li><strong>California:</strong> Time and a half must be paid for hours worked over 8 in a single workday, and for the first 8 hours worked on the seventh consecutive day of work in a workweek. (They also mandate double time after 12 hours).</li>
                  <li><strong>Alaska & Nevada:</strong> Time and a half applies for any hours worked over 8 in a 24-hour period.</li>
                  <li><strong>Colorado:</strong> Time and a half is required after 12 hours in a single workday or shift.</li>
                </ul>
                <p>
                  Always check your local state department of labor for the most up-to-date daily overtime regulations.
                </p>

                <h3>Are Salaried Employees Entitled to 1.5x Pay? (Exempt vs Non-Exempt)</h3>
                <p>
                  A common myth is that salaried employees never get overtime. This is false. Your eligibility depends on whether you are classified as <strong>Exempt</strong> or <strong>Non-Exempt</strong>.
                </p>
                <p>
                  If you are a <strong>non-exempt salaried employee</strong>, you are legally entitled to time and a half for overtime. To calculate this, your employer determines your regular hourly rate by dividing your weekly salary by 40 (or the standard hours your salary covers), then multiplies that by 1.5. If you want to see what your exact hourly rate is based on your annual salary, try our <Link href="/hourly-to-salary-calculator">Hourly to Salary Calculator</Link>.
                </p>
                <p>
                  In 2026, the minimum salary threshold for exempt workers is strictly enforced. If your salary falls below this threshold (currently set at $43,888 annually, though subject to updates), you must be paid overtime, regardless of your job title or duties.
                </p>

                <h3>How Bonuses and Commissions Affect Your Overtime Rate</h3>
                <p>
                  Many workers are surprised to learn that non-discretionary bonuses (like performance bonuses, attendance bonuses, or shift differentials) must be included in their "regular rate of pay" before calculating time and a half. 
                </p>
                <p>
                  For example, if you earn $20/hr, work 50 hours, and get a $100 performance bonus that week, your base pay for the week isn't just $1,000 ($20 × 50). The $100 bonus increases your regular hourly rate for that specific week to $22/hr ($1,100 total / 50 hours). Your time and a half rate for the 10 overtime hours is calculated based on the new $22 rate, meaning your overtime rate is $33/hr, not $30/hr.
                </p>

                <h3>The Freelancer & Remote Worker Exception</h3>
                <p>
                  If you are an independent contractor, freelancer, or a foreign remote worker acting as a contractor (often using a W-8BEN form for tax purposes), FLSA rules <strong>do not apply to you</strong>. 
                </p>
                <p>
                  Time and a half only applies to traditional employer-employee relationships (W-2 employees) covered by US labor laws. As an independent contractor, you run your own business in the eyes of the law. Your overtime rate is dictated entirely by your contract. If you don't write an overtime clause into your freelance agreement, you aren't legally owed 1.5x pay.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-violet-900 to-indigo-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={16} className="text-violet-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-violet-300">
                      Did You Know?
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Double Time Pay</h3>
                  <p className="text-sm text-violet-100/80 leading-relaxed mb-6">
                    "Double Time" (2.0x your regular rate) is rarely required by federal law, but is mandated in places like California for hours worked beyond 12 in a single day.
                  </p>
                  <Link href="/overtime-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-xl text-sm font-bold w-full justify-center">
                    Calculate 2.0x Pay <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links - Replaces the old wide RelatedCalculators component */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Salary After Tax", href: "/salary-after-tax-calculator", icon: DollarSign },
                    { title: "Paycheck Calculator", href: "/paycheck-calculator", icon: Briefcase },
                    { title: "Hourly to Salary", href: "/hourly-to-salary-calculator", icon: Clock },
                    { title: "Overtime Calculator", href: "/overtime-calculator", icon: Calculator },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-violet-50 border border-transparent hover:border-violet-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-violet-200 group-hover:text-violet-700 transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-violet-700 text-sm">{item.title}</span>
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
                  title="Time and a Half Calculator 2026"
                  url="https://www.freeuscalculator.in/time-and-half-calculator"
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
          <RelatedCalculators currentTool="time-and-half-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Time and a Half Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-violet-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-violet-500 shrink-0 mt-0.5" />
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
          <p className="text-[10px] font-black uppercase tracking-widest text-violet-400 mb-4">
            100% Free · FLSA Compliant
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Ensure You're Paid Fairly
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
            Whether you're tracking your own hours or running payroll, our time and a half calculator gives you exact, reliable figures. 
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-violet-900/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/overtime-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              Try Overtime Calculator
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
              <Link key={l.href} href={l.href} className="text-slate-500 hover:text-violet-400 transition-colors text-xs font-medium">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-700">
            Time and a Half Calculator · FreeUSCalculator.in · 2026 Guidelines
          </p>
        </div>
      </nav>
    </main>
  );
}