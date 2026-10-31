"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Copy, Check, Briefcase, Calculator } from "lucide-react";

// Centralized Tax Data
import { TAX_DATA_2026 } from "@/lib/taxUtils";

// ─── Formatters ───────────────────────────────────────────────────────────────
function fmt(v: number) {
  return v.toLocaleString("en-US", { maximumFractionDigits: 2 });
}
function pct(v: number, total: number) {
  if (!total) return "0.0";
  return ((v / total) * 100).toFixed(1);
}

// ─── Copy button ──────────────────────────────────────────────────────────────
function CopyBtn({ value }: { value: number }) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    await navigator.clipboard.writeText(fmt(value));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handle}
      title="Copy value"
      className="p-1.5 rounded-lg hover:bg-white/20 transition-colors flex-shrink-0"
    >
      {copied
        ? <Check size={13} className="text-emerald-300" />
        : <Copy size={13} className="text-white/50 hover:text-white/80" />}
    </button>
  );
}

// ─── Donut ring ───────────────────────────────────────────────────────────────
function DonutRing({
  netPct, seTaxPct, fedTaxPct, stateTaxPct
}: {
  netPct: number; seTaxPct: number; fedTaxPct: number; stateTaxPct: number;
}) {
  const r = 52;
  const circ = 2 * Math.PI * r;

  const segments = [
    { pct: netPct,      color: "#22c55e" }, // Green - Net
    { pct: seTaxPct,    color: "#f59e0b" }, // Orange - SE
    { pct: fedTaxPct,   color: "#6366f1" }, // Indigo - Fed
    { pct: stateTaxPct, color: "#0ea5e9" }, // Sky - State
  ];

  let offset = 0;
  const arcs = segments.map((s) => {
    const dash = (s.pct / 100) * circ;
    const gap  = circ - dash;
    const rotate = (offset / 100) * 360 - 90;
    offset += s.pct;
    return { ...s, dash, gap, rotate };
  });

  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-32 sm:h-32">
      {arcs.map((a, i) => (
        <circle
          key={i}
          cx="60" cy="60" r={r}
          fill="none"
          stroke={a.color}
          strokeWidth="12"
          strokeDasharray={`${a.dash} ${a.gap}`}
          strokeLinecap="butt"
          style={{ transform: `rotate(${a.rotate}deg)`, transformOrigin: "60px 60px" }}
        />
      ))}
      <circle cx="60" cy="60" r="40" fill="#0f1a2e" />
    </svg>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({
  label, value, sub, color = "slate", copyVal,
}: {
  label: string; value: string; sub?: string;
  color?: "green" | "orange" | "indigo" | "sky" | "slate";
  copyVal?: number;
}) {
  const colors = {
    green:  "bg-emerald-500/15 border-emerald-500/20 text-emerald-300",
    orange: "bg-orange-500/15 border-orange-500/20 text-orange-300",
    indigo: "bg-indigo-500/15 border-indigo-500/20 text-indigo-300",
    sky:    "bg-sky-500/15 border-sky-500/20 text-sky-300",
    slate:  "bg-white/5 border-white/10 text-white",
  };
  return (
    <div className={`rounded-2xl border p-3 sm:p-4 ${colors[color]}`}>
      <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">{label}</p>
      <div className="flex items-center gap-1.5">
        <p className="text-base sm:text-xl font-black leading-none">{value}</p>
        {copyVal !== undefined && <CopyBtn value={copyVal} />}
      </div>
      {sub && <p className="text-[10px] opacity-50 mt-1">{sub}</p>}
    </div>
  );
}

const STATE_RATES: Record<string, number> = {
  "None (TX, FL, NV, etc.)": 0.0,
  "Low (approx 3%)": 0.03,
  "Medium (approx 5%)": 0.05,
  "High (CA, NY, etc. approx 8%)": 0.08,
};

export default function ContractorTaxCalculator() {
  const [isClient, setIsClient] = useState(false);
  const [grossIncome, setGrossIncome] = useState("100000");
  const [expenses, setExpenses] = useState("15000");
  const [filingStatus, setFilingStatus] = useState<"single" | "married_joint">("single");
  const [stateTaxLevel, setStateTaxLevel] = useState<string>("Medium (approx 5%)");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const result = useMemo(() => {
    const gross = parseFloat(grossIncome) || 0;
    const exp = parseFloat(expenses) || 0;
    const netBusinessIncome = Math.max(0, gross - exp);

    // 1. SE Tax (15.3% on 92.35% of net income)
    const seTaxableIncome = netBusinessIncome * 0.9235;
    const ssLimit = TAX_DATA_2026.fica.socialSecurityWageBase;
    const ssTax = Math.min(seTaxableIncome, ssLimit) * TAX_DATA_2026.fica.socialSecurityRate;
    const medTax = seTaxableIncome * TAX_DATA_2026.fica.medicareRate;
    const totalSETax = ssTax + medTax;

    // 2. Federal Income Tax
    const halfSETax = totalSETax / 2;
    const qbiDeduction = Math.max(0, (netBusinessIncome - halfSETax) * 0.20); 
    const config = TAX_DATA_2026.federal[filingStatus];
    
    let taxableIncome = Math.max(0, netBusinessIncome - halfSETax - qbiDeduction - config.standardDeduction);
    let federalTax = 0;
    
    for (let i = 0; i < config.brackets.length; i++) {
      const lower = config.brackets[i].startAmount;
      const rate = config.brackets[i].rate;
      const upper = i + 1 < config.brackets.length ? config.brackets[i + 1].startAmount : Infinity;
      const inBracket = Math.min(taxableIncome, upper) - lower;
      if (inBracket > 0) federalTax += inBracket * rate;
    }

    // 3. State Tax
    const stateRate = STATE_RATES[stateTaxLevel];
    const stateTax = netBusinessIncome * stateRate;

    // 4. Totals
    const totalTaxes = totalSETax + federalTax + stateTax;
    const netTakeHome = netBusinessIncome - totalTaxes;
    const effectiveTaxRate = netBusinessIncome > 0 ? (totalTaxes / netBusinessIncome) * 100 : 0;

    return {
      netBusinessIncome,
      totalSETax,
      federalTax,
      stateTax,
      totalTaxes,
      netTakeHome,
      effectiveTaxRate,
    };
  }, [grossIncome, expenses, filingStatus, stateTaxLevel]);

  if (!isClient) {
    return <div className="min-h-[500px] bg-slate-900 animate-pulse rounded-3xl" />;
  }

  // Percentages for Donut
  const netPct = parseFloat(pct(result.netTakeHome, result.netBusinessIncome));
  const sePct = parseFloat(pct(result.totalSETax, result.netBusinessIncome));
  const fedPct = parseFloat(pct(result.federalTax, result.netBusinessIncome));
  const statePct = parseFloat(pct(result.stateTax, result.netBusinessIncome));

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
      
      {/* ─── LEFT: INPUTS ─── */}
      <div className="w-full lg:w-[420px] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10 shrink-0">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20">
            <Briefcase size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold">1099 Profile</h2>
            <p className="text-xs text-slate-400">Freelance & Contractor (2026)</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Gross Income */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Gross 1099 Income
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input
                type="number"
                value={grossIncome}
                onChange={(e) => setGrossIncome(e.target.value)}
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white font-bold focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Business Expenses */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Business Expenses
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input
                type="number"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white font-bold focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Filing Status</label>
              <select
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value as any)}
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-3 py-3 text-white text-sm focus:ring-2 focus:ring-indigo-500 outline-none appearance-none"
              >
                <option value="single">Single</option>
                <option value="married_joint">Married (Joint)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">State Tax</label>
              <select
                value={stateTaxLevel}
                onChange={(e) => setStateTaxLevel(e.target.value)}
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-3 py-3 text-white text-sm focus:ring-2 focus:ring-indigo-500 outline-none appearance-none"
              >
                {Object.keys(STATE_RATES).map((lvl) => (
                  <option key={lvl} value={lvl}>{lvl.split(" ")[0]}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="pt-4 border-t border-white/10">
             <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Net Business Income</span>
                <span className="text-white font-bold">${(result.netBusinessIncome).toLocaleString()}</span>
             </div>
             <p className="text-[10px] text-slate-500 text-right mt-1">Gross minus expenses</p>
          </div>
        </div>
      </div>

      {/* ─── RIGHT: RESULTS ─── */}
      <div className="flex-1 p-6 sm:p-8" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0f1a2e 100%)" }}>
        
        {/* Main Result */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 mb-8 bg-slate-900/40 p-6 rounded-3xl border border-white/5 shadow-inner">
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Estimated Take-Home</p>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                ${(result.netTakeHome).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
              <CopyBtn value={result.netTakeHome} />
            </div>
            <p className="text-emerald-400 text-sm font-medium mt-2">
              {netPct}% of Net Business Income
            </p>
          </div>
          
          <div className="relative shrink-0">
            <DonutRing netPct={netPct} seTaxPct={sePct} fedTaxPct={fedPct} stateTaxPct={statePct} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="text-white font-bold text-sm">{result.effectiveTaxRate.toFixed(1)}%</span>
               <span className="text-[9px] text-slate-400 uppercase tracking-wider">Eff. Tax</span>
            </div>
          </div>
        </div>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
          <StatCard
            label="SE Tax (15.3%)"
            value={`$${fmt(result.totalSETax)}`}
            sub={`${sePct}% of Net`}
            color="orange"
            copyVal={result.totalSETax}
          />
          <StatCard
            label="Federal Tax"
            value={`$${fmt(result.federalTax)}`}
            sub={`${fedPct}% of Net`}
            color="indigo"
            copyVal={result.federalTax}
          />
          <StatCard
            label="State Tax"
            value={`$${fmt(result.stateTax)}`}
            sub={`${statePct}% of Net`}
            color="sky"
            copyVal={result.stateTax}
          />
          <StatCard
            label="Total Taxes"
            value={`$${fmt(result.totalTaxes)}`}
            sub="Amount to save"
            color="slate"
            copyVal={result.totalTaxes}
          />
        </div>

        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-4 flex gap-3 text-indigo-300">
          <Calculator className="shrink-0 mt-0.5" size={16} />
          <p className="text-xs leading-relaxed">
            <strong>Estimated calculation.</strong> This includes the standard deduction and a simplified QBI deduction. It assumes you pay self-employment tax on 92.35% of your net business income.
          </p>
        </div>

      </div>
    </div>
  );
}
