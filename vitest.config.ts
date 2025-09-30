import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    css: true,
    exclude: ["**/node_modules/**", "**/tests/e2e/**"],
  },
  resolve: {
    alias: [
      {
        find: /^@\/tests/,
        replacement: `${path.resolve(__dirname, "./tests")}/`,
      },
      {
        find: /^@\//,
        replacement: `${path.resolve(__dirname, "./src")}/`,
      },
    ],
  },
});
