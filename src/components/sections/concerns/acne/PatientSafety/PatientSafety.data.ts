export interface SafetyPoint {
  id: string;
  title: string;
  description: string;
  width?: "normal" | "wide";
}

export const safetyData = {
  eyebrow: "COMMON CAUSES",
  before: "What Causes",
  highlight: "Acne?",
  description:
    "These are the primary biological factors and environmental triggers that contribute to persistent breakouts:",
};

export const safetyPoints: SafetyPoint[] = [
  {
    id: "excess-sebum-production",
    title: "Excess Sebum Production",
    description:
      "Overactive sebaceous glands produce surplus oil, creating an ideal environment for pore congestion and follicular blockage.",
  },
  {
    id: "clogged-pores",
    title: "Clogged Pores",
    description:
      "A build-up of dead skin cells and oil can block pores, contributing to blackheads, whiteheads and inflammatory breakouts.",
  },
  {
    id: "bacterial-proliferation",
    title: "Bacterial Proliferation",
    description:
      "An overgrowth of Cutibacterium acnes within oxygen-deprived pores triggers localized tissue irritation and inflammatory responses.",
  },
  {
    id: "inflammation",
    title: "Inflammation",
    description:
      "Inflammatory responses within the skin can contribute to redness, swelling and the development of more noticeable acne lesions.",
  },
  {
    id: "hormonal-changes",
    title: "Hormonal Changes",
    description:
      "Hormonal fluctuations can stimulate oil production and may contribute to increased breakouts during puberty, menstrual cycles or other changes.",
  },
  {
    id: "compromised-barrier",
    title: "Compromised Barrier Function",
    description:
      "A weakened skin barrier allows environmental irritants to penetrate, worsening sensitivity and accelerating persistent inflammatory cycles.",
  },
];
