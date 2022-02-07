export type Biography = {
  readonly id: string
  readonly startDate: string
  readonly endDate?: string
  readonly belongs: string
  readonly role: string
  readonly detail?: string
  readonly skills?: string[]
}

export type Props = {
  readonly onCreated: (value: boolean) => void
}

export type queueItem = {
  readonly char?: string
  readonly end: number
  readonly from: string
  readonly start: number
  readonly to: string
}
