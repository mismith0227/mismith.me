import { useState } from 'react'
import { Container, NavList, NavListItem, StyledLink } from './styles'
import { Props } from './types'

export const Navigation = ({ path }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <div>
      <Container isMenuOpen={isMenuOpen} id="navigation">
        <NavList>
          <NavListItem isActive={path === 'home'}>
            <StyledLink href="/" aria-label="Home">
              Home
            </StyledLink>
          </NavListItem>
          <NavListItem isActive={path === 'blog'}>
            <StyledLink href="/blog" aria-label="Blog">
              Blog
            </StyledLink>
          </NavListItem>
        </NavList>
      </Container>
    </div>
  )
}
