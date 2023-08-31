export type Image = { url: string; width: number; height: number }

export type Photo = {
  id: string
  title: string
  image: Image
  equipment: string
  date: string
  pickUp: boolean
  categoryPickUp: boolean
}
