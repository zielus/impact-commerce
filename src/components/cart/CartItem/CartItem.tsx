"use client";

import { useCart } from "@/contexts/cart-context";
import { type CartItem as CartItemType } from "@/types";
import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import * as styles from "./CartItem.css";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.product.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.product.id);
  };

  const subtotal = item.product.price * item.quantity;

  return (
    <div className={styles.item} data-testid="cart-item">
      <div className={styles.imageContainer}>
        <Image
          src={item.product.image}
          alt={item.product.title}
          width={80}
          height={80}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title} data-testid="cart-item-title">
          {item.product.title}
        </h3>
        <div className={styles.price} data-testid="cart-item-subtotal">
          ${subtotal.toFixed(2)}
        </div>

        <div className={styles.controls}>
          <div className={styles.quantityControls}>
            <button
              className={styles.quantityButton}
              onClick={handleDecrement}
              disabled={item.quantity <= 1}
              data-testid="decrease-quantity"
              aria-label="Decrease quantity"
            >
              <MinusIcon width={16} height={16} />
            </button>

            <span className={styles.quantity} data-testid="cart-item-quantity">
              {item.quantity}
            </span>

            <button
              className={styles.quantityButton}
              onClick={handleIncrement}
              data-testid="increase-quantity"
              aria-label="Increase quantity"
            >
              <PlusIcon width={16} height={16} />
            </button>
          </div>

          <button
            className={styles.removeButton}
            onClick={handleRemove}
            title="Remove item"
            data-testid="remove-item"
            aria-label="Remove item from cart"
          >
            <TrashIcon width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
