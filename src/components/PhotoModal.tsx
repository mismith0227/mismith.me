'use client'

import Modal from 'react-modal'

import { Image as ImageType } from '@/types/Photo'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  data: ImageType[]
  initialCount: number | null
  isOpen: boolean
  closeModal: () => void
}

Modal.setAppElement('#main')

export const PhotoModal = (props: Props) => {
  const { data, isOpen, closeModal, initialCount } = props

  const [currentCount, setCurrentCount] = useState<number | null>(null)

  useEffect(() => {
    setCurrentCount(initialCount)
  }, [initialCount])

  const onPrev = () => {
    if (currentCount === null) return
    const maxCount = data.length - 1
    const prevNumber = currentCount - 1
    const prevImageNumber = 0 > prevNumber ? maxCount : prevNumber

    setCurrentCount(prevImageNumber)
  }

  const onNext = () => {
    if (currentCount === null) return

    const maxCount = data.length - 1
    const nextNumber = currentCount + 1
    const nextImageNumber = maxCount < nextNumber ? 0 : nextNumber
    setCurrentCount(nextImageNumber)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="w-[98vw] h-[90vh] p-8 px-2 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[96vw] md:h-[96vh] flex items-center justify-center p-8 md:px-6 box-border"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {currentCount !== null && (
        <Image
          src={`${data[currentCount].url}?fit=clip&w=1500&h=1500?fm=webp`}
          alt=""
          width={data[currentCount].width}
          height={data[currentCount].height}
          className="w-full h-full object-contain"
        />
      )}

      <button
        onClick={closeModal}
        className="fixed top-3 right-3 p-0 w-6 h-6 border-0 bg-transparent hover:cursor-pointer before:content-[''] before:block before:w-full before:h-[2px] before:bg-gray-500 before:absolute before:inset-0 before:m-auto before:rotate-45 after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-500 after:absolute after:inset-0 after:m-auto after:rotate-[-45deg]"
      >
        <span className="clip-rect-[1px_1px_1px_1px] absolute h-px w-px overflow-hidden">
          閉じる
        </span>
      </button>

      <button
        onClick={onNext}
        className="absolute top-0 bottom-0 right-0 w-10 h-10 m-auto border-0 p-0 flex items-center justify-center bg-transparent hover:cursor-pointer hover:transition-all hover:duration-200 after:content-[''] after:block after:relative after:w-5 after:h-5 after:border-gray-500 after:border-t-3 after:border-r-3 hover:after:opacity-60 after:rotate-45"
      >
        <span className="clip-rect-[1px_1px_1px_1px] absolute h-px w-px overflow-hidden">
          次へ
        </span>
      </button>

      <button
        onClick={onPrev}
        className="absolute top-0 bottom-0 left-0 w-10 h-10 m-auto border-0 p-0 flex items-center justify-center bg-transparent hover:cursor-pointer hover:transition-all hover:duration-200 after:content-[''] after:block after:relative after:w-5 after:h-5 after:border-gray-500 after:border-t-3 after:border-r-3 hover:after:opacity-60 after:rotate-225"
      >
        <span className="clip-rect-[1px_1px_1px_1px] absolute h-px w-px overflow-hidden">
          前へ
        </span>
      </button>
    </Modal>
  )
}
