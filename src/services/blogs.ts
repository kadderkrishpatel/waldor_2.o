import { Blog, BlogsResponse } from "@/src/components/sections/blog/BlogListingSection/BlogListingSection.types";

const WORDPRESS_URL =
  process.env.WORDPRESS_URL || "";

interface GetBlogsParams {
  page?: number;
  perPage?: number;
  category?: string;
}

export async function getBlogs({
  page = 1,
  perPage = 6,
  category = "All",
}: GetBlogsParams = {}): Promise<BlogsResponse> {

  const params = new URLSearchParams();

  params.set("page", String(page));
  params.set("per_page", String(perPage));

  if (category && category !== "All") {
    params.set("category", category);
  }

  const url = `${WORDPRESS_URL}/wp-json/waldor/v1/blogs?${params.toString()}`;

  const response = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch blogs: ${response.status}`
    );
  }

  return response.json();
}
```
