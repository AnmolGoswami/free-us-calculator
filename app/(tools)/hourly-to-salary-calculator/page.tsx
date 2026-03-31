// SERVER COMPONENT

import CalculatorContainer from "@/components/ui/CalculatorContainer";
import AdBanner from "@/components/common/AdBanner";
import { getToolContent } from "@/lib/seo";
import HourlyToSalaryClient from "./HourlyToSalaryClient";

export default function HourlyToSalaryPage() {
  const seoContent = getToolContent("hourly-to-salary-calculator");

  return (
    <>
      <CalculatorContainer
        title="Hourly to Salary Calculator (USA 2026)"
        description="Convert your hourly wage into weekly, monthly, and yearly salary with overtime and estimated taxes."
      >
        <HourlyToSalaryClient />
      </CalculatorContainer>

      {/* SEO CONTENT */}
      <div
        className="mt-20 max-w-4xl mx-auto prose prose-gray px-6"
        dangerouslySetInnerHTML={{ __html: seoContent }}
      />

      <AdBanner />
    </>
  );
}