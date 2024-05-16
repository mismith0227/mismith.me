import dayjs from 'dayjs'
import styled from '@emotion/styled'
import media from '@/styles/media'
import Link from 'next/link'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import { Container } from '@/components/organisms/Container'
import { Pagination } from '@/components/molecules/Pagination'
import { Categories } from '@/components/molecules/Categories'
import { Tag } from '@/components/atoms/Tag'
import { Heading } from '@/components/atoms/Heading'

const StyledContainer = styled(Container)``

const StyledHeading = styled(Heading)`
  display: none;

  ${media.small} {
    display: block;
  }
`

const CategoryLabel = styled.span`
  display: inline-block;
  margin-left: 24px;
  font-size: 18px;

  ${media.small} {
    display: block;
    margin-left: 8px;
    font-size: 16px;
  }
`

const BlogList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.small} {
    margin: 80px 0 0;
  }
`

const BlogListItem = styled.li`
  margin: 120px 0 0;

  &:first-of-type {
    margin: 0;
  }

  ${media.small} {
    margin: 60px 0 0;
  }
`

const BlogTitle = styled.h2`
  margin: 16px 0 0;
  font-size: 36px;

  ${media.small} {
    margin: 8px 0 0;
    font-size: 24px;
  }
`

const StyledTag = styled(Tag)`
  ${media.small} {
    font-size: 10px;
  }
`

const DateArea = styled.div`
  display: flex;

  ${media.small} {
    margin-top: 8px;
    flex-direction: column;
  }
`

const Date = styled.div`
  margin: 0 24px 0 0;
  font-size: 12px;

  ${media.small} {
    font-size: 10px;
  }
`

const DateLabel = styled.span`
  display: inline-block;
  margin: 0 4px 0 0;
  font-weight: bold;
`

const StyledLink = styled(Link)`
  display: block;
  color: #000;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #777;
    cursor: pointer;
  }
`

const StyledPagination = styled(Pagination)`
  margin-top: 120px;

  ${media.small} {
    margin-top: 60px;
  }
`

const StyledCategories = styled(Categories)`
  margin-top: 120px;

  ${media.small} {
    margin-top: 60px;
  }
`

export type Props = {
  data: Blog[]
  totalCount: number
  currentPage: number
  category: BlogCategory[]
  currentCategory?: string
}

export const BlogContainer = ({
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
      <StyledHeading>
        Blog
        {categoryLabel && (
          <CategoryLabel>Category: {categoryLabel}</CategoryLabel>
        )}
      </StyledHeading>

      <BlogList>
        {data.map((blog) => (
          <BlogListItem key={blog.id}>
            <StyledLink href={`/blog/${blog.category.id}/${blog.id}`}>
              <StyledTag>{blog.category.category_name}</StyledTag>
              <BlogTitle>{blog.title}</BlogTitle>

              <DateArea>
                <Date>
                  <DateLabel>公開日:</DateLabel>
                  {dayjs(blog.publishedAt).format('YYYY年M月D日')}
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
          pageRoot="/blog"
          totalCount={totalCount}
          currentPage={currentPage}
          currentCategory={currentCategory}
        />
      )}
      <StyledCategories category={category} currentCategory={currentCategory} />
    </StyledContainer>
  )
}
