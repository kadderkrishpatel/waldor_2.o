import {
  Blog,
  BlogCategory,
  BlogsResponse,
} from "@/src/components/sections/blog/BlogListingSection/BlogListingSection.types";

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_BLOGS_URL || "";

interface GetBlogsParams {
  page?: number;
  perPage?: number;
  category?: string;
}

/** * Fetch blogs from WordPress */
export async function getBlogs({
  page = 1,
  perPage = 6,
  category = "All",
}: GetBlogsParams = {}): Promise<BlogsResponse> {
  if (!WORDPRESS_URL) {
    throw new Error("WORDPRESS_URL is not configured");
  }
  const params = new URLSearchParams();
  params.set("page", String(page));
  params.set("per_page", String(perPage));
  /** * Add category only when * a specific category is selected. */ if (
    category &&
    category.toLowerCase() !== "all"
  ) {
    params.set("category", category);
  }
  const url = `${WORDPRESS_URL}/wp-json/waldor/v1/blogs?${params.toString()}`;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`WordPress blog API failed: ${response.status}`);
  }
  const data = await response.json();
  /** * WordPress currently returns: * * { * blogs: [], * pagination: {} * } * * Convert it to the format expected * by the frontend. */
  return {
    blogs: data.blogs ?? [],
    pagination: {
      page: data.pagination?.page ?? page,
      perPage: data.pagination?.perPage ?? perPage,
      total: data.pagination?.total ?? 0,
      totalPages: data.pagination?.totalPages ?? 1,
      hasNextPage: data.pagination?.hasNextPage ?? false,
      hasPreviousPage: data.pagination?.hasPreviousPage ?? false,
    },
    /** * Categories are fetched separately * from WordPress. * * The API route will attach them. */ categories:
      data.categories ?? [],
  };
}
/** * Fetch all WordPress blog categories */
export async function getBlogCategories(): Promise<BlogCategory[]> {
  if (!WORDPRESS_URL) {
    throw new Error("WORDPRESS_URL is not configured");
  }
  const response = await fetch(
    `${WORDPRESS_URL}/wp-json/waldor/v1/blog-categories`,
    { cache: "no-store" },
  );
  if (!response.ok) {
    throw new Error(`WordPress category API failed: ${response.status}`);
  }
  return response.json();
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  if (!WORDPRESS_URL) {
    throw new Error("WORDPRESS_URL is not configured");
  }
  const response = await fetch(
    `${WORDPRESS_URL}/wp-json/waldor/v1/blog/${encodeURIComponent(slug)}`,
    { cache: "no-store" },
  );
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error(`Failed to fetch blog: ${response.status}`);
  }
  return response.json();
}
