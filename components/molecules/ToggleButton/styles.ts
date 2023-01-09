import styled from '@emotion/styled'

type Props = {
  isOpen: boolean
}

export const Container = styled.button<Props>`
  display: block;
  width: 30px;
  height: 30px;
  border: none;
  padding: 0;
  background-color: transparent;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  &::before {
    top: 5px;
  }

  &::after {
    bottom: 5px;
  }
`

export const ToggleBorder = styled.span<Props>`
  display: block;
  width: 100%;
  height: 2px;
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  transition: 0.2s;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(135deg)' : 'rotate(0)')};

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    transition: 0.2s;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0)')};
  }
`

export const ScreenReaderText = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
`
