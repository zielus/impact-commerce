import "@testing-library/jest-dom";
import React from "react";
import { afterEach, vi } from "vitest";

// Mock styled-components ServerStyleSheet for testing
vi.mock("styled-components", async () => {
  const actual = await vi.importActual("styled-components");
  return {
    ...actual,
    ServerStyleSheet: vi.fn(() => ({
      collectStyles: vi.fn((element) => element),
      getStyleTags: vi.fn(() => ""),
      getStyleElement: vi.fn(() => []),
      seal: vi.fn(),
      instance: {
        clearTag: vi.fn(),
      },
    })),
  };
});

// Mock Next.js Image component
vi.mock("next/image", () => ({
  default: vi.fn(({ src, alt, ...props }) => {
    return React.createElement("img", { src, alt, ...props });
  }),
}));

// Mock Next.js router
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  })),
  usePathname: vi.fn(() => "/"),
  useSearchParams: vi.fn(() => new URLSearchParams()),
}));

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock fetch
global.fetch = vi.fn();

// Set up cleanup after each test
afterEach(() => {
  vi.clearAllMocks();
});
