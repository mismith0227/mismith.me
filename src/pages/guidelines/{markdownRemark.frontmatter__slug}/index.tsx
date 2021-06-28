import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../../../components/organisms/Layout'
import Seo from '../../../components/seo'
import { GuideLineContent } from '../../../components/organisms/GuideLineContent'

const GuideLinesDetailPage: React.FC<PageProps<GatsbyTypes.Query>> = ({
  data,
}) => {
  const meta = {
    path: 'guidelines',
  }

  return data.markdownRemark ? (
    <Layout path={meta.path} disableLoading>
      {data.markdownRemark.frontmatter && (
        <Seo
          title={
            data.markdownRemark.frontmatter.title
              ? data.markdownRemark.frontmatter.title
              : ''
          }
          description={
            data.markdownRemark.frontmatter.title
              ? data.markdownRemark.frontmatter.title
              : ''
          }
        />
      )}

      <GuideLineContent
        listData={data.allMarkdownRemark.edges}
        contentData={data.markdownRemark}
      />
    </Layout>
  ) : (
    <div>no content</div>
  )
}

export default GuideLinesDetailPage

export const query = graphql`
  query($id: String!) {
    allMarkdownRemark(sort: { fields: frontmatter___order }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
          html
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
