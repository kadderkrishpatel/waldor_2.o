"use client";
import { useEffect, useState } from "react";
import { Blog, BlogResponse } from "./BlogListingSection.types";
import { blogCategories } from "./BlogListingSection.data";
import { BlogCard } from "@/src/components/ui/Cards";

export default function BlogListingSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, [page, category]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `/api/blog?page=${page}&category=${encodeURIComponent(category)}`,
        {
          cache: "no-store",
        },
      );

      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data: BlogResponse = await res.json();

      setBlogs(data.blogs);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-[#3D4844] py-16 md:py-20 lg:py-[40px] m-2 lg:m-4 overflow-hidden">
      <div className="mx-auto px-2 sm:px-6 lg:px-[60px]">
        {/* Categories */}
        <div className="mb-12 flex flex-wrap gap-3">
          {blogCategories.map((item) => (
            <button
              key={item}
              onClick={() => {
                setCategory(item);
                setPage(1);
              }}
              className={`rounded-full border px-6 py-3 transition-all ${
                category === item
                  ? "border-[#C5A375] bg-[#C5A375] text-[#29302D]"
                  : "border-[#7E8582] text-[#ECE0D1]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="container py-20 text-center text-[#ECE0D1]">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-20 flex items-center justify-center gap-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`text-sm transition ${
                page === index + 1 ? "text-[#C5A375]" : "text-[#7E8582]"
              }`}
            >
              {(index + 1).toString().padStart(2, "0")}
            </button>
          ))}

          {page < totalPages && (
            <>
              <div className="h-px w-10 bg-[#7E8582]" />

              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="text-sm text-[#ECE0D1]"
              >
                NEXT
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
