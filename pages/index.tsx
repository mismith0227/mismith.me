import type { NextPage } from 'next'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { HomeContent } from '@/components/pages/HomeContent'

const Home: NextPage = () => {
  const meta = {
    title: 'Home | mismith.me',
    description: 'トップページ',
    path: 'home',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <HomeContent />
    </Layout>
  )
}

export default Home
