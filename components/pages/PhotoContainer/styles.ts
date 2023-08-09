import Image from 'next/image'
import styled from '@emotion/styled'
import media from '@/styles/media'
import { Heading } from '@/components/atoms/Heading'
import { Container } from '@/components/organisms/Container'

export const StyledContainer = styled(Container)``

export const StyledHeading = styled(Heading)``

export const Description = styled.p`
  max-width: 980px;
  white-space: pre-wrap;
  word-wrap: break-word;
`

export const StyledPickUpImage = styled(Image)`
  width: min(100%, 1000px);
  height: auto;
`

export const StyledImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-self: center;
  align-self: center;
  gap: 16px;
  margin-top: 64px;

  ${media.medium} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${media.small} {
    margin: 80px 0 0 !important;
  }
`

export const ImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 100%;

  &:hover {
    cursor: zoom-in;
  }
`

export const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  padding: 32px 24px;
  box-sizing: border-box;

  ${media.small} {
    width: 98vw;
    height: 90vh;
    padding: 32px 8px;
  }
`

export const ImageModalInner = styled.div`
  padding: 24px;
`

export const ModalImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const Taken = styled.p`
  position: absolute;
  bottom: 4px;
  right: 4px;
  margin: 0;
  color: #fff;
  font-size: 12px;
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
