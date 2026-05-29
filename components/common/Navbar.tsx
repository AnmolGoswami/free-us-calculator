'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Calculator, ChevronDown, TrendingUp, Receipt, DollarSign, BookOpen, Zap } from "lucide-react";

// ─── Nav structure with rich dropdown data ────────────────────────────────────
const NAV_ITEMS = [
  {
    label: "Tax Tools",
    href: "/tax-calculators",
    icon: Receipt,
    color: "text-blue-600",
    bg: "bg-blue-50",
    tools: [
      { label: "Self-Employment Tax", href: "/self-employment-tax-calculator-usa", desc: "SE tax + Medicare" },
      { label: "Salary After Tax",    href: "/salary-after-tax-calculator",        desc: "Net take-home pay" },
      { label: "Paycheck Calculator", href: "/paycheck-calculator",                desc: "Federal + state" },
    ],
  },
  {
    label: "Earnings",
    href: "/earning-calculators",
    icon: TrendingUp,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    tools: [
      { label: "Hourly to Salary",   href: "/hourly-to-salary-calculator",   desc: "Annual conversion" },
      { label: "Uber Earnings",      href: "/uber-earnings-calculator",       desc: "After fees & tax" },
      { label: "DoorDash Pay",       href: "/doordash-earnings-calculator",   desc: "Net dasher income" },
      { label: "Overtime Pay",       href: "/overtime-calculator",            desc: "1.5x & 2x rates" },
    ],
  },
  {
    label: "Cost Tools",
    href: "/cost-calculators",
    icon: DollarSign,
    color: "text-amber-600",
    bg: "bg-amber-50",
    tools: [
      { label: "Loan EMI",           href: "/loan-calculator",               desc: "Monthly payments" },
      { label: "Rent Affordability", href: "/rent-affordability-calculator",  desc: "30% rule + budget" },
      { label: "Savings Calculator", href: "/savings-calculator",             desc: "Compound interest" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    icon: BookOpen,
    color: "text-violet-600",
    bg: "bg-violet-50",
    tools: [],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled]         = useState(false);
  const dropdownRef                     = useRef<HTMLDivElement>(null);
  const closeTimer                      = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Scroll detection ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Lock body scroll when mobile menu is open ─────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // ── Close mobile menu on route change ─────────────────────────────────────
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // ── Close dropdown on outside click ──────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openDropdown  = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HEADER
      ════════════════════════════════════════════════════════════════════ */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_#e2e8f0,0_4px_24px_-4px_rgba(0,0,0,0.08)]"
            : "bg-white border-b border-slate-100"
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          {/* ── LOGO ──────────────────────────────────────────────────────── */}
          <Link
            href="/"
            aria-label="FreeUSCalculator home"
            className="flex items-center gap-2.5 shrink-0 group"
          >
            {/* Icon mark */}
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-200 group-hover:shadow-indigo-300 transition-shadow">
              <Calculator className="w-4.5 h-4.5 text-white" size={18} />
              {/* Live dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" aria-hidden="true" />
            </div>

            {/* Wordmark */}
            <div className="flex flex-col leading-none">
              <span className="font-black text-[17px] tracking-tight text-slate-900 group-hover:text-indigo-700 transition-colors">
                FreeUS<span className="text-indigo-600">Calc</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                2026 · Free · Accurate
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ───────────────────────────────────────────────── */}
          <div
            ref={dropdownRef}
            className="hidden md:flex items-center gap-0.5"
          >
            {NAV_ITEMS.map((item) => {
              const hasDropdown = item.tools.length > 0;
              const active      = isActive(item.href);
              const open        = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && openDropdown(item.label)}
                  onMouseLeave={() => hasDropdown && closeDropdown()}
                >
                  {hasDropdown ? (
                    <button
                      onClick={() => setActiveDropdown(open ? null : item.label)}
                      aria-expanded={open}
                      aria-haspopup="true"
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                        active
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                        active
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown panel */}
                  {hasDropdown && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100 overflow-hidden transition-all duration-200 origin-top ${
                        open
                          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                      }`}
                      role="menu"
                    >
                      {/* Dropdown header */}
                      <div className={`px-4 py-3 border-b border-slate-50 flex items-center gap-2 ${item.bg}`}>
                        <item.icon size={15} className={item.color} />
                        <span className={`text-xs font-bold uppercase tracking-widest ${item.color}`}>
                          {item.label}
                        </span>
                      </div>

                      {/* Tool links */}
                      <div className="p-2">
                        {item.tools.map((tool) => (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            role="menuitem"
                            className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-slate-800 group-hover/item:text-indigo-600 transition-colors truncate">
                                {tool.label}
                              </p>
                              <p className="text-xs text-slate-400 mt-0.5">{tool.desc}</p>
                            </div>
                          </Link>
                        ))}

                        {/* View all link */}
                        <Link
                          href={item.href}
                          role="menuitem"
                          className="flex items-center justify-between px-3 py-2.5 mt-1 rounded-xl bg-slate-50 hover:bg-indigo-50 transition-colors group/all"
                        >
                          <span className="text-xs font-bold text-slate-500 group-hover/all:text-indigo-600 transition-colors uppercase tracking-wide">
                            View all {item.label}
                          </span>
                          <ChevronDown size={12} className="-rotate-90 text-slate-400 group-hover/all:text-indigo-500 transition-colors" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── DESKTOP CTA ───────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Updated badge */}
            <span className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
              <Zap size={11} className="fill-emerald-500 text-emerald-500" />
              2026 Rates Live
            </span>

            <Link
              href="/self-employment-tax-calculator-usa"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-px"
            >
              <Calculator size={15} />
              Try Free
            </Link>
          </div>

          {/* ── MOBILE TOGGLE ─────────────────────────────────────────────── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* ════════════════════════════════════════════════════════════════════
          MOBILE MENU
          — Full-screen slide-in drawer with accordion sections
      ════════════════════════════════════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-[55] bg-slate-900/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-[60] h-full w-[85%] max-w-[340px] bg-white shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <Calculator size={16} className="text-white" />
            </div>
            <span className="font-black text-base text-slate-900">
              FreeUS<span className="text-indigo-600">Calc</span>
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Updated pill */}
        <div className="px-5 py-3 bg-emerald-50 border-b border-emerald-100 flex items-center gap-2">
          <Zap size={13} className="text-emerald-600 fill-emerald-500" />
          <span className="text-xs font-bold text-emerald-700">Updated for Tax Year 2026</span>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <div key={item.label}>
                {/* Section label */}
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors ${
                    active
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center`}>
                    <item.icon size={16} className={item.color} />
                  </div>
                  {item.label}
                </Link>

                {/* Sub-tools */}
                {item.tools.length > 0 && (
                  <div className="ml-4 pl-4 border-l border-slate-100 mt-1 mb-2 space-y-0.5">
                    {item.tools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          pathname === tool.href
                            ? "text-indigo-600 bg-indigo-50 font-semibold"
                            : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                        }`}
                      >
                        {tool.label}
                        <span className="block text-xs text-slate-400 font-normal">{tool.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA at bottom */}
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <Link
            href="/self-employment-tax-calculator-usa"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors shadow-md shadow-indigo-200"
          >
            <Calculator size={16} />
            Try Free Calculators
          </Link>
          <p className="text-center text-xs text-slate-400 mt-2">No signup · No cost · Instant results</p>
        </div>
      </aside>
    </>
  );
}