import { PhotoCategory } from '@/types/PhotoCategory'

export type Props = {
  readonly path: string
  readonly className?: string
  readonly photoCategory: PhotoCategory[]
}
