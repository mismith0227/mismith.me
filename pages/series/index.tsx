import { GetStaticProps, NextPage } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { Image } from '@/types/Photo'
import { PhotoCategory } from '@/types/PhotoCategory'
import { SeriesContainer } from '@/components/pages/SeriesContainer'

type Props = {
  photoCategory: PhotoCategory[]
  currentCategoryDescription: string
  pickUpPhoto?: Image
}

const SeriesPage: NextPage<Props> = ({
  photoCategory,
  pickUpPhoto,
  currentCategoryDescription,
}) => {
  const meta = {
    title: `Series | mismith`,
    description: currentCategoryDescription || 'シリーズ',
    path: `series`,
    ogpImageUrl: pickUpPhoto?.url,
  }

  console.log(photoCategory)

  return (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        ogpImageUrl={meta.ogpImageUrl}
      />
      <SeriesContainer data={photoCategory} />
    </Layout>
  )
}
export default SeriesPage

export const getStaticProps: GetStaticProps = async (context) => {
  const category = await client.get({
    endpoint: 'photo-category',
  })

  return {
    props: {
      photoCategory: category.contents,
    },
  }
}
