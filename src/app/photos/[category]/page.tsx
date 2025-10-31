import { Container } from '@/src/components/Container'
import { getAllPhotoIds } from '../api/getAllPhotoIds'
import { getPhotos } from '../api/getPhotos'
import { PhotoGallery } from '@/src/components/PhotoGallery'
import { Metadata } from 'next'

type Props = { category: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Props>
}): Promise<Metadata> {
  const { category } = await params
  const { contents } = await getPhotos({})

  const currentCategory = contents.find((c) => c.id === category)

  return {
    title: `${currentCategory?.title} | Photo`,
    description: `${currentCategory?.title}の写真`,
    openGraph: {
      images: currentCategory
        ? `${currentCategory.feature_image.url}`
        : undefined,
    },
  }
}

export default async function PhotoDetail({
  params,
}: {
  params: Promise<Props>
}) {
  const { category } = await params
  const { contents } = await getPhotos({})

  const currentCategory = contents.find((item) => item.id === category)

  if (!currentCategory) {
    return <></>
  }

  return (
    <Container size="lg">
      <PhotoGallery
        currentCategoryName={currentCategory.title}
        data={currentCategory.photos || []}
        backText="View all Photos"
        backLink="/photos"
        updatedAt={currentCategory.updatedAt}
      />
    </Container>
  )
}

export async function generateStaticParams() {
  const ids = await getAllPhotoIds()

  const paths = ids.map((id) => {
    return {
      category: id,
    }
  })

  return paths
}
