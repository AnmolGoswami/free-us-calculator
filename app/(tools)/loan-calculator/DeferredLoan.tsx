"use client";

import { useState, useMemo } from "react";
import InputField from "@/components/ui/InputField";
import { 
  Copy, Check, Lightbulb,
  Maximize2, Info, X 
} from "lucide-react";
import { calculateDeferredLoan, CompoundFrequency } from "@/lib/loanCalculator";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type Currency = "USD" | "INR" | "EUR" | "GBP";
const COLORS = ["#2563eb", "#ef4444"];

export default function DeferredLoan() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(3);
  const [compoundFrequency, setCompoundFrequency] = useState<CompoundFrequency>("monthly");
  const [currency, setCurrency] = useState<Currency>("GBP");
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const currencyConfig: Record<Currency, { locale: string; symbol: string }> = {
    INR: { locale: "en-IN", symbol: "₹" },
    USD: { locale: "en-US", symbol: "$" },
    EUR: { locale: "de-DE", symbol: "€" },
    GBP: { locale: "en-GB", symbol: "£" },
  };

  const current = currencyConfig[currency];

  const formatUI = (val: number) => 
    new Intl.NumberFormat(current.locale, { 
      style: 'currency', 
      currency, 
      maximumFractionDigits: 0 
    }).format(val);

  const formatExact = (val: number) => 
    new Intl.NumberFormat(current.locale, { minimumFractionDigits: 2 }).format(val);

  const result = useMemo(() => {
    if (!principal || !years) return null;
    return calculateDeferredLoan({ 
        principal, 
        annualRate: rate, 
        years, 
        compoundFrequency, 
        currencySymbol: current.symbol 
    });
  }, [principal, rate, years, compoundFrequency, current]);

  const handleCopy = (val?: number) => {
    const text = val ? val.toString() : result?.amountDueAtMaturity.toString() || "";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-[#fcfcfd] min-h-screen">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-5">
          <div className="bg-white border rounded-[2rem] p-6 md:p-8 space-y-6">

            <div className="flex gap-2 overflow-x-auto">
              {Object.keys(currencyConfig).map((cur) => (
                <button 
                  key={cur}
                  onClick={() => setCurrency(cur as Currency)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap ${
                    currency === cur ? "bg-blue-600 text-white" : "bg-slate-100"
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>

            <InputField
              label="Loan Principal"
              value={principal}
              onChange={(v) => setPrincipal(Number(v) || 0)}
              prefix={current.symbol}
              type="number"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Interest %"
                value={rate}
                onChange={(v) => setRate(Number(v) || 0)}
                type="number"
              />
              <InputField
                label="Term (Years)"
                value={years}
                onChange={(v) => setYears(Number(v) || 0)}
                type="number"
              />
            </div>

            <select 
              value={compoundFrequency}
              onChange={(e) => setCompoundFrequency(e.target.value as any)}
              className="w-full p-3 rounded-xl bg-slate-100"
            >
              {["monthly", "daily", "continuous", "yearly", "quarterly"].map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>

          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7 space-y-6">
          {result && (
            <>
              {/* HERO */}
              <div className="bg-blue-600 text-white rounded-[2rem] p-6">
                <div className="flex justify-between mb-4">
                  <p className="text-xs">Maturity Debt</p>
                  <div className="flex gap-2">
                    <button onClick={() => setShowModal(true)}>
                      <Maximize2 size={16} />
                    </button>
                    <button onClick={() => handleCopy()}>
                      {copied ? <Check size={16}/> : <Copy size={16}/>}
                    </button>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold break-words">
                  {formatUI(result.amountDueAtMaturity)}
                </h2>
              </div>

              {/* CARD */}
              <div className="bg-white rounded-[2rem] p-6 space-y-6">

                <div className="flex flex-col md:flex-row gap-6 items-center">

                  <div className="w-40 h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Principal", value: principal },
                            { name: "Interest", value: result.totalInterest },
                          ]}
                          dataKey="value"
                        >
                          {COLORS.map((c, i) => (
                            <Cell key={i} fill={c} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="w-full">
                    <SummaryRow label="Initial Loan" value={formatUI(principal)} />
                    <SummaryRow label="Interest" value={formatUI(result.totalInterest)} />
                    <SummaryRow label="Maturity Date" value={result.maturityDate} isLast />
                  </div>
                </div>

                <div className="space-y-3">
                  {result.insights.map((text, i) => (
                    <div key={i} className="flex gap-3">
                      <Lightbulb size={16}/>
                      <p className="text-sm break-words">{text}</p>
                    </div>
                  ))}
                </div>

              </div>
            </>
          )}
        </div>
      </div>

      {/* MODAL */}
      {showModal && result && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm">
            <button onClick={() => setShowModal(false)} className="mb-4">
              <X />
            </button>

            <p className="font-bold">
              {current.symbol}{formatExact(result.amountDueAtMaturity)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ✅ FINAL FIXED ROW */
function SummaryRow({ label, value, isLast = false }: any) {
  return (
    <div className={`flex justify-between items-center gap-4 py-3 ${!isLast ? "border-b" : ""}`}>
      
      {/* LABEL */}
      <span className="text-xs text-slate-400 whitespace-nowrap">
        {label}
      </span>

      {/* VALUE (FIXED) */}
      <span className="text-sm font-bold text-right whitespace-nowrap">
        {value}
      </span>

    </div>
  );
}