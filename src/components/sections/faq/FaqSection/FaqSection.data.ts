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
    category: "clinic",
    question: "What makes WALDOR Clinic different from other clinics?",
    answer:
      "At WALDOR Clinic, we redefine aesthetics with cutting-edge technology, personalized care, and unparalleled luxury. From our exquisite pink onyx Italian bar to our uniquely designed treatment rooms, every detail is thoughtfully curated to deliver a five-star experience. We use a variety of advanced devices featuring technologies never seen before outside of South Korea, ensuring exceptional results.",
  },
  {
    id: 2,
    category: "treatments",
    question: "What services does WALDOR Clinic offer?",
    answer:
      "We offer a wide range of non-surgical treatments using advanced South Korean and Japanese devices, including RF, CO2, microneedling, emerald laser, and more. We also provide injectables such as Botox and fillers, along with bespoke skin packages and hair growth treatments.",
  },
  {
    id: 3,
    category: "treatments",
    question: "What is the HydraGlass™ Treatment?",
    answer:
      "Our signature HydraGlass™ Treatment is a luxurious South Korean glass skin facial that combines 3-9 advanced devices per session, tailored to your skin's unique needs for radiant, glass-like results.",
  },
  {
    id: 4,
    category: "treatments",
    question: "How are treatment packages personalized?",
    answer:
      "Using a Japanese AI facial analyzer, we create a 4D model of your face to assess your skin's current and future conditions. Based on this analysis and a detailed consultation, we design bespoke 3-, 6-, or 12-month packages tailored to your skin and body's needs.",
  },
  {
    id: 5,
    category: "treatments",
    question: "Are injectables included in the treatment packages?",
    answer:
      "Injectables such as Botox and fillers are not included in the 3-, 6-, or 12-month packages. They are offered as separate treatments to ensure maximum flexibility for our clients.",
  },
  {
    id: 6,
    category: "treatments",
    question: "Do you offer laser hair removal?",
    answer:
      "No, we do not offer laser hair removal. However, we provide a variety of other treatments, including hair growth therapies and advanced skin rejuvenation options.",
  },
  {
    id: 7,
    category: "treatments",
    question: "How often can I receive treatments in a package?",
    answer:
      "Our packages include options for either once-a-month or twice-a-month treatments, depending on your preference and skin goals.",
  },
  {
    id: 8,
    category: "clinic",
    question: "What should I expect during my first visit?",
    answer:
      "When you arrive at WALDOR Clinic, you'll be greeted by a host who will check you in. You'll undergo a detailed consultation, including an AI facial analysis, to create a personalized treatment plan tailored to your needs.",
  },
  {
    id: 9,
    category: "clinic",
    question: "Are your devices branded?",
    answer:
      "Yes, all devices used at WALDOR Clinic are branded under our name and are sourced from leading South Korean and Japanese manufacturers to ensure top-quality results.",
  },
  {
    id: 10,
    category: "clinic",
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by contacting us through our website or calling our clinic directly. Our team will assist you in scheduling your personalized consultation.",
  },
  {
    id: 11,
    category: "clinic",
    question: "Privacy Policy",
    answer:
      "Effective Date: 2025. WALDOR Clinic is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share your information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.\n\n1. Who We Are\nWALDOR Clinic is a private aesthetic and skincare clinic based at 35 Great Portland Street, London, W1W 8QF. You can contact us at Phone: +44 (0)7464 745 114, Email: info@waldorclinic.com.\n\n2. What Data We Collect\nWe may collect and process the following personal data: Identity Data (full name, date of birth, gender); Contact Data (email address, phone number, billing/shipping address); Health & Medical Data (treatment history, consultation notes, allergy information, photos); Transaction Data (payment details, processed securely via third-party providers); Marketing Data (your preferences and responses to campaigns); Technical Data (IP address, browser type, time zone settings from website usage).\n\n3. How We Collect Your Data\nWe collect your data through online forms (e.g. bookings or contact pages), in-clinic registration and consent forms, email, phone and WhatsApp communication, website cookies and analytics, and third-party referrals or booking platforms.\n\n4. Why We Use Your Data (Legal Bases)\nWe process your data under the following legal bases: Consent (for marketing or optional services); Contract (to provide treatments and process bookings); Legal Obligation (for recordkeeping and compliance with health regulations); Legitimate Interest (to improve services and clinic operations).\n\n5. Marketing Communications\nWe may contact you about special offers, treatments, or events if you opt in. You can opt out at any time by clicking \"unsubscribe\" in our emails or contacting us directly.\n\n6. Sharing Your Data\nWe only share your data when necessary and with trusted providers, such as payment processors, email service providers, booking and CRM systems, and medical professionals within WALDOR Clinic (as needed). We never sell your data.\n\n7. Data Retention\nWe retain your data only as long as necessary to fulfil the purposes outlined in this policy, including legal and regulatory requirements. Medical records are typically retained for 8 years from the date of last treatment (per UK healthcare guidance).\n\n8. Your Data Protection Rights\nYou have the right to access your data; correct inaccurate data; request deletion of your data; object to or restrict processing; withdraw consent at any time; and lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk or by calling 0303 123 1113.\n\n9. Data Security\nWe implement technical and organizational safeguards to protect your data, including encrypted systems, secure storage, limited access, and staff training.\n\n10. Cookies and Website Use\nOur website uses cookies to enhance your experience and analyze traffic. You can adjust cookie settings via your browser.\n\n11. Changes to This Policy\nWe may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.\n\n12. Contact Us\nIf you have questions or concerns about your data, please contact us at Email: info@waldorclinic.com, Address: WALDOR Clinic, 35 Great Portland Street, London, W1W 8QF.",
  },
];
