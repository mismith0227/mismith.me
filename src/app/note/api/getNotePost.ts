import { client } from '@/libs/client'
import { Note } from '@/types/Note'

export const getNotePost = async (id: string): Promise<Note> => {
  const data = await client.get({
    endpoint: `note/${id}`,
  })
  return data
}
