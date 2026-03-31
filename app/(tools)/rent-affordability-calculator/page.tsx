// SERVER COMPONENT

import CalculatorContainer from "@/components/ui/CalculatorContainer";
import AdBanner from "@/components/common/AdBanner";
import { getToolContent } from "@/lib/seo";
import RentAffordabilityClient from "./RentAffordabilityClient";

export default function RentAffordabilityPage() {
  const seoContent = getToolContent("rent-affordability-calculator");

  return (
    <>
      <CalculatorContainer
        title="Rent Affordability Calculator (USA 2026)"
        description="Find how much rent you can afford based on your income using the 30% rule and debt-adjusted budgeting."
      >
        <RentAffordabilityClient />
      </CalculatorContainer>

      {/* SEO CONTENT */}
      <div className="mt-20 max-w-4xl mx-auto prose prose-gray px-6">
        <div dangerouslySetInnerHTML={{ __html: seoContent }} />
      </div>

      <AdBanner />
    </>
  );
}