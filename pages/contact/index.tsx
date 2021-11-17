import * as React from 'react'
import { Layout } from '@/components/organisms/Layout'
import Seo from '@/components/seo'
import { ContactContent } from '@/components/organisms/ContactContent'

const Contact = () => {
  const meta = {
    title: 'Contact',
    description: 'お問い合わせページ',
    path: 'contact',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} />
      <ContactContent />
    </Layout>
  )
}

export default Contact
