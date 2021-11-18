import { client } from '@/libs/client'
import {
  InferGetStaticPropsType,
  GetStaticProps,
  NextPage,
  GetStaticPaths,
} from 'next'
import { Layout } from '@/components/organisms/Layout'
import Seo from '@/components/seo'
import { WorkDetailContent } from '@/components/organisms/WorkDetailContent'
import { Portfolio } from '@/types/Portfolio'
import { toStringId } from '@/utils/toStringId'

type StaticProps = {
  portfolio: Portfolio
  draftKey?: string
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const WorkDetailPage: NextPage<PageProps> = (props) => {
  const { portfolio, draftKey } = props

  const meta = {
    path: 'works',
  }

  return portfolio ? (
    <Layout path={meta.path}>
      <Seo
        title={portfolio.title ? portfolio.title : ''}
        description={portfolio.description ? portfolio.description : ''}
        path={meta.path}
      />
      <WorkDetailContent data={portfolio} />
    </Layout>
  ) : (
    <div>no content</div>
  )
}

export default WorkDetailPage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  }
}

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const { params, previewData } = context
  if (!params?.id) {
    throw new Error('Error: ID not found')
  }

  try {
    const id = toStringId(params.id)
    const data = await client.get({ endpoint: 'portfolio', contentId: id })

    return {
      props: {
        portfolio: data,
      },
    }
  } catch (e) {
    return { notFound: true }
  }
}
