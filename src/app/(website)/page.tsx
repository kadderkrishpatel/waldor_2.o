import type { Metadata } from "next";
import {
  HeroSection,
  AboutSection,
  TreatmentSection,
  WhyChooseUsSection,
  ExperienceSection,
  SignatureTreatmentSection,
  SuccessStoriesSection,
  HowItWorksSection,
  BlogSection,
} from "@/src/components/sections/home";
import type { BlogPost } from "@/src/components/sections/home/BlogSection/BlogSection.types";
import { getBlogs } from "@/src/services/blogs";

export const metadata: Metadata = {
  title: "Waldor Clinic | Skin, Hair & Longevity Clinic in London",
  description:
    "Bespoke skin, hair and longevity treatments in London, backed by AI-led diagnostics and expert aesthetic medicine. Book your personalised consultation at Waldor Clinic.",
};

export default async function HomePage() {
  let posts: BlogPost[] = [];
  try {
    const { blogs } = await getBlogs({ page: 1, perPage: 3 });
    posts = blogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      subtitle: blog.subtitle,
      category: blog.category,
      readTime: blog.readTime,
      image: blog.image,
      slug: blog.slug,
    }));
  } catch {
    // WordPress unreachable — BlogSection hides itself when there are no real posts.
  }

  return (
    <>
      <HeroSection />
      <AboutSection />
      <section className="p-2 lg:p-4 overflow-hidden">
        <TreatmentSection />
      </section>
      <section className="relative overflow-hidden rounded-[24px] lg:rounded-[40px] bg-[#EBE0D1] m-2 lg:m-4">
        <WhyChooseUsSection />
        <ExperienceSection />
      </section>
      <section
        id="success-stories"
        className="relative scroll-mt-24 overflow-hidden rounded-[24px] lg:scroll-mt-32 lg:rounded-[40px] bg-[#3D4844] m-2 lg:m-4"
      >
        <SuccessStoriesSection />
      </section>
      <SignatureTreatmentSection />
      <section className="p-2 lg:p-4 overflow-hidden">
        <HowItWorksSection />
      </section>
      <BlogSection posts={posts} />
    </>
  );
}
