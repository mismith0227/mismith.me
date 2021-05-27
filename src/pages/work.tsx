import React from 'react'
import { graphql } from 'gatsby'
import Meta from '../components/parts/Meta'
import Layout from '../components/Layout'
import WorkContent from '../components/organisms/WorkContent'

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const BlogIndex = props => {
  return (
    <Layout>
      <Meta
        pageTitle="Work"
        pageDescription="制作実績一覧"
        pageLocation="/work/"
      />
      <WorkContent posts={props.data.allContentfulBlogPost.edges} />
    </Layout>
  )
}

export default BlogIndex
