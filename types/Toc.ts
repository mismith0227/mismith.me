export type TocItem = {
  text: string | null
  id: string
  name: string
}

export type Toc = {
  childs: TocItem[]
} & TocItem
