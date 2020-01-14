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
