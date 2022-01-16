import { NextApiRequest, NextApiResponse } from 'next'
import { client } from '@/libs/client'
import { toStringId } from '@/utils/toStringId'

const exitPreview = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const id = toStringId(req.query.id)
  const data = await client.get({
    endpoint: 'blog',
    contentId: id,
  })

  res.clearPreviewData()
  res.writeHead(307, {
    Location: data ? `/blog/${data.category.id}/${data.id}` : '/',
  })
  res.end()
}

export default exitPreview
