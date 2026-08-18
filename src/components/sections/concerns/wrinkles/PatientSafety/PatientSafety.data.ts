export interface SafetyPoint {
  id: string;
  title: string;
  description: string;
  width?: "normal" | "wide";
}

export const safetyData = {
  eyebrow: "COMMON CAUSES",
  before: "What Causes",
  highlight: "Fine Lines & Wrinkles?",
  description:
    "These are the primary biological factors and environmental triggers that contribute to collagen depletion and visible line formation:",
};

export const safetyPoints: SafetyPoint[] = [
  {
    id: "natural-ageing-process",
    title: "Natural Ageing Process",
    description:
      "Declining collagen, elastin and hyaluronic acid production thins dermal structure, reducing skin resilience over time.",
  },
  {
    id: "sun-induced-photoageing",
    title: "Sun-Induced Photoageing",
    description:
      "Ultraviolet radiation breaks down structural collagen fibers, accelerating premature crease formation and loss of elasticity.",
  },
  {
    id: "repetitive-facial-movements",
    title: "Repetitive Facial Movements",
    description:
      "Continuous smiling, frowning and squinting crease the skin, eventually setting temporary dynamic lines into permanent folds.",
  },
  {
    id: "unfavourable-lifestyle-factors",
    title: "Unfavourable Lifestyle Factors",
    description:
      "Stress, poor sleep, smoking and dehydration impair cellular repair mechanisms, drastically accelerating visible skin ageing.",
  },
  {
    id: "oxidative-environmental-damage",
    title: "Oxidative Environmental Damage",
    description:
      "Pollution and blue light generate damaging free radicals that weaken skin integrity, deepening fine lines prematurely.",
  },
  {
    id: "genetic-skin-predisposition",
    title: "Genetic Skin Predisposition",
    description:
      "Hereditary factors dictate baseline collagen density, structural breakdown rates and individual susceptibility to premature wrinkling.",
  },
];
