import { BlogCategory } from '@/types/BlogCategory'

export type Thumbnail = {
  height: number
  url: string
  width: number
}

export type Blog = {
  id: string
  title: string
  description: string
  content: string
  category: BlogCategory
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  related_post?: Blog[]
  thumbnail?: Thumbnail
}
