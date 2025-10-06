import { Card } from "@/components/ui/Card";
import { Flex } from "@/components/ui/Flex";
import { Skeleton } from "@/components/ui/Skeleton";
import { Stack } from "@/components/ui/Stack";

export function CartItemSkeleton() {
  return (
    <Card padding="md" elevation="raised" aria-busy="true" aria-live="polite">
      <Flex gap={{ mobile: 6, desktop: 8 }} align="flex-start">
        <Skeleton variant="rectangular" width="80px" height="80px" />
        <Stack gap={4} sx={{ flex: "1" }}>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="rectangular" width="150px" height="32px" />
        </Stack>
      </Flex>
    </Card>
  );
}
