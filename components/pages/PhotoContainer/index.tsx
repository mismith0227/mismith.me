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
} from './styles'
import { Props } from './types'
import { useWindowSize } from '@/hooks/useWindowSize'

export type modalState = {
  isOpen: boolean
  src: string
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
    src: '',
    width: 0,
    height: 0,
  })
  const [isLoadingModalImage, setIsLoadingModalImage] = useState<boolean>(false)

  const onOpenImageModal = (src: string, width: number, height: number) => {
    if (windowWidth < 600) {
      return
    }
    setModalState({
      isOpen: true,
      src: src,
      width: width,
      height: height,
    })
    setIsLoadingModalImage(true)
  }

  const onCloseImageModal = () => {
    setModalState({
      isOpen: false,
      src: '',
      width: 0,
      height: 0,
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
        {data.map((item) => (
          <ImageWrap
            key={item.url}
            onClick={() => onOpenImageModal(item.url, item.width, item.height)}
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
            src={`${modalState.src}?fit=clip&w=1500&h=1500?fm=webp`}
            width={modalState.width}
            height={modalState.height}
            alt=""
            onLoadingComplete={() => setIsLoadingModalImage(false)}
          />
          <CloseModal onClick={onCloseImageModal}>
            <ScreenReaderText>閉じる</ScreenReaderText>
          </CloseModal>
          {isLoadingModalImage && <Loading>Loading...</Loading>}
        </ImageModal>
      </Modal>
    </StyledContainer>
  )
}
