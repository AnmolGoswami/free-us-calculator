export type StateTax = {
  name: string;
  code: string;
  taxType: "progressive" | "flat" | "none";
  flatRate?: number; // % (for flat states)
  hasLocalTax?: boolean; // city/local taxes
  notes?: string; // edge cases / special rules
};

export const ALL_US_STATES: StateTax[] = [
  { name: "Alabama", code: "AL", taxType: "progressive" },
  { name: "Alaska", code: "AK", taxType: "none" },
  { name: "Arizona", code: "AZ", taxType: "flat", flatRate: 2.5 },

  { name: "Arkansas", code: "AR", taxType: "progressive" },
  { name: "California", code: "CA", taxType: "progressive" },

  { name: "Colorado", code: "CO", taxType: "flat", flatRate: 4.4 },
  { name: "Connecticut", code: "CT", taxType: "progressive" },
  { name: "Delaware", code: "DE", taxType: "progressive" },

  { name: "Florida", code: "FL", taxType: "none" },

  { name: "Georgia", code: "GA", taxType: "progressive" },
  { name: "Hawaii", code: "HI", taxType: "progressive" },

  { name: "Idaho", code: "ID", taxType: "flat", flatRate: 5.8 },
  { name: "Illinois", code: "IL", taxType: "flat", flatRate: 4.95 },
  { name: "Indiana", code: "IN", taxType: "flat", flatRate: 3.15 },

  { name: "Iowa", code: "IA", taxType: "progressive" },
  { name: "Kansas", code: "KS", taxType: "progressive" },

  { name: "Kentucky", code: "KY", taxType: "flat", flatRate: 4.5 },
  { name: "Louisiana", code: "LA", taxType: "progressive" },

  { name: "Maine", code: "ME", taxType: "progressive" },
  { name: "Maryland", code: "MD", taxType: "progressive", hasLocalTax: true },

  { name: "Massachusetts", code: "MA", taxType: "flat", flatRate: 5.0 },
  { name: "Michigan", code: "MI", taxType: "flat", flatRate: 4.25 },

  { name: "Minnesota", code: "MN", taxType: "progressive" },

  {
    name: "Mississippi",
    code: "MS",
    taxType: "flat",
    flatRate: 5.0,
    notes: "Transitioning to flat tax system"
  },

  { name: "Missouri", code: "MO", taxType: "progressive" },
  { name: "Montana", code: "MT", taxType: "progressive" },
  { name: "Nebraska", code: "NE", taxType: "progressive" },

  { name: "Nevada", code: "NV", taxType: "none" },

  {
    name: "New Hampshire",
    code: "NH",
    taxType: "none",
    notes: "No tax on wage income"
  },

  { name: "New Jersey", code: "NJ", taxType: "progressive" },
  { name: "New Mexico", code: "NM", taxType: "progressive" },

  {
    name: "New York",
    code: "NY",
    taxType: "progressive",
    hasLocalTax: true
  },

  { name: "North Carolina", code: "NC", taxType: "flat", flatRate: 4.5 },
  { name: "North Dakota", code: "ND", taxType: "progressive" },

  {
    name: "Ohio",
    code: "OH",
    taxType: "progressive",
    hasLocalTax: true
  },

  { name: "Oklahoma", code: "OK", taxType: "progressive" },
  { name: "Oregon", code: "OR", taxType: "progressive" },

  {
    name: "Pennsylvania",
    code: "PA",
    taxType: "flat",
    flatRate: 3.07,
    hasLocalTax: true
  },

  { name: "Rhode Island", code: "RI", taxType: "progressive" },
  { name: "South Carolina", code: "SC", taxType: "progressive" },

  { name: "South Dakota", code: "SD", taxType: "none" },
  { name: "Tennessee", code: "TN", taxType: "none" },
  { name: "Texas", code: "TX", taxType: "none" },

  { name: "Utah", code: "UT", taxType: "flat", flatRate: 4.55 },

  { name: "Vermont", code: "VT", taxType: "progressive" },
  { name: "Virginia", code: "VA", taxType: "progressive" },

  {
    name: "Washington",
    code: "WA",
    taxType: "none",
    notes: "No wage income tax (capital gains tax exists)"
  },

  { name: "West Virginia", code: "WV", taxType: "progressive" },
  { name: "Wisconsin", code: "WI", taxType: "progressive" },

  { name: "Wyoming", code: "WY", taxType: "none" },

  {
    name: "District of Columbia",
    code: "DC",
    taxType: "progressive"
  }
];