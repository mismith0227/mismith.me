import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Title, Thumbnail } from './styles'

type Props = {
  data: ReadonlyArray<GatsbyTypes.MicrocmsPortfolioEdge>
}

export const WorkContent = ({ data }: Props) => (
  <Container>
    <Title>Works</Title>
    <ul>
      {data.map(({ node }) => (
        <li key={node.id}>
          {node.productionDate && <span>{node.productionDate}</span>}
          <Link to={`/works/${node.id}`}>{node.title}</Link>

          {node.description && <div>{node.description}</div>}

          <div>タグ</div>

          {node.thumbnail && (
            <Thumbnail src={node.thumbnail.url} alt={node.title} />
          )}
        </li>
      ))}
    </ul>
  </Container>
)
