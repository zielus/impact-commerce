"use client";

import { Cart, CartItem, Product } from "@/types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const CART_STORAGE_KEY = "impact-commerce-cart";

function loadCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCartToStorage(items: CartItem[]): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Silently fail if localStorage is not available
  }
}

function calculateCart(items: CartItem[]): Cart {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return { items, total, itemCount };
}

interface CartContextValue {
  cart: Cart;
  isLoaded: boolean;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    setItems(loadCartFromStorage());
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (isLoaded) {
      saveCartToStorage(items);
    }
  }, [items, isLoaded]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        const newItems = [...currentItems];
        const existingItem = newItems[existingItemIndex];
        if (existingItem) {
          newItems[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity + quantity,
          };
        }
        return newItems;
      } else {
        // Add new item
        return [...currentItems, { product, quantity }];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId)
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: number, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }

      setItems((currentItems) =>
        currentItems.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const cart = calculateCart(items);

  const value: CartContextValue = {
    cart,
    isLoaded,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
