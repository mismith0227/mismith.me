import * as React from 'react'

import {
  PreviewTitle,
  Tag,
  Wrap,
  StyledImg,
  Content,
  TagWrap,
  Date,
  StyledLink,
} from './styles'

const ArticlePreview = ({ article }) => {
  return (
    <Wrap>
      <StyledLink to={`/work/${article.slug}`}>
        <StyledImg alt="" fluid={article.heroImage.fluid} />

        <Content>
          <PreviewTitle>{article.title}</PreviewTitle>
          <Date>{article.publishDate}</Date>

          {article.tags && (
            <TagWrap>
              {article.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagWrap>
          )}
        </Content>
      </StyledLink>
    </Wrap>
  )
}

export default ArticlePreview
