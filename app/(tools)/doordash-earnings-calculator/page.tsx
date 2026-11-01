import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import DoorDashCalculatorClient from "./DoorDashCalculatorClient";
import {
  Bike,
  BookOpen,
  ChevronRight,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Fuel,
  TrendingDown,
  Wrench,
  AlertCircle
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "DoorDash Earnings Calculator 2026: Real Take-Home Pay After Expenses",
  description:
    "Free DoorDash driver calculator using 2026 IRS 72.5¢ mileage rate. Calculate your exact net profit after gas, maintenance, depreciation, and taxes.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/doordash-earnings-calculator",
  },
  keywords: [
    "doordash earnings calculator",
    "how much do dashers make",
    "doordash pay calculator",
    "doordash tax calculator",
    "IRS mileage rate 2026 doordash",
    "is doordash worth it",
    "gig economy tax calculator",
    "doordash gas calculator"
  ],
  openGraph: {
    title: "DoorDash Earnings Calculator 2026 – Free Take-Home Estimator",
    description:
      "Find out exactly how much you're really making on DoorDash after fuel, maintenance, depreciation, and 15.3% SE tax.",
    url: "https://www.freeuscalculator.in/doordash-earnings-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DoorDash Earnings Calculator (2026)",
    description: "Calculate your true DoorDash profit after the 72.5¢/mile IRS deduction.",
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
  name: "DoorDash Earnings Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates net profit for DoorDash drivers by subtracting fuel, maintenance, depreciation (via IRS standard mileage rate), and self-employment taxes from gross revenue.",
  url: "https://www.freeuscalculator.in/doordash-earnings-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Earning Calculators", item: "https://www.freeuscalculator.in/earning-calculators" },
    { "@type": "ListItem", position: 3, name: "DoorDash Earnings Calculator", item: "https://www.freeuscalculator.in/doordash-earnings-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "How much do DoorDash drivers make after gas and taxes in 2026?",
    a: "Based on Gridwise data, the median gross pay is $11.26 per hour before expenses. After fuel, depreciation, and taxes, most drivers net $7–$12 per hour in spendable income. Strategic drivers filtering orders above $2/mile can consistently net $14–$18 per hour."
  },
  {
    q: "What is the 2026 IRS mileage rate for DoorDash drivers?",
    a: "The IRS standard mileage rate for 2026 is $0.725 per mile. This rate covers fuel, maintenance, insurance, and vehicle depreciation in a single per-mile deduction."
  },
  {
    q: "Does DoorDash take a percentage of driver pay?",
    a: "No. Unlike rideshare platforms where Uber or Lyft deduct a percentage from every fare, DoorDash does not take a commission from driver earnings. You receive 100% of base pay and 100% of customer tips."
  },
  {
    q: "What self-employment tax do DoorDash drivers pay in 2026?",
    a: "DoorDash drivers pay 15.3% self-employment tax (12.4% for Social Security and 2.9% for Medicare) calculated on 92.35% of net profit."
  },
  {
    q: "What miles can I deduct as a DoorDash driver?",
    a: "Deductible miles include: the drive to your first pickup once an order is accepted, all restaurant-to-customer legs, and miles between orders while actively logged in. The drive from home before accepting an order is not deductible."
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
const DD_DATA_TABLE = [
  { metric: "Median gross hourly pay", value: "$11.26/hr" },
  { metric: "Average tip per delivery", value: "$3.66" },
  { metric: "Tips as % of total order pay", value: "~49%" },
  { metric: "Average base pay per order", value: "$3.80" },
  { metric: "Orders completed per hour (median)", value: "1.5" },
  { metric: "Net pay — typical driver", value: "$7–$12/hr" },
  { metric: "Net pay — strategic driver (peak hours)", value: "$14–$18/hr" },
];

export default function DoordashEarningsCalculatorPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-red-200 selection:text-red-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-red-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/earning-calculators" className="hover:text-red-600 transition-colors">Earning Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">DoorDash Earnings</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Bike size={12} className="text-red-600" />
              2026 Dash Guidelines
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              DoorDash Pay{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Find your real hourly pay. We subtract your gas, hidden vehicle depreciation, and SE taxes to give you your true net profit per dash.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Fuel, label: "Gas & Wear" },
                { icon: TrendingDown, label: "Depreciation" },
                { icon: DollarSign, label: "Net Profit" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-red-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="DoorDash Earnings Calculator"
              description="Calculate your true take-home pay after dash expenses."
              category="Gig Economy"
              lastUpdated="2026"
            >
              <DoorDashCalculatorClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          2026 TAX FACTS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-red-900 py-10 sm:py-12 border-y border-red-950 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-red-300 mb-8">
            2026 Dasher Baselines
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "72.5¢", label: "IRS Mileage Rate", sub: "Standard deduction per mile" },
              { val: "15.3%", label: "SE Tax Rate", sub: "Required for independent contractors" },
              { val: "1.5", label: "Orders / Hour", sub: "National median average" },
              { val: "$1.50", label: "Per Mile Floor", sub: "Target $1.50+ per mile" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-white mb-2">{val}</p>
                <p className="text-sm font-bold text-red-100 mb-1">{label}</p>
                <p className="text-[11px] text-red-300/80 leading-tight">{sub}</p>
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
            <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">
              Featured Reference
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              National DoorDash Averages (2026)
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Based on active data tracking from over 115,000 Dashers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200/60 shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Metric
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest text-right">
                    National Figure
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {DD_DATA_TABLE.map((row, i) => (
                  <tr key={row.metric} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"} hover:bg-red-50/50 transition-colors`}>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">{row.metric}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500 text-right">{row.value}</td>
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
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    True Hourly Pay After Gas, Expenses & Taxes
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">The Hidden Costs of Dashing</p>
                </div>
              </div>

              <div className="prose prose-slate prose-red max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-red-600 hover:prose-a:text-red-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                  The number DoorDash shows in your app is not what you keep. After fuel, vehicle depreciation, maintenance, and self-employment tax, the median Dasher nets just $7–$12 per hour — a far cry from the $18–$25 DoorDash advertises.
                </p>

                <h3>How to Use the DoorDash Earnings Calculator</h3>
                <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
                  <img 
                    src="/doordash-earnings-calculator-screenshot.jpg" 
                    alt="DoorDash Earnings Calculator Interface" 
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <p>
                  To get an accurate picture of your take-home pay, simply enter your <strong>Base Pay per Delivery</strong>, <strong>Peak Pay</strong>, and average <strong>Tip per Delivery</strong>. Then, input the number of deliveries you completed and your total active hours. The calculator will instantly show your gross Total Earnings and your true Hourly Rate.
                </p>

                <h3>How DoorDash Pay Is Structured</h3>
                <p>
                  Every completed DoorDash order pays you from three sources: Base Pay, Promotions, and Tips.
                </p>
                <ul>
                  <li><strong>Base pay</strong> is the guaranteed minimum ($2 to $10+) depending on distance and desirability.</li>
                  <li><strong>Tips</strong> make up roughly 49% of total pay and you keep 100% of them.</li>
                  <li><strong>Peak Pay</strong> stacks on top during busy periods.</li>
                </ul>
                <p>
                  Unlike Uber or Lyft, DoorDash does not take a percentage cut of your pay. The costs that shrink your income come entirely from your vehicle and taxes.
                </p>

                <div className="my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-amber-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-amber-900 font-bold mt-0 mb-2">The Depreciation Trap</h4>
                    <p className="text-amber-800 text-sm m-0 leading-relaxed">
                      High-mileage delivery driving destroys vehicle resale value. Spreading the value loss of your car over 52 weeks reveals a silent drain of $48–$87 per week. Don't wait until you sell the car to realize this cost.
                    </p>
                  </div>
                </div>

                <h3>The 2026 IRS Mileage Deduction</h3>
                <p>
                  The IRS standard mileage rate for 2026 is **$0.725 per mile**. It covers fuel, oil, tires, insurance, and vehicle depreciation in one flat deduction on Schedule C. Tracking 15,000 miles saves you roughly $2,800 in real taxes.
                </p>
                <p>
                  If you rely purely on DoorDash's in-app mileage estimates, you are losing money. DoorDash only logs miles while on an active delivery. However, the IRS allows you to deduct miles driven to the pickup spot and between orders while waiting for pings. Always use a third-party app like Stride or Everlance.
                </p>

                <h3>Self-Employment Tax on DoorDash</h3>
                <p>
                  As a Dasher, you pay the full 15.3% Self-Employment Tax (Social Security and Medicare) on your net profit. This catches many first-year Dashers off guard when they file their taxes in April. You should check out our <Link href="/self-employment-tax-calculator-usa">Self Employment Tax Calculator</Link> and <Link href="/1099-tax-calculator">1099 Tax Calculator</Link> for an exact breakdown of your take-home pay and quarterly tax vouchers.
                </p>

                <h3>The Best Strategy for 2026</h3>
                <p>
                  To push your net earnings from $9/hr to $18/hr, you must do three things consistently: 1) Filter orders strictly (aim for $1.50 - $2.00 per mile), 2) Work Peak Windows (Friday and Sunday dinners are structurally better pay), and 3) Multi-App with Uber Eats during slow periods.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-red-600 to-rose-900 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Bike size={16} className="text-red-200" />
                    <span className="text-xs font-black uppercase tracking-widest text-red-200">
                      Multi-Apping
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Compare to Uber</h3>
                  <p className="text-sm text-red-100/90 leading-relaxed mb-6">
                    Run the exact same hours and miles through our Uber Earnings calculator to see which platform is paying out more in your city.
                  </p>
                  <Link href="/uber-earnings-calculator" className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-red-50 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Uber Calculator <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-red-400/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Uber Calculator", href: "/uber-earnings-calculator", icon: Bike },
                    { title: "Self Employment Tax", href: "/self-employment-tax-calculator-usa", icon: DollarSign },
                    { title: "Hourly to Salary", href: "/hourly-to-salary-calculator", icon: BookOpen },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 border border-transparent hover:border-red-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-red-700 text-sm">{item.title}</span>
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
                  title="DoorDash Earnings Calculator 2026"
                  url="https://www.freeuscalculator.in/doordash-earnings-calculator"
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
          <RelatedCalculators currentTool="doordash-earnings-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              DoorDash Driver Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-red-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-red-500 shrink-0 mt-0.5" />
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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-red-900 to-rose-950 text-white text-center border-t border-red-800">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-red-300 mb-4">
            Free Gig Economy Tool
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Stop Guessing Your Pay
          </h2>
          <p className="text-red-200 text-sm sm:text-base mb-10 leading-relaxed">
            Every mile you drive without tracking costs you money. Start calculating your true net profit today so you can filter out losing orders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-red-50 text-red-700 font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-red-950/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/self-employment-tax-calculator-usa" className="inline-flex items-center gap-2 bg-red-800 hover:bg-red-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              SE Tax Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SEO FOOTER NAV
      ════════════════════════════════════════════════════════════════════ */}
      <nav aria-label="Related calculators navigation" className="bg-red-950 py-10 border-t border-red-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6">
            {[
              { href: "/1099-tax-calculator",               label: "1099 Tax Calculator"          },
              { href: "/uber-earnings-calculator",          label: "Uber Calculator"              },
              { href: "/self-employment-tax-calculator-usa",label: "Self-Employment Tax"          },
              { href: "/paycheck-calculator",               label: "Paycheck Calculator"          },
              { href: "/salary-after-tax-calculator",       label: "Salary After Tax"             },
              { href: "/hourly-to-salary-calculator",       label: "Hourly to Salary"             },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-red-300 hover:text-white transition-colors text-xs font-medium">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-red-700">
            DoorDash Pay Calculator · FreeUSCalculator.in · 2026 Guidelines
          </p>
        </div>
      </nav>
    </main>
  );
}