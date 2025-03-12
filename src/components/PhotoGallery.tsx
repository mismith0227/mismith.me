import Image from 'next/image'
import { Image as ImageType } from '@/types/Photo'
import { Heading } from './Heading'
import { LinkButton } from './LinkButton'
import { formatDate } from '@/utils/formatDate'
import { PhotoList } from './PhotoList'

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

      <PhotoList data={data} />

      <LinkButton href={backLink} className="mt-20 mx-auto w-[min(100%,300px)]">
        {backText}
      </LinkButton>
    </>
  )
}
