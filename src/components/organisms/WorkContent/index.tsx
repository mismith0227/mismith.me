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
        制作しているサイトです。
        <br />
        掲載しているサイト以外にも、非公開の受託案件や制作会社に在籍していた時の案件、
        <br />
        制作中のサービスもあります
      </LeadText>
      <DisplayList>
        <DisplayItem
          onClick={() => setdisplay('grid')}
          display={display === 'grid'}
        >
          <GridIcon />
        </DisplayItem>
        <DisplayItem
          onClick={() => setdisplay('list')}
          display={display === 'list'}
        >
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
