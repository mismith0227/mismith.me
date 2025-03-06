import { NOTE_PER_PAGE } from '@/settings/siteSettings'
import { Pagination } from '@/src/components/Pagination'
import { getNotePosts } from './api/getNotePosts'
import { List } from './components/List'
import { PageTitle } from '@/src/components/PageTitle'

export default async function Note() {
  const { contents, totalCount } = await getNotePosts()

  return (
    <main>
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
    </main>
  )
}
