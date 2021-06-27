import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../../../components/organisms/Layout'
import Seo from '../../../components/seo'
import { WorkDetailContent } from '../../../components/organisms/WorkDetailContent'

const WorkDetailPage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  const meta = {
    path: 'works',
  }

  return data.markdownRemark ? (
    <Layout path={meta.path}>
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

      {data.markdownRemark.html && (
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      )}
    </Layout>
  ) : (
    <div>no content</div>
  )
}

export default WorkDetailPage

export const query = graphql`
  query($id: String!) {
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
