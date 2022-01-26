import Link from 'next/link'
import { connectPoweredBy } from 'react-instantsearch-dom'
import {
  Wrap,
  List,
  Item,
  StyledLink,
  Description,
  EmptyContent,
  EmptyContentText,
  StyledPoweredBy,
} from './styles'
import { Props, HitDoc } from './types'

export const SearchResults = ({ className, hits }: Props) => {
  const CustomPoweredBy = connectPoweredBy(StyledPoweredBy)

  return (
    <Wrap className={className}>
      {hits.length > 0 ? (
        <List>
          {hits.map((hit: HitDoc) => (
            <Item key={hit.objectID}>
              <Link href={hit.url} passHref>
                <StyledLink>{hit.title}</StyledLink>
              </Link>
              <Description>{hit.description}</Description>
            </Item>
          ))}
        </List>
      ) : (
        <EmptyContent>
          <EmptyContentText>検索結果がありません。</EmptyContentText>
        </EmptyContent>
      )}

      <CustomPoweredBy />
    </Wrap>
  )
}