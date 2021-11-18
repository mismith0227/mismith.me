import { Layout } from '../../components/organisms/Layout'
import Seo from '../../components/seo'
import { ThanksContent } from '../../components/organisms/ThanksContent'

const Thanks = () => {
  const meta = {
    title: 'Thanks',
    description: 'お問い合わせありがとうございました',
    path: 'contact',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <ThanksContent />
    </Layout>
  )
}

export default Thanks
