import { client } from '@/libs/client'

export const getAllNoteIds = async (): Promise<string[]> => {
  const contentIds = await client.getAllContentIds({ endpoint: 'blog' })
  const filteredData = contentIds.filter((item) => item.startsWith('note-'))

  return filteredData
}
