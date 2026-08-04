import type { TreatmentCard, InfoCard } from "./types";

export const treatmentData = {
  eyebrow: "CURATED EXPERTISE",
  before: "Explore Our",
  highlight: "Signature Treatments",
  description:
    "Every treatment includes a complimentary, personalised consultation with one of WALDOR’s expert aestheticians. For selected treatments, this is enhanced with a state-of-the-art 4D AI skin analysis from Japan.",
  cta: {
    href: "/contact",
    label: "Book an appointment",
  },
};

export const treatmentCards: TreatmentCard[] = [
  {
    id: "glass-skin",
    title: "South Korean Glass Skin",
    description:
      "Our signature South Korean glass skin treatment uses 3D skin boosters and biologics to increase hydration, smooth fine lines and improve skin quality.",

    rows: [
      {
        id: "hydra-glass",
        title: "HydraGlass™",
        price: "£195",
        description:
          "Perfect introduction for dull skin — ideal hydration, fine lines and glow.",
      },
      {
        id: "premium",
        title: "HydraGlass™ Premium",
        price: "£295",
      },
      {
        id: "pregnancy",
        title: "HydraGlass™ For Pregnancy",
        price: "£225",
      },
      {
        id: "injectable",
        title: "HydraGlass™ Injectable Boost",
        price: "£295",
      },
      {
        id: "longevity",
        title: "HydraGlass™ Longevity",
        price: "£395",
      },
    ],
  },

  {
    id: "facelift",
    title: "Skin Tightening Facelift",
    description:
      "High-intensity focused ultrasound treatments using layers of the skin to stimulate collagen production for lifting and tightening.",

    rows: [
      {
        id: "2d-hifu",
        title: "2D HIFU",
        price: "from £350",
        description:
          "Facelift consultation followed by treatment of jawline, neck or full face.",
      },
      {
        id: "4d-hifu",
        title: "4D HIFU",
        price: "from £575",
      },
    ],
  },

  {
    id: "ems",
    title: "EMS + RF Contouring",
    description:
      "Muscle stimulation and radiofrequency for facial sculpting and skin tightening.",

    rows: [
      {
        id: "30",
        title: "30 minutes",
        price: "£250",
        description: "Ideal for jawline definition and facial contouring.",
      },
    ],
  },

  {
    id: "peels",
    title: "Chemical Peel",
    description:
      "Advanced medical-grade peels that safely exfoliate and improve skin tone and texture.",

    rows: [
      {
        id: "bio",
        title: "Bio Peel Target Peel",
        price: "£120",
      },
      {
        id: "meso",
        title: "Meso Peel",
        price: "£220",
      },
      {
        id: "advanced",
        title: "Advanced Peel",
        price: "£320",
      },
    ],
  },

  {
    id: "laser",
    title: "Baby Korean Glass Laser",
    description:
      "A gentle fractional laser treatment designed to tighten skin, reduce pores and improve overall radiance.",

    rows: [
      {
        id: "small",
        title: "Small area",
        price: "£245",
      },
      {
        id: "medium",
        title: "Medium area",
        price: "£345",
      },
      {
        id: "large",
        title: "Large area",
        price: "£495",
      },
    ],
  },

  {
    id: "co2",
    title: "CO2 Laser",
    description:
      "Fractional CO2 laser resurfacing for acne scars, wrinkles and skin rejuvenation.",

    rows: [
      {
        id: "small",
        title: "Small area",
        price: "£295",
      },
      {
        id: "medium",
        title: "Medium area",
        price: "£395",
      },
      {
        id: "large",
        title: "Large area",
        price: "£495",
      },
    ],
  },

  {
    id: "bpl",
    title: "Broad-Pulse Light (B-PL)",
    description:
      "Broad pulse light treatment to reduce pigmentation, redness and improve overall skin clarity.",

    fullWidth: true,

    rows: [
      {
        id: "small",
        title: "Small area",
        price: "£195",
      },
      {
        id: "medium",
        title: "Medium area",
        price: "£245",
      },
      {
        id: "large",
        title: "Large area",
        price: "£395",
      },
    ],
  },
];

export const infoCards: InfoCard[] = [
  {
    id: "neck",
    title: "Neck & Décolleté Add-Ons",
    description:
      "Enhance your results by adding the neck and/or décolleté to any facial treatment for an additional fee. Pricing varies by treatment-please ask your aesthetician during consultation.",
  },

  {
    id: "complimentary",
    title: "Complimentary Enhancements",
    description:
      "LED Therapy is included with most treatments to enhance results. Every treatment also includes the WALDOR Clinic Hydration Mask for post-treatment calm and radiance, ensuring your skin feels refreshed and revitalised.",
  },
];
