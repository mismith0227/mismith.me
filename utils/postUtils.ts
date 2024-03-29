import hljs from 'highlight.js'
import { JSDOM } from 'jsdom'

export const convertToHtml = (htmlString: string): string => {
  const dom = new JSDOM(htmlString)
  setCodeHighlight(dom.window.document.querySelectorAll('pre code'))
  setLazyLoad(dom.window.document.querySelectorAll('img'))
  return dom.window.document.body.innerHTML
}

const setLazyLoad = (elements: NodeListOf<HTMLImageElement>): void => {
  elements.forEach((element) => {
    element.setAttribute('loading', 'lazy')
  })
}

const setCodeHighlight = (elements: NodeListOf<Element>) => {
  elements.forEach((element) => {
    element.innerHTML = hljs.highlightAuto(element.textContent ?? '').value
    element.classList.add('hljs')
  })
}
