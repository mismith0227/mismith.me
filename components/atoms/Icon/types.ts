export interface ParentProps {
  readonly className?: string
  readonly role?: string
  readonly rotate?: number
}

export interface Props extends ParentProps {
  readonly viewBox: string
  readonly children: React.ReactNode
}
