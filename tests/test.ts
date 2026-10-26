import { expect, test } from '@playwright/test'

test('home page hydrates and completes the introduction', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText("Hi, I'm Chris")
  await expect(page.locator('hgroup > p')).toContainText(
    'A passionate technophile with an eye for detail.',
  )
})
