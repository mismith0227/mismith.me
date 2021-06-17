import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../../components/organisms/Layout'
import { WorkContent } from '../../components/organisms/WorkContent'
import Seo from '../../components/seo'

const WorksPage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => (
  <Layout>
    <Seo title="works" description="制作実績一覧です" />
    <WorkContent data={data.allMicrocmsPortfolio.edges} />
  </Layout>
)

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
