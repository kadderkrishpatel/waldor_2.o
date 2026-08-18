export interface SafetyPoint {
  id: string;
  title: string;
  description: string;
  width?: "normal" | "wide";
}

export const safetyData = {
  eyebrow: "COMMON CAUSES",
  before: "What Causes",
  highlight: "Premature Ageing?",
  description:
    "Primary biological mechanisms and environmental aggressors that accelerate structural collagen loss and cellular senescence:",
};

export const safetyPoints: SafetyPoint[] = [
  {
    id: "common-causes-1",
    title: "Unprotected Solar Photoageing",
    description:
      "Ultraviolet radiation activates matrix metalloproteinases, actively breaking down structural collagen and accelerating premature deep creasing.",
  },
  {
    id: "common-causes-2",
    title: "Environmental Free Radical Stress",
    description:
      "Particulate pollution generates reactive oxygen species, compromising cellular lipids and dismantling the skin’s natural protective barrier.",
  },
  {
    id: "common-causes-3",
    title: "Advanced Glycation End-Products",
    description:
      "High-sugar diets and metabolic stress trigger glycation, causing elastic fibers to become rigid, brittle and prone to snapping.",
  },
  {
    id: "common-causes-4",
    title: "Chronic Cellular Dehydration",
    description:
      "Depleted hyaluronic acid reserves compromise extracellular matrix volume, making fine lines immediately more pronounced and persistent.",
  },
  {
    id: "common-causes-5",
    title: "Repetitive Facial Micro-Expressions",
    description:
      "Unconscious squinting and frowning repeatedly compress weakened dermal scaffolding, causing dynamic lines to settle into static folds.",
  },
  {
    id: "common-causes-6",
    title: "Sleep Deprivation and Cortisol",
    description:
      "Elevated stress hormones impair nightly dermal cell repair, accelerating collagen degradation and weakening overall tissue resilience.",
  },
];
