import {
  HeroSection,
  AboutSection,
  TreatmentSection,
  DoctorSection,
  WhyChooseUsSection,
  ExperienceSection,
  TransformationSection,
  SignatureTreatmentSection,
  SuccessStoriesSection,
  HowItWorksSection,
  BlogSection,
} from "@/src/components/sections/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TreatmentSection />
      <WhyChooseUsSection />
      <ExperienceSection />
      <DoctorSection />
      <TransformationSection />
      <SignatureTreatmentSection />
      <SuccessStoriesSection />
      <HowItWorksSection />
      <BlogSection />
    </>
  );
}
