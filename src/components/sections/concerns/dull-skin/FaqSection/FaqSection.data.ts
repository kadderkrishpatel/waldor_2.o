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
      "The timeframe can vary depending on the treatment selected, your skin's condition and the factors contributing to dullness. Some treatments may provide an initial improvement in the appearance of the skin, while more gradual changes may require a course of treatments and consistent skincare.",
  },
  {
    id: 3,
    category: "concerns",
    question: "Can dull skin treatments be personalised to my skin type?",
    answer:
      "Yes. Treatment options can be considered according to factors such as your skin type, sensitivity, current condition and specific concerns. A professional consultation allows your practitioner to determine which approach may be appropriate for your skin rather than applying the same treatment to everyone.",
  },
  {
    id: 4,
    category: "concerns",
    question: "Can dull skin treatments improve uneven tone and texture?",
    answer:
      "Certain treatments may help improve the appearance of uneven tone and texture, depending on what is contributing to these concerns. Suitability and expected outcomes vary between individuals, so your practitioner can assess your skin and recommend an appropriate treatment approach.",
  },
  {
    id: 5,
    category: "concerns",
    question: "How are Waldor treatments better than skincare for dull skin?",
    answer:
      "Professional treatments and skincare serve different purposes and may complement one another. WALDOR treatments can provide a more targeted approach to specific concerns, while a suitable home-care routine supports ongoing skin maintenance.Depending on your skin’s needs, your practitioner may recommend professional treatments alongside skin care for a more comprehensive approach.",
  },
];
