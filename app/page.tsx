// app/page.tsx
import Link from "next/link";
import ToolCard from "@/components/ui/ToolCard";
import { popularTools } from "@/lib/tools";
import Script from "next/script";
import { ArrowRight, ShieldCheck, Zap, Smartphone, Users, TrendingUp, CheckCircle2, Star, Award } from "lucide-react";
import type { Metadata } from 'next';

export const dynamic = "force-dynamic";



export const metadata: Metadata = {
  title: "FreeUSCalculator - Free 2026 US Tax & Financial Calculators",
  description:
    "Free accurate 2026 US tax calculators, gig economy tools (Uber, DoorDash), paycheck estimators, loan EMI, rent affordability & more. No signup, no ads. Instant results.",
  keywords: [
    "2026 tax calculator", "free tax calculator", "self employment tax calculator",
    "uber earnings calculator", "doordash pay calculator", "take home pay calculator",
    "loan emi calculator", "rent affordability calculator", "free financial calculators usa"
  ],
  openGraph: {
    title: "FreeUSCalculator - Smart Money Decisions Made Simple (2026)",
    description: "85+ free, accurate financial calculators updated for Tax Year 2026. No signup required.",
    images: [{ url: "https://freeuscalculator.in/og-image.jpg" }],
  },
};
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FreeUSCalculator",
    alternateName: "Free US Financial Calculators 2026",
    url: "https://freeuscalculator.in",
    description: "Free accurate 2026 US tax calculators, gig economy earnings tools, paycheck estimators, loan EMI, rent affordability and cost calculators. No signup required.",
    publisher: {
      "@type": "Organization",
      name: "FreeUSCalculator",
      logo: "https://freeuscalculator.in/logo.png"
    }
  };

  return (
    <>
      <Script 
        id="json-ld" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#4f46e520_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#6366f120_0%,transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl px-6 py-2.5 rounded-3xl border border-white/10 mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="uppercase text-xs tracking-[2px] font-semibold text-emerald-300">Updated for Tax Year 2026</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[86px] font-black tracking-tighter leading-none mb-8">
              Smart Money Decisions.<br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Made Simple.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-14 leading-relaxed px-2">
              85+ free, accurate, and beautifully designed financial calculators. 
              Built for gig workers, families, and smart Americans in 2026.
            </p>

            {/* Popular Quick Links */}
            <div className="max-w-4xl mx-auto mb-16 px-2">
              <div className="text-sm uppercase tracking-widest text-indigo-300 mb-5 font-medium">Popular This Year</div>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "Self Employment Tax", href: "/tax-calculators" },
                  { label: "Uber Earnings", href: "/earning-calculators" },
                  { label: "DoorDash Pay", href: "/earning-calculators" },
                  { label: "Take Home Pay", href: "/tax-calculators" },
                  { label: "Rent Affordability", href: "/cost-calculators" },
                  { label: "Loan EMI", href: "/cost-calculators" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group px-5 sm:px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 backdrop-blur-xl rounded-full text-sm font-medium text-white transition-all active:scale-95 hover:scale-105"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm opacity-90 px-4">
              <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-400" size={22} /> 100% Free & Private</div>
              <div className="flex items-center gap-2"><Zap className="text-amber-400" size={22} /> Real 2026 Rates</div>
              <div className="flex items-center gap-2"><Smartphone className="text-sky-400" size={22} /> Mobile Optimized</div>
              <div className="flex items-center gap-2"><Users className="text-violet-400" size={22} /> 75,000+ Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== POPULAR TOOLS SECTION ==================== */}
      <section id="popular-tools" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-amber-500" size={28} />
                <span className="uppercase tracking-[3px] text-indigo-600 font-semibold text-sm">Most Used in 2026</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Popular Calculators</h2>
            </div>
            <Link 
              href="/tax-calculators" 
              className="font-semibold text-lg text-indigo-600 hover:text-indigo-700 group inline-flex items-center gap-3 self-start md:self-auto"
            >
              Explore All Tools 
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

          {/* Fully Responsive Grid - Mobile First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {popularTools.map((tool) => (
              <div key={tool.slug} className="w-full">
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/tax-calculators" 
              className="inline-flex items-center gap-3 font-semibold text-lg text-indigo-600 hover:text-indigo-700 group"
            >
              See All 85+ Tools <ArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Built for Every Situation</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Whether you're driving for Uber, filing taxes, or planning your future — we have the right tool for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                href: "/tax-calculators",
                title: "Tax Calculators",
                desc: "Self-employment tax, paycheck estimators, federal & state tools updated for 2026.",
                iconColor: "from-blue-500 to-indigo-600",
                count: "25+ Tools"
              },
              {
                href: "/earning-calculators",
                title: "Earnings & Gig Tools",
                desc: "Uber, DoorDash, Lyft earnings and salary calculators. Know your real income.",
                iconColor: "from-emerald-500 to-teal-600",
                count: "18+ Tools"
              },
              {
                href: "/cost-calculators",
                title: "Cost & Planning Tools",
                desc: "Loan EMI, rent affordability, savings growth, and smart budget planners.",
                iconColor: "from-amber-500 to-orange-600",
                count: "22+ Tools"
              },
            ].map((category) => (
              <Link key={category.title} href={category.href} className="group block">
                <div className="h-full bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 hover:border-indigo-200 hover:shadow-2xl transition-all duration-500 flex flex-col">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.iconColor} rounded-2xl mb-8 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                    <CheckCircle2 size={38} />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">{category.title}</h3>
                    <span className="text-xs font-mono bg-slate-100 px-3 py-1 rounded-full text-slate-500 whitespace-nowrap">{category.count}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[17px] flex-1">{category.desc}</p>
                  
                  <div className="mt-10 text-indigo-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Category <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">Why Americans Love FreeUSCalculator</h2>
              <div className="space-y-8 text-lg text-slate-300">
                {[
                  { title: "Always Updated for 2026", desc: "Latest tax brackets, rates, and rules." },
                  { title: "No Signup • No Ads", desc: "Completely free and private." },
                  { title: "Accurate Calculations", desc: "Built with real financial formulas." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" size={28} />
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 lg:p-10">
              <TrendingUp className="text-emerald-400 mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-6">Join 75,000+ Smart Americans</h3>
              <p className="text-slate-400 leading-relaxed">
                From gig economy workers to families planning their future — our tools help real people every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-28 bg-gradient-to-br from-indigo-600 to-violet-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-indigo-100 mb-12">Start calculating instantly — no account needed.</p>
          <Link
            href="/tax-calculators"
            className="inline-flex items-center gap-4 bg-white text-indigo-700 font-bold text-xl px-12 sm:px-14 py-6 rounded-3xl hover:bg-amber-300 hover:text-indigo-900 transition-all shadow-2xl active:scale-95"
          >
            Browse All Tools Now <Zap className="w-7 h-7" />
          </Link>
        </div>
      </section>
    </>
  );
}