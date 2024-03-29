import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { PhotoContainer } from '@/components/pages/PhotoContainer'
import { Image } from '@/types/Photo'
import { PhotoCategory } from '@/types/PhotoCategory'

type Props = {
  content: Image[]
  photoCategory: PhotoCategory[]
  currentCategoryId: string
  currentCategoryName: string
  currentCategoryDescription: string
  pickUpPhoto?: Image
}

const PhotoCategoryPage: NextPage<Props> = ({
  content,
  currentCategoryId,
  currentCategoryName,
  photoCategory,
  pickUpPhoto,
  currentCategoryDescription,
}) => {
  const meta = {
    title: `${currentCategoryName} | Series | mismith`,
    description: currentCategoryDescription || 'シリーズ',
    path: `series/${currentCategoryId}`,
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
      <PhotoContainer
        data={content}
        pickUpPhoto={pickUpPhoto}
        currentCategoryName={currentCategoryName}
        currentCategoryDescription={currentCategoryDescription}
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

  const currentCategory: PhotoCategory | undefined = category.contents.find(
    (item: PhotoCategory) => item.id === params.category
  )

  return {
    props: {
      content: currentCategory ? currentCategory.images : [],
      photoCategory: category.contents,
      currentCategoryId: currentCategory ? currentCategory.id : '',
      currentCategoryName: currentCategory ? currentCategory.category_name : '',
      currentCategoryDescription:
        currentCategory && currentCategory.description
          ? currentCategory.description
          : null,
      pickUpPhoto:
        currentCategory && currentCategory.feature_image
          ? currentCategory.feature_image
          : null,
    },
  }
}
