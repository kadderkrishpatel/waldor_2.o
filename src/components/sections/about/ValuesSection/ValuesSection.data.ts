export const valueData = {
  eyebrow: "WHAT WE DO BEST",
  before: "The",
  highlight: "WALDOR Way",
  description: "",
};

export interface Value {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const values: Value[] = [
  {
    id: 1,
    number: "01",
    title: "Understand Your Skin",
    subtitle:
      "Every journey begins with understanding your skin, not guessing.",
    description:
      "Our AI facial analysis builds a 4D model of your face, assessing hydration, oil production, collagen, elastin, pigmentation and sun damage. We build a completely personalised strategy based on what we see, not what we assume — a long-term skin health and longevity strategy, not just today’s concern.",
  },
  {
    id: 2,
    number: "02",
    title: "Natural Results",
    subtitle: "The best aesthetic treatments are the ones nobody notices.",
    description:
      "We believe you're already beautiful. Our role isn't to change who you are. It's to help you become a better version of yourself.",
  },
  {
    id: 3,
    number: "03",
    title: "Korean & Japanese Innovation",
    subtitle: "We travel extensively to discover the latest technologies.",
    description:
      "Every device, every protocol and every product at WALDOR has been carefully selected because we believe our clients deserve the very best.",
  },
  {
    id: 4,
    number: "04",
    title: "Tailored To You",
    subtitle:
      "No two people are the same, so no two treatment plans should be either.",
    description:
      "Every journey starts with a consultation. Sometimes that's one treatment. Sometimes it's a combination. Sometimes it's no treatment at all.",
  },
];
