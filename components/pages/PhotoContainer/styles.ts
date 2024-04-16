import Image from 'next/image'
import styled from '@emotion/styled'
import media from '@/styles/media'
import { Heading } from '@/components/atoms/Heading'
import { Container } from '@/components/organisms/Container'
import { LinkButton } from '@/components/atoms/LinkButton'
import { css } from '@emotion/react'

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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-self: center;
  align-self: center;
  gap: 16px;
  margin-top: 64px;

  ${media.medium} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${media.small} {
    margin: 40px 0 0 !important;
    grid-template-columns: repeat(1, minmax(0, 1fr));
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

  ${media.small} {
    height: auto;
    padding-bottom: 0;

    &:hover {
      cursor: default;
    }
  }
`

export const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.2s;

  ${media.small} {
    position: inherit;
  }
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

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: gray;
`

export const StyledProductLink = styled(LinkButton)`
  display: inline-flex;
`

export const BackLink = styled(LinkButton)`
  margin: 80px auto 0;
  width: min(100%, 300px);
`

const getButtonCommonStyles = () => {
  return css`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      transition: 0.2s;

      &::after {
        opacity: 0.8;
      }
    }

    &::after {
      content: '';
      display: block;
      position: relative;
      width: 20px;
      height: 20px;
      border: solid #fff;
      border-width: 3px 3px 0 0;
    }
  `
}

export const NextButton = styled.button`
  ${getButtonCommonStyles}
  right: 4px;
  width: 40px;
  height: 40px;

  &::after {
    transform: rotate(45deg);
  }
`

export const PrevButton = styled.button`
  ${getButtonCommonStyles}
  left: 4px;
  width: 40px;
  height: 40px;

  &::after {
    transform: rotate(-135deg);
  }
`
