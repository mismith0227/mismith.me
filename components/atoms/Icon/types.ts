export type ParentProps = {
  readonly className?: string
  readonly role?: string
  readonly rotate?: number
}

export type Props = ParentProps & {
  readonly viewBox: string
  readonly children: React.ReactNode
}
