import { NextRequest, NextResponse } from "next/server";
import { blogs } from "@/src/components/sections/blog/BlogListingSection/BlogListingSection.data";

interface Context {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(req: NextRequest, { params }: Context) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return NextResponse.json(
      {
        message: "Blog not found",
      },
      {
        status: 404,
      },
    );
  }

  // Related blogs from same category
  let relatedBlogs = blogs.filter(
    (item) => item.slug !== slug && item.category === blog.category,
  );

  // Fallback if less than 3 blogs exist in same category
  if (relatedBlogs.length < 3) {
    const remainingBlogs = blogs.filter(
      (item) => item.slug !== slug && item.category !== blog.category,
    );

    relatedBlogs = [...relatedBlogs, ...remainingBlogs];
  }

  relatedBlogs = relatedBlogs.slice(0, 3);

  return NextResponse.json({
    blog,
    relatedBlogs,
  });
}
