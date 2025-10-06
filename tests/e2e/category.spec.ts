import { expect, test } from "@playwright/test";

test.describe("Category Page", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to home and select first category
    await page.goto("/");
    await page.getByTestId("category-card").first().click();
    await page.waitForURL(/\/category\/.+/);
  });

  test("should display category name and product count", async ({ page }) => {
    // Check category title exists
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();

    // Check product count is displayed
    await expect(page.locator("text=/\\d+ products? found/")).toBeVisible();
  });

  test("should display product cards with details", async ({ page }) => {
    const productCards = page.getByTestId("product-card");
    await expect(productCards.first()).toBeVisible();

    const firstProduct = productCards.first();

    // Should have product title
    await expect(firstProduct.getByTestId("product-title")).toBeVisible();

    // Should have product price
    await expect(firstProduct.getByTestId("product-price")).toBeVisible();

    // Should have add to cart button
    await expect(firstProduct.getByTestId("add-to-cart-button")).toBeVisible();
  });

  test("should add product to cart and update cart badge", async ({ page }) => {
    // Cart should initially be empty or have a count
    const cartBadge = page.getByTestId("cart-badge");
    const initialCount = (await cartBadge.isVisible())
      ? parseInt((await cartBadge.textContent()) || "0", 10)
      : 0;

    // Add first product to cart
    await page.getByTestId("add-to-cart-button").first().click();

    // Wait for cart badge to update
    await expect(page.getByTestId("cart-badge")).toBeVisible();
    await expect(page.getByTestId("cart-badge")).toHaveText(
      String(initialCount + 1)
    );
  });

  test("should navigate back to home page", async ({ page }) => {
    // Click back to categories link
    await page.getByRole("link", { name: /back to categories/i }).click();

    // Should navigate to home page
    await expect(page).toHaveURL("/");
    await expect(page.getByTestId("logo-text")).toBeVisible();
  });

  test("should add multiple products to cart", async ({ page }) => {
    // Get initial cart count
    const cartBadge = page.getByTestId("cart-badge");
    const initialCount = (await cartBadge.isVisible())
      ? parseInt((await cartBadge.textContent()) || "0", 10)
      : 0;

    // Add first product
    await page.getByTestId("add-to-cart-button").first().click();
    await expect(page.getByTestId("cart-badge")).toHaveText(
      String(initialCount + 1)
    );

    // Add second product
    await page.getByTestId("add-to-cart-button").nth(1).click();
    await expect(page.getByTestId("cart-badge")).toHaveText(
      String(initialCount + 2)
    );
  });
});
