export interface SafetyPoint {
  id: string;
  title: string;
  description: string;
  width?: "normal" | "wide";
}

export const safetyData = {
  eyebrow: "COMMON CAUSES",
  before: "What Causes",
  highlight: "Sagging & Loose Skin?",
  description:
    "These are the primary biological factors and environmental triggers that contribute to structural degradation and loss of elasticity:",
};

export const safetyPoints: SafetyPoint[] = [
  {
    id: "common-causes-1",
    title: "Depletion of Dermal Collagen",
    description:
      "Natural collagen degradation weakens the skin’s deep supportive scaffold, leading to progressive tissue sagging over time.",
  },
  {
    id: "common-causes-2",
    title: "Degradation of Elastin Fibers",
    description:
      "Damaged elastin strands lose their ability to snap tissue back, causing visible skin laxity and looseness.",
  },
  {
    id: "common-causes-3",
    title: "Deep Facial Fat Redistribution",
    description:
      "Age-related fat pad atrophy and downward migration hollow out upper facial zones while weighting lower areas.",
  },
  {
    id: "common-causes-4",
    title: "Solar Radiation Fiber Elastosis",
    description:
      "Ultraviolet rays dismantle structural support networks, accelerating premature tissue drooping and thin, crepey surface texture.",
  },
  {
    id: "common-causes-5",
    title: "Gravitational Soft Tissue Pull",
    description:
      "Constant gravitational forces pull compromised, low-elasticity dermal tissue downward, blurring natural jawline and cheek contours.",
  },
  {
    id: "common-causes-6",
    title: "Rapid Fluctuations in Weight",
    description:
      "Significant weight loss stretches dermal fibers, leaving excess surface skin without adequate underlying tissue support.",
  },
];
