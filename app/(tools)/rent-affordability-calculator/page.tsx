import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import AdBanner from "@/components/common/AdBanner";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";
import RentAffordabilityClient from "./RentAffordabilityClient";
import { Sparkles, Home, Wallet, Calculator, ShieldCheck, MapPin, BookOpen, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Rent Affordability Calculator (2026) – How Much Rent Can I Afford Based on Salary?",

  description:
    "Free rent affordability calculator to estimate how much rent you can afford using the 30% rule, income, and debt. Calculate your apartment budget and monthly rent easily for 2026.",

  alternates: {
    canonical: "https://freeuscalculator.com/rent-affordability-calculator",
  },

  keywords: [
    // 🔥 PRIMARY (HIGH TRAFFIC)
    "rent affordability calculator",
    "how much rent can i afford",
    "rent calculator",
    "apartment affordability calculator",
    "rent vs income calculator",

    // ⚡ LONG-TAIL (FAST RANKING)
    "how much rent can i afford based on salary",
    "rent affordability calculator after tax",
    "monthly rent budget calculator",
    "rent based on income calculator 2026",
    "how to calculate affordable rent",

    // 💰 HIGH INTENT (MONEY KEYWORDS)
    "apartment budget calculator",
    "real rent affordability calculator",
    "monthly housing budget calculator",
    "income to rent ratio calculator",
    "rent per month calculator",

    // 🚀 ULTRA LOW COMPETITION (FAST TRAFFIC)
    "what rent can i afford on 50000 salary",
    "how much rent can i afford with 70000 salary",
    "rent for 100k salary calculator",
    "how much should i spend on rent per month",
    "rent affordability based on income and debt",

    // 🧠 SEMANTIC SEO (AI + GOOGLE SGE)
    "30 percent rule rent calculator",
    "debt to income rent calculator",
    "housing affordability calculator",
    "monthly expenses rent calculator",
    "budget planner rent",

    // 📈 BROAD TRAFFIC EXPANSION
    "cost of living calculator",
    "budget calculator",
    "income calculator",
    "expense calculator",
    "financial planning calculator",

    // 🎯 NICHE TARGETING (EASY WINS)
    "student rent affordability calculator",
    "family rent budget calculator",
    "low income rent calculator",
    "high income rent planning calculator",
    "roommate rent calculator",

    // 🔥 LONG-TAIL CLUSTER DOMINATION
    "how to calculate rent affordability using 30 percent rule",
    "best rent affordability calculator 2026 free online",
    "calculate rent budget with income debt and expenses",
    "accurate rent affordability calculator with salary breakdown",
    "how much rent can i afford with monthly income and bills",
  ],

  openGraph: {
    title: "Rent Affordability Calculator 2026 – Find Your Ideal Rent Budget",
    description:
      "Calculate how much rent you can afford using income, expenses, and the 30% rule. Plan your housing budget instantly.",
    url: "https://freeuscalculator.com/rent-affordability-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rent Affordability Calculator (2026)",
    description:
      "Find out how much rent you can afford based on your salary and expenses.",
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

export default function RentAffordabilityPage() {
  const seoContent = getToolContent("rent-affordability-calculator");

  const faqs = [
    { 
      q: "What is the 30% rule for rent?", 
      a: "The 30% rule suggests that you should spend no more than 30% of your gross monthly income on housing costs to ensure you have enough left for other essentials and savings." 
    },
    { 
      q: "Should I use gross or net income?", 
      a: "Standard financial guidelines usually use gross (pre-tax) income for the 30% rule. However, for a more conservative and realistic budget, many experts recommend using your net (take-home) pay." 
    },
    { 
      q: "Does rent include utilities?", 
      a: "Ideally, yes. The 'housing cost' should encompass rent, electricity, water, gas, and trash. If your rent doesn't include these, you should lower your target rent price accordingly." 
    },
    { 
      q: "How does debt affect rent affordability?", 
      a: "High debt-to-income ratios (DTI) mean you have less cash flow. If you have large student loans or car payments, you should aim for closer to 20-25% of your income for rent." 
    },
  ];

  return (
    <main className="bg-[#fcfcfd] min-h-screen overflow-x-hidden">
      
      {/* 🚀 HERO SECTION */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 px-4">
        {/* Soft Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-blue-50/50 -z-10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles size={14} className="fill-blue-600" /> REAL ESTATE 2026
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
            Rent <span className="text-blue-600">Affordability</span> <br />
            Master.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Find your perfect budget based on the 30% rule and debt-to-income analysis for the current US market.
          </p>
        </div>

        {/* CALCULATOR CARD */}
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-[3rem] blur-xl opacity-75"></div>
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-white p-2 md:p-4">
              <CalculatorContainer 
                title="Rent Affordability Calculator" 
                description="30% Standard Rule • Debt-Adjusted Budgeting" 
                category="Housing & Personal Finance" 
                lastUpdated="April 2026"
              >
                <RentAffordabilityClient />
              </CalculatorContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 💎 KEY METRICS GRID */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { l: "30% Rule", d: "Standard Guideline", i: <Home size={24} />, c: "text-blue-500", bg: "bg-blue-50" },
            { l: "Debt Adjusted", d: "Realistic Budgeting", i: <Landmark size={24} />, c: "text-indigo-500", bg: "bg-indigo-50" },
            { l: "Income Analysis", d: "Gross vs Net Pay", i: <Wallet size={24} />, c: "text-emerald-500", bg: "bg-emerald-50" },
            { l: "Local Markets", d: "US-Wide Support", i: <MapPin size={24} />, c: "text-rose-500", bg: "bg-rose-50" },
          ].map((item) => (
            <div key={item.l} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
              <div className={`${item.bg} ${item.c} p-4 rounded-2xl mb-4`}>{item.i}</div>
              <span className="text-slate-900 font-bold mb-1">{item.l}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 📝 CONTENT & SIDEBAR */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
            
            {/* SEO ARTICLE AREA */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
                <div className="bg-slate-50/80 px-10 py-8 border-b border-slate-100 flex items-center gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Rental Market Guide</h2>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mastering your housing budget</p>
                  </div>
                </div>
                
                <div className="p-10 md:p-16">
                  {/* ✅ CORRECT PROSE RENDERING */}
                  {seoContent ? (
                    <article className="prose prose-slate lg:prose-xl max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-strong:text-blue-600 prose-a:text-blue-600">
                      <div dangerouslySetInnerHTML={{ __html: seoContent }} />
                    </article>
                  ) : (
                    <p className="text-slate-400 italic">Content currently loading...</p>
                  )}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="w-full lg:w-[400px] shrink-0 space-y-8">
              
              {/* Insight Card */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6 block">SAVVY TIP</span>
                  <h3 className="text-2xl font-black mb-4">The 50/30/20 Rule</h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-6">
                    Financial pros suggest 50% for Needs (Rent/Food), 30% for Wants, and 20% for Savings. If your rent exceeds 30%, it eats directly into your future savings.
                  </p>
                  <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest">
                    Budget Smarter <ShieldCheck size={16} />
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              </div>

              {/* Advertisement */}
              <div className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm text-center">
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-4">Advertisement</span>
                <AdBanner />
              </div>

              {/* Share Interaction */}
              <div className="bg-blue-50 rounded-[2.5rem] p-10 border border-blue-100 text-center">
                <h4 className="text-xs font-black text-blue-900 uppercase tracking-[0.2em] mb-6">Help Others Budget</h4>
                <ShareButtons 
                  title="2026 Rent Affordability Master" 
                  url="https://freeuscalculator.com/rent-affordability-calculator" 
                />
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="bg-white border-t border-slate-100 py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">Common Questions.</h2>
          </div>
          <div className="bg-slate-50/50 rounded-[3rem] p-10 md:p-20 border border-slate-100 shadow-inner">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 🔗 RELATED TOOLS */}
      <section className="bg-slate-950 py-32 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Explore Housing <span className="text-blue-500">Tools.</span></h2>
            <div className="h-px bg-white/10 flex-1 hidden md:block"></div>
          </div>
          <RelatedCalculators currentTool="rent-affordability-calculator" />
        </div>
      </section>
    </main>
  );
}