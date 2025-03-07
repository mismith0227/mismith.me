import { Container } from '@/src/components/Container'
import { PageTitle } from '@/src/components/PageTitle'
import { getAllPhotoIds } from '../api/getAllPhotoIds'
import { getPhotos } from '../api/getPhotos'
import { PhotoGallery } from '@/src/components/PhotoGallery'

export default async function PhotoDetail({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const { contents } = await getPhotos({})

  const currentCategory = contents.find((item) => item.id === category)

  if (!currentCategory) {
    return <></>
  }

  return (
    <Container size="lg">
      <PageTitle text="Series" />

      <PhotoGallery
        currentCategoryName={currentCategory.title}
        data={currentCategory.photos || []}
        backText="View all series"
        backLink="/series"
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
