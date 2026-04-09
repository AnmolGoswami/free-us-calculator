import { ALL_US_STATES } from "@/constants/taxBrackets";

// ==================== TYPES ====================
export interface TaxCalculationResult {
  gross: { yearly: number; monthly: number };
  adjustedGross: number;
  taxableIncome: number;
  tax: {
    federal: number;
    state: number;
    fica: number;
    total: number;
  };
  net: { yearly: number; monthly: number };
  effectiveRate: number;
  marginalRate: number;
  monthlyBreakdown: {
    federal: number;
    state: number;
    fica: number;
    net: number;
  };
  breakdown: {
    ficaDetails: {
      socialSecurity: number;
      medicare: number;
      additionalMedicare: number;
    };
  };
  estimatedStateTax: boolean;
  hasLocalTax: boolean;
}

export type FilingStatus =
  | "single"
  | "marriedJoint"
  | "headOfHousehold"
  | "marriedSeparate";

export type StateCode = typeof ALL_US_STATES[number]["code"];

// ==================== HELPERS ====================
const roundMoney = (n: number): number => Number(n.toFixed(2));

function clamp(n: number, min = 0) {
  return Math.max(min, n);
}

function calculateProgressiveTax(
  income: number,
  brackets: readonly { upTo: number; rate: number }[]
) {
  let tax = 0;
  let prev = 0;

  for (const { upTo, rate } of brackets) {
    const taxable = Math.min(income, upTo) - prev;
    if (taxable > 0) tax += taxable * rate;
    prev = upTo;
    if (income <= upTo) break;
  }

  return tax;
}

function getMarginalRate(
  income: number,
  brackets: readonly { upTo: number; rate: number }[]
) {
  for (const { upTo, rate } of brackets) {
    if (income <= upTo) return rate * 100;
  }
  return brackets[brackets.length - 1].rate * 100;
}

// ==================== CONSTANTS (ESTIMATED 2026) ====================
const STANDARD_DEDUCTION: Record<FilingStatus, number> = {
  single: 14600,
  marriedJoint: 29200,
  headOfHousehold: 21900,
  marriedSeparate: 14600,
};

// Based on latest IRS brackets (adjust slightly yearly if needed)
const FEDERAL_BRACKETS: Record<
  FilingStatus,
  { upTo: number; rate: number }[]
> = {
  single: [
    { upTo: 11600, rate: 0.1 },
    { upTo: 47150, rate: 0.12 },
    { upTo: 100525, rate: 0.22 },
    { upTo: 191950, rate: 0.24 },
    { upTo: 243725, rate: 0.32 },
    { upTo: 609350, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
  marriedJoint: [
    { upTo: 23200, rate: 0.1 },
    { upTo: 94300, rate: 0.12 },
    { upTo: 201050, rate: 0.22 },
    { upTo: 383900, rate: 0.24 },
    { upTo: 487450, rate: 0.32 },
    { upTo: 731200, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
  headOfHousehold: [
    { upTo: 16550, rate: 0.1 },
    { upTo: 63100, rate: 0.12 },
    { upTo: 100500, rate: 0.22 },
    { upTo: 191950, rate: 0.24 },
    { upTo: 243700, rate: 0.32 },
    { upTo: 609350, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
  marriedSeparate: [
    { upTo: 11600, rate: 0.1 },
    { upTo: 47150, rate: 0.12 },
    { upTo: 100525, rate: 0.22 },
    { upTo: 191950, rate: 0.24 },
    { upTo: 243725, rate: 0.32 },
    { upTo: 365600, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
};

const SS_RATE = 0.062;
const SS_CAP = 168600;

const MEDICARE_RATE = 0.0145;
const ADD_MEDICARE_RATE = 0.009;

const ADD_MEDICARE_THRESHOLD: Record<FilingStatus, number> = {
  single: 200000,
  marriedJoint: 250000,
  headOfHousehold: 200000,
  marriedSeparate: 125000,
};

// ==================== MAIN ====================
export function calculateSalaryAfterTax(
  annualSalary: number,
  filingStatus: FilingStatus = "single",
  stateCode: StateCode = "TX",
  preTaxDeductions: number = 0,
  taxCredits: number = 0
): TaxCalculationResult {
  if (annualSalary <= 0) return getZeroResult();

  // Clean inputs
  annualSalary = clamp(annualSalary);
  preTaxDeductions = clamp(preTaxDeductions);
  taxCredits = clamp(taxCredits);

  // ==================== INCOME ====================
  const adjustedGross = clamp(annualSalary - preTaxDeductions);
  const taxableIncome = clamp(
    adjustedGross - STANDARD_DEDUCTION[filingStatus]
  );

  // ==================== FEDERAL ====================
  const brackets = FEDERAL_BRACKETS[filingStatus];
  let federalTax = calculateProgressiveTax(taxableIncome, brackets);

  // Apply credits AFTER tax
  federalTax = clamp(federalTax - taxCredits);

  const marginalRate = getMarginalRate(taxableIncome, brackets);

  // ==================== FICA ====================
  const socialSecurity = Math.min(annualSalary, SS_CAP) * SS_RATE;
  const medicare = annualSalary * MEDICARE_RATE;
  const additionalMedicare =
    clamp(
      annualSalary - ADD_MEDICARE_THRESHOLD[filingStatus]
    ) * ADD_MEDICARE_RATE;

  const fica = socialSecurity + medicare + additionalMedicare;

  // ==================== STATE ====================
  const stateInfo = ALL_US_STATES.find((s) => s.code === stateCode);

  if (!stateInfo) throw new Error("Invalid state");

  let stateTax = 0;
  let estimatedStateTax = false;

  if (stateInfo.taxType === "none") {
    stateTax = 0;
  } else if (stateInfo.taxType === "flat" && stateInfo.flatRate) {
    stateTax = adjustedGross * (stateInfo.flatRate / 100);
  } else {
    // Instead of 0 → give rough estimate
    estimatedStateTax = true;
    stateTax = adjustedGross * 0.05; // 5% safe estimate
  }

  // ==================== TOTAL ====================
  const totalTax = federalTax + stateTax + fica;
  const net = annualSalary - totalTax;

  const effectiveRate =
    annualSalary > 0 ? (totalTax / annualSalary) * 100 : 0;

  // ==================== RETURN ====================
  return {
    gross: {
      yearly: roundMoney(annualSalary),
      monthly: roundMoney(annualSalary / 12),
    },
    adjustedGross: roundMoney(adjustedGross),
    taxableIncome: roundMoney(taxableIncome),

    tax: {
      federal: roundMoney(federalTax),
      state: roundMoney(stateTax),
      fica: roundMoney(fica),
      total: roundMoney(totalTax),
    },

    net: {
      yearly: roundMoney(net),
      monthly: roundMoney(net / 12),
    },

    effectiveRate: roundMoney(effectiveRate),
    marginalRate: roundMoney(marginalRate),

    monthlyBreakdown: {
      federal: roundMoney(federalTax / 12),
      state: roundMoney(stateTax / 12),
      fica: roundMoney(fica / 12),
      net: roundMoney(net / 12),
    },

    breakdown: {
      ficaDetails: {
        socialSecurity: roundMoney(socialSecurity),
        medicare: roundMoney(medicare),
        additionalMedicare: roundMoney(additionalMedicare),
      },
    },

    estimatedStateTax,
    hasLocalTax: (stateInfo as any).hasLocalTax ?? false,
  };
}

// ==================== ZERO ====================
function getZeroResult(): TaxCalculationResult {
  return {
    gross: { yearly: 0, monthly: 0 },
    adjustedGross: 0,
    taxableIncome: 0,
    tax: { federal: 0, state: 0, fica: 0, total: 0 },
    net: { yearly: 0, monthly: 0 },
    effectiveRate: 0,
    marginalRate: 0,
    monthlyBreakdown: { federal: 0, state: 0, fica: 0, net: 0 },
    breakdown: {
      ficaDetails: {
        socialSecurity: 0,
        medicare: 0,
        additionalMedicare: 0,
      },
    },
    estimatedStateTax: false,
    hasLocalTax: false,
  };
}