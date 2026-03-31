"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import { calculateRentAffordability } from "@/lib/costUtils";

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
            <ResultBox
              title="Recommended Rent"
              value={`$${result?.recommendedRent?.toFixed(0) || 0}`}
              highlight
              color="green"
            />

            <ResultBox
              title="Max Rent (30% Rule)"
              value={`$${result?.maxBy30Rule?.toFixed(0) || 0}`}
            />

            <ResultBox
              title="After Debt Adjustment"
              value={`$${result?.maxAfterDebts?.toFixed(0) || 0}`}
              color="red"
            />

            <div className="bg-gray-50 p-4 rounded-xl text-xs text-gray-500">
              Based on the 30% rule commonly used in the United States. 
              Debt obligations reduce your safe rent affordability range.
            </div>
          </>
        )}
      </div>
    </div>
  );
}