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
} from "@/src/components/sections/services";

export default function AboutPage() {
  return (
    <>
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
