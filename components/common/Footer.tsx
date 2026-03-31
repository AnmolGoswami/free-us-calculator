// components/common/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl shadow-inner">
                🇺🇸
              </div>
              <div>
                <span className="font-bold text-3xl tracking-tight text-white">FreeUS</span>
                <span className="font-bold text-3xl tracking-tight text-indigo-500">Calculator</span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Free, accurate, and up-to-date calculators for American taxpayers. 
              Built to save you time and money.
            </p>

            <p className="mt-6 text-xs text-gray-500">
              Updated for Tax Year 2026
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">Tools</h4>
            <div className="space-y-3 text-sm">
              <Link href="/tax-calculators" className="block hover:text-white transition">Tax Calculators</Link>
              <Link href="/earning-calculators" className="block hover:text-white transition">Earnings Calculators</Link>
              <Link href="/cost-calculators" className="block hover:text-white transition">Cost & Savings Tools</Link>
              <Link href="/retirement-calculators" className="block hover:text-white transition">Retirement Calculators</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">Company</h4>
            <div className="space-y-3 text-sm">
              <Link href="/about" className="block hover:text-white transition">About Us</Link>
              <Link href="/blog" className="block hover:text-white transition">Blog</Link>
              <Link href="/contact" className="block hover:text-white transition">Contact Us</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">Legal</h4>
            <div className="space-y-3 text-sm">
              <Link href="/privacy-policy" className="block hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-white transition">Terms of Service</Link>
              <Link href="/disclaimer" className="block hover:text-white transition">Disclaimer</Link>
            </div>
          </div>

          {/* Newsletter / Trust Signals */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold mb-5 text-lg">Stay Updated</h4>
            <p className="text-sm mb-4">
              Get the latest tax updates and tool improvements.
            </p>
            
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-gray-900 border border-gray-800 focus:border-indigo-600 rounded-2xl px-4 py-3 text-sm w-full focus:outline-none"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-2xl font-medium transition">
                Join
              </button>
            </div>

            <p className="text-[10px] text-gray-500 mt-3">
              We respect your inbox. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} FreeUSCalculator. All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
            <span>Made for US taxpayers</span>
            <span>Not affiliated with the IRS</span>
          </div>
          
          <div className="text-center md:text-right">
            Built with ❤️ for Americans
          </div>
        </div>
      </div>
    </footer>
  );
}