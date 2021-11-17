export interface Portfolio {
  id: string
  title: string
  body: string
  productionDate: Date
  tags: string[]
  thumbnail: {
    height: number
    url: string
    width: number
  }
  description: string
}
