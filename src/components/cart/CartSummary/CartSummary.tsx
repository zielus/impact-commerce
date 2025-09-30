"use client";

import { Button } from "@/components/ui";
import { useCart } from "@/contexts/cart-context";
import * as styles from "./CartSummary.css";

export function CartSummary() {
  const { cart } = useCart();

  if (cart.items.length === 0) {
    return null;
  }

  const handleCheckout = () => {
    // This would normally integrate with a payment processor
    alert("Checkout functionality would be implemented here!");
  };

  return (
    <div className={styles.summary} data-testid="cart-summary">
      <h2 className={styles.title}>Order Summary</h2>

      <div className={styles.row}>
        <span className={styles.label}>Items ({cart.itemCount})</span>
        <span className={styles.value}>${cart.total.toFixed(2)}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Shipping</span>
        <span className={styles.value}>Free</span>
      </div>

      <div className={`${styles.row} ${styles.total}`}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValue} data-testid="cart-total">
          ${cart.total.toFixed(2)}
        </span>
      </div>

      <Button
        onClick={handleCheckout}
        className={styles.checkoutButton}
        size="lg"
        data-testid="checkout-button"
      >
        Proceed to Checkout
      </Button>
    </div>
  );
}
