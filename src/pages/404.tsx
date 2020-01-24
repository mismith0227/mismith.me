import React from 'react'
import Layout from '../components/Layout'
import Meta from '../components/parts/Meta'
import NotFoundContent from '../components/organisms/NotFoundContent'

const NotFoundIndex = () => {
  return (
    <Layout>
      <Meta pageTitle="Not Found" pageDescription="Not Found" />
      <NotFoundContent />>
    </Layout>
  )
}

export default NotFoundIndex
