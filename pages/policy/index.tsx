import { Layout } from '@/components/organisms/Layout'
import Seo from '@/components/seo'
import { PolicyContent } from '@/components/pages/PolicyContent'

const Policy = () => {
  const meta = {
    title: 'Privacy Policy',
    description: 'プライバシーポリシー',
    path: 'policy',
  }

  return (
    <Layout path={meta.path} disableLoading>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <PolicyContent />
    </Layout>
  )
}

export default Policy