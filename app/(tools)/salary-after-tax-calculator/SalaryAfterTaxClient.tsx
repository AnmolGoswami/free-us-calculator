"use client";

import React, { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import {
  calculateSalaryAfterTax,
  type FilingStatus,
  type StateCode,
} from "@/lib/salaryTaxUtils";
import { ALL_US_STATES } from "@/constants/taxBrackets";
import { Copy, Check } from "lucide-react";

// ================= FORMATTER =================
function formatCompact(value: number) {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(2)}K`;
  return value.toFixed(2);
}

function formatFull(value: number) {
  return value.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
}

// ================= COPY COMPONENT =================
function CopyValue({ value }: { value: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(formatFull(value));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 rounded-lg hover:bg-gray-100 transition"
    >
      {copied ? (
        <Check size={16} className="text-green-500" />
      ) : (
        <Copy size={16} className="text-gray-500" />
      )}
    </button>
  );
}

export default function SalaryAfterTaxClient() {
  const [salary, setSalary] = useState<number>(120000);
  const [filingStatus, setFilingStatus] =
    useState<FilingStatus>("single");
  const [stateCode, setStateCode] = useState<StateCode>("TX");
  const [preTaxDeductions, setPreTaxDeductions] =
    useState<number>(15000);
  const [taxCredits, setTaxCredits] = useState<number>(2000);

  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (salary > 0) {
      const res = calculateSalaryAfterTax(
        salary,
        filingStatus,
        stateCode,
        preTaxDeductions,
        taxCredits
      );
      setResult(res);
    }
  }, [salary, filingStatus, stateCode, preTaxDeductions, taxCredits]);

  const selectedState = ALL_US_STATES.find(
    (s) => s.code === stateCode
  );

  return (
    <div className="grid lg:grid-cols-2 gap-6 md:gap-10 p-4 md:p-8 max-w-7xl mx-auto">
      {/* ================= INPUT ================= */}
      <div className="space-y-6 md:space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Salary After Tax Calculator
          </h2>
          <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
            Estimated 2026 Tax Calculation
          </p>
        </div>

        <InputField
          label="Annual Gross Salary"
          value={salary}
          onChange={(val) => setSalary(Number(val) || 0)}
          onNumberChange={setSalary}
          parseAsNumber
          type="number"
          prefix="$"
        />

        {/* Filing Status */}
        <select
          value={filingStatus}
          onChange={(e) =>
            setFilingStatus(e.target.value as FilingStatus)
          }
          className="w-full p-3 md:p-4 border rounded-2xl text-sm md:text-lg"
        >
          <option value="single">Single</option>
          <option value="marriedJoint">
            Married Filing Jointly
          </option>
          <option value="headOfHousehold">
            Head of Household
          </option>
          <option value="marriedSeparate">
            Married Filing Separately
          </option>
        </select>

        {/* State */}
        <select
          value={stateCode}
          onChange={(e) =>
            setStateCode(e.target.value as StateCode)
          }
          className="w-full p-3 md:p-4 border rounded-2xl text-sm md:text-lg"
        >
          {ALL_US_STATES.map((state) => (
            <option key={state.code} value={state.code}>
              {state.name} ({state.code})
            </option>
          ))}
        </select>

        {selectedState?.hasLocalTax && (
          <p className="text-amber-600 text-sm">
            ⚠️ Local taxes may apply
          </p>
        )}

        <InputField
          label="Pre-tax Deductions"
          value={preTaxDeductions}
          onChange={(val) =>
            setPreTaxDeductions(Number(val) || 0)
          }
          onNumberChange={setPreTaxDeductions}
          parseAsNumber
          type="number"
          prefix="$"
        />

        <InputField
          label="Tax Credits"
          value={taxCredits}
          onChange={(val) =>
            setTaxCredits(Number(val) || 0)
          }
          onNumberChange={setTaxCredits}
          parseAsNumber
          type="number"
          prefix="$"
        />
      </div>

      {/* ================= RESULT ================= */}
      <div className="space-y-5 md:space-y-6">
        {result && (
          <>
            {/* MAIN CARD */}
            <div className="bg-white border rounded-3xl p-5 md:p-8 shadow-sm">
              <p className="text-sm text-gray-500">
                Net Take-Home Pay
              </p>

              <div className="flex items-center gap-2 mt-2">
                <h1 className="text-2xl md:text-4xl font-bold text-green-600 break-all">
                  ${formatCompact(result.net.yearly)}
                </h1>
                <CopyValue value={result.net.yearly} />
              </div>

              <p className="text-xs text-gray-400 mt-1">
                ${formatFull(result.net.yearly)}
              </p>
            </div>

            {/* SMALL CARDS */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white border rounded-2xl p-4">
                <p className="text-xs text-gray-500">
                  Monthly
                </p>
                <div className="flex items-center gap-1">
                  <p className="font-semibold text-lg break-all">
                    ${formatCompact(result.net.monthly)}
                  </p>
                  <CopyValue value={result.net.monthly} />
                </div>
              </div>

              <div className="bg-white border rounded-2xl p-4">
                <p className="text-xs text-gray-500">
                  Effective Tax
                </p>
                <p className="font-semibold text-lg text-red-500">
                  {result.effectiveRate}%
                </p>
              </div>
            </div>

            {/* BREAKDOWN TABLE */}
            <div className="overflow-x-auto">
              <BreakdownTable
                title="Tax Breakdown"
                data={[
                  {
                    label: "Gross Salary",
                    value: `$${formatFull(result.gross.yearly)}`,
                  },
                  {
                    label: "Adjusted Gross Income",
                    value: `$${formatFull(
                      result.adjustedGross
                    )}`,
                  },
                  {
                    label: "Taxable Income",
                    value: `$${formatFull(
                      result.taxableIncome
                    )}`,
                  },
                  {
                    label: "Federal Tax",
                    value: `$${formatFull(
                      result.tax.federal
                    )}`,
                    color: "red",
                  },
                  {
                    label: "State Tax",
                    value: `$${formatFull(result.tax.state)}`,
                    color: "red",
                  },
                  {
                    label: "FICA",
                    value: `$${formatFull(result.tax.fica)}`,
                    color: "red",
                  },
                  {
                    label: "Total Tax",
                    value: `$${formatFull(result.tax.total)}`,
                    highlight: true,
                    color: "red",
                  },
                  {
                    label: "Net Salary",
                    value: `$${formatFull(result.net.yearly)}`,
                    highlight: true,
                    color: "green",
                  },
                ]}
              />
            </div>

            {/* MONTHLY */}
            <div className="bg-white border rounded-3xl p-5 md:p-6">
              <h3 className="font-semibold mb-3">
                Monthly Breakdown
              </h3>

              <div className="grid grid-cols-2 gap-y-3 text-sm">
                {[
                  ["Federal", result.monthlyBreakdown.federal],
                  ["State", result.monthlyBreakdown.state],
                  ["FICA", result.monthlyBreakdown.fica],
                  ["Net", result.monthlyBreakdown.net],
                ].map(([label, val]) => (
  <React.Fragment key={label}>
    <div>{label}</div>
    <div className="text-right font-medium break-all flex justify-end items-center gap-1">
      ${formatCompact(val as number)}
    </div>
  </React.Fragment>
))}
              </div>
            </div>

            {result.estimatedStateTax && (
              <div className="bg-amber-50 border border-amber-300 text-amber-700 p-4 rounded-2xl text-sm">
                ⚠️ State tax is estimated.
              </div>
            )}

            <div className="text-xs text-gray-500 bg-gray-50 p-4 rounded-2xl">
              Includes federal + FICA • Standard deduction applied •
              Values rounded for display
            </div>
          </>
        )}
      </div>
    </div>
  );
}