import Masonry from '@mui/lab/Masonry'
import Image from 'next/image'
import styled from '@emotion/styled'

export const Wrap = styled.div``

export const StyledMasonry = styled(Masonry)`
  margin: 0 !important;
`

export const ImageWrap = styled.div`
  overflow: hidden;

  &:hover {
    cursor: zoom-in;

    img {
      transform: scale(1.1);
    }
  }
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.2s;
`

export const ImageModal = styled.div`
  background-color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 96vw;
  height: 96vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
`

export const ImageModalInner = styled.div`
  padding: 24px;
`

export const ModalImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const CloseModal = styled.button`
  position: fixed;
  top: 12px;
  right: 12px;
  padding: 0;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    position: absolute;
    inset: 0;
    margin: auto;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

export const ScreenReaderText = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
`
