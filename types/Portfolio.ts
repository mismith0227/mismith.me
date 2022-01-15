export type Thumbnail = {
  readonly height: number
  readonly url: string
  readonly width: number
}

export type Portfolio = {
  readonly id: string
  readonly title: string
  readonly body: string
  readonly productionDate: Date
  readonly tags: string[]
  readonly thumbnail: Thumbnail
  readonly description: string
  readonly url?: string
  readonly github?: string
}
