'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Calculator, Sparkles, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  // Handle scroll effect for a "floating" feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const navItems = [
    { href: "/tax-calculators", label: "Tax Tools" },
    { href: "/earning-calculators", label: "Earnings" },
    { href: "/cost-calculators", label: "Cost Tools" },
    { href: "/blog", label: "Insights" },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
          ? "py-2 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-gray-100" 
          : "py-4 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between" aria-label="Main Navigation">
          
          {/* LOGO SECTION */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group relative"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-tr from-indigo-700 via-violet-600 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xl shadow-[0_10px_20px_-5px_rgba(79,70,229,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                🇺🇸
              </div>
              <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
                <Sparkles className="w-2.5 h-2.5 text-white" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none">
                FreeUS
              </span>
              <span className="font-bold text-xs uppercase tracking-[0.2em] bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Calculators
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV - Enhanced hover states */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-2xl border border-gray-200/50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:text-indigo-600 hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA - Premium Gradient */}
          <div className="hidden md:block">
            <Link
              href="/cost-calculators"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-0.5"
            >
              <Calculator className="w-4 h-4 text-indigo-400" />
              <span>Get Started</span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="absolute inset-0 w-full h-full bg-slate-900 -z-20" />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-gray-100 text-slate-900 transition-colors hover:bg-gray-200"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU PANEL */}
      <div className={`fixed inset-0 z-[60] md:hidden ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMenu}
        />
        <aside className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-10">
              <span className="font-black text-xl tracking-tight">Navigation</span>
              <button onClick={closeMenu} className="p-2 rounded-full bg-gray-100"><X size={20}/></button>
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between px-5 py-4 rounded-2xl bg-gray-50 text-slate-700 font-bold hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-transparent hover:border-indigo-100"
                >
                  {item.label}
                  <ChevronRight size={18} className="opacity-50" />
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <Link
                href="/cost-calculators"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200"
              >
                Try Free Calculators <Calculator size={18} />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}