import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { client } from '@/libs/client'
import { SeriesCategory } from '@/types/SeriesCategory'
import { HomeContainer } from '@/components/pages/HomeContainer'

type Props = {
  totalCount: number
  photoCategory: SeriesCategory[]
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
  const category = await client.get({
    endpoint: 'photo-category',
  })

  return {
    props: {
      photoCategory: category.contents,
    },
  }
}
