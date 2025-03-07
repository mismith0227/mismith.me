import { client } from '@/libs/client'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { SeriesCategory } from '@/types/SeriesCategory'

type Data = {
  contents: SeriesCategory[]
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

export const getPhotoCategories = async (props: Props): Promise<Data> => {
  const { fields, limit, filters, offset } = props

  const queries = {
    fields,
    limit: limit || BLOG_PER_PAGE,
    filters,
    offset,
  }

  const data = await client.get({
    endpoint: 'photo-category',
    queries,
  })
  return data
}
