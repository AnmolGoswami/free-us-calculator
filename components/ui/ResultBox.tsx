// components/ui/ResultBox.tsx
import React from "react";

interface ResultBoxProps {
  title: string;
  value: string | number;
  subtitle?: string;
  highlight?: boolean;
  color?: "blue" | "green" | "emerald" | "red" | "gray";
  showCurrency?: boolean;
}

export default function ResultBox({
  title,
  value,
  subtitle,
  highlight = false,
  color = "blue",
  showCurrency = false,
}: ResultBoxProps) {
  const colorMap = {
    blue: "text-blue-600",
    green: "text-green-600",
    emerald: "text-emerald-600",
    red: "text-red-600",
    gray: "text-gray-800",
  };

  const bgMap = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    emerald: "bg-emerald-50 border-emerald-200",
    red: "bg-red-50 border-red-200",
    gray: "bg-gray-50 border-gray-200",
  };

  return (
    <div
      className={`rounded-3xl p-7 border transition-all duration-200 ${
        highlight 
          ? `${bgMap[color]} shadow-md` 
          : "bg-white border-gray-200 shadow-sm hover:shadow"
      }`}
    >
      <p className="text-sm font-medium text-gray-500 mb-3">{title}</p>

      <p className={`text-4xl md:text-5xl font-bold tracking-tighter ${colorMap[color]}`}>
        {showCurrency && "$"}
        {typeof value === "number" ? value.toLocaleString() : value}
      </p>

      {subtitle && (
        <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
      )}
    </div>
  );
}