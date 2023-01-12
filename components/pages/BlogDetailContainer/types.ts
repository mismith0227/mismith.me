import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import { Toc } from '@/types/Toc'

export type Props = {
  data: Blog
  body: string
  toc: Toc[]
  category: BlogCategory[]
  currentCategory?: string
}
