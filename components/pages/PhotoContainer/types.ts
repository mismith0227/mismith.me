import { Photo } from '@/types/Photo'

export type Props = {
  data: Photo[]
  currentCategoryName: string
  currentCategoryDescription?: string
  pickUpPhoto?: Photo
}
