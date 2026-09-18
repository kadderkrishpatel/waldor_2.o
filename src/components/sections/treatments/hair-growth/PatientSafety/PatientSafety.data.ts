export interface SafetyPoint {
  id: string;
  title: string;
  description: string;
  width?: "normal" | "wide";
}

export const safetyData = {
  eyebrow: "PATIENT SAFETY",
  before: "Is This",
  highlight: "Right for You?",
  description:
    "Every treatment begins with clinical suitability assessment. Explore the circumstances where we may recommend postponing treatment or considering a safer alternative:",
};

export const safetyPoints: SafetyPoint[] = [
  {
    id: "pregnancy",
    title: "Pregnancy & Breastfeeding",
    description:
      "Certain advanced aesthetic technologies and active ingredients may not be suitable during pregnancy or breastfeeding. Pregnancy-safe alternatives can be recommended following your consultation.",
  },
  {
    id: "underlying-health-conditions",
    title: "Underlying Health Conditions",
    description:
      "Hair thinning caused by untreated hormonal imbalances or nutritional deficiencies should be addressed before treatment begins.",
  },
  {
    id: "medical-disorders",
    title: "Certain Medical Disorders",
    description:
      "Individuals with uncontrolled autoimmune conditions, bleeding disorders or those taking anticoagulant medication may require medical clearance before treatment.",
  },
  {
    id: "devices",
    title: "Implantable Medical Devices",
    description:
      "Treatments may not be suitable for clients with pacemakers, implantable electronic devices or those undergoing active cancer treatment without specialist approval.",
  },
  {
    id: "advanced-follicle-loss",
    title: "Advanced Follicle Loss",
    description:
      "When hair follicles are no longer active, alternative solutions may provide more predictable outcomes tailored to your long-term hair restoration goals.",
  },
  {
    id: "unrealistic-expectations",
    title: "Unrealistic Expectations",
    description:
      "The most natural transformations come from realistic expectations, personalised planning and allowing your hair to respond progressively over time.",
  },
];
