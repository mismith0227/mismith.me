import * as React from 'react'
import { Container, CopyRight } from './styles'

type Props = {
  className?: string
}

export const Footer = ({ className }: Props) => {
  return (
    <Container className={className}>
      <CopyRight>© {new Date().getFullYear()}, misumi_takuma</CopyRight>
    </Container>
  )
}
