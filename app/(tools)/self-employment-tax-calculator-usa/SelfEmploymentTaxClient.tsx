"use client";

import { useState, useMemo } from "react";
import { Copy, Check, TrendingUp, ShieldCheck, PieChart as PieIcon, ArrowDownRight, Wallet, ReceiptText, Info } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import {
  calculateSelfEmploymentTax,
  type FilingStatus,
  type SelfEmploymentTaxResult,
} from "@/lib/selfEmploymentTaxUtils";

export default function SelfEmploymentTaxClient() {
  const [grossIncome, setGrossIncome] = useState<number>(120000);
  const [businessExpenses, setBusinessExpenses] = useState<number>(25000);
  const [filingStatus, setFilingStatus] = useState<FilingStatus>("single");
  const [additionalDeductions, setAdditionalDeductions] = useState<number>(5000);
  const [taxCredits, setTaxCredits] = useState<number>(2000);

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const result: SelfEmploymentTaxResult | null = useMemo(() => {
    if (grossIncome <= 0) return null;
    return calculateSelfEmploymentTax(
      grossIncome,
      businessExpenses,
      filingStatus,
      additionalDeductions,
      taxCredits
    );
  }, [grossIncome, businessExpenses, filingStatus, additionalDeductions, taxCredits]);

  const copyToClipboard = async (value: number | string, field: string) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(value.toString());
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
      }
    } catch { /* silent fail */ }
  };

  const formatMoney = (amount: number) =>
    new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(amount);

  // Pie Chart Data: Allocation of Net Profit
  const chartData = result ? [
    { name: "Take Home Pay", value: result.netProfit - result.totalTaxBurden, color: "#10b981" }, // Green
    { name: "SE Tax", value: result.seTax, color: "#f59e0b" }, // Amber
    { name: "Federal Income Tax", value: result.estimatedIncomeTax, color: "#ef4444" }, // Red
  ] : [];

  return (
    <div className="min-h-screen bg-slate-50/50 py-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* SaaS Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 bg-amber-100 rounded-md text-amber-600">
                <ShieldCheck size={18} />
              </div>
              <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Tax Engine 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Self-Employment <span className="text-amber-600">Tax Optimizer</span>
            </h1>
            <p className="text-slate-500 mt-2 text-lg">Professional-grade estimator for 1099 contractors and S-Corp owners.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: INPUTS (Control Panel) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6 text-slate-800">
                <ReceiptText size={20} className="text-amber-500" />
                <h2 className="text-xl font-bold">Business Ledger</h2>
              </div>
              
              <div className="space-y-5">
                <InputField
                  label="Gross Revenue"
                  value={grossIncome}
                  onChange={(val) => setGrossIncome(Number(val) || 0)}
                  prefix="$"
                  type="number"
                />

                <InputField
                  label="Business Expenses"
                  value={businessExpenses}
                  onChange={(val) => setBusinessExpenses(Number(val) || 0)}
                  prefix="$"
                  type="number"
                  tooltip="Total deductible business operating costs."
                />

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-1">
                    Filing Status <Info size={14} className="text-slate-400" />
                  </label>
                  <select
                    value={filingStatus}
                    onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all text-slate-900 font-medium"
                  >
                    <option value="single">Single</option>
                    <option value="marriedJoint">Married Filing Jointly</option>
                    <option value="headOfHousehold">Head of Household</option>
                    <option value="marriedSeparate">Married Filing Separately</option>
                  </select>
                </div>

                <InputField
                  label="Additional Deductions"
                  value={additionalDeductions}
                  onChange={(val) => setAdditionalDeductions(Number(val) || 0)}
                  prefix="$"
                  type="number"
                />

                <InputField
                  label="Tax Credits"
                  value={taxCredits}
                  onChange={(val) => setTaxCredits(Number(val) || 0)}
                  prefix="$"
                  type="number"
                />
              </div>
            </div>

            {/* Insight Card */}
            {result && (
              <div className="bg-indigo-900 rounded-2xl p-6 text-white shadow-lg shadow-indigo-100 overflow-hidden relative">
                <div className="relative z-10">
                   <p className="text-indigo-200 text-sm font-medium mb-1">Estimated Take-Home</p>
                   <h3 className="text-3xl font-bold">${formatMoney(result.netProfit - result.totalTaxBurden)}</h3>
                   <div className="mt-4 flex items-center gap-2 text-xs bg-white/10 w-fit px-3 py-1.5 rounded-full backdrop-blur-md">
                      <Wallet size={14} /> After Federal & SE Taxes
                   </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                   <TrendingUp size={120} />
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: ANALYTICS DASHBOARD */}
          <div className="lg:col-span-8 space-y-6">
            {result && (
              <>
                {/* Top Stat Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group">
                    <button 
                      onClick={() => copyToClipboard(result.totalTaxBurden, 'total')}
                      className="absolute top-4 right-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copiedField === 'total' ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                    </button>
                    <p className="text-sm font-medium text-slate-500 mb-1">Total Tax Liability</p>
                    <h3 className="text-3xl font-bold text-rose-600">${formatMoney(result.totalTaxBurden)}</h3>
                    <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                      <ArrowDownRight size={12} className="text-rose-500" /> {result.effectiveTaxRate}% Effective Rate
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Net Profit</p>
                    <h3 className="text-3xl font-bold text-slate-900">${formatMoney(result.netProfit)}</h3>
                    <p className="text-xs text-emerald-600 mt-2 font-medium">After Business Expenses</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Quarterly Voucher</p>
                    <h3 className="text-3xl font-bold text-amber-600">${formatMoney(result.quarterlyEstimatedTax)}</h3>
                    <p className="text-xs text-slate-400 mt-2 font-medium">Estimated IRS Payment</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Visual Allocation Section */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center min-h-[450px]">
                    <h3 className="text-lg font-bold text-slate-800 self-start mb-2 flex items-center gap-2">
                      <PieIcon size={18} className="text-amber-500" /> Profit Allocation
                    </h3>
                    <p className="text-sm text-slate-500 self-start mb-6">Visualizing where your business income goes.</p>
                    
                    <ResponsiveContainer width="100%" height={280}>
                      <PieChart>
                        <Pie
                          data={chartData}
                          innerRadius={70}
                          outerRadius={100}
                          paddingAngle={8}
                          dataKey="value"
                          stroke="none"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(val: number) => [`$${formatMoney(val)}`, '']}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                        />
                        <Legend verticalAlign="bottom" iconType="circle" />
                      </PieChart>
                    </ResponsiveContainer>

                    <div className="mt-4 w-full pt-4 border-t border-slate-50 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">SE Tax Deduction:</span>
                            <span className="font-bold text-emerald-600">${formatMoney(result.deductibleSEPortion)}</span>
                        </div>
                    </div>
                  </div>

                  {/* Enhanced Detailed Table */}
                  <div className="relative">
                    <BreakdownTable
                      title="Itemized Tax Breakdown"
                      data={[
                        { 
                          label: "Gross Business Income", 
                          value: (
                            <div className="flex items-center gap-2">
                                ${formatMoney(result.grossIncome)}
                                <button onClick={() => copyToClipboard(result.grossIncome, 'gross')} className="text-slate-300 hover:text-amber-600 transition-colors">
                                    {copiedField === 'gross' ? <Check size={14}/> : <Copy size={14}/>}
                                </button>
                            </div>
                          ) 
                        },
                        { label: "Business Expenses", value: `-$${formatMoney(result.businessExpenses)}` },
                        { label: "Net Taxable Profit", value: `$${formatMoney(result.netProfit)}`, highlight: true },
                        { label: "Social Security (12.4%)", value: `$${formatMoney(result.socialSecurityTax)}`, color: "red" },
                        { label: "Medicare (2.9%)", value: `$${formatMoney(result.medicareTax)}`, color: "red" },
                        { label: "Total SE Tax", value: `$${formatMoney(result.seTax)}`, highlight: true, color: "red" },
                        { 
                          label: "Fed Income Tax (Est.)", 
                          value: (
                            <div className="flex items-center gap-2">
                                ${formatMoney(result.estimatedIncomeTax)}
                                <button onClick={() => copyToClipboard(result.estimatedIncomeTax, 'fed')} className="text-slate-300 hover:text-amber-600 transition-colors">
                                    {copiedField === 'fed' ? <Check size={14}/> : <Copy size={14}/>}
                                </button>
                            </div>
                          ),
                          color: "red" 
                        },
                        { 
                          label: "Total Tax Burden", 
                          value: `$${formatMoney(result.totalTaxBurden)}`, 
                          highlight: true, 
                          color: "red" 
                        },
                        { 
                          label: "Quarterly Estimated Payment", 
                          value: `$${formatMoney(result.quarterlyEstimatedTax)}`, 
                          color: "indigo" 
                        },
                      ]}
                    />
                    
                    <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3">
                        <Info size={18} className="text-amber-600 shrink-0" />
                        <p className="text-xs text-amber-800 leading-relaxed">
                            <strong>Note:</strong> Estimates based on {result.meta.taxYear} projections. Includes the 7.65% SE tax adjustment and standard deduction based on your {filingStatus} status.
                        </p>
                    </div>
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