import styled from 'styled-components'

export const Wrap = styled.div``

export const Pointer = styled.div`
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #000;
  z-index: 1001;
  transform: translate3d(-50%, -50%, 0);
`

export const Follower = styled.div`
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border: 0.1rem solid #000;
  z-index: 1000;
  text-align: center;
  transform: translate3d(-50%, -50%, 0);
`
