import { NextPage } from 'next'

import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { NotFoundContainer } from '@/components/pages/NotFoundContainer'

const NotFoundPage: NextPage = () => {
  const meta = {
    title: '404: Not found',
    description: '404 not found',
    path: '404',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <NotFoundContainer />
    </Layout>
  )
}

export default NotFoundPage
