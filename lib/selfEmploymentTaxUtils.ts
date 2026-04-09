// ==============================
// TYPES
// ==============================

export type FilingStatus =
  | "single"
  | "marriedJoint"
  | "headOfHousehold"
  | "marriedSeparate";

export interface SelfEmploymentTaxResult {
  grossIncome: number;
  businessExpenses: number;
  netProfit: number;

  seTax: number;
  socialSecurityTax: number;
  medicareTax: number;
  additionalMedicareTax: number;

  deductibleSEPortion: number;

  adjustedGrossIncome: number;
  taxableIncome: number;
  estimatedIncomeTax: number;

  totalTaxBurden: number;
  effectiveTaxRate: number;
  quarterlyEstimatedTax: number;

  breakdown: {
    ssWageBase: number;
    ssTaxableAmount: number;
    medicareTaxableAmount: number;
  };

  meta: {
    taxYear: number;
    isEstimate: boolean;
  };
}

// ==============================
// CONFIG (EASY TO UPDATE YEARLY)
// ==============================

const TAX_CONFIG = {
  year: 2026,

  SE_BASE_RATE: 0.9235,
  SS_WAGE_BASE: 184500,
  SS_RATE: 0.124,
  MEDICARE_RATE: 0.029,
  ADD_MEDICARE_RATE: 0.009,

  ADD_MEDICARE_THRESHOLDS: {
    single: 200000,
    marriedJoint: 250000,
    headOfHousehold: 200000,
    marriedSeparate: 125000,
  },

  STANDARD_DEDUCTION: {
    single: 16100,
    marriedJoint: 32200,
    headOfHousehold: 24150,
    marriedSeparate: 16100,
  },

  FEDERAL_BRACKETS: {
    single: [12400, 50400, 105700, 201775, 256225, 640600],
    marriedJoint: [24800, 100800, 211400, 403550, 512450, 768700],
    headOfHousehold: [17700, 67450, 105700, 201775, 256200, 640600],
    marriedSeparate: [12400, 50400, 105700, 201775, 256225, 384350],
  },

  FEDERAL_RATES: [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37],
} as const;

// ==============================
// MAIN CALCULATOR
// ==============================

export function calculateSelfEmploymentTax(
  grossIncome: number,
  businessExpenses: number = 0,
  filingStatus: FilingStatus = "single",
  additionalDeductions: number = 0,
  taxCredits: number = 0
): SelfEmploymentTaxResult {
  if (grossIncome <= 0) return getZeroResult();

  // ------------------------------
  // NET PROFIT
  // ------------------------------
  const netProfit = Math.max(0, grossIncome - businessExpenses);

  // ------------------------------
  // SE TAX BASE
  // ------------------------------
  const seTaxableAmount = netProfit * TAX_CONFIG.SE_BASE_RATE;

  // ------------------------------
  // SOCIAL SECURITY
  // ------------------------------
  const ssTaxable = Math.min(
    seTaxableAmount,
    TAX_CONFIG.SS_WAGE_BASE
  );
  const socialSecurityTax = ssTaxable * TAX_CONFIG.SS_RATE;

  // ------------------------------
  // MEDICARE
  // ------------------------------
  const medicareTax =
    seTaxableAmount * TAX_CONFIG.MEDICARE_RATE;

  // ------------------------------
  // ADDITIONAL MEDICARE (FIXED)
  // ------------------------------
  const threshold =
    TAX_CONFIG.ADD_MEDICARE_THRESHOLDS[filingStatus];

  const additionalMedicareTax =
    Math.max(0, seTaxableAmount - threshold) *
    TAX_CONFIG.ADD_MEDICARE_RATE;

  // ------------------------------
  // TOTAL SE TAX
  // ------------------------------
  const totalSETax =
    socialSecurityTax + medicareTax + additionalMedicareTax;

  const deductibleSEPortion = totalSETax * 0.5;

  // ------------------------------
  // AGI (SIMPLIFIED)
  // ------------------------------
  const agi = Math.max(
    0,
    netProfit - deductibleSEPortion - additionalDeductions
  );

  // ------------------------------
  // TAXABLE INCOME
  // ------------------------------
  const standardDeduction =
    TAX_CONFIG.STANDARD_DEDUCTION[filingStatus];

  const taxableIncome = Math.max(
    0,
    agi - standardDeduction
  );

  // ------------------------------
  // FEDERAL TAX
  // ------------------------------
  const estimatedIncomeTax = Math.max(
    0,
    calculateFederalTax(taxableIncome, filingStatus) - taxCredits
  );

  // ------------------------------
  // TOTAL TAX
  // ------------------------------
  const totalTaxBurden =
    totalSETax + estimatedIncomeTax;

  const effectiveTaxRate =
    netProfit > 0
      ? (totalTaxBurden / netProfit) * 100
      : 0;

  // ------------------------------
  // RETURN
  // ------------------------------
  return {
    grossIncome: round(grossIncome),
    businessExpenses: round(businessExpenses),
    netProfit: round(netProfit),

    seTax: round(totalSETax),
    socialSecurityTax: round(socialSecurityTax),
    medicareTax: round(medicareTax),
    additionalMedicareTax: round(additionalMedicareTax),

    deductibleSEPortion: round(deductibleSEPortion),

    adjustedGrossIncome: round(agi),
    taxableIncome: round(taxableIncome),
    estimatedIncomeTax: round(estimatedIncomeTax),

    totalTaxBurden: round(totalTaxBurden),
    effectiveTaxRate: round(effectiveTaxRate),
    quarterlyEstimatedTax: round(totalTaxBurden / 4),

    breakdown: {
      ssWageBase: TAX_CONFIG.SS_WAGE_BASE,
      ssTaxableAmount: round(ssTaxable),
      medicareTaxableAmount: round(seTaxableAmount),
    },

    meta: {
      taxYear: TAX_CONFIG.year,
      isEstimate: true,
    },
  };
}

// ==============================
// FEDERAL TAX ENGINE
// ==============================

function calculateFederalTax(
  income: number,
  filingStatus: FilingStatus
): number {
  const brackets = TAX_CONFIG.FEDERAL_BRACKETS[filingStatus];
  const rates = TAX_CONFIG.FEDERAL_RATES;

  let tax = 0;
  let prev = 0;

  for (let i = 0; i < brackets.length; i++) {
    const upper = brackets[i];
    const segment = Math.min(income, upper) - prev;

    if (segment > 0) {
      tax += segment * rates[i];
    }

    prev = upper;
    if (income <= upper) return tax;
  }

  // Top bracket
  return tax + (income - prev) * rates[rates.length - 1];
}

// ==============================
// ZERO RESULT
// ==============================

function getZeroResult(): SelfEmploymentTaxResult {
  return {
    grossIncome: 0,
    businessExpenses: 0,
    netProfit: 0,

    seTax: 0,
    socialSecurityTax: 0,
    medicareTax: 0,
    additionalMedicareTax: 0,

    deductibleSEPortion: 0,

    adjustedGrossIncome: 0,
    taxableIncome: 0,
    estimatedIncomeTax: 0,

    totalTaxBurden: 0,
    effectiveTaxRate: 0,
    quarterlyEstimatedTax: 0,

    breakdown: {
      ssWageBase: TAX_CONFIG.SS_WAGE_BASE,
      ssTaxableAmount: 0,
      medicareTaxableAmount: 0,
    },

    meta: {
      taxYear: TAX_CONFIG.year,
      isEstimate: true,
    },
  };
}

// ==============================
// HELPERS
// ==============================

const round = (n: number): number =>
  Number.isFinite(n) ? Number(n.toFixed(2)) : 0;