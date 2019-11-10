import * as React from 'react'
import { Link } from 'gatsby'
import { Wrap, Item, StyledLink } from './styles'

const Navigation = React.memo(({ isOpen }) => {
  return (
    <Wrap isOpen={isOpen}>
      <Item>
        <StyledLink to="/">Top</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/blog/">Blog</StyledLink>
      </Item>
    </Wrap>
  )
})

export default Navigation
