import type { TreatmentCard, InfoCard } from "./types";

export const treatmentData = {
  eyebrow: "CLINICAL PLANS",
  before: "Explore Our",
  highlight: "Injectable Treatments",
  description:
    "Every injectable treatment at WALDOR begins with a medical consultation. Prescription-only treatments are discussed and prescribed in clinic only, never sold in advance.",
  cta: {
    href: "/contact",
    label: "Book an appointment",
  },
};

export const treatmentCards: TreatmentCard[] = [
  {
    id: "fillers",
    title: "Dermal / Facial Fillers",
    description:
      "Enhance facial contours, restore lost volume, and smooth wrinkles with precision-placed hyaluronic acid-based fillers for a youthful and refreshed appearance.",

    rows: [
      {
        id: "fillers-item",
        title: "",
        price: "£300",
        description: "",
      },
    ],
  },

  {
    id: "anti-wrinkle-injections",
    title: "Anti-Wrinkle Injections",
    description:
      "Relax fine lines and dynamic wrinkles with expertly administered treatment, providing a smoother and more rejuvenated look.",
    rows: [
      {
        id: "anti-wrinkle-injections-item",
        title: "",
        price: "£295",
        description: "",
      },
    ],
    areas: ["Abs", "Glutes", "Thighs", "Biceps", "Triceps", "Calves"],
  },

  {
    id: "salmon-sperm",
    title: "Salmon Sperm Polynucleotide",
    description:
      "A regenerative treatment rich in DNA fragments to repair and rejuvenate the skin, improving hydration and elasticity.",
    rows: [
      {
        id: "salmon-sperm-item",
        title: "",
        price: "£500",
        description: "",
      },
    ],
  },

  {
    id: "nefertiti",
    title: "Nefertiti Neck Lift",
    description:
      "Tightens and defines the jawline and neck by relaxing key muscles for a sleeker profile.",

    rows: [
      {
        id: "nefertiti-item",
        title: "",
        price: "£500",
      },
    ],
  },

  {
    id: "facial-balancing",
    title: "Facial Balancing",
    description:
      "Achieve harmonious facial proportions with a customised combination of injectables designed to enhance symmetry and natural beauty.",

    rows: [
      {
        id: "facial-balancing-item",
        title: "",
        price: "At consultation",
      },
    ],
  },

  {
    id: "exosomes",
    title: "Exosomes",
    description:
      "Advanced regenerative therapy that enhances cell communication to promote skin repair, collagen production, and a youthful complexion.",

    rows: [
      {
        id: "exosomes-item",
        title: "",
        price: "£395 | £495 | £595",
      },
    ],
  },

  {
    id: "non-sergical-bbl",
    title: "Non-Surgical BBL",
    description:
      "Enhance and sculpt the buttocks with hyaluronic acid fillers for a fuller, lifted, and more contoured appearance without surgery.",

    rows: [
      {
        id: "non-sergical-bbl-item",
        title: "",
        price: "At consultation",
      },
    ],
  },

  {
    id: "hyaluronic-acid",
    title: "Hyaluronic Acid",
    description:
      "Provides deep skin hydration and nourishment, improving texture, plumpness, and overall skin health.",

    rows: [
      {
        id: "hyaluronic-acid-item",
        title: "",
        price: "£280",
      },
    ],
  },

  {
    id: "fat-dissolving",
    title: "Fat Dissolving Injectables",
    description:
      "Non-surgical solution to target stubborn fat pockets in areas such as the chin, jawline, and body, creating a more contoured appearance.",

    rows: [
      {
        id: "fat-dissolving-item",
        title: "",
        price: "At consultation",
      },
    ],
  },

  {
    id: "profhilo-skin",
    title: "Profhilo Skin Boosters",
    description:
      "An innovative hyaluronic acid treatment that deeply hydrates and improves skin elasticity, resulting in a radiant glow.",

    rows: [
      {
        id: "profhilo-skin-item",
        title: "",
        price: "£450",
      },
    ],
  },

  {
    id: "prp",
    title: "PRP (Platelet-Rich Plasma)",
    description:
      "Harness your body's natural growth factors to stimulate collagen production, improve skin texture, and promote hair growth.",

    rows: [
      {
        id: "prp-item",
        title: "",
        price: "£375",
      },
    ],
  },

  {
    id: "tag-removal",
    title: "Mole & Skin Tag Removal",
    description:
      "Safe and effective treatment to remove unwanted moles and skin tags with minimal discomfort and downtime.",
    rows: [
      {
        id: "tag-removal-item",
        title: "",
        price: "£100",
      },
    ],
  },
];
