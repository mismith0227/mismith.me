import styled from 'styled-components'

const getColor = ({ isOpen }) => (isOpen ? '#fff' : '#000')

export const Wrap = styled.div`
  display: block;
  width: 44px;
  height 34px;
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 20;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${getColor};
    top: 0;
    transition: 0.3s;
    transform: ${props =>
      props.isOpen
        ? 'translateY(15px) rotate(45deg)'
        : 'translateY(0) rotate(0)'};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${getColor};
    bottom: 0;
    transition: 0.3s;
    transform: ${props =>
      props.isOpen
        ? 'translateY(-15px) rotate(-45deg)'
        : 'translateY(0) rotate(0)'};
  }
`

export const Text = styled.div`
  text-indent: -9999px;
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: ${getColor};
  top: 15px;
  opacity: ${props => (props.isOpen ? 0.6 : 1)};
  transition: 0.2s;
  transform: ${props =>
    props.isOpen ? 'translate3d(100%, 0, 0)' : 'translate3d(0, 0, 0)'};
`
