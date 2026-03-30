// lib/earningUtils.ts

export function calculateDoorDashEarnings(
  ordersPerHour: number,
  earningPerOrder: number,
  hoursPerDay: number,
  daysPerWeek: number
) {
  const hourly = ordersPerHour * earningPerOrder;
  const daily = hourly * hoursPerDay;
  const weekly = daily * daysPerWeek;
  const monthly = weekly * 4;

  return {
    hourly,
    daily,
    weekly,
    monthly,
  };
}