import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display page title and categories", async ({ page }) => {
    // Check page title
    await expect(
      page.getByRole("heading", { name: "Impact Commerce" })
    ).toBeVisible();

    // Check categories are displayed
    const categoryCards = page.getByTestId("category-card");
    await expect(categoryCards.first()).toBeVisible();

    // Should have multiple categories
    const count = await categoryCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("should navigate to category page when clicking a category", async ({
    page,
  }) => {
    // Click first category
    const firstCategory = page.getByTestId("category-card").first();
    await firstCategory.click();

    // Should navigate to category page
    await expect(page).toHaveURL(/\/category\/.+/);

    // Should display products
    await expect(page.getByTestId("product-card").first()).toBeVisible();
  });

  test("should display header with cart link", async ({ page }) => {
    // Check header is visible
    await expect(page.getByTestId("home-link")).toBeVisible();
    await expect(page.getByTestId("cart-link")).toBeVisible();
  });

  test("should navigate to home when clicking logo", async ({ page }) => {
    // Navigate to a different page first
    await page.goto("/cart");

    // Click home link
    await page.getByTestId("home-link").click();

    // Should be back on home page
    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("heading", { name: "Impact Commerce" })
    ).toBeVisible();
  });
});
