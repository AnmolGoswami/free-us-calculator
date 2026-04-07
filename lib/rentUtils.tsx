// @/lib/rentUtils.ts

export interface RentInputs {
  incomeValue: string | number;
  incomeType: "monthly" | "yearly";
  monthlyDebt?: string | number;
  taxRate?: number; // optional override
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
  optimizedRent: number; // 🔥 NEW (smart suggestion)

  frontEndDTI: number;
  backEndDTI: number;

  status: "excellent" | "comfortable" | "stretch" | "risky";
  statusColor: "emerald" | "amber" | "red";

  improvementPotential: number; // 🔥 NEW
  suggestedAction: string;
}

/**
 * SaaS-grade Rent Affordability Engine (2026+)
 */
export function calculateRentAffordability(inputs: RentInputs): RentResult {
  const toNumber = (val: any): number => {
    const num = parseFloat(String(val).replace(/,/g, "").trim());
    return isNaN(num) ? 0 : num;
  };

  // ================= INPUT SANITIZATION =================
  const safeIncome = Math.max(0, toNumber(inputs.incomeValue));
  const safeDebt = Math.max(0, toNumber(inputs.monthlyDebt ?? 0));

  // Smart default tax (real-world adaptive)
  const inferredTax =
    safeIncome > 120000 ? 0.30 :
    safeIncome > 60000 ? 0.25 :
    0.20;

  const safeTax = Math.min(
    Math.max(toNumber(inputs.taxRate ?? inferredTax), 0),
    0.6
  );

  // ================= INCOME NORMALIZATION =================
  const yearlyGross =
    inputs.incomeType === "yearly" ? safeIncome : safeIncome * 12;

  const monthlyGross =
    inputs.incomeType === "yearly" ? safeIncome / 12 : safeIncome;

  if (monthlyGross <= 0) return getEmptyResult();

  const monthlyNet = monthlyGross * (1 - safeTax);
  const yearlyNet = yearlyGross * (1 - safeTax);

  // ================= CORE LENDING RULES =================
  const rent28 = monthlyGross * 0.28;

  const rent36 = Math.max(
    0,
    monthlyGross * 0.36 - safeDebt
  );

  const recommendedRent = Math.min(rent28, rent36);

  // ================= SMART RENT TIERS =================
  const conservativeRent = Math.min(
    monthlyGross * 0.20,
    monthlyNet * 0.30
  );

  const aggressiveRent = Math.min(
    monthlyGross * 0.32,
    monthlyNet * 0.45,
    Math.max(0, monthlyGross * 0.40 - safeDebt)
  );

  // 🔥 NEW: Optimized rent (AI-like suggestion)
  const optimizedRent =
    backsolveOptimalRent(monthlyGross, safeDebt);

  // ================= DTI CALCULATIONS =================
  const frontEndDTI = (recommendedRent / monthlyGross) * 100;
  const backEndDTI =
    ((recommendedRent + safeDebt) / monthlyGross) * 100;

  // ================= STATUS ENGINE =================
  let status: RentResult["status"];
  let statusColor: RentResult["statusColor"];
  let suggestedAction: string;

  if (backEndDTI < 25) {
    status = "excellent";
    statusColor = "emerald";
    suggestedAction = "Excellent — you can safely save or invest more.";
  } else if (backEndDTI < 30) {
    status = "comfortable";
    statusColor = "emerald";
    suggestedAction = "Comfortable — strong financial balance.";
  } else if (backEndDTI < 36) {
    status = "stretch";
    statusColor = "amber";
    suggestedAction =
      `You're slightly above ideal limits. Reducing ~$${Math.round(safeDebt * 0.2)} debt improves safety.`;
  } else {
    status = "risky";
    statusColor = "red";
    suggestedAction =
      "High financial risk — consider reducing rent or debt immediately.";
  }

  // ================= IMPROVEMENT ENGINE =================
  const idealBackEnd = 30;
  const improvementPotential = Math.max(
    0,
    ((backEndDTI - idealBackEnd) / 100) * monthlyGross
  );

  // ================= ROUNDING =================
  const round = (n: number) =>
    Math.round((n + Number.EPSILON) * 100) / 100;

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
    optimizedRent: round(optimizedRent),

    frontEndDTI: round(frontEndDTI),
    backEndDTI: round(backEndDTI),

    status,
    statusColor,
    suggestedAction,
    improvementPotential: round(improvementPotential),
  };
}

// 🔥 Smart optimizer (differentiator)
function backsolveOptimalRent(monthlyIncome: number, debt: number) {
  const targetDTI = 0.30;
  return Math.max(0, monthlyIncome * targetDTI - debt);
}

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
    optimizedRent: 0,
    frontEndDTI: 0,
    backEndDTI: 0,
    improvementPotential: 0,
    status: "comfortable",
    statusColor: "emerald",
    suggestedAction: "Enter income to unlock insights.",
  };
}