import { formatDate } from '@/utils/formatDate'
import { getAllNoteIds } from '../api/getAllNoteIds'
import { getNotePost } from '../api/getNotePost'
import { getAdjacentNotes } from '../api/getAdjacentNotes'
import Image from 'next/image'
import { LinkButton } from '@/src/components/LinkButton'
import { Container } from '@/src/components/Container'
import { AdjacentNoteLinks } from '@/src/components/AdjacentNoteLinks'
import { Metadata } from 'next'

type Props = { id: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Props>
}): Promise<Metadata> {
  const { id } = await params
  const data = await getNotePost(id)

  return {
    title: `${data.title} | note`,
    description: data.description,
    openGraph: {
      images: data.thumbnail,
    },
  }
}

export default async function NotePostDetailPage({
  params,
}: {
  params: Promise<Props>
}) {
  const { id } = await params
  const { publishedAt, title, thumbnail, content } = await getNotePost(id)
  const { previous, next } = await getAdjacentNotes(id)

  return (
    <Container size="lg" className="flex justify-center">
      <div className="mr-0 md:mr-[80px] lg:mr-[200px] max-w-[960px] w-full">
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
            className="w-full h-auto object-cover align-bottom mt-[24px]"
          />
        )}

        {content && (
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="mt-[60px] md:mt-[80px] after:content-['***'] after:block after:mt-[60px] after:text-center after:text-[20px] after:text-gray-400"
          />
        )}


        <AdjacentNoteLinks previous={previous} next={next} className="mt-[80px] md:mt-[120px]" />

        <LinkButton
          href="/note"
          className="mt-[80px] ml-auto mr-auto w-full max-w-[300px]"
        >
          Note一覧へ
        </LinkButton>
      </div>
    </Container>
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
