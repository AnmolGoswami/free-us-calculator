// components/common/Footer.tsx
'use client';

import Link from "next/link";
import { useState } from "react";
import {
  ShieldCheck, Mail, Heart, Calculator, TrendingUp,
  Receipt, DollarSign, BookOpen, ArrowRight, CheckCircle2,
  Zap, Lock, ExternalLink, MessageSquare,
} from "lucide-react";

// ─── Static data ──────────────────────────────────────────────────────────────
const TOOL_LINKS = [
  { label: "Self-Employment Tax",  href: "/self-employment-tax-calculator-usa" },
  { label: "Salary After Tax",     href: "/salary-after-tax-calculator"        },
  { label: "Paycheck Calculator",  href: "/paycheck-calculator"                },
  { label: "Hourly to Salary",     href: "/hourly-to-salary-calculator"        },
  { label: "Uber Earnings",        href: "/uber-earnings-calculator"           },
  { label: "DoorDash Pay",         href: "/doordash-earnings-calculator"       },
  { label: "Loan Calculator",      href: "/loan-calculator"                    },
  { label: "Rent Affordability",   href: "/rent-affordability-calculator"      },
  { label: "Overtime Pay",         href: "/overtime-calculator"                },
];

const CATEGORY_LINKS = [
  { label: "Tax Calculators",      href: "/tax-calculators",     icon: Receipt,    color: "text-blue-400"    },
  { label: "Earnings Calculators", href: "/earning-calculators", icon: TrendingUp, color: "text-emerald-400" },
  { label: "Cost & Planning",      href: "/cost-calculators",    icon: DollarSign, color: "text-amber-400"   },
  { label: "Blog & Insights",      href: "/blog",                icon: BookOpen,   color: "text-violet-400"  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use",   href: "/terms"          },
  { label: "Disclaimer",     href: "/disclaimer"     },
  { label: "About Us",       href: "/about"          },
  { label: "Contact",        href: "/contact"        },
];

const WEB3FORMS_KEY = "20a8e715-242c-4f61-9d17-19c89bdc4a09";

const TAX_FACTS = [
  { label: "Standard Deduction (Single)", value: "$15,000"  },
  { label: "Standard Deduction (MFJ)",    value: "$30,000"  },
  { label: "SS Wage Base",                value: "$176,100" },
  { label: "SE Tax Rate",                 value: "15.3%"    },
  { label: "Top Federal Rate",            value: "37%"      },
  { label: "401(k) Limit",               value: "$23,500"  },
];

// ─── Newsletter form ──────────────────────────────────────────────────────────
function NewsletterForm() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          email,
          subject: "📬 New Newsletter Subscriber – FreeUSCalculator",
          message: `New subscriber: ${email}`,
          from_name: "FreeUSCalculator Newsletter",
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-4 py-4">
        <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-emerald-300">You&apos;re in!</p>
          <p className="text-xs text-emerald-400/80 mt-0.5">
            We&apos;ll notify you about new calculators and 2026 tax updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />
      <div className="flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === "loading"}
            className="w-full bg-white/5 border border-white/10 focus:border-indigo-500
                       rounded-xl pl-9 pr-4 py-3 text-sm text-white
                       placeholder:text-slate-500 outline-none transition-all
                       disabled:opacity-60"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500
                     disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold
                     text-sm px-5 py-3 rounded-xl transition-all whitespace-nowrap"
        >
          {status === "loading" ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>Subscribe <ArrowRight size={14} /></>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-400 mt-2">Something went wrong. Please try again.</p>
      )}
      <p className="text-[10px] text-slate-600 mt-2">No spam · Unsubscribe anytime · 100% free</p>
    </form>
  );
}

// ─── Main Footer ──────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer
      className="bg-[#080c18] text-slate-400 border-t border-white/6"
      aria-label="Site footer"
    >

      {/* ── Newsletter + Tax Facts band ───────────────────────────────────── */}
      <div className="border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Newsletter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap size={15} className="text-amber-400 fill-amber-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                  Stay Updated
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                Free Tax Updates &amp; New Tools
              </h2>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-md">
                Join 5,000+ Americans getting monthly tax insights, 2026 bracket updates,
                and first access to new free calculators.
              </p>
              <NewsletterForm />

              {/* Contact CTA — links to existing contact page */}
              <div className="mt-8 flex items-center gap-3 p-4 rounded-2xl bg-white/4 border border-white/8">
                <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/20
                                flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={16} className="text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white leading-none mb-0.5">
                    Questions or paid promotion?
                  </p>
                  <p className="text-xs text-slate-500">
                    75,000+ monthly US users · Reply within 24h
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600
                             hover:bg-indigo-500 text-white text-xs font-bold transition-all
                             flex-shrink-0"
                >
                  Contact Us <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* 2026 Tax Quick-Reference */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calculator size={15} className="text-indigo-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                  2026 Tax Quick Reference
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                Key Numbers for Tax Year 2026
              </h2>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Updated for the latest IRS figures. Bookmark this — these numbers affect
                every paycheck, tax return, and retirement contribution.
              </p>

              {/* Tax facts grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {TAX_FACTS.map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-white/4 border border-white/8 hover:border-indigo-500/30
                               rounded-xl px-3.5 py-3 flex items-center justify-between gap-2
                               transition-colors"
                  >
                    <span className="text-[11px] text-slate-500 leading-tight">{label}</span>
                    <span className="text-sm font-black text-indigo-300 tabular-nums shrink-0">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/tax-calculators"
                className="inline-flex items-center gap-1.5 text-xs font-semibold
                           text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Use our free 2026 tax calculators <ExternalLink size={11} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main links grid ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-6">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl
                              flex items-center justify-center shadow-lg shadow-indigo-900/40
                              group-hover:scale-105 transition-transform">
                <Calculator size={18} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-lg text-white tracking-tight">
                  FreeUS<span className="text-indigo-400">Calc</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-0.5">
                  Free · Accurate · 2026
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-500 leading-relaxed max-w-xs mb-5">
              IRS-accurate financial calculators for Americans. Updated for Tax Year 2026 —
              self-employment tax, paycheck, gig earnings, and more.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: ShieldCheck, label: "100% Private",   color: "text-emerald-400" },
                { icon: Lock,        label: "No Data Stored", color: "text-sky-400"     },
                { icon: Heart,       label: "Always Free",    color: "text-rose-400"    },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 bg-white/4 border border-white/8
                             rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-300"
                >
                  <Icon size={11} className={color} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Popular tools */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Popular Tools
            </h3>
            <ul className="space-y-2.5">
              {TOOL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-xs text-slate-500
                               hover:text-white transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-600
                                     group-hover:bg-indigo-400 transition-colors shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {CATEGORY_LINKS.map(({ label, href, icon: Icon, color }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-xs text-slate-500
                               hover:text-white transition-colors group"
                  >
                    <Icon
                      size={12}
                      className={`${color} group-hover:scale-110 transition-transform`}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Company &amp; Legal
            </h3>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────────── */}
        <div className="mt-10 pt-6 border-t border-white/6 flex flex-col sm:flex-row
                        items-center justify-between gap-3 text-[11px] text-slate-600">
          <p>© 2026 FreeUSCalculator · All rights reserved</p>
          <p className="text-center">
            For estimation only. Not financial or tax advice.{" "}
            <Link
              href="/disclaimer"
              className="underline underline-offset-2 hover:text-slate-400 transition-colors"
            >
              See disclaimer
            </Link>
          </p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <Heart size={10} className="text-rose-500 fill-rose-500 mx-0.5" />{" "}
            for Americans
          </p>
        </div>
      </div>
    </footer>
  );
}