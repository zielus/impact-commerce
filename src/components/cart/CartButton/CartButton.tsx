"use client";

import { ShoppingCart } from "@/components/ui/Icon";
import { useCart } from "@/contexts/cart-context";
import Link from "next/link";
import * as styles from "./CartButton.css";

export function CartButton() {
  const { cart } = useCart();

  return (
    <Link
      href="/cart"
      className={styles.cartLink}
      data-testid="cart-link"
      aria-label={`Shopping cart with ${cart.itemCount} items`}
    >
      <ShoppingCart width={24} height={24} />
      {cart.itemCount > 0 && (
        <span className={styles.cartBadge} data-testid="cart-badge">
          {cart.itemCount}
        </span>
      )}
    </Link>
  );
}
