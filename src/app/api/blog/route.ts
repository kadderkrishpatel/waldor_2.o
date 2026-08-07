import { getBlogs, getBlogCategories } from "@/src/services/blogs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = Math.max(1, Number(searchParams.get("page") || "1"));
    const perPage = Math.max(1, Number(searchParams.get("per_page") || "6"));
    const category = searchParams.get("category") || "All";

    const [blogResponse, categories] = await Promise.all([
      getBlogs({
        page,
        perPage,
        category,
      }),

      getBlogCategories(),
    ]);

    return NextResponse.json({
      blogs: blogResponse.blogs,
      categories,
      pagination: blogResponse.pagination,
    });
  } catch (error) {
    console.error("Blog API error:", error);

    return NextResponse.json(
      {
        blogs: [],
        categories: [],
        pagination: {
          page: 1,
          perPage: 6,
          total: 0,
          totalPages: 1,
          hasNextPage: false,
          hasPreviousPage: false,
        },
        error: "Failed to fetch blogs",
      },
      {
        status: 500,
      },
    );
  }
}
