import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { toNumberId } from '@/utils/toNumberId'

import { getBlogPosts } from '../../api/getBlogPosts'
import { BlogListContent } from '../../components/BlogListContent'
import { getCategories } from '../../api/getCategories'
import { Metadata } from 'next'

type Props = { current: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Props>
}): Promise<Metadata> {
  const { current } = await params

  return {
    title: `${current}ページ目 | ブログ一覧`,
    description: `ブログ一覧`,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ current: string }>
}) {
  const { current } = await params
  const currentPage = toNumberId(current)
  const { contents, totalCount } = await getBlogPosts({
    offset: (currentPage - 1) * BLOG_PER_PAGE,
    filters: `category[not_equals]note`,
  })

  const categoryData = await getCategories({
    filters: `id[not_equals]note`,
  })

  return (
    <BlogListContent
      data={contents}
      totalCount={totalCount}
      currentPage={currentPage}
      categories={categoryData.contents}
    />
  )
}

export async function generateStaticParams() {
  const res = await getBlogPosts({
    filters: `category[not_equals]note`,
  })

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(res.totalCount / BLOG_PER_PAGE)).map(
    (page) => ({
      current: page.toString(),
    })
  )

  return paths
}
