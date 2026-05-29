"use client";

/**
 * AmortizedLoan.tsx — SEO-Optimised v4.0
 * ─────────────────────────────────────────────────────────────────────
 * WHAT'S NEW vs original:
 *  ✅ Full amortization schedule table (Google featured snippet magnet)
 *  ✅ Extra payment comparison table with savings (PAA target)
 *  ✅ Semantic <section> wrappers with crawlable headings + copy
 *  ✅ Inline educational tooltips on every input label
 *  ✅ Loan summary "results card" with all key metrics labelled
 *  ✅ Principal vs interest bar (visual + accessible text)
 *  ✅ Payoff date + interest-rate-impact section
 *  ✅ "How extra payments work" explainer beneath extra-payment field
 *  ✅ Download/print amortization schedule button
 *  ✅ All calculation logic unchanged (uses existing loanCalculator lib)
 *  ✅ Mobile-first, zero layout overflow
 *  ✅ Accessible: aria-labels, role="status", live regions
 * ─────────────────────────────────────────────────────────────────────
 */

import { useState, useMemo, useCallback, useRef } from "react";
import {
  Copy, Check, Lightbulb, ChevronDown, ChevronUp,
  Wallet, Landmark, Percent, TrendingUp, Info,
  Download, Calendar, DollarSign, AlertCircle,
  ArrowRight, BarChart2, Clock, Zap,
} from "lucide-react";
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip,
  ResponsiveContainer, Legend, AreaChart, Area,
  XAxis, YAxis, CartesianGrid,
} from "recharts";

import InputField from "@/components/ui/InputField";
import {
  calculateAdvancedLoan,
  PaymentFrequency,
  CompoundFrequency,
} from "@/lib/loanCalculator";

/* ─── Types ─────────────────────────────────────────────────────────── */
type Currency = "USD" | "INR" | "EUR" | "GBP";

const CURRENCY_META: Record<Currency, { symbol: string; locale: string; label: string }> = {
  USD: { symbol: "$", locale: "en-US", label: "US Dollar" },
  INR: { symbol: "₹", locale: "en-IN", label: "Indian Rupee" },
  EUR: { symbol: "€", locale: "de-DE", label: "Euro" },
  GBP: { symbol: "£", locale: "en-GB", label: "British Pound" },
};

const PIE_COLORS = ["#2563eb", "#ef4444"];
const AREA_PRINCIPAL = "#2563eb";
const AREA_INTEREST  = "#ef444440";

/* ─── Tooltip label component ──────────────────────────────────────── */
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
          className="absolute z-50 left-5 top-0 w-56 bg-slate-900 text-white text-xs rounded-xl p-3 shadow-xl leading-relaxed"
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

/* ─── Stat card ─────────────────────────────────────────────────────── */
function StatCard({
  label, value, sub, color = "text-slate-900", icon,
}: {
  label: string; value: string; sub?: string;
  color?: string; icon?: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col gap-1">
      <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
        {icon}
        {label}
      </div>
      <div className={`text-xl font-black tracking-tight ${color}`}>{value}</div>
      {sub && <div className="text-xs text-slate-400">{sub}</div>}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────── */
export default function AmortizedLoan() {
  /* ── inputs ── */
  const [principal,   setPrincipal]   = useState(500000);
  const [rate,        setRate]        = useState(7);
  const [years,       setYears]       = useState(5);
  const [months,      setMonths]      = useState(0);
  const [payFreq,     setPayFreq]     = useState<PaymentFrequency>("monthly");
  const [compFreq,    setCompFreq]    = useState<CompoundFrequency>("monthly");
  const [extra,       setExtra]       = useState(0);
  const [balloon,     setBalloon]     = useState(0);
  const [deferMo,     setDeferMo]     = useState(0);
  const [accrDefer,   setAccrDefer]   = useState(true);
  const [currency,    setCurrency]    = useState<Currency>("INR");

  /* ── UI state ── */
  const [copied,          setCopied]          = useState(false);
  const [showSchedule,    setShowSchedule]    = useState(false);
  const [showChart,       setShowChart]       = useState(true);
  const [showExtraTable,  setShowExtraTable]  = useState(false);
  const [scheduleRows,    setScheduleRows]    = useState(24); // show 24 rows initially
  const printRef = useRef<HTMLDivElement>(null);

  /* ── formatting ── */
  const cx = CURRENCY_META[currency];

  const fmt = useCallback(
    (n: number, compact = false) => {
      if (compact) {
        const abs = Math.abs(n);
        const sym = cx.symbol;
        if (abs >= 1_000_000_000) return `${sym}${(abs / 1_000_000_000).toFixed(1)}B`;
        if (abs >= 1_000_000)     return `${sym}${(abs / 1_000_000).toFixed(2)}M`;
        if (abs >= 100_000)       return `${sym}${(abs / 1_000).toFixed(1)}K`;
        return new Intl.NumberFormat(cx.locale, {
          style: "currency", currency, maximumFractionDigits: 0,
        }).format(n);
      }
      return new Intl.NumberFormat(cx.locale, {
        style: "currency", currency, maximumFractionDigits: 0,
      }).format(n);
    },
    [currency, cx]
  );

  /* ── calculation ── */
  const result = useMemo(() => {
    if (!principal || (years === 0 && months === 0)) return null;
    try {
      return calculateAdvancedLoan({
        principal,
        annualRate:              rate || 0,
        years:                   (years || 0) + (months || 0) / 12,
        paymentFrequency:        payFreq,
        compoundFrequency:       compFreq,
        extraPayment:            extra || 0,
        balloonPayment:          balloon || 0,
        deferMonths:             deferMo || 0,
        accrueInterestDuringDefer: accrDefer,
        includeSchedule:         true,
        currencySymbol:          cx.symbol,
      });
    } catch {
      return null;
    }
  }, [principal, rate, years, months, payFreq, compFreq, extra, balloon, deferMo, accrDefer, cx]);

  /* baseline without extra payments — for comparison table */
  const baseline = useMemo(() => {
    if (!principal || (years === 0 && months === 0) || extra === 0) return null;
    try {
      return calculateAdvancedLoan({
        principal,
        annualRate:        rate || 0,
        years:             (years || 0) + (months || 0) / 12,
        paymentFrequency:  payFreq,
        compoundFrequency: compFreq,
        extraPayment:      0,
        includeSchedule:   false,
        currencySymbol:    cx.symbol,
      });
    } catch {
      return null;
    }
  }, [principal, rate, years, months, payFreq, compFreq, cx]);

  /* chart data — balance over time (sample every Nth period for perf) */
  const chartData = useMemo(() => {
    if (!result?.amortizationSchedule?.length) return [];
    const sched = result.amortizationSchedule;
    const step = Math.max(1, Math.floor(sched.length / 60));
    return sched
      .filter((_, i) => i % step === 0 || i === sched.length - 1)
      .map((r) => ({
        period:    r.period,
        balance:   Math.round(r.remainingBalance),
        interest:  Math.round(r.interestPaid),
        principal: Math.round(r.principalPaid),
        date:      r.paymentDate,
      }));
  }, [result]);

  /* extra payment comparison rows */
  const extraRows = useMemo(() => {
    if (!principal || !years) return [];
    const amounts = [0, 1000, 2500, 5000, 10000];
    return amounts.map((ep) => {
      try {
        const r = calculateAdvancedLoan({
          principal,
          annualRate:        rate || 0,
          years:             (years || 0) + (months || 0) / 12,
          paymentFrequency:  payFreq,
          compoundFrequency: compFreq,
          extraPayment:      ep,
          includeSchedule:   false,
          currencySymbol:    cx.symbol,
        });
        return {
          extra:    ep,
          payment:  r.periodicPayment + ep,
          interest: r.totalInterest,
          total:    r.totalPayment,
          payoff:   r.payoffDate,
          periods:  r.totalPeriods,
        };
      } catch {
        return null;
      }
    }).filter(Boolean);
  }, [principal, rate, years, months, payFreq, compFreq, cx]);

  /* copy summary */
  const handleCopy = () => {
    if (!result) return;
    const text = [
      `Loan Summary — ${currency}`,
      `Principal: ${fmt(principal)}`,
      `Periodic Payment: ${fmt(result.periodicPayment)}`,
      `Total Interest: ${fmt(result.totalInterest)}`,
      `Total Repayment: ${fmt(result.totalPayment)}`,
      `Payoff Date: ${result.payoffDate}`,
    ].join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  /* print schedule */
  const handlePrint = () => window.print();

  /* ── render ── */
  return (
    <div className="w-full max-w-full overflow-hidden py-4 px-3 sm:px-4">

      {/*
        ════════════════════════════════════════════════════════════════
        SEO SECTION 1 — Crawlable intro copy above calculator
        Google uses this for meta description fallback + content signals
        ════════════════════════════════════════════════════════════════
      */}
      <section
        aria-label="Amortized loan calculator introduction"
        className="max-w-4xl mx-auto mb-8 text-center px-2"
      >
        <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 mb-3">
          Amortized Loan Calculator — Monthly EMI with Full Schedule
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          Calculate your exact <strong>monthly loan payment (EMI)</strong>, see a complete{" "}
          <strong>amortization schedule</strong> showing principal vs interest every month, and
          discover how <strong>extra payments</strong> cut your total interest and shorten your
          loan term. Works for mortgages, car loans, personal loans, student loans, and business
          loans in{" "}
          {Object.values(CURRENCY_META).map((c) => c.label).join(", ")}.
        </p>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {[
            "Free, no login required",
            "Bank-accurate formula",
            "Full amortization table",
            "Extra payment savings",
            "Downloadable schedule",
          ].map((t) => (
            <span
              key={t}
              className="text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full"
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
                      ? "bg-blue-600 text-white shadow"
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
                  Loan Amount (Principal)
                  <InfoTip text="The total amount you are borrowing. For a home loan enter the purchase price minus your down payment." />
                </label>
                <InputField
                  label=""
                  value={principal}
                  onChange={(v) => setPrincipal(Number(v) || 0)}
                  prefix={cx.symbol}
                  type="number"
                />
                <p className="text-xs text-slate-400 mt-1">
                  E.g. {cx.symbol}500,000 for a home loan, {cx.symbol}25,000 for a car loan
                </p>
              </div>

              {/* Term */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Loan Term
                  <InfoTip text="How long you have to repay the loan. Longer terms = lower monthly payment but higher total interest." />
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Years"
                    value={years}
                    onChange={(v) => setYears(Number(v) || 0)}
                    type="number"
                  />
                  <InputField
                    label="Extra Months"
                    value={months}
                    onChange={(v) => setMonths(Number(v) || 0)}
                    type="number"
                  />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Common: 30 yrs (mortgage) · 5 yrs (car) · 10 yrs (student)
                </p>
              </div>

              {/* Interest rate */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Annual Interest Rate (APR %)
                  <InfoTip text="Your Annual Percentage Rate. Find this in your loan offer letter. Even 0.5% difference on a large mortgage saves thousands." />
                </label>
                <InputField
                  label=""
                  value={rate}
                  onChange={(v) => setRate(Number(v) || 0)}
                  type="number"
                />
                <p className="text-xs text-slate-400 mt-1">
                  Average rates 2026: Mortgage ~6.8% · Car loan ~7.1% · Personal ~12%
                </p>
              </div>

              {/* Frequencies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Payment Frequency
                    <InfoTip text="How often you make payments. Bi-weekly payments (26/year) save significant interest vs monthly (12/year)." />
                  </label>
                  <select
                    value={payFreq}
                    onChange={(e) => setPayFreq(e.target.value as PaymentFrequency)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[
                      ["monthly",      "Monthly (12×/year)"],
                      ["biweekly",     "Bi-weekly (26×/year) — saves interest"],
                      ["semimonthly",  "Semi-monthly (24×/year)"],
                      ["weekly",       "Weekly (52×/year)"],
                      ["quarterly",    "Quarterly (4×/year)"],
                      ["semiannually", "Semi-annually (2×/year)"],
                      ["yearly",       "Annual (1×/year)"],
                    ].map(([val, label]) => (
                      <option key={val} value={val}>{label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Compound Frequency
                    <InfoTip text="How often interest is calculated. Most bank loans compound monthly. Daily compounding slightly increases total interest." />
                  </label>
                  <select
                    value={compFreq}
                    onChange={(e) => setCompFreq(e.target.value as CompoundFrequency)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[
                      ["monthly",      "Monthly (standard)"],
                      ["daily",        "Daily"],
                      ["continuous",   "Continuous"],
                      ["quarterly",    "Quarterly"],
                      ["semiannually", "Semi-annually"],
                      ["yearly",       "Annual"],
                      ["weekly",       "Weekly"],
                    ].map(([val, label]) => (
                      <option key={val} value={val}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Extra payment — with educational copy */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Extra Payment per Period <span className="text-blue-600 font-normal">(optional)</span>
                  <InfoTip text="Any amount above your minimum payment. This goes directly to principal, reducing your balance faster and slashing total interest." />
                </label>
                <InputField
                  label=""
                  value={extra}
                  onChange={(v) => setExtra(Number(v) || 0)}
                  prefix={cx.symbol}
                  type="number"
                />
                {/* educational micro-copy — SEO content */}
                <div className="mt-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-xs text-emerald-800 leading-relaxed">
                  <strong>How extra payments work:</strong> Every extra {cx.symbol} you pay reduces your
                  principal balance immediately. Because interest is calculated on the outstanding balance,
                  a lower balance means less interest charged next period — creating a compounding effect
                  that accelerates payoff. Even {cx.symbol}100/month extra on a {cx.symbol}300,000 mortgage
                  saves ~{cx.symbol}30,000 in interest.
                </div>
              </div>

              {/* Advanced: Balloon + Defer */}
              <details className="group">
                <summary className="cursor-pointer text-sm font-semibold text-slate-500 hover:text-blue-600 flex items-center gap-2 select-none">
                  <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
                  Advanced options: balloon payment &amp; deferral
                </summary>
                <div className="mt-4 space-y-5 pt-2 border-t border-slate-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Balloon Payment
                        <InfoTip text="A large lump sum paid at the end of the loan term. Common in commercial and some mortgage products. Reduces regular payments but leaves a large final payment." />
                      </label>
                      <InputField
                        label=""
                        value={balloon}
                        onChange={(v) => setBalloon(Number(v) || 0)}
                        prefix={cx.symbol}
                        type="number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Deferral Period (months)
                        <InfoTip text="Grace period before repayments start. Interest may still accrue during deferral, increasing your balance. Common in student loans." />
                      </label>
                      <InputField
                        label=""
                        value={deferMo}
                        onChange={(v) => setDeferMo(Number(v) || 0)}
                        type="number"
                      />
                    </div>
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer bg-slate-50 border border-slate-200 px-4 py-3 rounded-2xl">
                    <input
                      type="checkbox"
                      checked={accrDefer}
                      onChange={(e) => setAccrDefer(e.target.checked)}
                      className="w-4 h-4 accent-blue-600"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-700">Accrue interest during deferral</p>
                      <p className="text-xs text-slate-500">If unchecked, balance stays fixed during the grace period</p>
                    </div>
                  </label>
                </div>
              </details>
            </div>

            {/* ── SEO CONTENT: Formula box ────────────────────────────── */}
            <div className="bg-slate-900 text-white rounded-3xl p-6">
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                <BarChart2 size={14} className="text-blue-400" />
                Monthly EMI Formula (used by all lenders)
              </h3>
              <div className="bg-slate-800 rounded-xl p-4 font-mono text-xs text-slate-200 leading-relaxed">
                <p>EMI = <span className="text-blue-300">P × r × (1+r)^n</span></p>
                <p className="pl-10">÷ <span className="text-blue-300">[(1+r)^n − 1]</span></p>
                <div className="border-t border-slate-600 mt-3 pt-3 space-y-1 text-slate-400">
                  <p><span className="text-slate-200">P</span> = Principal (loan amount)</p>
                  <p><span className="text-slate-200">r</span> = Monthly rate = APR ÷ 12 ÷ 100</p>
                  <p><span className="text-slate-200">n</span> = Term in months</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Standard actuarial method — consistent with CFPB (US), FCA (UK), ASIC (Australia), FCAC (Canada).
              </p>
            </div>
          </div>

          {/* ── RIGHT: RESULTS ────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-5">

            {!result ? (
              <div
                role="status"
                className="bg-white min-h-[320px] rounded-3xl shadow-sm border border-slate-200
                           flex flex-col items-center justify-center p-8 text-center gap-4"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-blue-300" />
                </div>
                <p className="text-lg font-semibold text-slate-400">
                  Enter your loan details to calculate monthly payments
                </p>
                <p className="text-sm text-slate-400 max-w-xs">
                  Fill in the loan amount, term, and interest rate on the left to see your
                  monthly EMI, total interest, and amortization schedule.
                </p>
              </div>
            ) : (
              <>
                {/* ── Hero payment card ── */}
                <div
                  role="region"
                  aria-label="Loan calculation results"
                  className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-7 md:p-9 shadow-xl relative overflow-hidden"
                >
                  {/* Top actions */}
                  <div className="absolute top-5 right-5 flex gap-2">
                    <button
                      onClick={handleCopy}
                      aria-label="Copy loan summary to clipboard"
                      className="p-2.5 bg-white/20 hover:bg-white/30 backdrop-blur rounded-xl transition-all active:scale-95"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                    <button
                      onClick={handlePrint}
                      aria-label="Print amortization schedule"
                      className="p-2.5 bg-white/20 hover:bg-white/30 backdrop-blur rounded-xl transition-all active:scale-95"
                    >
                      <Download size={16} />
                    </button>
                  </div>

                  {/* Primary metric */}
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-200 mb-1">
                    {payFreq.charAt(0).toUpperCase() + payFreq.slice(1)} Payment
                  </p>
                  <div
                    className="text-5xl sm:text-6xl font-black tracking-tighter mb-1"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {fmt(result.periodicPayment, true)}
                  </div>
                  <p className="text-blue-200 text-sm mb-7">
                    per {payFreq} · {currency} · {rate}% APR
                  </p>

                  {/* Secondary metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/20 text-sm">
                    <div>
                      <p className="text-blue-200 text-xs mb-1">Total Repayment</p>
                      <p className="font-bold">{fmt(result.totalPayment, true)}</p>
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs mb-1">Total Interest</p>
                      <p className="font-bold text-red-200">{fmt(result.totalInterest, true)}</p>
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs mb-1">Payoff Date</p>
                      <p className="font-bold">{result.payoffDate}</p>
                    </div>
                  </div>

                  {/* Interest saved badge (if extra payments) */}
                  {extra > 0 && result.interestSaved > 0 && (
                    <div className="mt-5 bg-emerald-500/20 border border-emerald-400/30 rounded-2xl p-3 text-sm flex items-center gap-3">
                      <Zap size={16} className="text-emerald-300 flex-shrink-0" />
                      <span>
                        Extra payments save you{" "}
                        <strong className="text-white">{fmt(result.interestSaved)}</strong> in interest
                        and finish loan <strong className="text-white">{result.monthsSaved} periods</strong> early.
                      </span>
                    </div>
                  )}
                </div>

                {/* ── Stat cards grid ── */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <StatCard
                    label="Principal"
                    value={fmt(principal, true)}
                    icon={<Landmark size={12} />}
                    color="text-blue-700"
                  />
                  <StatCard
                    label="Total Interest"
                    value={fmt(result.totalInterest, true)}
                    sub={`${result.interestToPrincipalRatio.toFixed(1)}% of principal`}
                    icon={<Percent size={12} />}
                    color="text-red-600"
                  />
                  <StatCard
                    label="Total Payments"
                    value={String(result.totalPeriods)}
                    sub={payFreq}
                    icon={<Calendar size={12} />}
                  />
                  <StatCard
                    label="Effective Rate"
                    value={`${result.effectiveInterestRate.toFixed(2)}%`}
                    sub="APY (compounded)"
                    icon={<TrendingUp size={12} />}
                  />
                </div>

                {/* ── Principal vs Interest visual bar ── */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
                  <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Wallet size={15} className="text-blue-500" />
                    Principal vs Total Interest — where your money goes
                  </h3>

                  {/* Progress bar */}
                  <div
                    className="h-5 rounded-full overflow-hidden flex mb-3"
                    role="img"
                    aria-label={`Principal: ${fmt(principal)}, Interest: ${fmt(result.totalInterest)}`}
                  >
                    <div
                      className="bg-blue-600 transition-all"
                      style={{
                        width: `${(principal / result.totalPayment) * 100}%`,
                      }}
                    />
                    <div className="bg-red-400 flex-1" />
                  </div>

                  <div className="flex justify-between text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
                      Principal {fmt(principal)}
                      ({((principal / result.totalPayment) * 100).toFixed(0)}%)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                      Interest {fmt(result.totalInterest)}
                      ({((result.totalInterest / result.totalPayment) * 100).toFixed(0)}%)
                    </span>
                  </div>

                  {/* Pie chart toggle */}
                  <button
                    onClick={() => setShowChart(!showChart)}
                    className="w-full text-xs text-slate-400 hover:text-blue-500 flex items-center justify-center gap-1 py-1 transition-colors"
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
                              { name: "Principal", value: principal },
                              { name: "Interest",  value: result.totalInterest },
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

                {/* ── Balance-over-time area chart ── */}
                {chartData.length > 0 && (
                  <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
                    <h3 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-2">
                      <TrendingUp size={15} className="text-blue-500" />
                      Loan balance over time
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      How your outstanding balance decreases each period
                    </p>
                    <ResponsiveContainer width="100%" height={180}>
                      <AreaChart data={chartData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="balGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%"  stopColor={AREA_PRINCIPAL} stopOpacity={0.15} />
                            <stop offset="95%" stopColor={AREA_PRINCIPAL} stopOpacity={0.01} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis
                          dataKey="period"
                          tick={{ fontSize: 10, fill: "#94a3b8" }}
                          label={{ value: "Payment #", position: "insideBottom", offset: -2, fontSize: 10, fill: "#94a3b8" }}
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
                                  <p className="text-slate-400 mb-1">Payment #{label}</p>
                                  <p className="font-bold text-blue-600">Balance: {fmt(Number(payload[0]?.value))}</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="balance"
                          stroke={AREA_PRINCIPAL}
                          strokeWidth={2}
                          fill="url(#balGrad)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {/* ── Financial insights ── */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-amber-50 rounded-xl">
                      <Lightbulb className="text-amber-500" size={18} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">Key insights for your loan</h3>
                  </div>

                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li className="flex gap-3">
                      <ArrowRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>
                        You pay <strong className="text-slate-900">{fmt(result.totalInterest)}</strong> in
                        interest — that's{" "}
                        <strong className="text-slate-900">{result.interestToPrincipalRatio.toFixed(1)}%</strong>{" "}
                        extra on top of the principal amount borrowed.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Loan fully paid off by{" "}
                        <strong className="text-slate-900">{result.payoffDate}</strong> — that's{" "}
                        {result.totalYears.toFixed(1)} years of repayments.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Effective annual rate (after compounding) is{" "}
                        <strong className="text-slate-900">{result.effectiveInterestRate.toFixed(2)}%</strong>{" "}
                        vs stated APR of {rate}%.
                      </span>
                    </li>
                    {extra > 0 && result.interestSaved > 0 && (
                      <li className="flex gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
                        <Zap size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-emerald-800">
                          Extra payments of {fmt(extra)}/period save you{" "}
                          <strong>{fmt(result.interestSaved)}</strong> in total interest and
                          eliminate <strong>{result.monthsSaved} payments</strong> — paying off{" "}
                          {Math.round((result.monthsSaved || 0) / 12 * 10) / 10} years earlier.
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 2 — EXTRA PAYMENT COMPARISON TABLE
            SEO: targets "how much does extra payment save on loan" — PAA
            ════════════════════════════════════════════════════════════════ */}
        {result && extraRows.length > 0 && (
          <section
            aria-labelledby="extra-payment-heading"
            className="mt-10 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setShowExtraTable(!showExtraTable)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors border-b"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 bg-emerald-50 rounded-xl">
                  <Zap className="text-emerald-600" size={18} />
                </div>
                <div>
                  <h2
                    id="extra-payment-heading"
                    className="font-bold text-slate-900 text-base"
                  >
                    How extra payments save you money — full comparison table
                  </h2>
                  <p className="text-sm text-slate-500">
                    See exactly how much interest you save with different extra payment amounts
                  </p>
                </div>
              </div>
              {showExtraTable
                ? <ChevronUp size={18} className="text-slate-400 flex-shrink-0" />
                : <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
              }
            </button>

            {showExtraTable && (
              <div className="p-5 md:p-7">
                {/* Educational copy — SEO content */}
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  The table below shows how paying extra each {payFreq} on your{" "}
                  <strong>{fmt(principal)} loan at {rate}% for {years} years</strong> reduces your
                  total interest paid and shortens the loan term. Even a small extra payment makes a
                  significant difference because it reduces the principal immediately, and interest is
                  charged only on the remaining balance.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm" aria-label="Extra payment impact comparison">
                    <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-3 text-left">Extra Payment</th>
                        <th className="px-4 py-3 text-left">Total Payment/Period</th>
                        <th className="px-4 py-3 text-left">Total Interest</th>
                        <th className="px-4 py-3 text-left">Interest Saved</th>
                        <th className="px-4 py-3 text-left">Payoff Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {extraRows.map((row, i) => {
                        if (!row) return null;
                        const base = extraRows[0];
                        const saved = base ? base.interest - row.interest : 0;
                        return (
                          <tr
                            key={i}
                            className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"} ${
                              row.extra === extra ? "ring-2 ring-inset ring-blue-400" : ""
                            }`}
                          >
                            <td className="px-4 py-3 font-bold text-slate-900">
                              {row.extra === 0 ? "No extra" : `+${fmt(row.extra)}`}
                              {row.extra === extra && extra > 0 && (
                                <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                  current
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3">{fmt(row.payment)}</td>
                            <td className="px-4 py-3 text-red-600 font-semibold">{fmt(row.interest)}</td>
                            <td className={`px-4 py-3 font-bold ${saved > 0 ? "text-emerald-600" : "text-slate-400"}`}>
                              {saved > 0 ? `save ${fmt(saved)}` : "—"}
                            </td>
                            <td className="px-4 py-3 text-slate-600">{row.payoff}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-400 mt-3">
                  All figures assume {rate}% APR, {payFreq} payments, {compFreq} compounding.
                  Actual savings may vary with lender prepayment terms.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════════
            SECTION 3 — FULL AMORTIZATION SCHEDULE
            SEO: "amortization schedule" = top featured snippet target
            Google pulls month-by-month tables directly into rich results
            ════════════════════════════════════════════════════════════════ */}
        {result && result.amortizationSchedule?.length > 0 && (
          <section
            aria-labelledby="schedule-heading"
            className="mt-6 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            ref={printRef}
          >
            <button
              onClick={() => setShowSchedule(!showSchedule)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors border-b"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 bg-blue-50 rounded-xl">
                  <BarChart2 className="text-blue-600" size={18} />
                </div>
                <div>
                  <h2
                    id="schedule-heading"
                    className="font-bold text-slate-900 text-base"
                  >
                    Full amortization schedule — month-by-month breakdown
                  </h2>
                  <p className="text-sm text-slate-500">
                    {result.amortizationSchedule.length} payments · Principal &amp; interest split for each period
                  </p>
                </div>
              </div>
              {showSchedule
                ? <ChevronUp size={18} className="text-slate-400 flex-shrink-0" />
                : <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
              }
            </button>

            {showSchedule && (
              <div className="p-5 md:p-7">
                {/* SEO editorial copy */}
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  This amortization schedule shows every payment you will make on your{" "}
                  <strong>{fmt(principal)} loan</strong>, broken down into principal (how much reduces
                  your balance) and interest (the lender's cost). Notice how in early periods most of
                  your payment goes to interest — this is why extra payments in the first years of a
                  loan save the most money.
                </p>

                {/* Download button */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 text-sm text-blue-600 border border-blue-200 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors font-semibold"
                  >
                    <Download size={14} />
                    Print / Save as PDF
                  </button>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table
                    className="w-full text-xs sm:text-sm"
                    aria-label={`Amortization schedule for ${fmt(principal)} loan`}
                  >
                    <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider sticky top-0">
                      <tr>
                        <th className="px-3 py-3 text-left">#</th>
                        <th className="px-3 py-3 text-left">Date</th>
                        <th className="px-3 py-3 text-right">Payment</th>
                        <th className="px-3 py-3 text-right">Principal</th>
                        <th className="px-3 py-3 text-right">Interest</th>
                        <th className="px-3 py-3 text-right">Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {result.amortizationSchedule.slice(0, scheduleRows).map((row, i) => {
                        const payment = row.principalPaid + row.interestPaid;
                        return (
                          <tr
                            key={row.period}
                            className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}
                          >
                            <td className="px-3 py-2.5 text-slate-400 font-mono">{row.period}</td>
                            <td className="px-3 py-2.5 text-slate-500">{row.paymentDate}</td>
                            <td className="px-3 py-2.5 text-right font-semibold text-slate-900">
                              {fmt(payment)}
                            </td>
                            <td className="px-3 py-2.5 text-right font-semibold text-blue-600">
                              {fmt(row.principalPaid)}
                            </td>
                            <td className="px-3 py-2.5 text-right text-red-500">
                              {fmt(row.interestPaid)}
                            </td>
                            <td className="px-3 py-2.5 text-right text-slate-700">
                              {fmt(row.remainingBalance)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>

                    {/* Totals footer */}
                    <tfoot className="bg-slate-100 font-bold text-sm border-t-2 border-slate-300">
                      <tr>
                        <td colSpan={2} className="px-3 py-3 text-slate-700">Totals</td>
                        <td className="px-3 py-3 text-right text-slate-900">{fmt(result.totalPayment)}</td>
                        <td className="px-3 py-3 text-right text-blue-700">{fmt(principal)}</td>
                        <td className="px-3 py-3 text-right text-red-600">{fmt(result.totalInterest)}</td>
                        <td className="px-3 py-3 text-right text-slate-400">—</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                {/* Load more / show all */}
                {scheduleRows < result.amortizationSchedule.length && (
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => setScheduleRows((r) => r + 60)}
                      className="text-sm text-blue-600 border border-blue-200 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors font-semibold"
                    >
                      Show next 60 payments
                    </button>
                    <button
                      onClick={() => setScheduleRows(result.amortizationSchedule.length)}
                      className="text-sm text-slate-600 border border-slate-200 hover:bg-slate-50 px-4 py-2 rounded-xl transition-colors"
                    >
                      Show all {result.amortizationSchedule.length} payments
                    </button>
                  </div>
                )}

                <p className="text-xs text-slate-400 mt-3">
                  Schedule uses {payFreq} payments, {rate}% APR, {compFreq} compounding.
                  Dates start from today. Figures rounded to nearest whole number.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════════
            SECTION 4 — Educational SEO content below the calculator
            This is crawlable text that helps AdSense + ranking
            ════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="Understanding your loan amortization results"
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card: What is amortization */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <Clock size={16} className="text-blue-500" />
              What is loan amortization?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Amortization is the process of repaying a loan through equal periodic payments over
              its full term. Each payment covers two parts: <strong>interest</strong> (the lender's
              fee for lending you money) and <strong>principal</strong> (reducing the balance you
              owe).
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              In the early months of a loan, most of each payment goes to interest because your
              balance is highest. As the balance falls, the interest portion shrinks and the
              principal portion grows — this shift is the amortization curve.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              This is why making extra payments early in a loan saves the most interest — you
              reduce the balance before the bank charges interest on it.
            </p>
          </div>

          {/* Card: How to reduce total interest */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <DollarSign size={16} className="text-emerald-500" />
              How to pay less interest on your loan
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                {
                  title: "Make extra payments",
                  desc: "Even small extra amounts reduce principal immediately and compound into big savings over years.",
                },
                {
                  title: "Switch to bi-weekly payments",
                  desc: "26 half-payments/year = 13 full payments vs 12 monthly. One extra payment/year goes entirely to principal.",
                },
                {
                  title: "Refinance to a lower rate",
                  desc: "Even 0.5% lower on a large loan saves thousands. Use our Refinance Calculator to find your break-even point.",
                },
                {
                  title: "Shorten your loan term",
                  desc: "A 15-year mortgage at 6.5% vs 30-year at 6.8% saves over $150,000 on a $400,000 home.",
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

          {/* Card: Interest rate impact table */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <Percent size={16} className="text-red-500" />
              How interest rate affects monthly payment
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              {fmt(result?.totalPayment ? principal : 300000)} loan · 30-year term
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs" aria-label="Interest rate comparison table">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-2 text-slate-500 font-semibold">Rate</th>
                    <th className="text-right py-2 text-slate-500 font-semibold">Monthly payment</th>
                    <th className="text-right py-2 text-slate-500 font-semibold">Total interest</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-slate-700">
                  {[5, 6, 6.5, 7, 7.5, 8, 9].map((r) => {
                    const P = result ? principal : 300000;
                    const n = 360;
                    const mr = r / 100 / 12;
                    const mp = P * mr * Math.pow(1 + mr, n) / (Math.pow(1 + mr, n) - 1);
                    const ti = mp * n - P;
                    return (
                      <tr key={r} className={r === rate ? "bg-blue-50 font-bold" : ""}>
                        <td className="py-2">{r}%{r === rate ? " ← yours" : ""}</td>
                        <td className="py-2 text-right text-blue-700">{fmt(mp)}</td>
                        <td className="py-2 text-right text-red-500">{fmt(ti)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card: Loan type guide */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <Landmark size={16} className="text-purple-500" />
              Common loan terms by type — quick reference
            </h3>
            <div className="space-y-3 text-sm">
              {[
                {
                  type:    "Home Mortgage",
                  term:    "15 or 30 years",
                  rate:    "6–7.5% (2026 avg)",
                  typical: cx.symbol + "300K–500K",
                  color:   "bg-blue-50 text-blue-700",
                },
                {
                  type:    "Auto Loan",
                  term:    "36–84 months",
                  rate:    "6.5–9% (2026)",
                  typical: cx.symbol + "25K–50K",
                  color:   "bg-emerald-50 text-emerald-700",
                },
                {
                  type:    "Personal Loan",
                  term:    "12–60 months",
                  rate:    "10–20%",
                  typical: cx.symbol + "5K–50K",
                  color:   "bg-amber-50 text-amber-700",
                },
                {
                  type:    "Student Loan",
                  term:    "10–25 years",
                  rate:    "5–8% federal",
                  typical: cx.symbol + "30K–100K",
                  color:   "bg-purple-50 text-purple-700",
                },
                {
                  type:    "Business Loan",
                  term:    "1–10 years",
                  rate:    "6–12% (SBA)",
                  typical: cx.symbol + "50K+",
                  color:   "bg-slate-100 text-slate-700",
                },
              ].map((item) => (
                <div key={item.type} className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-lg w-28 text-center flex-shrink-0 ${item.color}`}>
                    {item.type}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-700 truncate">
                      <strong>{item.term}</strong> · {item.rate}
                    </p>
                    <p className="text-slate-400 text-xs">Typical: {item.typical}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 5 — Disclaimer (E-E-A-T + AdSense policy)
            ════════════════════════════════════════════════════════════════ */}
        <aside
          role="note"
          aria-label="Calculator disclaimer"
          className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex gap-3 text-xs text-amber-800 leading-relaxed"
        >
          <AlertCircle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Disclaimer:</strong> This calculator uses the standard actuarial amortization
            formula consistent with methods used by US CFPB, UK FCA, Australian ASIC, and Canadian
            FCAC. Results are for <strong>informational and educational purposes only</strong> and do
            not constitute financial advice. Actual loan payments may differ based on lender fees,
            insurance requirements, rounding conventions, and prepayment policies. Always verify
            figures with your lender before signing any loan agreement.
          </p>
        </aside>
      </div>

      {/* ── Print styles ── */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #amortization-print, #amortization-print * { visibility: visible; }
          #amortization-print { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>
    </div>
  );
}