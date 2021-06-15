import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const WorkDetailPage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  return data.microcmsPortfolio ? (
    <Layout>
      <Seo
        title={data.microcmsPortfolio.title ? data.microcmsPortfolio.title : ""}
        description={
          data.microcmsPortfolio.description
            ? data.microcmsPortfolio.description
            : ""
        }
      />
      <h1>{data.microcmsPortfolio.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.microcmsPortfolio.body}`
        }}
      />
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
