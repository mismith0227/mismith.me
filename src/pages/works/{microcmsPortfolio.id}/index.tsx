import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../../../components/organisms/Layout'
import Seo from '../../../components/seo'
import { WorkDetailContent } from '../../../components/organisms/WorkDetailContent'

const WorkDetailPage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  const meta = {
    path: 'work',
  }

  return data.microcmsPortfolio ? (
    <Layout path={meta.path}>
      <Seo
        title={data.microcmsPortfolio.title ? data.microcmsPortfolio.title : ''}
        description={
          data.microcmsPortfolio.description
            ? data.microcmsPortfolio.description
            : ''
        }
      />
      <WorkDetailContent data={data.microcmsPortfolio} />
    </Layout>
  ) : (
    <div>noc ontent</div>
  )
}

export default WorkDetailPage

export const query = graphql`
  query($id: String!) {
    microcmsPortfolio(id: { eq: $id }) {
      id
      title
      body
      description
      thumbnail {
        height
        url
        width
      }
      tags
      productionDate
    }
  }
`
