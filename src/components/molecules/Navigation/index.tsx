import * as React from 'react'
import {
  Wrap,
  Item,
  StyledLink,
  ExternalLink,
  StyledOpenInNewIcon,
} from './styles'

import { Props } from './types'

const Navigation = React.memo(({ location }: Props) => {
  return (
    <Wrap>
      <Item current={location === '/'}>
        <StyledLink to="/">Top</StyledLink>
      </Item>
      <Item current={location === '/work/'}>
        <StyledLink to="/work/">Works</StyledLink>
      </Item>
      <Item current={location === '/contact/'}>
        <StyledLink to="/contact/">Contact</StyledLink>
      </Item>
      <Item>
        <ExternalLink
          href="https://blog.mismith.me/"
          target="_blank"
          rel="noopener"
        >
          Blog
          <StyledOpenInNewIcon />
        </ExternalLink>
      </Item>
    </Wrap>
  )
})

export default Navigation
