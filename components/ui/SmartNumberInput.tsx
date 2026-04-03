"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SmartNumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  className?: string;
  suffix?: string;
  max?: number;
  min?: number;
  step?: number;
}

export default function SmartNumberInput({
  label,
  value,
  onChange,
  className = "",
  suffix = "",
  max,
  min = 0,
  step = 1000,
}: SmartNumberInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const [copied, setCopied] = useState(false);

  const formatShort = (num: number) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + "M";
    if (num >= 10000) return (num / 1000).toFixed(1) + "K";
    return num.toLocaleString();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    if (raw === "") return onChange(0);
    const num = parseFloat(raw);
    if (!isNaN(num)) {
      let final = Math.max(min, max !== undefined ? Math.min(max, num) : num);
      onChange(final);
    }
  };

  return (
    <>
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {label}
        </label>
        <div className="relative">
          <input
            type="text"
            value={isFocused ? value.toLocaleString() : formatShort(value)}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${className}`}
          />
          {suffix && (
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
              {suffix}
            </span>
          )}
        </div>
      </div>

      {/* Full Value Popup */}
      <AnimatePresence>
        {showFull && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setShowFull(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-10 w-full max-w-sm mx-4 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-slate-500 text-sm mb-3">{label}</p>
              <p className="text-6xl font-bold tracking-tighter text-slate-900 mb-8">
                ${value.toLocaleString()}
              </p>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(value.toFixed(2));
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex items-center justify-center gap-3 mx-auto bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-medium transition-all active:scale-95"
              >
                {copied ? <Check size={22} /> : <Copy size={22} />}
                {copied ? "Copied Full Amount" : "Copy Full Value"}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {!isFocused && value >= 10000 && (
        <button
          onClick={() => setShowFull(true)}
          className="absolute inset-0 z-10"
        />
      )}
    </>
  );
}