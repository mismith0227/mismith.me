import React from 'react'
import Layout from '../components/Layout'
import Meta from '../components/parts/Meta'
import ThanksContent from '../components/organisms/ThanksContent'

const ThanksIndex = () => {
  return (
    <Layout>
      <Meta
        pageTitle="Thanks"
        pageDescription="Thanks"
        pageLocation="/thanks/"
      />
      <ThanksContent />
    </Layout>
  )
}

export default ThanksIndex
