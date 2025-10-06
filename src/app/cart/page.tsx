"use client";

import { CartItem, CartSummary } from "@/components/cart";
import { Button } from "@/components/ui/Button";
import { Flex } from "@/components/ui/Flex";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { useCart } from "@/contexts/cart-context";
import { container } from "@/styles/primitives/layout.css";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function CartPage() {
  const { cart, isLoaded } = useCart();

  if (!isLoaded) {
    return (
      <main className={container}>
        <Stack gap={8}>
          <Text variant="h2" as="h1">
            Loading cart...
          </Text>
        </Stack>
      </main>
    );
  }

  if (cart.items.length === 0) {
    return (
      <main className={container}>
        <Stack gap={8}>
          <Stack gap={4} as="header">
            <Link href="/">
              <Button variant="link" size="sm">
                <ArrowLeftIcon width={16} height={16} />
                Continue Shopping
              </Button>
            </Link>
            <Text variant="h2" as="h1">
              Your Cart
            </Text>
          </Stack>

          <Stack align="center" gap={4} sx={{ py: 8 }}>
            <Text variant="h3">Your cart is empty</Text>
            <Text color="textMuted">Add some products to get started!</Text>
            <Link href="/">
              <Button size="lg">Browse Categories</Button>
            </Link>
          </Stack>
        </Stack>
      </main>
    );
  }

  return (
    <main className={container}>
      <Stack gap={8}>
        <Stack gap={4} as="header">
          <Link href="/">
            <Button variant="link" size="sm">
              <ArrowLeftIcon width={16} height={16} />
              Continue Shopping
            </Button>
          </Link>
          <Text variant="h2" as="h1">
            Your Cart
          </Text>
          <Text variant="body" color="textMuted">
            {cart.itemCount} item{cart.itemCount !== 1 ? "s" : ""} in your cart
          </Text>
        </Stack>

        <Flex
          direction={{ mobile: "column", tablet: "row" }}
          gap={{ mobile: 6, desktop: 10 }}
          align="flex-start"
        >
          <Flex sx={{ flex: { tablet: "2" } }}>
            <Stack gap={4}>
              {cart.items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </Stack>
          </Flex>

          <Flex
            direction="column"
            sx={{ flex: { tablet: "1" }, width: "full" }}
          >
            <CartSummary />
          </Flex>
        </Flex>
      </Stack>
    </main>
  );
}
