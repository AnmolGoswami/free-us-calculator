// lib/earningUtils.ts

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
// DoorDash Calculator
// =============================================

export interface DoorDashInputs {
  ordersPerHour: number;
  earningPerOrder: number;
  hoursPerDay: number;
  daysPerWeek: number;
  milesPerOrder: number;
  costPerMile: number;
  taxRate: number;
  currency?: string;
}

const DEFAULT_CURRENCY = "USD";
const WEEKS_PER_YEAR = 52;
const AVG_WEEKS_PER_MONTH = 4.345;

export function calculateDoorDashEarnings(inputs: DoorDashInputs): EarningsBreakdown {
  // Softer validation - prevent crash during typing
  const safeInputs = {
    ordersPerHour: Math.max(0, inputs.ordersPerHour || 0),
    earningPerOrder: Math.max(0, inputs.earningPerOrder || 0),
    hoursPerDay: Math.max(0, inputs.hoursPerDay || 0),
    daysPerWeek: Math.max(1, Math.min(7, inputs.daysPerWeek || 5)),
    milesPerOrder: Math.max(0, inputs.milesPerOrder || 0),
    costPerMile: Math.max(0, inputs.costPerMile || 0),
    taxRate: Math.max(0, Math.min(50, inputs.taxRate || 0)),
    currency: inputs.currency || DEFAULT_CURRENCY,
  };

  const {
    ordersPerHour,
    earningPerOrder,
    hoursPerDay,
    daysPerWeek,
    milesPerOrder,
    costPerMile,
    taxRate,
    currency,
  } = safeInputs;

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

  // Profit
  const weeklyProfit = weeklyGross - weeklyExpenses;
  const monthlyProfit = monthlyGross - monthlyExpenses;
  const yearlyProfit = yearlyGross - yearlyExpenses;
  const dailyProfit = dailyGross - dailyExpenses;
  const hourlyProfit = hourlyGross - hourlyExpenses;

  // Tax (only on positive profit)
  const taxableWeekly = Math.max(0, weeklyProfit);
  const weeklyTax = taxableWeekly * (taxRate / 100);
  const monthlyTax = (monthlyProfit > 0 ? monthlyProfit : 0) * (taxRate / 100);
  const yearlyTax = (yearlyProfit > 0 ? yearlyProfit : 0) * (taxRate / 100);
  const dailyTax = (dailyProfit > 0 ? dailyProfit : 0) * (taxRate / 100);
  const hourlyTax = (hourlyProfit > 0 ? hourlyProfit : 0) * (taxRate / 100);

  // Net
  const weeklyNet = weeklyProfit - weeklyTax;
  const monthlyNet = monthlyProfit - monthlyTax;
  const yearlyNet = yearlyProfit - yearlyTax;
  const dailyNet = dailyProfit - dailyTax;
  const hourlyNet = hourlyProfit - hourlyTax;

  const warnings: string[] = [];
  if (ordersPerHour <= 0 || earningPerOrder <= 0 || hoursPerDay <= 0) {
    warnings.push("Some inputs are zero — results may be inaccurate");
  }
  if (weeklyProfit < 0) warnings.push("You're currently operating at a loss");

  const isValid = ordersPerHour > 0 && earningPerOrder > 0 && hoursPerDay > 0;

  return {
    gross: createPeriodAmounts(hourlyGross, dailyGross, weeklyGross, monthlyGross, yearlyGross),
    expenses: createPeriodAmounts(hourlyExpenses, dailyExpenses, weeklyExpenses, monthlyExpenses, yearlyExpenses),
    tax: createPeriodAmounts(hourlyTax, dailyTax, weeklyTax, monthlyTax, yearlyTax),
    net: createPeriodAmounts(hourlyNet, dailyNet, weeklyNet, monthlyNet, yearlyNet),
    ordersPerWeek: round(ordersPerWeek),
    milesPerWeek: round(milesPerWeek),
    effectiveHourlyNet: round(hourlyNet),
    isValid,
    metadata: {
      timestamp: new Date().toISOString(),
      currency,
      assumptions: ["Monthly uses 4.345 average weeks", "Tax only on positive profit"],
      warnings,
    },
  };
}

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