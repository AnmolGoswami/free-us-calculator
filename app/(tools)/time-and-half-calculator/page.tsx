import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import SalaryCalculator from "../hourly-to-salary-calculator/SalaryCalculator";

export const dynamic = "force-dynamic";
// ✅ Clean SEO for /time-and-half
export const metadata: Metadata = {
  title: "Time and a Half Calculator (2026) – Overtime Pay Calculator (1.5x, Weekly & Hourly)",

  description:
    "Free time and a half calculator to compute overtime pay (1.5x). Calculate hourly, weekly, and yearly overtime earnings with taxes. Best overtime pay calculator for 2026.",

  alternates: {
    canonical: "https://freeuscalculator.in/time-and-a-half-calculator",
  },

  keywords: [
    // 🔥 PRIMARY (HIGH TRAFFIC)
    "time and a half calculator",
    "overtime pay calculator",
    "1.5x overtime calculator",
    "time and a half pay calculator",
    "overtime calculator 2026",

    // ⚡ LONG-TAIL (FAST RANKING)
    "how to calculate time and a half pay",
    "overtime pay after 40 hours calculator",
    "1.5 times hourly rate calculator",
    "overtime hourly rate calculator free",
    "weekly overtime pay calculator",

    // 💰 HIGH INTENT (MONEY KEYWORDS)
    "calculate overtime pay after tax",
    "real overtime earnings calculator",
    "employee overtime pay calculator",
    "salary overtime calculator 2026",

    // 🚀 ULTRA LOW COMPETITION (FAST TRAFFIC)
    "how much is time and a half for $20 an hour",
    "overtime pay per hour calculator",
    "time and a half formula calculator",
    "calculate overtime pay instantly online",

    // 🧠 SEMANTIC SEO (AI + GOOGLE)
    "labor law overtime calculation",
    "paycheck overtime estimator",
    "work hours overtime calculator",
    "payroll overtime calculator",
  ],

  openGraph: {
    title: "Time and a Half Calculator 2026 – Calculate Overtime Pay Instantly",
    description:
      "Calculate your overtime pay (1.5x) with our free calculator. Get accurate hourly, weekly, and yearly earnings instantly.",
    url: "https://freeuscalculator.in/time-and-a-half-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Overtime Pay Calculator (1.5x)",
    description:
      "Instantly calculate time and a half overtime pay, hourly rate, and earnings.",
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

export default function TimeAndHalfPage() {
  const faqs = [
    {
      q: "What is time and a half?",
      a: "Time and a half is a common overtime rate where you earn 1.5 times your base hourly pay for any hours worked beyond the standard 40-hour workweek.",
    },
    {
      q: "How is the 1.5x rate calculated?",
      a: "Simply multiply your standard hourly wage by 1.5. For example, a $30/hr base rate becomes $45/hr during overtime hours.",
    },
    {
      q: "Is time and a half mandatory in 2026?",
      a: "Under federal law (FLSA), most non-exempt employees must be paid 1.5x for hours worked over 40 in a single workweek.",
    },
  ];

  return (
    <div className="bg-[#F9FBFF] min-h-screen selection:bg-blue-100 selection:text-blue-900">
      
      {/* 🚀 HERO & CALCULATOR SECTION */}
      <section className="relative py-12 md:py-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-400/5 blur-[120px] pointer-events-none" />
        
        <CalculatorContainer
          title="Time and a Half Calculator 2026"
          description="Calculate your overtime earnings instantly. Built for accuracy with the latest 1.5× multipliers and tax considerations."
          category="Earnings"
          lastUpdated="April 2026"
        >
          <div className="w-full overflow-hidden break-all px-1">
            {/* Correct defaultMode for this page */}
            <SalaryCalculator defaultMode="time-and-half" />
          </div>
        </CalculatorContainer>
      </section>

      {/* 💎 FEATURE GRID */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {[
            { label: "1.5× Precise", icon: "✓" },
            { label: "Instant Results", icon: "⚡" },
            { label: "Tax Estimates", icon: "📊" },
            { label: "Global Ready", icon: "🌐" },
          ].map((item) => (
            <div
              key={item.label}
              className="group bg-white border border-slate-200/60 rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-blue-600 mb-1 font-bold">{item.icon}</div>
              <span className="text-xs md:text-sm font-semibold text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 📢 SHARE SECTION */}
      <section className="max-w-4xl mx-auto px-4 mb-12 flex justify-center">
        <div className="w-full bg-white rounded-2xl p-4 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-500 italic">Found this useful? Share with your team:</p>
          <ShareButtons
            title="Accurate 2026 Time and a Half Calculator"
            url="https://freeuscalculator.in/time-and-half"   // ← Clean URL
          />
        </div>
      </section>

      {/* 📝 EDUCATIONAL CONTENT */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600">
            <h2 className="text-3xl font-extrabold tracking-tight">How to Calculate Overtime (1.5x)</h2>
            <p>
              Calculating your extra income shouldn't be a guessing game. Our tool uses the 
              standard <strong>time and a half formula</strong> to provide instant transparency 
              into your paycheck.
            </p>

            <div className="my-8 p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white shadow-xl">
              <h4 className="text-blue-400 mt-0 font-mono tracking-widest uppercase text-xs">The Formula</h4>
              <p className="text-2xl md:text-3xl font-light mb-0">
                (Hourly Rate × 1.5) × Overtime Hours
              </p>
            </div>

            <h3 className="text-xl font-bold">Why Accuracy Matters in 2026</h3>
            <p>
              With shifting labor markets, ensuring you are compensated correctly for 1.5x pay is 
              essential for financial planning. Whether you're budgeting for a home or tracking 
              weekly savings, knowing your exact overtime take-home pay gives you the edge.
            </p>
          </div>

          {/* Side Ad */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24">
              
            </div>
          </aside>
        </div>
      </section>

      {/* ❓ FAQ */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Expert Overtime Insights" faqs={faqs} />
        </div>
      </section>

      {/* 🔗 RELATED TOOLS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Explore More Financial Tools</h2>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <RelatedCalculators currentTool="time-and-half" />
      </section>
    </div>
  );
}