import type { NextPage } from 'next'
import { useState } from 'react'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { HomeContent } from '@/components/pages/HomeContent'

const Home: NextPage = () => {
  const [isCanvasLoading, setIsCanvasLoading] = useState<boolean>(true)
  const meta = {
    title: 'Home',
    description: 'トップページ',
    path: 'home',
  }

  return (
    <Layout path={meta.path} isCanvasLoading={isCanvasLoading}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <HomeContent onCreated={(value) => setIsCanvasLoading(value)} />
    </Layout>
  )
}

export default Home
