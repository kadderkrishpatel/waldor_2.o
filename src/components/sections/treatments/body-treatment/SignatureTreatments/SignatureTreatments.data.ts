import type { TreatmentCard, InfoCard } from "./types";

export const treatmentData = {
  eyebrow: "CURATED EXPERTISE",
  before: "Explore Our Body",
  highlight: "Contouring Treatments",
  description:
    "At WALDOR Clinic, we offer bespoke body packages tailored to your unique needs. Whether you’re looking to address cellulite, enhance post-pregnancy recovery, achieve weight loss, or focus on body contouring, our personalised consultations ensure treatments designed exclusively for you.",
  cta: {
    href: "/contact",
    label: "Book an appointment",
  },
};

export const treatmentCards: TreatmentCard[] = [
  {
    id: "green-laser",
    title: "10D Korean Green Laser",
    description:
      "The 10D Korean Green Laser is our most advanced non-invasive body treatment. It helps reduce stubborn fat, tighten skin, and improve lymphatic drainage using low-level green laser technology. No pain, no downtime.",

    rows: [
      {
        id: "korean-glass-laser",
        title: "",
        price: "£295",
        description: "",
      },
    ],
  },

  {
    id: "korean-multifunction-slimming",
    title: "Korean Multifunction Slimming",
    description:
      "A bespoke body slimming treatment combining multiple technologies to target fat, tone muscles, and sculpt the body.",
    rows: [
      {
        id: "slimming-item",
        title: "",
        price: "£375",
        description: "",
      },
    ],
  },

  {
    id: "co2",
    title: "CO2",
    description:
      "Body skin resurfacing to improve texture, scars, or stretch marks, ranging from mild to deep treatments.",
    rows: [
      {
        id: "co2-item",
        title: "",
        price: "£495-£695",
        description: "",
      },
    ],
  },

  {
    id: "baby-body-glass",
    title: "Baby Korean Body Glass",
    description:
      "A body-specific glass skin laser treatment to brighten and smooth areas like the arms, legs, or back",

    rows: [
      {
        id: "baby-body-glass-item",
        title: "",
        price: "£425-£625",
        description: "",
      },
    ],
  },

  {
    id: "hifu-rf",
    title: "HIFU + RF",
    description:
      "Advanced body contouring and skin tightening using high-intensity focused ultrasound combined with radiofrequency.",
    rows: [
      {
        id: "hifu-rf-item",
        title: "",
        price: "£645",
        description: "",
      },
    ],
  },

  {
    id: "slimming",
    title: "Korean Multifunction Slimming",
    description:
      "A bespoke body slimming treatment combining multiple technologies to target fat, tone muscles, and sculpt the body.",

    rows: [
      {
        id: "slimming-item",
        title: "",
        price: "£375",
      },
    ],
  },

  {
    id: "ems-rf",
    title: "EMS + RF",
    description:
      "Targets stubborn fat, tones and builds muscle, while tightening skin using electrical muscle stimulation and radio-frequency",

    rows: [
      {
        id: "slimming-item",
        title: "",
        price: "£295",
      },
    ],

    areas: ["Abs", "Glutes", "Thighs", "Biceps", "Triceps", "Calves"],
  },

  {
    id: "tatto-removal",
    title: "Tattoo Removal",
    description:
      "A precise, effective laser treatment designed to fade or fully remove unwanted tattoos. Our advanced technology safely targets ink particles, progressively restoring your skin's clarity with minimal downtime. Suitable for all tattoo sizes and skin types.",

    rows: [
      {
        id: "tatto-removal-item",
        title: "",
        price: "£95",
      },
    ],
  },
];
