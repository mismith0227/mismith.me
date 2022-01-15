import { BlogCategory } from '@/types/BlogCategory'

export type Thumbnail = {
  readonly height: number
  readonly url: string
  readonly width: number
}

export type Blog = {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly content: string
  readonly category: BlogCategory
  readonly slug: string
  readonly createdAt: Date
  readonly updatedAt: Date
  readonly related_post?: Blog[]
  readonly thumbnail?: Thumbnail
}
