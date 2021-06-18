import * as React from 'react'
import { Layout } from '../../components/organisms/Layout'
import Seo from '../../components/seo'
import { ContactContent } from '../../components/organisms/ContactContent'

const Contact = () => (
  <Layout>
    <Seo title="Contact" description="Contact" />
    <ContactContent />
  </Layout>
)

export default Contact
