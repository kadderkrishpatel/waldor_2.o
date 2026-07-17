import { notFound } from "next/navigation";
import BlogDetailSection from "@/src/components/sections/blog/BlogDetailSection/BlogDetailSection";
import RelatedBlogsSection from "@/src/components/sections/blog/RelatedBlogsSection/RelatedBlogsSection";
import { blogs } from "@/src/components/sections/blog/BlogListingSection/BlogListingSection.data";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  let relatedBlogs = blogs.filter(
    (item) => item.slug !== slug && item.category === blog.category,
  );

  if (relatedBlogs.length < 3) {
    relatedBlogs = [
      ...relatedBlogs,
      ...blogs.filter(
        (item) => item.slug !== slug && item.category !== blog.category,
      ),
    ];
  }

  relatedBlogs = relatedBlogs.slice(0, 3);

  return (
    <>
      <BlogDetailSection blog={blog} />
      <RelatedBlogsSection blogs={relatedBlogs} />
    </>
  );
}
