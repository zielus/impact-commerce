import { Card } from "@/components/ui/Card";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { CategoryName } from "@/types";
import { StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as styles from "./CategoryCard.css";

interface CategoryCardProps {
  category: CategoryName;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const href = `/category/${encodeURIComponent(category)}`;

  return (
    <Link href={href} className={styles.categoryLink}>
      <Card
        padding="lg"
        interaction="lift"
        elevation="raised"
        className={styles.cardContainer}
        data-testid="category-card"
      >
        <Stack align="center" gap={4}>
          <div className={styles.iconContainer} aria-hidden>
            <StarIcon width={24} height={24} />
          </div>

          <Text
            variant="h4"
            as="h2"
            weight="bold"
            color="primary"
            transform="capitalize"
            align="center"
          >
            {category}
          </Text>
        </Stack>
      </Card>
    </Link>
  );
}
