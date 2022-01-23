import {
  Wrap,
  Title,
  Text,
  StyledSearchInput,
  StyledSearchResults,
} from './styles'
import algoliasearch from 'algoliasearch/lite'
import { MultipleQueriesQuery } from '@algolia/client-search'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  connectSearchBox,
  connectHits,
} from 'react-instantsearch-dom'
import { Props } from './types'

export const Search = ({ className }: Props) => {
  const applicationId = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID ?? ''
  const searchApiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ?? ''
  const CustomSearchBox = connectSearchBox(StyledSearchInput)
  const CustomHits = connectHits(StyledSearchResults)
  // const searchClient = algoliasearch(applicationId, searchApiKey)
  const algoliaClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '',
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
  )
  const indexName = 'mismith'

  const mock = {
    hits: [],
    nbHits: 0,
    nbPages: 0,
    page: 0,
    processingTimeMS: 0,
  }

  const searchClient = {
    ...algoliaClient,
    search(requests: MultipleQueriesQuery[]) {
      if (requests.every(({ params }) => !params?.query)) {
        return Promise.resolve(mock)
      }
      return algoliaClient.search(requests)
    },
  }

  return (
    <Wrap className={className}>
      <Title>お探しのページがない場合は検索してみてください</Title>
      <Text>
        Next.jsやmicroCMS、その他フロントエンドに関するブログを書いています。
        <br />
        ブログに関する検索は以下からお願いします。
      </Text>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <Configure hitsPerPage={5} />
        <CustomSearchBox />
        <CustomHits />
      </InstantSearch>
    </Wrap>
  )
}
