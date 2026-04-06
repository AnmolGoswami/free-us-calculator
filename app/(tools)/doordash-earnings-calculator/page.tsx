import { Metadata } from "next";
import DoorDashCalculatorClient from "./DoorDashCalculatorClient";
import FAQ from "@/components/calculators/FAQ";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import ShareButtons from "@/components/calculators/ShareButtons";
import { getToolContent } from "@/lib/seo";
import { Sparkles, BookOpen, Target, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "DoorDash Earnings Calculator 2026: Real Take-Home Pay (After Tax & Gas)",
  description: "Calculate your TRUE DoorDash profit. Our 2026 estimator accounts for IRS mileage rates, self-employment tax, and peak pay. Stop guessing, start earning.",
  keywords: ["doordash earnings calculator 2026", "doordash profit estimator", "doordash pay after taxes", "dasher income calculator"],
};

export default function DoorDashPage() {
  const seoContent = getToolContent("doordash-earnings-calculator");

  const faqs = [
    {
      q: "How accurate is this DoorDash earnings calculator?",
      a: "This tool provides a highly realistic estimate by using the 2026 IRS standard mileage rate and federal self-employment tax figures.",
    },
    {
      q: "Does this include gas and vehicle maintenance?",
      a: "Yes. Our calculator allows you to adjust the 'Cost per Mile' field, which by default uses the 2026 IRS rate covering gas, insurance, and depreciation.",
    },
    {
      q: "What tax rate should DoorDash drivers use in 2026?",
      a: "For most independent contractors, the self-employment tax rate is 15.3%. Our calculator uses this as the baseline.",
    },
  ];

  return (
    <main className="bg-[#fcfcfd] w-full overflow-x-hidden relative">
      {/* 1. HERO & CALCULATOR SECTION */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-x-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-orange-50/50 to-transparent -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} /> 2026 Industry Standard
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-4 md:mb-6 leading-[1.1]">
            DoorDash <span className="text-orange-600">Earnings</span> Pro
          </h1>
          <p className="text-slate-500 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-2">
            The most accurate profit estimator for Dashers. Calculate net income after{" "}
            <span className="text-slate-900 font-bold underline decoration-orange-300">
              taxes, fuel, and vehicle wear.
            </span>
          </p>
        </div>

        {/* CALCULATOR - STRATEGIC BOX FIX */}
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 pb-8 box-border">
          <div className="w-full max-w-full overflow-hidden flex flex-col items-center">
            <DoorDashCalculatorClient />
          </div>
        </div>
      </section>

      {/* 2. SEO CONTENT SECTION - REMAINS PERFECT */}
      <section className="py-12 md:py-24 bg-white w-full border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Sidebar - Hidden on mobile */}
            <div className="lg:col-span-4 hidden lg:block sticky top-24 space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                <BookOpen className="text-orange-600" /> Deep Insights
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    icon: <Target className="text-blue-600" />,
                    title: "Precision Math",
                    desc: "Using updated 2026 IRS mileage benchmarks."
                  },
                  {
                    icon: <ShieldCheck className="text-emerald-600" />,
                    title: "Tax Ready",
                    desc: "Includes 15.3% SE Tax automated calculations."
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Content Box - Fixed Width logic */}
            <div className="lg:col-span-8 w-full min-w-0">
              <div className="w-full bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden">
                
                {/* Card Header */}
                <div className="px-5 sm:px-8 py-6 sm:py-8 border-b border-slate-100 bg-slate-50">
                  <h2 className="text-xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    Complete DoorDash Earnings Guide 2026
                  </h2>
                  <p className="text-slate-500 mt-2 text-xs sm:text-[15px]">
                    Everything you need to know to maximize your profit as a Dasher
                  </p>
                </div>

                {/* SEO Content Body */}
                <div className="p-4 sm:p-8 md:p-10">
                  <article
                    className="prose prose-slate prose-sm sm:prose-base max-w-none
                               prose-headings:font-bold prose-headings:tracking-tight
                               prose-h1:text-2xl sm:prose-h1:text-3xl
                               prose-h2:text-xl sm:prose-h2:text-2xl
                               prose-p:text-slate-600 prose-p:leading-relaxed
                               prose-ul:list-disc prose-ul:pl-5
                               prose-li:my-1 prose-strong:text-slate-900
                               prose-a:text-orange-600 hover:prose-a:underline
                               text-[15px] sm:text-base leading-relaxed break-words"
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: seoContent }}
                      className="overflow-x-auto custom-scrollbar pb-6 touch-pan-x"
                    />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Common Questions</h2>
            <p className="text-slate-500 text-sm font-medium">Everything you need to know about DoorDash taxes and pay.</p>
          </div>
          <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-5 md:p-12 shadow-sm border border-slate-200">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 4. SOCIAL & SHARE */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl md:text-3xl font-bold mb-4">Help the Community</h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto text-xs md:text-base">
                Share this tool with fellow drivers to help them manage their business like a pro.
              </p>
              <div className="flex justify-center overflow-x-auto pb-2">
                <ShareButtons
                  title="Check out this 2026 DoorDash Profit Calculator!"
                  url="https://freeuscalculator.com/doordash-earnings-calculator"
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20" />
          </div>
        </div>
      </section>

      {/* 5. RELATED CALCULATORS */}
      <section className="pb-16 md:pb-24 pt-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RelatedCalculators
            currentTool="doordash-earnings-calculator"
            title="Explore More 2026 Financial Tools"
          />
        </div>
      </section>
    </main>
  );
}