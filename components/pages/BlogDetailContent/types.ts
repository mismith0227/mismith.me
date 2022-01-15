import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'

export type Props = {
  readonly data: Blog
  readonly body: string
  readonly category: BlogCategory[]
  readonly currentCategory?: string
}
