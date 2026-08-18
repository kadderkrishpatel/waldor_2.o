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
      "Why is my skin tone uneven despite having a consistent skincare routine?",
    answer:
      "Uneven tone can be influenced by several factors, including sun exposure, previous breakouts, hormonal changes, inflammation and individual skin characteristics. A consistent skincare routine can support skin health, but persistent pigmentation may require a more targeted approach based on its underlying cause.",
  },
  {
    id: 2,
    category: "concerns",
    question: "How long does uneven skin tone treatment take to show results?",
    answer:
      "The timeframe varies according to the cause and extent of uneven tone, the treatment selected and how your skin responds. Some changes may become noticeable sooner, while pigmentation concerns can require a more gradual approach. Your practitioner can discuss realistic expectations during your consultation.",
  },
  {
    id: 3,
    category: "concerns",
    question:
      "Can WALDOR treatments be personalised to my skin type and concerns?",
    answer:
      "Yes. WALDOR treatments can be considered according to your skin type, sensitivity, pigmentation pattern and individual concerns. A professional assessment helps determine the most appropriate approach, allowing treatment considerations to be tailored rather than relying on a standard protocol.",
  },
  {
    id: 4,
    category: "concerns",
    question:
      "Can uneven skin tone treatments improve pigmentation and post-acne marks?",
    answer:
      "Yes, certain treatments may help improve the appearance of pigmentation and post-acne marks, depending on their type, depth and underlying cause. Your practitioner can assess the areas of concern and determine whether treatment may be appropriate, while discussing realistic expectations for your skin.",
  },
  {
    id: 5,
    category: "concerns",
    question: "Can I have uneven skin tone treatment if I have sensitive skin?",
    answer:
      "Sensitive skin does not necessarily mean that treatment is unsuitable. However, your skin's sensitivity, current condition and existing skincare routine should be considered when selecting an approach. Your practitioner can recommend options that are appropriate for your individual skin and adjust treatment where necessary.",
  },
  {
    id: 6,
    category: "concerns",
    question:
      "How can I maintain a more even-looking skin tone after treatment?",
    answer:
      "A consistent skincare routine, daily sun protection and following your practitioner's recommended aftercare can help support your results. Periodic professional reviews may also help determine whether your routine or treatment approach should be adjusted as your skin changes over time.",
  },
];
