// app/(tools)/salary-after-tax-calculator/page.tsx

import CalculatorContainer from "@/components/ui/CalculatorContainer";
import AdBanner from "@/components/common/AdBanner";
import { getToolContent } from "@/lib/seo";
import SalaryAfterTaxClient from "./SalaryAfterTaxClient";
import ShareButtons from "@/components/calculators/ShareButtons";

export default function SalaryAfterTaxPage() {
  const seoContent = getToolContent("salary-after-tax-calculator");

  return (
    <>
      <CalculatorContainer
        title="Salary After Tax Calculator (USA 2026)"
        description="Calculate your take-home salary after federal, state, and FICA taxes in the United States."
      >
        <SalaryAfterTaxClient />
      </CalculatorContainer>

      {/* SEO CONTENT */}
      <div className="mt-20 max-w-4xl mx-auto px-6 prose prose-gray">
        <div dangerouslySetInnerHTML={{ __html: seoContent }} />
      </div>

    <ShareButtons
        title="Salary After Tax Calculator 2026"
        url="https://freeuscalculator.com/salary-after-tax-calculator"
      />
      <AdBanner />
    </>
  );
}