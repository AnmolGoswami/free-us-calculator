// lib/earningUtils.ts
// Production-ready Salary & Earnings Calculator (Upgraded with Tax Engine)

export type SalaryMode = "hourly-to-salary" | "salary-to-hourly" | "overtime";
export type CurrencyCode = "USD" | "EUR" | "GBP" | "INR" | "JPY";
export type TaxMode = "flat" | "progressive";

// ================= TAX =================
type TaxBracket = {
  limit: number;
  rate: number;
};

function calculateFlatTax(income: number, rate: number): number {
  return (income * Math.max(0, rate)) / 100;
}

function calculateProgressiveTax(income: number, brackets: TaxBracket[]): number {
  let tax = 0;
  let remaining = income;

  for (const bracket of brackets) {
    if (remaining <= 0) break;

    const taxable = Math.min(remaining, bracket.limit);
    tax += taxable * bracket.rate;
    remaining -= taxable;
  }

  return tax;
}

// Example default brackets (US simplified)
function getDefaultBrackets(): TaxBracket[] {
  return [
    { limit: 11000, rate: 0.10 },   // 10%
    { limit: 33725, rate: 0.12 },   // 12%
    { limit: 50650, rate: 0.22 },   // 22%
    { limit: 86725, rate: 0.24 },   // 24%
    { limit: 49150, rate: 0.32 },   // 32%
    { limit: 346875, rate: 0.35 },  // 35%
    { limit: Infinity, rate: 0.37 },// 37%
  ];
}

// ================= TYPES =================
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
  hoursPerWeek?: number;
  daysPerWeek?: number;
  overtimeHours?: number;
  overtimeMultiplier?: number;
  taxRatePercent?: number;
  taxMode?: TaxMode; // ✅ NEW
  weeksPerYear?: number;
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
  timeToEarn1000: number;
  timeToEarnOneLakh?: number;
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
  calculationMethod: string;
}

// ================= CURRENCY =================
const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", name: "US Dollar", locale: "en-US", fractionDigits: 2 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", locale: "de-DE", fractionDigits: 2 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", locale: "en-GB", fractionDigits: 2 },
  INR: { code: "INR", symbol: "₹", name: "Indian Rupee", locale: "en-IN", fractionDigits: 2 },
  JPY: { code: "JPY", symbol: "¥", name: "Japanese Yen", locale: "ja-JP", fractionDigits: 0 },
};

export const getCurrencyConfig = (code: CurrencyCode = "INR"): CurrencyConfig =>
  CURRENCIES[code] || CURRENCIES.INR;

// ================= CONSTANTS =================
const DEFAULTS = {
  HOURS_PER_WEEK: 40,
  DAYS_PER_WEEK: 5,
  WEEKS_PER_YEAR: 52,
  OVERTIME_MULTIPLIER: 1.5,
  TAX_RATE_PERCENT: 0,
  TAX_MODE: "flat" as TaxMode,
  CURRENCY: "INR" as CurrencyCode,
};

// ================= HELPERS =================
const safe = (n?: number | null): number => Math.max(0, Number(n) || 0);

const round = (n: number, decimals: number): number =>
  Math.round(n * Math.pow(10, decimals)) / Math.pow(10, decimals);

const formatCurrency = (amount: number, currencyCode: CurrencyCode = "INR"): string => {
  const config = getCurrencyConfig(currencyCode);
  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.code,
    minimumFractionDigits: config.fractionDigits,
    maximumFractionDigits: config.fractionDigits,
  }).format(round(amount, config.fractionDigits));
};

// ================= CORE =================
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
    taxMode = DEFAULTS.TAX_MODE,
    weeksPerYear = DEFAULTS.WEEKS_PER_YEAR,
    currency = DEFAULTS.CURRENCY,
  } = input;

  const currencyConfig = getCurrencyConfig(currency);

  if (!mode) throw new Error("Mode is required");

  let yearlyGross = 0;
  let weeklyGross = 0;
  let hourlyGross = 0;

  const totalAnnualHours = hoursPerWeek * weeksPerYear;

  switch (mode) {
    case "hourly-to-salary":
      hourlyGross = safe(hourlyRate);
      weeklyGross = hourlyGross * hoursPerWeek;
      yearlyGross = weeklyGross * weeksPerYear;
      break;

    case "salary-to-hourly":
      yearlyGross = safe(annualSalary);
      weeklyGross = yearlyGross / weeksPerYear;
      hourlyGross = yearlyGross / totalAnnualHours;
      break;

    case "overtime":
      const base = safe(hourlyRate);
      const regular = base * hoursPerWeek;
      const ot = base * overtimeMultiplier * overtimeHours;
      weeklyGross = regular + ot;
      yearlyGross = weeklyGross * weeksPerYear;
      hourlyGross = weeklyGross / (hoursPerWeek + overtimeHours);
      break;
  }

  const gross: Breakdown = {
    hourly: round(hourlyGross, currencyConfig.fractionDigits),
    daily: round(weeklyGross / daysPerWeek, currencyConfig.fractionDigits),
    weekly: round(weeklyGross, currencyConfig.fractionDigits),
    monthly: round(yearlyGross / 12, currencyConfig.fractionDigits),
    yearly: round(yearlyGross, currencyConfig.fractionDigits),
  };

  // ================= TAX ENGINE =================
  let taxYearly = 0;

  if (taxMode === "progressive") {
    const brackets = getDefaultBrackets();
    taxYearly = calculateProgressiveTax(yearlyGross, brackets);
  } else {
    taxYearly = calculateFlatTax(yearlyGross, taxRatePercent);
  }

  const netYearly = yearlyGross - taxYearly;

  const tax: Breakdown = {
    hourly: taxYearly / totalAnnualHours,
    daily: taxYearly / (weeksPerYear * daysPerWeek),
    weekly: taxYearly / weeksPerYear,
    monthly: taxYearly / 12,
    yearly: taxYearly,
  };

  const net: Breakdown = {
    hourly: netYearly / totalAnnualHours,
    daily: netYearly / (weeksPerYear * daysPerWeek),
    weekly: netYearly / weeksPerYear,
    monthly: netYearly / 12,
    yearly: netYearly,
  };

  const netHourly = net.hourly;

  const extras: Extras = {
    perMinute: netHourly / 60,
    timeToEarn1000: netHourly > 0 ? 1000 / netHourly : 0,
    effectiveHourlyNet: netHourly,
    timeToEarnOneLakh:
      currency === "INR" && netHourly > 0
        ? 100000 / netHourly
        : undefined,
  };

  return {
    gross,
    tax,
    net,
    summary: gross,
    effectiveHourly: netHourly,
    extras,
    percentages: {
      taxPercentage: yearlyGross > 0 ? (taxYearly / yearlyGross) * 100 : 0,
      netPercentage: yearlyGross > 0 ? (netYearly / yearlyGross) * 100 : 0,
    },
    assumptions: {
      hoursPerWeek,
      daysPerWeek,
      weeksPerYear,
      totalAnnualHours,
      overtimeMultiplier,
    },
    currency: currencyConfig,
    calculationMethod: `${taxMode} tax applied`,
  };
}