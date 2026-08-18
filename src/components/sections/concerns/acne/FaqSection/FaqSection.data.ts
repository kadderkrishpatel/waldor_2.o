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
    question: "How long does acne treatment take to show results?",
    answer:
      "The timeframe varies depending on the type, severity and underlying factors contributing to your acne. Some changes may become noticeable within several weeks, while more persistent concerns can require longer-term management. Your practitioner can recommend a suitable treatment plan and review progress over time.",
  },
  {
    id: 2,
    category: "concerns",
    question: "Can acne be treated permanently, or can it come back?",
    answer:
      "Acne can be effectively managed, although recurrence is possible. Its behaviour can be influenced by factors such as hormones, genetics, lifestyle and skin changes over time. Treatment focuses on addressing active breakouts while supporting longer-term skin management, with ongoing care recommended where appropriate.",
  },
  {
    id: 3,
    category: "concerns",
    question: "Can WALDOR acne treatment be personalised to my skin type and severity?",
    answer:
      "Yes. Acne can present differently from person to person, so treatment may be selected according to factors such as your skin type, severity, breakout pattern and previous treatment history. A professional assessment can help determine which options may be appropriate for your individual needs.",
  },
  {
    id: 4,
    category: "concerns",
    question: "Is adult acne different from teenage acne?",
    answer:
      "Adult acne can share many characteristics with teenage acne, but the contributing factors and presentation may differ. Hormonal fluctuations, stress, skincare products and other individual factors can influence adult breakouts. An assessment can help identify relevant contributing factors and guide an appropriate treatment approach.",
  },
  {
    id: 5,
    category: "concerns",
    question: "Can I have acne treatment if I have sensitive skin?",
    answer:
      "Sensitive skin does not necessarily prevent you from having acne treatment, but it may influence which options are considered appropriate. Your practitioner can assess your skin's condition, sensitivity and current routine before recommending a suitable approach, with treatment intensity and aftercare adapted where appropriate.",
  },
];
