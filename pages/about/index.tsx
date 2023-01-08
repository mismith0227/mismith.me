import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { AboutContent } from '@/components/pages/AboutContent'
import { client } from '@/libs/client'
import { PhotoCategory } from '@/types/PhotoCategory'
import { GetStaticProps, NextPage } from 'next'

type Props = {
  readonly photoCategory: PhotoCategory[]
}

const About: NextPage<Props> = ({ photoCategory }) => {
  const meta = {
    title: 'About | mismith.me',
    description: 'プライバシーポリシー',
    path: 'about',
  }

  return (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <AboutContent />
    </Layout>
  )
}

export default About

export const getStaticProps: GetStaticProps = async () => {
  const category = await client.get({
    endpoint: 'photo-category',
  })

  return {
    props: {
      photoCategory: category.contents,
    },
  }
}
