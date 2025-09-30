"use client";

import { CategoryCard, CategoryCardSkeleton } from "@/components/categories";
import { getAllCategories } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { categoriesGrid, homeContainer, pageTitle } from "./page.css";

export default function HomePage() {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  if (isLoading) {
    return (
      <main className={homeContainer()}>
        <h1 className={pageTitle}>Impact Commerce</h1>
        <p>Discover products by category</p>
        <div className={categoriesGrid}>
          {Array.from({ length: 4 }).map((_, i) => (
            <CategoryCardSkeleton key={i} />
          ))}
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={homeContainer()}>
        <h1 className={pageTitle}>Error loading categories</h1>
        <p>Please try again later.</p>
      </main>
    );
  }

  return (
    <main className={homeContainer()}>
      <h1 className={pageTitle}>Impact Commerce</h1>
      <p>Discover products by category</p>

      <div className={categoriesGrid}>
        {categories?.map((category) => (
          <CategoryCard key={category} category={category} />
        ))}
      </div>
    </main>
  );
}
