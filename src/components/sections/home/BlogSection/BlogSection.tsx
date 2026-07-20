"use client";
import { blogSectionData } from "./BlogSection.data";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";
import { BlogCard } from "@/src/components/ui/Cards";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function BlogSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden rounded-[24px] lg:rounded-[40px] bg-[#3D4844] m-2 lg:m-4"
    >
      <div className="mx-auto px-5 sm:px-6 lg:px-[60px] py-16 md:py-20 lg:py-[120px]">
        {/* Header */}
        <div className="mb-10 md:mb-14 lg:mb-20 flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4 lg:gap-[14px]">
            <Eyebrow variant="secondary">{blogSectionData.eyebrow}</Eyebrow>

            <Heading
              className="lg:text-[64px]"
              before={blogSectionData.heading.before}
              highlight={blogSectionData.heading.highlight}
            />
          </div>

          <div data-reveal data-direction="left" className="w-full lg:w-auto">
            <Button
              href={blogSectionData.button.href}
              variant="gold"
              className="w-full lg:w-auto"
            >
              {blogSectionData.button.label}
            </Button>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 lg:gap-8 justify-items-center">
          {blogSectionData.posts.map((post) => (
            <div key={post.id} className="w-full max-w-[420px] xl:max-w-none">
              <BlogCard
                slug={post.slug}
                image={post.image}
                category={post.category}
                title={post.title}
                readTime={post.readTime}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
