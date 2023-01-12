export type Biography = {
  id: string
  startDate: string
  endDate?: string
  belongs: string
  role: string
  detail?: string
  skills?: string[]
}

export type queueItem = {
  char?: string
  end: number
  from: string
  start: number
  to: string
}
