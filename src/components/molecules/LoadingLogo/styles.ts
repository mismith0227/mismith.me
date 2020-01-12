import styled, { keyframes } from 'styled-components'
import media from '../../../styles/media'
import Logo from '../../../components/atoms/Icon/Logo'

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  99% {
    opacity: 0;
    left: 0;
  }
  100% {
    left: 100%;
  }
`

const moveLogo = keyframes`
  0% {
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
  30% {
    opacity: 1;
  }
  65% {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  100% {
    top: 1.5rem;
    left: 1.5rem;
    transform: none;
  }
`

export const LoadOverlay = styled.div`
  display: ${props => (props.isloading ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #fff;
  z-index: 1000;
  animation: ${fadeOut} 1.5s linear forwards;
`

export const StyledLogo = styled(Logo)`
  position: fixed;
  font-size: 7rem;
  z-index: 1001;
  top: 1.5rem;
  left: 1.5rem;
  animation: ${moveLogo} 1.5s ease-out forwards;
  ${props => !props.isloading && 'animation-name: none'};
  transform-origin: center;

  ${media.small} {
    font-size: 5rem;
  }
`
