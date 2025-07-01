import { Metadata } from 'next'
import { getBlogPosts } from './api/getBlogPosts'
import { getCategories } from './api/getCategories'
import { BlogListContent } from './components/BlogListContent'

const title = 'Blog'
const description = 'ブログ一覧'

export const metadata: Metadata = {
  title: title,
  description: description,
}

export default async function Blog() {
  const { contents, totalCount } = await getBlogPosts({
    fields: 'id,title,category,publishedAt,updatedAt',
  })

  const categoryData = await getCategories({})

  return (
    <BlogListContent
      data={contents}
      totalCount={totalCount}
      currentPage={1}
      categories={categoryData.contents}
    />
  )
}
