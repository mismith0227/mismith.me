import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { Pagination } from '@/src/components/Pagination'
import { toNumberId } from '@/utils/toNumberId'

import { getBlogPosts } from '../../api/getBlogPosts'
import { PageTitle } from '@/src/components/PageTitle'
import { List } from '../../components/List'

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

  return (
    <main>
      <PageTitle text="Blog" />
      <List data={contents} />

      {totalCount > BLOG_PER_PAGE && (
        <Pagination
          pageRoot="/blog"
          totalCount={totalCount}
          currentPage={currentPage}
          perPage={BLOG_PER_PAGE}
          className="mt-[60px] md:mt-[120px]"
        />
      )}
    </main>
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
