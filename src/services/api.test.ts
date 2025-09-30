import { apiRequest } from "@/services/api";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("apiRequest", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should make successful API request", async () => {
    const mockResponse = { id: 1, title: "Test Product" };
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await apiRequest("/test-endpoint");

    expect(mockFetch).toHaveBeenCalledWith(
      "https://fakestoreapi.com/test-endpoint"
    );
    expect(result).toEqual(mockResponse);
  });

  it("should handle HTTP error responses", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });

    await expect(apiRequest("/nonexistent")).rejects.toThrow(
      "API request failed: Not Found"
    );
  });

  it("should handle network errors", async () => {
    mockFetch.mockRejectedValue(new Error("Network failure"));

    await expect(apiRequest("/test")).rejects.toThrow("Network error occurred");
  });

  it("should handle JSON parsing errors", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.reject(new Error("Invalid JSON")),
    });

    await expect(apiRequest("/test")).rejects.toThrow("Network error occurred");
  });

  it("should construct correct URLs for different endpoints", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
    });

    await apiRequest("/products");
    expect(mockFetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");

    await apiRequest("/products/1");
    expect(mockFetch).toHaveBeenCalledWith(
      "https://fakestoreapi.com/products/1"
    );

    await apiRequest("/products/categories");
    expect(mockFetch).toHaveBeenCalledWith(
      "https://fakestoreapi.com/products/categories"
    );
  });

  it("should handle different HTTP status codes correctly", async () => {
    // Test 500 error
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    await expect(apiRequest("/test")).rejects.toThrow(
      "API request failed: Internal Server Error"
    );

    // Test 401 error
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
      statusText: "Unauthorized",
    });

    await expect(apiRequest("/test")).rejects.toThrow(
      "API request failed: Unauthorized"
    );
  });

  it("should preserve the error type for API errors", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });

    try {
      await apiRequest("/test");
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      expect(error.name).toBe("ApiError");
      expect(error.status).toBe(404);
      expect(error.message).toBe("API request failed: Not Found");
    }
  });

  it("should handle empty responses", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(null),
    });

    const result = await apiRequest("/test");
    expect(result).toBe(null);
  });

  it("should handle array responses", async () => {
    const mockArray = [{ id: 1 }, { id: 2 }];
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockArray),
    });

    const result = await apiRequest("/test");
    expect(result).toEqual(mockArray);
    expect(Array.isArray(result)).toBe(true);
  });
});
