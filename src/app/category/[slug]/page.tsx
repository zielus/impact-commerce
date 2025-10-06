"use client";

import { ProductGrid } from "@/components/products";
import { Button } from "@/components/ui/Button";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { getProductsByCategory } from "@/services/products";
import { container } from "@/styles/primitives/layout.css";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect(() => {
    params.then((resolvedParams) => {
      setCategoryName(decodeURIComponent(resolvedParams.slug));
    });
  }, [params]);

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", "category", categoryName],
    queryFn: () => getProductsByCategory(categoryName),
    enabled: !!categoryName,
  });

  return (
    <main className={container}>
      <Stack gap={8}>
        <Stack gap={4} as="header">
          <Link href="/">
            <Button variant="link" size="sm">
              <ArrowLeftIcon width={16} height={16} />
              Back to Categories
            </Button>
          </Link>

          <Text variant="h2" as="h1" transform="capitalize">
            {categoryName || "Products"}
          </Text>
          <Text variant="body" color="textMuted">
            {products?.length || 0} product{products?.length !== 1 ? "s" : ""}{" "}
            found
          </Text>
        </Stack>

        <ProductGrid products={products} isLoading={isLoading} error={error} />
      </Stack>
    </main>
  );
}
