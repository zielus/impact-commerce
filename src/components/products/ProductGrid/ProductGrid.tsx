import { Grid } from "@/components/ui/Grid";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Product } from "@/types";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { ProductCard } from "../ProductCard";
import { ProductCardSkeleton } from "../ProductCard/ProductCardSkeleton";

interface ProductGridProps {
  products: Product[] | undefined;
  isLoading?: boolean;
  error?: Error | null;
  skeletonCount?: number;
}

export function ProductGrid({
  products,
  isLoading = false,
  error = null,
  skeletonCount = 6,
}: ProductGridProps) {
  const productList = products ?? [];

  if (error) {
    return (
      <Stack align="center" gap={6} sx={{ py: 10 }}>
        <ExclamationTriangleIcon width={32} height={32} />
        <Text color="textMuted" align="center">
          Unable to load products. Please try again later.
        </Text>
      </Stack>
    );
  }

  if (!isLoading && productList.length === 0) {
    return (
      <Stack align="center" sx={{ py: 10 }}>
        <Text color="textMuted">No products found in this category.</Text>
      </Stack>
    );
  }

  return (
    <Grid
      columns={{
        mobile: 1,
        tablet: 2,
        desktop: 3,
      }}
      gap={{ mobile: 6, tablet: 10 }}
    >
      {productList.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 3} />
      ))}
      {isLoading &&
        Array.from({ length: skeletonCount }).map((_, i) => (
          <ProductCardSkeleton key={`product-skeleton-${i}`} />
        ))}
    </Grid>
  );
}
