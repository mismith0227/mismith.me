export type PhotoCategory = {
  id: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  revisedAt: Date
  category_name: string
  description: string
  feature_image?: string
  images?: {
    url: string
    width: number
    height: number
  }[]
}
