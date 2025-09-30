"use client";

import { ShoppingCart } from "@/components/ui";
import { useCart } from "@/contexts/cart-context";
import Link from "next/link";
import * as styles from "./Header.css";

export function Header() {
  const { cart } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} data-testid="home-link">
          Impact Commerce
        </Link>

        <Link
          href="/cart"
          className={styles.cartIcon}
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
      </div>
    </header>
  );
}
