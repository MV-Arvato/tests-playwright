import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://example.com');

  // Assert the page title contains "Example"
  await expect(page).toHaveTitle(/Example1/);
});

