import * as React from 'react'
import { Layout } from '../components/organisms/Layout'
import Seo from '../components/seo'
import { HomeContent } from '../components/organisms/HomeContent'

const IndexPage = () => {
  const meta = {
    title: 'Home',
    description: 'トップページ',
    path: 'home',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} />
      <HomeContent />
    </Layout>
  )
}

export default IndexPage
