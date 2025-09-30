"use client";

import { ProductGrid } from "@/components/products";
import { getProductsByCategory } from "@/services/products";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as styles from "./page.css";

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

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.backButton}>
            <ArrowLeftIcon width={16} height={16} />
            Back to Categories
          </Link>
          <h1 className={styles.title}>{categoryName || "Loading..."}</h1>
        </div>
        <ProductGrid products={[]} isLoading={true} skeletonCount={6} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Error loading products</h1>
          <p>Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <ArrowLeftIcon width={16} height={16} />
          Back to Categories
        </Link>

        <h1 className={styles.title}>{categoryName}</h1>
        <p className={styles.subtitle}>
          {products?.length || 0} product{products?.length !== 1 ? "s" : ""}{" "}
          found
        </p>
      </div>

      <ProductGrid products={products || []} />
    </div>
  );
}
