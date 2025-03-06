import { client } from '@/libs/client'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { Pagination } from '@/src/components/Pagination'
import { BlogCategory } from '@/types/BlogCategory'
import { toNumberId } from '@/utils/toNumberId'

import dayjs from 'dayjs'
import Link from 'next/link'
import { getBlogPosts } from '../../../api/getBlogPosts'

export default async function BlogCategoryPostDetailPage({
  params,
}: {
  params: Promise<{ current: string; category: string }>
}) {
  const { current, category } = await params
  const currentPage = toNumberId(current)
  const { contents, totalCount } = await getBlogPosts({
    offset: (currentPage - 1) * BLOG_PER_PAGE,
    filters: `category[equals]${category}`,
  })

  return (
    <main>
      <ul>
        {contents.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.category.id}/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      {totalCount > BLOG_PER_PAGE && (
        <Pagination
          pageRoot="/blog"
          totalCount={totalCount}
          currentPage={currentPage}
          perPage={BLOG_PER_PAGE}
        />
      )}
    </main>
  )
}

async function getAllCategoryPagePaths() {
  const resCategory = await client.get({
    endpoint: 'blog-category',
  })

  const paths: string[] = await Promise.all(
    resCategory.contents.map((item: BlogCategory) => {
      const data = getBlogPosts({
        filters: `category[equals]${item.id}[and]category[not_equals]note`,
      })

      const result = data.then(({ totalCount }) => {
        const range = (start: number, end: number) =>
          [...Array(end - start + 1)].map((_, i) => start + i)

        return range(1, Math.ceil(totalCount / BLOG_PER_PAGE)).map((page) => ({
          current: page.toString(),
          category: item.id,
        }))
      })
      return result
    })
  )

  return paths.flat()
}

export async function generateStaticParams() {
  const paths = await getAllCategoryPagePaths()

  return paths
}
