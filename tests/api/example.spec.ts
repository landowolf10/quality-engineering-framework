import { expect, test } from "@playwright/test";

test("@smoke public website responds successfully", async ({ request }) => {
  const response = await request.get("https://playwright.dev/");

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});
