"use client";

import { useState, useMemo } from "react";
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend
} from "recharts";
import { Copy, Check, TrendingUp } from "lucide-react";
import InputField from "@/components/ui/InputField";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateRentAffordability, RentResult } from "@/lib/rentUtils";

const COLORS = ["#10b981", "#3b82f6", "#64748b"];

const formatMoney = (num: number) => {
  if (!num || !isFinite(num)) return "$0";
  return `$${Math.round(num).toLocaleString("en-US")}`;
};

// 🔥 PREMIUM CARD
function PremiumCard({ title, value, subtitle, gradient }: any) {
  const [copied, setCopied] = useState(false);

  return (
    <div className={`relative rounded-3xl p-6 text-white shadow-xl bg-gradient-to-br ${gradient}`}>
      <p className="text-xs uppercase opacity-80">{title}</p>

      <div className="flex justify-between items-center mt-2">
        <h2 className="text-3xl md:text-4xl font-black">
          {formatMoney(value)}
        </h2>

        <button
          onClick={() => {
            navigator.clipboard.writeText(String(Math.round(value)));
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>

      {subtitle && <p className="text-xs mt-2 opacity-80">{subtitle}</p>}
    </div>
  );
}

// 🔥 DTI BAR
function DTIBar({ value }: { value: number }) {
  const color =
    value < 30 ? "bg-emerald-500" :
    value < 36 ? "bg-amber-500" :
    "bg-red-500";

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>Debt-to-Income</span>
        <span>{value.toFixed(2)}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div className={`${color} h-full`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function RentAffordabilityClient() {
  const [incomeStr, setIncomeStr] = useState("95000");
  const [debtStr, setDebtStr] = useState("450");
  const [incomeType, setIncomeType] = useState<"monthly" | "yearly">("yearly");

  const income = Number(incomeStr.replace(/[^0-9.]/g, "")) || 0;
  const debt = Number(debtStr.replace(/[^0-9.]/g, "")) || 0;

  const result: RentResult = useMemo(() => {
    return calculateRentAffordability({
      incomeValue: income,
      incomeType,
      monthlyDebt: debt,
    });
  }, [income, debt, incomeType]);

  const pieData = [
    { name: "Rent", value: result.recommendedRent },
    { name: "Debt", value: debt },
    { name: "Remaining", value: Math.max(0, result.monthlyNet - result.recommendedRent - debt) },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-12 space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-5xl font-black">
          Rent <span className="text-blue-600">Pro</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Precision affordability engine based on 2026 lending standards.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">

        {/* LEFT PANEL */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-3xl border shadow space-y-6">

            <InputField
              label="Gross Income"
              value={incomeStr}
              onChange={setIncomeStr}
              prefix="$"
            />

            <div className="flex gap-3">
              {["yearly", "monthly"].map((t) => (
                <button
                  key={t}
                  onClick={() => setIncomeType(t as any)}
                  className={`flex-1 py-3 rounded-xl font-semibold ${
                    incomeType === t
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <InputField
              label="Monthly Debt"
              value={debtStr}
              onChange={setDebtStr}
              prefix="$"
            />

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-8 space-y-8">

          {/* HERO */}
          <PremiumCard
            title="Recommended Monthly Rent"
            value={result.recommendedRent}
            subtitle="Best financial balance"
            gradient="from-blue-600 to-indigo-600"
          />

          {/* LIMITS */}
          <div className="grid sm:grid-cols-2 gap-6">
            <PremiumCard
              title="Conservative Limit"
              value={result.conservativeRent}
              gradient="from-emerald-600 to-green-500"
            />
            <PremiumCard
              title="Aggressive Limit"
              value={result.aggressiveRent}
              gradient="from-amber-500 to-orange-500"
            />
          </div>

          {/* EXTRA INSIGHT */}
          <div className="grid sm:grid-cols-2 gap-6">
            <PremiumCard
              title="Optimized Smart Rent"
              value={result.optimizedRent}
              subtitle="AI-optimized balance"
              gradient="from-purple-600 to-pink-500"
            />
            <PremiumCard
              title="Monthly Net Income"
              value={result.monthlyNet}
              gradient="from-slate-700 to-slate-600"
            />
          </div>

          {/* CHART */}
          <div className="bg-white p-6 rounded-3xl border shadow">
            <h3 className="font-bold mb-4">Monthly Income Breakdown</h3>

            <div className="h-72">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieData} dataKey="value" innerRadius={70}>
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v) => formatMoney(Number(v))} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* HEALTH */}
          <div className="bg-white p-6 rounded-3xl border shadow space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Financial Health</h3>

              <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase
                ${result.status === "excellent" || result.status === "comfortable"
                  ? "bg-emerald-100 text-emerald-700"
                  : result.status === "stretch"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-700"
                }`}>
                {result.status}
              </span>
            </div>

            <DTIBar value={result.backEndDTI} />

            <BreakdownTable
              data={[
                { label: "Gross Monthly Income", value: formatMoney(result.monthlyGross) },
                { label: "Net Monthly Income", value: formatMoney(result.monthlyNet) },
                { label: "Front-End DTI", value: `${result.frontEndDTI}%` },
                { label: "Back-End DTI", value: `${result.backEndDTI}%` },
                { label: "28% Rule Max", value: formatMoney(result.maxRent28Rule) },
                { label: "36% Rule Max", value: formatMoney(result.maxRent36Rule) },
              ]}
            />

            <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600">
              {result.suggestedAction}
            </div>

            {result.improvementPotential > 0 && (
              <div className="flex items-center gap-2 text-amber-600 font-medium text-sm">
                <TrendingUp size={16} />
                Reduce ~{formatMoney(result.improvementPotential)} to reach optimal safety
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}