"use client";

import { Button } from "@/components/ui";
import { useCart } from "@/contexts/cart-context";
import { Product } from "@/types";
import { StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import * as styles from "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card} data-testid="product-card">
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title} data-testid="product-title">
          {product.title}
        </h3>

        <div className={styles.rating}>
          <StarIcon width={16} height={16} />
          <span>{product.rating.rate}</span>
          <span>({product.rating.count})</span>
        </div>

        <div className={styles.price} data-testid="product-price">
          ${product.price.toFixed(2)}
        </div>

        <Button
          onClick={handleAddToCart}
          className={styles.addButton}
          size="sm"
          data-testid="add-to-cart-button"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
