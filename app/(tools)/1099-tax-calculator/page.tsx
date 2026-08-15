import { Metadata } from "next";
import Link from "next/link";
import ContractorTaxCalculator from "@/components/calculators/1099TaxCalculator";
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
  title: "1099 Tax Calculator 2026 | Freelance & Independent Contractor",
  description: "Estimate your 1099 taxes for 2026. Instantly calculate Federal, State, and Self-Employment taxes to find your true freelance net income.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/1099-tax-calculator",
  },
  keywords: ["1099 tax calculator", "freelance tax calculator", "independent contractor tax calculator 2026", "self employment tax estimate", "gig worker tax calculator"],
  openGraph: {
    title: "1099 Tax Calculator 2026",
    description: "Calculate your total 1099 taxes including Federal, State, and Self-Employment tax.",
    url: "https://www.freeuscalculator.in/1099-tax-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1099 Tax Calculator (2026)",
    description: "Instantly calculate Federal, State, and Self-Employment taxes to find your true freelance net income.",
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "1099 Tax Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates total 1099 taxes including Federal, State, and Self-Employment tax for freelancers and contractors.",
  url: "https://www.freeuscalculator.in/1099-tax-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Tax Calculators", item: "https://www.freeuscalculator.in/tax-calculators" },
    { "@type": "ListItem", position: 3, name: "1099 Tax Calculator", item: "https://www.freeuscalculator.in/1099-tax-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "What is the 1099 tax rate for 2026?",
    a: "There is no single '1099 tax rate'. You pay a flat 15.3% for Self-Employment tax, plus your standard Federal Income Tax (which ranges from 10% to 37% based on your bracket), plus any applicable State Income Tax."
  },
  {
    q: "When are 1099 quarterly taxes due?",
    a: "Quarterly estimated taxes are typically due on April 15, June 15, September 15, and January 15 (of the following year). If these dates fall on a weekend or holiday, the deadline moves to the next business day."
  },
  {
    q: "How much should I set aside for 1099 taxes?",
    a: "A common rule of thumb is to set aside 25% to 30% of your gross 1099 income to cover your Self-Employment, Federal, and State taxes. Use our calculator above for a more accurate customized estimate."
  },
  {
    q: "Can I deduct my home office?",
    a: "Yes, if you use a part of your home exclusively and regularly for conducting business, you can deduct a portion of your rent, mortgage interest, utilities, and internet as a business expense."
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

export default function ContractorTaxPage() {
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
            1099 Tax Calculator
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Calculate your estimated 1099 taxes quickly and accurately. This calculator determines your Self-Employment Tax, Federal Income Tax, and State Tax to reveal your true net business income as an independent contractor.
          </p>
        </div>
      </section>

      {/* 2. Calculator Tool */}
      <section className="max-w-5xl mx-auto px-4 -mt-20 relative z-20 mb-24">
        <div className="shadow-2xl shadow-indigo-900/10 rounded-[2rem]">
           <ContractorTaxCalculator />
        </div>
      </section>

      {/* SEO Content Sections */}
      <section className="max-w-4xl mx-auto px-4 space-y-20">
        
        {/* 3. What is the Calculator? */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">What Are 1099 Taxes?</h2>
          <p>
            When you work as a W-2 employee, your employer automatically withholds taxes from your paycheck. More importantly, your employer covers half of your Medicare and Social Security taxes (known as FICA). 
          </p>
          <p>
            However, when you work as a 1099 independent contractor, freelancer, sole proprietor, or gig worker (such as an Uber driver or DoorDash courier), you are considered both the employer and the employee by the IRS. This means <strong>you are responsible for the entire tax burden</strong>, and no taxes are withheld for you throughout the year. 
          </p>
          <p>
            To avoid massive penalties in April, you must calculate and pay your own taxes. Your total 1099 tax burden typically consists of three distinct parts:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Self-Employment (SE) Tax (15.3%):</strong> This is the biggest surprise for new freelancers. You must pay 12.4% for Social Security (up to an annual cap) and 2.9% for Medicare on all your net business income.
            </li>
            <li>
              <strong>Federal Income Tax:</strong> After calculating your SE tax, you owe standard federal income tax. This is calculated based on progressive tax brackets (ranging from 10% to 37%) after taking the standard deduction and potential Qualified Business Income (QBI) deductions.
            </li>
            <li>
              <strong>State Income Tax:</strong> Depending on the specific state where you reside and operate your business, you may owe state taxes on your net profits. (States like Texas, Florida, and Nevada have 0% state income tax).
            </li>
          </ul>
        </div>

        {/* 4. How to use */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">How to Use the 1099 Tax Calculator</h2>
          
          <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <img 
              src="/1099-calculator-screenshot.jpg" 
              alt="1099 Tax Calculator Interface showing inputs and results dashboard" 
              className="w-full h-auto object-cover"
            />
            <figcaption className="text-center text-sm text-slate-500 bg-slate-50 py-3 border-t border-slate-200 font-medium">
              Example: Entering $100,000 gross income with $15,000 in expenses to see the full 1099 tax breakdown.
            </figcaption>
          </figure>

          <ol className="space-y-4">
            <li><strong>Enter your Gross 1099 Income:</strong> This is the total amount of money you earned from your freelance work before any deductions.</li>
            <li><strong>Enter Business Expenses:</strong> Deductible expenses (like software, internet, home office, and travel) lower your taxable income.</li>
            <li><strong>Select Filing Status:</strong> Choose Single or Married Filing Jointly, as this affects your standard deduction and federal tax brackets.</li>
            <li><strong>Select State Tax Rate:</strong> Choose the approximate tax rate for your state (or 0% if you live in a state like Texas or Florida with no state income tax).</li>
            <li><strong>Review Your Results:</strong> The calculator will instantly break down your Self-Employment Tax, Federal Tax, State Tax, and your Net Take-Home Pay.</li>
          </ol>
        </div>

        {/* 5. Formula */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">1099 Tax Formula</h2>
          <p className="text-slate-600 mb-6 leading-loose">While Federal and State taxes use complex progressive brackets, the Self-Employment (SE) Tax formula is straightforward:</p>
          
          <div className="bg-indigo-50 text-indigo-900 font-mono p-5 rounded-2xl font-bold text-center mb-8 border border-indigo-100 text-lg sm:text-xl">
            SE Tax = (Gross Income - Expenses) × 92.35% × 15.3%
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
                  <td className="py-4 px-4 font-bold text-slate-800">Gross Income - Expenses</td>
                  <td className="py-4 px-4 leading-relaxed">Your "Net Business Income" (your true profit).</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">92.35%</td>
                  <td className="py-4 px-4 leading-relaxed">The IRS allows you to calculate SE tax on only 92.35% of your net earnings (simulating the employer half deduction).</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-slate-800">15.3%</td>
                  <td className="py-4 px-4 leading-relaxed">The combined rate for Social Security (12.4%) and Medicare (2.9%).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Step-by-step example */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Example 1099 Tax Calculation</h2>
          <p>Let's look at a detailed, real-world example. Suppose you are a single filer who earned <strong>$100,000</strong> from your freelance business in 2026. You tracked <strong>$15,000</strong> in legitimate business expenses (such as a laptop, internet, and travel). You live in a state with a medium <strong>5% tax rate</strong>.</p>
          
          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 1: Calculate Net Business Income (Taxable Base)</h4>
          <p>You are only taxed on your profit, not your gross revenue.</p>
          <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm border border-slate-200 text-slate-700">
            $100,000 (Gross Income) - $15,000 (Business Expenses) = <strong>$85,000 (Net Business Income)</strong>
          </div>

          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 2: Calculate Self-Employment Tax</h4>
          <p>The IRS allows you to multiply your net income by 92.35% before applying the 15.3% SE tax rate. This mimics the employer-side deduction.</p>
          <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm border border-slate-200 text-slate-700 space-y-2">
            <div>SE Taxable Base = $85,000 × 92.35% = $78,497.50</div>
            <div>Self-Employment Tax = $78,497.50 × 15.3% = <strong>$12,010</strong></div>
          </div>

          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 3: Calculate Federal & State Income Tax</h4>
          <p>Before calculating federal tax, you can deduct half of your SE tax ($6,005), your standard deduction ($16,100 for a single filer), and claim the 20% Qualified Business Income (QBI) deduction. After these deductions, your taxable federal income drops significantly.</p>
          <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm border border-slate-200 text-slate-700 space-y-2">
            <div>Federal Income Tax (Progressive brackets applied) = <strong>$5,404</strong></div>
            <div>State Tax ($85,000 × 5%) = <strong>$4,250</strong></div>
          </div>

          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 4: Total Taxes & Take-Home Pay</h4>
          <p>Add the three taxes together to find your total tax burden for the year.</p>
          <div className="bg-emerald-50 p-5 rounded-2xl font-mono text-sm border border-emerald-100 space-y-3 shadow-sm">
            <div className="text-slate-700">Total Taxes = $12,010 (SE) + $5,404 (Fed) + $4,250 (State) = <strong className="text-rose-600 text-lg">$21,664</strong></div>
            <div className="text-emerald-800 font-bold text-lg pt-3 border-t border-emerald-200/60">
              Net Take-Home Pay = $85,000 - $21,664 = $63,336
            </div>
            <div className="text-slate-600 text-xs font-sans mt-2">
              Effective Tax Rate: 25.5% (meaning you keep about 74.5% of your net profits)
            </div>
          </div>
        </div>

        {/* 7. Understanding the result */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Understanding Your Tax Result</h2>
          <p>
            Your result shows your <strong>Total Estimated Taxes</strong> (the amount you owe the government) and your <strong>Net Take-Home Pay</strong> (the money that actually goes into your pocket). 
          </p>
          <p>
            Because independent contractors do not have taxes withheld automatically, <strong>you must set aside a portion of your income yourself.</strong> The total tax number given by the calculator is the approximate amount you should divide into four and send to the IRS throughout the year.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl my-8">
            <h4 className="text-blue-900 font-bold mt-0 mb-2">The Quarterly Tax Rule</h4>
            <p className="text-blue-800 text-sm m-0 leading-relaxed">
              The US operates on a "pay-as-you-go" tax system. If you expect to owe more than $1,000 in taxes for the year as a 1099 worker, you cannot wait until April to pay your bill. You must make four quarterly estimated tax payments (typically in April, June, September, and January). If you fail to make these payments, the IRS will charge you underpayment penalties and interest.
            </p>
          </div>
          <p>
            <strong>Pro Tip:</strong> Look at your <em>Effective Tax Rate</em> in the results. If your effective tax rate is 25.5%, you should set up a separate bank account and transfer 25.5% of every invoice you get paid into that account immediately. This guarantees you will always have the cash ready when quarterly taxes are due.
          </p>
        </div>

        {/* 8. What can you calculate */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">What Can You Calculate?</h2>
          <ul className="space-y-2">
            <li><strong>Total 1099 Tax Burden:</strong> The sum of your SE, Federal, and State taxes.</li>
            <li><strong>Self-Employment Tax Liability:</strong> Exactly how much you owe for Medicare and Social Security.</li>
            <li><strong>Effective Tax Rate:</strong> The actual percentage of your net income that goes to taxes.</li>
            <li><strong>Tax Savings from Expenses:</strong> See how increasing your legitimate business expenses lowers your tax bill.</li>
          </ul>
        </div>

        {/* 9. Common Uses */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Common Uses of a 1099 Tax Calculator</h2>
          <p>Percentage and tax calculations are commonly used for:</p>
          <ul className="space-y-2">
            <li><strong>Gig Workers:</strong> Uber drivers, DoorDashers, and delivery drivers estimating their net profits.</li>
            <li><strong>Freelancers & Consultants:</strong> Designers, developers, and consultants planning their quarterly estimated payments.</li>
            <li><strong>Job Comparisons:</strong> Comparing a W-2 salary offer against a 1099 contract rate to see which actually pays more after taxes.</li>
          </ul>
        </div>

        {/* 10. Important Assumptions and Limitations */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-black text-amber-900 mb-4 flex items-center gap-3">
            <AlertCircle size={24} className="shrink-0" /> Important Notes
          </h2>
          <p className="text-amber-800 leading-relaxed mb-0">
            This calculator provides an estimate based on simplified 2026 federal tax brackets. It assumes you take the standard deduction and a standard 20% Qualified Business Income (QBI) deduction. It does not account for complex local city taxes, additional itemized deductions, capital gains, or alternative minimum tax (AMT). Always consult with a licensed CPA or tax professional before making final tax payments.
          </p>
        </div>

        {/* 11. Common Mistakes */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Common 1099 Tax Mistakes</h2>
          <div className="space-y-6 mt-8">
            <div>
              <h4 className="font-bold text-lg mb-2">Forgetting to pay quarterly taxes</h4>
              <p className="m-0">The US has a "pay-as-you-go" tax system. If you owe more than $1,000 at the end of the year and didn't make quarterly payments, you will face IRS underpayment penalties.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Under-reporting expenses</h4>
              <p className="m-0">Every legitimate business expense (like the mileage you drove for work, software subscriptions, or home office space) lowers your net income, which directly lowers your taxes. Track everything carefully.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Ignoring State Taxes</h4>
              <p className="m-0">Many freelancers calculate their Federal and SE tax but forget that their state will also want a cut of their net business income. Remember to include your local state tax rate.</p>
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
                <Link href="/self-employment-tax-calculator-usa" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Self-Employment Tax Calculator
                </Link>
              </li>
              <li>
                <Link href="/salary-after-tax-calculator" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Salary After Tax Calculator
                </Link>
              </li>
              <li>
                <Link href="/paycheck-calculator" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Paycheck Calculator
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
                  How to File Taxes as a Freelancer
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  1099 vs W-2: Which Pays More?
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Top Deductions for Independent Contractors
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
              <li><a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="nofollow noreferrer" className="hover:text-indigo-600 transition-colors">IRS: Self-Employment Tax</a></li>
              <li><a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="nofollow noreferrer" className="hover:text-indigo-600 transition-colors">IRS: Estimated Taxes</a></li>
            </ul>
          </div>
          
          <p className="inline-block bg-slate-100 px-3 py-1.5 rounded-lg font-medium">Last updated: August 2026</p>
        </div>

      </section>
    </main>
  );
}

