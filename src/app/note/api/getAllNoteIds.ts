import { client } from '@/libs/client'

export const getAllNoteIds = async (): Promise<string[]> => {
  const contentIds = await client.getAllContentIds({ endpoint: 'note' })

  return contentIds
}
