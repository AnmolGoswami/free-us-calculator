"use client";

import { useEffect, useState } from "react";

export default function DisclaimerToast() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // show EVERY time page loads
    setVisible(true);

    // auto hide after 5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-[90%] sm:w-[360px]">
      <div className="bg-black text-white rounded-2xl shadow-xl p-4 relative animate-in fade-in slide-in-from-bottom-3">
        
        {/* close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-3 text-white/70 hover:text-white text-lg"
        >
          ×
        </button>

        <p className="text-sm leading-relaxed pr-6">
          ⚠️ All calculations are estimates and may vary from actual results.
        </p>
      </div>
    </div>
  );
}