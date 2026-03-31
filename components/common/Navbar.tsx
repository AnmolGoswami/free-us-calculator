// components/common/Navbar.tsx
'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Super clean & memorable for branding */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl flex items-center justify-center text-white font-bold text-3xl shadow-lg transition-transform group-hover:scale-110">
              🇺🇸
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-3xl tracking-[-1px] text-gray-900 leading-none">FreeUS</span>
              <span className="font-bold text-3xl tracking-[-1px] text-indigo-600 leading-none -mt-1">Calculator</span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean, SEO-friendly links */}
          <div className="hidden md:flex items-center gap-8 text-base font-semibold text-gray-700">
            <Link 
              href="/tax-calculators" 
              className="hover:text-indigo-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all"
            >
              Tax Calculators
            </Link>
            <Link 
              href="/earning-calculators" 
              className="hover:text-indigo-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all"
            >
              Earnings
            </Link>
            <Link 
              href="/cost-calculators" 
              className="hover:text-indigo-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all"
            >
              Cost Tools
            </Link>
            <Link 
              href="/blog" 
              className="hover:text-indigo-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="hover:text-indigo-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all"
            >
              About
            </Link>
          </div>

          {/* CTA Button (helps conversions + looks premium) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#popular-tools"
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-2xl transition-all shadow-md hover:shadow-lg"
            >
              Try Free Tools
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-4xl leading-none transition-transform">
              {mobileMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full responsive, smooth, attractive */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium text-gray-700">
            <Link 
              href="/tax-calculators" 
              onClick={closeMenu}
              className="hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
            >
              Tax Calculators
            </Link>
            <Link 
              href="/earning-calculators" 
              onClick={closeMenu}
              className="hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
            >
              Earnings Calculators
            </Link>
            <Link 
              href="/cost-calculators" 
              onClick={closeMenu}
              className="hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
            >
              Cost Tools
            </Link>
            <Link 
              href="/blog" 
              onClick={closeMenu}
              className="hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              onClick={closeMenu}
              className="hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
            >
              About Us
            </Link>
            
            {/* Mobile CTA */}
            <Link
              href="/#popular-tools"
              onClick={closeMenu}
              className="mt-4 w-full text-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-3xl text-base shadow-md"
            >
              Try Free Tools Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}