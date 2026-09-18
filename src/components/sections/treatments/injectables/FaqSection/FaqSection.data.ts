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
    category: "treatments",
    question: "How do I know which injectable treatment is best suited to my concerns?",
    answer:
      "The right treatment begins with understanding your facial anatomy, skin quality and aesthetic goals. During your consultation, our clinicians carefully assess your concerns before recommending a personalised treatment plan designed to achieve balanced, natural-looking results.",
  },
  {
    id: 2,
    category: "treatments",
    question: "Will my injectable treatment enhance my features while maintaining a natural appearance?",
    answer:
      "Yes. Our philosophy is centred on subtle refinement rather than noticeable change. Every injectable treatment is carefully planned and precisely administered to restore harmony, enhance your natural features and preserve your individual facial expressions.",
  },
  {
    id: 3,
    category: "treatments",
    question:
      "Are injectable treatments clinically safe?",
    answer:
      "Patient safety is at the heart of every treatment we provide. Following a comprehensive medical consultation, our experienced clinicians ensure every injectable is appropriate for your needs, using evidence-based techniques and clinically approved products to prioritise safe, predictable outcomes.",
  },
  {
    id: 4,
    category: "treatments",
    question: "How long can I expect the results of my injectable treatment to last?",
    answer:
      "The longevity of your results depends on the treatment performed, your metabolism, and individual lifestyle factors. During your consultation, we'll explain what to expect and recommend a personalised maintenance plan to help preserve your results over time.",
  },
  {
    id: 5,
    category: "treatments",
    question: "What does an injectable treatment feel like, and is it uncomfortable?",
    answer:
      "Most injectable treatments are well tolerated and involve minimal discomfort. Depending on the treatment, you may experience a brief pinching sensation, while topical numbing options and gentle techniques help ensure your experience remains as comfortable as possible.",
  },
];
