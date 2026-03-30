// components/common/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl">
                🇺🇸
              </div>
              <span className="text-white font-bold text-2xl">FreeUSCalculator</span>
            </div>
            <p className="text-sm leading-relaxed">
              Free accurate calculators for Americans.<br />
              Updated for Tax Year 2026.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Tools</h4>
            <div className="space-y-2 text-sm">
              <Link href="/tax-calculators" className="block hover:text-white">Tax Calculators</Link>
              <Link href="/earning-calculators" className="block hover:text-white">Earnings Calculators</Link>
              <Link href="/cost-calculators" className="block hover:text-white">Cost Calculators</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block hover:text-white">About Us</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link href="/privacy-policy" className="block hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs">
          © {new Date().getFullYear()} FreeUSCalculator. All rights reserved.<br />
          Made for US taxpayers • Not affiliated with IRS or any government agency.
        </div>
      </div>
    </footer>
  );
}