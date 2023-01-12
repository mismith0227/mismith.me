import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { PolicyContainer } from '@/components/pages/PolicyContainer'
import { client } from '@/libs/client'
import { PhotoCategory } from '@/types/PhotoCategory'
import { GetStaticProps, NextPage } from 'next'

type Props = {
  photoCategory: PhotoCategory[]
}

const Policy: NextPage<Props> = ({ photoCategory }) => {
  const meta = {
    title: 'Privacy Policy | mismith.me',
    description: 'プライバシーポリシー',
    path: 'policy',
  }

  return (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <PolicyContainer />
    </Layout>
  )
}

export default Policy

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
