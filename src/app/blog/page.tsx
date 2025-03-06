import { getBlogPosts } from './api/getBlogPosts'
import { BlogListContent } from './components/BlogListContent'

export default async function Blog() {
  const { contents, totalCount } = await getBlogPosts({
    fields: 'id,title,category',
    filters: `category[not_equals]note`,
  })

  return (
    <BlogListContent data={contents} totalCount={totalCount} currentPage={1} />
  )
}
