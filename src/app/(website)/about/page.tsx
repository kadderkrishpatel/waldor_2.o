import {
  AboutHero,
  StorySection,
  TeamSection,
  CredentialsSection,
  ValuesSection,
  GoalQuoteSection,
} from "@/src/components/sections/about";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <TeamSection />
      <CredentialsSection />
      <ValuesSection />
      <GoalQuoteSection />
    </>
  );
}
