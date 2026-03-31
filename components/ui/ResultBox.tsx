import React from "react";

interface ResultBoxProps {
  title: string;
  value: string | number;
  subtitle?: string;
  highlight?: boolean;
  color?: "indigo" | "green" | "red" | "gray";
}

export default function ResultBox({
  title,
  value,
  subtitle,
  highlight = false,
  color = "indigo",
}: ResultBoxProps) {
  const colorStyles = {
    indigo: "text-indigo-600",
    green: "text-green-600",
    red: "text-red-600",
    gray: "text-gray-800",
  };

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition ${
        highlight
          ? "bg-indigo-50 border-indigo-200 shadow-md"
          : "bg-white border-gray-200"
      }`}
    >
      <p className="text-sm text-gray-500 mb-2">{title}</p>

      <p
        className={`text-3xl md:text-4xl font-bold ${
          highlight ? colorStyles[color] : "text-gray-900"
        }`}
      >
        {value}
      </p>

      {subtitle && (
        <p className="text-xs text-gray-500 mt-2">{subtitle}</p>
      )}
    </div>
  );
}