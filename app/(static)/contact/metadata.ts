// app/contact/metadata.ts
// Keep metadata in a separate server file because contact/page.tsx uses 'use client'
// Import this in a layout.tsx wrapper if needed, or use Next.js route segment config.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact FreeUSCalculator – Support, Feedback & Paid Promotion",
  description:
    "Get in touch with the FreeUSCalculator team. Questions about our 2026 tax calculators, bug reports, feature requests, or interested in paid promotion to 75,000+ monthly US users? We reply within 24–48 hours.",
  keywords: [
    "contact freeuscalculator",
    "free tax calculator support",
    "paid promotion financial calculator",
    "2026 tax calculator help",
    "gig economy calculator feedback",
    "advertise freeuscalculator",
  ],
  alternates: {
    canonical: "https://www.freeuscalculator.in/contact",
  },
  openGraph: {
    title: "Contact FreeUSCalculator – Support & Paid Promotion",
    description:
      "Reach 75,000+ monthly US users or get support for our free 2026 financial calculators. We reply within 24–48 hours.",
    url: "https://www.freeuscalculator.in/contact",
    type: "website",
  },
};