import * as React from 'react'
import {
  Wrap,
  Item,
  StyledLink,
  ExternalLink,
  StyledOpenInNewIcon,
} from './styles'

const Navigation = React.memo(() => {
  return (
    <Wrap>
      <Item>
        <StyledLink to="/">Top</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/work/">Works</StyledLink>
      </Item>
      <Item>
        <ExternalLink href="https://blog.mismith.me/" target="_blank">
          Blog
          <StyledOpenInNewIcon />
        </ExternalLink>
      </Item>
    </Wrap>
  )
})

export default Navigation
