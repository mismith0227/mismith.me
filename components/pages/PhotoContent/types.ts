import { Photo } from '@/types/Photo'
import { PhotoCategory } from '@/types/PhotoCategory'

export type Props = {
  readonly data: Photo[]
  readonly category: PhotoCategory[]
}
