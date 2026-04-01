// components/ui/ResultBox.tsx
import React from "react";

interface ResultBoxProps {
  title: string;
  value: string | number;
  subtitle?: string;
  highlight?: boolean;
  color?: "green" | "blue" | "emerald" | "red" | "gray";
  size?: "normal" | "large";
}

export default function ResultBox({
  title,
  value,
  subtitle,
  highlight = false,
  color = "blue",
  size = "normal",
}: ResultBoxProps) {
  const colorMap = {
    green: "text-green-600",
    blue: "text-blue-600",
    emerald: "text-emerald-600",
    red: "text-red-600",
    gray: "text-gray-900",
  };

  const textSize = size === "large" ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl";

  return (
    <div
      className={`rounded-3xl p-7 md:p-8 border transition-all duration-300 ${
        highlight
          ? "bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg"
          : "bg-white border-gray-200 hover:shadow-md"
      }`}
    >
      <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wide uppercase">
        {title}
      </p>

      <p className={`font-bold tracking-tighter ${textSize} ${colorMap[color]}`}>
        {typeof value === "string" ? value : value.toLocaleString()}
      </p>

      {subtitle && <p className="text-sm text-gray-500 mt-3">{subtitle}</p>}
    </div>
  );
}