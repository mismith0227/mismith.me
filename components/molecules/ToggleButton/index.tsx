import { Container, ToggleBorder, ScreenReaderText } from './styles'
import { Props } from './types'

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
