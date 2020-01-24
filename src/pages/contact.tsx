import React from 'react'
import Layout from '../components/Layout'
import Meta from '../components/parts/Meta'
import ContactContent from '../components/organisms/ContactContent'

const ContactIndex = () => {
  return (
    <Layout>
      <Meta
        pageTitle="Contact"
        pageDescription="Contact"
        pageLocation="/contact/"
      />
      <ContactContent />
    </Layout>
  )
}

export default ContactIndex
