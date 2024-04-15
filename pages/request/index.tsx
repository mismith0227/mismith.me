import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { RequestContainer } from '@/components/pages/RequestContainer'
import { client } from '@/libs/client'
import { PhotoCategory } from '@/types/PhotoCategory'
import { GetStaticProps, NextPage } from 'next'

type Props = {
  photoCategory: PhotoCategory[]
}

const Policy: NextPage<Props> = ({ photoCategory }) => {
  const meta = {
    title: 'Request | mismith',
    description: 'ご依頼',
    path: 'request',
  }

  return (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <RequestContainer />
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
