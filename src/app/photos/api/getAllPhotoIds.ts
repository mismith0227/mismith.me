import { client } from '@/libs/client'

export const getAllPhotoIds = async (): Promise<string[]> => {
  const contentIds = await client.getAllContentIds({ endpoint: 'photos' })

  return contentIds
}
