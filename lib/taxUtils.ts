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