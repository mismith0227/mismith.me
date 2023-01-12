import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'

export type Props = {
  data: Blog[]
  totalCount: number
  currentPage: number
  category: BlogCategory[]
  currentCategory?: string
}
