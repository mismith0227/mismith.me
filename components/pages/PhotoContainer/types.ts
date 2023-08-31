import { Photo, Image } from '@/types/Photo'

export type Props = {
  data: Image[]
  currentCategoryName: string
  currentCategoryDescription?: string
  pickUpPhoto?: Image
}
