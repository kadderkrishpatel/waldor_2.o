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
    question: "How are WALDOR Signature Treatments different?",
    answer:
      "WALDOR Signature Treatments are different because they’re never built around a single technology or a standard protocol. Every treatment is thoughtfully personalised using a carefully selected combination of advanced Korean and Japanese technologies, chosen to suit your skin’s unique needs, concerns, and long-term goals.",
  },
  {
    id: 2,
    category: "treatments",
    question: "Are WALDOR Signature Treatments painful?",
    answer:
      "Most WALDOR Signature Treatments are designed to be comfortable, with the sensation varying depending on the technologies used and your individual skin sensitivity. Before your treatment begins, your practitioner will explain what to expect and tailor your experience wherever possible, ensuring you feel informed, comfortable and supported throughout your visit.",
  },
  {
    id: 3,
    category: "treatments",
    question:
      "Is there any downtime after treatment and when will I see results?",
    answer:
      "Downtime and results depend on the technologies selected for your personalised treatment journey. While many treatments offer little to no downtime with an immediate boost in radiance, others continue improving your skin over the following weeks as natural collagen production is stimulated. Your practitioner will always provide clear guidance on what to expect.",
  },
  {
    id: 4,
    category: "treatments",
    question: "Are these treatments suitable for sensitive skin?",
    answer:
      "Yes, many WALDOR Signature Treatments can be adapted for sensitive skin, provided they are clinically appropriate. Every journey begins with a detailed consultation and skin assessment, allowing our practitioners to carefully select technologies that respect your skin's condition while supporting safe, effective and naturally beautiful results.",
  },
  {
    id: 5,
    category: "treatments",
    question: "Can different technologies be combined during one appointment?",
    answer:
      "Yes. One of the defining features of WALDOR Signature Treatments is the thoughtful integration of complementary technologies. Rather than treating concerns in isolation, we create a personalised treatment journey that addresses your skin as a whole, ensuring every technology is selected with intention and clinical expertise.",
  },
];
