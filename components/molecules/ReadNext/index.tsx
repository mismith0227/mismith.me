import { Container, List, Item, StyledLink, Title, Date } from './styles'
import { Props } from './types'
import dayjs from 'dayjs'

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
