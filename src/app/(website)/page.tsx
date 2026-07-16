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
      <section className="p-2 lg:p-4 overflow-hidden">
        <TreatmentSection />
      </section>
      <WhyChooseUsSection />
      <ExperienceSection />
      <section className="p-2 lg:p-4 overflow-hidden">
        <DoctorSection />
      </section>
      <section className="p-2 lg:p-4 overflow-hidden">
        <TransformationSection />
      </section>
      <SignatureTreatmentSection />
      <section className="p-2 lg:p-4 overflow-hidden">
        <SuccessStoriesSection />
      </section>
      <section className="p-2 lg:p-4 overflow-hidden">
        <HowItWorksSection />
      </section>
      <BlogSection />
    </>
  );
}
