import { getAllNoteIds } from '../api/getAllNoteIds'
import { getNotePost } from '../api/getNotePost'
import { getNotePosts } from '../api/getNotePosts'

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ id: string; category: string }>
}) {
  const { id } = await params
  const data = await getNotePost(id)

  return (
    <main>
      <h1>{data.title}</h1>
      <div>カテゴリー：{data.category && data.category.category_name}</div>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </main>
  )
}

export async function generateStaticParams() {
  const ids = await getAllNoteIds()

  const paths = ids.map((id) => {
    return {
      id: id,
    }
  })

  return paths
}
