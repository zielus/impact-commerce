"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Flex } from "@/components/ui/Flex";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { useCart } from "@/contexts/cart-context";
import { Product } from "@/types";
import { StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import * as styles from "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card
      padding="none"
      interaction="lift"
      elevation="raised"
      className={styles.cardContainer}
      data-testid="product-card"
    >
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.productImage}
          priority={priority}
        />
      </div>

      <Stack gap={4} className={styles.contentContainer}>
        <Text
          variant="body"
          weight="semibold"
          truncate={2}
          data-testid="product-title"
        >
          {product.title}
        </Text>

        <Flex align="center" gap={2} className={styles.ratingContainer}>
          <StarIcon width={16} height={16} />
          <span>{product.rating.rate}</span>
          <span>({product.rating.count})</span>
        </Flex>

        <Text
          variant="h4"
          weight="bold"
          color="primary"
          data-testid="product-price"
          sx={{ marginTop: "auto" }}
        >
          ${product.price.toFixed(2)}
        </Text>

        <Button
          onClick={handleAddToCart}
          size="sm"
          data-testid="add-to-cart-button"
          sx={{ marginTop: 4 }}
        >
          Add to Cart
        </Button>
      </Stack>
    </Card>
  );
}
