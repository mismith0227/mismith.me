import { JSDOM } from 'jsdom'

import { Toc, TocItem } from '@/types/Toc'

export const convertToToc = (htmlString: string): TocItem[] => {
  const dom = new JSDOM(htmlString)
  const toc: TocItem[] = []
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

export const makeToc = (content: TocItem[]): Toc[] => {
  const tableOfContents: Toc[] = []

  let h2Index = -1

  content.forEach((item) => {
    if (item.name === 'H2') {
      h2Index += 1
      const tableOfContentsH2: Toc = {
        id: item.id,
        name: item.name,
        text: item.text,
        childs: [],
      }
      tableOfContents[h2Index] = tableOfContentsH2
    }

    if (item.name === 'H3' && h2Index !== -1) {
      const tableOfContentsH3: TocItem = {
        id: item.id,
        name: item.name,
        text: item.text,
      }

      tableOfContents[h2Index].childs.push(tableOfContentsH3)
    }
  })

  return tableOfContents
}
