interface ShoppingCartProps {
  width?: number;
  height?: number;
  className?: string;
}

export function ShoppingCart({
  width = 24,
  height = 24,
  className,
}: ShoppingCartProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="m1 1 4 4 14 1-1 7H6" />
    </svg>
  );
}
