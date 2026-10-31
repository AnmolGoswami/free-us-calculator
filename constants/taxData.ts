// constants/taxData.ts
// Single source of truth for 2026 tax constants

export const TAX_YEAR = 2026;

// FICA (Social Security & Medicare)
export const SS_WAGE_BASE = 184500;
export const SS_RATE = 0.062; // 6.2%
export const MEDICARE_RATE = 0.0145; // 1.45%
export const ADDITIONAL_MEDICARE_RATE = 0.009; // 0.9%

// Self Employment
export const SE_TAX_RATE = 0.153; // 15.3%

// Standard Deductions 2026
export const STANDARD_DEDUCTION = {
  single: 16100,
  marriedJoint: 32200,
  headOfHousehold: 24150,
  marriedSeparate: 16100,
};

// Additional Medicare Tax Thresholds
export const ADDITIONAL_MEDICARE_THRESHOLD = {
  single: 200000,
  marriedJoint: 250000,
  headOfHousehold: 200000,
  marriedSeparate: 125000,
};

// Retirement contribution limits 2026
export const RETIREMENT_LIMITS = {
  '401k_under_50': 24500,
  '401k_50_and_over': 32000,
  ira_under_50: 7500,
  ira_50_and_over: 8500,
};

// 2026 Federal Brackets 
// (For exact paycheck precision, lib/taxUtils.ts has the detailed brackets,
// but we keep these simple constants as a source of truth for UI/explanatory text)
