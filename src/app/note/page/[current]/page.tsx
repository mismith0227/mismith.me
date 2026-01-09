import { NOTE_PER_PAGE } from '@/settings/siteSettings'
import { toNumberId } from '@/utils/toNumberId'
import { Pagination } from '@/src/components/Pagination'
import { getNotePosts } from '../../api/getNotePosts'
import { List } from '../../components/List'
import { PageTitle } from '@/src/components/PageTitle'
import { Container } from '@/src/components/Container'
import { Metadata } from 'next'

type Props = { current: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Props>
}): Promise<Metadata> {
  const { current } = await params

  return {
    title: `${current}ページ目 | Note一覧`,
    description: `Note一覧`,
  }
}

export default async function NotePostPage({
  params,
}: {
  params: Promise<{ current: string }>
}) {
  const { current } = await params
  const currentPage = toNumberId(current)
  const { contents, totalCount } = await getNotePosts({
    offset: (currentPage - 1) * NOTE_PER_PAGE,
  })

  return (
    <Container size="lg">
      <PageTitle text="Note" />
      <List data={contents} className="mt-[48px] md:mt-0" />

      <Pagination
        pageRoot="/note"
        totalCount={totalCount}
        currentPage={currentPage}
        perPage={NOTE_PER_PAGE}
        className="mt-[60px] md:mt-[120px]"
      />
    </Container>
  )
}

export async function generateStaticParams() {
  const res = await getNotePosts({})

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(res.totalCount / NOTE_PER_PAGE)).map(
    (page) => ({
      current: page.toString(),
    })
  )

  return paths
}
