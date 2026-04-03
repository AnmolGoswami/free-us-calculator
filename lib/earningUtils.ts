// lib/earningUtils.ts

// =============================================
// 🚀 SaaS-Grade Earnings & Salary Calculator
// =============================================

export interface CalculationMetadata {
  timestamp: string;
  currency: string;
  assumptions: string[];
  warnings: string[];
}

export interface PeriodAmounts {
  hourly: number;
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;
}

export interface EarningsBreakdown {
  gross: PeriodAmounts;
  expenses: PeriodAmounts;
  tax: PeriodAmounts;
  net: PeriodAmounts;
  ordersPerWeek: number;
  milesPerWeek: number;
  effectiveHourlyNet: number;
  isValid: boolean;
  metadata: CalculationMetadata;
}

// =============================================
// DoorDash / Gig Economy Calculator (FIXED)
// =============================================

export interface DoorDashInputs {
  ordersPerHour: number;
  earningPerOrder: number;
  hoursPerDay: number;
  daysPerWeek: number;
  milesPerOrder: number;
  costPerMile: number;
  taxRate: number; // e.g. 22 for 22%
  currency?: string;
}

const DEFAULT_CURRENCY = "USD";
const WEEKS_PER_YEAR = 52;
const AVG_WEEKS_PER_MONTH = 4.345;

export function calculateDoorDashEarnings(inputs: DoorDashInputs): EarningsBreakdown {
  const {
    ordersPerHour,
    earningPerOrder,
    hoursPerDay,
    daysPerWeek,
    milesPerOrder,
    costPerMile,
    taxRate,
    currency = DEFAULT_CURRENCY,
  } = validateDoorDashInputs(inputs);

  const hoursPerWeek = hoursPerDay * daysPerWeek;
  const ordersPerWeek = ordersPerHour * hoursPerWeek;
  const milesPerWeek = ordersPerWeek * milesPerOrder;

  // Gross
  const weeklyGross = ordersPerWeek * earningPerOrder;
  const monthlyGross = weeklyGross * AVG_WEEKS_PER_MONTH;
  const yearlyGross = weeklyGross * WEEKS_PER_YEAR;
  const dailyGross = daysPerWeek > 0 ? weeklyGross / daysPerWeek : 0;
  const hourlyGross = hoursPerWeek > 0 ? weeklyGross / hoursPerWeek : 0;

  // Expenses
  const weeklyExpenses = milesPerWeek * costPerMile;
  const monthlyExpenses = weeklyExpenses * AVG_WEEKS_PER_MONTH;
  const yearlyExpenses = weeklyExpenses * WEEKS_PER_YEAR;
  const dailyExpenses = daysPerWeek > 0 ? weeklyExpenses / daysPerWeek : 0;
  const hourlyExpenses = hoursPerWeek > 0 ? weeklyExpenses / hoursPerWeek : 0;

  // Profit before tax
  const weeklyProfit = weeklyGross - weeklyExpenses;
  const monthlyProfit = monthlyGross - monthlyExpenses;
  const yearlyProfit = yearlyGross - yearlyExpenses;
  const dailyProfit = dailyGross - dailyExpenses;
  const hourlyProfit = hourlyGross - hourlyExpenses;

  // Tax (only on positive profit)
  const taxableWeekly = Math.max(0, weeklyProfit);
  const taxableMonthly = Math.max(0, monthlyProfit);
  const taxableYearly = Math.max(0, yearlyProfit);
  const taxableDaily = Math.max(0, dailyProfit);
  const taxableHourly = Math.max(0, hourlyProfit);

  const weeklyTax = taxableWeekly * (taxRate / 100);
  const monthlyTax = taxableMonthly * (taxRate / 100);
  const yearlyTax = taxableYearly * (taxRate / 100);
  const dailyTax = taxableDaily * (taxRate / 100);
  const hourlyTax = taxableHourly * (taxRate / 100);

  // Net
  const weeklyNet = weeklyProfit - weeklyTax;
  const monthlyNet = monthlyProfit - monthlyTax;
  const yearlyNet = yearlyProfit - yearlyTax;
  const dailyNet = dailyProfit - dailyTax;
  const hourlyNet = hourlyProfit - hourlyTax;

  const warnings: string[] = [];
  if (hoursPerWeek === 0) warnings.push("Hours per week is zero — results may not be meaningful");
  if (weeklyProfit < 0) warnings.push("Expenses exceed earnings — operating at a loss");
  if (taxRate > 40) warnings.push("Tax rate is unusually high");

  const metadata: CalculationMetadata = {
    timestamp: new Date().toISOString(),
    currency,
    assumptions: [
      "Monthly uses 4.345 average weeks",
      "Tax applied only on positive profit",
      "No other deductions or benefits included",
    ],
    warnings,
  };

  return {
    gross: createPeriodAmounts(hourlyGross, dailyGross, weeklyGross, monthlyGross, yearlyGross),
    expenses: createPeriodAmounts(hourlyExpenses, dailyExpenses, weeklyExpenses, monthlyExpenses, yearlyExpenses),
    tax: createPeriodAmounts(hourlyTax, dailyTax, weeklyTax, monthlyTax, yearlyTax),
    net: createPeriodAmounts(hourlyNet, dailyNet, weeklyNet, monthlyNet, yearlyNet),
    ordersPerWeek: round(ordersPerWeek),
    milesPerWeek: round(milesPerWeek),
    effectiveHourlyNet: round(hourlyNet),
    isValid: hoursPerWeek > 0 && ordersPerHour > 0 && earningPerOrder > 0,
    metadata,
  };
}

// =============================================
// Helper
// =============================================

function createPeriodAmounts(
  hourly: number,
  daily: number,
  weekly: number,
  monthly: number,
  yearly: number
): PeriodAmounts {
  return {
    hourly: round(hourly),
    daily: round(daily),
    weekly: round(weekly),
    monthly: round(monthly),
    yearly: round(yearly),
  };
}

function round(num: number): number {
  return isNaN(num) || !isFinite(num) ? 0 : Number(num.toFixed(2));
}

function validateDoorDashInputs(inputs: DoorDashInputs): Required<DoorDashInputs> {
  if (inputs.ordersPerHour <= 0 || inputs.earningPerOrder <= 0 || inputs.hoursPerDay <= 0) {
    throw new Error("ordersPerHour, earningPerOrder, and hoursPerDay must be positive.");
  }
  if (inputs.daysPerWeek < 1 || inputs.daysPerWeek > 7) {
    throw new Error("daysPerWeek must be between 1 and 7.");
  }
  return { ...inputs, currency: inputs.currency || DEFAULT_CURRENCY } as Required<DoorDashInputs>;
}