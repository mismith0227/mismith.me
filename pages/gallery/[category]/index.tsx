import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { PhotoContainer } from '@/components/pages/PhotoContainer'
import { Photo } from '@/types/Photo'
import { PhotoCategory } from '@/types/PhotoCategory'

type Props = {
  content: Photo[]
  photoCategory: PhotoCategory[]
  currentCategory: string
}

const PhotoCategoryPage: NextPage<Props> = ({
  content,
  currentCategory,
  photoCategory,
}) => {
  const meta = {
    title: `Gallery | mismith.me`,
    description: 'ギャラリー',
    path: `gallery/${currentCategory}`,
  }

  return (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <PhotoContainer data={content} />
    </Layout>
  )
}
export default PhotoCategoryPage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context

  if (!params?.category) {
    throw new Error('Error: ID not found')
  }

  const data = await client.get({
    endpoint: 'photo',
    queries: {
      limit: 99,
      filters: `category[equals]${params.category}`,
    },
  })

  const category = await client.get({
    endpoint: 'photo-category',
  })

  return {
    props: {
      content: data.contents,
      totalCount: data.totalCount,
      photoCategory: category.contents,
      currentCategory: params.category,
    },
  }
}
