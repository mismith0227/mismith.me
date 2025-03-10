import { NOTE_PER_PAGE } from '@/settings/siteSettings'
import { Pagination } from '@/src/components/Pagination'
import { getNotePosts } from './api/getNotePosts'
import { List } from './components/List'
import { PageTitle } from '@/src/components/PageTitle'
import { Container } from '@/src/components/Container'
import { Metadata } from 'next'

const title = 'Note'
const description = 'Note一覧'

export const metadata: Metadata = {
  title: title,
  description: description,
}

export default async function Note() {
  const { contents, totalCount } = await getNotePosts()

  return (
    <Container size="lg">
      <PageTitle text="Note" />
      <List data={contents} className="mt-[48px] md:mt-0" />

      {totalCount > NOTE_PER_PAGE && (
        <Pagination
          pageRoot="/note"
          totalCount={totalCount}
          currentPage={1}
          perPage={NOTE_PER_PAGE}
          className="mt-[60px] md:mt-[120px]"
        />
      )}
    </Container>
  )
}
