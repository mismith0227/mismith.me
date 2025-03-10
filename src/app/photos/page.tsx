import { Container } from '@/src/components/Container'
import { PageTitle } from '@/src/components/PageTitle'
import { getPhotos } from './api/getPhotos'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

const title = 'Photo'
const description = 'Photo一覧'

export const metadata: Metadata = {
  title: title,
  description: description,
}

export default async function Photos() {
  const { contents } = await getPhotos({})

  return (
    <Container size="lg">
      <PageTitle text="Photos" />
      <div className="grid-cols-1 gap-y-20 grid md:grid-cols-2 md:gap-y-20 gap-x-10 max-w-[900px]">
        {contents.map((c, index) => (
          <div key={c.id}>
            <h2 className="text-[24px] font-bold">{c.title}</h2>
            <Link
              href={`/photos/${c.id}`}
              className="relative flex flex-col before:content-[''] before:block before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-30 before:bg-black/20 before:transition-all after:content-['View_More'] after:absolute after:bottom-2 after:right-2 after:z-40 after:text-white after:text-sm hover:before:bg-black/40"
            >
              <div className="relative">
                <Image
                  src={c.feature_image.url}
                  alt={c.title}
                  width={c.feature_image.width}
                  height={c.feature_image.height}
                  className="w-full h-full object-cover align-bottom"
                  priority={index < 4}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}
