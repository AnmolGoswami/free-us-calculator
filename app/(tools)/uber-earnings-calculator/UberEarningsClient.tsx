"use client";

import { useState, useEffect } from "react";
import { Copy, Check, Car, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateUberEarnings } from "@/lib/uberEarningsUtils";

export default function UberEarningsClient() {
  const [hoursWorked, setHoursWorked] = useState<number>(40);
  const [grossEarnings, setGrossEarnings] = useState<number>(1800);
  const [totalTips, setTotalTips] = useState<number>(450);
  const [totalExpenses, setTotalExpenses] = useState<number>(650);
  const [filingStatus, setFilingStatus] = useState<'single' | 'marriedJoint' | 'headOfHousehold' | 'marriedSeparate'>("single");

  const [result, setResult] = useState<any>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    if (hoursWorked > 0) {
      const res = calculateUberEarnings(
        hoursWorked,
        grossEarnings,
        totalTips,
        totalExpenses,
        filingStatus
      );
      setResult(res);
    }
  }, [hoursWorked, grossEarnings, totalTips, totalExpenses, filingStatus]);

  const copyToClipboard = (value: number | string, field: string) => {
    navigator.clipboard.writeText(value.toString());
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const formatMoney = (amount: number) => amount.toLocaleString('en-US');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Car className="w-4 h-4" /> Rideshare Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            Uber / Rideshare <span className="text-amber-400">Earnings Calculator</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Know your real hourly income after expenses, taxes &amp; self-employment tax — 2026 Ready
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ==================== INPUTS ==================== */}
          <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl space-y-8">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <Car className="text-amber-400" /> Trip Details
            </h2>

            <InputField
              label="Hours Worked This Period"
              value={hoursWorked}
              onChange={(v) => setHoursWorked(Number(v) || 0)}
              onNumberChange={setHoursWorked}
              parseAsNumber
              type="number"
              suffix="hours"
            />

            <InputField
              label="Gross Earnings from Uber"
              value={grossEarnings}
              onChange={(v) => setGrossEarnings(Number(v) || 0)}
              onNumberChange={setGrossEarnings}
              parseAsNumber
              type="number"
              prefix="$"
              tooltip="Amount shown in your Uber earnings statement (after Uber fee)"
            />

            <InputField
              label="Total Tips Received"
              value={totalTips}
              onChange={(v) => setTotalTips(Number(v) || 0)}
              onNumberChange={setTotalTips}
              parseAsNumber
              type="number"
              prefix="$"
            />

            <InputField
              label="Total Expenses (Gas, Maintenance, Insurance, etc.)"
              value={totalExpenses}
              onChange={(v) => setTotalExpenses(Number(v) || 0)}
              onNumberChange={setTotalExpenses}
              parseAsNumber
              type="number"
              prefix="$"
              tooltip="All deductible expenses during this period"
            />

            <div>
              <label className="block text-sm font-semibold text-zinc-400 mb-2">Filing Status</label>
              <select
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value as any)}
                className="w-full p-4 bg-zinc-800 border border-white/10 rounded-2xl focus:border-amber-400 text-white"
              >
                <option value="single">Single</option>
                <option value="marriedJoint">Married Filing Jointly</option>
                <option value="headOfHousehold">Head of Household</option>
                <option value="marriedSeparate">Married Filing Separately</option>
              </select>
            </div>
          </div>

          {/* ==================== RESULTS ==================== */}
          <div className="space-y-8">
            {result && (
              <>
                <ResultBox
                  title="REAL TAKE-HOME PAY"
                  value={result.takeHomePay}
                  highlight
                  color="emerald"
                  size="large"
                />

                <div className="grid grid-cols-2 gap-4">
                  <ResultBox
                    title="Effective Hourly Rate"
                    value={result.effectiveHourlyRate}
                    subtitle="After everything"
                    color="emerald"
                  />
                  <ResultBox
                    title="Break-Even Rate"
                    value={result.breakEvenHourlyRate}
                    subtitle="Just to cover expenses"
                    color="amber"
                  />
                </div>

                <BreakdownTable
                  title="Full Earnings Breakdown"
                  data={[
                    { label: "Gross Uber Earnings", value: `$${formatMoney(result.grossEarnings)}` },
                    { label: "Total Tips", value: `$${formatMoney(result.totalTips)}` },
                    { label: "Total Revenue", value: `$${formatMoney(result.totalRevenue)}`, highlight: true },
                    { label: "Total Expenses", value: `$${formatMoney(result.totalExpenses)}`, color: "red" },
                    { label: "Net Profit (Before Tax)", value: `$${formatMoney(result.netProfitBeforeTax)}` },
                    { label: "Self-Employment Tax", value: `$${formatMoney(result.estimatedSE Tax)}`, color: "red" },
                    { label: "Estimated Federal Tax", value: `$${formatMoney(result.estimatedFederalIncomeTax)}`, color: "red" },
                    { label: "Total Tax Burden", value: `$${formatMoney(result.totalTaxBurden)}`, highlight: true, color: "red" },
                    { label: "Final Take-Home Pay", value: `$${formatMoney(result.takeHomePay)}`, highlight: true, color: "emerald" },
                    { label: "Quarterly Estimated Tax", value: `$${formatMoney(result.quarterlyEstimatedTax)}` },
                  ]}
                />

                <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 md:p-8">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp className="text-amber-400" /> Key Insights
                  </h3>
                  <div className="space-y-3 text-sm text-zinc-300">
                    <p>• You earn <span className="text-emerald-400 font-medium">${result.breakdown.averageGrossPerHour}</span>/hr before expenses</p>
                    <p>• Your real hourly income after all taxes &amp; expenses is <span className="text-emerald-400 font-medium">${result.effectiveHourlyRate}</span></p>
                    {result.breakEvenHourlyRate > result.breakdown.averageGrossPerHour && (
                      <p className="text-rose-400 flex items-center gap-1">
                        <AlertTriangle size={16} /> You are currently driving at a loss
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}