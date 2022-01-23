import { client } from '@/libs/client'
import { Blog } from '@/types/Blog'

const getAllContents = async (limit = 10, offset = 0): Promise<Blog[]> => {
  const data = await client.get({
    endpoint: 'blog',
    queries: { limit, offset },
  })

  if (data.offset + data.limit < data.totalCount) {
    const contents = await getAllContents(data.limit, data.offset + data.limit)
    return [...data.contents, ...contents]
  }

  return data.contents
}

export { getAllContents }
