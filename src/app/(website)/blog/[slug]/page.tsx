import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogDetailSection from "@/src/components/sections/blog/BlogDetailSection/BlogDetailSection";
import RelatedBlogsSection from "@/src/components/sections/blog/RelatedBlogsSection/RelatedBlogsSection";
import { getBlogBySlug, getBlogs } from "@/src/services/blogs";
import type { Blog } from "@/src/components/sections/blog/BlogListingSection/BlogListingSection.types";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: "Blog | Waldor Clinic" };
  }

  return {
    title: `${blog.title} | Waldor Clinic`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  /**
   * ==========================================
   * GET SLUG
   * ==========================================
   */

  const { slug } = await params;

  /**
   * ==========================================
   * GET BLOG
   * ==========================================
   */

  const blog = await getBlogBySlug(slug);

  /**
   * ==========================================
   * BLOG NOT FOUND
   * ==========================================
   */

  if (!blog) {
    notFound();
  }

  /**
   * ==========================================
   * GET RELATED BLOGS
   * ==========================================
   */

  let relatedBlogs: Blog[] = [];

  try {
    const relatedResponse = await getBlogs({
      page: 1,
      perPage: 6,
      category: blog.category,
    });

    relatedBlogs = relatedResponse.blogs
      .filter((item) => item.slug !== blog.slug)
      .slice(0, 3);
  } catch (error) {
    console.error("Related blogs error:", error);
  }

  /**
   * ==========================================
   * RENDER
   * ==========================================
   */

  return (
    <>
      <BlogDetailSection blog={blog} />

      <RelatedBlogsSection blogs={relatedBlogs} />
    </>
  );
}
