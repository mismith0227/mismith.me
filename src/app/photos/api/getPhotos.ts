import { client } from '@/libs/client'
import { PhotosCategory } from '@/types/PhotosCategory'

type Data = {
  contents: PhotosCategory[]
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

export const getPhotos = async (props: Props): Promise<Data> => {
  const { fields, filters, offset } = props

  const queries = {
    fields,
    filters,
    offset,
  }

  const data = await client.get({
    endpoint: 'photos',
    queries,
  })
  return data
}
