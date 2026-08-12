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
    question: "Do acne scar treatments differ for teenagers and adults?",
    answer:
      "Yes. Treatment recommendations are based on your skin’s condition rather than your age alone. For teenagers, the priority is often controlling active acne before addressing any scarring. For adults with stable skin, treatment can focus on improving existing scars through personalised therapies. During your consultation, our clinicians assess your skin’s current health, scar type, and long-term goals before recommending the most appropriate approach.",
  },
  {
    id: 2,
    category: "concerns",
    question: "Can acne scar treatments be performed on areas other than the face?",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "concerns",
    question: "Are there any complications or side effects?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "concerns",
    question: "How long does it typically take to see improvements?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "concerns",
    question: "How can I help reduce the risk of developing acne scars?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
];
