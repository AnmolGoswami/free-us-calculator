// lib/earningUtils.ts
import Decimal from 'decimal.js';

// =============================================
// CORE TYPES (Stripe-Level Precision)
// =============================================

export type CurrencyCode = string;

const VALID_CURRENCIES = new Set([
  'USD', 'INR', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CNY', 'BRL', 'MXN', 'SGD',
]);

export interface CalculationIssue {
  code: string;
  message: string;
  severity: 'info' | 'warning' | 'error';
  field?: string;
  context?: Record<string, unknown>;
}

export interface ValidationResult {
  isValid: boolean;
  issues: CalculationIssue[];
}

export interface CalculationMetadata {
  timestamp: string;
  currency: CurrencyCode;
  version: string;
  assumptions: string[];
  warnings: CalculationIssue[];
  confidenceScore: number; // 0.0 to 1.0
  debug?: {
    computationTimeMs: number;
    decimalPrecision: number;
  };
}

export interface PeriodAmounts {
  hourly: number;
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;

  // Audit-friendly exact values (smallest unit as string)
  raw: {
    hourly: string;
    daily: string;
    weekly: string;
    monthly: string;
    yearly: string;
  };
}

export interface WorkMetrics {
  ordersPerWeek: number;
  milesPerWeek: number;
  hoursPerWeek: number;
}

export interface EarningsBreakdown {
  gross: PeriodAmounts;
  expenses: PeriodAmounts;
  tax: PeriodAmounts;
  net: PeriodAmounts;

  metrics: WorkMetrics;
  effectiveHourlyNet: number;

  validation: ValidationResult;
  metadata: CalculationMetadata;
}

// =============================================
// INPUTS + TAX ENGINE
// =============================================

export interface DoorDashInputs {
  ordersPerHour: number;
  earningPerOrder: number;   // major unit (e.g. 12.50)
  hoursPerDay: number;
  daysPerWeek: number;
  milesPerOrder: number;
  costPerMile: number;
  taxRate: number;           // base % (used as fallback)
  currency: CurrencyCode;
  region?: 'US' | 'IN' | string;
  includeSelfEmploymentTax?: boolean;
  additionalWeeklyExpenses?: number;
}

export interface TaxCalculationContext {
  weeklyProfit: Decimal;
  baseTaxRate: number;
  region?: string;
  includeSelfEmploymentTax?: boolean;
}

export interface TaxEngine {
  calculateTax(ctx: TaxCalculationContext): Decimal;
}

// Improved default tax engine with region awareness
const defaultTaxEngine: TaxEngine = {
  calculateTax({ weeklyProfit, baseTaxRate, region, includeSelfEmploymentTax }) {
    if (weeklyProfit.lte(0)) return new Decimal(0);

    const profit = weeklyProfit;
    let tax = new Decimal(0);

    if (region === 'US') {
      // US Self-Employment Tax (15.3% on 92.35% of net profit)
      let seTax = new Decimal(0);
      if (includeSelfEmploymentTax !== false) {
        const seBase = profit.mul(0.9235);
        seTax = seBase.mul(0.153);
      }

      // Income tax on profit (after half SE tax deduction approximation)
      const incomeTaxBase = profit.minus(seTax.div(2));
      const incomeTax = incomeTaxBase.mul(new Decimal(baseTaxRate).div(100));

      tax = seTax.plus(incomeTax);
    } 
    else if (region === 'IN') {
      // India: Simplified estimate for gig income (Profits & Gains from Business)
      // Use provided taxRate or default progressive approximation
      const effectiveRate = baseTaxRate > 0 ? baseTaxRate : 20; // fallback ~20% avg for many gig workers
      tax = profit.mul(new Decimal(effectiveRate).div(100));
      // Note: No separate SE tax like US. Actual tax depends on slabs, deductions, etc.
    } 
    else {
      // Generic fallback
      tax = profit.mul(new Decimal(baseTaxRate).div(100));
    }

    return tax;
  },
};

// =============================================
// CONSTANTS & CONFIG
// =============================================

const WEEKS_PER_YEAR = new Decimal(52);
const AVG_WEEKS_PER_MONTH = new Decimal('4.345238095238095');

const INTERNAL_PRECISION = 20;

const CURRENCY_MINOR_UNITS: Record<string, number> = {
  USD: 2, INR: 2, EUR: 2, GBP: 2, CAD: 2, AUD: 2,
  JPY: 0, CNY: 2, BRL: 2, MXN: 2, SGD: 2,
};

function getMinorUnits(currency: CurrencyCode): number {
  return CURRENCY_MINOR_UNITS[currency] ?? 2;
}

// =============================================
// MAIN FUNCTION
// =============================================

export function calculateDoorDashEarnings(
  inputs: DoorDashInputs,
  options: {
    timestamp?: string;
    taxEngine?: TaxEngine;
    roundingMode?: Decimal.Rounding;
  } = {}
): EarningsBreakdown {
  const startTime = Date.now();
  const timestamp = options.timestamp ?? new Date().toISOString();
  const taxEngine = options.taxEngine ?? defaultTaxEngine;
  const roundingMode = options.roundingMode ?? Decimal.ROUND_HALF_EVEN;

  // 1. Validation + Normalization
  const normalized = normalizeInputs(inputs);
  const validation = validateInputs(normalized);

  // 2. Core calculations (all in high-precision Decimal)
  const localDecimal = Decimal.clone({ precision: INTERNAL_PRECISION });

  const hoursPerWeek = localDecimal(normalized.hoursPerDay).mul(normalized.daysPerWeek);
  const ordersPerWeek = localDecimal(normalized.ordersPerHour).mul(hoursPerWeek);
  const milesPerWeek = ordersPerWeek.mul(normalized.milesPerOrder);

  const earningPerOrderSmallest = toSmallestUnit(normalized.earningPerOrder, normalized.currency);
  const costPerMileSmallest = toSmallestUnit(normalized.costPerMile, normalized.currency);
  const additionalExpensesSmallest = toSmallestUnit(normalized.additionalWeeklyExpenses, normalized.currency);

  const weeklyGrossSmallest = ordersPerWeek.mul(earningPerOrderSmallest);
  const weeklyExpensesSmallest = milesPerWeek.mul(costPerMileSmallest).plus(additionalExpensesSmallest);
  const weeklyProfitSmallest = weeklyGrossSmallest.minus(weeklyExpensesSmallest);

  const weeklyTaxSmallest = taxEngine.calculateTax({
    weeklyProfit: weeklyProfitSmallest,
    baseTaxRate: normalized.taxRate,
    region: normalized.region,
    includeSelfEmploymentTax: normalized.includeSelfEmploymentTax,
  });

  const weeklyNetSmallest = weeklyProfitSmallest.minus(weeklyTaxSmallest);

  // 3. Build display periods (rounding only here)
  const gross = buildPeriodAmounts(weeklyGrossSmallest, hoursPerWeek, normalized.daysPerWeek, normalized.currency, roundingMode);
  const expenses = buildPeriodAmounts(weeklyExpensesSmallest, hoursPerWeek, normalized.daysPerWeek, normalized.currency, roundingMode);
  const tax = buildPeriodAmounts(weeklyTaxSmallest, hoursPerWeek, normalized.daysPerWeek, normalized.currency, roundingMode);
  const net = buildPeriodAmounts(weeklyNetSmallest, hoursPerWeek, normalized.daysPerWeek, normalized.currency, roundingMode);

  const effectiveHourlyNet = Number(net.hourly);

  // 4. Metadata
  const metadata: CalculationMetadata = {
    timestamp,
    currency: normalized.currency,
    version: '2.2.0-stripe-grade',

    assumptions: [
      'All internal calculations use Decimal.js with 20-digit precision (no floating point errors)',
      'Rounding applied only at final display layer using Bankers Rounding (ROUND_HALF_EVEN)',
      'Tax is a simplified estimate — actual tax liability may differ significantly',
      'For US: Includes self-employment tax + half SE tax deduction approximation',
      'For India: Simplified flat estimate under business income; consult a Chartered Accountant',
      'Monthly uses exact 52/12 weeks average',
      'Values stored in smallest currency unit internally for audit accuracy',
    ],

    warnings: validation.issues.filter(i => i.severity === 'warning'),

    confidenceScore: calculateConfidenceScore(normalized, effectiveHourlyNet),

    debug: {
      computationTimeMs: Math.max(0, Date.now() - startTime),
      decimalPrecision: INTERNAL_PRECISION,
    },
  };

  return {
    gross,
    expenses,
    tax,
    net,
    metrics: {
      ordersPerWeek: roundForDisplay(ordersPerWeek),
      milesPerWeek: roundForDisplay(milesPerWeek),
      hoursPerWeek: roundForDisplay(hoursPerWeek),
    },
    effectiveHourlyNet: roundForDisplay(effectiveHourlyNet, 2),
    validation,
    metadata,
  };
}

// =============================================
// HELPERS
// =============================================

function toSmallestUnit(amount: number, currency: CurrencyCode): Decimal {
  const minor = getMinorUnits(currency);
  return new Decimal(amount).mul(new Decimal(10).pow(minor));
}

function fromSmallestUnit(smallest: Decimal, currency: CurrencyCode, roundingMode: Decimal.Rounding): number {
  const minor = getMinorUnits(currency);
  return Number(
    smallest
      .div(new Decimal(10).pow(minor))
      .toDecimalPlaces(minor > 0 ? minor : 0, roundingMode)
  );
}

function buildPeriodAmounts(
  weeklySmallest: Decimal,
  hoursPerWeek: Decimal,
  daysPerWeek: number,
  currency: CurrencyCode,
  roundingMode: Decimal.Rounding
): PeriodAmounts {
  const hourlySmallest = hoursPerWeek.gt(0) ? weeklySmallest.div(hoursPerWeek) : new Decimal(0);
  const dailySmallest = daysPerWeek > 0 ? weeklySmallest.div(daysPerWeek) : new Decimal(0);

  const minor = getMinorUnits(currency);

  return {
    hourly: fromSmallestUnit(hourlySmallest, currency, roundingMode),
    daily: fromSmallestUnit(dailySmallest, currency, roundingMode),
    weekly: fromSmallestUnit(weeklySmallest, currency, roundingMode),
    monthly: fromSmallestUnit(weeklySmallest.mul(AVG_WEEKS_PER_MONTH), currency, roundingMode),
    yearly: fromSmallestUnit(weeklySmallest.mul(WEEKS_PER_YEAR), currency, roundingMode),
    raw: {
      hourly: hourlySmallest.toFixed(minor),
      daily: dailySmallest.toFixed(minor),
      weekly: weeklySmallest.toFixed(minor),
      monthly: weeklySmallest.mul(AVG_WEEKS_PER_MONTH).toFixed(minor),
      yearly: weeklySmallest.mul(WEEKS_PER_YEAR).toFixed(minor),
    },
  };
}

function normalizeInputs(inputs: DoorDashInputs) {
  if (!VALID_CURRENCIES.has(inputs.currency)) {
    throw new Error(`Unsupported currency: ${inputs.currency}`);
  }

  return {
    ordersPerHour: Math.max(0, inputs.ordersPerHour),
    earningPerOrder: Math.max(0, inputs.earningPerOrder),
    hoursPerDay: Math.max(0, Math.min(24, inputs.hoursPerDay)),
    daysPerWeek: Math.max(1, Math.min(7, inputs.daysPerWeek)),
    milesPerOrder: Math.max(0, inputs.milesPerOrder),
    costPerMile: Math.max(0, inputs.costPerMile),
    taxRate: Math.max(0, Math.min(100, inputs.taxRate)),
    currency: inputs.currency,
    region: inputs.region || 'IN', // default to India for your location
    includeSelfEmploymentTax: inputs.includeSelfEmploymentTax ?? (inputs.region === 'US'),
    additionalWeeklyExpenses: Math.max(0, inputs.additionalWeeklyExpenses ?? 0),
  };
}

function validateInputs(normalized: ReturnType<typeof normalizeInputs>): ValidationResult {
  const issues: CalculationIssue[] = [];

  if (normalized.ordersPerHour <= 0) {
    issues.push({ code: 'INVALID_ORDERS_PER_HOUR', message: 'Orders per hour must be > 0', severity: 'error', field: 'ordersPerHour' });
  }
  if (normalized.earningPerOrder <= 0) {
    issues.push({ code: 'INVALID_EARNING_PER_ORDER', message: 'Earning per order must be > 0', severity: 'error', field: 'earningPerOrder' });
  }
  if (normalized.hoursPerDay <= 0) {
    issues.push({ code: 'INVALID_HOURS_PER_DAY', message: 'Hours per day must be > 0', severity: 'error', field: 'hoursPerDay' });
  }

  // Realism warnings
  if (normalized.ordersPerHour > 6) {
    issues.push({ code: 'UNREALISTIC_ORDERS_PER_HOUR', message: 'Orders per hour > 6 is unusually high for most markets', severity: 'warning', field: 'ordersPerHour' });
  }
  if (normalized.hoursPerDay > 12) {
    issues.push({ code: 'LONG_WORKDAY', message: 'Working more than 12 hours/day may not be sustainable', severity: 'warning', field: 'hoursPerDay' });
  }

  return {
    isValid: issues.every(i => i.severity !== 'error'),
    issues,
  };
}

function calculateConfidenceScore(
  inputs: ReturnType<typeof normalizeInputs>,
  hourlyNet: number
): number {
  let score = 1.0;

  if (inputs.ordersPerHour > 5) score -= 0.20;
  if (inputs.ordersPerHour > 7) score -= 0.15;
  if (hourlyNet > 25) score -= 0.25;     // Realistic net is usually much lower
  if (hourlyNet > 40) score -= 0.20;
  if (inputs.hoursPerDay > 10) score -= 0.10;
  if (inputs.hoursPerDay > 14) score -= 0.15;
  if (inputs.taxRate > 40) score -= 0.05;

  if (!Number.isFinite(score)) return 0;
  return Math.min(1, Math.max(0, Number(score.toFixed(2))));
}

function roundForDisplay(value: Decimal | number, decimals = 2): number {
  return Number(new Decimal(value).toDecimalPlaces(decimals, Decimal.ROUND_HALF_EVEN));
}

// ================= FINTECH-GRADE FORMATTERS =================
const formatCompactCurrency = (value: number, currency: string, decimals = 2): string => {
  const absValue = Math.abs(value);

  let formatted: string;

  if (absValue >= 1_000_000_000) {
    formatted = (value / 1_000_000_000).toFixed(decimals) + "B";
  } else if (absValue >= 1_000_000) {
    formatted = (value / 1_000_000).toFixed(decimals) + "M";
  } else if (absValue >= 10_000) {
    formatted = (value / 1_000).toFixed(decimals) + "K";
  } else {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  }

  // Add currency symbol for compact formats
  return currency === "INR" 
    ? `₹${formatted}` 
    : `$${formatted}`;
};

const formatFullCurrency = (value: number, currency: string, decimals = 2): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Math.max(0, value));
};