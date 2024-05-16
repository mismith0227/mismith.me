import { NextPage } from 'next'

import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { RequestContainer } from '@/components/pages/RequestContainer'

const Policy: NextPage = () => {
  const meta = {
    title: 'Request | mismith',
    description: 'ご依頼',
    path: 'request',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <RequestContainer />
    </Layout>
  )
}

export default Policy
