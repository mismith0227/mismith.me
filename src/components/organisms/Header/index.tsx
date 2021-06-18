import * as React from 'react'
import {
  Container,
  Navigation,
  NavList,
  NavListItem,
  StyledLink,
  ExternalLink,
  StyledOpenInNewIcon,
  ToggleMenu,
  ToggleBorder,
  ScreenReaderText,
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
          <NavListItem>
            <ExternalLink
              href="https://blog.mismith.me/"
              target="_blank"
              aria-label="blog"
              rel="noopener"
            >
              Blog
              <StyledOpenInNewIcon />
            </ExternalLink>
          </NavListItem>
        </NavList>
      </Navigation>

      <ToggleMenu
        aria-expanded={isMenuOpen}
        aria-controls="navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      >
        <ToggleBorder isMenuOpen={isMenuOpen}></ToggleBorder>
        <ScreenReaderText>menu</ScreenReaderText>
      </ToggleMenu>
    </Container>
  )
}
