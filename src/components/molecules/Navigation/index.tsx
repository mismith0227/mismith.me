import * as React from 'react'
import {
  Wrap,
  Item,
  StyledLink,
  ExternalLink,
  StyledOpenInNewIcon,
} from './styles'
import { Props } from './/types'

const Navigation = React.memo(({ isOpen }: Props) => {
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
          <StyledOpenInNewIcon />
        </ExternalLink>
      </Item>
    </Wrap>
  )
})

export default Navigation
