// lib/earningUtils.ts

// ===============================
// 🚗 DoorDash Earnings Calculator
// ===============================
// lib/earningUtils.ts
// lib/earningUtils.ts
// lib/earningUtils.ts
export function calculateDoorDashEarnings({
  ordersPerHour,
  earningPerOrder,
  hoursPerDay,
  daysPerWeek,
  milesPerOrder,
  costPerMile,
  taxRate,
}: {
  ordersPerHour: number;
  earningPerOrder: number;
  hoursPerDay: number;
  daysPerWeek: number;
  milesPerOrder: number;
  costPerMile: number;
  taxRate: number;
}) {
  const hoursPerWeek = hoursPerDay * daysPerWeek;
  const ordersPerWeek = ordersPerHour * hoursPerWeek;

  const weeklyGross = ordersPerWeek * earningPerOrder;
  const monthlyGross = weeklyGross * 4.345;
  const yearlyGross = weeklyGross * 52;

  const weeklyMiles = ordersPerWeek * milesPerOrder;
  const weeklyExpenses = weeklyMiles * costPerMile;
  const monthlyExpenses = weeklyExpenses * 4.345;
  const yearlyExpenses = weeklyExpenses * 52;

  const weeklyProfit = weeklyGross - weeklyExpenses;
  const monthlyProfit = monthlyGross - monthlyExpenses;
  const yearlyProfit = yearlyGross - yearlyExpenses;

  const weeklyTax = weeklyProfit * (taxRate / 100);
  const monthlyTax = monthlyProfit * (taxRate / 100);
  const yearlyTax = yearlyProfit * (taxRate / 100);

  const weeklyNet = weeklyProfit - weeklyTax;
  const monthlyNet = monthlyProfit - monthlyTax;
  const yearlyNet = yearlyProfit - yearlyTax;

  const hourlyGross = ordersPerHour * earningPerOrder;
  const hourlyNet = hoursPerWeek > 0 ? weeklyNet / hoursPerWeek : 0;

  return {
    gross: { hourly: hourlyGross, weekly: weeklyGross, monthly: monthlyGross, yearly: yearlyGross },
    expenses: { weekly: weeklyExpenses, monthly: monthlyExpenses, yearly: yearlyExpenses },
    tax: { weekly: weeklyTax, monthly: monthlyTax, yearly: yearlyTax },
    net: { hourly: hourlyNet, weekly: weeklyNet, monthly: monthlyNet, yearly: yearlyNet },
    ordersPerWeek,
    milesPerWeek: weeklyMiles,
  };
}

// ======================================
// 💼 Hourly → Salary Calculator (US PRO)
// ======================================
// lib/earningUtils.ts
// lib/earningUtils.ts
export function calculateHourlyToSalary({
  mode,
  hourlyRate = 0,
  annualSalary = 0,
  hoursPerWeek = 40,
  overtimeEnabled = false,
  overtimeHours = 0,
  overtimeMultiplier = 1.5,
  taxRatePercent = 0,
  currency = "USD",
}: {
  mode:
    | "hourly-to-salary"
    | "salary-to-hourly"
    | "time-and-half"
    | "overtime";
  hourlyRate?: number;
  annualSalary?: number;
  hoursPerWeek?: number;
  overtimeEnabled?: boolean;
  overtimeHours?: number;
  overtimeMultiplier?: number;
  taxRatePercent?: number;
  currency?: string;
}) {
  const WEEKS_PER_YEAR = 52;
  const STANDARD_HOURS = 40;

  const safe = (n: number) => (isNaN(n) ? 0 : n);

  let yearlyGross = 0;
  let weekly = 0;
  let result: any = {};
  let overtimeHrs = 0;

  /* -------------------------------
  1. Hourly → Salary (REAL LOGIC)
  --------------------------------*/
  if (mode === "hourly-to-salary") {
    const regularHours = Math.min(hoursPerWeek, STANDARD_HOURS);

    // 🔥 IMPORTANT: ignore overtime here (clean UX)
    weekly = regularHours * hourlyRate;
    yearlyGross = weekly * WEEKS_PER_YEAR;

    result = {
      hourly: hourlyRate,
      weekly,
      monthly: yearlyGross / 12,
      yearly: yearlyGross,
    };
  }

  /* -------------------------------
  2. Salary → Hourly
  --------------------------------*/
  if (mode === "salary-to-hourly") {
    const totalHours = hoursPerWeek * WEEKS_PER_YEAR;
    const hourly = totalHours > 0 ? annualSalary / totalHours : 0;

    yearlyGross = annualSalary;
    weekly = annualSalary / WEEKS_PER_YEAR;

    result = {
      hourly,
      weekly,
      monthly: annualSalary / 12,
      yearly: annualSalary,
    };
  }

  /* -------------------------------
  3. Time and a Half
  --------------------------------*/
  if (mode === "time-and-half") {
    const overtimeRate = hourlyRate * overtimeMultiplier;

    yearlyGross = overtimeRate * STANDARD_HOURS * WEEKS_PER_YEAR;
    weekly = overtimeRate * STANDARD_HOURS;

    result = {
      baseRate: hourlyRate,
      overtimeRate,
      weekly,
      yearly: yearlyGross,
    };
  }

  /* -------------------------------
  4. Overtime Only
  --------------------------------*/
  if (mode === "overtime") {
    overtimeHrs = overtimeHours;

    const overtimeRate = hourlyRate * overtimeMultiplier;
    const overtimePay = overtimeHrs * overtimeRate;

    weekly = overtimePay;
    yearlyGross = overtimePay * WEEKS_PER_YEAR;

    result = {
      overtimeHours: overtimeHrs,
      overtimeRate,
      overtimePay,
      weekly,
      yearly: yearlyGross,
    };
  }

  /* -------------------------------
  COMMON CALCULATIONS (🔥 BIG UPGRADE)
  --------------------------------*/

  const baseYearly = safe(yearlyGross);

  const monthly = baseYearly / 12;
  const weeklyCalc = baseYearly / WEEKS_PER_YEAR;
  const daily = weeklyCalc / 5;

  const hourlyEffective =
    hoursPerWeek > 0 ? baseYearly / (hoursPerWeek * WEEKS_PER_YEAR) : 0;

  const perMinute = hourlyEffective / 60;
  const perSecond = perMinute / 60;

  // ⏱ time to earn $100
  const timeTo100 =
    hourlyEffective > 0 ? (100 / hourlyEffective) * 60 : 0; // in minutes

  /* -------------------------------
  TAX
  --------------------------------*/
  const yearlyTax = baseYearly * (taxRatePercent / 100);
  const yearlyNet = baseYearly - yearlyTax;

  /* -------------------------------
  FINAL RETURN
  --------------------------------*/
  return {
    mode,
    result,

    // 🔥 MAIN DATA (for cards)
    summary: {
      hourly: safe(result.hourly || hourlyRate),
      weekly: safe(weeklyCalc),
      monthly: safe(monthly),
      yearly: safe(baseYearly),
      daily: safe(daily),
    },

    // 🔥 ENGAGEMENT DATA
    extras: {
      perMinute: safe(perMinute),
      perSecond: safe(perSecond),
      timeToEarn100Minutes: safe(timeTo100),
    },

    // 🔥 FINANCIAL
    gross: {
      yearly: safe(baseYearly),
      monthly: safe(monthly),
      weekly: safe(weeklyCalc),
    },

    tax: {
      yearly: safe(yearlyTax),
      monthly: safe(yearlyTax / 12),
      weekly: safe(yearlyTax / 52),
    },

    net: {
      yearly: safe(yearlyNet),
      monthly: safe(yearlyNet / 12),
      weekly: safe(yearlyNet / 52),
    },

    effectiveHourly: safe(hourlyEffective),

    overtimeHours: overtimeHrs,
    currency,
  };
}