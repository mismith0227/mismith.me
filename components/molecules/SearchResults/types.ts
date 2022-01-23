import { Hit } from 'react-instantsearch-core'

export type HitDoc = {
  objectID: string
  url: string
  title: string
  description: string
  content: string
}

export type Props = {
  readonly className?: string
  readonly hits: Hit<HitDoc>[]
}
