// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "FreeUSCalculator - Free 2026 US Tax, Paycheck & Earnings Calculators",
    template: "%s | FreeUSCalculator",
  },
  description:
    "100% Free & accurate 2026 US calculators. Self-employment tax, salary after tax, California paycheck, Uber & DoorDash earnings, loan EMI, rent affordability & more. Instant results. No signup required.",
  
  keywords: [
    "free tax calculator 2026", "self employment tax calculator", "salary after tax calculator",
    "california paycheck calculator", "uber earnings calculator", "doordash earnings calculator",
    "loan emi calculator", "rent affordability calculator", "2026 tax brackets", "gig worker tax calculator",
    "free us calculators", "2026 federal tax calculator"
  ],
  
  authors: [{ name: "FreeUSCalculator", url: "https://freeuscalculator.com" }],
  alternates: { canonical: "https://freeuscalculator.com" },
  
  openGraph: {
    title: "FreeUSCalculator - Best Free 2026 US Tax & Earnings Calculators",
    description: "Instant, accurate & completely free calculators for Americans updated for 2026 tax year.",
    images: [{ url: "/images/hero-background.jpg", width: 1200, height: 630, alt: "Free US Calculators 2026" }],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Free 2026 US Tax & Earnings Calculators",
    description: "Accurate paycheck, tax & gig work calculators. No signup needed.",
  },
  
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}