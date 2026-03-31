// components/ui/ResultBox.tsx
import React from "react";

interface ResultBoxProps {
  title: string;
  value: string | number;
  subtitle?: string;
  highlight?: boolean;
  color?: "green" | "blue" | "emerald" | "red" | "gray";
  size?: "normal" | "large";
  showCurrency?: boolean;
}

export default function ResultBox({
  title,
  value,
  subtitle,
  highlight = false,
  color = "blue",
  size = "normal",
  showCurrency = true,
}: ResultBoxProps) {
  const colorMap = {
    green: "text-green-600",
    blue: "text-blue-600",
    emerald: "text-emerald-600",
    red: "text-red-600",
    gray: "text-gray-800",
  };

  const bgMap = {
    green: "bg-green-50 border-green-200",
    blue: "bg-blue-50 border-blue-200",
    emerald: "bg-emerald-50 border-emerald-200",
    red: "bg-red-50 border-red-200",
    gray: "bg-gray-50 border-gray-200",
  };

  const textSize = size === "large" 
    ? "text-5xl md:text-6xl" 
    : "text-4xl md:text-5xl";

  // Clean value (remove $ if user already added)
  const cleanValue = typeof value === "string" 
    ? value.replace(/^\$+/, "") 
    : value;

  return (
    <div
      className={`rounded-3xl p-7 md:p-8 border transition-all duration-300 ${
        highlight 
          ? `${bgMap[color]} shadow-lg shadow-green-100` 
          : "bg-white border-gray-200 hover:shadow-md"
      }`}
    >
      <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wide uppercase">
        {title}
      </p>

      <p className={`font-bold tracking-tighter ${textSize} ${colorMap[color]}`}>
        {showCurrency && "$"}
        {typeof cleanValue === "number" 
          ? cleanValue.toLocaleString() 
          : cleanValue}
      </p>

      {subtitle && <p className="text-sm text-gray-500 mt-3">{subtitle}</p>}
    </div>
  );
}