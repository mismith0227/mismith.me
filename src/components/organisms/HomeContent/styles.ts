import styled from '@emotion/styled'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`

export const Title = styled.h1`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-family: 'Aldrich';
  font-weight: normal;
  font-size: 56px;

  .dud {
    color: #ccc;
  }
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
`
