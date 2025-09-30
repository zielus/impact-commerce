import { expect, test } from "@playwright/test";

test.describe("Cart Page", () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test("should display empty cart message when cart is empty", async ({
    page,
  }) => {
    await page.goto("/cart");

    // Should show empty cart message
    await expect(
      page.getByRole("heading", { name: "Your cart is empty" })
    ).toBeVisible();
    await expect(
      page.getByText("Add some products to get started!")
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Browse Categories" })
    ).toBeVisible();
  });

  test("should display cart items after adding products", async ({ page }) => {
    // Add a product to cart
    await page.goto("/");
    await page.getByTestId("category-card").first().click();
    await page.getByTestId("add-to-cart-button").first().click();

    // Navigate to cart
    await page.getByTestId("cart-link").click();

    // Should display cart item
    await expect(page.getByTestId("cart-item")).toBeVisible();
    await expect(page.getByTestId("cart-item-title")).toBeVisible();
    await expect(page.getByTestId("cart-item-quantity")).toHaveText("1");
  });

  test("should increase product quantity", async ({ page }) => {
    // Add a product to cart
    await page.goto("/");
    await page.getByTestId("category-card").first().click();
    await page.getByTestId("add-to-cart-button").first().click();
    await page.getByTestId("cart-link").click();

    // Get initial price
    const initialPrice = await page
      .getByTestId("cart-item-subtotal")
      .textContent();

    // Increase quantity
    await page.getByTestId("increase-quantity").click();

    // Check quantity updated
    await expect(page.getByTestId("cart-item-quantity")).toHaveText("2");

    // Check cart badge updated
    await expect(page.getByTestId("cart-badge")).toHaveText("2");

    // Price should double
    const newPrice = await page.getByTestId("cart-item-subtotal").textContent();
    expect(newPrice).not.toBe(initialPrice);
  });

  test("should decrease product quantity", async ({ page }) => {
    // Add a product twice
    await page.goto("/");
    await page.getByTestId("category-card").first().click();
    const addButton = page.getByTestId("add-to-cart-button").first();
    await addButton.click();
    await addButton.click();

    // Navigate to cart
    await page.getByTestId("cart-link").click();

    // Should have quantity 2
    await expect(page.getByTestId("cart-item-quantity")).toHaveText("2");

    // Decrease quantity
    await page.getByTestId("decrease-quantity").click();

    // Check quantity updated
    await expect(page.getByTestId("cart-item-quantity")).toHaveText("1");
    await expect(page.getByTestId("cart-badge")).toHaveText("1");
  });

  test("should remove product from cart", async ({ page }) => {
    // Add a product to cart
    await page.goto("/");
    await page.getByTestId("category-card").first().click();
    await page.getByTestId("add-to-cart-button").first().click();
    await page.getByTestId("cart-link").click();

    // Remove item
    await page.getByTestId("remove-item").click();

    // Should show empty cart
    await expect(
      page.getByRole("heading", { name: "Your cart is empty" })
    ).toBeVisible();

    // Cart badge should not be visible
    await expect(page.getByTestId("cart-badge")).not.toBeVisible();
  });

  test("should display cart summary with correct total", async ({ page }) => {
    // Add products to cart
    await page.goto("/");
    await page.getByTestId("category-card").first().click();
    await page.getByTestId("add-to-cart-button").first().click();
    await page.getByTestId("cart-link").click();

    // Should display cart summary
    await expect(page.getByTestId("cart-summary")).toBeVisible();
    await expect(page.getByTestId("cart-total")).toBeVisible();

    // Total should be a valid price
    const total = await page.getByTestId("cart-total").textContent();
    expect(total).toMatch(/\$\d+\.\d{2}/);
  });

  test("should persist cart across page reloads", async ({ page }) => {
    // Add a product to cart
    await page.goto("/");
    await page.getByTestId("category-card").first().click();
    await page.getByTestId("add-to-cart-button").first().click();

    // Get product title
    const productTitle = await page
      .getByTestId("product-card")
      .first()
      .getByTestId("product-title")
      .textContent();

    // Reload the page
    await page.reload();

    // Cart badge should still show 1
    await expect(page.getByTestId("cart-badge")).toHaveText("1");

    // Navigate to cart and check item is still there
    await page.getByTestId("cart-link").click();
    await expect(page.getByTestId("cart-item")).toBeVisible();
    await expect(page.getByTestId("cart-item-title")).toHaveText(
      productTitle || ""
    );
  });

  test("should navigate back to shopping from empty cart", async ({ page }) => {
    await page.goto("/cart");

    // Click browse categories button
    await page.getByRole("button", { name: "Browse Categories" }).click();

    // Should navigate to home
    await expect(page).toHaveURL("/");
  });

  test("should continue shopping from cart page", async ({ page }) => {
    // Add a product and go to cart
    await page.goto("/");
    await page.getByTestId("category-card").first().click();
    await page.getByTestId("add-to-cart-button").first().click();
    await page.getByTestId("cart-link").click();

    // Click continue shopping
    await page.getByRole("link", { name: /continue shopping/i }).click();

    // Should navigate to home
    await expect(page).toHaveURL("/");
  });

  test("should update total price when quantity changes", async ({ page }) => {
    // Add a product to cart
    await page.goto("/");
    await page.getByTestId("category-card").first().click();
    await page.getByTestId("add-to-cart-button").first().click();
    await page.getByTestId("cart-link").click();

    // Get initial total
    const initialTotal = await page.getByTestId("cart-total").textContent();

    // Increase quantity
    await page.getByTestId("increase-quantity").click();

    // Total should update
    const newTotal = await page.getByTestId("cart-total").textContent();
    expect(newTotal).not.toBe(initialTotal);

    // New total should be double the initial
    const initialValue = parseFloat(initialTotal?.replace("$", "") || "0");
    const newValue = parseFloat(newTotal?.replace("$", "") || "0");
    expect(newValue).toBeCloseTo(initialValue * 2, 2);
  });
});
