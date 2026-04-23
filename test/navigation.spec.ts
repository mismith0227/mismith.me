import { test, expect } from '@playwright/test'

test.describe('モバイルナビゲーション', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('右上にMenuボタンが表示される', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: 'Menu' })
    await expect(menuButton).toBeVisible()

    // 右上に配置されているか確認
    const box = await menuButton.boundingBox()
    const viewportSize = page.viewportSize()!
    expect(box!.x + box!.width).toBeGreaterThan(viewportSize.width * 0.5)
    expect(box!.y).toBeLessThan(100)
  })

  test('Menuボタンをクリックするとナビメニューが開く', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: 'Menu' })
    await menuButton.click()

    // ボタンラベルが「Close」に切り替わる
    await expect(page.getByRole('button', { name: 'Close' })).toBeVisible()

    // ナビリンクが表示される
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Series' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Photos' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Note' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Request' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Shop' })).toBeVisible()
  })

  test('Closeボタンをクリックするとメニューが閉じる', async ({ page }) => {
    // 開く
    await page.getByRole('button', { name: 'Menu' }).click()
    await expect(page.getByRole('button', { name: 'Close' })).toBeVisible()

    // 閉じる
    await page.getByRole('button', { name: 'Close' }).click()
    await expect(page.getByRole('button', { name: 'Menu' })).toBeVisible()
  })

  test('メニューリンクをクリックするとメニューが閉じてページ遷移する', async ({ page }) => {
    await page.getByRole('button', { name: 'Menu' }).click()
    await page.getByRole('link', { name: 'About' }).click()

    await expect(page).toHaveURL('/about')
    // 遷移後はメニューが閉じてMenuボタンが表示される
    await expect(page.getByRole('button', { name: 'Menu' })).toBeVisible()
  })
})
