import { GetStaticProps, NextPage } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { Image } from '@/types/Photo'
import { PhotosCategory } from '@/types/PhotosCategory'
import { PhotosContainer } from '@/components/pages/PhotosContainer'

type Props = {
  photoCategory: PhotosCategory[]
  currentCategoryDescription: string
  pickUpPhoto?: Image
}

const PhotosPage: NextPage<Props> = ({
  photoCategory,
  pickUpPhoto,
  currentCategoryDescription,
}) => {
  const meta = {
    title: `Photos | mismith`,
    description: currentCategoryDescription || 'Photos',
    path: `photos`,
    ogpImageUrl: pickUpPhoto?.url,
  }

  return (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        ogpImageUrl={meta.ogpImageUrl}
      />
      <PhotosContainer data={photoCategory} />
    </Layout>
  )
}
export default PhotosPage

export const getStaticProps: GetStaticProps = async (context) => {
  const category = await client.get({
    endpoint: 'photos',
  })

  return {
    props: {
      photoCategory: category.contents,
    },
  }
}
