import { Container, Title, List, Item, StyledLink, ItemInner } from './styles'
import { Props } from './types'

export const Categories = ({ className, category, currentCategory }: Props) => (
  <Container className={className}>
    <Title>Category</Title>
    <List>
      {category.map((item) => (
        <Item key={item.id}>
          <ItemInner isActive={currentCategory === item.id}>
            <StyledLink href={`/blog/${item.id}/page/1`}>
              {item.category_name}
            </StyledLink>
          </ItemInner>
        </Item>
      ))}
    </List>
  </Container>
)
