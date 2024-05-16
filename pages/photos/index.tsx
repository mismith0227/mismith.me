import { GetStaticProps, NextPage } from 'next'

import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { PhotosContainer } from '@/components/pages/PhotosContainer'
import { client } from '@/libs/client'
import { Image } from '@/types/Photo'
import { PhotosCategory } from '@/types/PhotosCategory'

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
    <Layout path={meta.path}>
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
