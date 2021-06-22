import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import media from '../../../styles/media'

interface Props {
  isLoading: boolean
}

const sideIn = keyframes`
  0% {
    transform: skew(-45deg) translate3d(-150%, 0, 0);
  }

  100% {
    transform: skew(-45deg) translate3d(-50%, 0, 0);
  }
`

const slideOut = keyframes`
  0% {
    transform: skew(-45deg) translate3d(-50%, 0, 0);
  }

  100% {
    transform: skew(-45deg) translate3d(50%, 0, 0);
  }
`

const triangleAnimation = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0.2;
  }
`

export const Container = styled.div<Props>`
  display: block;
  width: 200%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  background-color: #000;
  transform: skew(-45deg) translate3d(-150%, 0, 0);
  animation: ${({ isLoading }) => (isLoading ? sideIn : slideOut)};
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  z-index: 1001;

  ${media.medium} {
    width: 350%;
    animation-duration: 0.4s;
  }
`

export const Triangle = styled.div<Props>`
  display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
  width: 0;
  height: 0;
  font-size: 30px;
  border-left: 1em solid transparent;
  border-right: 1em solid transparent;
  border-bottom: 1.6em solid #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  animation: ${triangleAnimation} 1s linear infinite alternate;
  z-index: 1002;
`

export const Back = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: ${({ isLoading }) => (isLoading ? 0 : '100%')};
  z-index: 1000;
`
