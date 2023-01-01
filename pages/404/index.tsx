import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { NotFoundContent } from '@/components/pages/NotFoundContent'
import { client } from '@/libs/client'
import { PhotoCategory } from '@/types/PhotoCategory'
import { GetStaticProps, NextPage } from 'next'

type Props = {
  readonly photoCategory: PhotoCategory[]
}

const NotFoundPage: NextPage<Props> = ({ photoCategory }) => {
  const meta = {
    title: '404: Not found',
    description: '404 not found',
    path: '404',
  }

  return (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <NotFoundContent />
    </Layout>
  )
}

export default NotFoundPage

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
