// components/common/Footer.tsx
import Link from "next/link";
import { ShieldCheck, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-14 sm:pt-20 pb-10 sm:pb-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* BRAND */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6 sm:mb-8 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl shadow-xl transition-transform group-hover:rotate-6">
                🇺🇸
              </div>

              <div className="flex flex-col leading-tight">
                <span className="font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  FreeUS
                </span>
                <span className="font-black text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Calculator
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-gray-300 max-w-md leading-relaxed">
              Free, accurate financial calculators for Americans.
              Updated for Tax Year 2026 with modern UX and precision tools.
            </p>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-emerald-400" size={18} />
                <span>100% Private</span>
              </div>

              <div className="flex items-center gap-2">
                <Heart className="text-rose-400" size={18} />
                <span>Built for Users</span>
              </div>
            </div>
          </div>

          {/* TOOLS */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white text-base sm:text-lg mb-4 sm:mb-6">
              Tools
            </h4>
            <div className="space-y-3 text-sm sm:text-[15px]">
              <Link href="/tax-calculators" className="block hover:text-white transition">
                Tax Calculators
              </Link>
              <Link href="/earning-calculators" className="block hover:text-white transition">
                Earnings Calculators
              </Link>
              <Link href="/cost-calculators" className="block hover:text-white transition">
                Cost Calculators
              </Link>
              <Link href="/retirement-calculators" className="block hover:text-white transition">
                Retirement Tools
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white text-base sm:text-lg mb-4 sm:mb-6">
              Company
            </h4>
            <div className="space-y-3 text-sm sm:text-[15px]">
              <Link href="/about" className="block hover:text-white transition">
                About
              </Link>
              <Link href="/blog" className="block hover:text-white transition">
                Blog
              </Link>
              <Link href="/contact" className="block hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* LEGAL + NEWSLETTER */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white text-base sm:text-lg mb-4 sm:mb-6">
              Legal
            </h4>

            <div className="space-y-3 text-sm sm:text-[15px]">
              <Link href="/privacy-policy" className="block hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-white transition">
                Terms
              </Link>
              <Link href="/disclaimer" className="block hover:text-white transition">
                Disclaimer
              </Link>
            </div>

            {/* NEWSLETTER */}
            <div className="mt-10 sm:mt-12">
              <h4 className="font-semibold text-white text-base sm:text-lg mb-3 flex items-center gap-2">
                <Mail size={18} /> Stay Updated
              </h4>

              <p className="text-xs sm:text-sm text-gray-400 mb-4">
                Get updates on new calculators and tax insights.
              </p>

              {/* MOBILE FIX: STACK INPUT + BUTTON */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-xl sm:rounded-2xl px-4 py-3 text-sm w-full focus:outline-none placeholder:text-gray-500"
                />

                <button className="bg-white text-zinc-900 px-5 py-3 rounded-xl sm:rounded-2xl font-semibold hover:bg-gray-200 transition w-full sm:w-auto">
                  Join
                </button>
              </div>

              <p className="text-[10px] text-gray-500 mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-white/10 flex flex-col gap-6 text-xs sm:text-sm text-gray-500">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>© {new Date().getFullYear()} FreeUSCalculator</div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <span>US Tax Tools</span>
              <span>Independent Platform</span>
              <span>Built with ❤️</span>
            </div>

            <div>Always free estimates</div>
          </div>
        </div>
      </div>
    </footer>
  );
}