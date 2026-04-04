// lib/earningUtils.ts
// Production-ready Salary & Earnings Calculator (SaaS / Enterprise Level)

export type SalaryMode = "hourly-to-salary" | "salary-to-hourly" | "overtime";

export type CurrencyCode = "USD" | "EUR" | "GBP" | "INR" | "JPY";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  locale: string;
  fractionDigits: number;
}

export interface CalculationInput {
  mode: SalaryMode;
  hourlyRate?: number;
  annualSalary?: number;
  hoursPerWeek?: number;        // e.g., 40 (US/UK), 45-48 (India common)
  daysPerWeek?: number;         // NEW: flexible (5 or 6)
  overtimeHours?: number;       // per week
  overtimeMultiplier?: number;  // usually 1.5
  taxRatePercent?: number;      // flat effective rate (0-100)
  weeksPerYear?: number;        // usually 52, or 48-50 with holidays/PTO
  currency?: CurrencyCode;
}

export interface Breakdown {
  hourly: number;
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;
}

export interface Extras {
  perMinute: number;
  timeToEarn1000: number;        // minutes to earn 1,000 units
  timeToEarnOneLakh?: number;    // hours to earn ₹1,00,000 (INR only)
  effectiveHourlyNet: number;
}

export interface CalculationResult {
  gross: Breakdown;
  tax: Breakdown;
  net: Breakdown;
  summary: Breakdown;
  effectiveHourly: number;
  extras: Extras;
  percentages: {
    taxPercentage: number;
    netPercentage: number;
  };
  assumptions: {
    hoursPerWeek: number;
    daysPerWeek: number;
    weeksPerYear: number;
    totalAnnualHours: number;
    overtimeMultiplier: number;
  };
  currency: CurrencyConfig;
  calculationMethod: string;   // for transparency ("based on user hours × weeks")
}

// ================= CURRENCY CONFIG =================
const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$",  name: "US Dollar",      locale: "en-US", fractionDigits: 2 },
  EUR: { code: "EUR", symbol: "€",  name: "Euro",           locale: "de-DE", fractionDigits: 2 },
  GBP: { code: "GBP", symbol: "£",  name: "British Pound",  locale: "en-GB", fractionDigits: 2 },
  INR: { code: "INR", symbol: "₹",  name: "Indian Rupee",   locale: "en-IN", fractionDigits: 2 }, // Updated to 2 decimals
  JPY: { code: "JPY", symbol: "¥",  name: "Japanese Yen",   locale: "ja-JP", fractionDigits: 0 },
} as const;

export const getCurrencyConfig = (code: CurrencyCode = "INR"): CurrencyConfig =>
  CURRENCIES[code] || CURRENCIES.INR;

// ================= CONSTANTS =================
const DEFAULTS = {
  HOURS_PER_WEEK: 40,
  DAYS_PER_WEEK: 5,
  WEEKS_PER_YEAR: 52,
  OVERTIME_MULTIPLIER: 1.5,
  TAX_RATE_PERCENT: 0,
  CURRENCY: "INR" as CurrencyCode,
} as const;

// ================= HELPERS =================
const safe = (n?: number | null): number => Math.max(0, Number(n) || 0);

const round = (n: number, decimals: number): number =>
  Math.round(n * Math.pow(10, decimals)) / Math.pow(10, decimals);

const percentOf = (value: number, rate: number): number =>
  (value * safe(rate)) / 100;

export const formatCurrency = (amount: number, currencyCode: CurrencyCode = "INR"): string => {
  const config = getCurrencyConfig(currencyCode);
  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.code,
    minimumFractionDigits: config.fractionDigits,
    maximumFractionDigits: config.fractionDigits,
  }).format(round(amount, config.fractionDigits));
};

// ================= CORE FUNCTION =================
export function calculateEarnings(input: CalculationInput): CalculationResult {
  const {
    mode,
    hourlyRate = 0,
    annualSalary = 0,
    hoursPerWeek = DEFAULTS.HOURS_PER_WEEK,
    daysPerWeek = DEFAULTS.DAYS_PER_WEEK,
    overtimeHours = 0,
    overtimeMultiplier = DEFAULTS.OVERTIME_MULTIPLIER,
    taxRatePercent = DEFAULTS.TAX_RATE_PERCENT,
    weeksPerYear = DEFAULTS.WEEKS_PER_YEAR,
    currency = DEFAULTS.CURRENCY,
  } = input;

  const currencyConfig = getCurrencyConfig(currency);

  // ================= VALIDATION =================
  if (!mode) throw new Error("Mode is required");
  if (hoursPerWeek <= 0) throw new Error("hoursPerWeek must be greater than 0");
  if (daysPerWeek <= 0 || daysPerWeek > 7) throw new Error("daysPerWeek must be between 1 and 7");
  if (weeksPerYear <= 0) throw new Error("weeksPerYear must be greater than 0");
  if (taxRatePercent < 0 || taxRatePercent > 100) throw new Error("taxRatePercent must be between 0 and 100");

  if (mode === "hourly-to-salary" && safe(hourlyRate) <= 0) {
    throw new Error("hourlyRate is required and must be > 0 for hourly-to-salary mode");
  }
  if (mode === "salary-to-hourly" && safe(annualSalary) <= 0) {
    throw new Error("annualSalary is required and must be > 0 for salary-to-hourly mode");
  }
  if (mode === "overtime" && safe(hourlyRate) <= 0) {
    throw new Error("hourlyRate is required for overtime mode");
  }

  // ================= CALCULATION =================
  let yearlyGross = 0;
  let weeklyGross = 0;
  let hourlyGross = 0;

  const effHoursPerWeek = safe(hoursPerWeek);
  const effOvertimeHours = safe(overtimeHours);
  const effWeeksPerYear = safe(weeksPerYear);
  const totalAnnualHours = effHoursPerWeek * effWeeksPerYear;   // Consistent base

  switch (mode) {
    case "hourly-to-salary":
      hourlyGross = safe(hourlyRate);
      weeklyGross = hourlyGross * effHoursPerWeek;
      yearlyGross = weeklyGross * effWeeksPerYear;
      break;

    case "salary-to-hourly":
      yearlyGross = safe(annualSalary);
      weeklyGross = yearlyGross / effWeeksPerYear;
      hourlyGross = totalAnnualHours > 0 ? yearlyGross / totalAnnualHours : 0;
      break;

    case "overtime":
      const base = safe(hourlyRate);
      const regular = base * effHoursPerWeek;
      const otPay = base * safe(overtimeMultiplier) * effOvertimeHours;
      weeklyGross = regular + otPay;
      yearlyGross = weeklyGross * effWeeksPerYear;
      const totalHoursThisWeek = effHoursPerWeek + effOvertimeHours;
      hourlyGross = totalHoursThisWeek > 0 ? weeklyGross / totalHoursThisWeek : base;
      break;
  }

  // Derived gross breakdown
  const monthlyGross = yearlyGross / 12;
  const dailyGross = weeklyGross / safe(daysPerWeek);

  const gross: Breakdown = {
    hourly: round(hourlyGross, currencyConfig.fractionDigits),
    daily: round(dailyGross, currencyConfig.fractionDigits),
    weekly: round(weeklyGross, currencyConfig.fractionDigits),
    monthly: round(monthlyGross, currencyConfig.fractionDigits),
    yearly: round(yearlyGross, currencyConfig.fractionDigits),
  };

  // Tax (flat rate — ready for future progressive brackets)
  const taxYearly = percentOf(yearlyGross, taxRatePercent);
  const tax: Breakdown = {
    hourly: round(taxYearly / totalAnnualHours, currencyConfig.fractionDigits),
    daily: round(taxYearly / (effWeeksPerYear * safe(daysPerWeek)), currencyConfig.fractionDigits),
    weekly: round(taxYearly / effWeeksPerYear, currencyConfig.fractionDigits),
    monthly: round(taxYearly / 12, currencyConfig.fractionDigits),
    yearly: round(taxYearly, currencyConfig.fractionDigits),
  };

  // Net
  const netYearly = yearlyGross - taxYearly;
  const net: Breakdown = {
    hourly: round(netYearly / totalAnnualHours, currencyConfig.fractionDigits),
    daily: round(netYearly / (effWeeksPerYear * safe(daysPerWeek)), currencyConfig.fractionDigits),
    weekly: round(netYearly / effWeeksPerYear, currencyConfig.fractionDigits),
    monthly: round(netYearly / 12, currencyConfig.fractionDigits),
    yearly: round(netYearly, currencyConfig.fractionDigits),
  };

  // Percentages (great for charts)
  const taxPercentage = yearlyGross > 0 ? round((taxYearly / yearlyGross) * 100, 2) : 0;
  const netPercentage = 100 - taxPercentage;

  // Extras (safe from division by zero)
  const netHourly = net.hourly;
  const perMinute = netHourly / 60;
  const safePerMinute = perMinute > 0 ? perMinute : 0.0001; // prevent Infinity

  const extras: Extras = {
  perMinute: round(perMinute, 4),
  timeToEarn1000: perMinute > 0 ? round(1000 / perMinute, 0) : 0,
  effectiveHourlyNet: round(netHourly, currencyConfig.fractionDigits),
  timeToEarnOneLakh:
    currency === "INR" && net.hourly > 0
      ? round(100000 / net.hourly, 0)
      : undefined,
};

  return {
    gross,
    tax,
    net,
    summary: gross,
    effectiveHourly: netHourly,
    extras,
    percentages: { taxPercentage, netPercentage },
    assumptions: {
      hoursPerWeek: effHoursPerWeek,
      daysPerWeek: safe(daysPerWeek),
      weeksPerYear: effWeeksPerYear,
      totalAnnualHours,
      overtimeMultiplier: safe(overtimeMultiplier),
    },
    currency: currencyConfig,
    calculationMethod: `Based on ${effHoursPerWeek} hrs/week × ${effWeeksPerYear} weeks (${totalAnnualHours} total hours)`,
  };
}