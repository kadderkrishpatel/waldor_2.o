import type { Metadata } from "next";
import {
  BeforeAfter,
  PatientSafety,
  Practitioners,
  ServiceFAQ,
  ServiceHero,
  ServiceStats,
  SignatureTreatments,
  SocialSection,
  SuccessStories,
  TreatmentApproach,
  TreatmentBenefits,
  WhyChooseUs,
} from "@/src/components/sections/treatments/hydra-glass";
import ServiceSchema from "@/src/components/seo/ServiceSchema";
import { treatmentData, treatmentRows } from "@/src/components/sections/treatments/hydra-glass/SignatureTreatments/SignatureTreatments.data";

export const metadata: Metadata = {
  title: "HydraGlass™ Facial Treatments | Waldor Clinic",
  description: treatmentData.description,
};

export default function HydraGlassPage() {
  return (
    <>
      <ServiceSchema
        name={treatmentData.highlight}
        description={treatmentData.description}
        offers={treatmentRows.map((row) => ({
          name: row.title,
          price: row.price,
          description: row.description,
        }))}
      />
      <ServiceHero />
      <SignatureTreatments />
      <ServiceStats />
      <PatientSafety />
      <BeforeAfter />
      <WhyChooseUs />
      <TreatmentApproach />
      <TreatmentBenefits />
      <Practitioners />
      <SuccessStories />
      <ServiceFAQ />
      <SocialSection />
    </>
  );
}
