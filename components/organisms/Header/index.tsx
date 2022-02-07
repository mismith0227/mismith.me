import { useState } from 'react'
import Link from 'next/link'
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
            <Link href="/" aria-label="Home" passHref>
              <StyledLink>Home</StyledLink>
            </Link>
          </NavListItem>
          <NavListItem isActive={path === 'works'}>
            <Link href="/works/" aria-label="Works" passHref>
              <StyledLink>Works</StyledLink>
            </Link>
          </NavListItem>
          <NavListItem isActive={path === 'blog'}>
            <Link href="/blog" aria-label="Blog" passHref>
              <StyledLink>Blog</StyledLink>
            </Link>
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
