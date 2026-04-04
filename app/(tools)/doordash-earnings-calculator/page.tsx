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
    <main className="bg-[#fcfcfd]">
      {/* 1. HERO & CALCULATOR SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-orange-50/50 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} /> 2026 Industry Standard
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
            DoorDash <span className="text-orange-600">Earnings</span> Pro
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            The most accurate profit estimator for Dashers. Calculate net income after <span className="text-slate-900 font-bold underline decoration-orange-300">taxes, fuel, and vehicle wear.</span>
          </p>
        </div>

        <DoorDashCalculatorClient />
      </section>

      {/* 2. ATTRACTIVE SEO CONTENT SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: Visual Highlights (Makes the page look more than just a blog) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                <BookOpen className="text-orange-600" /> Deep Insights
              </h2>
              
              <div className="space-y-4">
                {[
                  { icon: <Target className="text-blue-600" />, title: "Precision Math", desc: "Using updated 2026 IRS mileage benchmarks." },
                  { icon: <ShieldCheck className="text-emerald-600" />, title: "Tax Ready", desc: "Includes 15.3% SE Tax automated calculations." },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="mb-3">{item.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Rendered SEO Content with Premium Styling */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* The "Prose" class makes the HTML from your SEO file look amazing */}
              <article className="prose prose-slate lg:prose-xl prose-headings:font-black prose-headings:tracking-tight prose-a:text-orange-600 prose-img:rounded-3xl prose-strong:text-slate-900">
                <div 
                  dangerouslySetInnerHTML={{ __html: seoContent }} 
                  className="drop-shadow-sm"
                />
              </article>
              
              {/* Decorative side accent */}
              <div className="absolute top-0 -left-8 bottom-0 w-1 bg-gradient-to-b from-orange-500/20 via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION - MODERN ACCORDION STYLE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-500 font-medium">Everything you need to know about DoorDash taxes and pay.</p>
          </div>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 4. SOCIAL & SHARE */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Help the Community</h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">Share this tool with fellow drivers to help them manage their business like a pro.</p>
              <div className="flex justify-center">
                <ShareButtons
                  title="Check out this 2026 DoorDash Profit Calculator!"
                  url="https://freeuscalculator.com/doordash-earnings-calculator"
                />
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20" />
          </div>
        </div>
      </section>

      {/* 5. FOOTER TOOLS */}
      <section className="pb-24 pt-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <RelatedCalculators 
            currentTool="doordash-earnings-calculator"
            title="Explore More 2026 Financial Tools"
          />
        </div>
      </section>
    </main>
  );
}