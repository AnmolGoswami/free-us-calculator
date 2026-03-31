import React from "react";

type Row = {
  label: string;
  value: string | number;
  highlight?: boolean;
  color?: "green" | "red" | "indigo" | "gray";
};

interface BreakdownTableProps {
  title?: string;
  data: Row[];
}

export default function BreakdownTable({
  title = "Breakdown",
  data,
}: BreakdownTableProps) {
  const colorMap = {
    green: "text-green-600",
    red: "text-red-600",
    indigo: "text-indigo-600",
    gray: "text-gray-900",
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {title}
      </h3>

      <div className="divide-y">
        {data.map((row, index) => (
          <div
            key={index}
            className={`flex justify-between py-3 ${
              row.highlight ? "font-semibold" : ""
            }`}
          >
            <span className="text-gray-600">{row.label}</span>

            <span
              className={`${
                row.color
                  ? colorMap[row.color]
                  : row.highlight
                  ? "text-indigo-600"
                  : "text-gray-900"
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}