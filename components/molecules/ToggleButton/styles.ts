import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

interface Props {
  isOpen: boolean
}

const openBorderTop = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0);
  }

  50% {
    transform: translate3d(0, 14px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, 14px, 0) rotate(45deg);
  }
`

const closeBorderTop = keyframes`
  0% {
    transform: translate3d(0, 14px, 0) rotate(45deg);
  }

  50% {
    transform: translate3d(0, 14px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, 0, 0) rotate(0);
  }
`

const openBorderBottom = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0);
  }

  50% {
    transform: translate3d(0, -14px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, -14px, 0) rotate(-45deg);
  }
`

const closeBorderBottom = keyframes`
  0% {
    transform: translate3d(0, -14px, 0) rotate(-45deg);
  }

  50% {
    transform: translate3d(0, -14px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, 0, 0) rotate(0);
  }
`

export const Container = styled.button<Props>`
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  padding: 0;
  background-color: transparent;
  transition: 0.2s;
  color: ${({ isOpen }) => (isOpen ? '#fff' : '#000')};

  &:hover {
    cursor: pointer;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    position: absolute;
    left: 0;
  }

  &::before {
    top: 5px;
    animation: ${({ isOpen }) => (isOpen ? openBorderTop : closeBorderTop)};
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }

  &::after {
    bottom: 5px;
    animation: ${({ isOpen }) =>
      isOpen ? openBorderBottom : closeBorderBottom};
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }
`

export const ToggleBorder = styled.span<Props>`
  display: block;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  transition: 0.2s;
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
`

export const ScreenReaderText = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
`
