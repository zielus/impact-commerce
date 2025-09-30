import { Product } from "@/types";
import { ProductCard } from "../ProductCard";
import { ProductCardSkeleton } from "../ProductCard/ProductCardSkeleton";
import * as styles from "./ProductGrid.css";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  skeletonCount?: number;
}

export function ProductGrid({
  products,
  isLoading = false,
  skeletonCount = 6,
}: ProductGridProps) {
  if (isLoading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.grid}>
        <p>No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
