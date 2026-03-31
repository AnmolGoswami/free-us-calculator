// app/page.tsx
import Link from "next/link";
import ToolCard from "@/components/ui/ToolCard";
import AdBanner from "@/components/common/AdBanner";
import { popularTools } from "@/lib/tools";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FreeUSCalculator",
    url: "https://freeuscalculator.com",
    description: "Free accurate 2026 US tax calculators, paycheck estimators, gig worker tools, and financial calculators. No signup required.",
    publisher: {
      "@type": "Organization",
      name: "FreeUSCalculator",
      logo: "https://freeuscalculator.com/logo.png"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://freeuscalculator.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ====================== HERO SECTION ====================== */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(255,255,255,0.18)_0%,transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pb-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
              ✅ Updated for Tax Year 2026 • 100% Free • No Signup • No Ads Inside Tools
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6">
              Free 2026 US Tax &amp;<br className="hidden sm:block" /> Paycheck Calculators
            </h1>

            <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Accurate, fast, and easy-to-use financial calculators trusted by thousands of Americans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tax-calculators"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-xl md:text-2xl px-10 md:px-14 py-5 md:py-7 rounded-3xl transition-all shadow-xl active:scale-95"
              >
                Start Calculating Now →
              </Link>
              <Link
                href="#popular-tools"
                className="border-2 border-white/70 hover:bg-white/10 font-semibold text-xl md:text-2xl px-10 md:px-12 py-5 md:py-7 rounded-3xl transition-all"
              >
                Browse All Tools
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base opacity-90">
              <div>⚡ Instant Results</div>
              <div>🔒 100% Private</div>
              <div>📱 Fully Responsive</div>
              <div>🇺🇸 IRS Updated 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white py-7 border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600">50,000+</div>
            <div className="text-gray-600 mt-1">Monthly Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">85+</div>
            <div className="text-gray-600 mt-1">Free Tools</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">4.9/5</div>
            <div className="text-gray-600 mt-1">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">2026</div>
            <div className="text-gray-600 mt-1">Latest Tax Rules</div>
          </div>
        </div>
      </div>

      <AdBanner />

      {/* Popular Tools */}
      <section id="popular-tools" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Most Popular Calculators</h2>
            <p className="text-gray-600 mt-4 text-lg">Instantly used by thousands of Americans daily</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {popularTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tax-calculators" className="text-blue-600 hover:text-blue-700 font-semibold text-lg inline-flex items-center gap-2">
              View All Tools →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Choose Your Category</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Find the perfect tool for your needs</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { href: "/tax-calculators", emoji: "💰", title: "Tax Calculators", desc: "Federal, State, Self-Employment, W-2 & 1099 taxes" },
              { href: "/earning-calculators", emoji: "💵", title: "Earnings Calculators", desc: "Gig economy, Uber, DoorDash, salary tools" },
              { href: "/cost-calculators", emoji: "📈", title: "Cost & Planning", desc: "Rent, loans, savings, retirement & more" }
            ].map((cat) => (
              <Link key={cat.title} href={cat.href} className="group">
                <div className="bg-white p-10 rounded-3xl shadow hover:shadow-2xl transition-all hover:-translate-y-2 h-full border border-gray-100">
                  <div className="text-7xl mb-8 transition-transform group-hover:scale-110">{cat.emoji}</div>
                  <h3 className="text-3xl font-semibold mb-4">{cat.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{cat.desc}</p>
                  <div className="mt-8 text-blue-600 font-medium group-hover:underline">Explore Tools →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop Guessing. Start Calculating.</h2>
          <p className="text-xl text-blue-100 mb-10">Get accurate answers instantly with our free tools.</p>
          <Link
            href="/tax-calculators"
            className="inline-block bg-white text-blue-700 font-semibold px-14 py-7 rounded-3xl text-2xl hover:bg-blue-50 transition-all shadow-xl"
          >
            Browse All Free Tools →
          </Link>
        </div>
      </section>
    </>
  );
}