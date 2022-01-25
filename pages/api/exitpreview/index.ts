import { NextApiRequest, NextApiResponse } from 'next'

const exitPreview = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  res.clearPreviewData()
  res.writeHead(307, { Location: `/` })
  res.end('Preview mode disabled')
}

export default exitPreview
