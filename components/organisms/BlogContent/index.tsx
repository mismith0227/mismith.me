import Link from 'next/link'
import dayjs from 'dayjs'
import {
  Container,
  StyledLink,
  Title,
  BlogList,
  BlogListItem,
  BlogTitle,
  Category,
  DateArea,
  Date,
  DateLabel,
  StyledPagination,
  StyledCategories,
} from './styles'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'

type Props = {
  data: Blog[]
  totalCount: number
  currentPage: number
  category: BlogCategory[]
  currentCategory?: string
}

export const BlogContent = ({
  data,
  totalCount,
  currentPage,
  category,
  currentCategory,
}: Props) => (
  <Container>
    <Title>Blog</Title>

    <BlogList>
      {data.map((blog) => (
        <BlogListItem key={blog.id}>
          <Link href={`/blog/${blog.category.id}/${blog.slug}`} passHref>
            <StyledLink>
              <Category>{blog.category.category_name}</Category>
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
          </Link>
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
    <StyledCategories category={category} currentCategory={currentCategory} />
  </Container>
)
