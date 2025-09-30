"use client";

import { CartItem, CartSummary } from "@/components/cart";
import { Button } from "@/components/ui";
import { useCart } from "@/contexts/cart-context";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as styles from "./page.css";

export default function CartPage() {
  const { cart, isLoaded } = useCart();

  if (!isLoaded) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Loading cart...</h1>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.backButton}>
            <ArrowLeftIcon width={16} height={16} />
            Continue Shopping
          </Link>
          <h1 className={styles.title}>Your Cart</h1>
        </div>

        <div className={styles.emptyCart}>
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <Link href="/">
            <Button size="lg">Browse Categories</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <ArrowLeftIcon width={16} height={16} />
          Continue Shopping
        </Link>
        <h1 className={styles.title}>Your Cart</h1>
        <p className={styles.subtitle}>
          {cart.itemCount} item{cart.itemCount !== 1 ? "s" : ""} in your cart
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.cartItems}>
          {cart.items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>

        <div className={styles.sidebar}>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
