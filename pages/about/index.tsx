import { NextPage } from 'next'

import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { AboutContainer } from '@/components/pages/AboutContainer'

const About: NextPage = () => {
  const meta = {
    title: 'About | mismith',
    description: 'プライバシーポリシー',
    path: 'about',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <AboutContainer />
    </Layout>
  )
}

export default About
