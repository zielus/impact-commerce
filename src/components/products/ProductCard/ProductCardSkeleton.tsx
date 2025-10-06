import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { Stack } from "@/components/ui/Stack";

export function ProductCardSkeleton() {
  return (
    <Card
      padding="none"
      elevation="raised"
      sx={{
        height: "full",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
      aria-busy="true"
      aria-live="polite"
    >
      <div style={{ aspectRatio: "1", width: "100%" }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </div>

      <Stack gap={4} sx={{ p: 8, flex: "1" }}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="rectangular" width="100%" height="36px" />
      </Stack>
    </Card>
  );
}
