"use client";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import { toast } from "sonner";
import type { Product } from "./ProductGrid.types";

interface Props {
  product: Product;
}

const formatPrice = (price: number) => `£${price.toFixed(2)}`;

export default function ProductCard({ product }: Props) {
  const handleAddToCart = () => {
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div
      data-reveal
      data-direction="up"
      className="group flex flex-col overflow-hidden rounded-[20px] border border-[#2A2F2E] bg-[#29302D] transition-transform duration-300 hover:-translate-y-1"
    >
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-410/460 w-full overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={
            product.secondImage
              ? "object-cover transition-transform duration-500 ease-out group-hover:-translate-x-full"
              : "object-cover transition-transform duration-500 group-hover:scale-105"
          }
        />

        {product.secondImage && (
          <Image
            src={product.secondImage}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="absolute inset-0 translate-x-full object-cover transition-transform duration-500 ease-out group-hover:translate-x-0"
          />
        )}

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#1F2422]/80 px-3 py-1 font-hanken text-[10px] font-semibold uppercase tracking-[0.08em] text-[#ECE0D1]">
            {product.badge}
          </span>
        )}

        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1F2422]/60 text-[#ECE0D1] transition-colors duration-300 group-hover:bg-[#1F2422]">
          <FiArrowUpRight size={16} />
        </span>
      </a>

      <div className="flex flex-1 flex-col p-4">
        <a href={product.href} target="_blank" rel="noopener noreferrer">
          <h3 className="font-fraunces text-lg leading-snug text-[#ECE0D1] transition-colors duration-200 hover:text-[#C5A375]">
            {product.name}
          </h3>
        </a>

        <p className="mt-1 font-hanken text-sm text-[#C5A375]">
          {formatPrice(product.price)}
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-4 flex items-center justify-center gap-2 rounded-full border border-[#3D4844] py-2.5 font-hanken text-sm font-medium text-[#ECE0D1] transition-colors duration-200 hover:border-[#C5A375] hover:bg-[#C5A375] hover:text-[#1F2422]"
        >
          <ShoppingCart size={16} strokeWidth={1.75} />
          Add to cart
        </button>
      </div>
    </div>
  );
}
