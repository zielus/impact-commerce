"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Flex } from "@/components/ui/Flex";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { useCart } from "@/contexts/cart-context";
import { vars } from "@/styles/theme.css";
import { space } from "@/styles/tokens";

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
    <Card
      padding="xl"
      elevation="raised"
      data-testid="cart-summary"
      style={{ position: "sticky", top: "100px" }}
    >
      <Stack gap={8}>
        <Text variant="h4" weight="bold">
          Order Summary
        </Text>

        <Stack gap={6}>
          <Flex justify="space-between" align="center">
            <Text color="textMuted">Items ({cart.itemCount})</Text>
            <Text weight="semibold">${cart.total.toFixed(2)}</Text>
          </Flex>

          <Flex justify="space-between" align="center">
            <Text color="textMuted">Shipping</Text>
            <Text weight="semibold">Free</Text>
          </Flex>

          <Flex
            justify="space-between"
            align="center"
            sx={{ marginTop: 6 }}
            style={{
              borderTop: `1px solid ${vars.color.border}`,
              paddingTop: space[6],
            }}
          >
            <Text variant="h5" weight="bold">
              Total
            </Text>
            <Text
              variant="h3"
              weight="bold"
              color="primary"
              data-testid="cart-total"
            >
              ${cart.total.toFixed(2)}
            </Text>
          </Flex>
        </Stack>

        <Button
          onClick={handleCheckout}
          size="lg"
          data-testid="checkout-button"
          sx={{ width: "full" }}
        >
          Proceed to Checkout
        </Button>
      </Stack>
    </Card>
  );
}
