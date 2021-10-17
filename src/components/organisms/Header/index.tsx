import * as React from 'react'
import {
  Container,
  Navigation,
  NavList,
  NavListItem,
  StyledLink,
  ExternalLink,
  StyledOpenInNewIcon,
  StyledToggleButton,
} from './styles'

type Props = {
  path: string
}

export const Header = ({ path }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
  return (
    <Container>
      <Navigation isMenuOpen={isMenuOpen} id="navigation">
        <NavList>
          <NavListItem isActive={path === 'home'}>
            <StyledLink to="/" aria-label="Home">
              Home
            </StyledLink>
          </NavListItem>
          <NavListItem isActive={path === 'profile'}>
            <StyledLink to="/profile" aria-label="Profile">
              Profile
            </StyledLink>
          </NavListItem>
          <NavListItem isActive={path === 'works'}>
            <StyledLink to="/works/" aria-label="Works">
              Works
            </StyledLink>
          </NavListItem>
          <NavListItem isActive={path === 'contact'}>
            <StyledLink to="/contact" aria-label="Contact">
              Contact
            </StyledLink>
          </NavListItem>
          <NavListItem isActive={path === 'blog'}>
            <StyledLink to="/blog" aria-label="Blog">
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
