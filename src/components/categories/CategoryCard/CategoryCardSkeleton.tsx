import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { Stack } from "@/components/ui/Stack";

export function CategoryCardSkeleton() {
  return (
    <Card
      padding="lg"
      elevation="raised"
      sx={{
        height: "full",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      style={{ minHeight: "128px" }}
      aria-busy="true"
      aria-live="polite"
    >
      <Stack align="center" gap={6} sx={{ width: "full" }}>
        <Skeleton variant="circular" width={56} height={56} />
        <Skeleton variant="text" width="60%" />
      </Stack>
    </Card>
  );
}
