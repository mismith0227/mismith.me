import { client } from '@/libs/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { createCanvas, Canvas, registerFont } from 'canvas'
import * as path from 'path'

type SeparatedText = {
  readonly line: string
  readonly remaining: string
}

const createTextLine = (canvas: Canvas, text: string): SeparatedText => {
  const context = canvas.getContext('2d')
  const MAX_WIDTH = 1000 as const

  for (let i = 0; i < text.length; i += 1) {
    const line = text.substring(0, i + 1)

    if (context.measureText(line).width > MAX_WIDTH) {
      return {
        line,
        remaining: text.substring(i + 1),
      }
    }
  }

  return {
    line: text,
    remaining: '',
  }
}

const createTextLines = (canvas: Canvas, text: string): string[] => {
  const lines: string[] = []
  let currentText = text

  while (currentText !== '') {
    const separatedText = createTextLine(canvas, currentText)
    lines.push(separatedText.line)
    currentText = separatedText.remaining
  }
  return lines
}

const createOgp = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { id } = req.query

  const data = await client.get({
    endpoint: 'blog',
    contentId: String(id),
  })

  const WIDTH = 1200 as const
  const HEIGHT = 630 as const
  const DX = 0 as const
  const DY = 0 as const
  const canvas = createCanvas(WIDTH, HEIGHT)
  const ctx = canvas.getContext('2d')

  registerFont(path.resolve('./fonts/NotoSansJP-Bold.otf'), {
    family: 'NotoSansJP',
  })

  ctx.fillStyle = '#FFF'
  ctx.fillRect(DX, DY, WIDTH, HEIGHT)

  ctx.font = '60px NotoSansJP'
  ctx.fillStyle = '#000000'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const lines = createTextLines(canvas, data.title)
  lines.forEach((line, index) => {
    const y = 314 + 120 * (index - (lines.length - 1) / 2)
    ctx.fillText(line, 600, y)
  })

  ctx.font = '30px NotoSansJP'
  ctx.fillText('by ▲ mismith.me', 1020, 580)

  const buffer = canvas.toBuffer()

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': buffer.length,
  })
  res.end(buffer, 'binary')
}

export default createOgp
