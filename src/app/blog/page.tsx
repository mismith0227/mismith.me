import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { Pagination } from '@/src/components/Pagination'
import { getBlogPosts } from './api/getBlogPosts'
import { PageTitle } from '@/src/components/PageTitle'
import { List } from './components/List'

export default async function Blog() {
  const { contents, totalCount } = await getBlogPosts({
    fields: 'id,title,category',
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
          currentPage={1}
          perPage={BLOG_PER_PAGE}
          className="mt-[60px] md:mt-[120px]"
        />
      )}
    </main>
  )
}
