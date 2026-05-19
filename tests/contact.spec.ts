import { test, expect } from '@playwright/test';

const NAME_PLACEHOLDER = 'Your name';
const EMAIL_PLACEHOLDER = 'you@email.com';
const MESSAGE_PLACEHOLDER = 'Write your message here…';
const SUBMIT_BUTTON = 'Send message';
const FOOTER_TEXT =
  'You can also add links to Telegram, LinkedIn, Upwork, or your preferred contact channel.';

test.describe('Contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('renders title, form fields, and footer', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Collaborate/ })).toBeVisible();
    await expect(page.getByText(/Build Something Together/)).toBeVisible();
    await expect(page.getByPlaceholder(NAME_PLACEHOLDER)).toBeVisible();
    await expect(page.getByPlaceholder(EMAIL_PLACEHOLDER)).toBeVisible();
    await expect(page.getByPlaceholder(MESSAGE_PLACEHOLDER)).toBeVisible();
    await expect(page.getByRole('button', { name: SUBMIT_BUTTON })).toBeVisible();
    await expect(page.getByText(FOOTER_TEXT)).toBeVisible();
  });

  test('shows validation errors when submitted empty', async ({ page }) => {
    await page.getByRole('button', { name: SUBMIT_BUTTON }).click();

    await expect(page.getByText('Please input your name.')).toBeVisible();
    await expect(page.getByText('Please input your email.')).toBeVisible();
    await expect(page.getByText('Please write a short message.')).toBeVisible();
  });

  test('shows an error for an invalid email', async ({ page }) => {
    await page.getByPlaceholder(NAME_PLACEHOLDER).fill('Jane Doe');
    await page.getByPlaceholder(EMAIL_PLACEHOLDER).fill('not-an-email');
    await page.getByPlaceholder(MESSAGE_PLACEHOLDER).fill('Hello');
    await page.getByRole('button', { name: SUBMIT_BUTTON }).click();

    await expect(page.getByText('Please enter a valid email.')).toBeVisible();
  });

  test('submits valid input and clears the form', async ({ page }) => {
    const name = page.getByPlaceholder(NAME_PLACEHOLDER);
    const email = page.getByPlaceholder(EMAIL_PLACEHOLDER);
    const message = page.getByPlaceholder(MESSAGE_PLACEHOLDER);

    await name.fill('Jane Doe');
    await email.fill('jane@example.com');
    await message.fill('Hello there');
    await page.getByRole('button', { name: SUBMIT_BUTTON }).click();

    await expect(name).toHaveValue('');
    await expect(email).toHaveValue('');
    await expect(message).toHaveValue('');
  });
});
