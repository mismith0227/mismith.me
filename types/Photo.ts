export type Photo = {
  readonly id: string
  readonly title: string
  readonly image: { url: string; width: number; height: number }
  readonly equipment: string
  readonly date: string
}
