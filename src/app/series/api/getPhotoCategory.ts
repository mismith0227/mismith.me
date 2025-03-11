import { client } from '@/libs/client'
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
  const { fields, filters, offset } = props

  const queries = {
    fields,
    filters,
    offset,
  }

  const data = await client.get({
    endpoint: 'photo-category',
    queries,
  })
  return data
}
