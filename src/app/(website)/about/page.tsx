import type { Metadata } from "next";
import {
  AboutHero,
  StorySection,
  TeamSection,
  CredentialsSection,
  ValuesSection,
  GoalQuoteSection,
} from "@/src/components/sections/about";

export const metadata: Metadata = {
  title: "About Us | Waldor Clinic",
  description:
    "Meet the practitioners behind Waldor Clinic. Discover our story, values and commitment to safe, results-led aesthetic medicine in London.",
};

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
