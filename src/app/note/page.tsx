import { NOTE_PER_PAGE } from '@/settings/siteSettings'
import { Pagination } from '@/src/components/Pagination'
import { getNotePosts } from './api/getNotePosts'
import { List } from './components/List'

export default async function Note() {
  const { contents, totalCount } = await getNotePosts()

  return (
    <main>
      <h1>note記事一覧</h1>
      <List data={contents} />

      {totalCount > NOTE_PER_PAGE && (
        <Pagination
          pageRoot="/note"
          totalCount={totalCount}
          currentPage={1}
          perPage={NOTE_PER_PAGE}
        />
      )}
    </main>
  )
}
