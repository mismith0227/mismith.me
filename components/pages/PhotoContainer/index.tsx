import { Modal } from '@mui/material'
import dayjs from 'dayjs'
import { useState } from 'react'
import {
  StyledContainer,
  StyledMasonry,
  StyledImage,
  ImageModal,
  ModalImage,
  CloseModal,
  ScreenReaderText,
  ImageWrap,
  Taken,
  StyledHeading,
} from './styles'
import { Props } from './types'

export type modalState = {
  isOpen: boolean
  src: string
  width: number
  height: number
  taken: string
}

export const PhotoContainer = ({ data }: Props) => {
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
      <StyledHeading>Gallery</StyledHeading>

      <StyledMasonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((item) => (
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
              src={`${item.image.url}?w=400?fm=webp`}
              alt={item.title || ''}
              width={item.image.width}
              height={item.image.height}
            />
          </ImageWrap>
        ))}
      </StyledMasonry>
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
