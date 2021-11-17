import * as React from 'react'
import { List, ListItem, StyledLink } from './styles'

type Props = {
  data: ReadonlyArray<GatsbyTypes.MarkdownRemarkEdge>
  className?: string
}

export const GuideLinesNavigation = ({ data, className }: Props) => {
  return (
    <List className={className}>
      {data.map(
        (item) =>
          item.node.frontmatter && (
            <ListItem key={item.node.id}>
              <StyledLink to={`/guidelines/${item.node.frontmatter.slug}`}>
                {item.node.frontmatter.title}
              </StyledLink>
            </ListItem>
          )
      )}
    </List>
  )
}
