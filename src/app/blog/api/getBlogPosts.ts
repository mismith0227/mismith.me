import { client } from '@/libs/client'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
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

export const getBlogPosts = async (props: Props): Promise<Data> => {
  const { fields, limit, filters, offset } = props

  const queries = {
    fields,
    limit: limit || BLOG_PER_PAGE,
    filters,
    offset,
  }

  const data = await client.get({
    endpoint: 'blog',
    queries,
  })
  return data
}
