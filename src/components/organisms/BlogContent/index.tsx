import * as React from 'react'
import moment from 'moment'
import { Container, StyledLink } from './styles'

type Props = {
  data: ReadonlyArray<GatsbyTypes.MicrocmsBlogEdge>
}

export const BlogContent = ({ data }: Props) => (
  <Container>
    <h1>blog</h1>
    {data.map(({ node }) => (
      <div key={node.id}>
        {node.title}
        <StyledLink to={`/blog/${node.id}`}>link</StyledLink>
      </div>
    ))}
  </Container>
)
