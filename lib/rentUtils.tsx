// @/lib/rentUtils.ts

export interface RentInputs {
  incomeValue: string | number;
  incomeType: "monthly" | "yearly";
  monthlyDebt?: string | number;
  taxRate?: number;
}

export interface RentResult {
  monthlyGross: number;
  yearlyGross: number;
  monthlyNet: number;
  yearlyNet: number;

  maxRent28Rule: number;
  maxRent36Rule: number;

  recommendedRent: number;
  conservativeRent: number;
  aggressiveRent: number;

  frontEndDTI: number;
  backEndDTI: number;

  status: "excellent" | "comfortable" | "stretch" | "risky";
  statusColor: "emerald" | "amber" | "red";
  suggestedAction: string;
}

/**
 * Production-grade Rent Affordability Calculator
 * Based on real 2026 lending standards (28/36 rule + DTI logic)
 */
export function calculateRentAffordability(inputs: RentInputs): RentResult {
  const toNumber = (val: any): number => {
    const num = parseFloat(String(val).replace(/,/g, "").trim());
    return isNaN(num) ? 0 : num;
  };

  // Input Sanitization
  const safeIncome = Math.max(0, toNumber(inputs.incomeValue));
  const safeDebt = Math.max(0, toNumber(inputs.monthlyDebt ?? 0));
  const safeTax = Math.min(Math.max(toNumber(inputs.taxRate ?? 0.25), 0), 0.6);

  // ====================== INCOME NORMALIZATION ======================
  const yearlyGross = inputs.incomeType === "yearly" ? safeIncome : safeIncome * 12;
  const monthlyGross = inputs.incomeType === "yearly" ? safeIncome / 12 : safeIncome;

  if (monthlyGross <= 0) {
    return getEmptyResult();
  }

  const monthlyNet = monthlyGross * (1 - safeTax);
  const yearlyNet = yearlyGross * (1 - safeTax);

  // ====================== LENDER RULES ======================
  const rent28 = monthlyGross * 0.28;
  const rent36 = Math.max(0, monthlyGross * 0.36 - safeDebt);

  const recommendedRent = Math.min(rent28, rent36);

  const conservativeRent = Math.min(
    monthlyGross * 0.20,
    monthlyNet * 0.35
  );

  const aggressiveRent = Math.max(
    recommendedRent,
    Math.min(
      monthlyGross * 0.32,
      monthlyNet * 0.45,
      Math.max(0, monthlyGross * 0.40 - safeDebt)
    )
  );

  // ====================== DTI RATIOS ======================
  const frontEndDTI = monthlyGross > 0 ? (recommendedRent / monthlyGross) * 100 : 0;
  const backEndDTI = monthlyGross > 0 ? ((recommendedRent + safeDebt) / monthlyGross) * 100 : 0;

  // ====================== STATUS ENGINE ======================
  let status: RentResult["status"] = "comfortable";
  let statusColor: RentResult["statusColor"] = "emerald";
  let suggestedAction = "Healthy financial position.";

  if (backEndDTI < 25) {
    status = "excellent";
    statusColor = "emerald";
    suggestedAction = "Excellent — strong lender approval odds and great savings potential.";
  } else if (backEndDTI < 30) {
    status = "comfortable";
    statusColor = "emerald";
    suggestedAction = "Comfortable — well within safe lending limits.";
  } else if (backEndDTI < 36) {
    status = "stretch";
    statusColor = "amber";
    suggestedAction = "Stretch zone — consider lowering debt or increasing income.";
  } else {
    status = "risky";
    statusColor = "red";
    suggestedAction = "Risky — high chance of lender rejection and financial stress.";
  }

  // ====================== FINAL ROUNDING ======================
  const round = (n: number) => Math.round(n * 100) / 100;

  return {
    monthlyGross: round(monthlyGross),
    yearlyGross: round(yearlyGross),
    monthlyNet: round(monthlyNet),
    yearlyNet: round(yearlyNet),

    maxRent28Rule: round(rent28),
    maxRent36Rule: round(rent36),

    recommendedRent: round(recommendedRent),
    conservativeRent: round(conservativeRent),
    aggressiveRent: round(aggressiveRent),

    frontEndDTI: round(frontEndDTI),
    backEndDTI: round(backEndDTI),

    status,
    statusColor,
    suggestedAction,
  };
}

// Empty state handler
function getEmptyResult(): RentResult {
  return {
    monthlyGross: 0,
    yearlyGross: 0,
    monthlyNet: 0,
    yearlyNet: 0,
    maxRent28Rule: 0,
    maxRent36Rule: 0,
    recommendedRent: 0,
    conservativeRent: 0,
    aggressiveRent: 0,
    frontEndDTI: 0,
    backEndDTI: 0,
    status: "comfortable",
    statusColor: "emerald",
    suggestedAction: "Enter your income to see personalized results.",
  };
}