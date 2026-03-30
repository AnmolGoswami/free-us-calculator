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
  title: "FreeUSCalculator - Free US Tax, Earnings & Cost Calculators 2026",
  description: "Free accurate calculators for Americans. Self-employment tax, salary after tax, California paycheck, Uber & DoorDash earnings, loan EMI, rent affordability and more. Updated for 2026 tax year. No signup required.",
  
  // ✅ Fixed: keywords as string array (recommended)
  keywords: [
    "free tax calculator 2026",
    "self employment tax calculator usa",
    "salary after tax calculator",
    "paycheck calculator california",
    "uber earnings calculator",
    "doordash earnings calculator",
    "loan calculator",
    "rent affordability calculator",
    "savings calculator",
    "hourly to salary calculator",
    "free us calculators",
    "2026 tax brackets",
  ],

  authors: [{ name: "FreeUSCalculator" }],
  openGraph: {
    title: "FreeUSCalculator - Free US Tax & Earnings Calculators 2026",
    description: "Instant, accurate, and completely free US calculators for tax year 2026.",
    url: "https://freeuscalculator.com",
    siteName: "FreeUSCalculator",
    images: [
      {
        url: "/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Free US Tax and Earnings Calculators 2026",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeUSCalculator - Free US Calculators 2026",
    description: "Accurate tax, paycheck, gig earnings & cost calculators for Americans.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}