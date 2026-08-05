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
    "Every treatment begins with clinical suitability. Explore the circumstances where we may recommend postponing treatment or considering a safer alternative:",
};

export const safetyPoints: SafetyPoint[] = [
  {
    id: "pregnancy",
    title: "Pregnancy & Breastfeeding",
    description:
      "Certain advanced aesthetic technologies and active ingredients may not be suitable during pregnancy or breastfeeding. Pregnancy-safe alternatives can be recommended following your consultation.",
  },
  {
    id: "medical",
    title: "Certain Medical Conditions",
    description:
      "Individuals with uncontrolled autoimmune conditions, bleeding disorders or those taking anticoagulant medication may require medical clearance before treatment.",
  },
  {
    id: "sun",
    title: "Recent Sun Exposure",
    description:
      "Recently tanned or sunburnt skin may need time to recover before laser, light-based or resurfacing treatments can be performed safely.",
  },
  {
    id: "infection",
    title: "Active Skin Infection or Inflammation",
    description:
      "Areas affected by active skin infections, open wounds, untreated cold sores or significant inflammation should fully recover before treatment.",
  },
  {
    id: "allergy",
    title: "Allergies or Treatment Sensitivities",
    description:
      "Known allergies or sensitivities to treatment ingredients, topical anaesthetics or skincare products should be discussed during your consultation.",
  },
  {
    id: "isotretinoin",
    title: "Recent Isotretinoin Use",
    description:
      "Recent isotretinoin therapy may require a waiting period before undergoing laser resurfacing or advanced chemical peel treatments, subject to clinical assessment.",
    width: "wide",
  },
  {
    id: "devices",
    title: "Implantable Medical Devices or Active Cancer",
    description:
      "Treatments may not be suitable for clients with pacemakers, implantable electronic devices or those undergoing active cancer treatment without specialist approval.",
  },
];
