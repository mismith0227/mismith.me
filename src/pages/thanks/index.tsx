import * as React from 'react'
import { Layout } from '../../components/organisms/Layout'
import Seo from '../../components/seo'
import { ThanksContent } from '../../components/organisms/ThanksContent'

const Thanks = () => (
  <Layout>
    <Seo title="Thanks" description="Thanks" />
    <ThanksContent />
  </Layout>
)

export default Thanks
