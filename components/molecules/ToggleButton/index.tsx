import styled from '@emotion/styled'

const Container = styled.button`
  display: block;
  height: 30px;
  border: none;
  padding: 0;
  background-color: transparent;
  transition: 0.2s;
  color: currentColor;
  letter-spacing: 0.08em;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`

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
}: Props) => (
  <Container
    aria-expanded={isOpen}
    aria-controls={ariaControls}
    onClick={onToggleClick}
    className={className}
  >
    {isOpen ? 'Close' : 'Menu'}
  </Container>
)
