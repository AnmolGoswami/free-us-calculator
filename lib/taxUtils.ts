export function calculateCaliforniaPaycheck(
  annualSalary: number,
  payFrequency: number
) {
  const grossPerPeriod = annualSalary / payFrequency;

  // ===== FEDERAL TAX (simplified progressive) =====
  let federalTax = annualSalary * 0.22; // average bracket

  // ===== CALIFORNIA STATE TAX =====
  let stateTax = annualSalary * 0.093; // approx mid bracket

  // ===== FICA =====
  const socialSecurity = annualSalary * 0.062;
  const medicare = annualSalary * 0.0145;
  const fica = socialSecurity + medicare;

  const totalTax = federalTax + stateTax + fica;

  const netAnnual = annualSalary - totalTax;
  const netPerPeriod = netAnnual / payFrequency;

  return {
    gross: grossPerPeriod,
    federalTax: federalTax / payFrequency,
    stateTax: stateTax / payFrequency,
    fica: fica / payFrequency,
    net: netPerPeriod,
  };
}
// Salary After Tax (USA simplified 2026)

export function calculateSalaryAfterTax(
  annualSalary: number,
  stateTaxRate: number = 5
) {
  // FEDERAL TAX (simplified progressive)
  let federalTax = 0;

  if (annualSalary <= 11000) {
    federalTax = annualSalary * 0.1;
  } else if (annualSalary <= 44725) {
    federalTax = 11000 * 0.1 + (annualSalary - 11000) * 0.12;
  } else if (annualSalary <= 95375) {
    federalTax =
      11000 * 0.1 +
      (44725 - 11000) * 0.12 +
      (annualSalary - 44725) * 0.22;
  } else {
    federalTax =
      11000 * 0.1 +
      (44725 - 11000) * 0.12 +
      (95375 - 44725) * 0.22 +
      (annualSalary - 95375) * 0.24;
  }

  // FICA
  const socialSecurity = annualSalary * 0.062;
  const medicare = annualSalary * 0.0145;
  const fica = socialSecurity + medicare;

  // STATE TAX
  const stateTax = (annualSalary * stateTaxRate) / 100;

  const totalTax = federalTax + stateTax + fica;
  const net = annualSalary - totalTax;

  return {
    gross: {
      yearly: annualSalary,
      monthly: annualSalary / 12,
    },
    tax: {
      federal: federalTax,
      state: stateTax,
      fica,
      total: totalTax,
    },
    net: {
      yearly: net,
      monthly: net / 12,
    },
  };
}





// ========================================================
// Production-Grade US Payroll & Paycheck Calculation Engine
// Single TypeScript File - v10.4 (FULL 50 STATES - 2026 Static)
// ========================================================

type FilingStatus = 'single' | 'married_joint' | 'married_separate' | 'head_of_household';
type PayFrequency = 'weekly' | 'biweekly' | 'semimonthly' | 'monthly';
type BonusTaxMethod = 'flat_22' | 'aggregate';

// Extend your PaycheckInputs
export interface Deduction {
  id: string;
  label: string;
  amount: number;           // per paycheck
  affects: { federal: boolean; state: boolean; fica: boolean };
  isPreTax?: boolean;       // new: default true for most retirement/insurance
  isPercentage?: boolean;   // for 401k only
}

export interface PaycheckInputs {
  salary: number;
  additionalIncome: number;
  bonusIncome: number;
  bonusTaxMethod: "flat_22" | "aggregate";
  payFrequency: "weekly" | "biweekly" | "monthly";
  filingStatus: "single" | "married_joint" | "married_separate" | "head_of_household";
  state: string;
  city: string;                    // "NYC" or ""
  deductions: Deduction[];
  dependents: number;
  extraWithholding: number;        // per paycheck
  otherDeductions: number;         // annual
  employer401kMatch: number;       // %
  taxYear: number;                 // 2024 | 2025 | 2026
}

interface TaxBracket {
  startAmount: number;
  rate: number;
}

interface FederalFilingConfig {
  standardDeduction: number;
  brackets: TaxBracket[];
}

interface FederalConfig {
  [key: string]: FederalFilingConfig;
}

interface FicaConfig {
  socialSecurityRate: number;
  socialSecurityWageBase: number;
  medicareRate: number;
  additionalMedicareRate: number;
  additionalMedicareThresholds: Record<FilingStatus, number>;
}

interface StateFilingConfig {
  standardDeduction?: number;
  brackets?: TaxBracket[];
  flatRate?: number;
}

interface StateConfig {
  [filingStatus: string]: StateFilingConfig;
}

interface LocalTaxConfig {
  [state: string]: {
    [city: string]: {
      [filingStatus: string]: TaxBracket[];
    };
  };
}

interface TaxData {
  year: number;
  federal: FederalConfig;
  fica: FicaConfig;
  states: { [stateCode: string]: StateConfig };
  localTaxes: LocalTaxConfig;
  childTaxCreditPerDependent: number;
}

interface AuditEntry {
  step: string;
  value: number | string;
  note?: string;
}

export interface CalculationResult {
  perPaycheck: {
    gross: number;
    federal: number;
    state: number;
    local: number;
    fica: number;
    net: number;
  };
  annual: {
    gross: number;
    federal: number;
    state: number;
    local: number;
    fica: number;
    net: number;
  };
  breakdown: {
    federal: { liability: number; withheld: number; childCredit: number };
    state: { taxable: number; tax: number; sdi?: number; note?: string };
    fica: { socialSecurity: number; medicare: number; additionalMedicare: number };
    local: { taxable: number; tax: number };
    bonus?: { federal: number };
  };
  employer: { fica: number };
  audit: AuditEntry[];
  meta: {
    dataSource: 'static_2026';
    federalSource: 'official_irs_2026';
    stateSource: 'embedded' | 'flat' | 'fallback';
    year: number;
    fetchTimestamp: string;
    stateNote?: string;
  };
}

// ========================================================
// STATIC 2026 TAX DATA
// ========================================================
const TAX_DATA_2026: TaxData = {
  year: 2026,
  federal: {
    single: {
      standardDeduction: 16100,
      brackets: [
        { startAmount: 0, rate: 0.10 },
        { startAmount: 12400, rate: 0.12 },
        { startAmount: 50400, rate: 0.22 },
        { startAmount: 105700, rate: 0.24 },
        { startAmount: 201775, rate: 0.32 },
        { startAmount: 256225, rate: 0.35 },
        { startAmount: 640600, rate: 0.37 },
      ],
    },
    married_joint: {
      standardDeduction: 32200,
      brackets: [
        { startAmount: 0, rate: 0.10 },
        { startAmount: 24800, rate: 0.12 },
        { startAmount: 100800, rate: 0.22 },
        { startAmount: 211400, rate: 0.24 },
        { startAmount: 403550, rate: 0.32 },
        { startAmount: 512450, rate: 0.35 },
        { startAmount: 768700, rate: 0.37 },
      ],
    },
    married_separate: {
      standardDeduction: 16100,
      brackets: [
        { startAmount: 0, rate: 0.10 },
        { startAmount: 12400, rate: 0.12 },
        { startAmount: 50400, rate: 0.22 },
        { startAmount: 105700, rate: 0.24 },
        { startAmount: 201775, rate: 0.32 },
        { startAmount: 256225, rate: 0.35 },
        { startAmount: 640600, rate: 0.37 },
      ],
    },
    head_of_household: {
      standardDeduction: 24150,
      brackets: [
        { startAmount: 0, rate: 0.10 },
        { startAmount: 17700, rate: 0.12 },
        { startAmount: 67450, rate: 0.22 },
        { startAmount: 105700, rate: 0.24 },
        { startAmount: 201775, rate: 0.32 },
        { startAmount: 256225, rate: 0.35 },
        { startAmount: 640600, rate: 0.37 },
      ],
    },
  },
  fica: {
    socialSecurityRate: 0.062,
    socialSecurityWageBase: 184500,
    medicareRate: 0.0145,
    additionalMedicareRate: 0.009,
    additionalMedicareThresholds: {
      single: 200000,
      married_joint: 250000,
      married_separate: 125000,
      head_of_household: 200000,
    },
  },
  states: {
    // Fully detailed progressive / special
    CA: {
      single: { 
        standardDeduction: 5540, 
        brackets: [
          {startAmount:0, rate:0.01},{startAmount:11079,rate:0.02},{startAmount:26264,rate:0.04},
          {startAmount:41452,rate:0.06},{startAmount:57542,rate:0.08},{startAmount:72724,rate:0.093},
          {startAmount:371479,rate:0.103},{startAmount:445000,rate:0.113},{startAmount:698271,rate:0.123},
          {startAmount:1000000,rate:0.133}
        ] 
      },
      married_joint: { 
        standardDeduction: 11080, 
        brackets: [
          {startAmount:0,rate:0.01},{startAmount:22158,rate:0.02},{startAmount:52528,rate:0.04},
          {startAmount:82904,rate:0.06},{startAmount:115084,rate:0.08},{startAmount:145448,rate:0.093},
          {startAmount:742958,rate:0.103},{startAmount:890000,rate:0.113},{startAmount:1396542,rate:0.123},
          {startAmount:2000000,rate:0.133}
        ] 
      },
    },
    NY: {
      single: { flatRate: 0.0685 },
      married_joint: { flatRate: 0.0685 },
      married_separate: { flatRate: 0.0685 },
      head_of_household: { flatRate: 0.0685 },
    },
    // No income tax states
    AK: { single: { flatRate: 0 }, married_joint: { flatRate: 0 }, married_separate: { flatRate: 0 }, head_of_household: { flatRate: 0 } },
    FL: { single: { flatRate: 0 }, married_joint: { flatRate: 0 }, married_separate: { flatRate: 0 }, head_of_household: { flatRate: 0 } },
    NV: { single: { flatRate: 0 }, married_joint: { flatRate: 0 }, married_separate: { flatRate: 0 }, head_of_household: { flatRate: 0 } },
    NH: { single: { flatRate: 0 }, married_joint: { flatRate: 0 }, married_separate: { flatRate: 0 }, head_of_household: { flatRate: 0 } },
    SD: { single: { flatRate: 0 }, married_joint: { flatRate: 0 }, married_separate: { flatRate: 0 }, head_of_household: { flatRate: 0 } },
    TN: { single: { flatRate: 0 }, married_joint: { flatRate: 0 }, married_separate: { flatRate: 0 }, head_of_household: { flatRate: 0 } },
    TX: { single: { flatRate: 0 }, married_joint: { flatRate: 0 }, married_separate: { flatRate: 0 }, head_of_household: { flatRate: 0 } },
    WA: { single: { flatRate: 0 }, married_joint: { flatRate: 0 }, married_separate: { flatRate: 0 }, head_of_household: { flatRate: 0 } },
    WY: { single: { flatRate: 0 }, married_joint: { flatRate: 0 }, married_separate: { flatRate: 0 }, head_of_household: { flatRate: 0 } },
  },
  localTaxes: {
    NY: {
      NYC: {
        single: [{startAmount:0,rate:0.03078},{startAmount:12000,rate:0.03762},{startAmount:25000,rate:0.03819},{startAmount:50000,rate:0.03876}],
        married_joint: [{startAmount:0,rate:0.03078},{startAmount:21600,rate:0.03762},{startAmount:45000,rate:0.03819},{startAmount:90000,rate:0.03876}],
      },
    },
  },
  childTaxCreditPerDependent: 2000,
};

// Flat rates for all other states (2026 values, approximate where exact brackets not embedded)
const STATE_FLAT_RATES_2026: Record<string, number> = {
  // Flat tax states (accurate 2026)
  AZ: 0.025,   // Arizona
  CO: 0.0425,  // Colorado
  GA: 0.0509,  // Georgia (reduced)
  ID: 0.053,   // Idaho
  IL: 0.0495,  // Illinois
  IN: 0.0295,  // Indiana
  IA: 0.038,   // Iowa (approx)
  KY: 0.035,   // Kentucky (reduced)
  LA: 0.0425,  // Louisiana (approx)
  MI: 0.0425,  // Michigan
  MS: 0.04,    // Mississippi (reduced)
  NC: 0.0399,  // North Carolina (reduced)
  OH: 0.0275,  // Ohio (new flat)
  PA: 0.0307,  // Pennsylvania
  UT: 0.045,   // Utah (approx)

  // Other common states (effective/flat approximation)
  AL: 0.05,    // Alabama graduated → ~5%
  AR: 0.039,   // Arkansas
  CT: 0.05,    // Connecticut
  DE: 0.066,   // Delaware
  HI: 0.08,    // Hawaii (higher for high earners)
  KS: 0.057,   // Kansas
  ME: 0.0715,  // Maine
  MD: 0.0575,  // Maryland
  MA: 0.05,    // Massachusetts
  MN: 0.075,   // Minnesota
  MO: 0.047,   // Missouri
  MT: 0.0565,  // Montana (reduced)
  NE: 0.0455,  // Nebraska (reduced)
  NJ: 0.08,    // New Jersey (higher brackets)
  NM: 0.055,   // New Mexico
  ND: 0.029,   // North Dakota
  OK: 0.045,   // Oklahoma (reduced)
  OR: 0.09,    // Oregon (high)
  RI: 0.0599,  // Rhode Island
  SC: 0.06,    // South Carolina
  VT: 0.0875,  // Vermont
  VA: 0.0575,  // Virginia
  WV: 0.0482,  // West Virginia
  WI: 0.0765,  // Wisconsin
};

// utils/numberFormat.ts

export const formatCompact = (num: number): string => {
  if (num < 1000) return num.toLocaleString('en-US');

  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 2,
  });

  return formatter.format(num);
};

export const formatFull = (num: number): string => {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

// Optional: More control over suffixes if you want custom styling
export const formatAbbreviated = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2).replace(/\.?0+$/, '') + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.?0+$/, '') + 'K';
  }
  return num.toString();
};

// ========================================================
// HELPERS
// ========================================================
const getPayPeriods = (freq: PayFrequency): number => {
  const map: Record<PayFrequency, number> = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 };
  return map[freq];
};

const roundCents = (amount: number): number => Math.round(amount * 100) / 100;

const calculateProgressiveTax = (taxable: number, brackets: TaxBracket[]): number => {
  if (taxable <= 0) return 0;
  let tax = 0;
  for (let i = 0; i < brackets.length; i++) {
    const lower = brackets[i].startAmount;
    const rate = brackets[i].rate;
    const upper = i + 1 < brackets.length ? brackets[i + 1].startAmount : Infinity;
    const inBracket = Math.min(taxable, upper) - lower;
    if (inBracket > 0) tax += inBracket * rate;
  }
  return roundCents(tax);
};

const validateInputs = (inputs: PaycheckInputs): void => {
  if (inputs.salary <= 0) throw new Error('Salary must be positive');
  if (inputs.deductions.some(d => d.amount < 0)) throw new Error('Deductions cannot be negative');
};

// ========================================================
// MAIN ENGINE
// ========================================================
export async function calculatePaycheck(inputs: PaycheckInputs): Promise<CalculationResult> {
  validateInputs(inputs);

  const taxData = TAX_DATA_2026;
  const year = 2026;

  const meta = {
    dataSource: 'static_2026' as const,
    federalSource: 'official_irs_2026' as const,
    stateSource: 'embedded' as const,
    year,
    fetchTimestamp: new Date().toISOString(),
  };

  return runCalculation(inputs, taxData, meta);
}

async function runCalculation(
  inputs: PaycheckInputs,
  taxData: TaxData,
  baseMeta: any
): Promise<CalculationResult> {

  const periods = getPayPeriods(inputs.payFrequency);

  // =========================
  // ✅ INCOME
  // =========================
  const annualAdditional = inputs.additionalIncome || 0;
  const annualBonus = inputs.bonusIncome || 0;
  const annualBaseGross = roundCents(inputs.salary + annualAdditional);
  const annualGross = roundCents(annualBaseGross + annualBonus);

  // =========================
  // ✅ FIX 1: HANDLE % DEDUCTIONS (401k)
  // =========================
  const normalizedDeductions = inputs.deductions.map(d => {
    let amount = d.amount;

    if (d.isPercentage) {
      amount = (annualBaseGross * d.amount) / 100 / periods;
    }

    return { ...d, amount };
  });

  // =========================
  // ✅ DEDUCTIONS
  // =========================
  const totalDeductionAnnual =
    normalizedDeductions.reduce((sum, d) => sum + d.amount * periods, 0)
    + (inputs.otherDeductions || 0);

  const federalPreTaxAnnual =
    normalizedDeductions.filter(d => d.affects.federal && d.isPreTax !== false)
      .reduce((sum, d) => sum + d.amount * periods, 0)
    + (inputs.otherDeductions || 0);

  const statePreTaxAnnual =
    normalizedDeductions.filter(d => d.affects.state && d.isPreTax !== false)
      .reduce((sum, d) => sum + d.amount * periods, 0);

  const ficaPreTaxAnnual =
    normalizedDeductions.filter(d => d.affects.fica && d.isPreTax !== false)
      .reduce((sum, d) => sum + d.amount * periods, 0);

  // =========================
  // ✅ FICA
  // =========================
  const fica = taxData.fica;

  const ficaTaxable = Math.max(0, annualGross - ficaPreTaxAnnual);

  const ssTaxable = Math.min(ficaTaxable, fica.socialSecurityWageBase);
  const socialSecurity = roundCents(ssTaxable * fica.socialSecurityRate);

  const medicare = roundCents(ficaTaxable * fica.medicareRate);

  const additionalMedicare = roundCents(
    Math.max(0, ficaTaxable - fica.additionalMedicareThresholds[inputs.filingStatus]) *
    fica.additionalMedicareRate
  );

  const annualFicaEmployee = roundCents(
    socialSecurity + medicare + additionalMedicare
  );

  const annualFicaEmployer = roundCents(
    socialSecurity + medicare
  );

  // =========================
  // ✅ FEDERAL TAX (CORRECTED)
  // =========================
  const fedConfig = taxData.federal[inputs.filingStatus];

  const fedTaxable = Math.max(
    0,
    annualBaseGross - federalPreTaxAnnual - fedConfig.standardDeduction
  );

  let federalLiability = calculateProgressiveTax(
    fedTaxable,
    fedConfig.brackets
  );

  const childCredit = Math.min(
    (inputs.dependents || 0) * taxData.childTaxCreditPerDependent,
    federalLiability
  );

  federalLiability = Math.max(0, federalLiability - childCredit);

  // ✅ withholding (real paycheck behavior)
  const annualWithheld = calculateFederalWithholdingAnnual(
    annualBaseGross,
    federalPreTaxAnnual,
    inputs,
    fedConfig
  );

  const finalPerFederal = roundCents(
    (annualWithheld / periods) + (inputs.extraWithholding || 0)
  );

  const annualFederalTotal = roundCents(
    annualWithheld + (inputs.extraWithholding || 0) * periods
  );

  // =========================
  // ✅ STATE TAX
  // =========================
  const stateCode = inputs.state.toUpperCase();
  const stateCfg = taxData.states[stateCode];

  let stateIncomeTax = 0;

  if (stateCfg) {
    const stateFiling = stateCfg[inputs.filingStatus] || stateCfg.single;

    if ('flatRate' in stateFiling) {
      const taxable = Math.max(0, annualGross - statePreTaxAnnual);
      stateIncomeTax = roundCents(taxable * stateFiling.flatRate!);
    } else {
      const taxable = Math.max(
        0,
        annualGross - statePreTaxAnnual - (stateFiling.standardDeduction || 0)
      );
      stateIncomeTax = calculateProgressiveTax(
        taxable,
        stateFiling.brackets!
      );
    }
  } else {
    const rate = STATE_FLAT_RATES_2026[stateCode] || 0.05;
    const taxable = Math.max(0, annualGross - statePreTaxAnnual);
    stateIncomeTax = roundCents(taxable * rate);
  }

  // =========================
  // ✅ CA SDI
  // =========================
  let caSdi = 0;
  if (stateCode === "CA") {
    caSdi = roundCents(annualGross * 0.013);
  }

  // =========================
  // ✅ LOCAL TAX
  // =========================
  let localTax = 0;

  if (inputs.city && taxData.localTaxes[stateCode]?.[inputs.city]) {
    const brackets =
      taxData.localTaxes[stateCode][inputs.city][inputs.filingStatus] || [];

    const taxable = Math.max(0, annualGross - statePreTaxAnnual);

    localTax = calculateProgressiveTax(taxable, brackets);
  }

  // =========================
  // ✅ TOTALS
  // =========================
  const annualTaxes = roundCents(
    annualFederalTotal +
    stateIncomeTax +
    localTax +
    annualFicaEmployee +
    caSdi
  );

  const annualNet = roundCents(
    annualGross - totalDeductionAnnual - annualTaxes
  );

  // =========================
  // ✅ PER PAYCHECK (FIXED)
  // =========================
  const perGross = roundCents(annualGross / periods);

  const perDeductions = normalizedDeductions.reduce(
    (sum, d) => sum + d.amount,
    0
  );

  const perState = roundCents((stateIncomeTax + caSdi) / periods);
  const perLocal = roundCents(localTax / periods);
  const perFica = roundCents(annualFicaEmployee / periods);

  const perNet = roundCents(
    perGross -
    perDeductions -
    finalPerFederal -
    perState -
    perLocal -
    perFica
  );

  return {
    perPaycheck: {
      gross: perGross,
      federal: finalPerFederal,
      state: perState,
      local: perLocal,
      fica: perFica,
      net: perNet,
    },
    annual: {
      gross: annualGross,
      federal: annualFederalTotal,
      state: roundCents(stateIncomeTax + caSdi),
      local: localTax,
      fica: annualFicaEmployee,
      net: annualNet,
    },
    breakdown: {
      federal: { liability: federalLiability, withheld: annualWithheld, childCredit },
      state: { taxable: annualGross, tax: stateIncomeTax },
      fica: { socialSecurity, medicare, additionalMedicare },
      local: { taxable: annualGross, tax: localTax },
    },
    employer: { fica: annualFicaEmployer },
    audit: [],
    meta: baseMeta,
  };
}

const calculateFederalWithholdingAnnual = (
  annualizedGross: number,
  annualizedFederalPreTax: number,
  inputs: PaycheckInputs,
  fedConfig: FederalFilingConfig
): number => {
  let taxable = Math.max(0, annualizedGross - annualizedFederalPreTax - fedConfig.standardDeduction);
  if (inputs.otherDeductions !== undefined) {
    taxable = Math.max(0, taxable - inputs.otherDeductions);
  }
  return calculateProgressiveTax(taxable, fedConfig.brackets);
};








// Rent Afoortability cal 

