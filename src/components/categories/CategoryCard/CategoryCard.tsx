import { CategoryName } from "@/types";
import Link from "next/link";
import * as styles from "./CategoryCard.css";

interface CategoryCardProps {
  category: CategoryName;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const href = `/category/${encodeURIComponent(category)}`;

  return (
    <Link href={href} className={styles.card} data-testid="category-card">
      <h2 className={styles.title}>{category}</h2>
    </Link>
  );
}
