import { Metadata } from "next";
import Link from "next/link";
import Retirement401kCalculator from "@/components/calculators/401kCalculator";
import {
  CheckCircle2,
  AlertCircle,
  Calculator,
  HelpCircle,
  FileText,
  DollarSign,
  TrendingUp,
  Landmark,
  BookOpen
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "401(k) Calculator 2026 - Employer Match & Growth Estimator",
  description: "Free 401(k) retirement calculator. Estimate your future balance, employer match contributions, and compound interest growth over time.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/401k-calculator",
  },
  keywords: ["401k calculator", "employer match calculator", "retirement calculator", "401k growth calculator", "401k match"],
  openGraph: {
    title: "401(k) Calculator 2026",
    description: "Estimate your future 401(k) balance, employer match, and compound interest.",
    url: "https://www.freeuscalculator.in/401k-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "401(k) Calculator 2026",
    description: "Estimate your future 401(k) balance and employer match.",
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "401(k) Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates future 401(k) balances including employer match and compound interest growth.",
  url: "https://www.freeuscalculator.in/401k-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Retirement Calculators", item: "https://www.freeuscalculator.in/retirement-calculators" },
    { "@type": "ListItem", position: 3, name: "401(k) Calculator", item: "https://www.freeuscalculator.in/401k-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "How does a 401(k) employer match work?",
    a: "An employer match is when your company contributes money to your 401(k) based on how much you contribute. For example, a common match is '100% up to 4% of your salary'. If you earn $100,000 and contribute 4% ($4,000), your employer will add $4,000 to your account for free."
  },
  {
    q: "What is a good rate of return for a 401(k)?",
    a: "Historically, the stock market (S&P 500) has returned an average of 7% to 10% per year after inflation. When projecting over decades, using 6% to 7% is considered a safe, conservative estimate for a diversified retirement portfolio."
  },
  {
    q: "How much should I contribute to my 401(k)?",
    a: "At a bare minimum, you should always contribute enough to get your full employer match—otherwise, you are leaving free money on the table. Financial experts often recommend saving 10% to 15% of your total income for retirement."
  },
  {
    q: "What is the maximum I can contribute in 2026?",
    a: "Contribution limits change based on IRS rules. Generally, the employee limit in recent years has been around $23,000, with a $7,500 catch-up contribution allowed for those over age 50. Employer contributions do not count toward this employee limit."
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

export default function Retirement401kPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-indigo-200 selection:text-indigo-900 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* 1. H1 & Intro */}
      <section className="bg-white border-b border-slate-200/60 pt-16 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            401(k) Calculator
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Visualize your future wealth. This 401(k) calculator estimates your retirement balance by factoring in your salary, employer match, and the power of compound interest over time.
          </p>
        </div>
      </section>

      {/* 2. Calculator Tool */}
      <section className="max-w-6xl mx-auto px-4 -mt-20 relative z-20 mb-24">
        <div className="shadow-2xl shadow-indigo-900/10 rounded-[2rem]">
           <Retirement401kCalculator />
        </div>
      </section>

      {/* SEO Content Sections */}
      <section className="max-w-4xl mx-auto px-4 space-y-20">
        
        {/* 3. What is the Calculator? */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">What is a 401(k)?</h2>
          <p>
            A 401(k) is an employer-sponsored retirement savings plan that allows workers to save and invest a piece of their paycheck before taxes are taken out. Taxes aren't paid until the money is withdrawn from the account (in retirement).
          </p>
          <p>
            The 401(k) is considered the most powerful wealth-building tool available to the average employee for two main reasons:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Employer Matches:</strong> Many employers will match a portion of your contributions. This is essentially "free money" and an instant 50% to 100% return on your investment.
            </li>
            <li>
              <strong>Tax-Advantaged Compound Interest:</strong> Because the money is taken out of your paycheck pre-tax, you can invest more upfront. Over decades, the interest you earn begins to earn its own interest, creating an exponential growth curve.
            </li>
          </ul>
        </div>

        {/* 4. How to use */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">How to Use the 401(k) Calculator</h2>
          
          <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
             {/* Placeholder for screenshot - user can drop 401k-calculator-screenshot.jpg here */}
            <img 
              src="/401k-calculator-screenshot.jpg" 
              alt="401(k) Calculator Interface" 
              className="w-full h-auto object-cover"
            />
          </figure>

          <ol className="space-y-4">
            <li><strong>Enter your Details:</strong> Input your current age, planned retirement age, and any current 401(k) balance you already have saved.</li>
            <li><strong>Set Your Income:</strong> Enter your current annual salary and your expected annual raise percentage (usually 2-3% to match inflation).</li>
            <li><strong>Adjust Contributions:</strong> Select what percentage of your salary you plan to contribute. Remember, higher contributions lower your taxable income today!</li>
            <li><strong>Add Employer Match:</strong> Input your company's matching rules. (e.g. 100% match up to 4% of salary).</li>
            <li><strong>Review the Chart:</strong> Watch how your contributions, employer match, and investment growth stack up over time in the results chart.</li>
          </ol>
        </div>

        {/* 5. Formula */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">The Compound Interest Formula</h2>
          <p className="text-slate-600 mb-6 leading-loose">Under the hood, a 401(k) grows using the standard compound interest formula, adjusted for continuous monthly contributions:</p>
          
          <div className="bg-indigo-50 text-indigo-900 font-mono p-5 rounded-2xl font-bold text-center mb-8 border border-indigo-100 text-lg sm:text-xl">
            A = P(1 + r/n)^(nt) + PMT × (((1 + r/n)^(nt) - 1) / (r/n))
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
                  <td className="py-4 px-4 font-bold text-slate-800">A</td>
                  <td className="py-4 px-4 leading-relaxed">The future value of your 401(k) at retirement.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">P</td>
                  <td className="py-4 px-4 leading-relaxed">Your principal (current 401(k) balance).</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">PMT</td>
                  <td className="py-4 px-4 leading-relaxed">The monthly contribution (Your contribution + Employer Match).</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">r & t</td>
                  <td className="py-4 px-4 leading-relaxed">The annual return rate (r) and the number of years until retirement (t).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Step-by-step example */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Example 401(k) Projection</h2>
          <p>Let's look at a realistic example of how powerful a 401(k) can be. Suppose you are <strong>30 years old</strong>, make <strong>$75,000/year</strong>, and plan to retire at <strong>65</strong>. You have $10,000 saved already.</p>
          
          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 1: Calculate Total Yearly Contribution</h4>
          <p>You contribute 6% of your salary, and your employer matches 100% up to 4%.</p>
          <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm border border-slate-200 text-slate-700 space-y-2">
            <div>Your Contribution: $75,000 × 6% = $4,500/year</div>
            <div>Employer Match: $75,000 × 4% = $3,000/year</div>
            <div className="font-bold">Total Annual Savings = $7,500</div>
          </div>

          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 2: Apply Compound Growth (35 Years)</h4>
          <p>Assuming a conservative 7% annual return and a 2% annual salary raise, your money begins to compound. By the time you are 65, the math looks incredible.</p>
          
          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 3: Total Retirement Balance</h4>
          <div className="bg-emerald-50 p-5 rounded-2xl font-mono text-sm border border-emerald-100 space-y-3 shadow-sm">
            <div className="text-slate-700">You Contributed (Principal): <strong className="text-slate-900">$239,475</strong></div>
            <div className="text-slate-700">Employer Contributed (Free Money): <strong className="text-slate-900">$152,983</strong></div>
            <div className="text-emerald-800 font-bold text-lg pt-3 border-t border-emerald-200/60">
              Investment Growth: $1,088,306
            </div>
            <div className="text-slate-900 font-black text-2xl pt-2">
              Total Final Balance = $1,480,763
            </div>
            <div className="text-slate-600 text-xs font-sans mt-2">
              (Over 75% of your final wealth came entirely from interest and employer money, not your own pocket!)
            </div>
          </div>
        </div>

        {/* 7. Understanding the result */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Understanding Your Results</h2>
          <p>
            Your results show your projected wealth at retirement age. It's broken down into three critical buckets:
          </p>
          <ul className="space-y-2">
            <li><strong>Your Contributions:</strong> The actual money that was deducted from your paychecks over the years.</li>
            <li><strong>Employer Match:</strong> The "free money" your company gave you as a reward for saving.</li>
            <li><strong>Investment Growth:</strong> The magic of compound interest. In a healthy 401(k), this should always be the largest number by far.</li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl my-8">
            <h4 className="text-blue-900 font-bold mt-0 mb-2">The "Free Money" Rule</h4>
            <p className="text-blue-800 text-sm m-0 leading-relaxed">
              Never leave money on the table. If your employer offers a match (e.g., 5%), you should do absolutely everything in your power to contribute at least 5% of your salary. If you contribute 0%, you are effectively taking a voluntary pay cut.
            </p>
          </div>
        </div>

        {/* 8. What can you calculate */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">What Else Can You Calculate?</h2>
          <ul className="space-y-2">
            <li><strong>The Cost of Waiting:</strong> Try changing your "Current Age" from 30 to 40, and see how drastically your final balance drops. This proves the importance of starting early.</li>
            <li><strong>The Impact of Raises:</strong> See how increasing your annual raise by just 1% affects your final balance.</li>
            <li><strong>Match Limitations:</strong> See the exact dollar amount your employer will contribute over your lifetime.</li>
          </ul>
        </div>

        {/* 10. Important Assumptions and Limitations */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-black text-amber-900 mb-4 flex items-center gap-3">
            <AlertCircle size={24} className="shrink-0" /> Important Limitations
          </h2>
          <p className="text-amber-800 leading-relaxed mb-0">
            This calculator provides a steady, linear projection. In reality, the stock market is volatile—some years you may gain 20%, other years you may lose 10%. Additionally, this calculator does not adjust the final balance for <strong>inflation</strong>. A million dollars in 30 years will not have the same purchasing power as a million dollars today. Finally, the calculator assumes you never take an early withdrawal (which carries a 10% IRS penalty).
          </p>
        </div>

        {/* 11. Common Mistakes */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Common 401(k) Mistakes</h2>
          <div className="space-y-6 mt-8">
            <div>
              <h4 className="font-bold text-lg mb-2">1. Not getting the full match</h4>
              <p className="m-0">As mentioned, if your employer matches 5% and you only contribute 3%, you are giving up thousands of dollars of free money every single year.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">2. Leaving the money in cash</h4>
              <p className="m-0">When you contribute to a 401(k), the money must be invested (e.g., into a Target Date Fund or S&P 500 index fund). If you leave it in the default "Money Market" or cash sweep account, it will not grow at 7%, and inflation will destroy its value.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">3. Cashing out when changing jobs</h4>
              <p className="m-0">When you leave a job, do not cash out your 401(k). You will be hit with regular income tax PLUS a 10% early withdrawal penalty. Always "roll over" your old 401(k) into an IRA or your new employer's 401(k).</p>
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
                <Link href="/paycheck-calculator" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Paycheck Calculator (See how 401k affects Net Pay)
                </Link>
              </li>
              <li>
                <Link href="/salary-after-tax-calculator" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Salary After Tax Calculator
                </Link>
              </li>
              <li>
                <Link href="/1099-tax-calculator" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  1099 Tax Calculator
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
                  Traditional vs Roth 401(k): Which is better?
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  How to Roll Over an Old 401(k)
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  What is a Good Target Date Fund?
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
              <li><a href="https://www.irs.gov/retirement-plans/401k-plans" target="_blank" rel="nofollow noreferrer" className="hover:text-indigo-600 transition-colors">IRS: 401(k) Plans</a></li>
              <li><a href="https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" target="_blank" rel="nofollow noreferrer" className="hover:text-indigo-600 transition-colors">SEC.gov: Compound Interest</a></li>
            </ul>
          </div>
          
          <p className="inline-block bg-slate-100 px-3 py-1.5 rounded-lg font-medium">Last updated: August 2026</p>
        </div>

      </section>
    </main>
  );
}
