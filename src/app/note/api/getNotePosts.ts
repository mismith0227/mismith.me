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
        offset: props.offset,
      }
    : {
        limit: NOTE_PER_PAGE,
      }

  const data = await client.get({
    endpoint: 'note',
    queries,
  })
  return data
}
