import * as React from 'react'
import get from 'lodash/get'
import ArticlePreview from '~/components/organisms/ArticlePreview'

import { Wrap, Title, LeadText, List, Item } from './styles'

const WorkContent = ({ posts }) => {
  return (
    <Wrap>
      <Title>Works</Title>
      <LeadText>制作した一部です。非公開のものもあります。</LeadText>
      {posts && (
        <List>
          {posts.map(({ node }) => {
            return (
              <Item key={node.slug}>
                <ArticlePreview article={node} />
              </Item>
            )
          })}
        </List>
      )}
    </Wrap>
  )
}

export default WorkContent
