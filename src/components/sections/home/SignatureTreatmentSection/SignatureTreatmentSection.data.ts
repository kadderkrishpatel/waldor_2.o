import { SignatureTreatmentSectionProps } from "./SignatureTreatmentSection.types";

export const signatureTreatmentData: SignatureTreatmentSectionProps = {
  eyebrow: "SIGNATURE SKINCARE TREATMENTS",
  heading: {
    before: "Our Most",
    highlight: "Obsessed-Over Services",
  },
  button: {
    label: "View Full Menu",
    href: "/treatments",
  },
  treatments: [
    {
      number: "01",
      title: "HydraGlass™ Facial",
      description:
        "A smoothing dermal treatment that gently refines texture and locks in moisture to instantly unveil a flawless, poreless glass-skin glow.",
      image: "/assets/waldor/service-thumb.jpg",
      slug: "hydraglass-facial",
    },
    {
      number: "02",
      title: "Salmon Sperm Polynucleotide",
      description:
        "Experience regenerative DNA therapy that repairs deep cellular damage, instantly boosting your skin’s hydration and youthful bounce.",
      image: "/assets/waldor/skin-cat.jpg",
      slug: "salmon-sperm-polynucleotide",
    },
    {
      number: "03",
      title: "Waldor™ Peptide Signature Blends",
      description:
        "Cellular molecules engineered to trigger collagen production, fortify your skin barrier and drive deep structural regeneration.",
      image: "/assets/waldor/treatments/peptide.webp",
      slug: "waldor-peptide-blends",
    },
    {
      number: "04",
      title: "Hair Growth Treatment",
      description:
        "Advanced biological growth factors awaken resting roots, boosting circulation to deliver visibly thicker, fuller and healthier hair.",
      image: "/assets/waldor/treatments/hair.webp",
      slug: "hair-growth-treatment",
    },
  ],
};
