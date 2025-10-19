export interface VendorSummary {
  id: string;
  name: string;
  category: string;
  headlineStat: string;
  imageUrl?: string;
}

export interface Highlight {
  id: string;
  copy: string;
  audience: "buyer" | "vendor";
}

export interface HowItWorksStep {
  id: string;
  title: string;
  description: string;
}
