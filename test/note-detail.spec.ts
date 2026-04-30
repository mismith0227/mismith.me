import { test, expect } from '@playwright/test'

const NOTE_ID = 'note-20260221'
const NOTE_URL = `/note/${NOTE_ID}`

test.describe('Note詳細ページ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(NOTE_URL)
  })

  test('ページタイトルが正しい形式で表示される', async ({ page }) => {
    await expect(page).toHaveTitle(/.*\| note \| mismith\.me$/)
  })

  test('公開日・見出し・本文・フッターリンクが存在する', async ({ page }) => {
    const main = page.locator('main')

    // 公開日
    await expect(main.getByText('公開日:')).toBeVisible()

    // h1 見出し
    const heading = main.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).not.toBeEmpty()

    // 本文コンテンツ
    const body = main.locator('.noteBody')
    await expect(body).toBeVisible()

    // Note一覧へリンク
    await expect(main.getByRole('link', { name: 'Note一覧へ' })).toBeVisible()
  })

  test('サムネイル画像が表示される', async ({ page }) => {
    const img = page.locator('main img').first()
    await expect(img).toBeVisible()
    await expect(img).toHaveAttribute('alt', /.+/)
  })

  test('前後記事リンクが少なくとも1つ存在する', async ({ page }) => {
    const prev = page.locator('main').getByRole('link', { name: /← 前の記事/ })
    const next = page.locator('main').getByRole('link', { name: /次の記事 →/ })
    const hasPrev = await prev.count()
    const hasNext = await next.count()
    expect(hasPrev + hasNext).toBeGreaterThanOrEqual(1)
  })

  test('メインコンテンツのスナップショット', async ({ page }) => {
    // 画像読み込み完了を待つ
    await page.waitForLoadState('networkidle')
    await expect(page.locator('main')).toHaveScreenshot('note-detail-main.png', {
      maxDiffPixelRatio: 0.05,
    })
  })
})
