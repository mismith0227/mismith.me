import { GetStaticProps, NextPage } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { WorkContent } from '@/components/pages/WorkContent'
import { Seo } from '@/components/organisms/Seo'
import { Portfolio } from '@/types/Portfolio'

type Props = {
  readonly portfolio: Portfolio[]
}

const WorksPage: NextPage<Props> = ({ portfolio }) => {
  const meta = {
    title: 'Works',
    description: '制作実績一覧です',
    path: 'works',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <WorkContent data={portfolio} />
    </Layout>
  )
}
export default WorksPage

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'portfolio' })

  return {
    props: {
      portfolio: data.contents,
    },
  }
}
