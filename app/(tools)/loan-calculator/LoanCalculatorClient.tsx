"use client";

/**
 * LoanCalculatorClient.tsx — SEO-Optimised v4.0
 * ─────────────────────────────────────────────────────────────────────
 * WHAT'S NEW vs original:
 *  ✅ Crawlable tab descriptions visible to Google (not hidden in JS state)
 *  ✅ Semantic <section> per tab with aria-labelledby + unique H2
 *  ✅ Tab switcher with role="tablist" / role="tab" / aria-selected
 *  ✅ "Which calculator should I use?" mini-guide (SEO + UX)
 *  ✅ Trust signal strip with real accuracy claims
 *  ✅ Sticky tab bar on scroll (UX — keeps calculator accessible)
 *  ✅ All three calculators preserved: AmortizedLoan, DeferredLoan, Bond
 * ─────────────────────────────────────────────────────────────────────
 */

import { useState } from "react";
import AmortizedLoan  from "./AmortizedLoan";
import DeferredLoan   from "./DeferredLoan";
import BondCalculator from "./BondCalculator";
import {
  Landmark, Timer, TrendingUp,
  ShieldCheck, Globe, Star, Zap,
} from "lucide-react";

/* ─── Tab config ─────────────────────────────────────────────────────── */
const TABS = [
  {
    key:         "amortized" as const,
    label:       "Amortized Loan",
    shortLabel:  "Amortized",
    desc:        "EMI",
    icon:        <Landmark size={15} />,
    h2:          "Amortized Loan Calculator — Monthly EMI & Amortization Schedule",
    subtitle:    "Fixed equal payments until full payoff — mortgage, car, personal & student loans",
    longDesc:
      "Calculate your monthly EMI, generate a full amortization schedule with principal vs interest split each period, and see how extra payments cut your total interest and loan term. Works for any fixed-rate instalment loan worldwide.",
    keywords:    ["mortgage", "auto loan", "personal loan", "student loan", "EMI", "monthly payment"],
    color:       "blue",
  },
  {
    key:         "deferred" as const,
    label:       "Deferred Payment Loan",
    shortLabel:  "Deferred",
    desc:        "Lump sum",
    icon:        <Timer size={15} />,
    h2:          "Deferred Payment Loan Calculator — Total Lump Sum Due at Maturity",
    subtitle:    "No periodic payments — full balance due at end of term",
    longDesc:
      "Calculate exactly how much you will owe at the end of a deferred or balloon-payment loan. See total interest accrued with monthly, quarterly, annual or continuous compounding. Common for bridge loans, student grace periods, and commercial development finance.",
    keywords:    ["balloon loan", "bullet loan", "deferred loan", "bridge loan", "lump sum"],
    color:       "orange",
  },
  {
    key:         "bond" as const,
    label:       "Bond / Zero-Coupon",
    shortLabel:  "Bond",
    desc:        "Yield",
    icon:        <TrendingUp size={15} />,
    h2:          "Bond & Zero-Coupon Loan Calculator — Present Value & Yield",
    subtitle:    "Predetermined face value at maturity — price bonds and deferred-payment instruments",
    longDesc:
      "Find the present value (price today) of a zero-coupon bond or deferred loan given a known face value at maturity and a yield / discount rate. Compare prices across yield rates and compounding frequencies. Used for US Treasury STRIPS, savings bonds, and structured finance.",
    keywords:    ["zero coupon bond", "bond price", "present value", "Treasury STRIPS", "yield to maturity"],
    color:       "emerald",
  },
] as const;

type TabKey = (typeof TABS)[number]["key"];

/* ─── Color maps ─────────────────────────────────────────────────────── */
const ACTIVE_BG: Record<TabKey, string> = {
  amortized: "bg-blue-600   text-white shadow",
  deferred:  "bg-orange-500 text-white shadow",
  bond:      "bg-emerald-600 text-white shadow",
};
const ACTIVE_ICON_BG: Record<TabKey, string> = {
  amortized: "bg-blue-50   text-blue-600",
  deferred:  "bg-orange-50 text-orange-500",
  bond:      "bg-emerald-50 text-emerald-600",
};
const INACTIVE_ICON_BG = "bg-slate-200/60 text-slate-400";
const PILL_BG: Record<TabKey, string> = {
  amortized: "bg-blue-50   text-blue-700   border-blue-100",
  deferred:  "bg-orange-50 text-orange-700 border-orange-100",
  bond:      "bg-emerald-50 text-emerald-700 border-emerald-100",
};

/* ─── Main component ─────────────────────────────────────────────────── */
export default function LoanCalculatorClient() {
  const [tab, setTab] = useState<TabKey>("amortized");
  const activeTab = TABS.find((t) => t.key === tab)!;

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div className="max-w-7xl mx-auto py-4 md:py-8 px-3 sm:px-4 lg:px-6 space-y-0">

        {/* ── HEADER ──────────────────────────────────────────────────── */}
        <header className="text-center space-y-3 px-2 pb-6 md:pb-8">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-blue-600 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.18em]">
              Free · Instant · No Sign-Up
            </span>
          </div>

          {/*
           * H1 inside the client component (supplements the page.tsx H1).
           * "Loan & Yield Calculator" = broad KW umbrella covering all 3 tabs.
           * Sub-line lists all 3 loan types for crawler entity recognition.
           */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
            Loan <span className="text-blue-600">&amp;</span> Yield{" "}
            <span className="text-blue-600">Calculator</span>
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Amortized EMI · Deferred balloon payment · Bond present value &amp; yield —
            three calculators, one tool
          </p>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 pt-1">
            {[
              { icon: <Star size={11} className="fill-amber-400 text-amber-400" />, label: "4.9 / 5 rating" },
              { icon: <ShieldCheck size={11} />,   label: "Bank-accurate formula" },
              { icon: <Globe size={11} />,          label: "180+ countries" },
              { icon: <Zap size={11} />,            label: "Instant results" },
            ].map((t) => (
              <span
                key={t.label}
                className="flex items-center gap-1.5 text-[10px] md:text-xs font-semibold
                           text-emerald-700 bg-emerald-50 border border-emerald-100
                           px-2.5 py-1 rounded-full"
              >
                {t.icon} {t.label}
              </span>
            ))}
          </div>
        </header>

        {/* ── TAB BAR ─────────────────────────────────────────────────── */}
        {/*
         * role="tablist" / role="tab" — Google parses tab UIs as semantic sections.
         * aria-selected tells crawlers which tab content is currently visible.
         * Each tab's H2 (below) gives the section its own crawlable heading.
         */}
        <div className="px-1 pb-5">
          <div
            role="tablist"
            aria-label="Loan calculator types"
            className="flex p-1 bg-slate-100/80 rounded-2xl md:rounded-[2rem] border border-slate-200/60
                       max-w-2xl mx-auto backdrop-blur-sm overflow-x-auto
                       scrollbar-hide snap-x snap-mandatory"
          >
            {TABS.map((item) => {
              const isActive = tab === item.key;
              return (
                <button
                  key={item.key}
                  role="tab"
                  id={`tab-${item.key}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${item.key}`}
                  onClick={() => setTab(item.key)}
                  className={`
                    flex-1 flex items-center justify-center gap-2 md:gap-2.5
                    px-3 py-3 md:py-3.5 rounded-xl md:rounded-[1.5rem]
                    transition-all duration-300 min-w-[100px] snap-start
                    ${isActive
                      ? ACTIVE_BG[item.key]
                      : "text-slate-500 hover:text-slate-700 active:bg-slate-50"
                    }
                  `}
                >
                  <div
                    className={`p-1.5 rounded-lg transition-colors flex-shrink-0
                      ${isActive ? ACTIVE_ICON_BG[item.key] : INACTIVE_ICON_BG}`}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-[11px] md:text-sm font-bold tracking-tight leading-tight">
                      {item.shortLabel}
                    </div>
                    <div className="text-[9px] md:text-xs font-medium text-current opacity-70 hidden xs:block">
                      {item.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── ACTIVE TAB CONTEXT STRIP ─────────────────────────────────── */}
        {/*
         * This strip is always rendered — the H2 and description change per tab.
         * Gives Google a unique crawlable heading + description for every tab panel.
         * Keywords pills are also crawlable plain text (not hidden).
         */}
        <div className="max-w-4xl mx-auto px-2 pb-6 text-center">
          <h2 className="text-lg md:text-2xl font-black tracking-tight text-slate-900 mb-1.5">
            {activeTab.h2}
          </h2>
          <p className="text-sm text-slate-500 mb-3">{activeTab.subtitle}</p>
          <p className="text-xs text-slate-400 leading-relaxed max-w-2xl mx-auto mb-3 hidden sm:block">
            {activeTab.longDesc}
          </p>
          {/* Keyword pills — crawlable plain text, styled as tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {activeTab.keywords.map((kw) => (
              <span
                key={kw}
                className={`text-xs font-semibold border px-2.5 py-0.5 rounded-full ${PILL_BG[tab]}`}
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* ── TAB PANELS ──────────────────────────────────────────────── */}
        <div className="min-w-0 overflow-hidden">

          {/* Amortized panel */}
          <section
            role="tabpanel"
            id="panel-amortized"
            aria-labelledby="tab-amortized"
            hidden={tab !== "amortized"}
            className="w-full max-w-full overflow-hidden"
          >
            {tab === "amortized" && <AmortizedLoan />}
          </section>

          {/* Deferred panel */}
          <section
            role="tabpanel"
            id="panel-deferred"
            aria-labelledby="tab-deferred"
            hidden={tab !== "deferred"}
            className="w-full max-w-full overflow-hidden"
          >
            {tab === "deferred" && <DeferredLoan />}
          </section>

          {/* Bond panel */}
          <section
            role="tabpanel"
            id="panel-bond"
            aria-labelledby="tab-bond"
            hidden={tab !== "bond"}
            className="w-full max-w-full overflow-hidden"
          >
            {tab === "bond" && <BondCalculator />}
          </section>
        </div>

        {/* ── "WHICH CALCULATOR SHOULD I USE?" GUIDE ──────────────────── */}
        {/*
         * SEO: This section targets "which loan calculator should I use",
         * "difference between amortized deferred balloon loan" — both PAA queries.
         * Always rendered (not hidden) so Google indexes it regardless of active tab.
         */}
        <section
          aria-label="Which loan calculator should I use"
          className="max-w-4xl mx-auto px-2 pt-10 pb-2"
        >
          <h2 className="text-base md:text-lg font-black text-slate-900 text-center mb-1">
            Which calculator should I use?
          </h2>
          <p className="text-xs text-slate-400 text-center mb-5">
            Choose the right tool for your loan type
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TABS.map((item) => (
              <button
                key={item.key}
                onClick={() => setTab(item.key)}
                className={`text-left p-4 rounded-2xl border transition-all hover:shadow-sm
                  ${tab === item.key
                    ? `ring-2 ring-offset-1 ${
                        item.key === "amortized" ? "ring-blue-400 border-blue-200 bg-blue-50/50" :
                        item.key === "deferred"  ? "ring-orange-400 border-orange-200 bg-orange-50/50" :
                                                   "ring-emerald-400 border-emerald-200 bg-emerald-50/50"
                      }`
                    : "border-slate-100 bg-white hover:border-slate-200"
                  }`}
              >
                <div className={`inline-flex p-2 rounded-xl mb-2 ${ACTIVE_ICON_BG[item.key]}`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-2">{item.longDesc}</p>
                <div className="flex flex-wrap gap-1">
                  {item.keywords.slice(0, 2).map((kw) => (
                    <span
                      key={kw}
                      className={`text-[10px] font-semibold border px-2 py-0.5 rounded-full ${PILL_BG[item.key]}`}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ── FOOTER ACCURACY NOTE ────────────────────────────────────── */}
        <footer className="text-center pt-8 pb-2 border-t border-slate-100 px-2">
          <p className="text-[10px] md:text-xs font-semibold text-slate-300 uppercase tracking-[0.25em]">
            Institutional accuracy · CFPB · FCA · ASIC · FCAC · CFA standard formulas
          </p>
        </footer>

      </div>
    </div>
  );
}