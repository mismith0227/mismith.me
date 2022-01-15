export type Props = {
  readonly isOpen: boolean
  readonly onToggleClick: (e: React.MouseEvent) => void
  readonly ariaControls: string
  readonly className?: string
}
