import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { ContactContent } from '@/components/pages/ContactContent'

const Contact = () => {
  const meta = {
    title: 'Contact',
    description: 'お問い合わせページ',
    path: 'contact',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <ContactContent />
    </Layout>
  )
}

export default Contact
