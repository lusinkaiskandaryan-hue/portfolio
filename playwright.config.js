var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { defineConfig, devices } from '@playwright/test';
var baseURL = 'http://localhost:5173';
var allBrowsers = [
    { name: 'chromium', use: __assign({}, devices['Desktop Chrome']) },
    { name: 'firefox', use: __assign({}, devices['Desktop Firefox']) },
    { name: 'webkit', use: __assign({}, devices['Desktop Safari']) },
];
var ciBrowsers = [{ name: 'chromium', use: __assign({}, devices['Desktop Chrome']) }];
export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: process.env.CI ? [['github'], ['html']] : 'html',
    use: {
        baseURL: baseURL,
        trace: 'on-first-retry',
    },
    projects: process.env.CI ? ciBrowsers : allBrowsers,
    webServer: {
        command: 'pnpm dev',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
    },
});
