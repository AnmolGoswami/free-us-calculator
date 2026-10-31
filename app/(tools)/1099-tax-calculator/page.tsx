import { Metadata } from "next";
import Link from "next/link";
import ContractorTaxCalculator from "@/components/calculators/1099TaxCalculator";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import {
  CheckCircle2,
  Calculator,
  Briefcase,
  DollarSign,
  Zap,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  TrendingUp,
  Clock,
  BookOpen
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "1099 Tax Calculator 2026 – Estimate Your True Freelance Net Income",
  description: "Instantly estimate your 1099 taxes for 2026. Calculate Federal, State, and Self-Employment taxes to reveal your true take-home pay as an independent contractor.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/1099-tax-calculator",
  },
  keywords: [
    "1099 tax calculator",
    "freelance tax calculator",
    "independent contractor tax calculator 2026",
    "self employment tax estimate",
    "gig worker tax calculator"
  ],
  openGraph: {
    title: "1099 Tax Calculator 2026 – Estimate Your True Freelance Net Income",
    description: "Instantly calculate your Self-Employment, Federal, and State taxes to find your true 1099 take-home pay.",
    url: "https://www.freeuscalculator.in/1099-tax-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1099 Tax Calculator (2026)",
    description: "Estimate your Federal, State, and Self-Employment taxes to find your true 1099 net income.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
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
    a: "There is no single '1099 tax rate'. Instead, you pay a flat 15.3% for Self-Employment tax on 92.35% of your net income, plus your standard Federal Income Tax (which ranges from 10% to 37% based on your bracket), plus any applicable State Income Tax."
  },
  {
    q: "When are 1099 quarterly estimated taxes due?",
    a: "Quarterly estimated taxes are typically due on April 15, June 15, September 15, and January 15 (of the following year). If these dates fall on a weekend or holiday, the deadline moves to the next business day."
  },
  {
    q: "How much should I set aside for 1099 taxes?",
    a: "A common rule of thumb is to set aside 25% to 30% of your gross 1099 income to cover your Self-Employment, Federal, and State taxes. However, higher earners may need to set aside 35% or more. Use our calculator above for a customized estimate."
  },
  {
    q: "Can I deduct my business expenses?",
    a: "Yes. Deducting legitimate business expenses (like software, tools, home office portions, and professional services) directly lowers your 'Net Business Income'. Since both your SE Tax and Federal Tax are based on this net income, maximizing valid deductions is the best way to lower your 1099 tax burden."
  },
  {
    q: "Do I have to pay taxes if I made less than $600?",
    a: "Yes. While clients are not required to send you a 1099 form if they paid you less than $600, you are still legally required by the IRS to report all freelance and gig economy income on your tax return, even if it's under $600."
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
    <main className="bg-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO (Dark Theme)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/tax-calculators" className="hover:text-slate-300 transition-colors">Tax Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-400 font-medium">1099 Tax Calculator</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          bg-indigo-500/15 border border-indigo-500/20
                          text-indigo-300 text-[10px] font-black uppercase tracking-widest mb-5">
            <Zap size={11} className="fill-indigo-400" />
            2026 Estimates · Free · Freelance & Gig Workers
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-4">
            1099 Tax{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Calculator
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            Calculate your estimated 1099 taxes instantly. Determine your <strong className="text-white">Self-Employment Tax, Federal Income Tax, and State Tax</strong> to reveal your true net business income as an independent contractor.
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {[
              { icon: Briefcase, label: "For 1099 & Freelancers", cls: "text-amber-400" },
              { icon: DollarSign, label: "Includes QBI Deduction", cls: "text-emerald-400" },
              { icon: ShieldCheck, label: "2026 IRS Guidelines", cls: "text-indigo-400" },
              { icon: CheckCircle2, label: "100% Free", cls: "text-emerald-400" },
            ].map(({ icon: Icon, label, cls }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs font-semibold bg-white/8 border border-white/10 px-3 py-1.5 rounded-full text-slate-300">
                <Icon size={11} className={cls} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CALCULATOR
      ════════════════════════════════════════════════════════════════════ */}
      <section id="calculator" className="scroll-mt-16 bg-slate-950 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <ContractorTaxCalculator />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CONTENT
      ════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

        {/* Main Article */}
        <div>

          {/* HOW TO USE CARDS */}
          <section aria-labelledby="howto-heading" className="mb-16">
            <div className="text-center mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">How to Use</p>
              <h2 id="howto-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                How to Calculate Your 1099 Taxes
              </h2>
            </div>

            <figure className="max-w-4xl mx-auto my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
              <img
                src="/1099-calculator-screenshot.jpg"
                alt="1099 Tax Calculator Interface showing inputs for gross income and business expenses, resulting in a dark mode dashboard displaying take-home pay and tax breakdown."
                className="w-full h-auto object-cover"
              />
              <figcaption className="text-center text-sm text-slate-500 bg-slate-50 py-3 border-t border-slate-200 font-medium">
                Example: Entering $100,000 gross income with $15,000 in expenses to see the full 1099 tax breakdown.
              </figcaption>
            </figure>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-8">
              {[
                { n: "1", title: "Enter Gross", body: "Type your total freelance earnings before deductions." },
                { n: "2", title: "Expenses", body: "Deduct business costs (software, travel, home office) to find net profit." },
                { n: "3", title: "Filing Status", body: "Choose Single or Married to set your standard deduction limits." },
                { n: "4", title: "Select State", body: "Apply an estimated state tax rate (0% for TX/FL, up to ~8% for CA)." },
                { n: "5", title: "View Net", body: "See a full donut chart of your true take-home pay and effective tax rate." },
              ].map(({ n, title, body }) => (
                <div
                  key={n}
                  className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm
                             hover:border-indigo-200 hover:shadow-md transition-all relative"
                >
                  <span className="absolute -top-3 left-5 w-6 h-6 rounded-full bg-indigo-600
                                   text-white text-xs font-black flex items-center justify-center">
                    {n}
                  </span>
                  <h3 className="font-black text-slate-900 text-sm mt-1 mb-1.5">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <article className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-p:leading-loose prose-a:font-bold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">

            <h2 className="text-3xl tracking-tight text-slate-900">What is the 1099 "Self-Employment Tax Trap"?</h2>
            <p>
              When you work as a traditional W-2 employee, your employer automatically withholds taxes from your paycheck. More importantly, your employer covers exactly half of your Medicare and Social Security taxes (known as FICA).
            </p>
            <p>
              However, when you transition to a 1099 independent contractor, freelancer, sole proprietor, or gig worker (such as an Uber driver or DoorDash courier), the IRS views you as both the employer <em>and</em> the employee. This means <strong>you are responsible for the entire 15.3% tax burden</strong>, and no taxes are withheld for you throughout the year.
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-2xl my-8">
              <h3 className="text-rose-900 font-bold mt-0 flex items-center gap-2">
                <TrendingUp size={20} className="text-rose-600" />
                The 3-Part Tax Burden
              </h3>
              <p className="text-rose-800 text-sm mb-0">
                Many new freelancers only budget for Federal Income Tax and are shocked in April. Your total 1099 tax burden actually consists of three distinct parts:
                <br /><br />
                <strong>1. Self-Employment Tax (15.3%):</strong> Covers Social Security and Medicare.<br />
                <strong>2. Federal Income Tax:</strong> Your standard bracket (10% to 37%).<br />
                <strong>3. State Income Tax:</strong> Varies by your resident state.
              </p>
            </div>

            <h2 className="text-3xl tracking-tight text-slate-900 mt-12">Tax Tips & Examples for Freelancers</h2>

            <p>
              Understanding your deductions is the key to maximizing your net pay as a freelancer. Since you are taxed heavily on your <em>Net Business Income</em>, lowering that number legally is your best defense.
            </p>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 sm:p-8 shadow-sm text-sm text-slate-700 space-y-5 my-8">
              <h3 className="text-lg font-bold text-indigo-900 mt-0 flex items-center gap-2">
                <BookOpen size={18} className="text-indigo-600" /> Example: High Expenses vs Low Expenses
              </h3>
              <p className="mb-0">
                Imagine two graphic designers, Alice and Bob, who both gross <strong>$100,000</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-indigo-800">
                <li><strong>Alice</strong> works from a coffee shop and claims only $5,000 in expenses. Her taxable net income is $95,000. Her SE tax alone will be roughly $13,400.</li>
                <li><strong>Bob</strong> rents a dedicated studio, buys high-end equipment, and claims $30,000 in legitimate business expenses. His taxable net income is only $70,000. His SE tax drops to roughly $9,800.</li>
              </ul>
              <p className="font-bold text-indigo-900 mb-0">
                💡 Tip: Never leave valid business expenses on the table. Keep precise records of your mileage, software subscriptions, and home office utility splits!
              </p>
            </div>

            <h2 className="text-3xl tracking-tight text-slate-900 mt-12">How the 1099 Tax Math Works</h2>
            <p>While Federal and State taxes use complex progressive brackets, the Self-Employment (SE) Tax formula is surprisingly rigid. Here is exactly how the calculator processes your numbers:</p>

            <div className="bg-slate-900 text-slate-100 font-mono p-5 rounded-2xl font-bold text-center mb-8 border border-slate-800 text-lg sm:text-xl overflow-x-auto shadow-inner">
              SE Tax = (Gross Income - Expenses) × 92.35% × 15.3%
            </div>

            <div className="overflow-x-auto my-8">
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
                  <tr className="border-b border-slate-100 bg-slate-50">
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

            <h3>The QBI Deduction (Qualified Business Income)</h3>
            <p>Our calculator accounts for a simplified version of the QBI deduction. Most independent contractors qualify to deduct <strong>20% of their qualified business income</strong> from their federal taxes. This is a massive tax advantage for 1099 workers that helps offset the heavy burden of the Self-Employment tax.</p>

            <h2 className="text-3xl tracking-tight text-slate-900 mt-12">How State Taxes Impact Your 1099 Income</h2>

            <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
              <img
                src="/1099-calculator-state-screenshot.jpg"
                alt="1099 Tax Calculator displaying state tax selection and impact on net business income"
                className="w-full h-auto object-cover"
              />
              <figcaption className="text-center text-sm text-slate-500 bg-slate-50 py-3 border-t border-slate-200 font-medium">
                Adjusting the state tax level instantly updates your total 1099 tax burden.
              </figcaption>
            </figure>

            <p>
              Your location plays a massive role in your true freelance take-home pay. While Self-Employment (FICA) and Federal taxes apply to everyone equally, your <strong>state income tax</strong> is highly variable.
            </p>
            <p>
              If you live in a state with no income tax (such as <strong>Texas, Florida, Nevada, Washington, Wyoming, or South Dakota</strong>), you get to keep significantly more of your earnings. However, if you freelance in high-tax states like <strong>California or New York</strong>, you could be looking at an additional 5% to 13.3% tax on top of your Federal and SE obligations.
            </p>
            <ul>
              <li><strong>Zero-Tax States:</strong> You can select "None" in the calculator if you reside in TX, FL, NV, WA, WY, SD, TN, NH, or AK.</li>
              <li><strong>Flat-Rate States:</strong> States like Colorado or Pennsylvania charge a single flat rate regardless of your income.</li>
              <li><strong>Progressive-Rate States:</strong> States like California charge higher marginal rates as your income increases.</li>
            </ul>
            <p>
              <em>Note:</em> Some cities also levy local municipal taxes on independent contractors. Always verify local regulations.
            </p>

            <h2 className="text-3xl tracking-tight text-slate-900 mt-12">Detailed 1099 Tax Scenarios: How Filing Status Changes Your Tax Bill</h2>
            <p>
              Your filing status drastically impacts your standard deduction and federal tax brackets. Let's look at a concrete example to see how the exact same freelance income results in two entirely different tax bills based on whether you are Single or Married Filing Jointly.
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 my-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4 border-b border-slate-100 pb-4">
                Scenario: $75,000 Net Business Income
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-indigo-600 font-bold mb-2 flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">Scenario A</span>
                    Single Filer
                  </h4>
                  <ul className="text-sm space-y-2 text-slate-600 list-disc pl-5">
                    <li><strong>Standard Deduction:</strong> $15,000 (2026 estimate)</li>
                    <li><strong>SE Tax (15.3%):</strong> ~$10,600</li>
                    <li><strong>Half-SE Deduction:</strong> ~$5,300</li>
                    <li><strong>Taxable Income:</strong> ~$54,700</li>
                    <li><strong>Estimated Federal Tax:</strong> ~$7,500</li>
                    <li className="text-slate-900 font-bold mt-2 pt-2 border-t border-slate-100">Total Tax Burden: ~$18,100 (24%)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-indigo-600 font-bold mb-2 flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">Scenario B</span>
                    Married Filing Jointly
                  </h4>
                  <p className="text-xs text-slate-400 mb-2 italic">Assuming spouse has $0 income for this example.</p>
                  <ul className="text-sm space-y-2 text-slate-600 list-disc pl-5">
                    <li><strong>Standard Deduction:</strong> $30,000 (2026 estimate)</li>
                    <li><strong>SE Tax (15.3%):</strong> ~$10,600 (SE Tax doesn't change!)</li>
                    <li><strong>Half-SE Deduction:</strong> ~$5,300</li>
                    <li><strong>Taxable Income:</strong> ~$39,700</li>
                    <li><strong>Estimated Federal Tax:</strong> ~$4,300</li>
                    <li className="text-slate-900 font-bold mt-2 pt-2 border-t border-slate-100">Total Tax Burden: ~$14,900 (19.8%)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-50 rounded-xl text-sm text-slate-700">
                <strong>Key Takeaway:</strong> Notice that the Self-Employment tax ($10,600) stays exactly the same in both scenarios. That is because SE tax is a flat tax on your business profit, totally completely independent of your filing status or standard deduction! Only your Federal Income Tax changes.
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-12">The Impact of the W-2 Day Job</h3>
            <p>
              Many 1099 workers also have a traditional W-2 day job (a "side hustle" scenario). If your W-2 job pays well, it pushes your 1099 income into a much higher marginal tax bracket.
            </p>
            <p>
              Because your W-2 income eats up your entire standard deduction and fills up the lower tax brackets (10% and 12%), every single dollar of your 1099 profit might be taxed at the 22% or 24% rate, <em>plus</em> the 15.3% SE tax, <em>plus</em> state tax. It is very common for high-earning W-2 workers with a side hustle to see nearly <strong>40% to 50%</strong> of their freelance profit vanish to taxes. Use the calculator above to model your exact situation.
            </p>

          </article>

          <hr className="border-slate-200 my-12" />

          {/* ════════════════════════════════════════════════════════════════
              FAQ
          ════════════════════════════════════════════════════════════════ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS_DATA.map(({ q, a }) => (
                <div key={q} className="bg-slate-50 rounded-2xl p-5 sm:p-6 hover:bg-slate-100 transition-colors">
                  <dt className="font-bold text-slate-900 text-lg mb-2 flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-indigo-500 shrink-0 mt-0.5" />
                    {q}
                  </dt>
                  <dd className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">{a}</dd>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════
              SOURCES & DISCLAIMER
          ════════════════════════════════════════════════════════════════ */}
          <div className="mt-16 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/60">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
              <ShieldCheck size={16} className="text-indigo-500" />
              Sources & References
            </h3>
            <ul className="text-sm text-slate-600 space-y-2 mb-8">
              <li>• <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="nofollow noopener" className="text-indigo-600 hover:underline">IRS: Self-Employment Tax (Social Security and Medicare Taxes)</a></li>
              <li>• <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2024" target="_blank" rel="nofollow noopener" className="text-indigo-600 hover:underline">IRS: Standard Deduction and Tax Brackets</a></li>
              <li>• Form 1040 Schedule SE instructions.</li>
            </ul>

            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle size={16} className="text-slate-400" />
              Financial Disclaimer
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              This 1099 calculator provides estimates for educational and planning purposes using simplified 2026 tax bracket projections and a simplified QBI deduction model. It does not account for complex deductions, phase-outs, or localized municipal taxes. Actual tax liabilities can vary significantly based on your individual circumstances. Always verify important financial or tax information with the relevant official source or a qualified CPA.
            </p>
          </div>

        </div>

      </div>

      {/* ════════════════════════════════════════════════════════════════
          RELATED CALCULATORS
      ════════════════════════════════════════════════════════════════ */}
      <div className="bg-slate-50 border-t border-slate-200">
        <RelatedCalculators currentTool="1099-tax-calculator" />
      </div>

    </main>
  );
}
