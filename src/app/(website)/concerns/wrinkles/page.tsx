import {
  BeforeAfter,
  PatientSafety,
  Practitioners,
  ServiceFAQ,
  ServiceHero,
  SignatureTreatments,
  SuccessStories,
  TreatmentApproach,
  TreatmentBenefits,
  WhyChooseUs,
} from "@/src/components/sections/concerns/wrinkles";

export default function WrinklesPage() {
  return (
    <>
      <ServiceHero />
      <SignatureTreatments />
      <PatientSafety />
      <TreatmentBenefits items="indications" />
      <WhyChooseUs />
      <BeforeAfter />
      <TreatmentApproach />
      <TreatmentBenefits items="preventions" />
      <SuccessStories />
      <ServiceFAQ />
      <Practitioners />
    </>
  );
}
