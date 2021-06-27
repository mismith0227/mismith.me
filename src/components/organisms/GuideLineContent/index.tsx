import * as React from 'react'
import { Container, Title, StyledGuideLinesNavigation } from './styles'

type Props = {
  data: ReadonlyArray<GatsbyTypes.MarkdownRemarkEdge>
}

export const GuideLineContent = ({ data }: Props) => {
  return (
    <Container>
      <Title>Guidelines</Title>

      <StyledGuideLinesNavigation data={data} />
    </Container>
  )
}
