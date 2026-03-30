// app/page.tsx
import Link from "next/link";
import ToolCard from "@/components/ui/ToolCard";
import AdBanner from "@/components/common/AdBanner";
import { allTools, popularTools } from "@/lib/tools";

export const metadata = {
  title: "FreeUSCalculator - Free US Tax, Earnings & Cost Calculators 2026",
  description: "Free accurate US calculators for 2026. Calculate self-employment tax, salary after tax, California paycheck, Uber & DoorDash earnings, loan payments, rent affordability and more. No signup required.",
  keywords: [
    "free tax calculator 2026",
    "self employment tax calculator usa",
    "salary after tax calculator",
    "paycheck calculator california",
    "uber earnings calculator",
    "doordash earnings calculator",
    "loan calculator",
    "rent affordability calculator",
  ],
  openGraph: {
    title: "FreeUSCalculator - Free US Tax & Earnings Calculators 2026",
    description: "Instant, accurate, and completely free calculators built for Americans.",
    images: [{ url: "/images/hero-background.jpg" }],
  },
};

export default function Home() {
  return (
    <>
      {/* HERO SECTION - High Conversion + SEO */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#ffffff20_0%,transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 text-sm font-medium">
              ✅ Updated for 2026 Tax Year • No Signup • 100% Free
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-none">
              Free US Tax,<br />
              Earnings &amp; Cost<br />
              Calculators <span className="text-yellow-300">2026</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-10">
              Accurate paycheck, self-employment tax, gig worker earnings, 
              loan payments and savings tools. Built specifically for Americans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tax-calculators"
                className="bg-white text-indigo-700 hover:bg-yellow-300 hover:text-indigo-800 font-semibold text-lg px-10 py-4 rounded-2xl transition-all duration-300 shadow-lg"
              >
                Browse Tax Calculators
              </Link>
              <Link
                href="/earning-calculators"
                className="border-2 border-white/80 hover:bg-white/10 font-semibold text-lg px-10 py-4 rounded-2xl transition-all duration-300"
              >
                Gig Earnings Tools
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-white/10 backdrop-blur-md py-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-white/90">
            <div>✔️ Instant Results</div>
            <div>✔️ Mobile Friendly</div>
            <div>✔️ 2026 Tax Rates</div>
            <div>✔️ No Login Required</div>
            <div>✔️ Used by 50,000+ Americans</div>
          </div>
        </div>
      </section>

      {/* Ad Placement - After Hero (Non-intrusive) */}
      <AdBanner />

      {/* POPULAR TOOLS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular US Calculators
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most used tools by Americans in 2026
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tax-calculators"
              className="inline-flex items-center gap-3 text-indigo-600 hover:text-indigo-700 font-semibold text-lg group"
            >
              View All Calculators
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/tax-calculators" className="group">
              <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-200 h-full">
                <div className="text-6xl mb-6">💰</div>
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">Tax Calculators</h3>
                <p className="text-gray-600 text-lg">
                  Self-employment tax, salary after tax, California paycheck estimator and more.
                </p>
                <div className="mt-8 text-indigo-600 font-medium group-hover:underline">Explore Tax Tools →</div>
              </div>
            </Link>

            <Link href="/earning-calculators" className="group">
              <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-200 h-full">
                <div className="text-6xl mb-6">🚗</div>
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">Earnings Calculators</h3>
                <p className="text-gray-600 text-lg">
                  Uber, DoorDash driver earnings, hourly to salary converter and more.
                </p>
                <div className="mt-8 text-indigo-600 font-medium group-hover:underline">Explore Earnings Tools →</div>
              </div>
            </Link>

            <Link href="/cost-calculators" className="group">
              <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-200 h-full">
                <div className="text-6xl mb-6">🏠</div>
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">Cost Calculators</h3>
                <p className="text-gray-600 text-lg">
                  Rent affordability, loan EMI, savings growth and future value calculators.
                </p>
                <div className="mt-8 text-indigo-600 font-medium group-hover:underline">Explore Cost Tools →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Trust Building */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Americans Trust FreeUSCalculator</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-2xl flex items-center justify-center text-4xl mb-6">⚡</div>
              <h3 className="font-semibold text-2xl mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Instant calculations with real-time updates. No page reloads.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-2xl flex items-center justify-center text-4xl mb-6">🇺🇸</div>
              <h3 className="font-semibold text-2xl mb-3">Made for USA</h3>
              <p className="text-gray-600">Uses latest 2026 federal &amp; state tax brackets including California.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-2xl flex items-center justify-center text-4xl mb-6">🔒</div>
              <h3 className="font-semibold text-2xl mb-3">Private &amp; Free</h3>
              <p className="text-gray-600">No signup. No personal data collected. Completely free forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Free 2026 US Calculators – Accurate &amp; Easy to Use
          </h2>
          
          <p>
            Welcome to FreeUSCalculator – your one-stop destination for free, accurate, 
            and easy-to-use calculators designed specifically for American taxpayers, 
            gig workers, and households in 2026.
          </p>

          <p>
            Whether you&apos;re a self-employed freelancer trying to calculate your self-employment tax, 
            an Uber or DoorDash driver estimating weekly earnings, or a family planning monthly loan payments, 
            our tools provide instant results with detailed breakdowns using the latest 2026 tax rules.
          </p>

          <h3 className="text-2xl font-semibold mt-12">Our Most Popular Tools Include:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Self Employment Tax Calculator USA 2026</li>
            <li>Salary After Tax Calculator with Federal &amp; FICA deductions</li>
            <li>California Paycheck Calculator</li>
            <li>Uber Driver Earnings Estimator</li>
            <li>DoorDash Dasher Pay Calculator</li>
            <li>Rent Affordability Calculator (30% Rule)</li>
            <li>Loan EMI Calculator</li>
          </ul>

          <p className="mt-10 text-center text-gray-500 text-sm">
            All calculators are updated for Tax Year 2026 and use official IRS and state guidelines.
          </p>
        </div>
      </section>

      {/* Final CTA + Ad */}
      <AdBanner />

      <section className="py-16 bg-indigo-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to calculate smarter?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Start using any of our free tools below. Results update instantly.
          </p>
          <Link
            href="/tax-calculators"
            className="inline-block bg-white text-indigo-700 font-semibold px-12 py-5 rounded-2xl text-lg hover:bg-yellow-300 transition"
          >
            Browse All Free Calculators
          </Link>
        </div>
      </section>
    </>
  );
}