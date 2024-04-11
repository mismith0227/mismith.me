import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { client } from '@/libs/client'
import { PhotoCategory } from '@/types/PhotoCategory'
import { HomeContainer } from '@/components/pages/HomeContainer'

type Props = {
  totalCount: number
  photoCategory: PhotoCategory[]
}

const Home: NextPage<Props> = ({ photoCategory }) => {
  const meta = {
    title: 'Home | mismith',
    description: 'トップページ',
    path: 'home',
  }

  return (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />

      <HomeContainer />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: 'photo',
    queries: { limit: 10, offset: 0, filters: 'pickUp[equals]true' },
  })

  const category = await client.get({
    endpoint: 'photo-category',
  })

  return {
    props: {
      photos: data.contents,
      totalCount: data.totalCount,
      photoCategory: category.contents,
    },
  }
}
