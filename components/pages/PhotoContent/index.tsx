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
  readonly isOpen: boolean
  readonly src: string
  readonly width: number
  readonly height: number
  readonly taken: string
}

export const PhotoContent = ({ data }: Props) => {
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
              src={item.image.url}
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
            src={modalState.src}
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
