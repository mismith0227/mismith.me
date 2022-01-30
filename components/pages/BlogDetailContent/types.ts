import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import { Toc } from '@/types/Toc'

export type Props = {
  readonly data: Blog
  readonly body: string
  readonly toc: Toc[]
  readonly category: BlogCategory[]
  readonly currentCategory?: string
}
