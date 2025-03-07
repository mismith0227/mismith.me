import { Image } from './Photo'

export type SeriesCategory = {
  id: string
  createdAt: Date
  updatedAt: Date
  sinceAt: Date
  publishedAt: Date
  revisedAt: Date
  category_name: string
  sub_title: string
  description: string
  body?: string
  link?: string
  feature_image?: Image
  images?: {
    url: string
    width: number
    height: number
  }[]
}
