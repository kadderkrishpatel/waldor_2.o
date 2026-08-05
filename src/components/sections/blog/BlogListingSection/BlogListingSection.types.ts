export interface Blog {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  image: string; // Listing Card Image
  bannerImage: string; // Detail Page Hero Image
  excerpt: string;
  readTime: string;
  author: string;
  authorImage: string;
  publishedAt: string;
  content: string;
}

export interface BlogResponse {
  blogs: Blog[];
  page: number;
  totalPages: number;
}

export interface BlogPagination {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface BlogsResponse {
  blogs: Blog[];
  pagination: BlogPagination;
}
