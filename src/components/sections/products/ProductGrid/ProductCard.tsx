import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import type { Product } from "./ProductGrid.types";

interface Props {
  product: Product;
}

const formatPrice = (price: number) => `£${price.toFixed(2)}`;

export default function ProductCard({ product }: Props) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      data-reveal
      data-direction="up"
      className="group block overflow-hidden rounded-[20px] border border-[#2A2F2E] bg-[#29302D] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-410/460 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#1F2422]/80 px-3 py-1 font-hanken text-[10px] font-semibold uppercase tracking-[0.08em] text-[#ECE0D1]">
            {product.badge}
          </span>
        )}

        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1F2422]/60 text-[#ECE0D1] transition-colors duration-300 group-hover:bg-[#1F2422]">
          <FiArrowUpRight size={16} />
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-fraunces text-lg leading-snug text-[#ECE0D1]">
          {product.name}
        </h3>

        <p className="mt-1 font-hanken text-sm text-[#C5A375]">
          {formatPrice(product.price)}
        </p>
      </div>
    </a>
  );
}
