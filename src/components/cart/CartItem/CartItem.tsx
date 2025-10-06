"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Flex } from "@/components/ui/Flex";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
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
    <Card padding="md" elevation="raised" data-testid="cart-item">
      <Flex gap={{ mobile: 6, desktop: 8 }} align="flex-start">
        <div className={styles.imageContainer}>
          <Image
            src={item.product.image}
            alt={item.product.title}
            width={80}
            height={80}
            className={styles.productImage}
          />
        </div>

        <Stack
          gap={4}
          justify="space-between"
          className={styles.contentContainer}
        >
          <Text
            variant="body"
            weight="semibold"
            truncate={2}
            data-testid="cart-item-title"
          >
            {item.product.title}
          </Text>

          <Text
            variant="h5"
            weight="bold"
            color="primary"
            data-testid="cart-item-subtotal"
          >
            ${subtotal.toFixed(2)}
          </Text>

          <Flex justify="space-between" align="center" sx={{ marginTop: 6 }}>
            <Flex align="center" gap={4}>
              <Button
                variant="secondary"
                size="icon"
                onClick={handleDecrement}
                disabled={item.quantity <= 1}
                data-testid="decrease-quantity"
                aria-label="Decrease quantity"
              >
                <MinusIcon width={16} height={16} />
              </Button>

              <Text
                weight="semibold"
                data-testid="cart-item-quantity"
                className={styles.quantityText}
              >
                {item.quantity}
              </Text>

              <Button
                variant="secondary"
                size="icon"
                onClick={handleIncrement}
                data-testid="increase-quantity"
                aria-label="Increase quantity"
              >
                <PlusIcon width={16} height={16} />
              </Button>
            </Flex>

            <Button
              variant="danger"
              size="icon"
              onClick={handleRemove}
              title="Remove item"
              data-testid="remove-item"
              aria-label="Remove item from cart"
            >
              <TrashIcon width={16} height={16} />
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Card>
  );
}
