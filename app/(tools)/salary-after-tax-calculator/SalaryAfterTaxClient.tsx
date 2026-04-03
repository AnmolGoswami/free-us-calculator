"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateSalaryAfterTax } from "@/lib/salaryTaxUtils";

export default function SalaryAfterTaxClient() {
  const [salary, setSalary] = useState(80000);
  const [stateTax, setStateTax] = useState(5);

  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (salary > 0) {
      const res = calculateSalaryAfterTax(salary, stateTax);
      setResult(res);
    }
  }, [salary, stateTax]);

  return (
    <div className="grid lg:grid-cols-2 gap-10 p-8">

      {/* INPUTS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Enter Salary Details
        </h2>

        <InputField
          label="Annual Salary ($)"
          value={salary}
          onChange={setSalary}
        />

        <InputField
          label="State Tax (%)"
          value={stateTax}
          onChange={setStateTax}
        />
      </div>

      {/* RESULTS */}
      <div className="space-y-6">
        {result && (
          <>
            {/* MAIN RESULT */}
            <ResultBox
              title="Take-Home Salary (Yearly)"
              value={`$${result.net.yearly.toFixed(0)}`}
              highlight
              color="green"
            />

            {/* SECONDARY RESULTS */}
            <div className="grid grid-cols-2 gap-4">
              <ResultBox
                title="Monthly Take-Home"
                value={`$${result.net.monthly.toFixed(0)}`}
              />
              <ResultBox
                title="Total Tax"
                value={`$${result.tax.total.toFixed(0)}`}
                color="red"
              />
            </div>

            {/* BREAKDOWN TABLE */}
            <BreakdownTable
              title="Tax Breakdown"
              data={[
                {
                  label: "Gross Salary",
                  value: `$${result.gross.yearly.toFixed(0)}`,
                },
                {
                  label: "Federal Tax",
                  value: `$${result.tax.federal.toFixed(0)}`,
                  color: "red",
                },
                {
                  label: "State Tax",
                  value: `$${result.tax.state.toFixed(0)}`,
                  color: "red",
                },
                {
                  label: "FICA (SS + Medicare)",
                  value: `$${result.tax.fica.toFixed(0)}`,
                  color: "red",
                },
                {
                  label: "Total Tax",
                  value: `$${result.tax.total.toFixed(0)}`,
                  highlight: true,
                  color: "red",
                },
                {
                  label: "Net Salary",
                  value: `$${result.net.yearly.toFixed(0)}`,
                  highlight: true,
                  color: "green",
                },
              ]}
            />

            {/* INFO */}
            <div className="bg-gray-50 p-4 rounded-xl text-xs text-gray-500">
              Includes federal tax brackets, Social Security (6.2%), Medicare (1.45%), 
              and estimated state tax. Actual results may vary based on deductions and filing status.
            </div>
          </>
        )}
      </div>
    </div>
  );
}