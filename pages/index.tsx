import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { HomeContent } from '@/components/pages/HomeContent'
import { client } from '@/libs/client'
import { Photo } from '@/types/Photo'
import { PhotoCategory } from '@/types/PhotoCategory'
import { PhotoContent } from '@/components/pages/PhotoContent'

type Props = {
  readonly photos: Photo[]
  readonly totalCount: number
  readonly category: PhotoCategory[]
}

const Home: NextPage<Props> = ({ photos, totalCount, category }) => {
  const meta = {
    title: 'Home | mismith.me',
    description: 'トップページ',
    path: 'home',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />

      <PhotoContent data={photos} category={category} />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: 'photo',
    queries: { limit: 20, offset: 0 },
  })

  const category = await client.get({
    endpoint: 'photo-category',
  })

  return {
    props: {
      photos: data.contents,
      totalCount: data.totalCount,
      category: category.contents,
    },
  }
}
