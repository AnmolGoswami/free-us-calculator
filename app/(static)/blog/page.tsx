// app/blog/page.tsx
import Link from "next/link";
import Script from "next/script";
import { Calendar, Clock, Award, TrendingUp, Users, ShieldCheck, Zap, Target } from "lucide-react";
import { popularTools } from "@/lib/tools";

export const metadata = {
  title: "Blog | FreeUSCalculator - 2026 Tax Guides, Gig Earnings & Financial Tips",
  description: "Practical 2026 financial guides: self-employment tax, Uber & DoorDash earnings, salary after tax, rent affordability and more. All tools are free and updated for Tax Year 2026.",
  keywords: ["2026 tax guide", "gig economy taxes 2026", "self employment tax 2026", "uber earnings 2026", "salary after tax", "rent affordability 2026"],
  alternates: {
    canonical: "https://freeuscalculator.com/blog",
  },
};

export const dynamic = "force-dynamic";

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "FreeUSCalculator Blog",
    url: "https://freeuscalculator.com/blog",
    description: "Short practical guides on 2026 taxes, gig work earnings, loans, rent and savings using free calculators.",
    publisher: {
      "@type": "Organization",
      name: "FreeUSCalculator",
      logo: "https://freeuscalculator.com/logo.png",
    },
  };

  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-zinc-50">
        {/* Hero - Same style as homepage */}
        <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-40">
          <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#4f46e520_0%,transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl px-6 py-3 rounded-3xl border border-white/10 mb-8">
              <TrendingUp className="text-emerald-400" size={22} />
              <span className="uppercase text-sm font-semibold tracking-widest">2026 Financial Guides</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[82px] font-black tracking-tighter leading-none mb-8">
              FreeUSCalculator Blog
            </h1>
            <p className="max-w-3xl mx-auto text-2xl text-slate-300">
              Short, practical guides to help you use our free 2026 calculators better.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

          {/* Short Articles Section */}
          <div>
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="uppercase tracking-widest text-indigo-600 font-semibold text-sm mb-2">PRACTICAL GUIDES</div>
                <h2 className="text-5xl font-bold tracking-tight text-slate-900">2026 Financial Guides</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Article 1 */}
              <div className="bg-white border border-slate-100 rounded-3xl p-10">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-1"><Calendar size={16} /> April 10, 2026</div>
                  <div className="flex items-center gap-1"><Clock size={16} /> 8 min read</div>
                </div>
                <h3 className="text-3xl font-bold leading-tight mb-6">2026 Tax Brackets Explained</h3>
                <div className="prose prose-slate text-[15.5px] leading-relaxed space-y-6">
                  <p>The IRS has released the inflation-adjusted tax brackets for 2026. The standard deduction increased to $15,000 for single filers and $30,000 for married couples filing jointly.</p>
                  <p>Seven tax brackets remain: 10%, 12%, 22%, 24%, 32%, 35%, and 37%. Most Americans will stay in the same bracket, but higher earners may see slight shifts due to the new brackets.</p>
                  <p>Gig workers and self-employed individuals should pay special attention to the Self-Employment Tax rate which stays at 15.3% (12.4% Social Security + 2.9% Medicare).</p>
                  <p>Use our free <strong>Self Employment Tax Calculator</strong> to see exactly how much you will owe in 2026.</p>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white border border-slate-100 rounded-3xl p-10">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-1"><Calendar size={16} /> April 8, 2026</div>
                  <div className="flex items-center gap-1"><Clock size={16} /> 7 min read</div>
                </div>
                <h3 className="text-3xl font-bold leading-tight mb-6">Uber Earnings Calculator 2026 – Real Take-Home Pay</h3>
                <div className="prose prose-slate text-[15.5px] leading-relaxed space-y-6">
                  <p>Many Uber drivers think they earn $25–30 per hour, but after expenses and taxes the real number is often much lower.</p>
                  <p>In 2026, average drivers in major cities spend $6–9 per hour on gas, maintenance, and depreciation. Platform fees take another 25%. Self-employment tax adds 15.3% on net profit.</p>
                  <p>Our Uber Earnings Calculator helps you input hours, trips, tips, and expenses to see your true hourly and monthly income after all deductions.</p>
                  <p>Pro tip: Keep detailed mileage records — you can deduct $0.67 per mile in 2026.</p>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white border border-slate-100 rounded-3xl p-10">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-1"><Calendar size={16} /> April 7, 2026</div>
                  <div className="flex items-center gap-1"><Clock size={16} /> 6 min read</div>
                </div>
                <h3 className="text-3xl font-bold leading-tight mb-6">Self Employment Tax Calculator 2026 Guide</h3>
                <div className="prose prose-slate text-[15.5px] leading-relaxed space-y-6">
                  <p>Self-employed Americans must pay both the employee and employer portion of Social Security and Medicare — totaling 15.3%.</p>
                  <p>The good news? You can deduct half of the self-employment tax from your income. Our calculator automatically applies the 2026 rates and shows you the deductible amount.</p>
                  <p>Quarterly estimated tax payments are due April 15, June 15, September 15, and January 15. Missing them can lead to penalties.</p>
                  <p>Use our free Self Employment Tax Calculator to plan your payments accurately and avoid surprises at tax time.</p>
                </div>
              </div>

              {/* Article 4 */}
              <div className="bg-white border border-slate-100 rounded-3xl p-10">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-1"><Calendar size={16} /> April 6, 2026</div>
                  <div className="flex items-center gap-1"><Clock size={16} /> 7 min read</div>
                </div>
                <h3 className="text-3xl font-bold leading-tight mb-6">How Much Rent Can I Afford in 2026?</h3>
                <div className="prose prose-slate text-[15.5px] leading-relaxed space-y-6">
                  <p>The old 30% rule is becoming outdated in many expensive cities. With high inflation and rising costs, many experts now recommend keeping housing under 25–28% of take-home pay.</p>
                  <p>Our Rent Affordability Calculator considers your income, existing debts, savings goals, and lifestyle expenses to give you a realistic maximum rent amount.</p>
                  <p>In 2026, average rent in major metros continues to rise. Always factor in utilities, internet, parking, and transportation when deciding.</p>
                </div>
              </div>

              {/* Article 5 */}
              <div className="bg-white border border-slate-100 rounded-3xl p-10">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-1"><Calendar size={16} /> April 5, 2026</div>
                  <div className="flex items-center gap-1"><Clock size={16} /> 6 min read</div>
                </div>
                <h3 className="text-3xl font-bold leading-tight mb-6">Salary After Tax Calculator 2026</h3>
                <div className="prose prose-slate text-[15.5px] leading-relaxed space-y-6">
                  <p>Knowing your gross salary is only half the story. Our Salary After Tax Calculator shows your real take-home pay after federal tax, state tax, Social Security, Medicare, and other deductions.</p>
                  <p>In 2026, the Social Security wage base increased again. If you earn above this limit, you stop paying the 6.2% Social Security portion on additional income.</p>
                  <p>Use the calculator when negotiating a new job or planning a move to a different state with different tax rates.</p>
                </div>
              </div>

              {/* Article 6 */}
              <div className="bg-white border border-slate-100 rounded-3xl p-10">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-1"><Calendar size={16} /> April 4, 2026</div>
                  <div className="flex items-center gap-1"><Clock size={16} /> 5 min read</div>
                </div>
                <h3 className="text-3xl font-bold leading-tight mb-6">Loan EMI Calculator – Save on Interest in 2026</h3>
                <div className="prose prose-slate text-[15.5px] leading-relaxed space-y-6">
                  <p>Whether it’s a car loan, personal loan, or home loan, understanding EMI helps you plan better. Our Loan Calculator shows monthly payment, total interest, and full amortization schedule.</p>
                  <p>Even a small reduction in interest rate or shortening the loan term by a few years can save you thousands of dollars.</p>
                  <p>Try different scenarios in our free EMI calculator before signing any loan agreement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Tools Section - Using your real data */}
          <div className="bg-white rounded-3xl p-12">
            <div className="text-center mb-12">
              <Award className="mx-auto text-amber-500 mb-4" size={36} />
              <h2 className="text-4xl font-bold tracking-tight">Popular Tools Used in These Guides</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularTools.slice(0, 6).map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/${tool.category}-calculators`}
                  className="p-7 border border-slate-100 rounded-2xl hover:border-indigo-200 hover:shadow transition-all group"
                >
                  <div className="font-semibold text-lg mb-3 group-hover:text-indigo-600">
                    {tool.shortTitle || tool.title}
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-3">{tool.description}</p>
                  <div className="mt-4 text-xs text-emerald-600">Updated {tool.lastUpdated}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Calculate in 2026?</h2>
            <p className="text-xl opacity-90 mb-10">All our tools are 100% free, private, and updated for current tax laws.</p>
            <Link
              href="/tax-calculators"
              className="inline-flex items-center gap-4 bg-white text-indigo-700 font-bold text-xl px-14 py-6 rounded-3xl hover:bg-amber-300 hover:text-indigo-900 transition-all shadow-2xl"
            >
              Explore All 85+ Free Calculators <Zap className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}