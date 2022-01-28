import { client } from '@/libs/client'
import { Portfolio } from '@/types/Portfolio'

const getAllPortfolio = async (
  limit = 10,
  offset = 0
): Promise<Portfolio[]> => {
  const data = await client.get({
    endpoint: 'portfolio',
    queries: { limit, offset },
  })

  if (data.offset + data.limit < data.totalCount) {
    const contents = await getAllPortfolio(data.limit, data.offset + data.limit)
    return [...data.contents, ...contents]
  }

  return data.contents
}

export { getAllPortfolio }
