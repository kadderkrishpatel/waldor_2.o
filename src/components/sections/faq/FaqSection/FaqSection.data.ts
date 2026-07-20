export type FAQCategory = "all" | "treatments" | "concerns" | "clinic";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: Exclude<FAQCategory, "all">;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    category: "treatments",
    question: "How do I know which treatment is right for me?",
    answer:
      "You don't have to. Every plan starts with a 45-minute consultation - a conversation about what you want to change, AI-led imaging, and a physical assessment. You leave with a written plan and its reasoning. We don't recommend anything before that point.",
  },
  {
    id: 2,
    category: "treatments",
    question: "How long before I see results?",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "treatments",
    question: "Will I need downtime?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "treatments",
    question: "Do you sell packages or courses?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "treatments",
    question: "Can I ask about injectable treatments?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 6,
    category: "concerns",
    question: "Do you treat all skin types and tones?",
    answer:
      "Yes. Protocols and device settings are selected for your skin type, and skin of colour is a specialism here rather than an afterthought. Your consultation establishes this before anything is recommended.",
  },
  {
    id: 7,
    category: "concerns",
    question: "Can you help with acne and acne scarring?",
    answer:
      "Pigmentation can often be significantly improved using a combination of medical-grade treatments and skincare.",
  },
  {
    id: 8,
    category: "concerns",
    question: "I'm pregnant or breastfeeding so can I be treated?",
    answer:
      "Pigmentation can often be significantly improved using a combination of medical-grade treatments and skincare.",
  },
  {
    id: 9,
    category: "concerns",
    question: "What if you can't help me?",
    answer:
      "Pigmentation can often be significantly improved using a combination of medical-grade treatments and skincare.",
  },
  {
    id: 10,
    category: "clinic",
    question: "Where are you and how do I get there?",
    answer:
      "35 Great Portland Street, London W1W 8QQ — in Marylebone, about three minutes' walk from Oxford Circus.",
  },
  {
    id: 11,
    category: "clinic",
    question: "What are your opening hours?",
    answer:
      "Yes. Every patient begins with a comprehensive consultation before any treatment is recommended.",
  },
  {
    id: 12,
    category: "clinic",
    question: "How do I book a consultation?",
    answer:
      "Yes. Every patient begins with a comprehensive consultation before any treatment is recommended.",
  },
  {
    id: 13,
    category: "clinic",
    question: "What happens at a consultation?",
    answer:
      "Yes. Every patient begins with a comprehensive consultation before any treatment is recommended.",
  },
  {
    id: 14,
    category: "clinic",
    question: "What is your cancellation policy?",
    answer:
      "Yes. Every patient begins with a comprehensive consultation before any treatment is recommended.",
  },
];
