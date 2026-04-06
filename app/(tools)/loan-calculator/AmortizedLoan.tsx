"use client";

import { useState, useMemo, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import { Copy, Check, Info, Lightbulb, ChevronDown, ChevronUp, Wallet, Percent as PercentIcon, Landmark } from "lucide-react";

import {
  calculateAdvancedLoan,
  PaymentFrequency,
  CompoundFrequency,
} from "@/lib/loanCalculator";

import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

type Currency = "USD" | "INR" | "EUR" | "GBP";
const COLORS = ["#2563eb", "#ef4444"]; // Blue for Principal, Red for Interest

export default function AmortizedLoan() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [months, setMonths] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState<PaymentFrequency>("monthly");
  const [compoundFrequency, setCompoundFrequency] = useState<CompoundFrequency>("monthly");
  const [extraPayment, setExtraPayment] = useState(0);
  const [balloonPayment, setBalloonPayment] = useState(0);
  const [deferMonths, setDeferMonths] = useState(0);
  const [accrueInterestDuringDefer, setAccrueInterestDuringDefer] = useState(true);
  const [currency, setCurrency] = useState<Currency>("INR");
  const [copied, setCopied] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  // Live rates fallback
  const [ratesToINR, setRatesToINR] = useState<Record<Currency, number>>({
    INR: 1, USD: 93.8, EUR: 108.5, GBP: 124,
  });

  const formatCurrency = (num: number = 0) => {
    return new Intl.NumberFormat(
      currency === "INR" ? "en-IN" : currency === "USD" ? "en-US" : currency === "EUR" ? "de-DE" : "en-GB",
      { style: "currency", currency, maximumFractionDigits: 0 }
    ).format(num);
  };

  const currencySymbol = currency === "INR" ? "₹" : currency === "USD" ? "$" : currency === "EUR" ? "€" : "£";

  const result = useMemo(() => {
    if (!principal || (years === 0 && months === 0)) return null;
    try {
      return calculateAdvancedLoan({
        principal,
        annualRate: rate || 0,
        years: (years || 0) + (months || 0) / 12,
        paymentFrequency,
        compoundFrequency,
        extraPayment: extraPayment || 0,
        balloonPayment: balloonPayment || 0,
        deferMonths: deferMonths || 0,
        accrueInterestDuringDefer,
        includeSchedule: false,
      });
    } catch (e) { return null; }
  }, [principal, rate, years, months, paymentFrequency, compoundFrequency, extraPayment, balloonPayment, deferMonths, accrueInterestDuringDefer]);

  const handleCopy = () => {
    if (!result) return;
    const text = `Loan: ${formatCurrency(principal)} | EMI: ${formatCurrency(result.periodicPayment)} | Total: ${formatCurrency(result.totalPayment)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* INPUTS SECTION */}
        <div className="space-y-6 w-full">
          <div className="flex flex-wrap gap-2 bg-gray-100 p-1.5 rounded-2xl w-full sm:w-fit">
            {(["INR", "USD", "EUR", "GBP"] as const).map((cur) => (
              <button key={cur} onClick={() => setCurrency(cur)} className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex-1 sm:flex-none ${currency === cur ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-white"}`}>
                {cur}
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-[2.5rem] p-6 sm:p-10 shadow-sm space-y-6">
  
  <InputField
    label="Loan Amount"
    value={principal}
    onChange={(v) => setPrincipal(Number(v) || 0)}
    prefix={currencySymbol}
    type="number"
  />

  <div className="grid grid-cols-2 gap-4">
    <InputField
      label="Years"
      value={years}
      onChange={(v) => setYears(Number(v) || 0)}
      type="number"
    />
    <InputField
      label="Months"
      value={months}
      onChange={(v) => setMonths(Number(v) || 0)}
      type="number"
    />
  </div>

  <InputField
    label="Interest Rate (%)"
    value={rate}
    onChange={(v) => setRate(Number(v) || 0)}
    step={0.1}
    type="number"
  />

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-50">
    <InputField
      label="Extra / Period"
      value={extraPayment}
      onChange={(v) => setExtraPayment(Number(v) || 0)}
      prefix={currencySymbol}
      type="number"
    />
    <InputField
      label="Balloon Payment"
      value={balloonPayment}
      onChange={(v) => setBalloonPayment(Number(v) || 0)}
      prefix={currencySymbol}
      type="number"
    />
  </div>

  <div className="pt-6 border-t border-gray-100 space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Select
        label="Frequency"
        value={paymentFrequency}
        onChange={(v) => setPaymentFrequency(v as PaymentFrequency)}
        options={["monthly", "biweekly", "weekly", "quarterly", "yearly"]}
      />
      <Select
        label="Compound"
        value={compoundFrequency}
        onChange={(v) => setCompoundFrequency(v as CompoundFrequency)}
        options={["monthly", "daily", "continuous", "yearly"]}
      />
    </div>

    <div className="flex flex-col sm:flex-row items-end gap-4">
      <div className="w-full sm:w-1/2">
        <InputField
          label="Defer Months"
          value={deferMonths}
          onChange={(v) => setDeferMonths(Number(v) || 0)}
          type="number"
        />
      </div>

      <label className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl w-full cursor-pointer hover:bg-gray-100 transition-all border border-transparent hover:border-blue-200">
        <input
          type="checkbox"
          checked={accrueInterestDuringDefer}
          onChange={(e) => setAccrueInterestDuringDefer(e.target.checked)}
          className="w-5 h-5 accent-blue-600 rounded"
        />
        <span className="text-xs font-bold text-gray-700">
          Accrue interest while deferred
        </span>
      </label>
    </div>
  </div>
</div>
        </div>

        {/* RESULTS SECTION */}
        <div className="space-y-6 w-full min-w-0">
          {!result ? (
            <div className="bg-gray-50 border border-dashed border-gray-300 p-12 rounded-[2.5rem] text-center text-gray-500 font-medium">
              Enter loan details to see breakdown...
            </div>
          ) : (
            <>
              {/* EMI Hero Card */}
              <div className="bg-blue-600 text-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Periodic Payment</p>
                    <button onClick={handleCopy} className="p-3 bg-white/10 rounded-xl hover:bg-white/20 active:scale-90 transition-all">
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black tracking-tighter break-all">
                    {formatCurrency(result.periodicPayment)}
                  </h2>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              </div>

              {/* HIGHLIGHT BOX: PRINCIPAL vs INTEREST */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 p-6 rounded-3xl flex items-center gap-4 shadow-sm">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Landmark size={24}/></div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Loan Amount</p>
                    <p className="text-lg font-bold break-all">{formatCurrency(principal)}</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-3xl flex items-center gap-4 shadow-sm">
                  <div className="p-3 bg-red-50 text-red-600 rounded-2xl"><PercentIcon size={24}/></div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Interest</p>
                    <p className="text-lg font-bold break-all text-red-600">{formatCurrency(result.totalInterest)}</p>
                  </div>
                </div>
              </div>

              {/* COLLAPSIBLE DETAILED BREAKDOWN */}
              <div className="bg-white border border-gray-200 rounded-[2.5rem] shadow-sm overflow-hidden">
                <button 
                  onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-gray-50 transition-all border-b border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <Wallet className="text-blue-600" size={20} />
                    <h3 className="text-sm font-black uppercase tracking-widest text-gray-900">Detailed Breakdown</h3>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-full transition-transform duration-300" style={{ transform: isDetailsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isDetailsOpen && (
                  <div className="p-6 sm:p-10 space-y-6">
                    <div className="grid grid-cols-1 gap-2">
                      <SummaryRow label="Loan Amount" value={formatCurrency(principal)} />
                      <SummaryRow label="Total Interest" value={formatCurrency(result.totalInterest)} valueClass="text-red-500" />
                      <SummaryRow label="Total Repayment" value={formatCurrency(result.totalPayment)} valueClass="text-blue-600 font-black text-lg" />
                      <SummaryRow label="Effective Rate" value={`${result.effectiveInterestRate.toFixed(2)}%`} />
                      <SummaryRow label="Payoff Date" value={result.payoffDate} />
                      <SummaryRow label="Risk Assessment" value={result.riskLevel.toUpperCase()} valueClass={result.riskLevel === 'low' ? 'text-green-600' : 'text-orange-600'} isLast />
                    </div>

                    <div className="h-[250px] w-full pt-6">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={[{ name: "Principal", value: principal }, { name: "Interest", value: result.totalInterest }]} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={5} dataKey="value">
                            {COLORS.map((col, i) => <Cell key={i} fill={col} stroke="none" />)}
                          </Pie>
                          <Tooltip contentStyle={{ borderRadius: '15px' }} />
                          <Legend verticalAlign="bottom" />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}
              </div>

              {/* KEY INSIGHTS */}
              <div className="bg-gray-900 rounded-[2.5rem] p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3 text-blue-400">
                  <Lightbulb size={24} />
                  <h4 className="text-xs font-black uppercase tracking-widest">Financial Insights</h4>
                </div>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start text-sm sm:text-base text-gray-300">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span>The total cost of borrowing is <strong>{result.interestToPrincipalRatio.toFixed(1)}%</strong> of your original loan.</span>
                  </li>
                  <li className="flex gap-4 items-start text-sm sm:text-base text-gray-300">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span>Your debt will be officially cleared by <strong>{result.payoffDate}</strong>.</span>
                  </li>
                  {extraPayment > 0 && (
                    <li className="flex gap-4 items-start text-sm sm:text-base text-green-400 bg-green-900/30 p-5 rounded-2xl border border-green-800/50">
                      <Check size={20} className="shrink-0 mt-0.5" />
                      <span>Extra payments are saving you money and time! You are finishing <strong>{result.monthsSaved} periods</strong> earlier.</span>
                    </li>
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, valueClass = "text-gray-900", isLast = false }: { label: string; value: string; valueClass?: string; isLast?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-4 ${!isLast ? "border-b border-gray-50" : ""} gap-4`}>
      <span className="text-[13px] font-bold text-gray-500 whitespace-nowrap">{label}</span>
      <span className={`text-sm sm:text-base font-bold text-right break-all ${valueClass}`}>{value}</span>
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div className="w-full">
      <label className="text-[10px] font-black text-gray-400 uppercase mb-2 block px-1 tracking-widest">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-4 bg-gray-50 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer transition-all hover:bg-white">
        {options.map((op) => (
          <option key={op} value={op}>{op.charAt(0).toUpperCase() + op.slice(1)}</option>
        ))}
      </select>
    </div>
  );
}