import React from 'react'
import Layout from '../components/Layout'
import AboutContent from '../components/organisms/AboutContent'
import Meta from '../components/parts/Meta'

const RootIndex = () => {
  return (
    <Layout>
      <Meta
        pageTitle="Mismith Portfolio"
        pageDescription="Mismith Portfolio"
        pageLocation="/"
      />
      <AboutContent />
    </Layout>
  )
}

export default RootIndex
