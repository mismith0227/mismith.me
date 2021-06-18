import * as React from 'react'
import {
  Container,
  Navigation,
  NavList,
  NavListItem,
  StyledLink,
} from './styles'

type Props = {}

export const Header = ({}: Props) => (
  <Container>
    <Navigation>
      <NavList>
        <NavListItem>
          <StyledLink to="/">Home</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/profile">Profile</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/works/">Works</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/">Blog</StyledLink>
        </NavListItem>
      </NavList>
    </Navigation>
  </Container>
)
