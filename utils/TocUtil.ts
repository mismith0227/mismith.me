import { Toc } from '@/types/Toc'
import { JSDOM } from 'jsdom'

export const convertToToc = (htmlString: string): Toc[] => {
  const dom = new JSDOM(htmlString)
  const toc: Toc[] = []
  dom.window.document
    .querySelectorAll('h1, h2, h3, h4, h5, h6')
    .forEach((heading) => {
      toc.push({
        id: heading.id,
        name: heading.tagName,
        text: heading.textContent,
      })
    })
  return toc
}
