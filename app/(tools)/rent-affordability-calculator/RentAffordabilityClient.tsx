"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Copy, Check } from "lucide-react";
import InputField from "@/components/ui/InputField";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateRentAffordability, RentResult } from "@/lib/rentUtils";

const COLORS = ["#10b981", "#3b82f6", "#64748b"];

const formatMoney = (num: number) => {
  if (!num || !isFinite(num)) return "$0";
  return `$${Math.round(num).toLocaleString("en-US")}`;
};

function SafeResultCard({
  title,
  value,
  subtitle,
  color = "blue",
}: {
  title: string;
  value: number;
  subtitle?: string;
  color?: "blue" | "emerald" | "amber";
}) {
  const [copied, setCopied] = useState(false);

  const colorMap = {
    blue: "from-blue-600 to-blue-500",
    emerald: "from-emerald-600 to-emerald-500",
    amber: "from-amber-500 to-orange-500",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(Math.round(value).toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`relative rounded-3xl p-6 bg-gradient-to-br ${colorMap[color]} text-white shadow-lg overflow-hidden`}>
      <div className="text-xs uppercase tracking-wider opacity-80 font-semibold">
        {title}
      </div>
      <div className="flex items-center justify-between mt-2 gap-3">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">
          {formatMoney(value)}
        </h2>
        <button
          onClick={handleCopy}
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
      {subtitle && <p className="text-xs mt-2 opacity-80">{subtitle}</p>}
    </div>
  );
}

export default function RentAffordabilityClient() {
  const [incomeStr, setIncomeStr] = useState<string>("95000");
  const [debtStr, setDebtStr] = useState<string>("450");
  const [incomeType, setIncomeType] = useState<"monthly" | "yearly">("yearly");

  // Clean values for calculation
  const income = Number(String(incomeStr).replace(/[^0-9.]/g, "")) || 0;
  const debt = Number(String(debtStr).replace(/[^0-9.]/g, "")) || 0;

  const result: RentResult = useMemo(() => {
    return calculateRentAffordability({
      incomeValue: income,
      incomeType,        // ← This was the main bug
      monthlyDebt: debt,
      taxRate: 0.25,
    });
  }, [income, debt, incomeType]);

  const pieData = result.monthlyGross > 0 ? [
    { name: "Recommended Rent", value: result.recommendedRent },
    { name: "Monthly Debt", value: debt },
    { name: "Remaining", value: Math.max(0, result.monthlyNet - result.recommendedRent - debt) },
  ] : [];

  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-12">
      <div className="grid lg:grid-cols-12 gap-12">

        {/* LEFT PANEL - INPUTS */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h1 className="text-4xl font-black">
              Rent <span className="text-blue-600">Pro</span>
            </h1>
            <p className="text-gray-500 mt-2">
              Precision affordability engine based on 2026 lending standards.
            </p>
          </div>

          <div className="space-y-6 p-6 bg-gray-50 rounded-3xl border">
            <InputField
              label="Gross Income"
              value={incomeStr}
              onChange={setIncomeStr}
              prefix="$"
              placeholder="95000"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setIncomeType("yearly")}
                className={`flex-1 py-3 rounded-2xl font-semibold transition-all ${incomeType === "yearly"
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white border hover:bg-gray-50"
                  }`}
              >
                Yearly
              </button>
              <button
                onClick={() => setIncomeType("monthly")}
                className={`flex-1 py-3 rounded-2xl font-semibold transition-all ${incomeType === "monthly"
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white border hover:bg-gray-50"
                  }`}
              >
                Monthly
              </button>
            </div>

            <InputField
              label="Monthly Debt Payments"
              value={debtStr}
              onChange={setDebtStr}
              prefix="$"
              placeholder="450"
            />
          </div>
        </div>

        {/* RIGHT PANEL - RESULTS */}
        <div className="lg:col-span-8 space-y-8">
          {result.monthlyGross > 0 ? (
            <>
              <SafeResultCard
                title="Recommended Monthly Rent"
                value={result.recommendedRent}
                subtitle="Best financial balance"
                color="blue"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <SafeResultCard
                  title="Conservative Limit"
                  value={result.conservativeRent}
                  color="emerald"
                />
                <SafeResultCard
                  title="Aggressive Limit"
                  value={result.aggressiveRent}
                  color="amber"
                />
              </div>

              {/* Pie Chart */}
              <div className="bg-white p-6 rounded-3xl border">
                <h3 className="font-bold mb-4">Monthly Income Breakdown</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={100}
                      >
                        {pieData.map((_, index) => (
                          <Cell key={index} fill={COLORS[index]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => {
                          const num = Number(value);
                          return [`$${num.toLocaleString()}`, "Amount"];
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Health Check */}
              <div className="bg-white p-6 rounded-3xl border">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Financial Health Check</h3>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase
                    ${result.status === "excellent" || result.status === "comfortable" ? "bg-emerald-100 text-emerald-700" :
                      result.status === "stretch" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>
                    {result.status}
                  </span>
                </div>

                <BreakdownTable
                  data={[
                    { label: "Gross Monthly Income", value: formatMoney(result.monthlyGross) },
                    { label: "Net Monthly Income", value: formatMoney(result.monthlyNet) },
                    { label: "Front-End DTI", value: `${result.frontEndDTI}%` },
                    { label: "Back-End DTI", value: `${result.backEndDTI}%` },
                    { label: "28% Rule Max", value: formatMoney(result.maxRent28Rule) },
                  ]}
                />

                <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                  {result.suggestedAction}
                </p>
              </div>
            </>
          ) : (
            <div className="h-[500px] flex items-center justify-center border-2 border-dashed rounded-3xl text-gray-400">
              Enter your income above to see results
            </div>
          )}
        </div>
      </div>
    </div>
  );
}