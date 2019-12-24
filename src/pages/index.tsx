import React from 'react'
import Layout from '../components/Layout'
import HomeContent from '../components/organisms/HomeContent'
import Meta from '../components/parts/Meta'

const RootIndex = props => {
  return (
    <Layout location={props.location}>
      <Meta
        pageTitle="Mismith Portfolio"
        pageDescription="Mismith Portfolio"
        pageLocation={props.location.href}
      />
      <HomeContent />
    </Layout>
  )
}

export default RootIndex
