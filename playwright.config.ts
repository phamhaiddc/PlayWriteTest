import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory for test files
  timeout: 30000,     // Timeout for each test
  retries: 2,         // Retries for failed tests
  use: {
    headless: false, // Run tests with a visible browser
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
});
