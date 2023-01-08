import { useState } from 'react'
import {
  Container,
  Navigation,
  NavList,
  NavListItem,
  StyledLink,
  StyledToggleButton,
} from './styles'
import { Props } from './types'

export const Header = ({ path }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  return (
    <Container>
      <Navigation isMenuOpen={isMenuOpen} id="navigation">
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
      </Navigation>

      <StyledToggleButton
        isOpen={isMenuOpen}
        ariaControls="navigation"
        onToggleClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </Container>
  )
}
