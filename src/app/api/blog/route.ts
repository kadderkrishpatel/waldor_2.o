import { blogs } from "@/src/components/sections/blog/BlogListingSection/BlogListingSection.data";
import { NextRequest, NextResponse } from "next/server";

const PER_PAGE = 9;

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const page = Number(searchParams.get("page") || 1);
  const category = searchParams.get("category") || "All";

  const filtered =
    category === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === category);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return NextResponse.json({
    blogs: paginated,
    page,
    totalPages,
  });
}
