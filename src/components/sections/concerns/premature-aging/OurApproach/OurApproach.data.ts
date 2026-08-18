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
      "Advanced dermal imaging identifies hidden sun damage, collagen loss and sub-surface oxidative stress with total accuracy.",
  },
  {
    id: "plan",
    number: "02",
    title: "Prescriptive Precision Formulations",
    description:
      "Bespoke treatment protocols are crafted specifically for your skin, bypassing generic, one-size-fits-all anti-ageing menus entirely.",
  },
  {
    id: "skin-renewal",
    number: "03",
    title: "Dual-Action Cellular Therapy",
    description:
      "Stopping environmental cellular breakdown pairs with active collagen generation to reverse visible signs of ageing.",
  },
  {
    id: "restore",
    number: "04",
    title: "Ongoing Clinical Monitoring",
    description:
      "Continuous tracking of dermal progress allows timely protocol adjustments, ensuring optimal and long-term youthful skin resilience.",
  },
];
