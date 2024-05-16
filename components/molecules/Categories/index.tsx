import styled from '@emotion/styled'
import Link from 'next/link'

import media from '@/styles/media'
import { BlogCategory } from '@/types/BlogCategory'

const Container = styled.div``

const Title = styled.h3`
  margin: 0;
  font-size: 32px;

  ${media.small} {
    font-size: 24px;
  }
`

const List = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 24px 0 0;
  padding: 0;
`

const Item = styled.li``

type LinkProps = {
  isActive?: boolean
}

const ItemInner = styled.span<LinkProps>`
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    display: block;
    width: 70%;
    height: 2px;
    background: #000;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform-origin: top right;
    ${({ isActive }) => !isActive && 'transition: transform 0.3s;'};
    transform: ${({ isActive }) => (isActive ? 'scaleX(1)' : 'scaleX(0)')};
  }

  &:hover {
    &::before {
      transform: scaleX(1);
      transform-origin: top left;
    }
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 8px 12px;
  font-size: 18px;
  text-decoration: none;
  color: #000;

  ${media.small} {
    font-size: 14px;
  }
`

export type Props = {
  className?: string
  category: BlogCategory[]
  currentCategory?: string
}

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
