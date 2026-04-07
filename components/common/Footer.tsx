// components/common/Footer.tsx
import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-14">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-600 rounded-3xl flex items-center justify-center text-white text-4xl shadow-2xl transition-transform group-hover:rotate-6">
                🇺🇸
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-black text-4xl tracking-[-2px] text-white">FreeUS</span>
                <span className="font-black text-4xl tracking-[-2px] bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Calculator</span>
              </div>
            </Link>

            <p className="text-lg text-gray-300 max-w-md leading-relaxed">
              Free, accurate, and beautifully designed financial calculators for Americans. 
              Updated for Tax Year 2026.
            </p>

            <div className="mt-10 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-emerald-400" size={20} />
                <span>100% Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-rose-400" size={20} />
                <span>Made for Americans</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white text-lg mb-6">Tools</h4>
            <div className="space-y-3.5 text-[15px]">
              <Link href="/tax-calculators" className="block hover:text-white transition-colors">Tax Calculators</Link>
              <Link href="/earning-calculators" className="block hover:text-white transition-colors">Earnings Calculators</Link>
              <Link href="/cost-calculators" className="block hover:text-white transition-colors">Cost Calculators</Link>
              <Link href="/retirement-calculators" className="block hover:text-white transition-colors">Retirement Tools</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-white text-lg mb-6">Company</h4>
            <div className="space-y-3.5 text-[15px]">
              <Link href="/about" className="block hover:text-white transition-colors">About Us</Link>
              <Link href="/blog" className="block hover:text-white transition-colors">Blog</Link>
              <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-white text-lg mb-6">Legal</h4>
            <div className="space-y-3.5 text-[15px]">
              <Link href="/privacy-policy" className="block hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/disclaimer" className="block hover:text-white transition-colors">Disclaimer</Link>
            </div>

            {/* Newsletter */}
            <div className="mt-12">
              <h4 className="font-semibold text-white text-lg mb-4 flex items-center gap-2">
                <Mail size={20} /> Stay Updated
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Get the latest tax tips and tool updates.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-2xl px-5 py-3 text-sm w-full focus:outline-none placeholder:text-gray-500"
                />
                <button className="bg-white text-zinc-900 px-6 rounded-2xl font-semibold hover:bg-amber-300 transition-all">
                  Join
                </button>
              </div>
              <p className="text-[10px] text-gray-500 mt-3">We respect your inbox. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <div>
            © {new Date().getFullYear()} FreeUSCalculator. All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
            <span>Made for US taxpayers</span>
            <span>Not affiliated with the IRS</span>
            <span>Built with ❤️ in America</span>
          </div>

          <div className="text-xs">
            Accurate estimates • Always free
          </div>
        </div>
      </div>
    </footer>
  );
}