import Image from 'next/image'
import Link from 'next/link'

type Props = {
  featureImage?: { url: string; width: number; height: number }
  images?: { url: string; width: number; height: number }[]
  categoryId?: string
  isPriority?: boolean
}

export const PhotoOverview = (props: Props) => {
  const { featureImage, images, isPriority, categoryId } = props

  const filteredImages = images?.slice(0, 2)

  return (
    <Link
      href={`/series/${categoryId}`}
      className="w-full md:hover:opacity-80 transition"
    >
      <div className="w-full md:flex md:flex-row gap-4 items-start">
        {featureImage && (
          <div className="relative w-full aspect-[3/2] md:w-1/2">
            <Image
              src={`${featureImage.url}?fit=clip&w=1500&h=1500?fm=webp`}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className="object-cover"
              priority={isPriority}
            />
          </div>
        )}
        {/* PC時: 2枚横並び, SP時: 下で横並び */}
        <div className="hidden md:flex flex-1 flex-row gap-4">
          {filteredImages?.map((image) => (
            <div key={image.url} className="relative flex-1 aspect-[3/2]">
              <Image
                src={`${image.url}?fit=clip&w=500&h=500?fm=webp`}
                alt=""
                fill
                className="object-contain height-auto"
                priority={isPriority}
              />
            </div>
          ))}
        </div>
      </div>
      {/* SP時: 2枚横並び */}
      <div className="flex flex-row gap-4 mt-4 md:hidden">
        {filteredImages?.map((image) => (
          <div key={image.url} className="relative flex-1 aspect-[3/2]">
            <Image
              src={`${image.url}?fit=clip&w=500&h=500?fm=webp`}
              alt=""
              fill
              className="object-contain height-auto"
              priority={isPriority}
            />
          </div>
        ))}
      </div>
    </Link>
  )
}
