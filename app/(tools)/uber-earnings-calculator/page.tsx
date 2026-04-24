import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";
import UberEarningsClient from "./UberEarningsClient";
import { Sparkles, Car, TrendingUp, DollarSign, Clock, ShieldCheck, BookOpen, MapPin, Gauge, Fuel } from "lucide-react";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Uber Earnings Calculator (2026) – Calculate Real Profit After Expenses, Gas & Taxes",
  
  description:
    "Free Uber earnings calculator to estimate real take-home pay after gas, expenses, and taxes. Calculate hourly rate, profit, and break-even for Uber, Lyft, and DoorDash drivers in 2026.",

  alternates: {
    canonical: "https://www.freeuscalculator.in/uber-earnings-calculator",
  },

  keywords: [
    // PRIMARY (high volume + intent)
    "uber earnings calculator",
    "uber profit calculator",
    "uber take home pay calculator",
    "uber driver earnings after expenses",
    "rideshare earnings calculator",

    // SECONDARY (low competition = fast ranking)
    "how much do uber drivers make after gas",
    "uber hourly rate calculator 2026",
    "uber income after tax calculator",
    "uber driver profit per mile calculator",
    "rideshare break even calculator",

    // PLATFORM VARIATIONS (capture traffic)
    "lyft earnings calculator",
    "doordash earnings calculator",
    "gig economy income calculator",
    "delivery driver earnings calculator",

    // LONG-TAIL (FAST TRAFFIC ⚡)
    "calculate uber earnings after expenses and taxes",
    "real uber driver income per hour",
    "how to calculate uber profit accurately",
    "uber driver net earnings calculator free",

    // ENTITY + CONTEXT SEO
    "self employment tax calculator uber",
    "gig worker tax calculator 2026",
    "rideshare income estimator USA",
  ],

  openGraph: {
    title: "Uber Earnings Calculator 2026 – Real Driver Profit After Expenses",
    description:
      "Find your real Uber income after gas, taxes, and expenses. Free calculator for Uber, Lyft & DoorDash drivers.",
    url: "https://www.freeuscalculator.in/uber-earnings-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Uber Earnings Calculator (2026)",
    description:
      "Calculate your real Uber driver earnings, hourly rate, and profit after expenses.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function UberEarningsPage() {
  const seoContent = getToolContent("uber-earnings-calculator");

  const faqs = [
    { 
      q: "How is effective hourly rate calculated?", 
      a: "It is your final take-home pay after deducting all operating expenses (gas, maintenance), self-employment tax, and estimated federal income tax, divided by the total hours you worked." 
    },
    { 
      q: "What expenses should I include?", 
      a: "For the most accurate result, include gas, vehicle maintenance, insurance premiums, your phone plan, car cleaning, vehicle depreciation, tolls, and parking fees." 
    },
    { 
      q: "Does this include Self-Employment Tax?", 
      a: "Yes. The calculator uses 2026 IRS rules to calculate the full 15.3% SE tax (Social Security + Medicare) while applying the 7.65% deduction adjustment automatically." 
    },
    { 
      q: "How often should I use this calculator?", 
      a: "We recommend using it weekly. Since gig earnings fluctuate and gas prices change, a weekly check ensures you are actually staying profitable." 
    },
    { 
      q: "Is this accurate for all states?", 
      a: "This calculator focuses on Federal Income Tax and Self-Employment Tax. While state taxes vary, these two represent the largest portion of a driver's tax liability." 
    },
  ];

  return (
    <main className="bg-white text-slate-900 min-h-screen overflow-x-hidden">
      
      {/* 🚀 PREMIUM HERO SECTION (White/Amber Theme) */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-4 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(245,158,11,0.08)_0%,rgba(255,255,255,0)_100%)]">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10" />
        
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-xs font-black uppercase tracking-widest mb-8 shadow-sm animate-fade-in">
            <Sparkles size={14} className="animate-pulse" /> GIG ENGINE 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-slate-900">
            Real Driver <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Earnings.</span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
            Stop guessing your profit. Calculate your <span className="text-slate-900 font-bold">true hourly income</span> after fuel, maintenance, and the 2026 tax code.
          </p>
        </div>

        {/* MAIN CALCULATOR CONTAINER (Light SaaS Style) */}
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden">
              <CalculatorContainer 
                title="Uber & Rideshare Earnings Calculator" 
                description="Professional Grade Net Profit & Tax Projection" 
                category="Logistics" 
                lastUpdated="April 2026"
              >
                <UberEarningsClient />
              </CalculatorContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 CORE METRICS GRID */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { l: "Net Hourly Rate", d: "Your actual wage after every expense.", i: <Clock size={28} />, c: "text-amber-500", bg: "bg-amber-50" },
            { l: "Tax Reserve", d: "Know exactly what to set aside for the IRS.", i: <ShieldCheck size={28} />, c: "text-blue-500", bg: "bg-blue-50" },
            { l: "Expense Ratio", d: "Visualize fuel and maintenance impact.", i: <Fuel size={28} />, c: "text-rose-500", bg: "bg-rose-50" },
            { l: "Profit Margins", d: "SaaS-grade breakdown of your drive time.", i: <TrendingUp size={28} />, c: "text-emerald-500", bg: "bg-emerald-50" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-100 p-8 rounded-[32px] flex flex-col hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 group"
            >
              <div className={`${item.bg} ${item.c} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.i}
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-2">{item.l}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📖 CONTENT & SIDEBAR SECTION */}
      <section className="bg-slate-50/50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
            
            {/* MAIN ARTICLE CONTENT */}
            <article className="flex-1 bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-white px-8 md:px-12 py-10 border-b border-slate-100 flex items-center gap-5">
                <div className="bg-amber-500 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                  <BookOpen size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tight text-slate-900">
                    The Driver's Manifesto 2026
                  </h2>
                  <p className="text-slate-400 font-medium">How to maximize gig profitability this year</p>
                </div>
              </div>
              
              <div className="p-8 md:p-12 prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-amber-600">
                <div dangerouslySetInnerHTML={{ __html: seoContent }} />
              </div>
            </article>

            {/* SIDEBAR TOOLS */}
            <aside className="w-full lg:w-[380px] space-y-8">
              
              {/* Pro Strategy Card */}
              <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Car size={100} />
                </div>
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                  <Sparkles className="text-amber-400" size={20} /> Pro Driver Strategy
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm mb-6">
                  Top-earning drivers in 2026 treat their car like a business. Every 1,000 miles driven costs an average of <strong>$150-$200</strong> in hidden depreciation. Are you accounting for it?
                </p>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className="bg-amber-500 h-full w-2/3"></div>
                </div>
              </div>

              {/* Ad Widget */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm text-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-6">Partner Advertisement</span>
            
              </div>

              {/* Social Share */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 text-center">
                  Share Your Profit Strategy
                </h4>
                <ShareButtons 
                  title="Uber Real Earnings Calculator 2026" 
                  url="https://www.freeuscalculator.in/uber-earnings-calculator" 
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="bg-white py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-black text-xs uppercase tracking-widest">Support Center</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 text-slate-900 leading-[1.1]">
              Everything You Need <br /> To Know.
            </h2>
          </div>
          
          <div className="bg-slate-50/50 rounded-[40px] p-8 md:p-16 border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 🔗 RELATED TOOLS (Bottom Section) */}
      <section className="py-24 md:py-32 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div className="text-center md:text-left">
              <span className="text-amber-400 text-xs font-black tracking-[0.2em] uppercase">Optimization Suite</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-3">
                More Pro Tools.
              </h2>
            </div>
            <div className="h-[2px] flex-1 bg-white/10 hidden md:block mx-12"></div>
          </div>
          <RelatedCalculators currentTool="uber-earnings-calculator" />
        </div>
      </section>
    </main>
  );
}