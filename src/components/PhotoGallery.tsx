'use client'

import Image from 'next/image'
import { Image as ImageType } from '@/types/Photo'
import { Heading } from './Heading'
import { LinkButton } from './LinkButton'
import { formatDate } from '@/utils/formatDate'
import { PhotoModal } from './PhotoModal'
import { useState } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'

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

export const PhotoGallery = (props: Props) => {
  const {
    pickUpPhoto,
    currentCategoryName,
    currentCategoryBody,
    link,
    data,
    backText,
    backLink,
    sinceAt,
    updatedAt,
  } = props

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [initNumberModal, setInitNumberModal] = useState<number | null>(null)
  const [windowWidth] = useWindowSize()

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
      {pickUpPhoto && (
        <Image
          src={`${pickUpPhoto.url}?fit=clip&w=1500&h=1000?fm=webp`}
          alt=""
          width={pickUpPhoto.width}
          height={pickUpPhoto.height}
          loading="eager"
          priority
        />
      )}
      <Heading level={1}>{currentCategoryName}</Heading>

      <div className="flex gap-x-6 text-sm">
        {sinceAt && (
          <span>
            <span className="font-bold mr-[4px]">撮影開始:</span>
            {formatDate(sinceAt, 'YYYY年M月')}
          </span>
        )}
        {updatedAt && (
          <span>
            <span className="font-bold mr-[4px]">最終更新:</span>
            {formatDate(updatedAt, 'YYYY年M月')}
          </span>
        )}
      </div>

      {currentCategoryBody && (
        <div className="max-w-[980px] whitespace-pre-wrap break-words mt-[40px]">
          {currentCategoryBody}
        </div>
      )}

      {link && (
        <LinkButton href={link} isexternal className="inline-block">
          プロダクトへ
        </LinkButton>
      )}

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
      <LinkButton href={backLink} className="mt-20 mx-auto w-[min(100%,300px)]">
        {backText}
      </LinkButton>

      <PhotoModal
        data={data}
        initialCount={initNumberModal}
        closeModal={onCloseImageModal}
        isOpen={isOpenModal}
      />
    </>
  )
}
