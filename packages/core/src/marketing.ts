import type { Highlight, HowItWorksStep, VendorSummary } from "./types";

export const buyerHighlights: Highlight[] = [
  {
    id: "curated-vendors",
    copy: "Curated UK vendors across 20+ categories",
    audience: "buyer",
  },
  {
    id: "real-time-availability",
    copy: "Real-time availability and wishlist tracking",
    audience: "buyer",
  },
  {
    id: "direct-messaging",
    copy: "Direct messaging with vendors before you commit",
    audience: "buyer",
  },
];

export const vendorHighlights: Highlight[] = [
  {
    id: "free-trial",
    copy: "Launch with a 60-day free trial",
    audience: "vendor",
  },
  {
    id: "pipeline",
    copy: "Unified enquiries and booking pipeline",
    audience: "vendor",
  },
  {
    id: "insights",
    copy: "Insights on bookings, spend, and buyer trends",
    audience: "vendor",
  },
];

export const howItWorks: HowItWorksStep[] = [
  {
    id: "discover",
    title: "Discover",
    description: "Search by category, budget, location, or availability with map-first results and vendor spotlights.",
  },
  {
    id: "collaborate",
    title: "Collaborate",
    description: "Message vendors, log notes, and invite partners to wishlists with real-time updates.",
  },
  {
    id: "deliver",
    title: "Deliver",
    description: "Automated reminders, booking timelines, and review prompts keep events on track end-to-end.",
  },
];

export const sampleVendors: VendorSummary[] = [
  {
    id: "cotswold-bloom",
    name: "Cotswold & Bloom",
    category: "Florist",
    headlineStat: "38 enquiries in 7 days",
  },
  {
    id: "monumental-cakes",
    name: "Monumental Cakes",
    category: "Cake designer",
    headlineStat: "Rated 4.9★ across 112 reviews",
  },
  {
    id: "reverie-quartet",
    name: "The Reverie Quartet",
    category: "Live band",
    headlineStat: "Featured in London collections",
  },
];
