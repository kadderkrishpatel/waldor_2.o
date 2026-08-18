import { TimelineStep } from "./types";

export const approachData = {
  eyebrow: "YOUR TREATMENT JOURNEY",
  heading: {
    before: "The Distinctive WALDOR",
    highlight: "Care Pathway",
  },
  description:
    "Every treatment follows a carefully designed pathway focused on diagnosis, personalised planning and long-term skin health.",
};

export const timelineSteps: TimelineStep[] = [
  {
    id: "cause",
    number: "01",
    title: "Diagnostic Skin Mapping",
    description:
      "Advanced skin imaging assesses hydration, texture, pigmentation and other contributing factors, creating a precise foundation for personalised treatment.",
  },
  {
    id: "plan",
    number: "02",
    title: "Bespoke Treatment Planning",
    description:
      "Your treatment protocol is tailored to your skin’s individual needs, targeting the underlying causes of dullness rather than relying on generic solutions.",
  },
  {
    id: "skin-renewal",
    number: "03",
    title: "Multi-Level Radiance Therapy",
    description:
      "Targeted treatments work across the skin’s surface and deeper layers to encourage renewal, replenish hydration and restore a healthier-looking, luminous complexion.",
  },
  {
    id: "restore",
    number: "04",
    title: "Ongoing Clinical Monitoring",
    description:
      "Your skin’s progress is carefully reviewed throughout treatment, allowing protocols to evolve as needed and supporting consistent improvements in texture and radiance.",
  },
];
