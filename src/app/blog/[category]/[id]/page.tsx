import { getBlogPosts } from '../../api/getBlogPosts'
import { getBlogPost } from '../../api/getBlogPost'

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ id: string; category: string }>
}) {
  const { id } = await params
  const data = await getBlogPost(id)

  return (
    <main>
      <h1>{data.title}</h1>
      <div>カテゴリー：{data.category && data.category.category_name}</div>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </main>
  )
}

export async function generateStaticParams() {
  const data = await getBlogPosts({
    filters: `category[not_equals]note`,
  })

  const paths = data.contents.map(
    (content: { id: string; category: { id: string } }) => ({
      id: content.id,
      category: content.category.id,
    })
  )

  return paths
}
