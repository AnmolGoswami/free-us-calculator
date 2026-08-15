import { Metadata } from "next";
import Link from "next/link";
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import {
  CheckCircle2,
  AlertCircle,
  Calculator,
  TrendingUp,
  Landmark,
  BookOpen,
  LineChart
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Compound Interest Calculator 2026 - Watch Your Money Grow",
  description: "Free compound interest calculator. Calculate future value, total interest earned, and see the exact power of daily, monthly, or annual compounding over time.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/compound-interest-calculator",
  },
  keywords: ["compound interest calculator", "investment calculator", "interest calculator", "future value calculator", "compound growth"],
  openGraph: {
    title: "Compound Interest Calculator 2026",
    description: "Calculate future value, total interest earned, and watch your money grow.",
    url: "https://www.freeuscalculator.in/compound-interest-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compound Interest Calculator 2026",
    description: "Calculate future value, total interest earned, and watch your money grow.",
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Compound Interest Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates the future value of investments over time, highlighting the effects of compound interest and regular contributions.",
  url: "https://www.freeuscalculator.in/compound-interest-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Compound Interest Calculator", item: "https://www.freeuscalculator.in/compound-interest-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "What is compound interest?",
    a: "Compound interest is the interest you earn on both your original money (the principal) and on the interest you've already earned. It's why investments grow exponentially over time rather than linearly."
  },
  {
    q: "How often should interest compound?",
    a: "The more frequently interest compounds, the faster your money grows. Daily compounding is better than monthly compounding, which is better than annual compounding. However, the most critical factor is the amount of time you leave the money invested."
  },
  {
    q: "What is a realistic interest rate to use?",
    a: "Historically, the U.S. stock market (S&P 500) has returned an average of around 9-10% annually before inflation. For conservative estimates, financial advisors often recommend using 6% or 7% to account for inflation and market volatility."
  },
  {
    q: "Does starting early really make a big difference?",
    a: "Absolutely. Time is the most important variable in the compound interest formula. Investing $100 a month starting at age 20 will yield significantly more wealth at retirement than investing $500 a month starting at age 40."
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

export default function CompoundInterestPage() {
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
            <LineChart size={48} className="text-indigo-600 hidden md:block" />
            Compound Interest Calculator
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover the magic of compound interest. See exactly how your initial investment and monthly contributions can grow into life-changing wealth over time.
          </p>
        </div>
      </section>

      {/* 2. Calculator Tool */}
      <section className="max-w-6xl mx-auto px-4 -mt-20 relative z-20 mb-24">
        <div className="shadow-2xl shadow-indigo-900/10 rounded-[2rem]">
           <CompoundInterestCalculator />
        </div>
      </section>

      {/* SEO Content Sections */}
      <section className="max-w-4xl mx-auto px-4 space-y-20">
        
        {/* 3. What is the Calculator? */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">What is Compound Interest?</h2>
          <p>
            Albert Einstein famously called compound interest the "eighth wonder of the world," stating: <em>"He who understands it, earns it; he who doesn't, pays it."</em>
          </p>
          <p>
            When you invest money, you earn interest on your principal balance. In the next period, you earn interest on your principal <strong>plus</strong> the interest you just earned. This creates a snowball effect where your wealth grows exponentially, allowing ordinary people to become millionaires over a lifetime of consistent investing.
          </p>
        </div>

        {/* 4. How to use */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">How to Use the Compound Interest Calculator</h2>
          
          <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
            <img 
              src="/compound-interest-calculator-screenshot.jpg" 
              alt="Compound Interest Calculator Interface" 
              className="w-full h-auto object-cover"
            />
          </figure>

          <ol className="space-y-4">
            <li><strong>Initial Investment:</strong> Enter the starting amount you currently have saved or intend to invest right now.</li>
            <li><strong>Monthly Contribution:</strong> Enter how much you plan to consistently add to the account every month.</li>
            <li><strong>Years to Grow:</strong> The time horizon you plan to leave the money invested without touching it. (e.g., 20 or 30 years).</li>
            <li><strong>Estimated Interest Rate:</strong> The annual percentage yield (APY) you expect to earn. A diversified index fund typically aims for 7-10% long-term.</li>
          </ol>
        </div>

        {/* 5. Formula */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">The Compound Interest Formula</h2>
          <p className="text-slate-600 mb-6 leading-loose">To calculate future value with both an initial principal and regular monthly contributions, the math gets slightly complex. It combines the compound interest formula with the future value of an annuity formula.</p>
          
          <div className="bg-indigo-50 text-indigo-900 font-mono p-5 rounded-2xl font-bold text-center mb-8 border border-indigo-100 text-lg sm:text-xl overflow-x-auto">
            A = P(1 + r/n)^(nt) + PMT × {'{[(1 + r/n)^(nt) - 1] / (r/n)}'}
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
                  <td className="py-4 px-4 leading-relaxed">The total Future Value of the investment.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">P</td>
                  <td className="py-4 px-4 leading-relaxed">The Principal (Initial Investment).</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">PMT</td>
                  <td className="py-4 px-4 leading-relaxed">The monthly contribution amount.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">r & n & t</td>
                  <td className="py-4 px-4 leading-relaxed">Annual interest rate (r), times compounded per year (n), and total years (t).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Step-by-step example */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Example Compound Growth Projection</h2>
          <p>Let's see exactly how powerful consistency is. Imagine you start with <strong>$10,000</strong> today, and you contribute just <strong>$500 every month</strong> for <strong>20 years</strong>. You achieve an average historical market return of <strong>8% annually</strong>.</p>
          
          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 1: Calculate Your Contributions</h4>
          <p>Over 20 years, you make 240 monthly payments of $500, plus your initial $10,000.</p>
          <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm border border-slate-200 text-slate-700 space-y-2">
            <div>Initial Savings: $10,000</div>
            <div>+ Added Over Time: $120,000 ($500 × 240 months)</div>
            <div className="font-bold">Total Money Out of Pocket = $130,000</div>
          </div>

          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 2: Add Compound Interest Magic</h4>
          <p>Because your money was invested at 8% and continuously reinvested, the interest snowball completely overtakes your principal contributions.</p>
          
          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 3: Final Breakdown</h4>
          <div className="bg-emerald-50 p-5 rounded-2xl font-mono text-sm border border-emerald-100 space-y-3 shadow-sm">
            <div className="text-slate-700">Total Contributions: <strong className="text-slate-900">$130,000</strong></div>
            <div className="text-emerald-800 font-bold text-lg pt-3 border-t border-emerald-200/60">
              Total Interest Earned: $213,778
            </div>
            <div className="text-slate-900 font-black text-2xl pt-2">
              Total Final Value = $343,778
            </div>
            <div className="text-slate-600 text-xs font-sans mt-2">
              (Notice that your interest earned is almost double what you actually contributed!)
            </div>
          </div>
        </div>

        {/* 7. Understanding the result */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Understanding Your Results</h2>
          <p>
            When you look at your results chart, you will notice that the growth curve starts out relatively flat, but bends upward sharply in the later years. This is the defining characteristic of exponential growth. 
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl my-8">
            <h4 className="text-blue-900 font-bold mt-0 mb-2">The Cost of Waiting</h4>
            <p className="text-blue-800 text-sm m-0 leading-relaxed">
              If you wait just 5 years to start investing, you don't just miss out on 5 years of growth—you miss out on the <em>most profitable</em> 5 years of compounding at the very end of your time horizon. Time in the market is vastly more important than timing the market.
            </p>
          </div>
        </div>

        {/* 10. Important Assumptions and Limitations */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-black text-amber-900 mb-4 flex items-center gap-3">
            <AlertCircle size={24} className="shrink-0" /> Important Limitations
          </h2>
          <p className="text-amber-800 leading-relaxed mb-0">
            This calculator assumes a constant, fixed interest rate. In the real world, the stock market is highly volatile—you might lose 20% one year and gain 30% the next. Furthermore, this calculator does not account for inflation, which will reduce the purchasing power of your future wealth.
          </p>
        </div>

        {/* 11. Common Mistakes */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Common Investing Mistakes</h2>
          <div className="space-y-6 mt-8">
            <div>
              <h4 className="font-bold text-lg mb-2">1. Keeping cash under the mattress</h4>
              <p className="m-0">With inflation historically averaging 3% a year, leaving your savings in a 0% interest checking account guarantees that your money is losing value every single day.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">2. Interrupting compounding unnecessarily</h4>
              <p className="m-0">The late Charlie Munger famously said, "The first rule of compounding: Never interrupt it unnecessarily." Pulling your money out of the market out of fear resets your compounding curve.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">3. Underestimating fees</h4>
              <p className="m-0">A 2% management fee from a financial advisor doesn't sound like much, but over 30 years, that tiny fee can literally eat up 40% of your total potential wealth. Stick to low-cost index funds when possible.</p>
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
                <Link href="/retirement-goal-calculator" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Retirement Goal Calculator
                </Link>
              </li>
              <li>
                <Link href="/401k-calculator" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  401(k) Calculator
                </Link>
              </li>
              <li>
                <Link href="/roth-ira-calculator" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Roth IRA Calculator
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
                  How the Rule of 72 Works
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Understanding Index Funds
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  The Impact of Inflation on Savings
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
              <li><a href="https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" target="_blank" rel="nofollow noreferrer" className="hover:text-indigo-600 transition-colors">SEC.gov: Compound Interest Guidelines</a></li>
              <li><a href="https://www.fdic.gov/resources/consumers/consumer-news/2021-04.html" target="_blank" rel="nofollow noreferrer" className="hover:text-indigo-600 transition-colors">FDIC: The Power of Compounding</a></li>
            </ul>
          </div>
          
          <p className="inline-block bg-slate-100 px-3 py-1.5 rounded-lg font-medium">Last updated: August 2026</p>
        </div>

      </section>
    </main>
  );
}
