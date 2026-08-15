import { Metadata } from "next";
import Link from "next/link";
import CapitalGainsCalculator from "@/components/calculators/CapitalGainsCalculator";
import {
  CheckCircle2,
  AlertCircle,
  Calculator,
  HelpCircle,
  TrendingUp,
  Landmark,
  BookOpen,
  PieChart
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Capital Gains Tax Calculator 2026 - Estimate Your Profit Taxes",
  description: "Free capital gains tax calculator. Estimate your taxes on stocks, real estate, and crypto profits. Supports both short-term and long-term capital gains rates.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/capital-gains-tax-calculator",
  },
  keywords: ["capital gains tax calculator", "stock tax calculator", "real estate tax calculator", "short term capital gains", "long term capital gains"],
  openGraph: {
    title: "Capital Gains Tax Calculator 2026",
    description: "Estimate your taxes on stocks, real estate, and crypto profits.",
    url: "https://www.freeuscalculator.in/capital-gains-tax-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Gains Tax Calculator 2026",
    description: "Estimate your taxes on stocks, real estate, and crypto profits.",
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Capital Gains Tax Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates estimated taxes on investment profits based on holding period and income bracket.",
  url: "https://www.freeuscalculator.in/capital-gains-tax-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Capital Gains Tax Calculator", item: "https://www.freeuscalculator.in/capital-gains-tax-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "What is the difference between short-term and long-term capital gains?",
    a: "Short-term capital gains apply to assets held for one year or less. These profits are taxed at your ordinary income tax rate. Long-term capital gains apply to assets held for more than one year, and benefit from much lower tax rates (usually 0%, 15%, or 20%)."
  },
  {
    q: "Do I have to pay capital gains tax if I don't sell the asset?",
    a: "No. You only realize a capital gain (and owe tax on it) when you actually sell the asset for a profit. If your stocks go up in value but you hold onto them, you do not owe taxes on those 'unrealized' gains."
  },
  {
    q: "Can I offset my gains with losses?",
    a: "Yes. This strategy is called tax-loss harvesting. If you sell one stock for a $5,000 profit, but sell another for a $2,000 loss, you only pay capital gains tax on the net $3,000 profit. You can also use up to $3,000 of excess losses to offset ordinary income."
  },
  {
    q: "Does this calculator apply to real estate?",
    a: "Yes, but with caveats. If you sell your primary residence, you may qualify for the Section 121 exclusion, which allows you to exclude up to $250,000 (single) or $500,000 (married) of capital gains from taxes, provided you lived in the home for 2 of the last 5 years."
  }
];

const SCHEMA_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS_DATA.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export default function CapitalGainsPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-indigo-200 selection:text-indigo-900 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* 1. H1 & Intro */}
      <section className="bg-white border-b border-slate-200/60 pt-16 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 flex items-center justify-center gap-4">
            <PieChart size={48} className="text-indigo-600 hidden md:block" />
            Capital Gains Tax Calculator
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Estimate how much tax you'll owe when selling stocks, crypto, or real estate. See how holding your assets for over a year can drastically reduce your tax bill.
          </p>
        </div>
      </section>

      {/* 2. Calculator Tool */}
      <section className="max-w-6xl mx-auto px-4 -mt-20 relative z-20 mb-24">
        <div className="shadow-2xl shadow-indigo-900/10 rounded-[2rem]">
           <CapitalGainsCalculator />
        </div>
      </section>

      {/* SEO Content Sections */}
      <section className="max-w-4xl mx-auto px-4 space-y-20">
        
        {/* 3. What is the Calculator? */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">What is Capital Gains Tax?</h2>
          <p>
            Whenever you sell a capital asset (like stocks, bonds, cryptocurrency, or real estate) for more than you paid for it, the profit you make is called a <strong>capital gain</strong>. The IRS requires you to pay taxes on this profit.
          </p>
          <p>
            The amount of tax you owe depends heavily on one crucial factor: <strong>How long did you own the asset before selling it?</strong>
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Short-Term Gains:</strong> Assets held for 1 year or less. These are taxed at your standard ordinary income tax rate (up to 37%).
            </li>
            <li>
              <strong>Long-Term Gains:</strong> Assets held for more than 1 year. These are taxed at much lower, preferential rates (0%, 15%, or 20% depending on your income).
            </li>
          </ul>
        </div>

        {/* 4. How to use */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">How to Use the Capital Gains Calculator</h2>
          
          <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
            <img 
              src="/capital-gains-calculator-screenshot.jpg" 
              alt="Capital Gains Tax Calculator Interface" 
              className="w-full h-auto object-cover"
            />
          </figure>

          <ol className="space-y-4">
            <li><strong>Purchase Price (Cost Basis):</strong> Enter the total amount you originally paid for the asset, including any fees or commissions.</li>
            <li><strong>Sale Price:</strong> Enter the total amount you sold the asset for, minus any selling fees.</li>
            <li><strong>Asset Holding Period:</strong> Select whether you owned the asset for more than 1 year, or 1 year or less. This determines your tax bracket.</li>
            <li><strong>Filing Status:</strong> Choose your IRS tax filing status (e.g., Single, Married Filing Jointly).</li>
            <li><strong>Annual Taxable Income:</strong> Enter your estimated total income for the year from your job or business. This determines your exact capital gains tax rate.</li>
          </ol>
        </div>

        {/* 5. Formula */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">The Capital Gains Formula</h2>
          <p className="text-slate-600 mb-6 leading-loose">Calculating your estimated tax involves finding your net profit and then applying the correct tax rate bracket based on your income and holding period.</p>
          
          <div className="bg-indigo-50 text-indigo-900 font-mono p-5 rounded-2xl font-bold text-center mb-8 border border-indigo-100 text-lg sm:text-xl">
            Tax = (Sale Price - Purchase Price) × Tax Rate
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-4 px-4 font-black text-slate-900 uppercase text-xs tracking-wider">Variable</th>
                  <th className="py-4 px-4 font-black text-slate-900 uppercase text-xs tracking-wider">Meaning</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 text-sm">
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">Sale Price</td>
                  <td className="py-4 px-4 leading-relaxed">The final selling price minus commissions.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">Purchase Price</td>
                  <td className="py-4 px-4 leading-relaxed">Also known as the Cost Basis. What you initially paid.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">Tax Rate</td>
                  <td className="py-4 px-4 leading-relaxed">Determined by your holding period (Short vs Long) and your total taxable income bracket.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Step-by-step example */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Example Capital Gains Calculation</h2>
          <p>Let's look at the math for a single filer who makes <strong>$80,000</strong> a year. They bought stocks for <strong>$10,000</strong> and sold them years later for <strong>$25,000</strong>.</p>
          
          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 1: Calculate Net Capital Gain</h4>
          <p>We find the pure profit by subtracting the initial investment from the final sale amount.</p>
          <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm border border-slate-200 text-slate-700 space-y-2">
            <div>Sale Price: $25,000</div>
            <div>- Purchase Price: $10,000</div>
            <div className="font-bold border-t border-slate-200 pt-2 mt-2">Net Capital Gain = $15,000</div>
          </div>

          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 2: Determine Tax Rate</h4>
          <p>Because they held the stock for <em>more than one year</em>, this is a <strong>Long-Term</strong> capital gain. For a Single filer making $80,000, the long-term capital gains tax bracket is <strong>15%</strong>.</p>
          
          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 3: Calculate Final Tax</h4>
          <div className="bg-emerald-50 p-5 rounded-2xl font-mono text-sm border border-emerald-100 space-y-3 shadow-sm">
            <div className="text-slate-700">Net Profit: <strong className="text-slate-900">$15,000</strong></div>
            <div className="text-slate-700">Tax Rate (Long-Term): <strong className="text-slate-900">15%</strong></div>
            <div className="text-emerald-800 font-bold text-lg pt-3 border-t border-emerald-200/60">
              Tax Due: $15,000 × 0.15 = $2,250
            </div>
            <div className="text-slate-900 font-black text-2xl pt-2">
              Total Estimated Tax = $2,250
            </div>
          </div>
        </div>

        {/* 7. Understanding the result */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Understanding Your Results</h2>
          <p>
            The estimated tax is the amount you will likely owe the IRS when tax season arrives. Note that if you are trading stocks on an app like Robinhood, they generally do <em>not</em> withhold capital gains taxes for you automatically. You are responsible for paying this out of pocket.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl my-8">
            <h4 className="text-blue-900 font-bold mt-0 mb-2">The One-Year Rule</h4>
            <p className="text-blue-800 text-sm m-0 leading-relaxed">
              If the investor in our example had sold their stock after only 11 months instead of holding it for over a year, their $15,000 profit would be taxed as <em>ordinary income</em> at 22%. They would owe $3,300 in taxes instead of $2,250. Simply waiting a few extra weeks to sell can save you thousands of dollars!
            </p>
          </div>
        </div>

        {/* 10. Important Assumptions and Limitations */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-black text-amber-900 mb-4 flex items-center gap-3">
            <AlertCircle size={24} className="shrink-0" /> Important Limitations
          </h2>
          <p className="text-amber-800 leading-relaxed mb-0">
            This calculator estimates federal taxes based on standard tax brackets. It does not account for state capital gains taxes, which vary wildly (from 0% in states like Texas and Florida to 13.3% in California). Furthermore, high earners may be subject to the 3.8% Net Investment Income Tax (NIIT).
          </p>
        </div>

        {/* 11. Common Mistakes */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Common Capital Gains Mistakes</h2>
          <div className="space-y-6 mt-8">
            <div>
              <h4 className="font-bold text-lg mb-2">1. Forgetting to deduct capital losses</h4>
              <p className="m-0">Always remember to offset your winning trades with your losing trades before calculating your final tax bill. This is essential for day traders and crypto investors.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">2. Selling immediately for a quick profit</h4>
              <p className="m-0">Day trading guarantees you will pay the absolute highest tax rates possible (short-term ordinary income). Buy-and-hold investing utilizes the long-term tax rates, which are significantly lower.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">3. Not tracking cost basis correctly</h4>
              <p className="m-0">If you bought Bitcoin in 10 different transactions over 3 years, tracking your exact "purchase price" when you sell a fraction of a coin can be a nightmare. Use tax software to track your cost basis automatically.</p>
            </div>
          </div>
        </div>

        {/* 12. FAQ */}
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-8 text-center sm:text-left">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS_DATA.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-indigo-200 transition-colors">
                <h3 className="font-black text-slate-900 text-lg mb-3 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-indigo-500 shrink-0 mt-1" />
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-8 m-0">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 13. & 14. Related Tools and Guides */}
        <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-slate-200">
          <div className="bg-slate-100/80 border border-slate-200 rounded-3xl p-8">
            <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-indigo-600" />
              Related Calculators
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/1099-tax-calculator" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  1099 Tax Calculator
                </Link>
              </li>
              <li>
                <Link href="/paycheck-calculator" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Paycheck Calculator
                </Link>
              </li>
              <li>
                <Link href="/salary-after-tax-calculator" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Salary After Tax Calculator
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100/80 border border-slate-200 rounded-3xl p-8">
            <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-indigo-600" />
              Related Guides
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  What is Tax-Loss Harvesting?
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Understanding the Net Investment Income Tax
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Real Estate Capital Gains Exemptions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 16. Author & 17. Sources & 18. Last Updated */}
        <div className="border-t border-slate-200 pt-10 text-sm text-slate-500 space-y-6 pb-12">
          <p><strong>Author / Reviewer:</strong> Anmol Giri</p>
          
          <div>
            <strong className="block mb-2 text-slate-700">Sources & References:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="nofollow noreferrer" className="hover:text-indigo-600 transition-colors">IRS: Topic No. 409, Capital Gains and Losses</a></li>
              <li><a href="https://www.irs.gov/publications/p550" target="_blank" rel="nofollow noreferrer" className="hover:text-indigo-600 transition-colors">IRS Publication 550 - Investment Income and Expenses</a></li>
            </ul>
          </div>
          
          <p className="inline-block bg-slate-100 px-3 py-1.5 rounded-lg font-medium">Last updated: August 2026</p>
        </div>

      </section>
    </main>
  );
}
