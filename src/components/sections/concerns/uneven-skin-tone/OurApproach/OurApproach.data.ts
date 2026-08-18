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
    title: "Understanding Your Skin",
    description:
      "We begin by examining your complexion closely, considering pigmentation, texture and tone to understand what may be contributing to unevenness.",
  },
  {
    id: "plan",
    number: "02",
    title: "Personalised Treatment Planning",
    description:
      "Your treatment plan is shaped around your skin’s individual characteristics, pigmentation concerns and desired level of refinement.",
  },
  {
    id: "skin-renewal",
    number: "03",
    title: "Targeted Tone Correction",
    description:
      "Appropriate treatments are selected to address visible pigmentation and support a more even, balanced and naturally radiant complexion.",
  },
  {
    id: "restore",
    number: "04",
    title: "Ongoing Clinical Monitoring",
    description:
      "Your skin is reviewed throughout the treatment journey, allowing recommendations to be refined according to your progress and evolving needs.",
  },
];
