import { CategoryCard, CategoryCardSkeleton } from "@/components/categories";
import { Grid } from "@/components/ui/Grid";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { CategoryName } from "@/types";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface CategoryGridProps {
  categories: CategoryName[] | undefined;
  isLoading?: boolean;
  error?: Error | null;
  skeletonCount?: number;
}

export function CategoryGrid({
  categories,
  isLoading = false,
  error = null,
  skeletonCount = 4,
}: CategoryGridProps) {
  const categoryList = categories ?? [];

  if (error) {
    return (
      <Stack align="center" gap={6} sx={{ py: 10 }}>
        <ExclamationTriangleIcon width={32} height={32} />
        <Text color="textMuted" align="center">
          Unable to load categories. Please try again later.
        </Text>
      </Stack>
    );
  }

  if (!isLoading && categoryList.length === 0) {
    return (
      <Stack align="center" sx={{ py: 10 }}>
        <Text color="textMuted">No categories found.</Text>
      </Stack>
    );
  }

  return (
    <Grid
      columns={{
        mobile: 1,
        tablet: 2,
        desktop: 3,
        wide: 4,
      }}
      gap={{ mobile: 6, tablet: 8 }}
    >
      {categoryList.map((category) => (
        <CategoryCard key={category} category={category} />
      ))}
      {isLoading &&
        Array.from({ length: skeletonCount }).map((_, i) => (
          <CategoryCardSkeleton key={`category-skeleton-${i}`} />
        ))}
    </Grid>
  );
}
