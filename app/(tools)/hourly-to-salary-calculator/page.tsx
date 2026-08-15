import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import HourlyToSalaryCalculator from "@/components/calculators/HourlyToSalaryCalculator";
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
  MapPin
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hourly to Salary Calculator 2026 – Remote Worker & Freelance Pay",
  description:
    "Convert your hourly rate to an annual salary instantly. Designed for global freelancers, digital nomads, and remote workers negotiating with US companies.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/hourly-to-salary-calculator",
  },
  keywords: [
    "hourly to salary calculator",
    "convert hourly to salary",
    "freelance hourly rate to salary",
    "w8ben hourly rate",
    "foreign worker us salary conversion",
    "hourly pay to yearly salary",
    "how much is $30 an hour annually",
    "remote worker salary calculator"
  ],
  openGraph: {
    title: "Hourly to Salary Calculator 2026 – Remote & Freelance Pay",
    description:
      "Instantly calculate your yearly, monthly, and weekly income based on your hourly rate. Perfect for global contractors.",
    url: "https://www.freeuscalculator.in/hourly-to-salary-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hourly to Salary Calculator – Global Remote Pay",
    description: "Convert your hourly rate to an annual salary instantly.",
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
  name: "Hourly to Salary Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Converts hourly wages into equivalent annual salaries for independent contractors and remote workers.",
  url: "https://www.freeuscalculator.in/hourly-to-salary-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Salary Calculators", item: "https://www.freeuscalculator.in/salary-calculators" },
    { "@type": "ListItem", position: 3, name: "Hourly to Salary", item: "https://www.freeuscalculator.in/hourly-to-salary-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "How do I calculate annual salary from an hourly rate?",
    a: "The standard formula assumes 40 hours a week and 52 weeks a year, totaling 2,080 working hours. You simply multiply your hourly rate by 2,080. For example, $25/hr × 2,080 = $52,000 a year."
  },
  {
    q: "How much is $30 an hour annually?",
    a: "Working a standard 40-hour week for 52 weeks a year, $30 an hour equates to an annual salary of $62,400 before taxes."
  },
  {
    q: "As a foreign contractor (W-8BEN), do I work 2,080 hours?",
    a: "Not necessarily. Independent contractors often don't get paid time off (PTO) or holidays. If you take 4 weeks off unpaid, you only work 1,920 hours a year. At $30/hr, your actual gross income would be $57,600, not $62,400."
  },
  {
    q: "How much is $50 an hour annually?",
    a: "At full-time hours (2,080 hours/year), $50 an hour is exactly $104,000 a year."
  },
  {
    q: "Should I charge more as a freelancer compared to a salaried employee?",
    a: "Yes. Freelancers and international contractors should typically charge 20% to 40% more than a salaried equivalent. This premium covers the lack of benefits, health insurance, paid leave, and self-employment taxes you are responsible for."
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
const WAGE_TABLE = [
  { hourly: "$15.00", annual: "$31,200", monthly: "$2,600", weekly: "$600" },
  { hourly: "$20.00", annual: "$41,600", monthly: "$3,466", weekly: "$800" },
  { hourly: "$25.00", annual: "$52,000", monthly: "$4,333", weekly: "$1,000" },
  { hourly: "$30.00", annual: "$62,400", monthly: "$5,200", weekly: "$1,200" },
  { hourly: "$40.00", annual: "$83,200", monthly: "$6,933", weekly: "$1,600" },
  { hourly: "$50.00", annual: "$104,000", monthly: "$8,666", weekly: "$2,000" },
  { hourly: "$75.00", annual: "$156,000", monthly: "$13,000", weekly: "$3,000" },
  { hourly: "$100.00", annual: "$208,000", monthly: "$17,333", weekly: "$4,000" },
];

export default function HourlyToSalaryPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/salary-calculators" className="hover:text-blue-600 transition-colors">Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Hourly to Salary</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Globe size={12} className="text-blue-600" />
              Global Remote & Freelance Pay
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Hourly to Salary{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Instantly convert your hourly contracting rate to an equivalent annual salary. Perfect for global digital nomads negotiating with US companies.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Zap, label: "Instant Conversion" },
                { icon: ShieldCheck, label: "W-8BEN Ready" },
                { icon: RefreshCw, label: "PTO Adjustments" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-blue-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Hourly to Salary Calculator"
              description="Calculate your annual income from your hourly wage."
              category="Finance"
              lastUpdated="2026"
            >
              <HourlyToSalaryCalculator />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          2026 FREELANCE FACTS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10 sm:py-12 border-y border-slate-800 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8">
            Global Contracting Benchmarks (2026)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "2,080", label: "Standard Work Hours", sub: "40 hrs/wk for 52 weeks" },
              { val: "+30%", label: "Freelance Premium", sub: "Suggested markup over W-2" },
              { val: "W-8BEN", label: "Foreign Tax Form", sub: "For non-US remote workers" },
              { val: "Zero", label: "US Payroll Taxes", sub: "If you live outside the US" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-blue-400 mb-2">{val}</p>
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
            <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">
              Featured Reference
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Hourly to Salary Quick Conversion
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
                    Hourly Rate
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-blue-700 text-[10px] uppercase tracking-widest">
                    Annual Salary
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest hidden sm:table-cell">
                    Monthly
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest hidden sm:table-cell">
                    Weekly
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {WAGE_TABLE.map((row, i) => (
                  <tr key={row.hourly} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"} hover:bg-blue-50/50 transition-colors`}>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">{row.hourly} / hr</td>
                    <td className="py-4 px-4 sm:px-6 font-black text-blue-600">{row.annual}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500 hidden sm:table-cell">{row.monthly}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500 hidden sm:table-cell">{row.weekly}</td>
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
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Negotiating Hourly Rates as a Global Contractor
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">W-8BEN · Independent Contracting · Salary Conversion</p>
                </div>
              </div>

              <div className="prose prose-slate prose-blue max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                  If you live outside the US and have secured a remote role with an American company, you'll likely be hired as an independent contractor (signing a W-8BEN form) rather than a W-2 employee. This means understanding how to convert an offered US annual salary into a fair hourly rate is critical.
                </p>

                <h3>How to Use the Hourly to Salary Calculator</h3>
                <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
                  <img 
                    src="/hourly-to-salary-calculator-screenshot.jpg" 
                    alt="Hourly to Salary Calculator Interface" 
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <p>
                  Simply enter your <strong>Hourly Rate</strong>, the number of <strong>Hours per Week</strong> you plan to work, and the total <strong>Weeks per Year</strong>. The calculator instantly breaks down your equivalent gross Annual Salary, Monthly Income, and Weekly Income so you can negotiate the absolute best contract.
                </p>

                <h3>Why US Companies Hire Global Contractors</h3>
                <p>
                  US tech startups and agencies increasingly hire global talent. For the company, hiring an international contractor means they completely avoid US payroll taxes (Social Security and Medicare), health insurance premiums, 401(k) matching, and complex HR compliance. 
                </p>
                <p>
                  Because they save thousands of dollars per employee, you possess significant leverage to negotiate a higher base hourly rate. Never accept a direct mathematical conversion (e.g., dividing $100,000 by 2,080 hours) without adding a freelance premium. 
                </p>

                <h3>The Freelance Premium: Charge 30% More</h3>
                <p>
                  As an independent contractor, you are running your own business. You do not get paid time off (PTO), sick leave, or holiday pay. If you take two weeks off for a vacation, you earn $0. 
                </p>
                <p>
                  To accurately match the lifestyle and financial security of a $100,000 salaried W-2 employee, a contractor must charge roughly 30% more. This means if you want a true $100,000 equivalent lifestyle, you shouldn't charge $48/hr; you should aim for closer to $65/hr. If you want to do the exact inverse calculation, try our <Link href="/salary-to-hourly-calculator">Salary to Hourly Calculator</Link>.
                </p>

                <div className="my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-amber-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-amber-900 font-bold mt-0 mb-2">The W-8BEN Tax Advantage</h4>
                    <p className="text-amber-800 text-sm m-0 leading-relaxed">
                      If you are a non-US person performing services entirely outside the United States, you are generally not subject to US federal income tax or FICA withholding on that income. You simply submit a W-8BEN to your employer. You receive your gross pay completely untouched, though you must pay your own local income taxes in your home country.
                    </p>
                  </div>
                </div>

                <h3>Calculating Unpaid Time Off</h3>
                <p>
                  Our calculator allows you to adjust your "Hours per Week" and "Days per Week". This is crucial for freelancers. If you plan to take 4 weeks of vacation a year, you are only working 48 weeks. 
                </p>
                <p>
                  <code>48 weeks × 40 hours = 1,920 hours</code>
                </p>
                <p>
                  At $50/hr, working 1,920 hours yields an annual gross income of $96,000, which is an $8,000 difference from the standard 2,080 hour year. Always calculate your annual projection based on the *actual* hours you intend to bill.
                </p>

                <h3>What About Overtime?</h3>
                <p>
                  International contractors are strictly exempt from US FLSA overtime laws. You do not legally get <Link href="/time-and-half-calculator">Time and a Half</Link> unless you explicitly negotiate it into your contract. If you expect to work more than 40 hours, ensure your contract specifies a higher billing rate for overtime, or use our <Link href="/overtime-calculator">Overtime Calculator</Link> to propose a retainer fee that covers excess hours.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={16} className="text-blue-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-blue-300">
                      Tax Tip
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Living in the US?</h3>
                  <p className="text-sm text-blue-100/80 leading-relaxed mb-6">
                    If you live inside the US, your hourly freelance income is subject to a 15.3% Self-Employment Tax on top of income tax.
                  </p>
                  <Link href="/self-employment-tax-calculator-usa" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Calculate SE Tax <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Salary to Hourly", href: "/salary-to-hourly-calculator", icon: Clock },
                    { title: "Salary After Tax", href: "/salary-after-tax-calculator", icon: DollarSign },
                    { title: "Paycheck Calculator", href: "/paycheck-calculator", icon: Briefcase },
                    { title: "Time and a Half", href: "/time-and-half-calculator", icon: Calculator },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-blue-200 group-hover:text-blue-700 transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-blue-700 text-sm">{item.title}</span>
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
                  title="Hourly to Salary Calculator 2026"
                  url="https://www.freeuscalculator.in/hourly-to-salary-calculator"
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
          <RelatedCalculators currentTool="hourly-to-salary-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Hourly Wage Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-blue-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" />
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
          <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4">
            100% Free · Accurate Math
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Negotiate With Confidence
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
            Whether you're signing a new US contract or moving from full-time to freelance, use our tool to request the exact hourly rate you deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-blue-900/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/salary-to-hourly-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              Convert Salary to Hourly
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
              { href: "/salary-to-hourly-calculator",       label: "Salary to Hourly"             },
              { href: "/overtime-calculator",               label: "Overtime Pay Calculator"      },
              { href: "/self-employment-tax-calculator-usa",label: "Self-Employment Tax"          },
              { href: "/savings-calculator",                label: "Savings Calculator"           },
              { href: "/rent-affordability-calculator",     label: "Rent Affordability"           },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-500 hover:text-blue-400 transition-colors text-xs font-medium">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-700">
            Hourly to Salary Calculator · FreeUSCalculator.in · 2026 Guidelines
          </p>
        </div>
      </nav>
    </main>
  );
}