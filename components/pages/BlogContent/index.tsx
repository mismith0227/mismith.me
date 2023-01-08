import dayjs from 'dayjs'
import { Heading } from '@/components/atoms/Heading'
import {
  StyledContainer,
  StyledLink,
  BlogList,
  BlogListItem,
  BlogTitle,
  StyledTag,
  DateArea,
  Date,
  DateLabel,
  StyledPagination,
  CategoryLabel,
} from './styles'
import { Props } from './types'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'

export const BlogContent = ({
  data,
  totalCount,
  currentPage,
  category,
  currentCategory,
}: Props) => {
  const categoryLabel = currentCategory
    ? category.filter((item) => {
        return item.id === currentCategory
      })[0].category_name
    : null

  return (
    <StyledContainer size="lg">
      <Heading>
        Blog
        {categoryLabel && (
          <CategoryLabel>Category: {categoryLabel}</CategoryLabel>
        )}
      </Heading>

      <BlogList>
        {data.map((blog) => (
          <BlogListItem key={blog.id}>
            <StyledLink href={`/blog/${blog.category.id}/${blog.id}`}>
              <StyledTag>{blog.category.category_name}</StyledTag>
              <BlogTitle>{blog.title}</BlogTitle>

              <DateArea>
                <Date>
                  <DateLabel>公開日:</DateLabel>
                  {dayjs(blog.createdAt).format('YYYY年M月D日')}
                </Date>
                <Date>
                  <DateLabel>最終更新日:</DateLabel>
                  {dayjs(blog.updatedAt).format('YYYY年M月D日')}
                </Date>
              </DateArea>
            </StyledLink>
          </BlogListItem>
        ))}
      </BlogList>
      {totalCount > BLOG_PER_PAGE && (
        <StyledPagination
          totalCount={totalCount}
          currentPage={currentPage}
          currentCategory={currentCategory}
        />
      )}
    </StyledContainer>
  )
}
