import { expect, test } from '@playwright/test'

test('index page has an h1', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading')).toBeVisible()
})
