import { Modal } from '@mui/material'
import { useState } from 'react'
import {
  StyledContainer,
  StyledImageList,
  StyledImage,
  ImageModal,
  ModalImage,
  CloseModal,
  ScreenReaderText,
  ImageWrap,
  StyledHeading,
  StyledPickUpImage,
  Description,
  Loading,
  StyledProductLink,
  BackLink,
  NextButton,
  PrevButton,
} from './styles'
import { Props } from './types'
import { useWindowSize } from '@/hooks/useWindowSize'

export type modalState = {
  isOpen: boolean
  index: number
  width: number
  height: number
}

export const PhotoContainer = ({
  data,
  pickUpPhoto,
  currentCategoryName,
  currentCategoryBody,
  link,
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
              loading="lazy"
            />
          </ImageWrap>
        ))}
      </StyledImageList>
      <BackLink href={`/series`}>Seriesへ</BackLink>
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
