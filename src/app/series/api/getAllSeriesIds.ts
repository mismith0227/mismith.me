import { client } from '@/libs/client'

export const getAllSeriesIds = async (): Promise<string[]> => {
  const contentIds = await client.getAllContentIds({
    endpoint: 'photo-category',
  })

  return contentIds
}
