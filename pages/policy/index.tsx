import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { PolicyContent } from '@/components/pages/PolicyContent'
import { client } from '@/libs/client'
import { PhotoCategory } from '@/types/PhotoCategory'
import { GetStaticProps, NextPage } from 'next'

type Props = {
  readonly photoCategory: PhotoCategory[]
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
      <PolicyContent />
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
