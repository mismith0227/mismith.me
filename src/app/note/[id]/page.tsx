import { formatDate } from '@/utils/formatDate'
import { getAllNoteIds } from '../api/getAllNoteIds'
import { getNotePost } from '../api/getNotePost'
import Image from 'next/image'
import { LinkButton } from '@/src/components/LinkButton'

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ id: string; category: string }>
}) {
  const { id } = await params
  const { publishedAt, title, thumbnail, content } = await getNotePost(id)

  return (
    <main>
      <div className="text-xs">
        <span className="inline-block mr-[2] font-bold">公開日:</span>
        {formatDate(publishedAt)}
      </div>
      <h1 className="text-[24px] md:text-[32px] font-bold mt-4">{title}</h1>
      {thumbnail && (
        <Image
          src={thumbnail?.url}
          alt={title}
          width={thumbnail.width}
          height={thumbnail.height}
          className="w-full h-full object-cover align-bottom mt-[24px]"
        />
      )}

      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="mt-[60px] md:mt-[80px]"
      />

      <LinkButton
        href="/note"
        className="mt-[80px] ml-auto mr-auto w-full max-w-[300px]"
      >
        Note一覧へ
      </LinkButton>
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
