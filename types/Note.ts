export type Thumbnail = {
  height: number
  url: string
  width: number
}

export type Note = {
  id: string
  title: string
  description: string
  content: string
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  thumbnail?: Thumbnail
}
