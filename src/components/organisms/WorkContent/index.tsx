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
        個人で制作している事例です。
        <br />
        掲載している事例以外にも、個人で引き受けた非公開の受託案件や制作会社での案件もあります。
        <br />
        Webアプリ開発や、webサイト制作のフロントエンドが主な担当範囲です。
      </LeadText>
      <DisplayList>
        <DisplayItem
          onClick={() => setdisplay('grid')}
          isActive={display === 'grid'}
        >
          <GridIcon />
        </DisplayItem>
        <DisplayItem
          onClick={() => setdisplay('list')}
          isActive={display === 'list'}
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
