import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Container, Navigation, NavList, NavListItem } from './styles'

type Props = {}

export const Header = ({  }: Props) => (
  <Container>
    <Navigation>
      <NavList>
        <NavListItem>Home</NavListItem>
        <NavListItem>About</NavListItem>
        <NavListItem>Works</NavListItem>
        <NavListItem>Contact</NavListItem>
        <NavListItem>Blog</NavListItem>
      </NavList>
    </Navigation>
  </Container>
)
