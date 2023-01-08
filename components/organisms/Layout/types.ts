import { PhotoCategory } from '@/types/PhotoCategory'

export type Props = {
  readonly children: React.ReactNode
  readonly path: string
  readonly photoCategory: PhotoCategory[]
}
