"use client";

/**
 * DeferredLoan.tsx — SEO-Optimised v4.0
 * ─────────────────────────────────────────────────────────────────────
 * WHAT'S NEW vs original:
 *  ✅ Crawlable <section> wrappers with semantic H2/H3 headings
 *  ✅ InfoTip tooltips on every input (E-E-A-T + UX)
 *  ✅ Maturity amount comparison table (rate × term — featured snippet)
 *  ✅ Compounding frequency impact table (PAA target)
 *  ✅ "How deferred loans work" educational copy (AdSense content)
 *  ✅ Balance growth area chart (visual engagement signal)
 *  ✅ Stat cards with labelled accessible metrics
 *  ✅ Interest rate sensitivity section
 *  ✅ Disclaimer (AdSense policy + E-E-A-T)
 *  ✅ All calculation logic unchanged (uses existing loanCalculator lib)
 *  ✅ Mobile-first, zero layout overflow, dark-mode safe colours
 *  ✅ Accessible: aria-labels, role="status", live aria regions
 * ─────────────────────────────────────────────────────────────────────
 */

import { useState, useMemo } from "react";
import {
  Copy, Check, Lightbulb, ChevronDown, ChevronUp,
  Percent, TrendingUp, Info, Calendar,
  DollarSign, AlertCircle, ArrowRight, BarChart2,
  Landmark, Zap, Clock, Activity, Timer,
} from "lucide-react";
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip,
  ResponsiveContainer, Legend,
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
} from "recharts";

import { calculateDeferredLoan, CompoundFrequency } from "@/lib/loanCalculator";
import InputField from "@/components/ui/InputField";

/* ─── Types ─────────────────────────────────────────────────────────── */
type Currency = "USD" | "INR" | "EUR" | "GBP";

const CURRENCY_META: Record<Currency, { symbol: string; locale: string; label: string }> = {
  USD: { symbol: "$",  locale: "en-US", label: "US Dollar"    },
  INR: { symbol: "₹", locale: "en-IN", label: "Indian Rupee" },
  EUR: { symbol: "€", locale: "de-DE", label: "Euro"          },
  GBP: { symbol: "£", locale: "en-GB", label: "British Pound" },
};

const PIE_COLORS = ["#2563eb", "#f59e0b"];

/* ─── InfoTip ────────────────────────────────────────────────────────── */
function InfoTip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-block ml-1.5 align-middle">
      <button
        type="button"
        aria-label="More information"
        onClick={() => setOpen(!open)}
        className="text-slate-400 hover:text-blue-500 transition-colors"
      >
        <Info size={13} />
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute z-50 left-5 top-0 w-60 bg-slate-900 text-white text-xs rounded-xl p-3 shadow-xl leading-relaxed"
        >
          {text}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="block mt-2 text-blue-300 underline"
          >
            close
          </button>
        </span>
      )}
    </span>
  );
}

/* ─── StatCard ───────────────────────────────────────────────────────── */
function StatCard({
  label, value, sub, color = "text-slate-900", icon,
}: {
  label: string; value: string; sub?: string;
  color?: string; icon?: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col gap-1">
      <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">
        {icon}{label}
      </div>
      <div className={`text-xl font-black tracking-tight ${color}`}>{value}</div>
      {sub && <div className="text-xs text-slate-400">{sub}</div>}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────── */
export default function DeferredLoan() {

  /* ── inputs ── */
  const [principal, setPrincipal] = useState(100000);
  const [rate,      setRate]      = useState(8);
  const [years,     setYears]     = useState(3);
  const [compFreq,  setCompFreq]  = useState<CompoundFrequency>("monthly");
  const [currency,  setCurrency]  = useState<Currency>("GBP");

  /* ── UI state ── */
  const [copied,         setCopied]         = useState(false);
  const [showRateTable,  setShowRateTable]  = useState(false);
  const [showFreqTable,  setShowFreqTable]  = useState(false);
  const [showTermTable,  setShowTermTable]  = useState(false);
  const [showChart,      setShowChart]      = useState(true);

  /* ── formatting ── */
  const cx = CURRENCY_META[currency];

  const fmt = (n: number, compact = false) => {
    if (compact) {
      const abs = Math.abs(n);
      const sym = cx.symbol;
      if (abs >= 1_000_000_000) return `${sym}${(abs / 1_000_000_000).toFixed(2)}B`;
      if (abs >= 1_000_000)     return `${sym}${(abs / 1_000_000).toFixed(2)}M`;
      if (abs >= 100_000)       return `${sym}${(abs / 1_000).toFixed(1)}K`;
    }
    return new Intl.NumberFormat(cx.locale, {
      style: "currency", currency, maximumFractionDigits: 0,
    }).format(n);
  };

  const fmtExact = (n: number) =>
    new Intl.NumberFormat(cx.locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);

  /* ── calculation ── */
  const result = useMemo(() => {
    if (!principal || !years) return null;
    try {
      return calculateDeferredLoan({
        principal,
        annualRate:        rate,
        years,
        compoundFrequency: compFreq,
        currencySymbol:    cx.symbol,
      });
    } catch {
      return null;
    }
  }, [principal, rate, years, compFreq, cx]);

  /* ── derived ── */
  const interestPct = useMemo(() => {
    if (!result || !principal) return 0;
    return (result.totalInterest / principal) * 100;
  }, [result, principal]);

  const principalPct = useMemo(() => {
    if (!result || !principal) return 0;
    return (principal / result.amountDueAtMaturity) * 100;
  }, [result, principal]);

  /* ── rate comparison rows ── */
  const rateRows = useMemo(() => {
    if (!principal || !years) return [];
    return [3, 4, 5, 6, 7, 8, 9, 10, 12, 15].map((r) => {
      try {
        const res = calculateDeferredLoan({
          principal, annualRate: r, years,
          compoundFrequency: compFreq, currencySymbol: cx.symbol,
        });
        return {
          rate:     r,
          maturity: res.amountDueAtMaturity,
          interest: res.totalInterest,
          pct:      (res.totalInterest / principal) * 100,
        };
      } catch { return null; }
    }).filter(Boolean) as { rate: number; maturity: number; interest: number; pct: number }[];
  }, [principal, years, compFreq, cx]);

  /* ── compounding frequency impact rows ── */
  const freqRows = useMemo(() => {
    if (!principal || !years) return [];
    const freqs: CompoundFrequency[] = ["yearly", "quarterly", "monthly", "daily", "continuous"];
    return freqs.map((f) => {
      try {
        const res = calculateDeferredLoan({
          principal, annualRate: rate, years,
          compoundFrequency: f, currencySymbol: cx.symbol,
        });
        return { freq: f, maturity: res.amountDueAtMaturity, interest: res.totalInterest };
      } catch { return null; }
    }).filter(Boolean) as { freq: string; maturity: number; interest: number }[];
  }, [principal, rate, years, cx]);

  /* ── term comparison rows ── */
  const termRows = useMemo(() => {
    if (!principal) return [];
    return [1, 2, 3, 5, 7, 10, 15, 20].map((y) => {
      try {
        const res = calculateDeferredLoan({
          principal, annualRate: rate, years: y,
          compoundFrequency: compFreq, currencySymbol: cx.symbol,
        });
        return {
          term:     y,
          maturity: res.amountDueAtMaturity,
          interest: res.totalInterest,
          pct:      (res.totalInterest / principal) * 100,
          date:     res.maturityDate,
        };
      } catch { return null; }
    }).filter(Boolean) as { term: number; maturity: number; interest: number; pct: number; date: string }[];
  }, [principal, rate, compFreq, cx]);

  /* ── chart data: balance growth year by year ── */
  const chartData = useMemo(() => {
    if (!principal || !years) return [];
    const points: { year: number; balance: number; interest: number }[] = [];
    const steps = Math.min(years * 4, 60); // quarterly points, max 60
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * years;
      try {
        const res = calculateDeferredLoan({
          principal, annualRate: rate, years: t || 0.01,
          compoundFrequency: compFreq, currencySymbol: cx.symbol,
        });
        points.push({
          year:     Math.round(t * 10) / 10,
          balance:  Math.round(res.amountDueAtMaturity),
          interest: Math.round(res.totalInterest),
        });
      } catch { /* skip */ }
    }
    return points;
  }, [principal, rate, years, compFreq]);

  /* ── copy summary ── */
  const handleCopy = () => {
    if (!result) return;
    const text = [
      `Deferred Loan Summary — ${currency}`,
      `Principal Borrowed:     ${fmt(principal)}`,
      `Amount Due at Maturity: ${fmt(result.amountDueAtMaturity)}`,
      `Total Interest Accrued: ${fmt(result.totalInterest)}`,
      `Interest Rate:          ${rate}%`,
      `Loan Term:              ${years} years`,
      `Compounding:            ${compFreq}`,
      `Maturity Date:          ${result.maturityDate}`,
    ].join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  /* ─── render ─────────────────────────────────────────────────────── */
  return (
    <div className="w-full max-w-full overflow-hidden py-4 px-3 sm:px-4">

      {/*
        ════════════════════════════════════════════════════════════════
        SEO SECTION 1 — Crawlable intro above calculator
        Targets: "deferred payment loan calculator", "balloon loan calculator",
        "how much interest accrues on a deferred loan", "lump sum loan calculator"
        ════════════════════════════════════════════════════════════════
      */}
      <section
        aria-label="Deferred loan calculator introduction"
        className="max-w-4xl mx-auto mb-8 text-center px-2"
      >
        <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 mb-3">
          Deferred Payment Loan Calculator — Lump Sum Due at Maturity
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          Calculate the <strong>total amount due at maturity</strong> for a deferred or
          balloon-payment loan — where no payments are made during the term and the full balance
          is repaid in one lump sum. See exactly <strong>how much interest accrues</strong> over
          the loan period with monthly, quarterly, annual, or continuous compounding.
        </p>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {[
            "Deferred payment loans",
            "Balloon payment calculator",
            "Interest accrual over time",
            "Multiple compounding frequencies",
            "Rate & term comparison tables",
            "Free, no login required",
          ].map((t) => (
            <span
              key={t}
              className="text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CALCULATOR GRID
          ════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* ── LEFT: INPUTS ──────────────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-5">

            {/* Currency selector */}
            <div
              role="group"
              aria-label="Select currency"
              className="bg-white rounded-3xl shadow-sm border border-slate-200 p-1.5 flex gap-1"
            >
              {(Object.keys(CURRENCY_META) as Currency[]).map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  aria-pressed={currency === cur}
                  aria-label={CURRENCY_META[cur].label}
                  className={`flex-1 py-3 rounded-2xl text-sm font-bold transition-all ${
                    currency === cur
                      ? "bg-orange-500 text-white shadow"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>

            {/* Input form */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-7">

              {/* Principal */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Loan Principal (Amount Borrowed)
                  <InfoTip text="The amount of money borrowed today. With a deferred loan, you receive this amount now and repay the full accrued balance — principal plus all interest — in one lump sum at maturity." />
                </label>
                <InputField
                  label=""
                  value={principal}
                  onChange={(v) => setPrincipal(Number(v) || 0)}
                  prefix={cx.symbol}
                  type="number"
                />
                <p className="text-xs text-slate-400 mt-1">
                  E.g. {cx.symbol}100,000 student loan · {cx.symbol}500,000 commercial property loan
                </p>
              </div>

              {/* Interest rate */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Annual Interest Rate (%)
                  <InfoTip text="The annual rate at which interest compounds on your outstanding balance. Unlike amortized loans, with a deferred loan you make no payments — so interest compounds on the growing balance throughout the term." />
                </label>
                <InputField
                  label=""
                  value={rate}
                  onChange={(v) => setRate(Number(v) || 0)}
                  type="number"
                />
                <p className="text-xs text-slate-400 mt-1">
                  Average rates 2026: Student ~6–8% · Commercial ~5–9% · Personal deferred ~10–15%
                </p>

                {/* Educational micro-copy */}
                <div className="mt-2 p-3 bg-orange-50 border border-orange-100 rounded-xl text-xs text-orange-800 leading-relaxed">
                  <strong>Compounding effect warning:</strong> Because you make no payments during
                  the loan term, interest compounds on the growing balance. At 8% over 10 years,
                  your {cx.symbol}100,000 debt more than doubles to {cx.symbol}221,964. The longer
                  the term, the more dramatically the balance grows.
                </div>
              </div>

              {/* Loan term */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Loan Term (Years)
                  <InfoTip text="How long until the full balance is due. Common deferred loan terms: 1–5 years (commercial), 4–6 years (student grace period), up to 30 years (some zero-coupon mortgages)." />
                </label>
                <InputField
                  label=""
                  value={years}
                  onChange={(v) => setYears(Number(v) || 0)}
                  type="number"
                />
                <p className="text-xs text-slate-400 mt-1">
                  Common: 1–5 yr (commercial bridge) · 4 yr (student deferral) · 10–30 yr (long-term deferred)
                </p>
              </div>

              {/* Compounding frequency */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Compounding Frequency
                  <InfoTip text="How often interest is calculated and added to the balance. More frequent compounding means interest accrues on interest more often — slightly increasing the final amount owed. Monthly is the most common for consumer loans." />
                </label>
                <select
                  value={compFreq}
                  onChange={(e) => setCompFreq(e.target.value as CompoundFrequency)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  {[
                    ["yearly",      "Annual (1×/year)"],
                    ["quarterly",   "Quarterly (4×/year)"],
                    ["monthly",     "Monthly (12×/year) — most common"],
                    ["daily",       "Daily (365×/year)"],
                    ["continuous",  "Continuous — maximum compounding"],
                  ].map(([val, label]) => (
                    <option key={val} value={val}>{label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Formula box */}
            <div className="bg-slate-900 text-white rounded-3xl p-6">
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                <Timer size={14} className="text-orange-400" />
                Deferred Loan Maturity Formula
              </h3>
              <div className="bg-slate-800 rounded-xl p-4 font-mono text-xs text-slate-200 leading-relaxed">
                <p className="mb-2 text-slate-400">Discrete compounding:</p>
                <p>
                  Maturity = <span className="text-orange-300">P × (1 + r/n)^(n×t)</span>
                </p>
                <div className="border-t border-slate-600 mt-3 pt-3 space-y-1 text-slate-400">
                  <p><span className="text-slate-200">P</span> = Principal (amount borrowed)</p>
                  <p><span className="text-slate-200">r</span> = Annual interest rate (decimal)</p>
                  <p><span className="text-slate-200">n</span> = Compounding periods per year</p>
                  <p><span className="text-slate-200">t</span> = Loan term in years</p>
                </div>
                <div className="border-t border-slate-600 mt-3 pt-3">
                  <p className="text-slate-400">Continuous compounding:</p>
                  <p>Maturity = <span className="text-orange-300">P × e^(r×t)</span></p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Same compound-interest formula used by banks, student loan servicers, and commercial lenders worldwide.
              </p>
            </div>
          </div>

          {/* ── RIGHT: RESULTS ────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-5">

            {!result ? (
              <div
                role="status"
                className="bg-white min-h-[300px] rounded-3xl shadow-sm border border-slate-200
                           flex flex-col items-center justify-center p-8 text-center gap-4"
              >
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                  <Timer className="w-8 h-8 text-orange-300" />
                </div>
                <p className="text-lg font-semibold text-slate-400">
                  Enter loan details to calculate maturity amount
                </p>
                <p className="text-sm text-slate-400 max-w-xs">
                  Fill in the principal, interest rate, and loan term on the left to see the total
                  amount due at maturity and how interest accrues over time.
                </p>
              </div>
            ) : (
              <>
                {/* ── Hero maturity card ── */}
                <div
                  role="region"
                  aria-label="Deferred loan calculation results"
                  className="bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-3xl p-7 md:p-9 shadow-xl relative overflow-hidden"
                >
                  {/* Copy button */}
                  <div className="absolute top-5 right-5">
                    <button
                      onClick={handleCopy}
                      aria-label="Copy loan summary to clipboard"
                      className="p-2.5 bg-white/20 hover:bg-white/30 backdrop-blur rounded-xl transition-all active:scale-95"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Primary metric */}
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-100 mb-1">
                    Total Amount Due at Maturity
                  </p>
                  <div
                    className="text-5xl sm:text-6xl font-black tracking-tighter mb-1"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {fmt(result.amountDueAtMaturity, true)}
                  </div>
                  <p className="text-orange-100 text-sm mb-1">
                    {cx.symbol}{fmtExact(result.amountDueAtMaturity)} exact · {rate}% APR · {compFreq} compounding
                  </p>
                  <p className="text-orange-100/70 text-xs mb-7">
                    Due on {result.maturityDate} · {years} year{years !== 1 ? "s" : ""} deferred
                  </p>

                  {/* Secondary metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/20 text-sm">
                    <div>
                      <p className="text-orange-100 text-xs mb-1">Principal Borrowed</p>
                      <p className="font-bold">{fmt(principal, true)}</p>
                    </div>
                    <div>
                      <p className="text-orange-100 text-xs mb-1">Total Interest</p>
                      <p className="font-bold text-yellow-200">{fmt(result.totalInterest, true)}</p>
                    </div>
                    <div>
                      <p className="text-orange-100 text-xs mb-1">Interest Accrued</p>
                      <p className="font-bold">{interestPct.toFixed(1)}% of principal</p>
                    </div>
                  </div>
                </div>

                {/* ── Stat cards ── */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <StatCard
                    label="Due at Maturity"
                    value={fmt(result.amountDueAtMaturity, true)}
                    sub="lump sum"
                    icon={<Landmark size={12} />}
                    color="text-orange-600"
                  />
                  <StatCard
                    label="Total Interest"
                    value={fmt(result.totalInterest, true)}
                    sub={`${interestPct.toFixed(1)}% of principal`}
                    icon={<Percent size={12} />}
                    color="text-red-600"
                  />
                  <StatCard
                    label="Maturity Date"
                    value={result.maturityDate}
                    sub={`${years} years`}
                    icon={<Calendar size={12} />}
                  />
                  <StatCard
                    label="Risk Level"
                    value={result.riskLevel.toUpperCase()}
                    sub={rate > 10 ? "high rate" : "moderate"}
                    icon={<Activity size={12} />}
                    color={
                      result.riskLevel === "low"    ? "text-emerald-600" :
                      result.riskLevel === "medium" ? "text-amber-600"   : "text-red-600"
                    }
                  />
                </div>

                {/* ── Principal vs Interest visual bar ── */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
                  <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <BarChart2 size={15} className="text-orange-500" />
                    Principal vs total interest at maturity
                  </h3>

                  {/* Progress bar */}
                  <div
                    className="h-5 rounded-full overflow-hidden flex mb-3"
                    role="img"
                    aria-label={`Principal: ${fmt(principal)}, Interest: ${fmt(result.totalInterest)}`}
                  >
                    <div
                      className="bg-blue-600 transition-all"
                      style={{ width: `${principalPct}%` }}
                    />
                    <div className="bg-amber-400 flex-1" />
                  </div>

                  <div className="flex justify-between text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
                      Principal {fmt(principal)}
                      ({principalPct.toFixed(1)}%)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                      Interest {fmt(result.totalInterest)}
                      ({(100 - principalPct).toFixed(1)}%)
                    </span>
                  </div>

                  {/* Pie chart toggle */}
                  <button
                    onClick={() => setShowChart(!showChart)}
                    className="w-full text-xs text-slate-400 hover:text-orange-500 flex items-center justify-center gap-1 py-1 transition-colors"
                  >
                    {showChart ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    {showChart ? "Hide" : "Show"} donut chart
                  </button>

                  {showChart && (
                    <div className="mt-2">
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie
                            data={[
                              { name: "Principal", value: Math.round(principal)              },
                              { name: "Interest",  value: Math.round(result.totalInterest)   },
                            ]}
                            cx="50%"
                            cy="45%"
                            innerRadius="50%"
                            outerRadius="75%"
                            paddingAngle={3}
                            dataKey="value"
                          >
                            {PIE_COLORS.map((c, i) => (
                              <Cell key={i} fill={c} />
                            ))}
                          </Pie>
                          <RechartsTooltip
                            content={({ active, payload }) => {
                              if (active && payload?.length) {
                                const d = payload[0];
                                return (
                                  <div className="bg-white rounded-xl shadow border border-slate-100 px-3 py-2 text-xs">
                                    <p className="text-slate-500">{d.name}</p>
                                    <p className="font-bold text-slate-900">{fmt(Number(d.value))}</p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Legend
                            verticalAlign="bottom"
                            iconType="circle"
                            wrapperStyle={{ fontSize: "11px", paddingTop: 8 }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </div>

                {/* ── Balance growth area chart ── */}
                {chartData.length > 1 && (
                  <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
                    <h3 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-2">
                      <TrendingUp size={15} className="text-orange-500" />
                      How your debt grows over time
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      Balance owed increases each period as interest compounds on the growing total
                    </p>
                    <ResponsiveContainer width="100%" height={180}>
                      <AreaChart data={chartData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="debtGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%"  stopColor="#f97316" stopOpacity={0.18} />
                            <stop offset="95%" stopColor="#f97316" stopOpacity={0.02} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis
                          dataKey="year"
                          tick={{ fontSize: 10, fill: "#94a3b8" }}
                          label={{ value: "Years", position: "insideBottom", offset: -2, fontSize: 10, fill: "#94a3b8" }}
                        />
                        <YAxis
                          tick={{ fontSize: 10, fill: "#94a3b8" }}
                          tickFormatter={(v) => fmt(v, true)}
                          width={60}
                        />
                        <RechartsTooltip
                          content={({ active, payload, label }) => {
                            if (active && payload?.length) {
                              return (
                                <div className="bg-white rounded-xl shadow border border-slate-100 px-3 py-2 text-xs">
                                  <p className="text-slate-400 mb-1">Year {label}</p>
                                  <p className="font-bold text-orange-600">
                                    Balance: {fmt(Number(payload[0]?.value))}
                                  </p>
                                  <p className="text-amber-600">
                                    Interest: {fmt(Number(payload[1]?.value))}
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="balance"
                          stroke="#f97316"
                          strokeWidth={2}
                          fill="url(#debtGrad)"
                        />
                        <Area
                          type="monotone"
                          dataKey="interest"
                          stroke="#f59e0b"
                          strokeWidth={1.5}
                          fill="transparent"
                          strokeDasharray="4 2"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                    <div className="flex gap-4 mt-2 text-xs text-slate-400 justify-center">
                      <span className="flex items-center gap-1">
                        <span className="inline-block w-6 h-0.5 bg-orange-500" /> Total balance
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="inline-block w-6 h-0.5 bg-amber-400 border-dashed border-t" /> Accrued interest
                      </span>
                    </div>
                  </div>
                )}

                {/* ── Key insights ── */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-amber-50 rounded-xl">
                      <Lightbulb className="text-amber-500" size={18} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">Key insights for this deferred loan</h3>
                  </div>

                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li className="flex gap-3">
                      <ArrowRight size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>
                        You borrow <strong className="text-slate-900">{fmt(principal)}</strong> today
                        and owe <strong className="text-slate-900">{fmt(result.amountDueAtMaturity)}</strong>{" "}
                        at maturity — {interestPct.toFixed(1)}% more than originally borrowed.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Interest of <strong className="text-slate-900">{fmt(result.totalInterest)}</strong>{" "}
                        accrues over {years} year{years !== 1 ? "s" : ""} with{" "}
                        <strong className="text-slate-900">{compFreq}</strong> compounding at{" "}
                        <strong className="text-slate-900">{rate}%</strong> APR.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>
                        The full lump sum of{" "}
                        <strong className="text-slate-900">{fmt(result.amountDueAtMaturity)}</strong>{" "}
                        is due on <strong className="text-slate-900">{result.maturityDate}</strong>.
                        Ensure you have the funds available before this date.
                      </span>
                    </li>
                    <li className="flex gap-3 p-3 bg-red-50 border border-red-100 rounded-xl">
                      <AlertCircle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-red-800 text-xs">
                        <strong>Compounding risk:</strong> Because no payments are made, interest
                        compounds on the growing balance. Even a small rate increase or term extension
                        significantly increases the final amount owed. Use the comparison tables below
                        to understand your full exposure.
                      </span>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 2 — INTEREST RATE COMPARISON TABLE
            SEO: "how much interest on deferred loan different rates"
            ════════════════════════════════════════════════════════════════ */}
        {result && rateRows.length > 0 && (
          <section
            aria-labelledby="rate-table-heading"
            className="mt-10 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setShowRateTable(!showRateTable)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors border-b"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 bg-orange-50 rounded-xl">
                  <Percent className="text-orange-500" size={18} />
                </div>
                <div>
                  <h2 id="rate-table-heading" className="font-bold text-slate-900 text-base">
                    Maturity amount at different interest rates — comparison table
                  </h2>
                  <p className="text-sm text-slate-500">
                    See how the rate affects your total debt on this {fmt(principal, true)} loan over {years} years
                  </p>
                </div>
              </div>
              {showRateTable
                ? <ChevronUp size={18} className="text-slate-400 flex-shrink-0" />
                : <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
              }
            </button>

            {showRateTable && (
              <div className="p-5 md:p-7">
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  The table below shows the total lump sum due at maturity for a{" "}
                  <strong>{fmt(principal)} deferred loan over {years} years</strong> at different
                  interest rates with <strong>{compFreq}</strong> compounding. Each 1% increase in
                  rate adds significantly more to your final balance — because interest compounds on
                  interest with no monthly payments to offset it.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table
                    className="w-full text-sm"
                    aria-label="Deferred loan maturity amount by interest rate"
                  >
                    <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-3 text-left">Interest Rate</th>
                        <th className="px-4 py-3 text-left">Amount Due at Maturity</th>
                        <th className="px-4 py-3 text-left">Total Interest</th>
                        <th className="px-4 py-3 text-left">% Over Principal</th>
                        <th className="px-4 py-3 text-left">vs your rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {rateRows.map((row, i) => {
                        const isCurrentRate = row.rate === rate;
                        const baseRow       = rateRows.find((r) => r.rate === rate);
                        const diff          = baseRow ? row.maturity - baseRow.maturity : 0;
                        return (
                          <tr
                            key={row.rate}
                            className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"} ${
                              isCurrentRate ? "ring-2 ring-inset ring-orange-400" : ""
                            }`}
                          >
                            <td className="px-4 py-3 font-bold text-slate-900">
                              {row.rate}%
                              {isCurrentRate && (
                                <span className="ml-2 text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                                  current
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 font-bold text-orange-600">{fmt(row.maturity)}</td>
                            <td className="px-4 py-3 text-amber-600 font-semibold">{fmt(row.interest)}</td>
                            <td className="px-4 py-3 text-slate-600">{row.pct.toFixed(1)}%</td>
                            <td className={`px-4 py-3 font-semibold ${
                              isCurrentRate ? "text-slate-400" :
                              diff > 0       ? "text-red-500"     : "text-emerald-600"
                            }`}>
                              {isCurrentRate ? "—" : `${diff > 0 ? "+" : ""}${fmt(diff)}`}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  Principal {fmt(principal)} · {years} years · {compFreq} compounding.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════════
            SECTION 3 — LOAN TERM COMPARISON TABLE
            SEO: "how much do I owe after X years on a deferred loan"
            ════════════════════════════════════════════════════════════════ */}
        {result && termRows.length > 0 && (
          <section
            aria-labelledby="term-table-heading"
            className="mt-6 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setShowTermTable(!showTermTable)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors border-b"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 bg-amber-50 rounded-xl">
                  <Clock className="text-amber-500" size={18} />
                </div>
                <div>
                  <h2 id="term-table-heading" className="font-bold text-slate-900 text-base">
                    How the loan term affects total debt — year-by-year table
                  </h2>
                  <p className="text-sm text-slate-500">
                    Balance owed at 1, 2, 3, 5, 7, 10, 15 and 20 years for your {fmt(principal, true)} loan
                  </p>
                </div>
              </div>
              {showTermTable
                ? <ChevronUp size={18} className="text-slate-400 flex-shrink-0" />
                : <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
              }
            </button>

            {showTermTable && (
              <div className="p-5 md:p-7">
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  This table shows how exponential compounding causes the balance on your{" "}
                  <strong>{fmt(principal)} loan at {rate}%</strong> to grow dramatically over time.
                  Notice how the interest acceleration increases in later years — a classic
                  illustration of why deferred loans become significantly more expensive the longer
                  repayment is delayed.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table
                    className="w-full text-sm"
                    aria-label="Deferred loan balance by term length"
                  >
                    <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-3 text-left">Loan Term</th>
                        <th className="px-4 py-3 text-left">Amount Due</th>
                        <th className="px-4 py-3 text-left">Total Interest</th>
                        <th className="px-4 py-3 text-left">% Over Principal</th>
                        <th className="px-4 py-3 text-left">Maturity Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {termRows.map((row, i) => {
                        const isCurrentTerm = row.term === years;
                        return (
                          <tr
                            key={row.term}
                            className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"} ${
                              isCurrentTerm ? "ring-2 ring-inset ring-amber-400" : ""
                            }`}
                          >
                            <td className="px-4 py-3 font-bold text-slate-900">
                              {row.term} yr{row.term !== 1 ? "s" : ""}
                              {isCurrentTerm && (
                                <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                                  current
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 font-bold text-orange-600">{fmt(row.maturity)}</td>
                            <td className="px-4 py-3 text-amber-600 font-semibold">{fmt(row.interest)}</td>
                            <td className="px-4 py-3 text-slate-600">{row.pct.toFixed(1)}%</td>
                            <td className="px-4 py-3 text-slate-500">{row.date}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  Principal {fmt(principal)} · {rate}% APR · {compFreq} compounding.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════════
            SECTION 4 — COMPOUNDING FREQUENCY TABLE
            SEO: "how does compounding frequency affect deferred loan"
            ════════════════════════════════════════════════════════════════ */}
        {result && freqRows.length > 0 && (
          <section
            aria-labelledby="freq-table-heading"
            className="mt-6 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setShowFreqTable(!showFreqTable)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors border-b"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 bg-blue-50 rounded-xl">
                  <Zap className="text-blue-600" size={18} />
                </div>
                <div>
                  <h2 id="freq-table-heading" className="font-bold text-slate-900 text-base">
                    How compounding frequency affects your total debt
                  </h2>
                  <p className="text-sm text-slate-500">
                    Annual vs quarterly vs monthly vs daily vs continuous — side-by-side
                  </p>
                </div>
              </div>
              {showFreqTable
                ? <ChevronUp size={18} className="text-slate-400 flex-shrink-0" />
                : <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
              }
            </button>

            {showFreqTable && (
              <div className="p-5 md:p-7">
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  More frequent compounding means interest is added to your balance more often —
                  so you pay interest on interest more quickly. On a deferred loan with no payments,
                  this compounds into a meaningfully higher final balance compared to annual
                  compounding — especially over long terms.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table
                    className="w-full text-sm"
                    aria-label="Deferred loan balance by compounding frequency"
                  >
                    <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-3 text-left">Compounding</th>
                        <th className="px-4 py-3 text-left">Amount Due at Maturity</th>
                        <th className="px-4 py-3 text-left">Total Interest</th>
                        <th className="px-4 py-3 text-left">vs annual</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {freqRows.map((row, i) => {
                        const isCurrentFreq = row.freq === compFreq;
                        const annualRow     = freqRows.find((r) => r.freq === "yearly");
                        const diff          = annualRow ? row.maturity - annualRow.maturity : 0;
                        return (
                          <tr
                            key={row.freq}
                            className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"} ${
                              isCurrentFreq ? "ring-2 ring-inset ring-blue-400" : ""
                            }`}
                          >
                            <td className="px-4 py-3 font-semibold text-slate-800 capitalize">
                              {row.freq}
                              {isCurrentFreq && (
                                <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                  current
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 font-bold text-orange-600">{fmt(row.maturity)}</td>
                            <td className="px-4 py-3 text-amber-600 font-semibold">{fmt(row.interest)}</td>
                            <td className={`px-4 py-3 font-semibold ${
                              row.freq === "yearly" ? "text-slate-400" :
                              diff > 0              ? "text-red-500"     : "text-emerald-600"
                            }`}>
                              {row.freq === "yearly" ? "baseline" : `+${fmt(diff)}`}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  Principal {fmt(principal)} · {rate}% APR · {years} year{years !== 1 ? "s" : ""}.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════════
            SECTION 5 — Educational SEO content cards
            ════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="Understanding deferred payment loans"
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card: What is a deferred loan */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <Timer size={16} className="text-orange-500" />
              What is a deferred payment loan?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              A deferred payment loan (also called a bullet loan, balloon loan, or maturity loan)
              requires <strong>no periodic payments</strong> during the loan term. Instead, the
              borrower repays the entire balance — original principal plus all accrued interest —
              in a single <strong>lump sum at maturity</strong>.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Common examples include student loan grace periods, commercial bridge loans, some
              development finance products, and certain government-backed schemes where repayment
              begins only when the borrower starts earning above a threshold.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              The key risk is the <strong>compounding effect</strong>: with no payments to reduce
              the balance, interest accrues on interest — causing the total owed to grow
              exponentially, especially over longer terms or at higher rates.
            </p>
          </div>

          {/* Card: Deferred vs amortized */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <BarChart2 size={16} className="text-blue-500" />
              Deferred loan vs amortized loan — key differences
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-100">
              <table className="w-full text-xs" aria-label="Deferred vs amortized loan comparison">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-slate-500 font-semibold">Feature</th>
                    <th className="px-3 py-2 text-left text-slate-500 font-semibold">Deferred</th>
                    <th className="px-3 py-2 text-left text-slate-500 font-semibold">Amortized</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-slate-600">
                  {[
                    ["Payments during term", "None — single lump sum at end", "Regular equal payments"],
                    ["Balance trend",        "Grows (interest compounds)",     "Shrinks each payment"],
                    ["Total interest",       "Higher (no repayments offset it)","Lower over same term"],
                    ["Cash flow",            "No payments needed — less stress now","Regular outgoings"],
                    ["Risk",                 "Large lump sum due at maturity",  "Manageable periodic payments"],
                    ["Common use",           "Bridge loans, student deferral",  "Mortgages, car loans"],
                  ].map(([feature, deferred, amortized]) => (
                    <tr key={feature}>
                      <td className="px-3 py-2 font-medium text-slate-700">{feature}</td>
                      <td className="px-3 py-2 text-orange-700">{deferred}</td>
                      <td className="px-3 py-2 text-blue-700">{amortized}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card: When to use a deferred loan */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <DollarSign size={16} className="text-emerald-500" />
              When a deferred payment loan makes sense
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                {
                  title: "Development finance",
                  desc:  "Property developers borrow to build and repay the full balance from sale proceeds — no repayments until the project completes.",
                },
                {
                  title: "Student grace periods",
                  desc:  "Many student loans defer repayment until graduation, allowing borrowers to finish studies without monthly payments — though interest accrues.",
                },
                {
                  title: "Bridging loans",
                  desc:  "Short-term commercial loans (typically 1–24 months) where the borrower expects to refinance or sell an asset to repay the lump sum.",
                },
                {
                  title: "Zero-coupon structured products",
                  desc:  "Investment vehicles that lock in a fixed return at maturity — the investor pays a discounted price now and receives face value later.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <strong className="text-slate-800">{item.title}:</strong>{" "}
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Card: How to manage deferred loan risk */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <Activity size={16} className="text-red-500" />
              Managing the risks of a deferred loan
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                {
                  title: "Know your maturity amount",
                  desc:  "Use this calculator with your exact rate and term to see the precise lump sum due. Never underestimate how much compounding adds.",
                },
                {
                  title: "Plan your repayment source",
                  desc:  "Have a clear plan for the lump sum: sale of asset, refinancing to amortized loan, or accumulated savings.",
                },
                {
                  title: "Consider making voluntary payments",
                  desc:  "Even occasional payments during the deferred period reduce the balance and dramatically cut the final amount owed.",
                },
                {
                  title: "Watch variable rate exposure",
                  desc:  "If your deferred loan has a variable rate, even a small increase compounded over years can add tens of thousands to your final balance.",
                },
                {
                  title: "Compare with amortized alternatives",
                  desc:  "Use our Amortized Loan Calculator to see how total interest compares — deferred loans almost always cost more in the long run.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <ArrowRight size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-800">{item.title}:</strong>{" "}
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 6 — Disclaimer (E-E-A-T + AdSense policy)
            ════════════════════════════════════════════════════════════════ */}
        <aside
          role="note"
          aria-label="Deferred loan calculator disclaimer"
          className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex gap-3 text-xs text-amber-800 leading-relaxed"
        >
          <AlertCircle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Disclaimer:</strong> This calculator computes the theoretical maturity amount
            of a deferred payment loan using the standard compound interest formula consistent with
            methods used by banks, student loan servicers, and commercial lenders worldwide.
            Results are for <strong>educational and informational purposes only</strong> and do not
            constitute financial or legal advice. Actual loan terms, fees, penalty clauses, and
            accrual conventions vary by lender and jurisdiction. Always review your loan agreement
            carefully and consult a qualified financial adviser before entering into any deferred
            payment arrangement.
          </p>
        </aside>
      </div>
    </div>
  );
}