import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://dev.cvcheck.com/Home.aspx');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByLabel('Email').click();
});