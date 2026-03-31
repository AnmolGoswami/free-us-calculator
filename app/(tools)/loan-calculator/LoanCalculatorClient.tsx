"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateLoanEMI } from "@/lib/costUtils";

export default function LoanCalculatorClient() {
  const [principal, setPrincipal] = useState<number>(25000);
  const [annualRate, setAnnualRate] = useState<number>(6.5);
  const [tenureYears, setTenureYears] = useState<number>(5);

  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (principal > 0 && annualRate >= 0 && tenureYears > 0) {
      const emiResult = calculateLoanEMI(principal, annualRate, tenureYears);
      setResult(emiResult);
    }
  }, [principal, annualRate, tenureYears]);

  return (
    <div className="grid lg:grid-cols-2 gap-10 p-8">
      
      {/* INPUTS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Loan Details
        </h2>

        <InputField
          label="Loan Amount ($)"
          value={principal}
          onChange={setPrincipal}
        />

        <InputField
          label="Interest Rate (% per year)"
          value={annualRate}
          onChange={setAnnualRate}
        />

        <InputField
          label="Loan Tenure (Years)"
          value={tenureYears}
          onChange={setTenureYears}
        />
      </div>

      {/* RESULTS */}
      <div className="space-y-6">
        {result && (
          <>
            {/* MAIN RESULT */}
            <ResultBox
              title="Monthly Payment (EMI)"
              value={`$${result.monthlyPayment.toLocaleString()}`}
              highlight
            />

            {/* SECONDARY */}
            <ResultBox
              title="Total Payment"
              value={`$${result.totalPayment.toLocaleString()}`}
            />

            <ResultBox
              title="Total Interest"
              value={`$${result.totalInterest.toLocaleString()}`}
              color="red"
            />

            {/* BREAKDOWN */}
            <BreakdownTable
              title="Loan Breakdown"
              data={[
                {
                  label: "Loan Amount",
                  value: `$${principal.toLocaleString()}`,
                },
                {
                  label: "Total Interest",
                  value: `$${result.totalInterest.toLocaleString()}`,
                  color: "red",
                },
                {
                  label: "Total Payable",
                  value: `$${result.totalPayment.toLocaleString()}`,
                  highlight: true,
                },
                {
                  label: "Loan Tenure",
                  value: `${tenureYears} years (${tenureYears * 12} months)`,
                },
              ]}
            />

            {/* INFO */}
            <div className="bg-gray-50 p-4 rounded-xl text-xs text-gray-500">
              EMI calculated using standard US loan formula. Rates may vary based on lender, credit score, and loan type.
            </div>
          </>
        )}
      </div>
    </div>
  );
}