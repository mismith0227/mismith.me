'use client'

import { useWindowSize } from '@/hooks/useWindowSize'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  images?: { url: string; width: number; height: number }[]
  categoryId?: string
  isPriority?: boolean
}

export const PhotoOverview = (props: Props) => {
  const { images, categoryId, isPriority } = props

  const [windowWidth] = useWindowSize()

  if (!windowWidth) {
    return null
  }

  const filteredImages =
    windowWidth > 899 ? images?.slice(0, 7) : images?.slice(0, 5)

  return (
    <Link
      href={`/series/${categoryId}`}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-self-center self-center gap-4 w-full mt-6 transition duration-200 hover:opacity-80 overViewList"
    >
      {filteredImages?.map((image) => (
        <div key={image.url} className="relative overflow-hidden h-0 pb-[100%]">
          <Image
            src={`${image.url}?fit=clip&w=500&h=500?fm=webp`}
            alt=""
            width={image.width}
            height={image.height}
            className="absolute w-full h-full object-cover"
            priority={isPriority}
          />
        </div>
      ))}
      <div className="relative overflow-hidden h-0 pb-[100%]">
        <div className="flex items-center justify-center absolute w-full h-full no-underline text-sm font-bold transition duration-200 after:content-['→'] after:inline-block after:ml-2 more">
          続きを見る
        </div>
      </div>
    </Link>
  )
}
