import productsData from "./products.json";
import categoriesData from "./categories.json";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: string;
  currency: string;
  image: string;
  remoteImage?: string;
  thumbnail?: string;
  internalUrl: string;
  productUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  internalUrl: string;
  image: string;
  remoteImage?: string;
  description?: string;
  productCount?: number;
  products?: Product[];
}

export interface ProductsDatabase {
  company: {
    name: string;
    location: string;
    sourceUrl: string;
  };
  totalCategories: number;
  categories: Category[];
}

export const productsDatabase = productsData as ProductsDatabase;
export const categories = categoriesData as Category[];

export const allProducts: Product[] = productsDatabase.categories.flatMap(
  (cat) => cat.products || []
);

export function getCategoryBySlug(slug: string): Category | undefined {
  return productsDatabase.categories.find(
    (cat) => cat.slug.toLowerCase() === slug.toLowerCase()
  );
}

export function getProductsByCategory(categoryNameOrSlug: string): Product[] {
  const cat = productsDatabase.categories.find(
    (c) =>
      c.name.toLowerCase() === categoryNameOrSlug.toLowerCase() ||
      c.slug.toLowerCase() === categoryNameOrSlug.toLowerCase()
  );
  return cat?.products || [];
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export default productsData;
