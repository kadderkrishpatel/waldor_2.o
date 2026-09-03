"use client";
import Link from "next/link";
import Button from "@/src/components/ui/Button";
import Heading from "@/src/components/ui/Typography/Heading";
import { Blog } from "../BlogListingSection/BlogListingSection.types";
import { BlogCard } from "@/src/components/ui/Cards";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

interface RelatedBlogsSectionProps {
  blogs: Blog[];
}

export default function RelatedBlogsSection({
  blogs,
}: RelatedBlogsSectionProps) {
  const sectionRef = useSectionReveal();
  if (!blogs.length) return null;

  return (
    <section
      ref={sectionRef}
      className="relative rounded-[40px] py-16 md:py-20 lg:py-[40px] m-2 lg:m-4 overflow-hidden"
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-[60px]">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <Heading
            as="h2"
            before="More related"
            highlight="Insights and Aesthetics"
            className="max-w-full text-[64px] lg:text-[64px] leading-[100%] text-[#BEC2C0]"
            highlightClassName="text-[#C5A375]"
          />

          <Link data-reveal data-direction="left" href="/blog">
            <Button variant="gold" className="rounded-full px-8 py-5">
              View all
            </Button>
          </Link>
        </div>

        {/* Related Blogs */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
