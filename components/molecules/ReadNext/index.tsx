import dayjs from 'dayjs'
import Link from 'next/link'
import styled from '@emotion/styled'
import media from '@/styles/media'
import { Blog } from '@/types/Blog'

const Container = styled.div``

const Title = styled.h3`
  font-size: 32px;

  ${media.small} {
    font-size: 24px;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  margin-top: 24px;
`

const Date = styled.span`
  display: block;
  font-size: 12px;
  font-weight: bold;
`

const StyledLink = styled(Link)`
  font-weight: bold;
  color: #000;

  &:hover {
    text-decoration: none;
  }
`

type Props = {
  readNestPosts: Blog[]
  className?: string
}

export const ReadNext = ({ readNestPosts, className }: Props) => (
  <Container className={className}>
    <Title>Read next</Title>
    <List>
      {readNestPosts.map((item) => {
        return (
          <Item key={item.id}>
            <Date>{dayjs(item.publishedAt).format('YYYY年M月D日')}</Date>
            <StyledLink href={`/blog/${item.category.id}/${item.id}`}>
              {item.title}
            </StyledLink>
          </Item>
        )
      })}
    </List>
  </Container>
)
