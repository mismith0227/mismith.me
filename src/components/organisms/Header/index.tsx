import * as React from 'react'
import {
  Container,
  Navigation,
  NavList,
  NavListItem,
  StyledLink,
  ExternalLink,
  StyledOpenInNewIcon,
} from './styles'

type Props = {}

export const Header = ({}: Props) => (
  <Container>
    <Navigation>
      <NavList>
        <NavListItem>
          <StyledLink to="/" aria-label="Home">
            Home
          </StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/profile" aria-label="Profile">
            Profile
          </StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/works/" aria-label="Works">
            Works
          </StyledLink>
        </NavListItem>
        <NavListItem>
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
  </Container>
)
