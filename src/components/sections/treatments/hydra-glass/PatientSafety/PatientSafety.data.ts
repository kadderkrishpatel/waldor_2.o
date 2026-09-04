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
    id: "comedonal-infection",
    title: "Active Cutaneous Infection",
    description:
      "HydraGlass may need to be postponed if you have an active bacterial, viral or fungal infection affecting the treatment area.",
  },
  {
    id: "compromised-barrier",
    title: "Compromised Skin Barrier",
    description:
      "Treatment is generally unsuitable over open wounds, cuts, abrasions or significantly damaged skin until the area has healed.",
  },
  {
    id: "scar-inflammation",
    title: "Acute Skin Inflammation",
    description:
      "If your skin is currently inflamed, itchy, peeling or highly sensitive, treatment may worsen irritation and should be deferred.",
  },
  {
    id: "recent-procedures",
    title: "Recent Aesthetic Procedures",
    description:
      "Following Botox, dermal fillers, laser or stronger peels, your skin may need adequate recovery before another facial treatment.",
  },
  {
    id: "product-allergies",
    title: "Known Product Allergies",
    description:
      "Inform your practitioner beforehand about known skincare allergies so suitable products can be considered and treatment advised accordingly.",
  },
  {
    id: "sun-exposure",
    title: "Photosensitising Medication Use",
    description:
      "If you take photosensitising medication, inform your practitioner beforehand so your skin sensitivity can be considered and suitability assessed.",
    width: "wide",
  },
  {
    id: "pregnancy",
    title: "Pregnancy or Breastfeeding",
    description:
      "Certain active ingredients may not be recommended during pregnancy or breastfeeding, making a consultation important before treatment.",
  },
];
