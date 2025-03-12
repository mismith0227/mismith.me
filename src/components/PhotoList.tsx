'use client'

import { useWindowSize } from '@/hooks/useWindowSize'
import { Image as ImageType } from '@/types/Photo'
import Image from 'next/image'
import { useState } from 'react'
import { PhotoModal } from './PhotoModal'

type Props = {
  data: ImageType[]
}

export const PhotoList = (props: Props) => {
  const { data } = props
  const [windowWidth] = useWindowSize()

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [initNumberModal, setInitNumberModal] = useState<number | null>(null)

  const onOpenImageModal = (index: number) => {
    if (windowWidth < 600) {
      return
    }
    setIsOpenModal(true)
    setInitNumberModal(index)

    // setIsLoadingModalImage(true)
  }

  const onCloseImageModal = () => {
    setIsOpenModal(false)
    setInitNumberModal(null)
  }

  return (
    <>
      <div className="grid-cols-1 mt-[40px] md:grid-cols-3 grid justify-self-center self-center gap-4 mt-16 w-full">
        {data.map((d, index) => (
          <div
            key={d.url}
            className="relative overflow-hidden md:h-0 md:pb-[100%] md:hover:cursor-zoom-in"
            onClick={() => onOpenImageModal(index)}
          >
            <Image
              src={`${d.url}?fit=clip&w=1500&h=1500?fm=webp`}
              alt=""
              width={d.width}
              height={d.height}
              loading={index > 5 ? 'lazy' : 'eager'}
              className="md:absolute w-full h-full object-contain transition duration-200"
            />
          </div>
        ))}
      </div>

      <PhotoModal
        data={data}
        initialCount={initNumberModal}
        closeModal={onCloseImageModal}
        isOpen={isOpenModal}
      />
    </>
  )
}
