import { CartProvider, useCart } from "@/contexts/cart-context";
import { Product } from "@/types";
import { act, renderHook, waitFor } from "@testing-library/react";
import { ReactNode } from "react";

// Test wrapper with CartProvider
function CartTestWrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

// Mock product data
const mockProduct1: Product = {
  id: 1,
  title: "Test Product 1",
  price: 10.99,
  description: "Test description",
  category: "test",
  image: "test.jpg",
  rating: { rate: 4.5, count: 100 },
};

const mockProduct2: Product = {
  id: 2,
  title: "Test Product 2",
  price: 25.5,
  description: "Test description 2",
  category: "test",
  image: "test2.jpg",
  rating: { rate: 3.8, count: 50 },
};

describe("useCart", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    vi.resetAllMocks();
  });

  describe("initialization", () => {
    it("should start with empty cart when no data in localStorage", async () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      // Wait for the useEffect to complete
      await waitFor(() => {
        expect(result.current.isLoaded).toBe(true);
      });

      expect(result.current.cart.items).toHaveLength(0);
      expect(result.current.cart.total).toBe(0);
      expect(result.current.cart.itemCount).toBe(0);
    });

    it("should load existing cart from localStorage", async () => {
      // Pre-populate localStorage
      const existingCart = [{ product: mockProduct1, quantity: 2 }];
      const mockGetItem = vi.fn().mockReturnValue(JSON.stringify(existingCart));
      const mockSetItem = vi.fn();

      Object.defineProperty(window, "localStorage", {
        value: {
          getItem: mockGetItem,
          setItem: mockSetItem,
          removeItem: vi.fn(),
          clear: vi.fn(),
        },
      });

      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      // Wait for the useEffect to complete
      await waitFor(() => {
        expect(result.current.isLoaded).toBe(true);
      });

      expect(result.current.cart.items).toHaveLength(1);
      expect(result.current.cart.items[0]?.product.id).toBe(1);
      expect(result.current.cart.items[0]?.quantity).toBe(2);
      expect(result.current.cart.total).toBe(21.98); // 10.99 * 2
      expect(result.current.cart.itemCount).toBe(2);
    });

    it("should handle corrupted localStorage data gracefully", () => {
      localStorage.setItem("impact-commerce-cart", "invalid json");

      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      expect(result.current.cart.items).toHaveLength(0);
      expect(result.current.cart.total).toBe(0);
      expect(result.current.cart.itemCount).toBe(0);
    });
  });

  describe("addToCart", () => {
    it("should add new product to empty cart", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 1);
      });

      expect(result.current.cart.items).toHaveLength(1);
      expect(result.current.cart.items[0]?.product.id).toBe(1);
      expect(result.current.cart.items[0]?.quantity).toBe(1);
      expect(result.current.cart.total).toBe(10.99);
      expect(result.current.cart.itemCount).toBe(1);
    });

    it("should add multiple quantities of same product", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 3);
      });

      expect(result.current.cart.items).toHaveLength(1);
      expect(result.current.cart.items[0]?.quantity).toBe(3);
      expect(result.current.cart.total).toBe(32.97); // 10.99 * 3
      expect(result.current.cart.itemCount).toBe(3);
    });

    it("should increment quantity when adding existing product", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 2);
      });

      act(() => {
        result.current.addToCart(mockProduct1, 1);
      });

      expect(result.current.cart.items).toHaveLength(1);
      expect(result.current.cart.items[0]?.quantity).toBe(3);
      expect(result.current.cart.total).toBe(32.97); // 10.99 * 3
    });

    it("should add different products separately", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 1);
      });

      act(() => {
        result.current.addToCart(mockProduct2, 2);
      });

      expect(result.current.cart.items).toHaveLength(2);
      expect(result.current.cart.total).toBe(61.99); // 10.99 + (25.50 * 2)
      expect(result.current.cart.itemCount).toBe(3);
    });

    it("should default to quantity 1 when not specified", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1);
      });

      expect(result.current.cart.items[0]?.quantity).toBe(1);
    });
  });

  describe("removeFromCart", () => {
    it("should remove product from cart", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 2);
        result.current.addToCart(mockProduct2, 1);
      });

      act(() => {
        result.current.removeFromCart(1);
      });

      expect(result.current.cart.items).toHaveLength(1);
      expect(result.current.cart.items[0]?.product.id).toBe(2);
      expect(result.current.cart.total).toBe(25.5);
      expect(result.current.cart.itemCount).toBe(1);
    });

    it("should handle removing non-existent product gracefully", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 1);
      });

      act(() => {
        result.current.removeFromCart(999); // Non-existent ID
      });

      expect(result.current.cart.items).toHaveLength(1);
      expect(result.current.cart.items[0]?.product.id).toBe(1);
    });
  });

  describe("updateQuantity", () => {
    it("should update product quantity", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 2);
      });

      act(() => {
        result.current.updateQuantity(1, 5);
      });

      expect(result.current.cart.items[0]?.quantity).toBe(5);
      expect(result.current.cart.total).toBe(54.95); // 10.99 * 5
      expect(result.current.cart.itemCount).toBe(5);
    });

    it("should remove product when quantity is set to 0", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 2);
        result.current.addToCart(mockProduct2, 1);
      });

      act(() => {
        result.current.updateQuantity(1, 0);
      });

      expect(result.current.cart.items).toHaveLength(1);
      expect(result.current.cart.items[0]?.product.id).toBe(2);
    });

    it("should remove product when quantity is negative", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 2);
      });

      act(() => {
        result.current.updateQuantity(1, -1);
      });

      expect(result.current.cart.items).toHaveLength(0);
    });

    it("should handle updating non-existent product gracefully", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 1);
      });

      act(() => {
        result.current.updateQuantity(999, 5); // Non-existent ID
      });

      expect(result.current.cart.items).toHaveLength(1);
      expect(result.current.cart.items[0]?.quantity).toBe(1);
    });
  });

  describe("clearCart", () => {
    it("should clear all items from cart", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 2);
        result.current.addToCart(mockProduct2, 3);
      });

      act(() => {
        result.current.clearCart();
      });

      expect(result.current.cart.items).toHaveLength(0);
      expect(result.current.cart.total).toBe(0);
      expect(result.current.cart.itemCount).toBe(0);
    });
  });

  describe("localStorage persistence", () => {
    it("should save cart to localStorage when items change", async () => {
      const mockSetItem = vi.fn();
      const mockGetItem = vi.fn().mockReturnValue(null);

      Object.defineProperty(window, "localStorage", {
        value: {
          getItem: mockGetItem,
          setItem: mockSetItem,
          removeItem: vi.fn(),
          clear: vi.fn(),
        },
      });

      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      // Wait for initial load
      await waitFor(() => {
        expect(result.current.isLoaded).toBe(true);
      });

      act(() => {
        result.current.addToCart(mockProduct1, 2);
      });

      // Check that setItem was called with the correct data
      expect(mockSetItem).toHaveBeenCalledWith(
        "impact-commerce-cart",
        JSON.stringify([{ product: mockProduct1, quantity: 2 }])
      );
    });

    it("should handle localStorage errors gracefully", () => {
      // Mock localStorage to throw an error
      const originalSetItem = Storage.prototype.setItem;
      Storage.prototype.setItem = vi.fn(() => {
        throw new Error("localStorage is full");
      });

      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      // Should not throw an error
      expect(() => {
        act(() => {
          result.current.addToCart(mockProduct1, 1);
        });
      }).not.toThrow();

      // Restore original localStorage
      Storage.prototype.setItem = originalSetItem;
    });
  });

  describe("calculations", () => {
    it("should calculate total correctly with multiple products and quantities", () => {
      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(mockProduct1, 3); // 10.99 * 3 = 32.97
        result.current.addToCart(mockProduct2, 2); // 25.50 * 2 = 51.00
      });

      expect(result.current.cart.total).toBe(83.97);
      expect(result.current.cart.itemCount).toBe(5);
    });

    it("should handle decimal precision correctly", () => {
      const decimalProduct: Product = {
        ...mockProduct1,
        price: 10.33,
      };

      const { result } = renderHook(() => useCart(), {
        wrapper: CartTestWrapper,
      });

      act(() => {
        result.current.addToCart(decimalProduct, 3);
      });

      // Use toBeCloseTo for floating point comparisons
      expect(result.current.cart.total).toBeCloseTo(30.99, 2);
    });
  });
});
