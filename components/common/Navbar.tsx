// components/common/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
              🇺🇸
            </div>
            <div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">FreeUS</span>
              <span className="font-bold text-2xl tracking-tight text-indigo-600">Calculator</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/tax-calculators" className="hover:text-indigo-600 transition">Tax Calculators</Link>
            <Link href="/earning-calculators" className="hover:text-indigo-600 transition">Earnings</Link>
            <Link href="/cost-calculators" className="hover:text-indigo-600 transition">Cost Tools</Link>
            <Link href="/about" className="hover:text-indigo-600 transition">About</Link>
          </div>

          {/* Mobile Menu Button (You can enhance with state later) */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}