export interface SafetyPoint {
  id: string;
  title: string;
  description: string;
  width?: "normal" | "wide";
}

export const safetyData = {
  eyebrow: "COMMON CAUSES",
  before: "What Causes",
  highlight: "Dull Skin?",
  description:
    "These are the primary biological factors and environmental triggers that contribute to uneven texture and loss of skin radiance:",
};

export const safetyPoints: SafetyPoint[] = [
  {
    id: "dull-skin-cause-one",
    title: "Sluggish Cellular Turnover",
    description:
      "Accumulated dead surface cells diffuse light reflection, creating a flat, lacklustre skin appearance over time.",
  },
  {
    id: "dull-skin-cause-two",
    title: "Chronic Dermal Dehydration",
    description:
      "Insufficient moisture impairs epidermal light refraction, making surface texture appear rough, muted and visibly fatigued.",
  },
  {
    id: "dull-skin-cause-three",
    title: "Environmental Oxidative Stress",
    description:
      "Pollution and micro-particulates generate free radicals, damaging surface lipids and compromising natural skin luminosity.",
  },
  {
    id: "dull-skin-cause-four",
    title: "Compromised Micro-Vascular Circulation",
    description:
      "Poor oxygenation and reduced nutrient delivery to skin cells diminish natural flush and underlying vitality.",
  },
  {
    id: "dull-skin-cause-five",
    title: "Cumulative Sun Exposure",
    description:
      "UV radiation thickens the outer stratum corneum, creating uneven pigmentation, texture roughness and persistent dullness.",
  },
  {
    id: "dull-skin-cause-six",
    title: "Genetic Skin Predisposition",
    description:
      "Chronic stress, inadequate sleep and poor nutrition slow cellular repair, resulting in a tired complexion.",
  },
];
