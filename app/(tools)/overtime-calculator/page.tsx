import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";

import SalaryCalculator from "../hourly-to-salary-calculator/SalaryCalculator";


export const dynamic = "force-dynamic";

// ✅ SEO Optimized for /overtime
export const metadata: Metadata = {
  title: "Overtime Pay Calculator 2026 | Time and a Half (1.5x) & Double Time Pay",
  description:
    "Free overtime pay calculator for 2026. Calculate time and a half (1.5x), double time (2x), and total overtime earnings instantly. Includes weekly, monthly, yearly pay breakdowns and tax estimates for accurate take-home pay.",

  alternates: {
    canonical: "https://freeuscalculator.com/overtime-pay-calculator",
  },

  keywords: [
    // PRIMARY HIGH-VOLUME KEYWORDS
    "overtime pay calculator",
    "overtime calculator",
    "time and a half calculator",
    "1.5x overtime calculator",
    "double time calculator",

    // HIGH-INTENT LONG-TAIL (LOW COMPETITION → FAST RANK)
    "how to calculate overtime pay",
    "overtime pay formula 1.5",
    "overtime pay calculator after tax",
    "weekly overtime pay calculator",
    "hourly overtime pay calculator",
    "overtime pay calculator USA 2026",

    // VARIATIONS (GOOGLE LOVES THIS)
    "time and half pay calculator",
    "1.5 times hourly rate calculator",
    "double pay overtime calculator",
    "extra hours pay calculator",
    "overtime wages calculator",

    // FEATURE-BASED KEYWORDS (BOOST CTR)
    "overtime calculator with taxes",
    "net overtime pay calculator",
    "gross vs net overtime pay",
    "overtime pay breakdown calculator",

    // USER QUESTIONS (RANK IN FEATURED SNIPPETS)
    "how much overtime pay will i get",
    "what is time and a half pay",
    "how to calculate double time pay",
    "overtime pay per hour formula",

    // NICHE + PROGRAMMATIC TRAFFIC
    "construction overtime calculator",
    "nurse overtime pay calculator",
    "truck driver overtime calculator",
    "gig worker overtime calculator",

    // YEAR + TREND KEYWORDS
    "overtime pay calculator 2026",
    "latest overtime pay rules USA",
    "federal overtime calculator",

    // SEMANTIC SEO BOOST (VERY IMPORTANT)
    "extra pay calculator",
    "salary overtime calculator",
    "paycheck overtime estimator",
    "earnings with overtime calculator"
  ],
};

export default function OvertimePage() {
  const faqs = [
    {
      q: "How is overtime pay calculated?",
      a: "Standard overtime is 1.5× your base hourly rate for hours worked beyond 40 per week. Some employers offer 2× (Double Time) for holidays or excessive hours.",
    },
    {
      q: "Can I adjust the overtime multiplier?",
      a: "Yes. Our 2026 tool allows you to toggle between 1.5x, 2.0x, or a custom rate to match your specific union or company policy.",
    },
    {
      q: "Are overtime earnings taxed differently?",
      a: "While overtime is taxed as regular income, it can push you into a higher tax bracket. Our tool helps you estimate the net take-home pay.",
    },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen selection:bg-orange-100 selection:text-orange-900">
      
      {/* 🚀 PREMIUM HERO & CALCULATOR */}
      <section className="relative py-12 md:py-24 px-4 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-orange-400/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-5%] w-72 h-72 bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />
        
        <CalculatorContainer
          title="Overtime Pay Calculator 2026"
          description="Precision tool for 1.5× and 2.0× pay. Get an instant breakdown of your gross and net earnings including all extra hours worked."
          category="Earnings"
          lastUpdated="April 2026"
        >
          <div className="w-full overflow-hidden break-words px-1">
            <SalaryCalculator defaultMode="overtime" />
          </div>
        </CalculatorContainer>
      </section>

      {/* 💎 TRUST TILES */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "1.5× & 2.0× Ready", icon: "📈" },
            { label: "Custom Rates", icon: "⚙️" },
            { label: "Tax Estimates", icon: "🏦" },
            { label: "Instant Sync", icon: "🔄" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-slate-200/60 rounded-3xl py-6 px-4 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <span className="text-xs md:text-sm font-bold text-slate-800 tracking-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 📢 SHARE SECTION */}
      <section className="max-w-4xl mx-auto px-4 mb-14">
        <div className="bg-white rounded-[2rem] p-5 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-slate-900">Maximize your earnings</p>
            <p className="text-xs text-slate-500">Share this tool with your coworkers.</p>
          </div>
          <ShareButtons
            title="Professional Overtime Calculator 2026"
            url="https://freeuscalculator.com/overtime"   // ← Clean URL
          />
        </div>
      </section>

      {/* 📝 RICH SEO CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900">How Overtime Pay is Calculated</h2>
            <p className="text-lg text-slate-600">
              In 2026, understanding your overtime structure is critical. Whether you're in tech, healthcare, 
              or manufacturing, extra hours should mean significant extra income.
            </p>

            <div className="my-10 grid sm:grid-cols-2 gap-4 not-prose">
              <div className="p-6 bg-orange-50 border border-orange-100 rounded-3xl">
                <h4 className="text-orange-700 font-bold mb-1">Time & Half (1.5x)</h4>
                <p className="text-sm text-orange-600">The federal standard for hours exceeding 40 in a workweek.</p>
              </div>
              <div className="p-6 bg-blue-50 border border-blue-100 rounded-3xl">
                <h4 className="text-blue-700 font-bold mb-1">Double Time (2.0x)</h4>
                <p className="text-sm text-blue-600">Common for holiday pay or hours exceeding 12 in a single day.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold">Why Use Our Overtime Tool?</h3>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Accurately predict monthly income jumps from extra shifts",
                "Ensure your employer's payroll matches your calculations",
                "Understand how overtime affects your tax bracket",
                "Support for complex 2026 labor laws and custom multipliers"
              ].map((point) => (
                <li key={point} className="flex gap-3 items-center text-slate-700 font-medium">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="text-orange-400 font-bold mb-2">Pro Tip</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Always track your "Net" overtime. While "Gross" looks great, 2026 tax withholdings 
                  can vary significantly when you hit high-earning weeks.
                </p>
              </div>
              
            </div>
          </aside>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="bg-white py-20 px-4 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Expert Overtime FAQ" faqs={faqs} />
        </div>
      </section>

      {/* 🔗 RELATED TOOLS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center mb-12">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-2">Financial Suite</span>
          <h2 className="text-3xl font-black text-slate-900">Related Tools</h2>
        </div>
        <RelatedCalculators currentTool="overtime" />
      </section>
    </div>
  );
}