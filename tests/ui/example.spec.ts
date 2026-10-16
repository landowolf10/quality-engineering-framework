import { test, expect } from "@playwright/test";

test("@smoke example page has the expected title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveTitle(/Playwright/);
});
