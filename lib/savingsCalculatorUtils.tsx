export interface SavingsCalculationResult {
  monthlySavingsRequired: number;
  currentMonthlySavings: number;
  additionalMonthlyNeeded: number;

  totalContributions: number;
  totalInterestEarned: number;
  finalAmount: number;

  yearsToGoal: number;
  monthsToGoal: number;

  breakdown: {
    initialInvestment: number;
    monthlyContribution: number;
    annualInterestRate: number;
    inflationRate: number;
    realReturnRate: number;
    compoundingFrequency: number;
  };

  yearlyBreakdown: {
    year: number;
    totalValue: number;
    contributions: number;
    interest: number;
  }[];

  goalAchieved: boolean;
  projectedDate: string;
}

/**
 * SaaS-Grade Savings Goal Calculator
 */
export function calculateSavingsGoal(
  targetAmount: number,
  initialInvestment: number = 0,
  monthlyContribution: number = 0,
  annualInterestRate: number = 5,
  years: number = 5,
  compoundingFrequency: number = 12,
  inflationRate: number = 0
): SavingsCalculationResult {
  // --------------------------
  // ✅ VALIDATION
  // --------------------------
  if (
    targetAmount <= 0 ||
    years <= 0 ||
    compoundingFrequency <= 0 ||
    annualInterestRate < 0 ||
    monthlyContribution < 0 ||
    initialInvestment < 0
  ) {
    return getZeroSavingsResult();
  }

  years = Math.min(years, 100);

  // --------------------------
  // ✅ INSTANT GOAL ACHIEVED (CRITICAL FIX)
  // --------------------------
  if (initialInvestment >= targetAmount) {
    return {
      monthlySavingsRequired: 0,
      currentMonthlySavings: round(monthlyContribution),
      additionalMonthlyNeeded: 0,

      totalContributions: round(initialInvestment),
      totalInterestEarned: 0,
      finalAmount: round(initialInvestment),

      yearsToGoal: 0,
      monthsToGoal: 0,

      breakdown: {
        initialInvestment: round(initialInvestment),
        monthlyContribution: round(monthlyContribution),
        annualInterestRate,
        inflationRate,
        realReturnRate: round(annualInterestRate - inflationRate),
        compoundingFrequency,
      },

      yearlyBreakdown: [],
      goalAchieved: true,
      projectedDate: "Already achieved",
    };
  }

  // --------------------------
  // ✅ RATES
  // --------------------------
  const nominalRate = annualInterestRate / 100;
  const realRate = nominalRate - inflationRate / 100;
  const ratePerPeriod = realRate / compoundingFrequency;

  const monthsLimit = years * 12;

  let balance = initialInvestment;
  let totalContributions = initialInvestment;

  let months = 0;
  let goalAchieved = false;

  const yearlyBreakdown: SavingsCalculationResult["yearlyBreakdown"] = [];

  // --------------------------
  // ✅ SIMULATION LOOP
  // --------------------------
  while (months < monthsLimit) {
    balance *= (1 + ratePerPeriod);

    balance += monthlyContribution;
    totalContributions += monthlyContribution;

    months++;

    if (months % 12 === 0) {
      yearlyBreakdown.push({
        year: months / 12,
        totalValue: round(balance),
        contributions: round(totalContributions),
        interest: round(balance - totalContributions),
      });
    }

    if (balance >= targetAmount) {
      goalAchieved = true;
      break;
    }
  }

  const totalInterest = balance - totalContributions;

  // --------------------------
  // ✅ REQUIRED MONTHLY (FIXED)
  // --------------------------
  const totalPeriods = years * compoundingFrequency;

  const futureValueFactor =
    ratePerPeriod === 0
      ? totalPeriods
      : (Math.pow(1 + ratePerPeriod, totalPeriods) - 1) / ratePerPeriod;

  let requiredMonthly =
    ratePerPeriod === 0
      ? (targetAmount - initialInvestment) / (years * 12)
      : (targetAmount -
          initialInvestment *
            Math.pow(1 + ratePerPeriod, totalPeriods)) /
        futureValueFactor;

  // ✅ If goal achieved early → current contribution is enough
  if (goalAchieved && months < monthsLimit) {
    requiredMonthly = monthlyContribution;
  }

  // ✅ Clamp negative values (SaaS fix)
  const safeRequiredMonthly = Math.max(0, requiredMonthly);

  const additionalNeeded = Math.max(
    0,
    safeRequiredMonthly - monthlyContribution
  );

  // --------------------------
  // ✅ DATE CALCULATION
  // --------------------------
  const projectedDate = new Date();
  projectedDate.setMonth(projectedDate.getMonth() + months);

  // --------------------------
  // ✅ FINAL OUTPUT
  // --------------------------
  return {
    monthlySavingsRequired: round(safeRequiredMonthly),
    currentMonthlySavings: round(monthlyContribution),
    additionalMonthlyNeeded: round(additionalNeeded),

    totalContributions: round(totalContributions),
    totalInterestEarned: round(totalInterest),
    finalAmount: round(balance),

    yearsToGoal: round(months / 12),
    monthsToGoal: months,

    breakdown: {
      initialInvestment: round(initialInvestment),
      monthlyContribution: round(monthlyContribution),
      annualInterestRate,
      inflationRate,
      realReturnRate: round(realRate * 100),
      compoundingFrequency,
    },

    yearlyBreakdown,

    goalAchieved,

    projectedDate: goalAchieved
      ? projectedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        })
      : `${years} years (goal not reached)`,
  };
}

// --------------------------
// ✅ ZERO STATE
// --------------------------
function getZeroSavingsResult(): SavingsCalculationResult {
  return {
    monthlySavingsRequired: 0,
    currentMonthlySavings: 0,
    additionalMonthlyNeeded: 0,

    totalContributions: 0,
    totalInterestEarned: 0,
    finalAmount: 0,

    yearsToGoal: 0,
    monthsToGoal: 0,

    breakdown: {
      initialInvestment: 0,
      monthlyContribution: 0,
      annualInterestRate: 0,
      inflationRate: 0,
      realReturnRate: 0,
      compoundingFrequency: 12,
    },

    yearlyBreakdown: [],

    goalAchieved: false,
    projectedDate: "No valid input",
  };
}

// utils/numberFormat.ts

export const formatCompact = (num: number): string => {
  if (num === 0) return "0";

  const abs = Math.abs(num);

  if (abs >= 1e12) return (num / 1e12).toFixed(2) + "T";
  if (abs >= 1e9) return (num / 1e9).toFixed(2) + "B";
  if (abs >= 1e6) return (num / 1e6).toFixed(2) + "M";
  if (abs >= 1e3) return (num / 1e3).toFixed(2) + "K";

  return num.toLocaleString();
};

export const formatFull = (num: number): string => {
  return num.toLocaleString();
};

// --------------------------
// ✅ SAFE ROUNDING
// --------------------------
const round = (n: number): number =>
  Math.round((n + Number.EPSILON) * 100) / 100;