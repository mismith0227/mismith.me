import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../../components/organisms/Layout'
import { WorkContent } from '../../components/organisms/WorkContent'
import Seo from '../../components/seo'

const WorksPage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  const meta = {
    title: 'Works',
    description: '制作実績一覧です',
    path: 'works',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} />
      <WorkContent data={data.allMicrocmsPortfolio.edges} />
    </Layout>
  )
}
export default WorksPage

export const query = graphql`
  query {
    allMicrocmsPortfolio {
      edges {
        node {
          id
          title
          body
          productionDate
          tags
          thumbnail {
            height
            url
            width
          }
          description
        }
      }
    }
  }
`
