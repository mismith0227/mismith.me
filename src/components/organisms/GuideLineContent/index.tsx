import * as React from 'react'
import {
  Container,
  Title,
  StyledGuideLinesNavigation,
  Inner,
  Content,
  Article,
  ArticleTitle,
} from './styles'

type Props = {
  listData: ReadonlyArray<GatsbyTypes.MarkdownRemarkEdge>
  contentData: GatsbyTypes.MarkdownRemark
}

export const GuideLineContent = ({ listData, contentData }: Props) => {
  console.log(contentData)
  return (
    <Container>
      <Title>Guidelines</Title>

      <Inner>
        <StyledGuideLinesNavigation data={listData} />
        <Content>
          <Article>
            {contentData.frontmatter && (
              <ArticleTitle>{contentData.frontmatter.title}</ArticleTitle>
            )}

            {contentData.html && (
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: contentData.html }}
              />
            )}
          </Article>
        </Content>
      </Inner>
    </Container>
  )
}
