import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { AboutContainer } from '@/components/pages/AboutContainer'
import { client } from '@/libs/client'
import { PhotoCategory } from '@/types/PhotoCategory'
import { GetStaticProps, NextPage } from 'next'

type Props = {
  photoCategory: PhotoCategory[]
}

const About: NextPage<Props> = ({ photoCategory }) => {
  const meta = {
    title: 'About | mismith.me',
    description: 'プライバシーポリシー',
    path: 'about',
  }

  const now = new Date()

  console.log(now)

  return (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <AboutContainer />
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
