import * as React from 'react'
import {
  Container,
  CopyRight,
  StyledLink,
  FooterList,
  FooterListItem,
} from './styles'

type Props = {
  className?: string
}

export const Footer = ({ className }: Props) => {
  return (
    <Container className={className}>
      <FooterList>
        <FooterListItem>
          <StyledLink to="/about">このサイトについて</StyledLink>
        </FooterListItem>
      </FooterList>

      <CopyRight>© {new Date().getFullYear()}, misumi_takuma</CopyRight>
    </Container>
  )
}
