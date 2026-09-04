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
    question: "What makes the WALDOR HydraGlass Facial different from others?",
    answer:
      "Unlike standard surface-level protocols, the WALDOR HydraGlass Facial is a tailored clinical experience. Powered by South Korean and Japanese aesthetic engineering, we use advanced non-invasive devices to restore your skin barrier and deliver an effortless, translucent glass-skin finish.",
  },
  {
    id: 2,
    category: "treatments",
    question: "Is a HydraGlass facial painful?",
    answer:
      "No — HydraGlass is a gentle, comfortable treatment. Most clients describe it as relaxing, with extractions performed carefully to minimise any discomfort or redness.",
  },
  {
    id: 3,
    category: "treatments",
    question: "Is there any downtime, and when will I see results?",
    answer:
      "There's no downtime — you can return to your normal routine immediately. Skin looks visibly plumper and more radiant right after your session, with continued improvement over the following days.",
  },
  {
    id: 4,
    category: "treatments",
    question: "How often should I get a HydraGlass facial?",
    answer:
      "For ongoing maintenance, we typically recommend a HydraGlass facial every 4-6 weeks, though your aesthetician will tailor a schedule based on your skin's needs during your consultation.",
  },
  {
    id: 5,
    category: "treatments",
    question: "Is HydraGlass suitable during pregnancy or breastfeeding?",
    answer:
      "Yes — our HydraGlass During Pregnancy facial uses pregnancy and breastfeeding-safe ingredients and techniques, so you can still enjoy gentle exfoliation and deep hydration safely.",
  },
];
