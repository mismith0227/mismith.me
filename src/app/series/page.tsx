import { Container } from '@/src/components/Container'
import { PageTitle } from '@/src/components/PageTitle'
import { getPhotoCategories } from './api/getPhotoCategory'
import { Heading } from '@/src/components/Heading'
import Link from 'next/link'
import Image from 'next/image'

export default async function Series() {
  const { contents } = await getPhotoCategories({})

  const renderImages = (
    images?: { url: string; width: number; height: number }[],
    categoryId?: string
  ) => {
    if (!images) {
      return null
    }

    const filteredImages = images.slice(0, 7)

    return (
      <Link
        href={`/series/${categoryId}`}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-self-center self-center gap-4 w-full mt-6 transition duration-200 hover:opacity-80"
      >
        {filteredImages.map((image) => (
          <div
            key={image.url}
            className="relative overflow-hidden h-0 pb-[100%]"
          >
            <Image
              src={`${image.url}?fit=clip&w=500&h=500?fm=webp`}
              alt=""
              width={image.width}
              height={image.height}
              className="absolute w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="relative overflow-hidden h-0 pb-[100%]">
          <div className="flex items-center justify-center absolute w-full h-full no-underline text-black text-sm font-bold bg-white transition duration-200 after:content-['→'] after:inline-block after:ml-2">
            続きを見る
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Container size="lg">
      <PageTitle text="Series" />

      <div className="mt-16 gap-x-0 gap-y-20 md:flex md:flex-col md:gap-x-0 md:gap-y-40 md:max-w-[900px]">
        {contents.map((c) => (
          <div key={c.id}>
            <Heading level={2}>{c.category_name}</Heading>
            <div className="mt-2 whitespace-pre-wrap">{c.description}</div>
            {renderImages(c.images, c.id)}
          </div>
        ))}
      </div>
    </Container>
  )
}
