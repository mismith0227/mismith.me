import { Modal } from '@mui/material'
import dayjs from 'dayjs'
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
  Taken,
  StyledHeading,
  StyledPickUpImage,
  Description,
} from './styles'
import { Props } from './types'

export type modalState = {
  isOpen: boolean
  src: string
  width: number
  height: number
  taken: string
}

export const PhotoContainer = ({
  data,
  pickUpPhoto,
  currentCategoryName,
  currentCategoryDescription,
}: Props) => {
  const [modalState, setModalState] = useState<modalState>({
    isOpen: false,
    src: '',
    width: 0,
    height: 0,
    taken: '',
  })

  const onOpenImageModal = (
    src: string,
    width: number,
    height: number,
    taken: string
  ) => {
    setModalState({
      isOpen: true,
      src: src,
      width: width,
      height: height,
      taken: taken,
    })
  }

  const onCloseImageModal = () => {
    setModalState({
      isOpen: false,
      src: '',
      width: 0,
      height: 0,
      taken: '',
    })
  }

  return (
    <StyledContainer size="full">
      {pickUpPhoto && (
        <StyledPickUpImage
          src={`${pickUpPhoto.image.url}?fit=clip&w=1200&h=1800?fm=webp`}
          alt={pickUpPhoto.title || ''}
          width={pickUpPhoto.image.width}
          height={pickUpPhoto.image.height}
          loading="eager"
        />
      )}

      <StyledHeading>{currentCategoryName}</StyledHeading>

      {currentCategoryDescription && (
        <Description>{currentCategoryDescription}</Description>
      )}

      <StyledImageList>
        {data.map((item, index) => (
          <ImageWrap
            key={item.id}
            onClick={() =>
              onOpenImageModal(
                item.image.url,
                item.image.width,
                item.image.height,
                item.date
              )
            }
          >
            <StyledImage
              src={`${item.image.url}?fit=clip&w=800&h=800?fm=webp`}
              alt={item.title || ''}
              width={item.image.width}
              height={item.image.height}
              loading="lazy"
            />
          </ImageWrap>
        ))}
      </StyledImageList>
      <Modal open={modalState.isOpen} onClose={onCloseImageModal}>
        <ImageModal>
          <ModalImage
            src={`${modalState.src}?fm=webp`}
            width={modalState.width}
            height={modalState.height}
            alt=""
          />
          <Taken>Taken: {dayjs(modalState.taken).format('YYYY年M月D日')}</Taken>
          <CloseModal onClick={onCloseImageModal}>
            <ScreenReaderText>閉じる</ScreenReaderText>
          </CloseModal>
        </ImageModal>
      </Modal>
    </StyledContainer>
  )
}
