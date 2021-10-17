import * as React from 'react'
import { Layout } from '../../components/organisms/Layout'
import Seo from '../../components/seo'
import { AboutContent } from '../../components/organisms/AboutContent'

const About = () => {
  const meta = {
    title: 'Privacy Policy',
    description: 'プライバシーポリシー',
    path: 'about',
  }

  return (
    <Layout path={meta.path} disableLoading>
      <Seo title={meta.title} description={meta.description} />
      <AboutContent />
    </Layout>
  )
}

export default About
