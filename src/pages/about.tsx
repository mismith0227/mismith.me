import React from 'react'
import Meta from '../components/parts/Meta'
import Layout from '../components/Layout'
import AboutContent from '../components/organisms/AboutContent'

const About = props => {
  return (
    <Layout location={props.location}>
      <Meta
        pageTitle="About"
        pageDescription="このサイトについて"
        pageLocation={props.location.href}
      />
      <AboutContent />
    </Layout>
  )
}

export default About
