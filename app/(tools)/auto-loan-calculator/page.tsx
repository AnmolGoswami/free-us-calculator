import { Metadata } from "next";
import Link from "next/link";
import AutoLoanCalculator from "@/components/calculators/AutoLoanCalculator";
import {
  CheckCircle2,
  AlertCircle,
  Calculator,
  HelpCircle,
  FileText,
  DollarSign,
  TrendingUp,
  Landmark,
  BookOpen,
  Car
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Auto Loan Calculator 2026 - Car Payment & Interest Estimator",
  description: "Free auto loan calculator. Estimate your monthly car payments, total interest, and total cost of ownership including taxes and trade-ins.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/auto-loan-calculator",
  },
  keywords: ["auto loan calculator", "car payment calculator", "vehicle loan calculator", "car interest calculator", "auto finance calculator"],
  openGraph: {
    title: "Auto Loan Calculator 2026",
    description: "Estimate your monthly car payments, total interest, and total cost.",
    url: "https://www.freeuscalculator.in/auto-loan-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Loan Calculator 2026",
    description: "Estimate your monthly car payments and total interest.",
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Auto Loan Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates monthly car payments, total interest, and total cost including taxes and trade-ins.",
  url: "https://www.freeuscalculator.in/auto-loan-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Auto Loan Calculator", item: "https://www.freeuscalculator.in/auto-loan-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "How much should I put down on a car?",
    a: "Experts traditionally recommend putting down 20% of the vehicle's purchase price. This helps offset initial depreciation (the 'drive-off-the-lot' drop in value) and ensures you don't end up 'upside down' (owing more than the car is worth) on your loan."
  },
  {
    q: "What is a good auto loan interest rate?",
    a: "Auto loan rates vary heavily based on your credit score and whether the car is new or used. For excellent credit (780+), you might see rates around 5-6% for new cars in 2026. For lower credit scores, rates can easily exceed 10-15%."
  },
  {
    q: "Does a longer loan term save me money?",
    a: "No. A longer loan term (like 72 or 84 months) will lower your monthly payment, making the car feel more affordable month-to-month. However, you will pay significantly more in total interest over the life of the loan. Aim for 48 to 60 months if possible."
  },
  {
    q: "How does sales tax affect my loan?",
    a: "In most states, sales tax is calculated on the price of the car (often minus the value of your trade-in). If you don't pay the tax out-of-pocket in cash, it is rolled into your total loan amount, meaning you will pay interest on the tax for the next 5 years."
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

export default function AutoLoanPage() {
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
            <Car size={48} className="text-indigo-600 hidden md:block" />
            Auto Loan Calculator
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Find out exactly how much that new car will cost you. Estimate your monthly payment, total interest, and final cost of ownership before heading to the dealership.
          </p>
        </div>
      </section>

      {/* 2. Calculator Tool */}
      <section className="max-w-6xl mx-auto px-4 -mt-20 relative z-20 mb-24">
        <div className="shadow-2xl shadow-indigo-900/10 rounded-[2rem]">
           <AutoLoanCalculator />
        </div>
      </section>

      {/* SEO Content Sections */}
      <section className="max-w-4xl mx-auto px-4 space-y-20">
        
        {/* 3. What is the Calculator? */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">What is an Auto Loan?</h2>
          <p>
            An auto loan allows you to borrow money from a lender (like a bank, credit union, or dealership) to purchase a vehicle. You agree to pay back the borrowed amount, plus interest, over a set period of time—usually between 36 and 72 months.
          </p>
          <p>
            When financing a car, the vehicle itself serves as collateral. This means if you fail to make your monthly payments, the lender has the legal right to repossess the car. 
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Principal:</strong> The actual price of the vehicle minus your down payment and trade-in value, plus any taxes or fees you choose to roll into the loan.
            </li>
            <li>
              <strong>Interest Rate (APR):</strong> The cost of borrowing the money, expressed as an annual percentage.
            </li>
          </ul>
        </div>

        {/* 4. How to use */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">How to Use the Auto Loan Calculator</h2>
          
          <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
            <img 
              src="/auto-loan-calculator-screenshot.jpg" 
              alt="Auto Loan Calculator Interface" 
              className="w-full h-auto object-cover"
            />
          </figure>

          <ol className="space-y-4">
            <li><strong>Vehicle Price:</strong> Enter the negotiated or sticker price of the car you want to buy.</li>
            <li><strong>Down Payment & Trade-In:</strong> Input any cash you plan to put down, and the estimated value of your current car if you plan to trade it in.</li>
            <li><strong>Loan Term:</strong> Select how many months you plan to pay off the loan (e.g., 48, 60, or 72 months).</li>
            <li><strong>Interest Rate:</strong> Enter the APR you qualify for. (Check your bank or credit union for current pre-approval rates).</li>
            <li><strong>Sales Tax:</strong> Enter your local state/county sales tax rate.</li>
          </ol>
        </div>

        {/* 5. Formula */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">The Auto Loan Formula</h2>
          <p className="text-slate-600 mb-6 leading-loose">Car loans are amortized, meaning you pay a fixed amount every month, but the portion going toward interest versus principal changes over time. The monthly payment formula is:</p>
          
          <div className="bg-indigo-50 text-indigo-900 font-mono p-5 rounded-2xl font-bold text-center mb-8 border border-indigo-100 text-lg sm:text-xl">
            M = P [ r(1 + r)^n ] / [ (1 + r)^n - 1 ]
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
                  <td className="py-4 px-4 font-bold text-slate-800">M</td>
                  <td className="py-4 px-4 leading-relaxed">Your fixed Monthly Payment.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">P</td>
                  <td className="py-4 px-4 leading-relaxed">The Principal loan amount (Price - Down Payment - Trade-in + Taxes).</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">r</td>
                  <td className="py-4 px-4 leading-relaxed">The monthly interest rate (Annual rate divided by 12).</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-800">n</td>
                  <td className="py-4 px-4 leading-relaxed">The total number of months (e.g., 60).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Step-by-step example */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Example Auto Loan Calculation</h2>
          <p>Let's walk through exactly how the math works for buying a <strong>$35,000</strong> car with a <strong>$5,000</strong> down payment, financed over <strong>60 months</strong> at <strong>6.5% interest</strong> with a <strong>7% sales tax</strong>.</p>
          
          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 1: Calculate the Total Loan Amount (Principal)</h4>
          <p>First, subtract your down payment and add the taxes. The 7% sales tax on $35,000 is $2,450.</p>
          <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm border border-slate-200 text-slate-700 space-y-2">
            <div>Car Price: $35,000</div>
            <div>- Down Payment: $5,000</div>
            <div>+ Sales Tax: $2,450</div>
            <div className="font-bold">Total Loan Amount (P) = $32,450</div>
          </div>

          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 2: Calculate the Monthly Payment</h4>
          <p>Using the amortization formula with our Principal ($32,450), monthly rate (6.5% / 12 = 0.005416), and term (60 months), we find the fixed monthly payment.</p>
          
          <h4 className="font-bold text-lg mt-8 mb-2 text-slate-800">Step 3: Total Cost Breakdown</h4>
          <div className="bg-emerald-50 p-5 rounded-2xl font-mono text-sm border border-emerald-100 space-y-3 shadow-sm">
            <div className="text-slate-700">Total Loan Amount: <strong className="text-slate-900">$32,450.00</strong></div>
            <div className="text-slate-700">Monthly Payment: <strong className="text-slate-900">$634.93</strong></div>
            <div className="text-emerald-800 font-bold text-lg pt-3 border-t border-emerald-200/60">
              Total Interest Paid: $5,645.74
            </div>
            <div className="text-slate-900 font-black text-2xl pt-2">
              Total Cost of Vehicle = $43,095.74
            </div>
            <div className="text-slate-600 text-xs font-sans mt-2">
              (Includes Down Payment, Principal, Tax, and Interest)
            </div>
          </div>
        </div>

        {/* 7. Understanding the result */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Understanding Your Results</h2>
          <p>
            It is very common for buyers to only look at the "Monthly Payment" and ignore everything else. Dealerships know this, and will often try to sell you a car based entirely on getting your monthly payment to a certain number.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl my-8">
            <h4 className="text-blue-900 font-bold mt-0 mb-2">The "Total Cost" Trap</h4>
            <p className="text-blue-800 text-sm m-0 leading-relaxed">
              If you tell a dealer "I can only afford $400 a month", they might give you a $400 payment by extending your loan to 84 months (7 years). While the payment fits your budget, you will end up paying thousands of extra dollars in interest, and you will likely owe more on the car than it is worth for many years. Always negotiate based on the Total Cost of the Vehicle, not the monthly payment.
            </p>
          </div>
        </div>

        {/* 10. Important Assumptions and Limitations */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-black text-amber-900 mb-4 flex items-center gap-3">
            <AlertCircle size={24} className="shrink-0" /> Important Limitations
          </h2>
          <p className="text-amber-800 leading-relaxed mb-0">
            This calculator provides a highly accurate estimate based on standard amortization, but it cannot predict every dealer fee. Dealerships often tack on "Document Fees", "Destination Charges", or mandatory warranties that can add $500 to $2,000 to the loan amount. Always ask for an "Out-the-Door" price breakdown before signing.
          </p>
        </div>

        {/* 11. Common Mistakes */}
        <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose">
          <h2 className="text-3xl tracking-tight text-slate-900">Common Auto Financing Mistakes</h2>
          <div className="space-y-6 mt-8">
            <div>
              <h4 className="font-bold text-lg mb-2">1. Financing your taxes and fees</h4>
              <p className="m-0">When you roll your sales tax and dealer fees into the loan, you are paying interest on those taxes for the next 5 years. Always try to pay your taxes and fees in cash on the day of purchase.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">2. Not getting pre-approved</h4>
              <p className="m-0">Never walk into a dealership without financing already lined up. Go to your local credit union or bank and get a pre-approval letter. You can use this as leverage to force the dealer to beat your rate.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">3. Rolling over negative equity</h4>
              <p className="m-0">If you owe $15,000 on your current car, but the dealer only gives you a $10,000 trade-in credit, you have $5,000 in "negative equity". Rolling that $5,000 debt into your new car loan guarantees you will be severely upside-down on the new vehicle the moment you drive it away.</p>
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
                  Paycheck Calculator (Can you afford this loan?)
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
                  How to Negotiate a Car Price
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Should I Buy or Lease a Car?
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 font-bold hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Understanding Gap Insurance
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
              <li><a href="https://consumer.ftc.gov/articles/financing-or-leasing-car" target="_blank" rel="nofollow noreferrer" className="hover:text-indigo-600 transition-colors">FTC: Financing a Car</a></li>
              <li><a href="https://www.consumerfinance.gov/consumer-tools/auto-loans/" target="_blank" rel="nofollow noreferrer" className="hover:text-indigo-600 transition-colors">CFPB: Auto Loans Guide</a></li>
            </ul>
          </div>
          
          <p className="inline-block bg-slate-100 px-3 py-1.5 rounded-lg font-medium">Last updated: August 2026</p>
        </div>

      </section>
    </main>
  );
}
