"use client";

import { useState, useMemo } from "react";
import {
  Copy, Check, Maximize2,
  Lightbulb, X
} from "lucide-react";
import {
  PieChart, Pie, Cell,
  ResponsiveContainer, Tooltip
} from "recharts";

import { calculateBond, CompoundFrequency } from "@/lib/loanCalculator";
import InputField from "@/components/ui/InputField";

const COLORS = ["#2563eb", "#10b981"];

export default function BondCalculator() {
  const [faceValue, setFaceValue] = useState(100000);
  const [annualRate, setAnnualRate] = useState(5.5);
  const [years, setYears] = useState(10);
  const [months, setMonths] = useState(0);
  const [compoundFrequency, setCompoundFrequency] = useState<CompoundFrequency>("monthly");
  const [currency, setCurrency] = useState("GBP");

  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const currencyConfig: Record<string, { symbol: string, locale: string }> = {
    EUR: { symbol: "€", locale: "de-DE" },
    USD: { symbol: "$", locale: "en-US" },
    INR: { symbol: "₹", locale: "en-IN" },
    GBP: { symbol: "£", locale: "en-GB" }
  };

  const current = currencyConfig[currency];

  const totalYears = useMemo(
    () => years + (months / 12),
    [years, months]
  );

  const result = useMemo(() => {
    if (!faceValue || totalYears <= 0) return null;

    return calculateBond({
      faceValue,
      yearsToMaturity: totalYears,
      annualRate,
      compoundFrequency,
      currencySymbol: current.symbol,
    });
  }, [faceValue, totalYears, annualRate, compoundFrequency, current]);

  // ✅ FIXED PERCENTAGE
  const discountPercent = useMemo(() => {
    if (!result) return 0;
    return (result.totalInterest / faceValue) * 100;
  }, [result, faceValue]);

  const formatUI = (val: number) =>
    new Intl.NumberFormat(current.locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(val);

  const formatExact = (val: number) =>
    new Intl.NumberFormat(current.locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);

  const handleCopy = (value: any) => {
    navigator.clipboard.writeText(value.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ✅ FIXED INSIGHTS
  const fixedInsights = useMemo(() => {
    if (!result) return [];

    return [
      `Amount Received Today: ${current.symbol}${formatExact(result.amountReceived)}`,
      `Total Interest Over Term: ${current.symbol}${formatExact(result.totalInterest)}`,
      `Discount to Face Value: ${discountPercent.toFixed(2)}%`,
      `Compounding: ${compoundFrequency}`,
      `Bond matures in ${years} years${months ? ` ${months} months` : ""}`
    ];
  }, [result, discountPercent, years, months, compoundFrequency, current]);

  if (!result || result.amountReceived <= 0) return null;

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-[#fcfcfd] min-h-screen">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-sm space-y-8">

            {/* Currency */}
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase text-slate-400">
                Currency
              </span>

              <div className="flex bg-slate-100 p-1 rounded-xl">
                {Object.keys(currencyConfig).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => setCurrency(cur)}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black ${
                      currency === cur
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-400"
                    }`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            <InputField
              label="Maturity Face Value"
              value={faceValue}
              onChange={(v) => setFaceValue(Number(v) || 0)}
              prefix={current.symbol}
              type="number"
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField label="Years" value={years} onChange={(v) => setYears(Number(v) || 0)} type="number" />
              <InputField label="Months" value={months} onChange={(v) => setMonths(Number(v) || 0)} type="number" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Yield Rate %"
                value={annualRate}
                onChange={(v) => setAnnualRate(Number(v) || 0)}
                type="number"
              />

              <select
                value={compoundFrequency}
                onChange={(e) => setCompoundFrequency(e.target.value as any)}
                className="border rounded-xl p-3"
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="continuous">Continuous</option>
              </select>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7 space-y-6">

          {/* HERO */}
          <div className="max-w-md mx-auto bg-blue-600 text-white rounded-[2.5rem] p-8">
            <div className="flex justify-between mb-6">
              <p className="text-xs">Price Today</p>
              <button onClick={() => handleCopy(result.amountReceived)}>
                {copied ? <Check size={16}/> : <Copy size={16}/>}
              </button>
            </div>

            <h2 className="text-3xl font-bold mb-1">
              {formatUI(result.amountReceived)}
            </h2>

            {/* exact */}
            <p className="text-xs text-blue-100 mb-4">
              {current.symbol}{formatExact(result.amountReceived)}
            </p>

            <div className="flex justify-between">
              <div>
                <p className="text-xs">Total Gain</p>
                <p className="text-green-300 font-bold">
                  {formatUI(result.totalInterest)}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs">Maturity</p>
                <p>{result.maturityDate}</p>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-[2.5rem] p-6 shadow-sm max-w-2xl mx-auto">

            <div className="flex flex-col md:flex-row gap-8 items-center mb-10">

              {/* ✅ FIXED CHART */}
              <div className="w-40 min-w-[160px] h-[160px]">
                <ResponsiveContainer width="100%" height={160}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Price Today", value: result.amountReceived },
                        { name: "Gain", value: result.totalInterest },
                      ]}
                      dataKey="value"
                      outerRadius={70}
                    >
                      {COLORS.map((c, i) => (
                        <Cell key={i} fill={c} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full space-y-2">
                <SummaryRow label="Maturity Value" value={formatUI(faceValue)} />
                <SummaryRow label="Interest Gain" value={formatUI(result.totalInterest)} color="text-green-600" />
                <SummaryRow label="Discount" value={`${discountPercent.toFixed(2)}%`} />
              </div>
            </div>

            {/* INSIGHTS */}
            <div className="pt-6 border-t space-y-3">
              {fixedInsights.map((text, i) => (
                <div key={i} className="flex gap-2">
                  <Lightbulb size={16}/>
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl">
            <button onClick={() => setShowModal(false)}><X /></button>
            <p className="mt-4 font-bold">
              {current.symbol}{formatExact(result.amountReceived)}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

/* ROW */
function SummaryRow({ label, value, color = "text-black" }: any) {
  return (
    <div className="flex justify-between py-2">
      <span className="text-xs text-gray-400">{label}</span>
      <span className={`font-bold ${color}`}>{value}</span>
    </div>
  );
}