import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { PreviewTitle, Tag } from './styles'

const ArticlePreview = ({ article }) => {
  return (
    <div>
      <Img alt="" fluid={article.heroImage.fluid} />
      <PreviewTitle>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </PreviewTitle>
      <small>{article.publishDate}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      {article.tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  )
}

export default ArticlePreview
