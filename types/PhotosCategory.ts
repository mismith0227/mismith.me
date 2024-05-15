export type PhotosCategory = {
  id: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  revisedAt: Date
  title: string
  feature_image: {
    url: string
    width: number
    height: number
  }
  photos?: {
    url: string
    width: number
    height: number
  }[]
}
