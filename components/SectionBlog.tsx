import React from 'react';
import Image from 'next/image';

export const SectionBlog = () => {
  const posts = [
    {
      category: 'Acne',
      title: "What actually causes adult acne and what doesn't",
      readTime: '5 MIN READ',
      image: '/assets/waldor/blog-1.jpg',
    },
    {
      category: 'Glass Skin',
      title: 'HydraGlass™ explained: what one session does',
      readTime: '5 MIN READ',
      image: '/assets/waldor/blog-2.jpg',
    },
    {
      category: 'Pigmentation',
      title: 'Treating uneven tone in skin of colour, safely',
      readTime: '5 MIN READ',
      image: '/assets/waldor/blog-3.jpg',
    },
  ];

  return (
    <section className="py-24 lg:py-40 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 lg:mb-24 gap-8">
        <div className="space-y-4">
          <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold">
            Our blogs
          </span>
          <h2 className="fraunces text-5xl lg:text-[64px] leading-none text-ink-light/80">
            An Archive of <span className="italic text-gold font-light">Insights and Aesthetics</span>
          </h2>
        </div>
        <button className="bg-beige text-green-dark px-8 py-3 rounded-full text-[14px] font-bold tracking-widest uppercase hover:bg-white transition-all duration-300">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, i) => (
          <div key={i} className="space-y-8 group cursor-pointer">
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl relative">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="space-y-4 px-2">
              <span className="text-[12px] font-bold tracking-widest text-gold uppercase">
                {post.category}
              </span>
              <h4 className="fraunces text-2xl lg:text-[28px] text-ink-light leading-tight group-hover:text-gold transition-colors duration-300">
                {post.title}
              </h4>
              <span className="block text-[12px] font-medium text-ink-muted uppercase tracking-widest pt-2">
                {post.readTime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
