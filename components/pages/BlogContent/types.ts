import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'

export type Props = {
  readonly data: Blog[]
  readonly totalCount: number
  readonly currentPage: number
  readonly category: BlogCategory[]
  readonly currentCategory?: string
}
