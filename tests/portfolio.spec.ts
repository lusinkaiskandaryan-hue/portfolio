import { test, expect } from '@playwright/test';

test.describe('Portfolio', () => {
  test('redirects root to home', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/home$/);
  });

  test('shows home page profile', async ({ page }) => {
    await page.goto('/home');
    await expect(page).toHaveTitle('Portfolio Starter');
    await expect(
      page.getByRole('heading', { level: 3, name: 'Lusine Iskandaryan' }),
    ).toBeVisible();
  });

  test('navigates to contact page', async ({ page }) => {
    await page.goto('/home');
    await page.getByRole('menuitem', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test('shows 404 for unknown routes', async ({ page }) => {
    await page.goto('/unknown-route');
    await expect(page.getByText('Sorry, the page you visited does not exist.')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Back Home' })).toBeVisible();
  });
});
