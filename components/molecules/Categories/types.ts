import { BlogCategory } from '@/types/BlogCategory'

export type Props = {
  readonly className?: string
  readonly category: BlogCategory[]
  readonly currentCategory?: string
}
