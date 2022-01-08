import { Layout } from '@/components/organisms/Layout'
import Seo from '@/components/seo'
import { AboutContent } from '@/components/pages/AboutContent'

const About = () => {
  const meta = {
    title: 'Privacy Policy',
    description: 'プライバシーポリシー',
    path: 'about',
  }

  return (
    <Layout path={meta.path} disableLoading>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <AboutContent />
    </Layout>
  )
}

export default About
