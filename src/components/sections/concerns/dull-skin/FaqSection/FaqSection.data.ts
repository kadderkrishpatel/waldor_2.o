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
    question: "Why does my skin look dull even when it feels hydrated?",
    answer:
      "Hydration is only one factor that can influence how the skin looks. Dullness may also be associated with factors such as surface buildup, uneven tone, environmental exposure, lifestyle or individual skin characteristics. A professional assessment can help identify relevant contributing factors before treatment is considered.",
  },
  {
    id: 2,
    category: "concerns",
    question: "How long does dull skin treatment take to show results?",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "concerns",
    question: "Can dull skin treatments be personalised to my skin type?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "concerns",
    question: "Can dull skin treatments improve uneven tone and texture?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "concerns",
    question: "How are Waldor treatments better than skincare for dull skin?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
];
