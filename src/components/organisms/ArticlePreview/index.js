import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import {
  PreviewTitle,
  Tag,
  Wrap,
  StyledImg,
  Content,
  TagWrap,
  Date,
} from './styles'

const ArticlePreview = ({ article }) => {
  return (
    <Wrap>
      <StyledImg alt="" fluid={article.heroImage.fluid} />

      <Content>
        <PreviewTitle>
          <Link to={`/work/${article.slug}`}>{article.title}</Link>
        </PreviewTitle>
        <Date>{article.publishDate}</Date>

        <TagWrap>
          {article.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagWrap>
      </Content>
    </Wrap>
  )
}

export default ArticlePreview
