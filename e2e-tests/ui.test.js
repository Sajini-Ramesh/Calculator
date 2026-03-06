const { test, expect } = require('@playwright/test');

test('Check Page Title', async ({ page }) => {
  await page.goto('https://example.com');
  // Expect the title to contain "Example Domain"
  await expect(page).toHaveTitle(/Example Domain/);
});
