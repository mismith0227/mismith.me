import { Modal } from '@mui/material'
import { useState } from 'react'
import {
  Wrap,
  StyledMasonry,
  StyledImage,
  ImageModal,
  ModalImage,
  CloseModal,
  ScreenReaderText,
  ImageWrap,
} from './styles'
import { Props } from './types'

export type modalState = {
  readonly isOpen: boolean
  readonly src: string
  readonly width: number
  readonly height: number
}

export const PhotoContent = ({ data }: Props) => {
  const [modalState, setModalState] = useState<modalState>({
    isOpen: false,
    src: '',
    width: 0,
    height: 0,
  })

  const onOpenImageModal = (src: string, width: number, height: number) => {
    setModalState({
      isOpen: true,
      src: src,
      width: width,
      height: height,
    })
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
    <Wrap>
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
                item.image.height
              )
            }
          >
            <StyledImage
              src={item.image.url}
              alt={item.title}
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
          <CloseModal onClick={onCloseImageModal}>
            <ScreenReaderText>閉じる</ScreenReaderText>
          </CloseModal>
        </ImageModal>
      </Modal>
    </Wrap>
  )
}
