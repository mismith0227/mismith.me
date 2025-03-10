import { PageTitle } from '@/src/components/PageTitle'
import { List } from './List'
import { Pagination } from '@/src/components/Pagination'
import { Blog } from '@/types/Blog'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { Container } from '@/src/components/Container'
import { Categories } from '@/src/components/Categories'
import { toStringId } from '@/utils/toStringId'
import { BlogCategory } from '@/types/BlogCategory'

type Props = {
  data: Blog[]
  className?: string
  totalCount: number
  currentPage: number
  categories: BlogCategory[]
  currentCategory?: string
}

export const BlogListContent = (props: Props) => {
  const { data, totalCount, currentPage, categories, currentCategory } = props

  return (
    <Container size="lg">
      <PageTitle text="Blog" />
      <List data={data} />

      {totalCount > BLOG_PER_PAGE && (
        <Pagination
          pageRoot="/blog"
          totalCount={totalCount}
          currentPage={currentPage}
          perPage={BLOG_PER_PAGE}
          className="mt-[60px] md:mt-[120px]"
        />
      )}

      <Categories
        category={categories}
        currentCategory={currentCategory}
        className="mt-[60px] md:mt-[120px]"
      />
    </Container>
  )
}
