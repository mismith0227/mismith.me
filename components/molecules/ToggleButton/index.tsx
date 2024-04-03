import { Container, ToggleBorder, ScreenReaderText } from './styles'
import { Props } from './types'

export const ToggleButton = ({
  isOpen,
  onToggleClick,
  ariaControls,
  className,
}: Props) => (
  <Container
    isOpen={isOpen}
    aria-expanded={isOpen}
    aria-controls={ariaControls}
    onClick={onToggleClick}
    className={className}
  >
    {isOpen ? 'Close' : 'Menu'}
  </Container>
)
