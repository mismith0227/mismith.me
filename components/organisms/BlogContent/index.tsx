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
} from './styles'
import { Blog } from '@/types/Blog'

type Props = {
  data: Blog[]
}

export const BlogContent = ({ data }: Props) => (
  <Container>
    <Title>Blog</Title>

    <BlogList>
      {data.map((blog) => (
        <BlogListItem key={blog.id}>
          <Link href={`/blog/${blog.category}/${blog.slug}`} passHref>
            <StyledLink>
              <Category>{blog.category}</Category>
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
  </Container>
)
