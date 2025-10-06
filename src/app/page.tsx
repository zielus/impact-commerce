"use client";

import { CategoryGrid } from "@/components/categories";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { getAllCategories } from "@/services/products";
import { container } from "@/styles/primitives/layout.css";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    // Add artificial delay to see skeletons (remove this in production)
    staleTime: 0,
  });

  return (
    <main className={container}>
      <Stack gap={8}>
        <Stack gap={2} as="header">
          <Text variant="h2" as="h1">
            Categories
          </Text>
          <Text variant="body" color="textMuted">
            Discover products by category
          </Text>
        </Stack>

        <CategoryGrid
          categories={categories}
          isLoading={isLoading}
          error={error}
        />
      </Stack>
    </main>
  );
}
