import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { PhotoContainer } from '@/components/pages/PhotoContainer'
import { client } from '@/libs/client'
import { Image } from '@/types/Photo'
import { PhotosCategory } from '@/types/PhotosCategory'

type Props = {
  content: Image[]
  currentCategoryTitle: string
  currentCategoryBody: string
  pickUpPhoto?: Image
  link?: string
}

const PhotoCategoryPage: NextPage<Props> = ({
  content,
  currentCategoryTitle,
  pickUpPhoto,
  currentCategoryBody,
  link,
}) => {
  const meta = {
    title: `${currentCategoryTitle} | Photos | mismith`,
    description: currentCategoryBody || 'Photos',
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
      <PhotoContainer
        data={content}
        currentCategoryName={currentCategoryTitle}
        currentCategoryBody={currentCategoryBody}
        link={link}
        backText="View all photos"
        backLink="/photos"
      />
    </Layout>
  )
}
export default PhotoCategoryPage

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'photos' })

  const paths = data.contents.map(
    (content: { id: string }) => `/photos/${content.id}`
  )

  return {
    fallback: false,
    paths,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context

  if (!params?.category) {
    throw new Error('Error: ID not found')
  }

  const category = await client.get({
    endpoint: 'photos',
  })

  const currentCategory: PhotosCategory | undefined = category.contents.find(
    (item: PhotosCategory) => item.id === params.category
  )

  return {
    props: {
      content: currentCategory ? currentCategory.photos : [],
      currentCategoryTitle: currentCategory ? currentCategory.title : '',
      pickUpPhoto:
        currentCategory && currentCategory.feature_image
          ? currentCategory.feature_image
          : null,
    },
  }
}
