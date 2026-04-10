import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import SalaryCalculator from "../hourly-to-salary-calculator/SalaryCalculator";
// ← Clean import

// ✅ SEO Optimized for /salary-to-hourly
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Salary to Hourly Calculator (2026) – Convert Annual, Monthly & Weekly Pay to Hourly Rate",

  description:
    "Free salary to hourly calculator to convert annual salary into hourly wage. See weekly, biweekly, and monthly breakdowns with accurate 2026 estimates and tax calculations.",

  alternates: {
    canonical: "https://freeuscalculator.com/salary-to-hourly-calculator",
  },

  keywords: [
    // 🔥 PRIMARY (HIGH TRAFFIC)
    "salary to hourly calculator",
    "annual salary to hourly wage",
    "convert salary to hourly",
    "hourly rate calculator from salary",
    "salary to hourly 2026",

    // ⚡ LONG-TAIL (FAST RANKING)
    "how to convert salary to hourly wage",
    "salary to hourly calculator after tax",
    "yearly salary to hourly pay calculator",
    "convert yearly income to hourly rate",
    "salary breakdown per hour calculator",

    // 💰 HIGH INTENT (MONEY KEYWORDS)
    "real hourly wage calculator",
    "net hourly pay from salary",
    "salary vs hourly calculator",
    "income per hour calculator",
    "true hourly rate calculator",

    // 🚀 ULTRA LOW COMPETITION (FAST TRAFFIC)
    "what is $60000 a year hourly",
    "70000 salary to hourly wage",
    "50000 per year hourly rate calculator",
    "how much is 80000 salary per hour",
    "convert salary to hourly instantly",

    // 🧠 SEMANTIC SEO (AI + GOOGLE SGE)
    "paycheck calculator hourly conversion",
    "income breakdown calculator",
    "work hours salary calculator",
    "monthly to hourly wage calculator",
    "weekly salary to hourly rate",

    // 📈 BROAD TRAFFIC EXPANSION
    "paycheck calculator",
    "salary calculator",
    "hourly wage calculator",
    "income calculator",
    "earnings calculator",

    // 🎯 NICHE TARGETING (EASY WINS)
    "part time salary to hourly calculator",
    "full time salary hourly conversion",
    "contractor hourly rate calculator",
    "freelancer hourly rate from salary",
    "remote job hourly pay calculator",

    // 🔥 LONG-TAIL CLUSTER DOMINATION
    "how to calculate hourly rate from annual salary formula",
    "best salary to hourly calculator 2026 free online",
    "convert salary into hourly wage with taxes and deductions",
    "accurate salary to hourly breakdown weekly monthly yearly",
    "how much do i earn per hour from my salary",
  ],

  openGraph: {
    title: "Salary to Hourly Calculator 2026 – Convert Pay Instantly",
    description:
      "Convert your annual salary into hourly wage instantly. Includes weekly, monthly, and tax-adjusted calculations.",
    url: "https://freeuscalculator.com/salary-to-hourly-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Salary to Hourly Calculator (2026)",
    description:
      "Find your real hourly wage from salary with accurate breakdowns.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function SalaryToHourlyPage(
  {
  params,
}: {
  params?: Promise<any>; // optional, satisfies validator
}
  
) {
  const faqs = [
    {
      q: "How do I convert annual salary to hourly?",
      a: "Divide your gross annual salary by your total yearly working hours. For a standard 40-hour workweek, this is usually 2,080 hours (40 hours × 52 weeks).",
    },
    {
      q: "Does this calculator account for taxes?",
      a: "Yes, you can toggle the tax estimation feature to see your net 'take-home' hourly rate versus your gross hourly rate.",
    },
    {
      q: "What if I have a custom work schedule?",
      a: "Our 2026 tool allows you to adjust weekly hours to get a precise hourly breakdown based on your actual time on the clock.",
    },
  ];

  return (
    <div className="bg-[#FBFCFE] min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* 🚀 HERO & CALCULATOR SECTION */}
      <section className="relative py-12 md:py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-indigo-500/5 blur-[100px] pointer-events-none" />
        
        <CalculatorContainer
          title="Salary to Hourly Calculator 2026"
          description="Transform your annual salary into a precise hourly breakdown. Designed for professionals comparing offers and planning budgets."
          category="Earnings"
          lastUpdated="April 2026"
        >
          <div className="w-full overflow-hidden break-words px-1">
            <SalaryCalculator defaultMode="salary-to-hourly" />
          </div>
        </CalculatorContainer>
      </section>

      {/* 💎 CONVERSION TRUST BAR */}
      <section className="max-w-6xl mx-auto px-4 mb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[
            { label: "Bank-Grade Accuracy", icon: "💎" },
            { label: "Global Currency", icon: "🌍" },
            { label: "Tax-Adjusted", icon: "📉" },
            { label: "100% Free", icon: "✨" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-slate-200/50 rounded-2xl py-5 px-2 text-center shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-xl mb-1">{item.icon}</div>
              <span className="text-xs md:text-sm font-bold text-slate-800 block">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 📢 SOCIAL PROOF & SHARING */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold text-slate-600">Share this conversion tool:</p>
          <ShareButtons
            title="Salary to Hourly Calculator 2026"
            url="https://freeuscalculator.com/salary-to-hourly"   // ← Clean URL
          />
        </div>
      </section>

      {/* 📝 SEO POWER CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="flex-1 prose prose-slate max-w-none prose-headings:font-black prose-p:leading-relaxed">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">Convert Salary to Hourly Wage</h2>
            <p className="text-lg text-slate-600">
              Understanding your time's value is the first step toward financial freedom. 
              Our 2026 salary converter breaks down your annual earnings into an 
              <strong> easy-to-understand hourly rate</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="p-6 bg-white border border-indigo-100 rounded-3xl shadow-sm">
                <h3 className="text-indigo-600 font-bold mb-2">How It Works</h3>
                <p className="text-sm text-slate-500">The calculator divides your gross pay by total work hours (default 2,080/yr), then applies 2026 tax logic if enabled.</p>
              </div>
              <div className="p-6 bg-white border border-teal-100 rounded-3xl shadow-sm">
                <h3 className="text-teal-600 font-bold mb-2">Why It Matters</h3>
                <p className="text-sm text-slate-500">Essential for comparing contract work vs. full-time roles and evaluating overtime profitability.</p>
              </div>
            </div>

            <h3 className="text-2xl">Key Benefits of Knowing Your Hourly Rate</h3>
            <ul className="space-y-3 list-none pl-0">
              {[
                "Negotiate better raises with data-backed rates",
                "Calculate the true ROI of your commute and prep time",
                "Evaluate freelance side-gigs effectively",
                "Budget monthly expenses with net-pay accuracy"
              ].map((benefit) => (
                <li key={benefit} className="flex gap-3 items-start text-slate-700">
                  <span className="text-indigo-500 mt-1">✔</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Sticky Ad Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 sticky top-24">
            <div className="bg-slate-100 rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center border border-slate-200">
              
            </div>
          </aside>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Salary & Wage FAQs" faqs={faqs} />
        </div>
      </section>

      {/* 🔗 RELATED TOOLS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black text-slate-900">Recommended Tools</h2>
          <p className="text-slate-500">Explore our other accurate 2026 financial calculators.</p>
        </div>
        <RelatedCalculators currentTool="salary-to-hourly" />
      </section>
    </div>
  );
}