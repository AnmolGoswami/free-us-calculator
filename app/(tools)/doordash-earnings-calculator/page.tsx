import { getToolContent } from "@/lib/seo";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import DoorDashCalculatorClient from "./DoorDashCalculatorClient";
import AdBanner from "@/components/common/AdBanner";
import ShareButtons from "@/components/calculators/ShareButtons";

export default function DoorDashPage() {
  const seoContent = getToolContent("doordash-earnings-calculator");

  return (
    <>
      <CalculatorContainer
        title="DoorDash Earnings Calculator 2026"
        description="Estimate your hourly, daily, weekly, and monthly earnings as a DoorDash driver in the US."
      >
        <DoorDashCalculatorClient />
      </CalculatorContainer>

      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-6 mt-16 prose prose-gray">
        <div dangerouslySetInnerHTML={{ __html: seoContent }} />
      </div>

      {/* SHARE BUTTONS */}
      <ShareButtons
        title="DoorDash Earnings Calculator 2026"
        url="https://freeuscalculator.com/doordash-earnings-calculator"
      />

      <AdBanner />
    </>
  );
}