import * as React from 'react'
import { Container, StyledLink } from './styles'

type Props = {
  data: ReadonlyArray<GatsbyTypes.MarkdownRemarkEdge>
}

export const GuideLinesNavigation = ({ data }: Props) => {
  console.log(data)
  return (
    <Container>
      {data.map(
        (item) =>
          item.node.frontmatter && (
            <StyledLink
              key={item.node.id}
              to={`/guidelines/${item.node.frontmatter.slug}`}
            >
              {item.node.frontmatter.title}
            </StyledLink>
          )
      )}
    </Container>
  )
}
