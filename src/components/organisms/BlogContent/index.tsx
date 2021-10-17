import * as React from 'react'
import moment from 'moment'
import {
  Container,
  StyledLink,
  Title,
  BlogList,
  BlogListItem,
  BlogTitle,
  Category,
  DateArea,
  Date,
  DateLabel,
} from './styles'

type Props = {
  data: ReadonlyArray<GatsbyTypes.MicrocmsBlogEdge>
}

export const BlogContent = ({ data }: Props) => (
  <Container>
    <Title>Blog</Title>

    <BlogList>
      {data.map(({ node }) => (
        <BlogListItem key={node.id}>
          <StyledLink to={`/blog/${node.category}/${node.slug}`}>
            <Category>{node.category}</Category>
            <BlogTitle>{node.title}</BlogTitle>

            <DateArea>
              <Date>
                <DateLabel>公開日:</DateLabel>
                {moment(node.createdAt).format('YYYY年M月D日')}
              </Date>
              <Date>
                <DateLabel>最終更新日:</DateLabel>
                {moment(node.updatedAt).format('YYYY年M月D日')}
              </Date>
            </DateArea>
          </StyledLink>
        </BlogListItem>
      ))}
    </BlogList>
  </Container>
)
