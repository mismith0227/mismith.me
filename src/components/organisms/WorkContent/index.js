import * as React from 'react'
import get from 'lodash/get'
import ArticlePreview from '../../organisms/ArticlePreview'

import { Wrap, LeadText, List, Item } from './styles'

const WorkContent = ({ posts }) => {
  return (
    <Wrap>
      <div className="wrapper">
        <h2 className="section-headline">Works</h2>
        <LeadText>制作した一部です。非公開のものもあります。</LeadText>
        <List className="article-list">
          {posts.map(({ node }) => {
            return (
              <Item key={node.slug}>
                <ArticlePreview article={node} />
              </Item>
            )
          })}
        </List>
      </div>
    </Wrap>
  )
}

export default WorkContent
