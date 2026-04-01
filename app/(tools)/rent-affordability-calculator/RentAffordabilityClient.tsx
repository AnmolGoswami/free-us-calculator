"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateRentAffordability } from "@/lib/loanCalculator";

export default function RentAffordabilityClient() {
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [otherDebts, setOtherDebts] = useState(500);

  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (monthlyIncome > 0) {
      const res = calculateRentAffordability(
        monthlyIncome,
        otherDebts
      );
      setResult(res);
    }
  }, [monthlyIncome, otherDebts]);

  return (
    <div className="grid lg:grid-cols-2 gap-10 p-8">

      {/* INPUTS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Enter Your Financial Details
        </h2>

        <InputField
          label="Monthly Income ($)"
          value={monthlyIncome}
          onChange={setMonthlyIncome}
        />

        <InputField
          label="Monthly Debt ($)"
          value={otherDebts}
          onChange={setOtherDebts}
        />
      </div>

      {/* RESULTS */}
      <div className="space-y-6">
        {result && (
          <>
            {/* MAIN RESULT */}
            <ResultBox
              title="Recommended Rent"
              value={`$${result.recommendedRent.toFixed(0)}`}
              highlight
              color="green"
            />

            {/* SECONDARY */}
            <div className="grid grid-cols-2 gap-4">
              <ResultBox
                title="30% Rule Limit"
                value={`$${result.maxBy30Rule.toFixed(0)}`}
              />
              <ResultBox
                title="After Debt Limit"
                value={`$${result.maxAfterDebts.toFixed(0)}`}
                color="red"
              />
            </div>

            {/* BREAKDOWN */}
            <BreakdownTable
              title="Affordability Breakdown"
              data={[
                {
                  label: "Monthly Income",
                  value: `$${result.monthlyIncome.toFixed(0)}`,
                },
                {
                  label: "Monthly Debt",
                  value: `$${result.otherDebts.toFixed(0)}`,
                  color: "red",
                },
                {
                  label: "30% Rule",
                  value: `${result.rulePercentage}%`,
                },
                {
                  label: "Max Rent (30% Rule)",
                  value: `$${result.maxBy30Rule.toFixed(0)}`,
                },
                {
                  label: "Debt Adjusted Rent",
                  value: `$${result.maxAfterDebts.toFixed(0)}`,
                  color: "red",
                },
                {
                  label: "Recommended Rent",
                  value: `$${result.recommendedRent.toFixed(0)}`,
                  highlight: true,
                  color: "green",
                },
              ]}
            />

            {/* INFO */}
            <div className="bg-gray-50 p-4 rounded-xl text-xs text-gray-500">
              Uses the standard 30% income rule in the US. If you have existing debts,
              your safe rent budget is reduced to avoid financial stress.
            </div>
          </>
        )}
      </div>
    </div>
  );
}