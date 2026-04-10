// app/about/page.tsx
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Users, Award, TrendingUp, Calendar, Target, Globe } from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "About FreeUSCalculator – America's Most Trusted Free Financial Tools 2026",
  description: "Discover why FreeUSCalculator exists. We provide 85+ accurate, free 2026 financial calculators for taxes, gig earnings, loans, rent, and savings — no signup, no ads in tools.",
  keywords: [
    "about freeuscalculator",
    "free financial calculators 2026",
    "best tax calculators usa",
    "gig economy tools",
    "accurate 2026 tax calculator",
    "free emi calculator",
    "why use freeuscalculator",
  ],
  alternates: {
    canonical: "https://freeuscalculator.com/about",
  },
};
export const dynamic = "force-dynamic";

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About FreeUSCalculator",
    url: "https://freeuscalculator.com/about",
    description: "FreeUSCalculator offers 85+ free, accurate financial calculators updated for Tax Year 2026. Trusted by over 75,000 Americans.",
    publisher: {
      "@type": "Organization",
      name: "FreeUSCalculator",
      logo: "https://freeuscalculator.com/logo.png",
    }
  };

  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-zinc-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-950 to-indigo-950 text-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl px-6 py-3 rounded-3xl border border-white/10 mb-8">
              <Calendar className="text-emerald-400" size={20} />
              <span className="uppercase text-sm font-semibold tracking-widest">Est. 2025 • Serving Americans in 2026</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
              Making Smart Financial Decisions<br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Accessible to Every American</span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-slate-300">
              We believe financial tools should be free, accurate, and easy to use. 
              That’s why we built FreeUSCalculator — the most trusted platform for 2026 tax, earnings, and cost calculations.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-20 space-y-28">

          {/* Our Story - Expanded */}
          <div>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight mb-6">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-4xl mx-auto text-slate-600 leading-relaxed space-y-8">
              <p>
                In early 2025, our founding team noticed a frustrating problem: Americans were spending countless hours 
                trying to understand their taxes, gig economy earnings, loan payments, and rent affordability using outdated 
                or ad-filled calculators.
              </p>
              <p>
                Many tools required sign-ups, pushed aggressive ads, or gave inaccurate results because they weren't updated 
                for the latest tax laws. This was especially painful for gig workers (Uber, DoorDash, Lyft drivers), freelancers, 
                and young families navigating rising costs in 2026.
              </p>
              <p>
                We decided to change that. FreeUSCalculator was born from a simple mission: <strong>create the best free financial calculators</strong> 
                that are accurate, fast, private, and always updated for the current tax year.
              </p>
              <p>
                Today, we proudly serve over 75,000 monthly users across all 50 states — from California gig drivers calculating 
                real earnings after gas and maintenance, to New York families planning mortgage payments, to small business owners 
                estimating quarterly self-employment taxes.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-white rounded-3xl p-10 md:p-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10">Our Mission</h2>
              <div className="text-center text-xl text-slate-600 mb-12">
                To democratize financial knowledge by providing powerful, accurate, and completely free tools that help every American 
                make confident money decisions — without barriers, ads, or hidden costs.
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Zap, title: "Lightning Fast", desc: "Instant results using optimized 2026 formulas" },
                  { icon: ShieldCheck, title: "100% Private", desc: "No data collection. Calculations stay on your device" },
                  { icon: Globe, title: "For All Americans", desc: "Designed for W-2, 1099, gig workers, and retirees" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="text-center">
                      <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="text-indigo-600" size={32} />
                      </div>
                      <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Always Updated for 2026",
                  content: "Unlike many outdated tools, we continuously update our calculators with the latest IRS tax brackets, Social Security wage base, Medicare rates, standard deductions, and state-specific rules for Tax Year 2026."
                },
                {
                  title: "No Compromises on Privacy",
                  content: "We never ask for your email, phone number, or any personal information. All calculations happen locally in your browser. Your data never touches our servers."
                },
                {
                  title: "Built for Real Life",
                  content: "Our tools are designed by people who understand real American challenges — gig economy expenses, rising rent, student loans, home buying, and retirement planning."
                },
                {
                  title: "Beautiful & Easy to Use",
                  content: "Clean, modern interface that works perfectly on phones, tablets, and desktops. No clutter. No confusing jargon. Just clear, actionable results."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-3xl p-10">
                  <h3 className="font-semibold text-2xl mb-5 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Stats */}
          <div className="bg-zinc-900 text-white rounded-3xl p-12 md:p-20">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-8">Real Impact in 2026</h2>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="text-emerald-400 mt-1"><CheckCircle2 size={32} /></div>
                    <div>
                      <p className="text-2xl font-semibold">75,000+ Monthly Users</p>
                      <p className="text-slate-400 mt-2">From every state in America — helping people save time and money every single day.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-emerald-400 mt-1"><CheckCircle2 size={32} /></div>
                    <div>
                      <p className="text-2xl font-semibold">4.9/5 Average Rating</p>
                      <p className="text-slate-400 mt-2">Users love how simple, accurate, and trustworthy our tools are.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-slate-300">
                <p className="text-lg leading-relaxed">
                  Whether it's a DoorDash driver in Los Angeles calculating real hourly earnings after gas and vehicle wear, 
                  a freelancer in Texas estimating quarterly self-employment taxes, or a young couple in Chicago planning 
                  their first home purchase — FreeUSCalculator has become their go-to financial companion.
                </p>
              </div>
            </div>
          </div>

          {/* Long-Form Content for SEO */}
          <div className="prose prose-lg max-w-4xl mx-auto text-slate-600">
            <h2 className="text-4xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>

            <div className="space-y-12">
              {[
                {
                  q: "Are FreeUSCalculator tools really 100% free?",
                  a: "Yes. Every single calculator is completely free to use — forever. There are no premium features, no paywalls, and no forced signups."
                },
                {
                  q: "How accurate are your 2026 tax and financial calculators?",
                  a: "We use official IRS formulas, current tax brackets, Social Security limits, Medicare rates, and state-specific rules. All tools are regularly reviewed and updated by financial professionals."
                },
                {
                  q: "Can I use these calculators for official tax filing?",
                  a: "Our tools are designed for estimation, planning, and education. They are not a substitute for professional tax advice. We recommend consulting a CPA or using official IRS software for final tax filings."
                },
                {
                  q: "Do you sell or share user data?",
                  a: "Never. We do not collect any personal information. All calculations are performed locally in your browser and never stored on our servers."
                },
                {
                  q: "Which states do your calculators support?",
                  a: "We support calculations for all 50 states, with special attention to high-population states like California, New York, Texas, Florida, and Illinois that have unique state tax rules."
                },
                {
                  q: "Why should I choose FreeUSCalculator over other tools?",
                  a: "Because we combine accuracy, speed, privacy, and beautiful design. Most competitors are either outdated, ad-heavy, or require personal information. We focus on delivering the best possible user experience."
                }
              ].map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-2xl text-slate-900 mb-4">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-28 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to make better financial decisions?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto">
              Join thousands of Americans who use FreeUSCalculator every month to save time and money.
            </p>
            <Link
              href="/tax-calculators"
              className="inline-flex items-center gap-4 bg-white text-indigo-700 font-bold text-xl px-14 py-6 rounded-3xl hover:bg-amber-300 hover:text-indigo-900 transition-all shadow-2xl"
            >
              Start Using Our Tools Now <ArrowRight className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}