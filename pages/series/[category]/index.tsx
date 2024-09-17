import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { PhotoContainer } from '@/components/pages/PhotoContainer'
import { client } from '@/libs/client'
import { Image } from '@/types/Photo'
import { SeriesCategory } from '@/types/SeriesCategory'

type Props = {
  content: Image[]
  currentCategoryName: string
  currentCategoryBody: string
  pickUpPhoto?: Image
  link?: string
  sinceAt?: Date
  updatedAt?: Date
}

const PhotoCategoryPage: NextPage<Props> = ({
  content,
  currentCategoryName,
  pickUpPhoto,
  currentCategoryBody,
  link,
  sinceAt,
  updatedAt,
}) => {
  const meta = {
    title: `${currentCategoryName} | Series | mismith`,
    description: currentCategoryBody || 'シリーズ',
    path: `series`,
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
        pickUpPhoto={pickUpPhoto}
        currentCategoryName={currentCategoryName}
        currentCategoryBody={currentCategoryBody}
        link={link}
        backText="View all series"
        backLink="/series"
        sinceAt={sinceAt}
        updatedAt={updatedAt}
      />
    </Layout>
  )
}
export default PhotoCategoryPage

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'photo-category' })

  const paths = data.contents.map(
    (content: { id: string }) => `/series/${content.id}`
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
    endpoint: 'photo-category',
  })

  const currentCategory: SeriesCategory | undefined = category.contents.find(
    (item: SeriesCategory) => item.id === params.category
  )

  console.log(currentCategory)

  return {
    props: {
      content: currentCategory ? currentCategory.images : [],
      photoCategory: category.contents,
      currentCategoryName: currentCategory ? currentCategory.category_name : '',
      currentCategoryBody:
        currentCategory && currentCategory.body ? currentCategory.body : null,
      pickUpPhoto:
        currentCategory && currentCategory.feature_image
          ? currentCategory.feature_image
          : null,
      link: currentCategory?.link ? currentCategory?.link : '',
      sinceAt: currentCategory?.sinceAt,
      updatedAt: currentCategory?.updatedAt,
    },
  }
}
