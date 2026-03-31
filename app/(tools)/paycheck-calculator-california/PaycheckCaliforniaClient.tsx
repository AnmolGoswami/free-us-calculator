"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateCaliforniaPaycheck } from "@/lib/taxUtils";

export default function PaycheckCaliforniaClient() {
  const [salary, setSalary] = useState(80000);
  const [payFrequency, setPayFrequency] = useState(12); // monthly

  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const res = calculateCaliforniaPaycheck(salary, payFrequency);
    setResult(res);
  }, [salary, payFrequency]);

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

        {/* PAY FREQUENCY */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Pay Frequency
          </label>
          <select
            value={payFrequency}
            onChange={(e) => setPayFrequency(Number(e.target.value))}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value={52}>Weekly</option>
            <option value={26}>Bi-Weekly</option>
            <option value={24}>Semi-Monthly</option>
            <option value={12}>Monthly</option>
          </select>
        </div>
      </div>

      {/* RESULTS */}
      <div className="space-y-6">
        {result && (
          <>
            {/* MAIN RESULT */}
            <ResultBox
              title="Take-Home Pay"
              value={`$${result.net.toFixed(0)}`}
              highlight
              color="green"
            />

            {/* SECONDARY */}
            <ResultBox
              title="Gross Pay"
              value={`$${result.gross.toFixed(0)}`}
            />

            {/* BREAKDOWN */}
            <BreakdownTable
              title="Tax Breakdown"
              data={[
                {
                  label: "Federal Tax",
                  value: `$${result.federalTax.toFixed(0)}`,
                  color: "red",
                },
                {
                  label: "California State Tax",
                  value: `$${result.stateTax.toFixed(0)}`,
                  color: "red",
                },
                {
                  label: "FICA (SS + Medicare)",
                  value: `$${result.fica.toFixed(0)}`,
                  color: "red",
                },
                {
                  label: "Net Pay",
                  value: `$${result.net.toFixed(0)}`,
                  highlight: true,
                  color: "green",
                },
              ]}
            />

            {/* INFO */}
            <div className="bg-gray-50 p-4 rounded-xl text-xs text-gray-500">
              Includes federal income tax, California state tax, Social Security (6.2%), and Medicare (1.45%). Actual paycheck may vary based on deductions and filing status.
            </div>
          </>
        )}
      </div>
    </div>
  );
}