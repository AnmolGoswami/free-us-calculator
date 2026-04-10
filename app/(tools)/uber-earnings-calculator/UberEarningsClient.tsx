"use client";

import { useState, useEffect, useMemo } from "react";
import { Copy, Check, Car, TrendingUp, AlertTriangle, Gauge } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateUberEarnings } from "@/lib/uberEarningsUtils";

export default function UberEarningsClient() {
    const [hoursWorked, setHoursWorked] = useState<number>(40);
    const [grossEarnings, setGrossEarnings] = useState<number>(1800);
    const [totalTips, setTotalTips] = useState<number>(450);
    const [totalExpenses, setTotalExpenses] = useState<number>(650);
    const [filingStatus, setFilingStatus] = useState<
        "single" | "marriedJoint" | "headOfHousehold" | "marriedSeparate"
    >("single");

    const [result, setResult] = useState<any>(null);
    const [copiedField, setCopiedField] = useState<string | null>(null);

    useEffect(() => {
        try {
            const res = calculateUberEarnings({
                hoursWorked,
                grossEarningsFromUber: grossEarnings,
                totalTips,
                totalExpenses,
                filingStatus,
            });
            setResult(res);
        } catch (e) {
            console.error(e);
            setResult(null);
        }
    }, [hoursWorked, grossEarnings, totalTips, totalExpenses, filingStatus]);

    const formatDisplay = (num: number) => {
        return new Intl.NumberFormat("en-US", {
            notation: num > 9999 ? "compact" : "standard",
            compactDisplay: "short",
            maximumFractionDigits: 1,
        }).format(num);
    };

    const formatFull = (num: number) =>
        num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const copy = (value: number | string, key: string) => {
        const textToCopy = typeof value === "number" ? value.toFixed(2) : value;
        navigator.clipboard.writeText(textToCopy);
        setCopiedField(key);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const chartData = useMemo(() => {
        if (!result) return [];
        return [
            { name: "Take Home", value: result.takeHomePay, color: "#f59e0b" },
            { name: "Expenses", value: totalExpenses, color: "#94a3b8" },
            { name: "Total Taxes", value: result.totalTaxBurden, color: "#ef4444" },
        ];
    }, [result, totalExpenses]);

    return (
        <div className="min-h-screen bg-slate-50/50 text-slate-900 py-10 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-[10px] font-bold uppercase tracking-widest mb-4">
                            <Car size={14} /> Rideshare Intelligence
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                            Uber <span className="text-amber-500">Earnings</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="text-right">
                            <p className="text-slate-500 text-xs font-bold uppercase">Estimated Take Home</p>
                            <p className="text-2xl font-bold text-slate-900">
                                {result ? `$${formatDisplay(result.takeHomePay)}` : "$0"}
                            </p>
                        </div>
                        <button
                            onClick={() => result && copy(result.takeHomePay, "header-copy")}
                            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-all"
                        >
                            {copiedField === "header-copy" ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
                        </button>
                    </div>
                </header>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* INPUTS */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                                <Gauge size={20} className="text-amber-500" /> Drive Parameters
                            </h2>

                            <div className="space-y-5">
                                <InputField
                                    label="Weekly Hours"
                                    value={hoursWorked}
                                    onChange={() => { }} // required by component
                                    onNumberChange={setHoursWorked}
                                    parseAsNumber
                                    type="number"
                                    suffix="hrs"
                                />

                                <InputField
                                    label="Gross Earnings"
                                    value={grossEarnings}
                                    onChange={() => { }}
                                    onNumberChange={setGrossEarnings}
                                    parseAsNumber
                                    type="number"
                                    prefix="$"
                                />

                                <InputField
                                    label="Tips Received"
                                    value={totalTips}
                                    onChange={() => { }}
                                    onNumberChange={setTotalTips}
                                    parseAsNumber
                                    type="number"
                                    prefix="$"
                                />

                                <InputField
                                    label="Total Expenses"
                                    value={totalExpenses}
                                    onChange={() => { }}
                                    onNumberChange={setTotalExpenses}
                                    parseAsNumber
                                    type="number"
                                    prefix="$"
                                />

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Tax Filing Status</label>
                                    <select
                                        value={filingStatus}
                                        onChange={(e) => setFilingStatus(e.target.value as any)}
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none transition-all font-medium"
                                    >
                                        <option value="single">Single</option>
                                        <option value="marriedJoint">Married Joint</option>
                                        <option value="headOfHousehold">Head of Household</option>
                                        <option value="marriedSeparate">Married Separate</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DASHBOARD */}
                    <div className="lg:col-span-8 space-y-6">
                        {result && (
                            <>
                                {/* PRIMARY STATS */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm group relative">
                                        <p className="text-slate-500 text-xs font-bold uppercase mb-1">Effective Hourly</p>
                                        <div className="flex items-end gap-2">
                                            <h3 className="text-3xl font-bold text-slate-900">
                                                ${formatDisplay(result.effectiveHourlyRate)}
                                            </h3>
                                            <button
                                                onClick={() => copy(result.effectiveHourlyRate, "hr")}
                                                className="mb-1 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-amber-600 transition"
                                            >
                                                {copiedField === "hr" ? <Check size={14} /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
                                        <p className="text-slate-500 text-xs font-bold uppercase mb-1">Net Profit</p>
                                        <div className="flex items-end gap-2 text-emerald-600">
                                            <h3 className="text-3xl font-bold">${formatDisplay(result.netProfitBeforeTax)}</h3>
                                        </div>
                                    </div>

                                    <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
                                        <p className="text-slate-500 text-xs font-bold uppercase mb-1">Total Tax Burden</p>
                                        <div className="flex items-end gap-2 text-rose-600">
                                            <h3 className="text-3xl font-bold">${formatDisplay(result.totalTaxBurden)}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* CHART */}
                                    <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex flex-col items-center">
                                        <h3 className="text-lg font-bold text-slate-800 self-start mb-6 flex items-center gap-2">
                                            <TrendingUp size={18} className="text-amber-500" /> Revenue Allocation
                                        </h3>
                                        <ResponsiveContainer width="100%" height={250}>
                                            <PieChart>
                                                <Pie
                                                    data={chartData}
                                                    innerRadius={60}
                                                    outerRadius={85}
                                                    paddingAngle={5}
                                                    dataKey="value"
                                                    stroke="none"
                                                >
                                                    {chartData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Pie>
                                                <Tooltip
                                                    contentStyle={{
                                                        backgroundColor: "#fff",
                                                        border: "1px solid #e2e8f0",
                                                        borderRadius: "12px",
                                                        fontSize: "12px",
                                                    }}
                                                    formatter={(value: any, name: any) => {
                                                        const num = typeof value === "number" ? value : Number(value) || 0;
                                                        return [`$${formatFull(num)}`, name];
                                                    }}
                                                />
                                                <Legend iconType="circle" wrapperStyle={{ fontSize: "12px" }} />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>

                                    {/* ITEMIZED TABLE */}
                                    <div className="space-y-4">
                                        <BreakdownTable
                                            title="Itemized Earnings"
                                            data={[
                                                {
                                                    label: "Gross Revenue",
                                                    value: `$${formatDisplay(result.totalRevenue)}`,
                                                },
                                                {
                                                    label: "Operating Expenses",
                                                    value: `-$${formatDisplay(result.totalExpenses)}`,
                                                    color: "red",
                                                },
                                                {
                                                    label: "SE Tax Estimate",
                                                    value: `-$${formatDisplay(result.estimatedSETax)}`,
                                                    color: "red",
                                                },
                                                {
                                                    label: "Income Tax Estimate",
                                                    value: `-$${formatDisplay(result.estimatedFederalIncomeTax)}`,
                                                    color: "red",
                                                },
                                                {
                                                    label: "Take Home Pay",
                                                    value: `$${formatDisplay(result.takeHomePay)}`,
                                                    highlight: true,
                                                    color: "green",
                                                },
                                            ]}
                                        />

                                        {/* INSIGHT ALERT */}
                                        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 flex gap-3">
                                            <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                                            <div className="space-y-1">
                                                <p className="text-xs font-bold text-amber-800 uppercase tracking-tight">Financial Insight</p>
                                                <p className="text-[11px] text-amber-700 leading-relaxed">
                                                    Your current effective rate is <strong>${formatFull(result.effectiveHourlyRate)}/hr</strong>.
                                                    The break-even rate required to cover expenses is <strong>${formatFull(result.breakEvenHourlyRate)}/hr</strong>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ==================== DETAILED FULL NUMBERS BOX ==================== */}
                                <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm mt-8">
                                    <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                                        📋 Full Precision Details (Copy Ready)
                                    </h3>
                                    <BreakdownTable
                                        title=""
                                        data={[
                                            {
                                                label: "Total Revenue",
                                                value: `$${formatFull(result.totalRevenue)}`,
                                            },
                                            {
                                                label: "Gross Earnings from Uber",
                                                value: `$${formatFull(Number(grossEarnings))}`,
                                            },
                                            {
                                                label: "Total Tips",
                                                value: `$${formatFull(Number(totalTips))}`,
                                            },
                                            {
                                                label: "Operating Expenses",
                                                value: `-$${formatFull(Number(totalExpenses))}`,
                                                color: "red",
                                            },
                                            {
                                                label: "Net Profit Before Tax",
                                                value: `$${formatFull(result.netProfitBeforeTax)}`,
                                            },
                                            {
                                                label: "Self-Employment Tax",
                                                value: `-$${formatFull(result.estimatedSETax)}`,
                                                color: "red",
                                            },
                                            {
                                                label: "Federal Income Tax",
                                                value: `-$${formatFull(result.estimatedFederalIncomeTax)}`,
                                                color: "red",
                                            },
                                            {
                                                label: "Total Tax Burden",
                                                value: `-$${formatFull(result.totalTaxBurden)}`,
                                                color: "red",
                                            },
                                            {
                                                label: "✅ Take Home Pay",
                                                value: `$${formatFull(result.takeHomePay)}`,
                                                highlight: true,
                                                color: "green",
                                            },
                                        ]}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}