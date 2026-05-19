import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://localhost:5173';

const allBrowsers = [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
];

const ciBrowsers = [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }];

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['github'], ['html']] : 'html',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: process.env.CI ? ciBrowsers : allBrowsers,
  webServer: {
    command: 'pnpm dev',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
});
