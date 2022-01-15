import Link from 'next/link'
import { Container, Title, List, Item, StyledLink } from './styles'
import { Props } from './types'

export const Categories = ({ className, category, currentCategory }: Props) => {
  return (
    <Container className={className}>
      <Title>Category</Title>
      <List>
        {category.map((item) => (
          <Item key={item.id}>
            <Link href={`/blog/${item.id}/page/1`} passHref>
              <StyledLink isActive={currentCategory === item.id}>
                {item.category_name}
              </StyledLink>
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  )
}
