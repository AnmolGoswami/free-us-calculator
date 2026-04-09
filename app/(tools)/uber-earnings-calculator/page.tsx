import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import AdBanner from "@/components/common/AdBanner";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";
import UberEarningsClient from "./UberEarningsClient";
import { Sparkles, Car, TrendingUp, DollarSign, Clock, ShieldCheck, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Uber Earnings Calculator 2026 | Real Take-Home Pay & Hourly Rate",
  description: "Calculate your true Uber, Lyft, or DoorDash earnings after expenses, gas, taxes, and self-employment tax. Get accurate effective hourly rate and break-even analysis.",
  alternates: { canonical: "https://freeuscalculator.com/uber-earnings-calculator" },
  keywords: ["uber earnings calculator", "uber take home pay", "rideshare tax calculator", "uber hourly rate calculator", "doordash earnings calculator", "lyft profit calculator", "gig economy tax 2026"],
};

export default function UberEarningsPage() {
  const seoContent = getToolContent("uber-earnings-calculator");

  const faqs = [
    { 
      q: "How is effective hourly rate calculated?", 
      a: "It is your final take-home pay after deducting all expenses, self-employment tax, and estimated federal income tax, divided by hours worked." 
    },
    { 
      q: "What expenses should I include?", 
      a: "Gas, vehicle maintenance, insurance, phone plan, cleaning, depreciation, tolls, and parking. The more accurate your expenses, the better the result." 
    },
    { 
      q: "Does this include Self-Employment Tax?", 
      a: "Yes. It calculates full SE tax (Social Security + Medicare + Additional Medicare) just like the IRS expects from 1099 drivers." 
    },
    { 
      q: "Should I pay quarterly estimated taxes?", 
      a: "Yes. The calculator shows your quarterly estimated tax to help you avoid penalties." 
    },
    { 
      q: "Is this accurate for 2026?", 
      a: "Yes. It uses the latest 2026 Self-Employment Tax rules and federal brackets." 
    },
  ];

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
      
      {/* 🚀 HERO SECTION */}
      <section className="relative pt-12 pb-12 md:pt-20 md:pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-amber-500/10 -z-10 blur-3xl rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles size={12} className="fill-amber-400" /> GIG ECONOMY 2026
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.05]">
            Know Your <span className="text-amber-400">Real Earnings</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto">
            Stop guessing. Calculate your true hourly income after gas, maintenance, taxes, and self-employment tax.
          </p>
        </div>

        {/* MAIN CALCULATOR CARD */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-zinc-900 rounded-[2.5rem] shadow-2xl shadow-black/80 border border-white/10 p-2 md:p-4">
            <CalculatorContainer 
              title="Uber & Rideshare Earnings Calculator" 
              description="Real Take-Home Pay • Effective Hourly Rate • Tax Estimator" 
              category="Gig Economy" 
              lastUpdated="April 2026"
            >
              <UberEarningsClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      {/* 💎 FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { l: "True Hourly Rate", i: <Clock size={20} />, c: "text-amber-400" },
            { l: "Expense Tracking", i: <DollarSign size={20} />, c: "text-emerald-400" },
            { l: "Tax Breakdown", i: <ShieldCheck size={20} />, c: "text-blue-400" },
            { l: "Break-Even Analysis", i: <TrendingUp size={20} />, c: "text-purple-400" },
          ].map((item) => (
            <div key={item.l} className="bg-zinc-900/70 backdrop-blur-sm p-6 rounded-3xl border border-white/10 flex flex-col items-center text-center">
              <div className={`${item.c} mb-3`}>{item.i}</div>
              <span className="text-sm font-semibold">{item.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 📝 CONTENT + SIDEBAR */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* SEO Content */}
            <div className="flex-1">
              <div className="bg-zinc-900 rounded-[2.5rem] border border-white/10 shadow-xl overflow-hidden">
                <div className="bg-zinc-800 px-8 py-6 border-b border-white/10 flex items-center gap-3">
                  <div className="bg-amber-500 p-2 rounded-xl">
                    <BookOpen size={20} className="text-black" />
                  </div>
                  <h2 className="text-2xl font-black tracking-tight">Gig Driver Guide 2026</h2>
                </div>
                <div className="p-8 md:p-12 prose prose-invert prose-zinc max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: seoContent }} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 xl:w-96 shrink-0 flex flex-col gap-6">
              
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[2.5rem] p-8 text-black shadow-2xl">
                <h3 className="text-xl font-bold mb-4">Pro Driver Tip</h3>
                <p className="text-black/80 leading-relaxed">
                  Most drivers think they earn $25/hr, but after expenses and taxes, many are actually making under $12/hr. 
                  Always track every mile and receipt.
                </p>
              </div>

              <div className="bg-zinc-900 rounded-[2rem] p-4 border border-white/10">
                <span className="text-[10px] font-black text-zinc-500 uppercase mb-3 block">Advertisement</span>
                <AdBanner />
              </div>

              <div className="bg-zinc-900/50 rounded-[2rem] p-6 border border-white/10">
                <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4 text-center">Share With Fellow Drivers</h4>
                <ShareButtons 
                  title="Uber Earnings & Tax Calculator 2026" 
                  url="https://freeuscalculator.com/uber-earnings-calculator" 
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-900 py-24 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="bg-zinc-800/50 rounded-[3rem] p-8 md:p-12 border border-white/10">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-black tracking-[0.125em] uppercase">Gig Economy Tools</span>
            <h2 className="text-4xl font-black mt-3">More Driver Calculators</h2>
          </div>
          <RelatedCalculators currentTool="uber-earnings-calculator" />
        </div>
      </section>
    </main>
  );
}