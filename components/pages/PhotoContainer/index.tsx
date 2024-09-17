import { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Modal } from '@mui/material'
import dayjs from 'dayjs'
import Image from 'next/image'

import { Heading } from '@/components/atoms/Heading'
import { LinkButton } from '@/components/atoms/LinkButton'
import { Container } from '@/components/organisms/Container'
import { useWindowSize } from '@/hooks/useWindowSize'
import media from '@/styles/media'
import { Image as ImageType } from '@/types/Photo'

const StyledContainer = styled(Container)``

const StyledHeading = styled(Heading)``

const Description = styled.p`
  max-width: 980px;
  white-space: pre-wrap;
  word-wrap: break-word;
`

const StyledPickUpImage = styled(Image)`
  width: min(100%, 1000px);
  height: auto;
`

const StyledImageList = styled.div`
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

const ImageWrap = styled.div`
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

const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.2s;

  ${media.small} {
    position: inherit;
  }
`

const ImageModal = styled.div`
  background-color: #fff;
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

const ModalImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const CloseModal = styled.button`
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
    background-color: #888;
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

const ScreenReaderText = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
`

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: gray;
`

const StyledProductLink = styled(LinkButton)`
  display: inline-flex;
`

const BackLink = styled(LinkButton)`
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
        opacity: 0.6;
      }
    }

    &::after {
      content: '';
      display: block;
      position: relative;
      width: 20px;
      height: 20px;
      border: solid #888;
      border-width: 3px 3px 0 0;
    }
  `
}

const NextButton = styled.button`
  ${getButtonCommonStyles}
  right: 0;
  width: 40px;
  height: 40px;

  &::after {
    transform: rotate(45deg);
  }
`

const PrevButton = styled.button`
  ${getButtonCommonStyles}
  left: 0;
  width: 40px;
  height: 40px;

  &::after {
    transform: rotate(-135deg);
  }
`

const DateWrap = styled.div`
  display: flex;
  gap: 0 24px;
  font-size: 14px;
`

const DateItem = styled.span``

const DateLabel = styled.span`
  font-weight: bold;
`

type modalState = {
  isOpen: boolean
  index: number
  width: number
  height: number
}

type Props = {
  data: ImageType[]
  currentCategoryName: string
  currentCategoryBody?: string
  pickUpPhoto?: ImageType
  link?: string
  backLink: string
  backText: string
  sinceAt?: Date
  updatedAt?: Date
}

export const PhotoContainer = ({
  data,
  pickUpPhoto,
  currentCategoryName,
  currentCategoryBody,
  link,
  backText,
  backLink,
  sinceAt,
  updatedAt,
}: Props) => {
  const [windowWidth] = useWindowSize()

  const [modalState, setModalState] = useState<modalState>({
    isOpen: false,
    index: 0,
    width: 0,
    height: 0,
  })
  const [isLoadingModalImage, setIsLoadingModalImage] = useState<boolean>(false)

  const onOpenImageModal = (index: number, width: number, height: number) => {
    if (windowWidth < 600) {
      return
    }
    setModalState({
      isOpen: true,
      index: index,
      width: width,
      height: height,
    })
    setIsLoadingModalImage(true)
  }

  const onCloseImageModal = () => {
    setModalState({
      isOpen: false,
      index: 0,
      width: 0,
      height: 0,
    })
  }

  const onPrev = () => {
    const maxCount = data.length - 1
    const prevNumber = modalState.index - 1
    const nextImageNumber = 0 > prevNumber ? maxCount : prevNumber

    setModalState({
      isOpen: true,
      index: nextImageNumber,
      width: modalState.width,
      height: modalState.height,
    })
  }

  const onNext = () => {
    const maxCount = data.length - 1
    const nextNumber = modalState.index + 1
    const nextImageNumber = maxCount < nextNumber ? 0 : nextNumber
    setModalState({
      isOpen: true,
      index: nextImageNumber,
      width: modalState.width,
      height: modalState.height,
    })
  }

  return (
    <StyledContainer size="lg">
      {pickUpPhoto && (
        <StyledPickUpImage
          src={`${pickUpPhoto.url}?fit=clip&w=1500&h=1000?fm=webp`}
          alt=""
          width={pickUpPhoto.width}
          height={pickUpPhoto.height}
          loading="eager"
          priority
        />
      )}

      <StyledHeading>{currentCategoryName}</StyledHeading>

      <DateWrap>
        <DateItem>
          <DateLabel>撮影開始:</DateLabel>
          {dayjs(sinceAt).format('YYYY年M月')}
        </DateItem>
        <DateItem>
          <DateLabel>更新:</DateLabel>
          {dayjs(updatedAt).format('YYYY年M月')}
        </DateItem>
      </DateWrap>

      {currentCategoryBody && <Description>{currentCategoryBody}</Description>}

      {link && (
        <StyledProductLink href={link} isexternal>
          プロダクトへ
        </StyledProductLink>
      )}

      <StyledImageList>
        {data.map((item, index) => (
          <ImageWrap
            key={item.url}
            onClick={() => onOpenImageModal(index, item.width, item.height)}
          >
            <StyledImage
              src={`${item.url}?fit=clip&w=1500&h=1500?fm=webp`}
              alt=""
              width={item.width}
              height={item.height}
              loading={index > 5 ? 'lazy' : 'eager'}
            />
          </ImageWrap>
        ))}
      </StyledImageList>
      <BackLink href={backLink}>{backText}</BackLink>
      <Modal open={modalState.isOpen} onClose={onCloseImageModal}>
        <ImageModal>
          <ModalImage
            src={`${data[modalState.index].url}?fit=clip&w=1500&h=1500?fm=webp`}
            width={modalState.width}
            height={modalState.height}
            alt=""
            onLoad={() => setIsLoadingModalImage(false)}
          />
          <PrevButton onClick={onPrev}>
            <ScreenReaderText>前へ</ScreenReaderText>
          </PrevButton>
          <NextButton onClick={onNext}>
            <ScreenReaderText>次へ</ScreenReaderText>
          </NextButton>
          <CloseModal onClick={onCloseImageModal}>
            <ScreenReaderText>閉じる</ScreenReaderText>
          </CloseModal>
          {isLoadingModalImage && <Loading>Loading...</Loading>}
        </ImageModal>
      </Modal>
    </StyledContainer>
  )
}
