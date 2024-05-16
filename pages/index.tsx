import type { NextPage } from 'next'

import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { HomeContainer } from '@/components/pages/HomeContainer'

const Home: NextPage = () => {
  const meta = {
    title: 'Home | mismith',
    description: 'トップページ',
    path: 'home',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />

      <HomeContainer />
    </Layout>
  )
}

export default Home
