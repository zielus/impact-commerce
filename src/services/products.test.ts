import {
  getAllCategories,
  getAllProducts,
  getProductById,
  getProductsByCategory,
} from "@/services/products";
import { Product } from "@/types";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock the api module
vi.mock("@/services/api", () => ({
  apiRequest: vi.fn(),
}));

import { apiRequest } from "@/services/api";
const mockApiRequest = vi.mocked(apiRequest);

// Mock data
const mockProducts: Product[] = [
  {
    id: 1,
    title: "Test Product 1",
    price: 10.99,
    description: "Test description 1",
    category: "electronics",
    image: "test1.jpg",
    rating: { rate: 4.5, count: 100 },
  },
  {
    id: 2,
    title: "Test Product 2",
    price: 25.5,
    description: "Test description 2",
    category: "clothing",
    image: "test2.jpg",
    rating: { rate: 3.8, count: 50 },
  },
  {
    id: 3,
    title: "Test Product 3",
    price: 15.75,
    description: "Test description 3",
    category: "electronics",
    image: "test3.jpg",
    rating: { rate: 4.2, count: 75 },
  },
];

const mockCategories = ["electronics", "clothing", "books"];

describe("products service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getAllProducts", () => {
    it("should fetch all products successfully", async () => {
      mockApiRequest.mockResolvedValue(mockProducts);

      const result = await getAllProducts();

      expect(mockApiRequest).toHaveBeenCalledWith("/products");
      expect(result).toEqual(mockProducts);
      expect(result).toHaveLength(3);
    });

    it("should handle API errors", async () => {
      const apiError = new Error("Network error");
      mockApiRequest.mockRejectedValue(apiError);

      await expect(getAllProducts()).rejects.toThrow("Network error");
      expect(mockApiRequest).toHaveBeenCalledWith("/products");
    });

    it("should return empty array when no products found", async () => {
      mockApiRequest.mockResolvedValue([]);

      const result = await getAllProducts();

      expect(result).toEqual([]);
      expect(result).toHaveLength(0);
    });
  });

  describe("getProductById", () => {
    it("should fetch product by ID successfully", async () => {
      const expectedProduct = mockProducts[0]!;
      mockApiRequest.mockResolvedValue(expectedProduct);

      const result = await getProductById(1);

      expect(mockApiRequest).toHaveBeenCalledWith("/products/1");
      expect(result).toEqual(expectedProduct);
      expect(result.id).toBe(1);
    });

    it("should handle product not found", async () => {
      const notFoundError = new Error("Product not found");
      mockApiRequest.mockRejectedValue(notFoundError);

      await expect(getProductById(999)).rejects.toThrow("Product not found");
      expect(mockApiRequest).toHaveBeenCalledWith("/products/999");
    });

    it("should handle invalid product ID", async () => {
      const invalidIdError = new Error("Invalid ID");
      mockApiRequest.mockRejectedValue(invalidIdError);

      await expect(getProductById(-1)).rejects.toThrow("Invalid ID");
    });
  });

  describe("getProductsByCategory", () => {
    it("should fetch products by category successfully", async () => {
      const electronicsProducts = mockProducts.filter(
        (p) => p.category === "electronics"
      );
      mockApiRequest.mockResolvedValue(electronicsProducts);

      const result = await getProductsByCategory("electronics");

      expect(mockApiRequest).toHaveBeenCalledWith(
        "/products/category/electronics"
      );
      expect(result).toEqual(electronicsProducts);
      expect(result).toHaveLength(2);
      expect(result.every((p) => p.category === "electronics")).toBe(true);
    });

    it("should handle category with no products", async () => {
      mockApiRequest.mockResolvedValue([]);

      const result = await getProductsByCategory("empty-category");

      expect(mockApiRequest).toHaveBeenCalledWith(
        "/products/category/empty-category"
      );
      expect(result).toEqual([]);
      expect(result).toHaveLength(0);
    });

    it("should handle invalid category", async () => {
      const invalidCategoryError = new Error("Category not found");
      mockApiRequest.mockRejectedValue(invalidCategoryError);

      await expect(getProductsByCategory("invalid-category")).rejects.toThrow(
        "Category not found"
      );
    });

    it("should handle URL encoding for category names", async () => {
      const categoryWithSpaces = "men's clothing";
      mockApiRequest.mockResolvedValue([]);

      await getProductsByCategory(categoryWithSpaces);

      expect(mockApiRequest).toHaveBeenCalledWith(
        "/products/category/men's clothing"
      );
    });
  });

  describe("getAllCategories", () => {
    it("should fetch all categories successfully", async () => {
      mockApiRequest.mockResolvedValue(mockCategories);

      const result = await getAllCategories();

      expect(mockApiRequest).toHaveBeenCalledWith("/products/categories");
      expect(result).toEqual(mockCategories);
      expect(result).toHaveLength(3);
      expect(result).toContain("electronics");
      expect(result).toContain("clothing");
      expect(result).toContain("books");
    });

    it("should handle empty categories response", async () => {
      mockApiRequest.mockResolvedValue([]);

      const result = await getAllCategories();

      expect(result).toEqual([]);
      expect(result).toHaveLength(0);
    });

    it("should handle categories API error", async () => {
      const categoriesError = new Error("Categories service unavailable");
      mockApiRequest.mockRejectedValue(categoriesError);

      await expect(getAllCategories()).rejects.toThrow(
        "Categories service unavailable"
      );
      expect(mockApiRequest).toHaveBeenCalledWith("/products/categories");
    });
  });

  describe("integration scenarios", () => {
    it("should handle multiple concurrent requests", async () => {
      mockApiRequest
        .mockResolvedValueOnce(mockProducts)
        .mockResolvedValueOnce(mockCategories)
        .mockResolvedValueOnce(mockProducts[0]);

      const [products, categories, product] = await Promise.all([
        getAllProducts(),
        getAllCategories(),
        getProductById(1),
      ]);

      expect(products).toEqual(mockProducts);
      expect(categories).toEqual(mockCategories);
      expect(product).toEqual(mockProducts[0]);
      expect(mockApiRequest).toHaveBeenCalledTimes(3);
    });

    it("should maintain data consistency across calls", async () => {
      // First call returns products
      mockApiRequest.mockResolvedValueOnce(mockProducts);
      const allProducts = await getAllProducts();

      // Second call returns products for specific category
      const electronicsProducts = mockProducts.filter(
        (p) => p.category === "electronics"
      );
      mockApiRequest.mockResolvedValueOnce(electronicsProducts);
      const categoryProducts = await getProductsByCategory("electronics");

      // Verify consistency
      expect(allProducts.filter((p) => p.category === "electronics")).toEqual(
        categoryProducts
      );
    });
  });
});
