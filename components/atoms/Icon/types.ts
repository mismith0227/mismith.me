export interface ParentProps {
  readonly className?: string
  readonly role?: string
}

export interface Props extends ParentProps {
  readonly viewBox: string
  readonly children: React.ReactNode
}
