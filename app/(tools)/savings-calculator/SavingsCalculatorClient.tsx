"use client";

import { useState, useEffect } from "react";
import { Copy, Check, TrendingUp, Target, Calendar, PieChart as PieIcon, DollarSign, ArrowUpRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateSavingsGoal, formatCompact, formatFull } from "@/lib/savingsCalculatorUtils";

export default function SavingsCalculatorClient() {
    const [targetAmount, setTargetAmount] = useState(50000);
    const [initialInvestment, setInitialInvestment] = useState(5000);
    const [monthlyContribution, setMonthlyContribution] = useState(500);
    const [annualInterestRate, setAnnualInterestRate] = useState(5);
    const [years, setYears] = useState(5);

    const [result, setResult] = useState<any>(null);
    const [copiedKey, setCopiedKey] = useState<string | null>(null);

    useEffect(() => {
        if (targetAmount >= 0) {
            const res = calculateSavingsGoal(
                targetAmount,
                initialInvestment,
                monthlyContribution,
                annualInterestRate,
                years
            );
            setResult(res);
        }
    }, [targetAmount, initialInvestment, monthlyContribution, annualInterestRate, years]);

    const copyToClipboard = (value: number | string, key: string) => {
        navigator.clipboard.writeText(value.toString());
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    const alreadyAchieved = result && result.goalAchieved && result.monthsToGoal === 0;

    // Pie Chart Data Mapping
    const chartData = result ? [
        { name: "Initial", value: initialInvestment, color: "#10b981" }, // Emerald 500
        { name: "Contributions", value: result.totalContributions, color: "#6366f1" }, // Indigo 500
        { name: "Total Interest", value: result.totalInterestEarned, color: "#f59e0b" }, // Amber 500
    ] : [];

    return (
        <div className="min-h-screen bg-slate-50/50 py-10 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">

                {/* SaaS Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Savings <span className="text-indigo-600">Pro</span> Planner
                        </h1>
                        <p className="text-slate-500 mt-2 text-lg">Precise financial forecasting with compound interest.</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2">
                            <Calendar size={16} /> {years} Year Projection
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">

                    {/* LEFT: INPUTS (SaaS Side Panel) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                                    <TrendingUp size={20} />
                                </div>
                                <h2 className="text-xl font-bold text-slate-800">Parameters</h2>
                            </div>

                            <div className="space-y-5">
                                <InputField label="Target Goal" value={targetAmount} onChange={(v) => setTargetAmount(Number(v) || 0)} prefix="$" type="number" />
                                <InputField label="Initial Deposit" value={initialInvestment} onChange={(v) => setInitialInvestment(Number(v) || 0)} prefix="$" type="number" />
                                <InputField label="Monthly Savings" value={monthlyContribution} onChange={(v) => setMonthlyContribution(Number(v) || 0)} prefix="$" type="number" />
                                <div className="grid grid-cols-2 gap-4">
                                    <InputField label="APY (%)" value={annualInterestRate} onChange={(v) => setAnnualInterestRate(Number(v) || 0)} suffix="%" type="number" />
                                    <InputField label="Years" value={years} onChange={(v) => setYears(Number(v) || 0)} type="number" />
                                </div>
                            </div>
                        </div>

                        {/* Status Card */}
                        {result && (
                            <div className={`p-5 rounded-2xl border flex items-center gap-4 ${alreadyAchieved ? "bg-blue-50 border-blue-100 text-blue-700" :
                                    result.goalAchieved ? "bg-emerald-50 border-emerald-100 text-emerald-700" :
                                        "bg-amber-50 border-amber-100 text-amber-700"
                                }`}>
                                <div className="p-3 bg-white rounded-xl shadow-sm">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider font-bold opacity-70">Goal Status</p>
                                    <p className="font-bold text-lg">
                                        {alreadyAchieved ? "Goal Achieved!" : result.goalAchieved ? "On Track" : "Action Required"}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: DASHBOARD */}
                    <div className="lg:col-span-8 space-y-6">
                        {result && (
                            <>
                                {/* Stat Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group">
                                        <button
                                            onClick={() => copyToClipboard(result.finalAmount, 'final')}
                                            className="absolute top-4 right-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            {copiedKey === 'final' ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                                        </button>
                                        <p className="text-sm font-medium text-slate-500 mb-1">Total Balance</p>
                                        <h3 className="text-3xl font-bold text-slate-900">${formatCompact(result.finalAmount)}</h3>
                                        <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                                            <ArrowUpRight size={12} /> Projected in {years}y
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                        <p className="text-sm font-medium text-slate-500 mb-1">Interest Profit</p>
                                        <h3 className="text-3xl font-bold text-emerald-600">+${formatCompact(result.totalInterestEarned)}</h3>
                                        <p className="text-xs text-emerald-600/70 mt-2 font-medium">Free Money Earned</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                        <p className="text-sm font-medium text-slate-500 mb-1">Monthly Required</p>
                                        <h3 className="text-3xl font-bold text-indigo-600">${formatCompact(result.monthlySavingsRequired)}</h3>
                                        <p className="text-xs text-indigo-600/70 mt-2 font-medium">To hit ${formatCompact(targetAmount)}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Chart Section */}
                                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
                                        <h3 className="text-lg font-bold text-slate-800 self-start mb-4 flex items-center gap-2">
                                            <PieIcon size={18} className="text-indigo-500" /> Investment Breakdown
                                        </h3>
                                        <ResponsiveContainer width="100%" height={300}>
                                            <PieChart>
                                                <Pie
                                                    data={chartData}
                                                    innerRadius={80}
                                                    outerRadius={110}
                                                    paddingAngle={5}
                                                    dataKey="value"
                                                >
                                                    {chartData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Pie>
                                                <Tooltip
                                                    formatter={(value: any) => [`$${Number(value).toLocaleString()}`, "Amount"]}
                                                    contentStyle={{
                                                        borderRadius: "12px",
                                                        border: "none",
                                                        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)"
                                                    }}
                                                />
                                                <Legend verticalAlign="bottom" height={36} />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>

                                    {/* Detailed Breakdown with Copy Options */}
                                    <div className="relative group">
                                        <BreakdownTable
                                            title="SaaS Standard Breakdown"
                                            data={[
                                                {
                                                    label: "Target Goal",
                                                    value: (
                                                        <div className="flex items-center gap-2 group">
                                                            ${formatCompact(targetAmount)}
                                                            <button
                                                                onClick={() => copyToClipboard(targetAmount, "target")}
                                                                className="opacity-0 group-hover:opacity-100 transition"
                                                            >
                                                                {copiedKey === "target" ? (
                                                                    <Check size={14} className="text-green-600" />
                                                                ) : (
                                                                    <Copy size={14} className="text-gray-400 hover:text-indigo-600" />
                                                                )}
                                                            </button>
                                                        </div>
                                                    ) as unknown as string // ✅ FIX
                                                },
                                                {
                                                    label: "Initial Investment",
                                                    value: (
                                                        <div className="flex items-center gap-2 group">
                                                            ${formatCompact(result.breakdown.initialInvestment)}
                                                            <button
                                                                onClick={() =>
                                                                    copyToClipboard(result.breakdown.initialInvestment, "initial")
                                                                }
                                                                className="opacity-0 group-hover:opacity-100 transition"
                                                            >
                                                                {copiedKey === "initial" ? (
                                                                    <Check size={14} className="text-green-600" />
                                                                ) : (
                                                                    <Copy size={14} className="text-gray-400 hover:text-indigo-600" />
                                                                )}
                                                            </button>
                                                        </div>
                                                    ) as unknown as string
                                                },
                                                {
                                                    label: "Total Contributions",
                                                    value: (
                                                        <div className="flex items-center gap-2 group">
                                                            ${formatCompact(result.totalContributions)}
                                                            <button
                                                                onClick={() =>
                                                                    copyToClipboard(result.totalContributions, "contributions")
                                                                }
                                                                className="opacity-0 group-hover:opacity-100 transition"
                                                            >
                                                                {copiedKey === "contributions" ? (
                                                                    <Check size={14} className="text-green-600" />
                                                                ) : (
                                                                    <Copy size={14} className="text-gray-400 hover:text-indigo-600" />
                                                                )}
                                                            </button>
                                                        </div>
                                                    ) as unknown as string,
                                                    color: "indigo"
                                                },
                                                {
                                                    label: "Interest Earned",
                                                    value: (
                                                        <div className="flex items-center gap-2 group">
                                                            ${formatCompact(result.totalInterestEarned)}
                                                            <button
                                                                onClick={() =>
                                                                    copyToClipboard(result.totalInterestEarned, "interest")
                                                                }
                                                                className="opacity-0 group-hover:opacity-100 transition"
                                                            >
                                                                {copiedKey === "interest" ? (
                                                                    <Check size={14} className="text-green-600" />
                                                                ) : (
                                                                    <Copy size={14} className="text-gray-400 hover:text-indigo-600" />
                                                                )}
                                                            </button>
                                                        </div>
                                                    ) as unknown as string,
                                                    color: "green"
                                                },
                                                {
                                                    label: "Final Portfolio Value",
                                                    value: (
                                                        <div className="flex items-center gap-2 group">
                                                            ${formatCompact(result.finalAmount)}
                                                            <button
                                                                onClick={() => copyToClipboard(result.finalAmount, "total")}
                                                                className="opacity-0 group-hover:opacity-100 transition"
                                                            >
                                                                {copiedKey === "total" ? (
                                                                    <Check size={14} className="text-green-600" />
                                                                ) : (
                                                                    <Copy size={14} className="text-gray-400 hover:text-indigo-600" />
                                                                )}
                                                            </button>
                                                        </div>
                                                    ) as unknown as string,
                                                    highlight: true,
                                                    color: "green"
                                                }
                                            ]}
                                        />
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