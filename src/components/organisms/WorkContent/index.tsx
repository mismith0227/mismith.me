import * as React from 'react'
import ArticlePreview from '../../../components/organisms/ArticlePreview'
import GridIcon from '../../../components/atoms/Icon/Grid'
import ListIcon from '../../../components/atoms/Icon/List'
import LoadingLogo from '../../molecules/LoadingLogo'

import {
  Wrap,
  Title,
  LeadText,
  List,
  Item,
  DisplayList,
  DisplayItem,
} from './styles'

const WorkContent = ({ posts }) => {
  const [display, setdisplay] = React.useState('grid')

  return (
    <Wrap>
      <LoadingLogo isloading={false} />
      <Title>Works</Title>
      <LeadText>
        制作しているサイトです。作成中のサービスや非公開の受託案件などもあります
      </LeadText>
      <DisplayList>
        <DisplayItem onClick={() => setdisplay('grid')}>
          <GridIcon />
        </DisplayItem>
        <DisplayItem onClick={() => setdisplay('list')}>
          <ListIcon />
        </DisplayItem>
      </DisplayList>
      {posts && (
        <List>
          {posts.map(({ node }) => {
            return (
              <Item key={node.slug} display={display}>
                <ArticlePreview article={node} display={display} />
              </Item>
            )
          })}
        </List>
      )}
    </Wrap>
  )
}

export default WorkContent
