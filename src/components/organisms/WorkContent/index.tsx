import * as React from 'react'
import moment from 'moment'
import {
  Container,
  Title,
  ThumbnailWrap,
  Thumbnail,
  Works,
  WorkItem,
  Date,
  WorkTitle,
  StyledLink,
  Description,
  Tags,
  TagItem,
} from './styles'

type Props = {
  data: ReadonlyArray<GatsbyTypes.MicrocmsPortfolioEdge>
}

export const WorkContent = ({ data }: Props) => (
  <Container>
    <Title>Works</Title>
    <Works>
      {data.map(({ node }) => (
        <WorkItem key={node.id}>
          {node.productionDate && (
            <Date>{moment(node.productionDate).format('YYYY年M月D日')}</Date>
          )}
          <WorkTitle>
            <StyledLink to={`/works/${node.id}`}>{node.title}</StyledLink>
          </WorkTitle>

          {node.description && <Description>{node.description}</Description>}

          {node.tags && (
            <Tags>
              {node.tags.map((item) => (
                <TagItem key={item}>{item}</TagItem>
              ))}
            </Tags>
          )}

          {node.thumbnail && (
            <ThumbnailWrap to={`/works/${node.id}`}>
              <Thumbnail src={node.thumbnail.url} alt={node.title} />
            </ThumbnailWrap>
          )}
        </WorkItem>
      ))}
    </Works>
  </Container>
)
