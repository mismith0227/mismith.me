import { client } from '@/libs/client'
import { NOTE_PER_PAGE } from '@/settings/siteSettings'
import { Blog } from '@/types/Blog'

type Data = {
  contents: Blog[]
  totalCount: number
  offset: number
  limit: number
}

type Props = {
  fields?: string
  limit?: number
  filters?: string
  offset?: number
}

export const getNotePosts = async (props?: Props): Promise<Data> => {
  const queries = props
    ? {
        fields: props.fields,
        limit: props.limit || NOTE_PER_PAGE,
        filters: `category[equals]note`,
        offset: props.offset,
      }
    : {
        filters: `category[equals]note`,
        limit: NOTE_PER_PAGE,
      }

  const data = await client.get({
    endpoint: 'blog',
    queries,
  })
  return data
}
