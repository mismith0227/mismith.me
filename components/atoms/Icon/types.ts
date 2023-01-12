export type ParentProps = {
  className?: string
  role?: string
  rotate?: number
}

export type Props = ParentProps & {
  viewBox: string
  children: React.ReactNode
}
