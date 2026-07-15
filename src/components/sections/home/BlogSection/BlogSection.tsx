import Image from "next/image";
import Link from "next/link";
import { blogSectionData } from "./BlogSection.data";
import { CardTitle, Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";
import { BlogCard } from "@/src/components/ui/Cards";

export default function BlogSection() {
  return (
    <section className="bg-[#3D4844] lg:m-4">
      <div className="mx-auto px-6 lg:px-[60px] lg:py-[120px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="flex flex-col gap-[14px]">
            <Eyebrow variant="secondary">{blogSectionData.eyebrow}</Eyebrow>

            <Heading
              className="lg:text-[64px]"
              before={blogSectionData.heading.before}
              highlight={blogSectionData.heading.highlight}
            />
          </div>

          <Button href={blogSectionData.button.href} variant="gold">
            {blogSectionData.button.label}
          </Button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogSectionData.posts.map((post) => (
            <BlogCard
              key={post.id}
              slug={post.slug}
              image={post.image}
              category={post.category}
              title={post.title}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
