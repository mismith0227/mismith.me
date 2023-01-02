import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { PhotoContent } from '@/components/pages/PhotoContent'
import { Photo } from '@/types/Photo'
import { PhotoCategory } from '@/types/PhotoCategory'

type Props = {
  readonly content: Photo[]
  readonly totalCount: number
  readonly currentPage: number
  readonly photoCategory: PhotoCategory[]
  readonly currentCategory: string
}

const PhotoCategoryPage: NextPage<Props> = ({
  content,
  currentPage,
  currentCategory,
  photoCategory,
}) => {
  const meta = {
    title: `Gallery | mismith.me`,
    description: `ギャラリー`,
    path: `gallery/${currentCategory}`,
  }

  return (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <PhotoContent data={content} />
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
      limit: BLOG_PER_PAGE,
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
