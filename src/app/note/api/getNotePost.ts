import { client } from '@/libs/client'
import { Blog } from '@/types/Blog'

export const getNotePost = async (id: string): Promise<Blog> => {
  const data = await client.get({
    endpoint: `blog/${id}`,
  })
  return data
}
