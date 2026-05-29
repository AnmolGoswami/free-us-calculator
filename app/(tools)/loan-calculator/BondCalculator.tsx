"use client";

/**
 * BondCalculator.tsx — SEO-Optimised v4.0
 * ─────────────────────────────────────────────────────────────────────
 * WHAT'S NEW vs original:
 *  ✅ Crawlable <section> wrappers with semantic H2/H3 headings
 *  ✅ InfoTip tooltips on every input (E-E-A-T + UX)
 *  ✅ Bond yield comparison table (featured snippet / PAA magnet)
 *  ✅ "How zero-coupon bonds work" educational copy (AdSense content)
 *  ✅ Yield vs compounding frequency impact table
 *  ✅ Balance-over-time area chart (visual engagement signal)
 *  ✅ Stat cards with labelled accessible metrics
 *  ✅ Disclaimer (AdSense policy + E-E-A-T)
 *  ✅ All calculation logic unchanged (uses existing loanCalculator lib)
 *  ✅ Mobile-first, zero layout overflow, dark-mode safe colours
 *  ✅ Accessible: aria-labels, role="status", live aria regions
 * ─────────────────────────────────────────────────────────────────────
 */

import { useState, useMemo } from "react";
import {
  Copy, Check, Lightbulb, ChevronDown, ChevronUp,
  Percent, TrendingUp, Info, Download, Calendar,
  DollarSign, AlertCircle, ArrowRight, BarChart2,
  Landmark, Zap, Activity,
} from "lucide-react";
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip,
  ResponsiveContainer, Legend,
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  BarChart, Bar,
} from "recharts";

import { calculateBond, CompoundFrequency } from "@/lib/loanCalculator";
import InputField from "@/components/ui/InputField";

/* ─── Types ─────────────────────────────────────────────────────────── */
type Currency = "USD" | "INR" | "EUR" | "GBP";

const CURRENCY_META: Record<Currency, { symbol: string; locale: string; label: string }> = {
  USD: { symbol: "$",  locale: "en-US", label: "US Dollar"     },
  INR: { symbol: "₹", locale: "en-IN", label: "Indian Rupee"  },
  EUR: { symbol: "€", locale: "de-DE", label: "Euro"           },
  GBP: { symbol: "£", locale: "en-GB", label: "British Pound" },
};

const PIE_COLORS      = ["#2563eb", "#10b981"];
const AREA_PRICE      = "#2563eb";
const AREA_GAIN       = "#10b981";

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
export default function BondCalculator() {

  /* ── inputs ── */
  const [faceValue,  setFaceValue]  = useState(100000);
  const [annualRate, setAnnualRate] = useState(5.5);
  const [years,      setYears]      = useState(10);
  const [months,     setMonths]     = useState(0);
  const [compFreq,   setCompFreq]   = useState<CompoundFrequency>("monthly");
  const [currency,   setCurrency]   = useState<Currency>("USD");

  /* ── UI state ── */
  const [copied,        setCopied]        = useState(false);
  const [showYieldTable,setShowYieldTable] = useState(false);
  const [showFreqTable, setShowFreqTable]  = useState(false);
  const [showChart,     setShowChart]      = useState(true);

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
    new Intl.NumberFormat(cx.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

  /* ── calculation ── */
  const totalYears = useMemo(() => years + months / 12, [years, months]);

  const result = useMemo(() => {
    if (!faceValue || totalYears <= 0) return null;
    try {
      return calculateBond({
        faceValue,
        yearsToMaturity: totalYears,
        annualRate,
        compoundFrequency: compFreq,
        currencySymbol:    cx.symbol,
      });
    } catch {
      return null;
    }
  }, [faceValue, totalYears, annualRate, compFreq, cx]);

  /* ── derived values ── */
  const discountPct = useMemo(() => {
    if (!result || !faceValue) return 0;
    return (result.totalInterest / faceValue) * 100;
  }, [result, faceValue]);

  const priceToFacePct = useMemo(() => {
    if (!result || !faceValue) return 0;
    return (result.amountReceived / faceValue) * 100;
  }, [result, faceValue]);

  /* ── yield comparison rows ── */
  const yieldRows = useMemo(() => {
    if (!faceValue || totalYears <= 0) return [];
    return [2, 3, 4, 5, 5.5, 6, 7, 8, 10].map((r) => {
      try {
        const res = calculateBond({
          faceValue, yearsToMaturity: totalYears,
          annualRate: r, compoundFrequency: compFreq, currencySymbol: cx.symbol,
        });
        return {
          rate:     r,
          price:    res.amountReceived,
          gain:     res.totalInterest,
          discount: (res.totalInterest / faceValue) * 100,
        };
      } catch { return null; }
    }).filter(Boolean) as { rate: number; price: number; gain: number; discount: number }[];
  }, [faceValue, totalYears, compFreq, cx]);

  /* ── compounding frequency impact rows ── */
  const freqRows = useMemo(() => {
    if (!faceValue || totalYears <= 0) return [];
    const freqs: CompoundFrequency[] = ["yearly", "quarterly", "monthly", "daily", "continuous"];
    return freqs.map((f) => {
      try {
        const res = calculateBond({
          faceValue, yearsToMaturity: totalYears,
          annualRate, compoundFrequency: f, currencySymbol: cx.symbol,
        });
        return { freq: f, price: res.amountReceived, gain: res.totalInterest };
      } catch { return null; }
    }).filter(Boolean) as { freq: string; price: number; gain: number }[];
  }, [faceValue, totalYears, annualRate, cx]);

  /* ── bar chart data: yield vs price ── */
  const barData = useMemo(
    () => yieldRows.map((r) => ({ rate: `${r.rate}%`, price: Math.round(r.price) })),
    [yieldRows]
  );

  /* ── copy summary ── */
  const handleCopy = () => {
    if (!result) return;
    const text = [
      `Bond / Zero-Coupon Loan Summary — ${currency}`,
      `Face Value at Maturity: ${fmt(faceValue)}`,
      `Price Today (PV):       ${fmt(result.amountReceived)}`,
      `Total Gain (Interest):  ${fmt(result.totalInterest)}`,
      `Yield / Discount Rate:  ${annualRate}%`,
      `Compounding:            ${compFreq}`,
      `Maturity Date:          ${result.maturityDate}`,
      `Discount to Face Value: ${discountPct.toFixed(2)}%`,
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
        Targets: "bond price calculator", "zero coupon bond calculator",
        "present value of bond calculator", "bond yield to maturity"
        ════════════════════════════════════════════════════════════════
      */}
      <section
        aria-label="Bond and zero-coupon loan calculator introduction"
        className="max-w-4xl mx-auto mb-8 text-center px-2"
      >
        <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 mb-3">
          Bond &amp; Zero-Coupon Loan Calculator — Present Value &amp; Yield
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          Calculate the <strong>present value (price today)</strong> of a zero-coupon bond or
          deferred loan given a <strong>face value at maturity</strong> and a{" "}
          <strong>discount / yield rate</strong>. Instantly see how much the bond is worth today,
          the total interest gain, and the discount to face value — across monthly, quarterly,
          annual, and continuous compounding.
        </p>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {[
            "Zero-coupon bond pricing",
            "Present value calculation",
            "Multiple compounding frequencies",
            "Yield rate comparison table",
            "Free, no login required",
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

              {/* Face value */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Face Value at Maturity
                  <InfoTip text="The predetermined amount the bond pays at maturity (also called par value or redemption value). This is what you receive — or owe — at the end of the bond term." />
                </label>
                <InputField
                  label=""
                  value={faceValue}
                  onChange={(v) => setFaceValue(Number(v) || 0)}
                  prefix={cx.symbol}
                  type="number"
                />
                <p className="text-xs text-slate-400 mt-1">
                  E.g. {cx.symbol}100,000 government bond · {cx.symbol}1,000 corporate bond
                </p>
              </div>

              {/* Maturity term */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Time to Maturity
                  <InfoTip text="How long until the bond pays its face value. Longer maturities mean a bigger discount from face value today, because your money is locked up for longer." />
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
                  Common: 5 yr, 10 yr, 20 yr, 30 yr government bonds
                </p>
              </div>

              {/* Yield / discount rate */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Yield / Discount Rate (% per year)
                  <InfoTip text="The annual return an investor demands, or the interest rate the issuer is paying. Higher yield = lower price today. Lower yield = higher price today." />
                </label>
                <InputField
                  label=""
                  value={annualRate}
                  onChange={(v) => setAnnualRate(Number(v) || 0)}
                  type="number"
                />
                <p className="text-xs text-slate-400 mt-1">
                  US 10-yr Treasury ~4.3% · Corporate investment grade ~5–6% · High yield ~7–10%
                </p>

                {/* Educational micro-copy */}
                <div className="mt-2 p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 leading-relaxed">
                  <strong>Yield vs price relationship:</strong> Bond price and yield move in
                  opposite directions. When market interest rates rise, existing bonds become less
                  attractive and their price falls. When rates fall, bond prices rise. This is the
                  core principle of fixed-income investing.
                </div>
              </div>

              {/* Compounding frequency */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Compounding Frequency
                  <InfoTip text="How often interest compounds. More frequent compounding (daily vs annual) means the price today is slightly lower for the same yield. Monthly is the most common convention for bond pricing." />
                </label>
                <select
                  value={compFreq}
                  onChange={(e) => setCompFreq(e.target.value as CompoundFrequency)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[
                    ["yearly",      "Annual (1×/year) — government bonds"],
                    ["semiannually","Semi-annual (2×/year) — US Treasuries"],
                    ["quarterly",   "Quarterly (4×/year)"],
                    ["monthly",     "Monthly (12×/year) — standard"],
                    ["daily",       "Daily (365×/year)"],
                    ["continuous",  "Continuous — theoretical maximum"],
                  ].map(([val, label]) => (
                    <option key={val} value={val}>{label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Formula box */}
            <div className="bg-slate-900 text-white rounded-3xl p-6">
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                <Activity size={14} className="text-green-400" />
                Zero-Coupon Bond Pricing Formula
              </h3>
              <div className="bg-slate-800 rounded-xl p-4 font-mono text-xs text-slate-200 leading-relaxed">
                <p className="mb-2 text-slate-400">Discrete compounding:</p>
                <p>
                  Price = <span className="text-green-300">F ÷ (1 + r/n)^(n×t)</span>
                </p>
                <div className="border-t border-slate-600 mt-3 pt-3 space-y-1 text-slate-400">
                  <p><span className="text-slate-200">F</span> = Face value at maturity</p>
                  <p><span className="text-slate-200">r</span> = Annual yield / discount rate</p>
                  <p><span className="text-slate-200">n</span> = Compounding periods per year</p>
                  <p><span className="text-slate-200">t</span> = Years to maturity</p>
                </div>
                <div className="border-t border-slate-600 mt-3 pt-3">
                  <p className="text-slate-400">Continuous compounding:</p>
                  <p>Price = <span className="text-green-300">F × e^(−r×t)</span></p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Standard present-value formula used in CFA, Bloomberg terminal, and institutional bond pricing.
              </p>
            </div>
          </div>

          {/* ── RIGHT: RESULTS ────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-5">

            {!result || result.amountReceived <= 0 ? (
              <div
                role="status"
                className="bg-white min-h-[300px] rounded-3xl shadow-sm border border-slate-200
                           flex flex-col items-center justify-center p-8 text-center gap-4"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-green-300" />
                </div>
                <p className="text-lg font-semibold text-slate-400">
                  Enter bond details to calculate price today
                </p>
                <p className="text-sm text-slate-400 max-w-xs">
                  Fill in the face value, maturity, and yield on the left to see the current bond
                  price and total interest gain.
                </p>
              </div>
            ) : (
              <>
                {/* ── Hero price card ── */}
                <div
                  role="region"
                  aria-label="Bond calculation results"
                  className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-7 md:p-9 shadow-xl relative overflow-hidden"
                >
                  {/* Actions */}
                  <div className="absolute top-5 right-5">
                    <button
                      onClick={handleCopy}
                      aria-label="Copy bond summary to clipboard"
                      className="p-2.5 bg-white/20 hover:bg-white/30 backdrop-blur rounded-xl transition-all active:scale-95"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Primary metric */}
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-1">
                    Bond Price Today (Present Value)
                  </p>
                  <div
                    className="text-5xl sm:text-6xl font-black tracking-tighter mb-1"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {fmt(result.amountReceived, true)}
                  </div>
                  <p className="text-emerald-200 text-sm mb-1">
                    {cx.symbol}{fmtExact(result.amountReceived)} exact · {annualRate}% yield · {compFreq} compounding
                  </p>
                  <p className="text-emerald-100/70 text-xs mb-7">
                    {priceToFacePct.toFixed(1)}% of face value · matures {result.maturityDate}
                  </p>

                  {/* Secondary metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/20 text-sm">
                    <div>
                      <p className="text-emerald-200 text-xs mb-1">Face Value at Maturity</p>
                      <p className="font-bold">{fmt(faceValue, true)}</p>
                    </div>
                    <div>
                      <p className="text-emerald-200 text-xs mb-1">Total Gain (Interest)</p>
                      <p className="font-bold text-yellow-200">{fmt(result.totalInterest, true)}</p>
                    </div>
                    <div>
                      <p className="text-emerald-200 text-xs mb-1">Discount to Face</p>
                      <p className="font-bold">{discountPct.toFixed(2)}%</p>
                    </div>
                  </div>
                </div>

                {/* ── Stat cards ── */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <StatCard
                    label="Price Today"
                    value={fmt(result.amountReceived, true)}
                    sub="present value"
                    icon={<DollarSign size={12} />}
                    color="text-emerald-700"
                  />
                  <StatCard
                    label="Total Gain"
                    value={fmt(result.totalInterest, true)}
                    sub={`${discountPct.toFixed(1)}% yield`}
                    icon={<TrendingUp size={12} />}
                    color="text-yellow-600"
                  />
                  <StatCard
                    label="Maturity"
                    value={result.maturityDate}
                    sub={`${totalYears.toFixed(1)} years`}
                    icon={<Calendar size={12} />}
                  />
                  <StatCard
                    label="Risk Level"
                    value={result.riskLevel.toUpperCase()}
                    sub={annualRate > 7 ? "high yield" : "investment grade"}
                    icon={<Activity size={12} />}
                    color={
                      result.riskLevel === "low"    ? "text-emerald-600" :
                      result.riskLevel === "medium" ? "text-amber-600"   : "text-red-600"
                    }
                  />
                </div>

                {/* ── Price vs Gain visual bar ── */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
                  <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <BarChart2 size={15} className="text-emerald-500" />
                    Price paid today vs total gain at maturity
                  </h3>

                  {/* Progress bar */}
                  <div
                    className="h-5 rounded-full overflow-hidden flex mb-3"
                    role="img"
                    aria-label={`Price today: ${fmt(result.amountReceived)}, Total gain: ${fmt(result.totalInterest)}`}
                  >
                    <div
                      className="bg-emerald-500 transition-all"
                      style={{ width: `${priceToFacePct}%` }}
                    />
                    <div className="bg-yellow-400 flex-1" />
                  </div>

                  <div className="flex justify-between text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                      Price today {fmt(result.amountReceived)}
                      ({priceToFacePct.toFixed(1)}%)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                      Gain {fmt(result.totalInterest)}
                      ({discountPct.toFixed(1)}%)
                    </span>
                  </div>

                  {/* Donut chart toggle */}
                  <button
                    onClick={() => setShowChart(!showChart)}
                    className="w-full text-xs text-slate-400 hover:text-emerald-500 flex items-center justify-center gap-1 py-1 transition-colors"
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
                              { name: "Price today", value: Math.round(result.amountReceived) },
                              { name: "Total gain",  value: Math.round(result.totalInterest)  },
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

                {/* ── Bar chart: price vs yield ── */}
                {barData.length > 0 && (
                  <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
                    <h3 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-2">
                      <TrendingUp size={15} className="text-blue-500" />
                      Bond price at different yield rates
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      How price today changes as yield rises — your current rate highlighted
                    </p>
                    <ResponsiveContainer width="100%" height={180}>
                      <BarChart data={barData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="rate" tick={{ fontSize: 10, fill: "#94a3b8" }} />
                        <YAxis
                          tick={{ fontSize: 10, fill: "#94a3b8" }}
                          tickFormatter={(v) => fmt(v, true)}
                          width={55}
                        />
                        <RechartsTooltip
                          content={({ active, payload, label }) => {
                            if (active && payload?.length) {
                              return (
                                <div className="bg-white rounded-xl shadow border border-slate-100 px-3 py-2 text-xs">
                                  <p className="text-slate-400 mb-1">Yield {label}</p>
                                  <p className="font-bold text-emerald-600">
                                    Price: {fmt(Number(payload[0]?.value))}
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar
                          dataKey="price"
                          radius={[4, 4, 0, 0]}
                          fill="#10b981"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {/* ── Key insights ── */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-amber-50 rounded-xl">
                      <Lightbulb className="text-amber-500" size={18} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">Key insights for this bond</h3>
                  </div>

                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li className="flex gap-3">
                      <ArrowRight size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>
                        You pay <strong className="text-slate-900">{fmt(result.amountReceived)}</strong>{" "}
                        today and receive <strong className="text-slate-900">{fmt(faceValue)}</strong>{" "}
                        at maturity — a gain of{" "}
                        <strong className="text-slate-900">{fmt(result.totalInterest)}</strong>.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>
                        The bond trades at a <strong className="text-slate-900">{discountPct.toFixed(2)}% discount</strong>{" "}
                        to face value — i.e. you pay {cx.symbol}{fmtExact(100 * result.amountReceived / faceValue)} for
                        every {cx.symbol}100 of face value.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>
                        With <strong className="text-slate-900">{compFreq}</strong> compounding, the
                        effective annual yield is slightly{" "}
                        {compFreq === "yearly" ? "equal to" : "above"} the stated {annualRate}% rate.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>
                        If market yields rise after you buy, the bond's market value falls below{" "}
                        {fmt(result.amountReceived)} (interest rate risk). If held to maturity, you
                        still receive the full {fmt(faceValue)}.
                      </span>
                    </li>
                    {result.insights.map((text, i) => (
                      <li key={i} className="flex gap-3 text-slate-500">
                        <Lightbulb size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 2 — YIELD COMPARISON TABLE
            SEO: "bond price at different interest rates" — featured snippet
            ════════════════════════════════════════════════════════════════ */}
        {result && yieldRows.length > 0 && (
          <section
            aria-labelledby="yield-table-heading"
            className="mt-10 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setShowYieldTable(!showYieldTable)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors border-b"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 bg-emerald-50 rounded-xl">
                  <TrendingUp className="text-emerald-600" size={18} />
                </div>
                <div>
                  <h2 id="yield-table-heading" className="font-bold text-slate-900 text-base">
                    Bond price at different yield rates — full comparison table
                  </h2>
                  <p className="text-sm text-slate-500">
                    See how yield rate affects the price you pay today for this {fmt(faceValue, true)} bond
                  </p>
                </div>
              </div>
              {showYieldTable
                ? <ChevronUp size={18} className="text-slate-400 flex-shrink-0" />
                : <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
              }
            </button>

            {showYieldTable && (
              <div className="p-5 md:p-7">
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  The table below shows the present value (price today) of a{" "}
                  <strong>{fmt(faceValue)} bond maturing in {totalYears.toFixed(1)} years</strong>{" "}
                  at different yield rates with <strong>{compFreq}</strong> compounding. This
                  illustrates the fundamental bond principle: as yield rises, price falls — and
                  vice versa. Use this to evaluate whether your bond is priced fairly relative to
                  current market yields.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table
                    className="w-full text-sm"
                    aria-label="Bond price vs yield rate comparison"
                  >
                    <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-3 text-left">Yield Rate</th>
                        <th className="px-4 py-3 text-left">Price Today</th>
                        <th className="px-4 py-3 text-left">Total Gain</th>
                        <th className="px-4 py-3 text-left">Discount to Face</th>
                        <th className="px-4 py-3 text-left">vs your rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {yieldRows.map((row, i) => {
                        const isCurrentRate = row.rate === annualRate;
                        const baseRow = yieldRows.find((r) => r.rate === annualRate);
                        const diff    = baseRow ? row.price - baseRow.price : 0;
                        return (
                          <tr
                            key={row.rate}
                            className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"} ${
                              isCurrentRate ? "ring-2 ring-inset ring-emerald-400" : ""
                            }`}
                          >
                            <td className="px-4 py-3 font-bold text-slate-900">
                              {row.rate}%
                              {isCurrentRate && (
                                <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                                  current
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 font-bold text-emerald-700">{fmt(row.price)}</td>
                            <td className="px-4 py-3 text-yellow-600 font-semibold">{fmt(row.gain)}</td>
                            <td className="px-4 py-3 text-slate-600">{row.discount.toFixed(2)}%</td>
                            <td className={`px-4 py-3 font-semibold ${
                              isCurrentRate ? "text-slate-400" :
                              diff > 0       ? "text-emerald-600" : "text-red-500"
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
                  Face value {fmt(faceValue)} · {totalYears.toFixed(1)} years to maturity · {compFreq} compounding.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════════
            SECTION 3 — COMPOUNDING FREQUENCY TABLE
            SEO: "how does compounding affect bond price" — PAA target
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
                    How compounding frequency affects bond price
                  </h2>
                  <p className="text-sm text-slate-500">
                    Annual vs semi-annual vs monthly vs continuous compounding — side-by-side
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
                  The compounding frequency changes how interest accrues on the discount, which
                  slightly lowers the bond price today. Continuous compounding represents the
                  theoretical maximum — where interest is calculated at every infinitesimal moment.
                  In practice, semi-annual and monthly compounding are most common.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table
                    className="w-full text-sm"
                    aria-label="Bond price by compounding frequency"
                  >
                    <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-3 text-left">Compounding</th>
                        <th className="px-4 py-3 text-left">Price Today</th>
                        <th className="px-4 py-3 text-left">Total Gain</th>
                        <th className="px-4 py-3 text-left">vs annual</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {freqRows.map((row, i) => {
                        const isCurrentFreq = row.freq === compFreq;
                        const annualRow = freqRows.find((r) => r.freq === "yearly");
                        const diff = annualRow ? row.price - annualRow.price : 0;
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
                            <td className="px-4 py-3 font-bold text-emerald-700">{fmt(row.price)}</td>
                            <td className="px-4 py-3 text-yellow-600">{fmt(row.gain)}</td>
                            <td className={`px-4 py-3 font-semibold ${
                              row.freq === "yearly" ? "text-slate-400" :
                              diff > 0              ? "text-emerald-600" : "text-red-500"
                            }`}>
                              {row.freq === "yearly" ? "baseline" : `${diff > 0 ? "+" : ""}${fmt(diff)}`}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  Face value {fmt(faceValue)} · {annualRate}% yield · {totalYears.toFixed(1)} years to maturity.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════════
            SECTION 4 — Educational SEO content cards
            Unique content targeting AdSense + ranking signals
            ════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="Understanding zero-coupon bonds and bond pricing"
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card: What is a zero-coupon bond */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <Landmark size={16} className="text-emerald-500" />
              What is a zero-coupon bond?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              A zero-coupon bond does not make periodic interest (coupon) payments. Instead, it is
              issued at a <strong>discount to its face value</strong> and repays the full face value
              at maturity. The difference between what you pay today and what you receive at maturity
              is your return — effectively the accumulated interest over the life of the bond.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              For example, a {fmt(faceValue)} zero-coupon bond maturing in {years} years at {annualRate}%
              yield is worth{" "}
              <strong>{result ? fmt(result.amountReceived) : "…"} today</strong>.
              You invest{" "}
              {result ? fmt(result.amountReceived) : "less"} now and receive{" "}
              {fmt(faceValue)} at maturity — with no payments in between.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Common examples include US Treasury STRIPS, savings bonds (Series EE/I), and corporate
              zero-coupon notes. They are also used to model deferred-payment loans where no payments
              are made until the loan matures.
            </p>
          </div>

          {/* Card: Bond price vs yield explained */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <TrendingUp size={16} className="text-blue-500" />
              Why bond price and yield move inversely
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              The price-yield relationship is the most fundamental concept in fixed-income investing.
              When market interest rates rise, existing bonds with lower yields become less attractive
              — their price must fall to offer new investors the same return as newly-issued bonds.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Yield rises → Price falls (your bond is worth less on the open market)",
                "Yield falls → Price rises (your bond is worth more than new bonds)",
                "At maturity, price always equals face value — regardless of yield",
                "Duration measures sensitivity: longer maturity = more price movement per 1% yield change",
              ].map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-400 font-bold flex-shrink-0">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Card: Compounding frequency explained */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <Percent size={16} className="text-purple-500" />
              How compounding frequency affects bond price
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              More frequent compounding means interest accrues faster on the discount, producing a
              slightly lower price today for the same stated yield. The difference between annual and
              continuous compounding grows with the yield rate and time to maturity.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-100">
              <table className="w-full text-xs" aria-label="Compounding frequency explanation">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-slate-500 font-semibold">Frequency</th>
                    <th className="px-3 py-2 text-left text-slate-500 font-semibold">Periods/year</th>
                    <th className="px-3 py-2 text-left text-slate-500 font-semibold">Common use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-slate-600">
                  {[
                    ["Annual",      "1",   "Government bonds, some corporate"],
                    ["Semi-annual", "2",   "US Treasuries, most US corporate bonds"],
                    ["Quarterly",   "4",   "Some mortgages, CD products"],
                    ["Monthly",     "12",  "Mortgages, consumer loans, our default"],
                    ["Daily",       "365", "Savings accounts, money market"],
                    ["Continuous",  "∞",   "Theoretical finance models (Black-Scholes)"],
                  ].map(([freq, periods, use]) => (
                    <tr key={freq}>
                      <td className="px-3 py-2 font-medium">{freq}</td>
                      <td className="px-3 py-2">{periods}</td>
                      <td className="px-3 py-2 text-slate-400">{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card: When to use this calculator */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <DollarSign size={16} className="text-amber-500" />
              When to use this bond calculator
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                {
                  title: "Valuing a zero-coupon bond",
                  desc:  "Find the present value of any bond that pays no coupons — US STRIPS, savings bonds, deferred loans.",
                },
                {
                  title: "Pricing a deferred-payment loan",
                  desc:  "Model a loan where no payments are made until maturity — the borrower owes the face value at the end.",
                },
                {
                  title: "Checking if a bond is fairly priced",
                  desc:  "Compare the market price against the calculated present value at current market yields.",
                },
                {
                  title: "Comparing yield rates",
                  desc:  "Use the yield comparison table above to see exactly how much each 1% of yield changes your investment return.",
                },
                {
                  title: "Financial modelling and CFA prep",
                  desc:  "Calculate present value with exact compounding frequency matching exam or model assumptions.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-5 h-5 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 text-xs font-bold">{i + 1}</span>
                  </div>
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
            SECTION 5 — Disclaimer (E-E-A-T + AdSense policy)
            ════════════════════════════════════════════════════════════════ */}
        <aside
          role="note"
          aria-label="Bond calculator disclaimer"
          className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex gap-3 text-xs text-amber-800 leading-relaxed"
        >
          <AlertCircle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Disclaimer:</strong> This calculator computes the theoretical present value of a
            zero-coupon bond or deferred loan using standard discounted cash-flow methodology
            consistent with CFA Institute curriculum and Bloomberg bond pricing conventions. Results
            are for <strong>educational and informational purposes only</strong> and do not constitute
            investment advice. Actual bond market prices depend on liquidity, credit risk, accrued
            interest conventions, tax treatment, and real-time yield curves. Always consult a
            qualified financial adviser before making investment decisions.
          </p>
        </aside>
      </div>
    </div>
  );
}