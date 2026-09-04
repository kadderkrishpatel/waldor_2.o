import type { TreatmentRow } from "./types";

export const treatmentData = {
  eyebrow: "CURATED EXPERTISE",
  before: "Explore Our",
  highlight: "HydraGlass Facial Treatments",
  description:
    "Every treatment includes a complimentary, personalised consultation with one of WALDOR’s expert aestheticians. For selected treatments, this is enhanced with a state-of-the-art 4D AI skin analysis from Japan.",
  cta: {
    href: "/contact",
    label: "Book an appointment",
  },
};

export const treatmentRows: TreatmentRow[] = [
  {
    id: "microneedling-peptide",
    title: "Microneedling × HydraGlass Peptide",
    price: "£295",
    description:
      "A deeply hydrating peptide cocktail enriched with multi-molecular hyaluronic acid to restore moisture, strengthen the skin barrier and enhance natural glow.",
  },
  {
    id: "clear-back",
    title: "HydraGlass Clear Back",
    price: "£275",
    description:
      "A bespoke HydraGlass treatment for the upper back — deep cleansing, precise extractions, hydration and calming care to target congestion and restore clarity.",
  },
  {
    id: "premium",
    title: "HydraGlass Premium",
    price: "£225",
    description:
      "A lavish facial adding 10 minutes of targeted boosters, advanced masks and specialised steps selected to your skin, for a profoundly nourished, radiant complexion.",
  },
  {
    id: "longevity",
    title: "HydraGlass Longevity",
    price: "£295",
    description:
      "Our advanced skin-longevity facial, enhanced with NAD, polynucleotides, growth factors and peptides to support cellular repair, a stronger barrier and visible radiance.",
  },
  {
    id: "lymphatic-sculpt",
    title: "HydraGlass Lymphatic Sculpt",
    price: "£295",
    description:
      "A tailored HydraGlass facial with specialised lymphatic drainage massage to reduce puffiness, improve circulation and leave skin lifted, refreshed and radiant.",
  },
  {
    id: "pregnancy",
    title: "HydraGlass Pregnancy",
    price: "£245",
    description:
      "Pregnancy- and breastfeeding-safe. A soothing, bespoke manual facial with gentle exfoliation, precise extractions and rich hydration to rejuvenate and illuminate.",
  },
  {
    id: "hydra-glass",
    title: "HydraGlass",
    price: "£195",
    description:
      "A tailored facial delivering gentle exfoliation, precise extractions, deep hydration and a dedicated step to target your individual skin concerns.",
  },
  {
    id: "premium-fnd",
    title: "HydraGlass Premium — Face, Neck & Décolletage",
    price: "£335",
    description:
      "A tailored facial extending to the neck and décolleté, combining exfoliation, extractions and deep hydration to rejuvenate and restore radiance across all areas.",
  },
  {
    id: "ai-skin",
    title: "HydraGlass & AI Skin Analysis",
    price: "£295",
    description:
      "Begins with our 4D AI Skin Analysis, then a facial tailored with gentle exfoliation, precise extractions, deep hydration and targeted steps for your skin.",
  },
  {
    id: "lifting",
    title: "HydraGlass Lifting",
    price: "£379",
    description:
      "A targeted facial to lift, firm and sculpt — focused on elasticity and contour, and including a complimentary AI skin analysis to personalise your treatment.",
  },
];
