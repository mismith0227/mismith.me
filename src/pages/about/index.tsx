import * as React from 'react'
import { Layout } from '../../components/organisms/Layout'
import { AboutContent } from '../../components/organisms/AboutContent'
import Seo from '../../components/seo'

const About = () => (
  <Layout>
    <Seo title="About" description="About" />
    <AboutContent />
  </Layout>
)

export default About
