export type Thumbnail = {
  height: number
  url: string
  width: number
}

export type Portfolio = {
  id: string
  title: string
  body: string
  productionDate: Date
  tags: string[]
  thumbnail: Thumbnail
  description: string
  url?: string
  github?: string
}
