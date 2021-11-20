import { BlogCategory } from './BlogCategory'

export interface Blog {
  id: string
  title: string
  description: string
  content: string
  category: BlogCategory
  slug: string
  createdAt: Date
  updatedAt: Date
}
