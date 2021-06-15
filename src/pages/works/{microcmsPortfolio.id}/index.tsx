import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const WorkDetailPage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => (
  <Layout>
    <Seo title={data.microcmsPortfolio.title} />
    <h1>{data.microcmsPortfolio.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsPortfolio.body}`
      }}
    />
  </Layout>
)

export default WorkDetailPage

export const query = graphql`
  query($id: String!) {
    microcmsPortfolio(id: { eq: $id }) {
      id
      title
      body
    }
  }
`