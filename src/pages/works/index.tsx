import * as React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { Layout } from '../../components/organisms/Layout'
import Seo from '../../components/seo'

const WorksPage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => (
  <Layout>
    <Seo title="works" description="制作実績一覧です" />
    <h1>Hi people</h1>
    <ul>
      {data.allMicrocmsPortfolio.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={`/works/${node.id}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
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
