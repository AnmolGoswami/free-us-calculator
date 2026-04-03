"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Calculator, TrendingUp, ShieldCheck, Plus, Trash2, Copy, Check, Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import InputField from "@/components/ui/InputField";
import { calculatePaycheck, type PaycheckInputs, type CalculationResult } from "@/lib/taxUtils";
import { ALL_US_STATES } from "@/constants/taxBrackets";

const CHART_COLORS = ["#2563eb", "#dc2626", "#f59e0b", "#10b981", "#8b5cf6"];

const INITIAL_STATE: PaycheckInputs = {
  salary: 100000,
  additionalIncome: 0,
  bonusIncome: 0,
  bonusTaxMethod: "flat_22",
  payFrequency: "biweekly",
  filingStatus: "single",
  state: "CA",
  city: "",
  deductions: [
    {
      id: "401k",
      label: "401(k)",
      amount: 0,
      affects: { federal: true, state: true, fica: false },
      isPreTax: true,
      isPercentage: true
    },
    {
      id: "health",
      label: "Health Insurance",
      amount: 0,
      affects: { federal: true, state: true, fica: true },
      isPreTax: true
    },
  ],
  dependents: 0,
  extraWithholding: 0,
  otherDeductions: 0,
  employer401kMatch: 0,
  taxYear: 2026,
};

export default function PaycheckCalculatorClient() {
  const [mounted, setMounted] = useState(false);
  const [inputs, setInputs] = useState<PaycheckInputs>(INITIAL_STATE);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<"paycheck" | "monthly" | "annual">("paycheck");

  useEffect(() => { setMounted(true); }, []);

  // Auto-calculate with small debounce
  useEffect(() => {
    const timer = setTimeout(async () => {
      const res = await calculatePaycheck(inputs);
      setResult(res);
    }, 180);
    return () => clearTimeout(timer);
  }, [inputs]);

  const addDeduction = () => {
    setInputs(prev => ({
      ...prev,
      deductions: [...prev.deductions, {
        id: Date.now().toString(),
        label: "Other Deduction",
        amount: 0,
        affects: { federal: true, state: true, fica: false },
        isPreTax: true
      }]
    }));
  };

  const removeDeduction = (id: string) => {
    setInputs(prev => ({
      ...prev,
      deductions: prev.deductions.filter(d => d.id !== id)
    }));
  };

  const updateDeduction = (id: string, field: keyof any, value: any) => {
    setInputs(prev => ({
      ...prev,
      deductions: prev.deductions.map(d =>
        d.id === id ? { ...d, [field]: value } : d
      )
    }));
  };

  const pieData = useMemo(() => {
    if (!result) return [];
    return [
      { name: 'Federal Tax', value: result.perPaycheck.federal, color: CHART_COLORS[0] },
      { name: 'FICA', value: result.perPaycheck.fica, color: CHART_COLORS[1] },
      { name: 'State Tax', value: result.perPaycheck.state, color: CHART_COLORS[2] },
      { name: 'Local Tax', value: result.perPaycheck.local || 0, color: CHART_COLORS[3] },
    ].filter(d => d.value > 0);
  }, [result]);

  const effectiveTaxRate = useMemo(() => {
    if (!result) return "0.0";
    const totalTax = result.perPaycheck.federal +
      result.perPaycheck.fica +
      result.perPaycheck.state +
      (result.perPaycheck.local || 0);
    return ((totalTax / result.perPaycheck.gross) * 100).toFixed(1);
  }, [result]);

  const netPercentage = useMemo(() => {
    if (!result) return "0";
    return ((result.perPaycheck.net / result.perPaycheck.gross) * 100).toFixed(1);
  }, [result]);

  const safeNumber = (val: any, fallback = 0) => {
    if (val === "" || val === null || val === undefined) return fallback;
    const num = parseFloat(val);
    return isNaN(num) ? fallback : num;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <header className="max-w-7xl mx-auto px-4 pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold mb-6">
          <ShieldCheck size={14} /> Updated for 2026 Tax Year
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
          Paycheck <span className="text-blue-600">Calculator</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Most configurable 2026 paycheck calculator with pre/post-tax toggles, percentage contributions, dependents &amp; more.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* ==================== INPUTS ==================== */}
          <section className="lg:col-span-5 space-y-6">

            {/* Income Section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h2 className="flex items-center gap-2 text-xl font-bold mb-6">
                <Calculator className="text-blue-600" /> Income
              </h2>

              <div className="space-y-6">
                <div>
                  <InputField
                    label="Annual Gross Salary"
                    value={inputs.salary}
                    onChange={(v) =>
                      setInputs(p => ({
                        ...p,
                        salary: safeNumber(v, p.salary)
                      }))
                    }
                    className="text-2xl font-semibold"
                  />
                  <input
                    type="range"
                    min="30000"
                    max="300000"
                    step="1000"
                    value={inputs.salary}
                    onChange={(e) => setInputs(p => ({ ...p, salary: Number(e.target.value) }))}
                    className="w-full mt-4 accent-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Additional Income (Annual)"
                    value={inputs.additionalIncome}
                    onChange={(v) =>
                      setInputs(p => ({
                        ...p,
                        additionalIncome: safeNumber(v)
                      }))
                    }
                  />
                  <InputField
                    label="Bonus Income (Annual)"
                    value={inputs.bonusIncome}
                    onChange={(v) =>
                      setInputs(p => ({
                        ...p,
                        bonusIncome: safeNumber(v)
                      }))
                    }
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Pay Frequency</label>
                    <select
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={inputs.payFrequency}
                      onChange={(e) => setInputs(p => ({ ...p, payFrequency: e.target.value as any }))}
                    >
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Filing Status</label>
                    <select
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={inputs.filingStatus}
                      onChange={(e) => setInputs(p => ({ ...p, filingStatus: e.target.value as any }))}
                    >
                      <option value="single">Single</option>
                      <option value="married_joint">Married Filing Jointly</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Tax Year</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={inputs.taxYear}
                    onChange={(e) => setInputs(p => ({ ...p, taxYear: Number(e.target.value) }))}
                  >
                    <option value={2024}>2024</option>
                    <option value={2025}>2025</option>
                    <option value={2026}>2026</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold mb-6">Location</h2>
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Work State</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={inputs.state}
                    onChange={(e) => setInputs(p => ({ ...p, state: e.target.value }))}
                  >
                    {ALL_US_STATES.map(s => (
                      <option key={s.code} value={s.code}>{s.name}</option>
                    ))}
                  </select>
                </div>

                {inputs.state === "NY" && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">City (Local Tax)</label>
                    <select
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={inputs.city}
                      onChange={(e) => setInputs(p => ({ ...p, city: e.target.value }))}
                    >
                      <option value="">None</option>
                      <option value="NYC">New York City</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Deductions Section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="flex items-center gap-2 text-xl font-bold text-emerald-700">
                  <TrendingUp size={22} /> Deductions & Contributions
                </h2>
                <button
                  onClick={addDeduction}
                  className="flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-4 py-2 rounded-2xl text-sm font-semibold transition"
                >
                  <Plus size={16} /> Add
                </button>
              </div>

              <div className="space-y-6">
                {inputs.deductions.map((ded) => (
                  <div key={ded.id} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <InputField
                          label={ded.label}
                          value={ded.amount}
                          onChange={(v) => {
                            const newDeds = [...inputs.deductions];
                            const idx = newDeds.findIndex(d => d.id === ded.id);

                            newDeds[idx].amount = safeNumber(v, newDeds[idx].amount);

                            setInputs(p => ({ ...p, deductions: newDeds }));
                          }}
                        />
                      </div>
                      {inputs.deductions.length > 2 && (
                        <button
                          onClick={() => removeDeduction(ded.id)}
                          className="mt-8 text-rose-400 hover:text-rose-600"
                        >
                          <Trash2 size={20} />
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4 text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={ded.isPreTax ?? true}
                          onChange={(e) => updateDeduction(ded.id, 'isPreTax', e.target.checked)}
                          className="accent-emerald-600"
                        />
                        <span>Pre-tax</span>
                      </label>

                      {ded.id === "401k" && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateDeduction(ded.id, 'isPercentage', true)}
                            className={`px-4 py-1 rounded-xl text-xs font-medium ${ded.isPercentage ? 'bg-blue-600 text-white' : 'bg-slate-200'}`}
                          >
                            Percentage (%)
                          </button>
                          <button
                            onClick={() => updateDeduction(ded.id, 'isPercentage', false)}
                            className={`px-4 py-1 rounded-xl text-xs font-medium ${!ded.isPercentage ? 'bg-blue-600 text-white' : 'bg-slate-200'}`}
                          >
                            Fixed Amount ($)
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 space-y-6">
              <h2 className="text-xl font-bold">Advanced Settings</h2>

              <InputField
                label="Number of Dependents"
                value={inputs.dependents}
                onChange={(v) =>
                  setInputs(p => ({
                    ...p,
                    dependents: Math.max(0, Math.floor(safeNumber(v)))
                  }))
                }
                type="number"
              />


              <InputField
                label="Extra Withholding per Paycheck ($)"
                value={inputs.extraWithholding}
                onChange={(v) =>
                  setInputs(p => ({
                    ...p,
                    extraWithholding: safeNumber(v)
                  }))
                }
                type="number"
              />

              <InputField
                label="Other Deductions (Annual)"
                value={inputs.otherDeductions}
                onChange={(v) =>
                  setInputs(p => ({
                    ...p,
                    otherDeductions: safeNumber(v)
                  }))
                }
                type="number"
              />

              <InputField
                label="Employer 401(k) Match (%)"
                value={inputs.employer401kMatch}
                onChange={(v) =>
                  setInputs(p => ({
                    ...p,
                    employer401kMatch: Math.min(100, safeNumber(v))
                  }))
                }
                type="number"
                max={100}
              />
            </div>
          </section>

          {/* ==================== RESULTS ==================== */}
          <section className="lg:col-span-7 space-y-6 lg:sticky lg:top-8">
            <div className="bg-slate-100 p-1.5 rounded-3xl flex gap-1 text-sm">
              {["paycheck", "monthly", "annual"].map((m) => (
                <button
                  key={m}
                  onClick={() => setViewMode(m as any)}
                  className={`flex-1 py-3 rounded-2xl font-semibold transition-all ${viewMode === m
                    ? "bg-white shadow text-blue-600"
                    : "text-slate-500 hover:bg-white/60"
                    }`}
                >
                  {m === "paycheck" ? "Per Paycheck" : m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Net Pay */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-10 text-white shadow-2xl">
                    <div className="uppercase text-blue-400 text-xs font-bold tracking-widest">
                      {viewMode.toUpperCase()} NET PAY
                    </div>
                    <div className="flex items-baseline gap-4 mt-3">
                      <h2 className="text-6xl md:text-7xl font-black tracking-tighter">
                        ${(viewMode === 'annual'
                          ? result.annual.net
                          : viewMode === 'monthly'
                            ? result.annual.net / 12
                            : result.perPaycheck.net
                        ).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </h2>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(result.perPaycheck.net.toFixed(2));
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        }}
                        className="p-3 hover:bg-white/10 rounded-2xl transition"
                      >
                        {copied ? <Check className="text-emerald-400" size={28} /> : <Copy size={28} className="text-slate-400" />}
                      </button>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-x-10 text-sm">
                      <div>Retention: <span className="font-bold text-emerald-400">{netPercentage}%</span></div>
                      <div>Effective Tax Rate: <span className="font-bold text-orange-400">{effectiveTaxRate}%</span></div>
                    </div>
                  </div>

                  {/* Chart + Breakdown */}
                  <div className="bg-white rounded-3xl p-8 border border-slate-200">
                    <div className="grid md:grid-cols-5 gap-10">
                      <div className="md:col-span-3 h-80">
                        {mounted && (
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={pieData}
                                innerRadius={70}
                                outerRadius={105}
                                dataKey="value"
                                paddingAngle={4}
                              >
                                {pieData.map((entry, i) => (
                                  <Cell key={`cell-${i}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip
                                formatter={(value) => [
                                  `$${Number(value).toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}`,
                                  ""
                                ]}
                                contentStyle={{ borderRadius: "12px", border: "none" }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        )}
                      </div>

                      <div className="md:col-span-2 space-y-5 pt-2">
                        <BreakdownRow label="Federal Income Tax" value={result.perPaycheck.federal} color={CHART_COLORS[0]} />
                        <BreakdownRow label="FICA (Social Security + Medicare)" value={result.perPaycheck.fica} color={CHART_COLORS[1]} />
                        <BreakdownRow label="State Income Tax" value={result.perPaycheck.state} color={CHART_COLORS[2]} />
                        {result.perPaycheck.local > 0 && (
                          <BreakdownRow label="Local/City Tax" value={result.perPaycheck.local} color={CHART_COLORS[3]} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Employer Match */}
                  {inputs.employer401kMatch > 0 && (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex gap-3 text-sm text-emerald-700">
                      <Info size={20} className="mt-0.5" />
                      Employer 401(k) match could add ~${((inputs.salary * inputs.employer401kMatch / 100) / 12).toFixed(0)} per month
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </main>
    </div>
  );
}

// ====================== BreakdownRow Component ======================
function BreakdownRow({
  label,
  value,
  color
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-none">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-slate-700">{label}</span>
      </div>
      <span className="font-semibold text-slate-900">
        ${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
    </div>
  );
}