import { Container } from '@/src/components/Container'
import { getPhotoCategories } from '../api/getPhotoCategory'
import { PhotoGallery } from '@/src/components/PhotoGallery'
import { getAllSeriesIds } from '../api/getAllSeriesIds'
import { Metadata } from 'next'

type Props = { id: string; category: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Props>
}): Promise<Metadata> {
  const { category } = await params
  const { contents } = await getPhotoCategories({})

  const currentCategory = contents.find((c) => c.id === category)

  return {
    title: `${currentCategory?.category_name}`,
    description: `${currentCategory?.category_name}`,
    openGraph: {
      url: contents[0].feature_image?.url,
    },
  }
}

export default async function SeriesCategory({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const { contents } = await getPhotoCategories({})

  const currentCategory = contents.find((item) => item.id === category)

  if (!currentCategory) {
    return <></>
  }

  return (
    <Container size="lg">
      <PhotoGallery
        pickUpPhoto={currentCategory.feature_image}
        currentCategoryName={currentCategory.category_name}
        currentCategoryBody={currentCategory.body}
        link={currentCategory.link}
        data={currentCategory.images || []}
        backText="View all series"
        backLink="/series"
        sinceAt={currentCategory.sinceAt}
        updatedAt={currentCategory.updatedAt}
      />
    </Container>
  )
}

export async function generateStaticParams() {
  const ids = await getAllSeriesIds()

  const paths = ids.map((id) => {
    return {
      category: id,
    }
  })

  return paths
}
