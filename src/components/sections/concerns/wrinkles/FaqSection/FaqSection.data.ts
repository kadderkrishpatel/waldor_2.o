export type FAQCategory = "all" | "treatments" | "concerns" | "clinic";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: Exclude<FAQCategory, "all">;
}

export const faqSectionData = {
  eyebrow: "FAQ",
  heading: {
    before: "Questions We're ",
    highlight: "Often Asked",
  },
};

export const faqData: FAQItem[] = [
  {
    id: 1,
    category: "concerns",
    question:
      "Why am I developing fine lines despite having a good skincare routine?",
    answer:
      "Fine lines can develop for various reasons, including natural ageing, repeated facial movement, sun exposure, genetics and individual skin characteristics. A consistent skincare routine can support skin health, but it cannot necessarily prevent every visible sign of ageing.",
  },
  {
    id: 2,
    category: "concerns",
    question: "Are fine lines normal in your 20s or 30s?",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "concerns",
    question:
      "How long does fine line and wrinkle treatment take to show results?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "concerns",
    question:
      "How can I maintain the results of fine line and wrinkle treatment?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "concerns",
    question:
      "Can WALDOR fine line and wrinkle treatments be personalised to my skin?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
];
