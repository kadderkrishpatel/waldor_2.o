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
    title: "Understand Your Skin",
    description:
      "We look closely at firmness, elasticity, texture and areas of laxity to understand how your skin is changing.",
  },
  {
    id: "plan",
    number: "02",
    title: "Bespoke Treatment Planning",
    description:
      "Your treatment plan is thoughtfully selected around the degree and pattern of laxity, rather than following a predetermined approach.",
  },
  {
    id: "skin-renewal",
    number: "03",
    title: "Targeted Firming Treatments",
    description:
      "Appropriate treatments are selected to support skin firmness, definition and texture while maintaining a natural-looking appearance.",
  },
  {
    id: "restore",
    number: "04",
    title: "Ongoing Clinical Monitoring",
    description:
      "Your progress is reviewed throughout treatment, allowing recommendations to be refined according to how your skin responds and evolves.",
  },
];
