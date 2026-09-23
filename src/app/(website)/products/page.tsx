import type { Metadata } from "next";
import { ProductGrid, ShopCTA, ShopHero } from "@/src/components/sections/products";
import ProductSchema from "@/src/components/seo/ProductSchema";
import { products } from "@/src/components/sections/products/ProductGrid/ProductGrid.data";

export const metadata: Metadata = {
  title: "Korean Bio-Fermented Skincare | Shop WALDOR.SKIN",
  description:
    "Shop the HydraGlass™ skincare range from Waldor Clinic — clinically formulated serums, creams and treatment pads for radiant, healthy skin.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductSchema products={products} />
      <ShopHero />
      <ProductGrid />
      <ShopCTA />
    </>
  );
}
