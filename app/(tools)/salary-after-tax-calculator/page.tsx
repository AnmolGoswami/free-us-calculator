import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";

import SalaryAfterTaxClient from "./SalaryAfterTaxClient";
import FAQ from "@/components/calculators/FAQ";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import ShareButtons from "@/components/calculators/ShareButtons";
import { getToolContent } from "@/lib/seo";
import { Sparkles, BookOpen, Target, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Salary After Tax Calculator (2026) – Take Home Pay, Net Income & Tax Breakdown",

  description:
    "Free salary after tax calculator to estimate your real take-home pay. Calculate federal, state, and FICA taxes with accurate 2026 net income breakdowns instantly.",

  alternates: {
    canonical: "https://freeuscalculator.com/salary-after-tax-calculator",
  },

  keywords: [
    // 🔥 PRIMARY (HIGH TRAFFIC)
    "salary after tax calculator",
    "take home pay calculator",
    "net salary calculator",
    "after tax income calculator",
    "salary calculator after tax 2026",

    // ⚡ LONG-TAIL (FAST RANKING)
    "how much salary after tax calculator",
    "take home pay after tax calculator USA",
    "net income after tax calculator with deductions",
    "salary after tax per month calculator",
    "annual salary after tax calculator",

    // 💰 HIGH INTENT (MONEY KEYWORDS)
    "real take home pay calculator",
    "true net salary calculator",
    "income after tax breakdown calculator",
    "paycheck after tax calculator",
    "salary after tax with benefits",

    // 🚀 ULTRA LOW COMPETITION (FAST TRAFFIC)
    "what is 60000 salary after tax",
    "70000 salary after tax monthly take home",
    "80000 after tax income calculator",
    "how much tax on 100k salary",
    "salary after tax per paycheck calculator",

    // 🧠 SEMANTIC SEO (AI + GOOGLE SGE)
    "federal state fica tax calculator",
    "income tax estimator 2026",
    "payroll tax calculator",
    "net vs gross salary calculator",
    "tax deduction salary calculator",

    // 📈 BROAD TRAFFIC EXPANSION
    "paycheck calculator",
    "income calculator",
    "salary breakdown calculator",
    "earnings after tax calculator",
    "monthly take home calculator",

    // 🎯 NICHE TARGETING (EASY WINS)
    "freelancer salary after tax calculator",
    "contractor take home pay calculator",
    "remote job salary after tax",
    "self employed take home calculator",
    "hourly to salary after tax calculator",

    // 🔥 LONG-TAIL CLUSTER DOMINATION
    "how to calculate salary after tax step by step",
    "best salary after tax calculator 2026 free online",
    "calculate net salary after federal state and fica taxes",
    "accurate take home pay calculator with deductions and benefits",
    "real paycheck calculator after tax monthly yearly breakdown",
  ],

  openGraph: {
    title: "Salary After Tax Calculator 2026 – Calculate Real Take Home Pay",
    description:
      "Estimate your net salary after federal, state, and FICA taxes instantly with our free calculator.",
    url: "https://freeuscalculator.com/salary-after-tax-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Take Home Pay Calculator (2026)",
    description:
      "Find your real salary after tax with accurate breakdowns.",
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

export default function SalaryAfterTaxPage() {
  const seoContent = getToolContent("salary-after-tax-calculator");

  const faqs = [
    {
      q: "How accurate is this salary calculator?",
      a: "It uses updated 2026 federal tax brackets, FICA rates, and state-level estimates.",
    },
    {
      q: "Does it include state tax?",
      a: "Yes, state tax is included based on your selected state.",
    },
    {
      q: "What is FICA tax?",
      a: "FICA includes Social Security and Medicare taxes applied to your income.",
    },
  ];

  return (
    <main className="bg-[#fcfcfd] w-full overflow-x-hidden relative">

      {/* ================= HERO ================= */}
      <section className="relative pt-8 pb-10 md:pt-14 md:pb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-green-50/50 to-transparent -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-600 text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles size={14} /> 2026 Tax Engine
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4">
            Salary <span className="text-green-600">After Tax</span> Pro
          </h1>

          <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto">
            Calculate your real take-home pay after{" "}
            <span className="font-bold text-slate-900 underline decoration-green-300">
              federal, state, and FICA taxes
            </span>
          </p>
        </div>
      </section>

      {/* ================= CALCULATOR (UNCHANGED SIZE) ================= */}
      <CalculatorContainer
        title="Salary After Tax Calculator USA"
        description="Calculate your exact take-home pay for 2026 with full tax breakdown."
        category="Financial"
        lastUpdated="April 2026"
        backLink="/earning-calculators"
        keywords="Salary Calculator 2026, Take home pay, Tax brackets"
      >
        <div className="p-1 md:p-4">
          <SalaryAfterTaxClient />
        </div>
      </CalculatorContainer>

      {/* ================= SHARE ================= */}
      <section className="max-w-5xl mx-auto px-6 my-12">
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Plan Your Finances Better
          </h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            Share this tool to help others understand their real income.
          </p>

          <ShareButtons
            title="Check your real take-home salary for 2026!"
            url="https://freeuscalculator.com/salary-after-tax-calculator"
          />
        </div>
      </section>

      {/* ================= SEO SECTION (DOORDASH STYLE) ================= */}
      <section className="py-12 md:py-24 bg-white border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

      {/* LEFT SIDEBAR */}
      <div className="lg:col-span-4 hidden lg:block sticky top-24 space-y-8">
        <h2 className="text-3xl font-extrabold flex items-center gap-3">
          <BookOpen className="text-green-600" /> Deep Insights
        </h2>

        {[
          {
            icon: <Target className="text-blue-600" />,
            title: "Accurate Tax Engine",
            desc: "Built using 2026 IRS tax brackets.",
          },
          {
            icon: <ShieldCheck className="text-emerald-600" />,
            title: "Real Take-Home",
            desc: "Includes FICA + state taxes.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all"
          >
            <div className="mb-3">{item.icon}</div>
            <h4 className="font-bold text-slate-900">{item.title}</h4>
            <p className="text-sm text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* RIGHT CONTENT (FIXED) */}
      <div className="lg:col-span-8 w-full min-w-0">
        <div className="w-full max-w-full bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden">
          
          {/* HEADER */}
          <div className="px-5 sm:px-8 py-6 sm:py-8 border-b border-slate-100 bg-slate-50">
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Complete Salary After Tax Guide 2026
            </h2>
            <p className="text-slate-500 mt-2 text-xs sm:text-[15px]">
              Everything you need to understand your net income
            </p>
          </div>

          {/* CONTENT WRAPPER (CRITICAL FIX) */}
          <div className="w-full max-w-full overflow-hidden">
            <div className="p-4 sm:p-8 md:p-10 overflow-x-auto">

              <article
                className="
                  prose prose-slate 
                  prose-sm sm:prose-base 
                  max-w-none w-full

                  prose-headings:font-bold 
                  prose-headings:tracking-tight
                  prose-h1:text-2xl sm:prose-h1:text-3xl
                  prose-h2:text-xl sm:prose-h2:text-2xl

                  prose-p:text-slate-600 
                  prose-p:leading-relaxed

                  prose-ul:list-disc prose-ul:pl-5
                  prose-li:my-1

                  prose-strong:text-slate-900
                  prose-a:text-green-600 hover:prose-a:underline

                  break-words
                "
              >
                <div
                  dangerouslySetInnerHTML={{ __html: seoContent }}
                  className="
                    w-full max-w-full

                    [&_*]:max-w-full
                    [&_table]:block
                    [&_table]:overflow-x-auto
                    [&_pre]:overflow-x-auto
                    [&_code]:break-words
                  "
                />
              </article>

            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= FAQ ================= */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black">Common Questions</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ================= RELATED ================= */}
      <section className="pb-16 pt-10 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedCalculators
            currentTool="salary-after-tax-calculator"
            title="Explore More Financial Tools"
          />
        </div>
      </section>

      {/* ================= ADS ================= */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        
      </div>

    </main>
  );
}