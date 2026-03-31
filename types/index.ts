// types/index.ts
export interface Tool {
  slug: string;                    // URL slug (e.g., "self-employment-tax-calculator-usa")
  title: string;                   // Full title for pages
  shortTitle?: string;             // Shorter title for cards & navigation
  
  description: string;             // Short description for cards
  longDescription?: string;        // Detailed description for individual tool pages
  
  category: "tax" | "earning" | "cost" | "retirement"; // Added retirement category
  
  // SEO Fields
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  
  // Additional Metadata
  lastUpdated: string;             // e.g., "March 2026"
  popularity: number;              // 1-10 for sorting
  featured?: boolean;              // Highlight on homepage
  estimatedTime?: string;          // e.g., "30 sec", "1 min"
  
  // Future extensions
  icon?: string;
  tags?: string[];
}