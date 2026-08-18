export interface SafetyPoint {
  id: string;
  title: string;
  description: string;
  width?: "normal" | "wide";
}

export const safetyData = {
  eyebrow: "COMMON CAUSES",
  before: "What Causes",
  highlight: "Uneven Skin Tone?",
  description:
    "These are the primary biological factors and environmental triggers that contribute to pigment overproduction and vascular redness:",
};

export const safetyPoints: SafetyPoint[] = [
  {
    id: "common-causes-1",
    title: "Unprotected Sun Exposure",
    description:
      "Ultraviolet radiation triggers melanocytes to produce excess melanin, creating visible sun spots and irregular dark patches.",
  },
  {
    id: "common-causes-2",
    title: "Post-Inflammatory Hyperpigmentation",
    description:
      "Trauma from breakouts or irritation triggers surplus pigment deposition that lingers long after initial lesions heal.",
  },
  {
    id: "common-causes-3",
    title: "Hormonal Shift Drivers",
    description:
      "Estrogen and progesterone fluctuations stimulate pigment synthesis, leading to stubborn melasma across central facial zones.",
  },
  {
    id: "common-causes-4",
    title: "Chronic Environmental Pollution",
    description:
      "Stress, poor sleep, smoking and dehydration impair cellular repair mechanisms, drastically accelerating visible skin ageing.",
  },
  {
    id: "common-causes-5",
    title: "Persistent Dermal Inflammation",
    description:
      "Micro-vascular dilation and ongoing tissue irritation cause lingering erythema and reddish discolouration across delicate skin areas.",
  },
  {
    id: "common-causes-6",
    title: "Sluggish Cellular Renewal",
    description:
      "Trapped epidermal pigment takes longer to shed when cellular turnover slows down, perpetuating stubborn surface spots.",
  },
];
