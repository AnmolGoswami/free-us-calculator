// components/common/AdBanner.tsx
export default function AdBanner() {
  return (
    <div className="my-12 max-w-7xl mx-auto px-6">
      <div className="text-center text-[10px] text-gray-400 mb-3 tracking-widest">
        ADVERTISEMENT
      </div>
      
      {/* Google AdSense Placeholder - Replace with your actual AdSense code later */}
      <div 
        className="bg-gray-100 border border-dashed border-gray-300 rounded-3xl min-h-[100px] md:min-h-[120px] flex items-center justify-center text-gray-400 text-sm"
        id="adsense-banner"
      >
        {/* 
          Google AdSense code goes here (responsive or 728x90)
          Example:
          <ins className="adsbygoogle"
               style={{ display: "block" }}
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="XXXXXXXXXX"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        */}
        <div className="text-center">
          <p className="text-xs">728 × 90 Banner / Responsive Ad Unit</p>
          <p className="text-[10px] mt-1">Google AdSense</p>
        </div>
      </div>
      
      <div className="text-center text-[10px] text-gray-400 mt-2">
        Supports FreeUSCalculator • Does not affect tool accuracy
      </div>
    </div>
  );
}