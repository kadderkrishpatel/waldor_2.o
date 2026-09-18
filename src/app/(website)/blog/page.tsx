import type { Metadata } from "next";
import BlogListingSection from "@/src/components/sections/blog/BlogListingSection/BlogListingSection";
import HeroSection from "@/src/components/sections/blog/HeroSection";

export const metadata: Metadata = {
  title: "Blog | Waldor Clinic",
  description:
    "Skincare tips, treatment insights and expert advice from the practitioners at Waldor Clinic, London.",
};

export default function BlogPage() {
  return (
    <>
      <HeroSection />
      <BlogListingSection />
    </>
  );
}
