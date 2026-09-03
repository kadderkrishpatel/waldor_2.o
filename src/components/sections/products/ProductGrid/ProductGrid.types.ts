export type ProductCategory = "skin-care" | "merch";
export type ProductFilter = "all" | ProductCategory;
export type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  category: ProductCategory;
  href: string;
  badge?: string;
}
