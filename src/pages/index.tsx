import React from 'react'
import Layout from '../components/Layout'
import HomeContent from '../components/organisms/HomeContent'
import Meta from '../components/parts/Meta'

const RootIndex = props => {
  console.log(props)
  return (
    <Layout>
      <Meta
        pageTitle="Mismith Portfolio"
        pageDescription="Mismith Portfolio"
        pageLocation="/"
      />
      <HomeContent />
    </Layout>
  )
}

export default RootIndex
