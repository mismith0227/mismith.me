import { client } from '@/libs/client'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { BlogCategory } from '@/types/BlogCategory'

type Data = {
  contents: BlogCategory[]
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

export const getCategories = async (props: Props): Promise<Data> => {
  const { fields, limit, filters, offset } = props

  const queries = {
    fields,
    limit: limit || BLOG_PER_PAGE,
    filters,
    offset,
  }

  const data = await client.get({
    endpoint: 'blog-category',
    queries,
  })
  return data
}
