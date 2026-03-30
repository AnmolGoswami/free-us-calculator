// types/index.ts
export interface Tool {
  slug: string;
  title: string;
  description: string;
  category: "tax" | "earning" | "cost";
  metaTitle?: string;
  metaDescription?: string;
}