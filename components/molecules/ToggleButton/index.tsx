import { Container, ToggleBorder, ScreenReaderText } from './styles'

type Props = {
  isOpen: boolean
  onToggleClick: (e: React.MouseEvent) => void
  ariaControls: string
  className?: string
}

export const ToggleButton = ({
  isOpen,
  onToggleClick,
  ariaControls,
  className,
}: Props) => {
  return (
    <Container
      isOpen={isOpen}
      aria-expanded={isOpen}
      aria-controls={ariaControls}
      onClick={onToggleClick}
      className={className}
    >
      <ToggleBorder isOpen={isOpen} />
      <ScreenReaderText>menu</ScreenReaderText>
    </Container>
  )
}
