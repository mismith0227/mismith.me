import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Container, Navigation, NavList, NavListItem } from './styles'

type Props = {}

export const Header = ({  }: Props) => (
  <Container>
    <Navigation>
      <NavList>
        <NavListItem>
          <Link to="/">Home</Link>
        </NavListItem>
        <NavListItem>About</NavListItem>
        <NavListItem>
          <Link to="/works/">Works</Link>
        </NavListItem>
        <NavListItem>Contact</NavListItem>
        <NavListItem>Blog</NavListItem>
      </NavList>
    </Navigation>
  </Container>
)
