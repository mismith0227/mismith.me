import * as React from 'react'
import { Link } from 'gatsby'
import { Wrap, Item, StyledLink, ExternalLink } from './styles'

const Navigation = React.memo(({ isOpen }) => {
  return (
    <Wrap isOpen={isOpen}>
      <Item>
        <StyledLink to="/">Top</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/about/">About me</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/work/">Works</StyledLink>
      </Item>
      <Item>
        <ExternalLink href="https://blog.mismith.me/" target="_blank">
          Blog
        </ExternalLink>
      </Item>
    </Wrap>
  )
})

export default Navigation