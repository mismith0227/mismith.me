import Link from 'next/link'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { Pagination } from '@/src/components/Pagination'
import { getBlogPosts } from './api/getBlogPosts'

export default async function Blog() {
  const { contents, totalCount } = await getBlogPosts({
    fields: 'id,title,category',
    filters: `category[not_equals]note`,
  })

  return (
    <main>
      <h1>ブログ記事一覧</h1>
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
          currentPage={1}
          perPage={BLOG_PER_PAGE}
        />
      )}
    </main>
  )
}
